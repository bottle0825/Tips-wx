// pages/basketChoose/index.js
import * as Model from '../model/basket.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    oldId: 0,
  },
  recoverClick: function () {
    Model.basketRecover({
      id: this.data.id,
      oldId: this.data.oldId
    }).then(res => {
      if(res.status == 1){
        wx.navigateBack()
      }
    })
  },
  deleteClick: function () {
    wx.showModal({
      title: '警告',
      content: '永久删除手账将无法恢复，请确认是否删除！',
      confirmText: '确定',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          Model.basketDelete({
            id: this.data.id
          }).then(res => {
            if (res.status == 1) {
              wx.navigateBack()
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
      oldId: options.oldId
    })
    console.log(this.data)
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