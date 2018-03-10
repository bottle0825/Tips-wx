// pages/home/index.js
import * as Model from '../model/note.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    touch_end: 0,
    touch_start: 0,
    list: [],
  },
  addNote: function () {
    wx.navigateTo({
      url: '/pages/add_note/index',
    })
  }, 
  deleteNote : function (id) {
    wx.showModal({
      title: '警告',
      content: '删除手账本，手账将无法恢复，请确认是否删除！',
      confirmText: '确定',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          Model.noteDelete({
            id: id
          }).then(res => {
            if(res.status == 1){
              this.onLoad();
            } else {
              console.log(res.msg);
            }
          })
        }
      }
    })
  },
  openBooks: function (id) {
    wx.navigateTo({
      url: '/pages/tips/index?id=' + id,
    })
  },
  clickBooks: function (e) {
    console.log(e.currentTarget.dataset.id)
    var touchTime = this.data.touch_end - this.data.touch_start;
    console.log(touchTime);
    if (touchTime > 350){
      this.deleteNote(e.currentTarget.dataset.id);
    } else {
      this.openBooks(e.currentTarget.dataset.id);
    }
  },
  //按下事件开始  
  mytouchstart: function (e) {
    this.setData({
      touch_start: e.timeStamp
    })
    console.log(e.timeStamp + '- touch-start')
  },
  //按下事件结束  
  mytouchend: function (e) {
    this.setData({
      touch_end: e.timeStamp
    })
    console.log(e.timeStamp + '- touch-end')
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Model.noteGetMsg().then(res => {
      console.log(res)
      if(res.status == 1){
        this.setData({
          list: res.data
        })
      }
    });
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