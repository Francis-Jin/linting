// pages/login/login.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phoneVal: ""
    },

    bindinputValue: function(e) {
        this.setData({
            phoneVal: e.detail.value
        })
    },

    /**
     * 点击提交
     */
    submit: function() {
        var that = this
        var phone = that.data.phoneVal;
        if (!(/^1[34578]\d{9}$/.test(phone))) {
            wx.showToast({
                title: '手机号有误',
                icon: 'success',
                duration: 2000
            });
            that.setData({
                phoneVal: ""
            })
        } else {
            // 13520255390
            console.log(that.data.phoneVal);
            wx.request({
                url: app.data.baseAPI + app.data.loginURL + that.data.phoneVal,
                method: 'post',
                header: {
                    "X-ACCESS-TOKEN": null
                },
                success: res => {
                    console.log(res);
                    if (res.data.code == 302) {
                        wx.showToast({
                            title: '用户不存在',
                            icon: 'success',
                            duration: 2000
                        });
                        that.setData({
                            phoneVal: ""
                        })
                    } else if (res.data.code == 200 && res.data.data != null) {
                        var infoData = res.data.data;
                        app.data.accessToken = infoData.accessToken;

                        wx.showToast({
                            title: '登录成功！',
                            icon: 'success',
                            duration: 1500
                        });
                            if (infoData.useType == 1) {
                                // wx.redirectTo({
                                //     url: '/pages/Line_tester/LineTester',
                                // })
                            } else if (infoData.useType == 2) {
                                wx.redirectTo({
                                    url: '/pages/index/index',
                                })
                            } else if (infoData.useType == 3) {
                                wx.redirectTo({
                                    url: '/pages/Line_tester/LineTester',
                                })
                            }
                        
                    }
                }
            })
        }

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})