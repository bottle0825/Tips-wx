// pages/add_note/index.js
import * as Model from '../model/note.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: ''
  },
  noteInput: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  createNote: function () {
    Model.noteCreate({
      title: this.data.title
    }).then(res => {
      if(res.status == 1){
        wx.showToast({
          title: '手账创建成功',
        })
        wx.switchTab({
          url: '/pages/home/index',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '创建手账本',
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