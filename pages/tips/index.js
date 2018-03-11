// pages/tips/index.js
import * as Model from '../model/tips.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    note: 0,
    count: 11,
    touch_end: 0,
    touch_start: 0,
    list: []
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
  clickTips: function (e) {
    var touchTime = this.data.touch_end - this.data.touch_start;
    console.log(touchTime);
    if (touchTime > 350) {
      this.deleteTips(e.currentTarget.dataset.id);
    } else {
      this.openTips(e.currentTarget.dataset.id);
    }
  },
  openTips: function (id) {
    var id = id;
    wx.navigateTo({
      url: '/pages/tipsDetail/index?id=' + id + '&note=' + this.data.note,
    })
  },
  deleteTips: function (id) {
    var id = id;
    wx.showModal({
      title: '警告',
      content: '手账删除后，可在废纸篓找回，请确认是否删除！',
      confirmText: '确定',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          Model.tipsDelete({
            note: this.data.note,
            id: id
          }).then(res => {
            if (res.status == 1) {
              this.onLoad({
                id: this.data.note
              });
            } else {
              console.log(res.msg);
            }
          })
        }
      }
    })
  },
  writeTips: function () {
    wx.navigateTo({
      url: '/pages/writeTips/index?id=' + this.data.note,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      note: options.id
    });
    Model.tipsGetMsg({
      id: options.id
    }).then(res => {
      if(res.status == 1){
        this.setData({
          count: res.data.length,
          list: res.data
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
    this.onLoad({
      id: this.data.note
    });
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