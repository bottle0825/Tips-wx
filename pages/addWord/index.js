// pages/addWord/index.js
import * as Model from '../model/word.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chinese: '',
    english: '',
    type: 0,
  },
  englishInput: function (e) {
    this.setData({
      english: e.detail.value
    })
  },
  chineseInput: function (e) {
    this.setData({
      chinese: e.detail.value
    })
  },
  add: function () {
    Model.wordAdd({
      english: this.data.english,
      chinese: this.data.chinese,
      type: this.data.type
    }).then(res => {
      if(res.status == 1){
        wx.navigateBack()
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.type)
    this.setData({
      type: options.type
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