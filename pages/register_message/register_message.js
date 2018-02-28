// pages/register_message/register_message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    code: '',
    username: '',
    pwd: '',
    repwd: '',
  },
  Register: function () {
    if (getApp().data.reqFlag){
      getApp().data.reqFlag = false;
      this.registerFinish();
    }
  },
  registerFinish: function () {
    if(this.data.pwd === this.data.repwd){
      console.log(this.data)
      wx.getStorage({
        key: 'codeKey',
        success: (res) => {
          wx.request({
            url: getApp().data.servsers + '/api/login/register_mobile',
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded',
              'open_token': res.data
            },
            data: {
              code: this.data.code,
              mobile: this.data.phone,
              name: this.data.username,
              password: this.data.pwd,
              password_confirm: this.data.repwd
            },
            success: function (res) {
              getApp().data.reqFlag = true;
              if (res.data.status == 1) {
                wx.setStorage({
                  key: 'key',
                  data: res.data.data,
                  success: (res) => {
                    wx.switchTab({
                      url: '/pages/home/home',
                    })
                  }
                })
              } else {
                wx.showToast({
                  title: res.data.msg,
                  icon: 'none',
                  duration: 2000
                })
              }
            },
            fail: function () {
              getApp().data.reqFlag = true;
              wx.showToast({
                title: '服务器连接失败',
                icon: 'none',
                duration: 2000
              })
            }
          })
        }
      })
    }else{
      wx.showToast({
        title: '两次密码输入不一致',
        icon: 'none',
        duration: 2000
      })
    }
  },
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  pwdInput: function (e) {
    this.setData({
      pwd: e.detail.value
    })
  },
  repwdInput: function (e) {
    this.setData({
      repwd: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '信息完善',
    })
    this.setData({
      code: options.code,
      phone: options.phone
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})