Page({

    /**
     * 页面的初始数据
     */
    data: {
        status_imgUrl: "/pages/icon/not.png",
        lists: [{
            title: "一楼",
            subLists: [{
                id: 0,
                name: "公共区域",
                status: false
            }, {
                id: 1,
                name: "厕所",
                status: true
            }, {
                id: 2,
                name: "图书室",
                status: false
            }, {
                id: 3,
                name: "阅览室",
                status: true
            }, {
                id: 4,
                name: "厕所",
                status: true
            }, {
                id: 5,
                name: "图书室",
                status: false
            }, {
                id: 6,
                name: "阅览室",
                status: false
            }, {
                id: 7,
                name: "厕所",
                status: false
            }]
        }, {
            title: "二楼",
            subLists: [{
                id: 8,
                name: "公共区域",
                status: false
            }, {
                id: 9,
                name: "厕所",
                status: false
            }, {
                id: 10,
                name: "图书室",
                status: false
            }, {
                id: 11,
                name: "阅览室",
                status: false
            }, {
                id: 12,
                name: "厕所",
                status: false
            }, {
                id: 13,
                name: "图书室",
                status: false
            }, {
                id: 14,
                name: "阅览室",
                status: false
            }, {
                id: 15,
                name: "厕所",
                status: false
            }]
        }, {
            title: "三楼",
            subLists: [{
                id: 8,
                name: "公共区域",
                status: false
            }, {
                id: 9,
                name: "厕所",
                status: false
            }, {
                id: 10,
                name: "图书室",
                status: false
            }, {
                id: 11,
                name: "阅览室",
                status: false
            }, {
                id: 12,
                name: "厕所",
                status: false
            }, {
                id: 13,
                name: "图书室",
                status: false
            }, {
                id: 14,
                name: "阅览室",
                status: false
            }, {
                id: 15,
                name: "厕所",
                status: false
            }]
        }]
    },
    /**
     * 点击多开
     */
    muchOpen:function(){
        // wx.showModal({
        //     title: '',
        //     content: '确认打开此区域的照明灯？',
        //     showCancel: true,
        //     cancelText: '取消',
        //     cancelColor: '#666666',
        //     confirmText: '确认',
        //     confirmColor: '#404B81',
        //     success: function(res) {},
        //     fail: function(res) {},
        //     complete: function(res) {},
        // })
        wx.navigateTo({
            url: '/pages/muchOpen/open',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
    },
    /**
    * 点击多关
    */
    muchClose: function () {
        // wx.showModal({
        //     title: '',
        //     content: '确认关闭此区域的照明灯？',
        //     showCancel: true,
        //     cancelText: '取消',
        //     cancelColor: '#666666',
        //     confirmText: '确认',
        //     confirmColor: '#404B81',
        //     success: function (res) { },
        //     fail: function (res) { },
        //     complete: function (res) { },
        // })
        wx.navigateTo({
            url: '/pages/muchClose/close',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
    },
    /**
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
     * 点击单个开关灯
     */
    clickSwitchLight: function(e) {
        console.log(e);
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