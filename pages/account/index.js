// pages/account/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    budget: 3000,
    in: 200.00,
    out: 500.00,
    month: 3,
    active: 'day',
    dayIn: 10.00,
    dayOut: 10.00,
    monthIn: 10.00,
    monthOut: 10.00,
    monthLeft: 0.00,
    yearIn: 10.00,
    yearOut: 10,
    yearLeft: 0,
    daylist: [{
      id: 0,
      iconimg: '/images/tips.png',
      icon: '工资',
      type: true,
      money: 200
    }, {
      id: 0,
      iconimg: '/images/tips.png',
      icon: '吃饭',
      type: false,
      money: 200
    }],
    monthlist: [{
      date: 4,
      in: 100,
      out: 20
    }],
    yearlist: [{
      month: 3,
      in: 100,
      out: 20,
      left: 80
    }]
  },
  dayClick: function () {
    this.setData({
      active: 'day'
    })
  },
  monthClick: function () {
    this.setData({
      active: 'month'
    })
  },
  yearClick: function () {
    this.setData({
      active: 'year'
    })
  },
  openAdd: function () {
    wx.navigateTo({
      url: '/pages/addAccount/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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