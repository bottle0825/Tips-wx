// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 60,
    flag: true,
    code: '',
    phone: '',
    check: '',
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
        codeType: 2
      },
      success: (res) => {
        if(res.data.status == 1){
          this.setData({
            flag: false,
            time: 60
          })
          var timer;
          clearInterval(timer);
          timer = setInterval(() => {
            if(this.data.time > 0){
              this.setData({
                flag: false,
                time: this.data.time - 1
              })
            }else{
              this.setData({
                flag: true,
                time: 60
              })
              clearInterval(timer);
            }
          },1000)
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          })
        }else{
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
  registerAction: function () {
    console.log(this.data)
    wx.request({
      url: getApp().data.servsers + '/api/login/register_verify',
      method: 'POST', 
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        code: this.data.code,
        mobile: this.data.phone,
        mobile_code: this.data.check,
      },
      success: (res) => {
        if (res.data.status == 1) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
          wx.navigateTo({
            url: '/pages/register_message/register_message?phone=' + this.data.phone + '&code=' + this.data.code,
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
  codeInput: function (e) {
    this.setData({
      code: e.detail.value
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '注册',
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
  openLogin: function () {
    wx.redirectTo({
      url: '/pages/login/login',
    })
  }
})