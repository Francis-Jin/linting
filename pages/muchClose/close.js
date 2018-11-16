// pages/muchClose/close.js
Page({

    /**
     * 页面的初始数据
     */
    // {
    //     floor: "一楼",
    //     region: "图书馆",
    //     checked: false,
    //     openCloseStatus: true,
    // }, 
    data: {
        lists: [{
            floor: "一楼",
            region: "图书馆",
            checked: false,
            openCloseStatus: true,
        }, {
            floor: "一楼",
            region: "图书馆",
            checked: false,
            openCloseStatus: true,
        }, {
            floor: "一楼",
            region: "图书馆",
            checked: false,
            openCloseStatus: true,
        }, {
            floor: "一楼",
            region: "图书馆",
            checked: false,
            openCloseStatus: true,
        }, {
            floor: "一楼",
            region: "图书馆",
            checked: false,
            openCloseStatus: true,
        }, {
            floor: "一楼",
            region: "图书馆",
            checked: false,
            openCloseStatus: true,
        }, {
            floor: "一楼",
            region: "图书馆",
            checked: false,
            openCloseStatus: true,
        }, {
            floor: "一楼",
            region: "图书馆",
            checked: false,
            openCloseStatus: true,
        }],
        selected_num: 0,
        not_data_txt: "暂无多关区域",
    },
    /**
     * 点击当前个开关
     */
    switchChange: function(e) {
        console.log(e);
        var that = this;
        var E = e;
        var id = e.target.dataset.id;
        var lists = that.data.lists;
        wx.showModal({
            title: '提示',
            content: '确认关闭吗？',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#666',
            confirmText: '确认',
            confirmColor: '#404B81',
            success: function(res) {
                if (res.confirm) {
                    lists.splice(id, 1);
                    that.setData({
                        lists: lists,
                        listsLen: lists.length
                    })
                };
                if (res.cancel) {
                    lists[id].openCloseStatus = true;
                    that.setData({
                        lists:lists
                    })
                }
            }
        })
    },
    /**
     * 
     */
    closeRegionFn:function(){
        wx.showModal({
            title: '',
            content: '确定要关闭此区域照明吗？',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#999',
            confirmText: '确定',
            confirmColor: '#404B81',
            success: function (res) {
                // code...
            },
        })
    },
    /**
     * 点击单选按钮
     */
    clickSelected: function(e) {
        var that = this;
        var id = e.currentTarget.id;
        var lists = that.data.lists;
        var len = 0;
        for (var i = 0; i < lists.length; i++) {
            if (i == id) {
                lists[i].checked = !lists[i].checked;
            }
        }
        for (let i = 0; i < lists.length; i++) {
            if (lists[i].checked == true) {
                len++;
            }
        }
        if (len == lists.length) {
            that.setData({
                all_selected: true
            })
        } else {
            that.setData({
                all_selected: false
            })
        }
        that.setData({
            lists: lists,
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
        if (status) {
            for (var i = 0; i < lists.length; i++) {
                lists[i].checked = true;
                len += 1;
            }
        } else {
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
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var listsLen = this.data.lists.length;
        this.setData({
            listsLen: listsLen
        })
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