 //app.js
App({
    data: {
        baseAPI: 'http://120.77.221.149:8181/',
        loginURL: 'user/get/mobile/',
        accessToken: '868958739885E801820465BF562F74D8'
    },
    //判断登录状态 每次向后台请求成功之后都要调用改方法，判断用户登录状态是否有效
    loginCheck: function (res) {
        
        var that = this
        if (res.data.code == 401 || res.data.code == 600) {
            wx.showModal({
                title: '提示',
                content: '登录失效，请重新登录',
                showCancel: false,
                success(res) {
                    if (res.confirm) {
                      wx.redirectTo({
                          url: '../login/login',
                      })
                    }
                }
            })
        }
    },
  onLaunch: function () {
      var that = this
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
   
    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null
  }
})