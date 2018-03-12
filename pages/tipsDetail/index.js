// pages/writeTips/index.js
import * as Model from '../model/tips.js'
// import * as QQMapWX from '../../utils/qqmap-wx-jssdk.min.js'
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk = new QQMapWX({
  key: 'QAOBZ-KDN3G-XGOQ5-INCWN-LBW4S-XIBVJ'
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    note: 11,
    id: '',
    title: '',
    content: '',
    img: '/images/tips.png',
    date: '2018.02.15',
    time: '15:12',
    week: '星期三',
    address: '公仆路 武进区 常州市 江苏省 中国',
    weeks: ['日', '一', '二', '三', '四', '五', '六']
  },
  titleInput: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  contentInput: function (e) {
    this.setData({
      content: e.detail.value
    })
  },
  chooseImg: function () {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths)
        this.setData({
          img: tempFilePaths
        })
      }
    })
  },
  editTips: function () {
    wx.uploadFile({
      url: getApp().data.servsers + '/tips/edit',
      filePath: this.data.img[0],
      name: 'file', header: { "Content-Type": "multipart/form-data" },
      formData: {
        //和服务器约定的token, 一般也可以放在header中
        sessionId: wx.getStorageSync('sessionId'),
        id: this.data.note,
        note: this.data.note,
        title: this.data.title,
        content: this.data.content,
        address: this.data.address,
      },
      success: res => {
        // wx.redirectTo({
        //   url: '/pages/tips/index?id=' + this.data.note,
        // })
        wx.navigateBack();
      },
      fail: res => {
        console.log(res)
        wx.showToast({
          title: '服务器错误',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date();
    console.log(options)
    this.setData({
      note: options.note,
      date: date.getFullYear() + '.' + date.getMonth() + '.' + date.getDate(),
      time: date.getHours() + '.' + date.getMinutes(),
      week: '星期' + this.data.weeks[date.getDay()]
    })
    Model.tipsGetDetail({
      id: options.id
    }).then(res => {
      this.setData({
        id: res.data.id,
        title: res.data.title,
        content: res.data.content,
        img: getApp().data.imgPath +  res.data.img,
        date: res.data.date,
        time: res.data.time,
      })
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
    // wx.getLocation({
    //   type: 'wgs84',
    //   success: function (res) {
    //     var latitude = res.latitude
    //     var longitude = res.longitude
    //     console.log(latitude, longitude)
    //     console.log(qqmapsdk)
    //     qqmapsdk.reverseGeocoder({
    //       location: {
    //         latitude: latitude,
    //         longitude: longitude
    //       },
    //       success: function (res) {
    //         console.log(res);
    //       },
    //       fail: function (res) {
    //         console.log(res);
    //       },
    //       complete: function (res) {
    //         console.log(res);
    //       }
    //     });
    //   }
    // })
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