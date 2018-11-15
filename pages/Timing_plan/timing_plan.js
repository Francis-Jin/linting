// pages/Timing_plan/timing_plan.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        lists: [{
            title: "星期一",
            floor: "一楼",
            region: "图书馆",
            open_time: "06:00",
            close_time: "21:00",
            checked: false,
        }, {
            title: "星期二",
            floor: "二楼",
            region: "教室",
            open_time: "06:00",
            close_time: "21:00",
            checked: false,
        }, {
            title: "星期二",
            floor: "二楼",
            region: "教室",
            open_time: "06:00",
            close_time: "21:00",
            checked: false,
            }, {
                title: "星期二",
                floor: "二楼",
                region: "教室",
                open_time: "06:00",
                close_time: "21:00",
                checked: false,
            }, {
                title: "星期二",
                floor: "二楼",
                region: "教室",
                open_time: "06:00",
                close_time: "21:00",
                checked: false,
            }, {
                title: "星期二",
                floor: "二楼",
                region: "教室",
                open_time: "06:00",
                close_time: "21:00",
                checked: false,
            }, {
                title: "星期二",
                floor: "二楼",
                region: "教室",
                open_time: "06:00",
                close_time: "21:00",
                checked: false,
            }],
        selected_num: 0,
        all_selected: false,
    },
    /**
     * 点击单选按钮
     */
    clickSelected: function(e) {
        var that = this;
        var id = e.currentTarget.id;
        var lists = that.data.lists;
        var len = 0;
        for(var i = 0 ; i < lists.length ; i++){
            if(i == id){
                lists[i].checked = !lists[i].checked;
            }
        }
        for (let i = 0; i < lists.length; i++){
            if(lists[i].checked == true){
               len++;
            }
        }
        if(len == lists.length){
            that.setData({
                all_selected:true
            })
        }else{
            that.setData({
                all_selected: false
            })
        }
        that.setData({
            lists:lists,
            selected_num: len
        });
    },
    /**
     * 点击全选按钮
     */
    checkboxAllChange: function(e) {
        var that = this;
        that.setData({
            all_selected: !that.data.all_selected
        });
        var status = that.data.all_selected;
        var lists = that.data.lists;
        var len = 0;
        if(status){
            for(var i = 0 ; i < lists.length ; i++){
                lists[i].checked = true;
                len +=1;
            }
        }else{
            for (var i = 0; i < lists.length; i++) {
                lists[i].checked = false;
                len = 0;
            }  
        }
        that.setData({
            lists: lists,
            selected_num: len
        });
    },
    /**
     * 跳转到定时计划
     */
    linkAddTimingPlan:function(){
        wx.navigateTo({
            url: '/pages/add_plan/plan',
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