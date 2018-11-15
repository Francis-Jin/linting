// pages/add_plan/plan.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        selected_floor: "一楼，二楼，三楼，四楼，五楼,一楼，二楼，三楼，四楼，五楼",
        selected_region: "图书室，公共区域",
        selected_weeked: "星期一，星期二，星期三",
        selected_open_time: "",
        selected_close_time: ""
    },
    /**
     * 选择开灯时间
     */
    selectedOpenTime: function(e) {
        this.setData({
            selected_open_time: e.detail.value
        })
    },
    /**
     * 选择楼层
     */
    linkSelectedFloor: function() {
        wx.navigateTo({
            url: '/pages/selected_floor/floor',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
    },
    /**
     * 选择区域
     */
    linkSelectedRegion: function() {
        wx.navigateTo({
            url: '/pages/selected_region/region',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
    },
    /**
     * 选择工作日
     */
    linkSelectedWeek: function () {
        wx.navigateTo({
            url: '/pages/selected_week/week',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        })
    },
    /**
     * 选择关灯时间
     */
    selectedCloseTime: function(e) {
        this.setData({
            selected_close_time: e.detail.value
        })
    },
    /**
     * linkTimingPlan
     * 跳转到定时计划
     */
    linkTimingPlan:function(){
        wx.navigateTo({
            url: '/pages/Timing_plan/timing_plan',
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