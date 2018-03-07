
//封装微信请求

export default (url, data = {}) => {
  //服务器地址--域名
  const promise = new Promise((resolve, reject) => {
    wx.getStorage({
      key: 'sessionId',
      success: (res) => {
        var token = res.data;
        data.sessionId = token;
        wx.request({
          url: getApp().data.servsers + url,//请求地址
          method: 'POST',
          data: data,
          success(res) {
            resolve(res.data);
          },
          fail(err) {
            getApp().setData({
              reqFlag: true
            })
            wx.showToast({
              title: '网络错误',
              icon: 'fail',
              duration: 2000
            })
            reject(err);
          }
        })
      }
    })
  })
  return promise;
}