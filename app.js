//app.js
App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.cloud.init({
      env: 'test-yp8nv'
    })
  },
  globalData: {
    userInfo: null
  }
})