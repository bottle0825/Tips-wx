// pages/account/index.js
import * as Model from '../model/account.js'

var list_out = [{
  id: 0,
  img: '/icons/clothes.png',
  txt: '服饰'
}, {
  id: 1,
  img: '/icons/food.png',
  txt: '食物'
}, {
  id: 2,
  img: '/icons/house.png',
  txt: '住宿'
}, {
  id: 3,
  img: '/icons/car.png',
  txt: '出行'
}, {
  id: 4,
  img: '/icons/game.png',
  txt: '娱乐'
}, {
  id: 5,
  img: '/icons/other.png',
  txt: '其他'
}]
var list_in = [{
  id: 0,
  img: '/icons/money.png',
  txt: '工资'
}, {
  id: 1,
  img: '/icons/cite.png',
  txt: '奖金'
}, {
  id: 2,
  img: '/icons/red.png',
  txt: '红包'
}, {
  id: 3,
  img: '/icons/other.png',
  txt: '其他'
}]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: [list_out,list_in],
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
    Model.accountGetDayMsg().then(res => {
      if(res.status == 1){
        this.setData({
          dayIn: res.data.dayIn,
          dayOut: res.data.dayOut,
          daylist: res.data.list
        })
      }
      console.log(this.data.typeList[0][1].img)
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