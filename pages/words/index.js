// pages/words/index.js
import * as Model from '../model/word.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    wordlist: [],
    sentencelist: []
  },
  wordClick: function () {
    this.setData({
      active: 0,
    })
  },
  sentenceClick: function () {
    this.setData({
      active: 1
    })
  },
  addWord: function () {
    wx.navigateTo({
      url: '/pages/addWord/index?type=0',
    })
  },
  addSentence: function () {
    wx.navigateTo({
      url: '/pages/addWord/index?type=1',
    })
  },
  beihui: function (e) {
    Model.wordChangeStatus({
      id: e.currentTarget.dataset.id
    }).then(res => {
      if(res.status == 1){
        this.onLoad()
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Model.wordGetMsg().then(res => {
      if(res.status == 1){
        this.setData({
          wordlist: res.data.wordlist,
          sentencelist: res.data.sentencelist
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