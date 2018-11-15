// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phoneVal: ""
    },
    blurPhone: function(e) {
        var phone = e.detail.value;
        if (!(/^1[34578]\d{9}$/.test(phone))) {
            wx.showToast({
                title: '手机号有误',
                icon: 'success',
                duration: 2000
            });
            this.setData({
                phoneVal: ""
            })
        }
    },
    /**
     * 点击提交
     */
    submit:function(){
        wx.redirectTo({
            url: '/pages/index/index',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
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