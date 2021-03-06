// pages/basket/index.js
import * as Model from '../model/basket.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 4,
    list: []
  },
  openTips: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/basketChoose/index?id=' + e.currentTarget.dataset.id + '&oldId=' + e.currentTarget.dataset.oldid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Model.basketGetMsg().then(res => {
      if(res.status == 1){
        this.setData({
          list: res.data,
          count: res.data.length
        })
      }
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
    this.onLoad();
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