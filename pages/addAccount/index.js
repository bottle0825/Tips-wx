// pages/addAccount/index.js
import * as Model from '../model/account.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: '/icons/food.png',
    type: '食物',
    num: 1,
    active: 0,
    money: 0,
    list_out: [{
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
    }],
    list_in: [{
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
  },
  inClick: function () {
    this.setData({
      active: 1
    })
  },
  outClick: function () {
    this.setData({
      active: 0
    })
  },
  moneyInput: function (e) {
    this.setData({
      money: e.detail.value
    })
  },
  chooseType: function (e) {
    var num = e.currentTarget.dataset.id;
    if(this.data.active == 1){
      this.setData({
        num: num,
        img: this.data.list_in[num].img,
        type: this.data.list_in[num].txt
      })
    }else{
      this.setData({
        num: num,
        img: this.data.list_out[num].img,
        type: this.data.list_out[num].txt
      })
    }
  },
  addAccount: function () {
    Model.accountAdd({
      in_out: this.data.active,
      type: this.data.num,
      money: this.data.money
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