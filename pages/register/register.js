// pages/register/register.js
const app = getApp()
import * as Model from '../model/user.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    time: 60,
    flag: true,
    code: '',
    phone: '',
    check: '',
  },
  //请求短信验证码
  Check: function () {
    Model.userSendCode({
      mobile: this.data.phone,
    }).then((res) => {
      console.log(res)
      this.setData({
        flag: false,
        time: 60
      })
      var timer;
      clearInterval(timer);
      timer = setInterval(() => {
        if (this.data.time > 0) {
          this.setData({
            flag: false,
            time: this.data.time - 1
          })
        } else {
          this.setData({
            flag: true,
            time: 60
          })
          clearInterval(timer);
        }
      }, 1000)
      wx.showToast({
        title: '验证码已发送',
        icon: 'success',
        duration: 2000
      })
    })
  },
  //请求录入手机号
  registerAction: function () {
    Model.userSetPhone({
      mobile: this.data.phone,
      mobile_code: this.data.check,
    }).then((res) => {
      console.log(res)
            wx.switchTab({
        url: '/pages/home/index',
      })
    })
    
  },
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  checkInput: function (e) {
    this.setData({
      check: e.detail.value
    })
  },
  sendPersonal: function (userInfo) {
    console.log(userInfo)
    wx.login({
      success: (res) => {
        var code = res.code;
        if (code) {
          //发起网络请求
          wx.request({
            url: getApp().data.servsers + '/users/authorize/set_wxcode',
            method: 'POST',
            data: {
              nickName: this.data.userInfo.nickName,
              head: this.data.userInfo.avatarUrl,
              code: code
            },
            success: (res) => {
              wx.setStorage({
                key: 'sessionId',
                data: res.data.data.sessionId,
              })
            },
            fail: function () {
              wx.showToast({
                title: '服务器连接失败',
                icon: 'none',
                duration: 2000
              })
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '完善信息',
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      this.sendPersonal(app.globalData.userInfo)
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        this.sendPersonal(res.userInfo)
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          this.sendPersonal(res.userInfo)
        }
      })
    }
     
  },

  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady: function () {
  
  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  onShow: function () {
    
  },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide: function () {
  
  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload: function () {
  
  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function () {
  
  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function () {
  
  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function () {
  
  // },
  openLogin: function () {
    wx.redirectTo({
      url: '/pages/login/login',
    })
  }
})