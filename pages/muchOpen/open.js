// pages/muchOpen/open.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        selected_floor:"一楼，二楼，三楼，四楼，五楼,一楼，二楼，三楼，四楼，五楼",
        selected_region:"图书室，公共区域"
    },
    /**
     * 跳转选择楼层
     */
    linkSelectedFloor:function(){
        wx.navigateTo({
            url: '/pages/selected_floor/floor',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
    },
    /**
     * 跳转到选择区域
     */
    linkSelectedRegion:function(){
        wx.navigateTo({
            url: '/pages/selected_region/region',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
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