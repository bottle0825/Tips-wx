// pages/find/index.js
const app = getApp()
import * as Model from '../model/said.js'
import * as Model_u from '../model/user.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    username: '',
    head: '',
    followFlag: false,
    list: []
  },
  follow: function () {
    Model_u.userFollowing({
      id: this.data.id
    }).then(res => {
      if(res.status == 1){
        this.setData({
          followFlag: true
        })
      }
    })
  },
  followed: function () {
    Model_u.userUnFollow({
      id: this.data.id
    }).then(res => {
      if (res.status == 1) {
        this.setData({
          followFlag: false
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    Model.saidGetMsgOther({
      id: id
    }).then(res => {
      if(res.status == 1){
        this.setData({
          id: id,
          username: res.data.username,
          head: res.data.head,
          followFlag: res.data.followFlag,
          list: res.data.list
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