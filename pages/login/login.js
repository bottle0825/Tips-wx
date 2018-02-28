// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 60,
    pflag: true,
    flag: true,
    phone: '',
    check: '',
    username: '',
    pwd: ''
  }, 
  changePhone: function () {
    this.setData({
      flag: true
    })
  },
  changeWord: function () {
    this.setData({
      flag: false
    })
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
  phoneInput: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  checkInput: function (e) {
    this.setData({
      check: e.detail.value
    })
  },
  Check: function () {
    wx.request({
      url: getApp().data.servsers + '/api/login/send_code',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        mobile: this.data.phone,
        codeType: 1
      }, 
      success: (res) => {
        if (res.data.status == 1) {
          this.setData({
            pflag: false,
            time: 60
          })
          var timer;
          clearInterval(timer);
          timer = setInterval(() => {
            if (this.data.time > 0) {
              this.setData({
                time: this.data.time - 1
              })
            } else {
              this.setData({
                pflag: true,
                time: 60
              })
              clearInterval(timer);
            }
          }, 1000)
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
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
        wx.showToast({
          title: '服务器连接失败',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  loginAction_word: function () {
    wx.request({
      url: getApp().data.servsers + '/api/login/login',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: {
        mobile: this.data.username,
        password: this.data.pwd
      },
      success: function (res) {
        if(res.data.status == 1){
          wx.setStorage({
            key: "key",
            data: res.data.data
          })
          wx.switchTab({
            url: '/pages/home/home',
          })
        }else{
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },
  loginAction_phone: function () {
    wx.request({
      url: getApp().data.servsers + '/api/login/mobile_login',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        mobile: this.data.phone,
        mobile_code: this.data.check
      },
      success: function (res) {
        if(res.data.status == 1){
          wx.setStorage({
            key: "key",
            data: res.data.data
          })
          wx.switchTab({
            url: '/pages/home/home',
          })
        }else{
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '登录',
    })
  },

  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady: function () {
  
  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {
  
  // },

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
  openForget: function () {
    wx.showToast({
      title: '暂未开发',
      icon: 'none'
    })
    // wx.navigateTo({
    //   url: '/pages/pwd_find/pwd_find',
    // })
  },
  openRegister: function () {
    wx.redirectTo({
      url: '/pages/register/register',
    })
  }
})