// pages/Line_tester/LineTester.js
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
        }],
        selected_num: 0,
        all_selected: false,
        tab_val: 0,
        selected_floor: "",
        selected_region: "",
        textarea_num: 0,
        showBig: true, //点击上传图片查看大图盒子是否显示
        avatarUrl: null,
        menuTitle: "",
        menuValLists: [],
        IsShowTextarea:false,
    },
    /**
     * 点击测试按钮
     */
    testerFn: function() {
        wx.showModal({
            title: '',
            content: '确定测试所选区域吗？',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#999',
            confirmText: '确定',
            confirmColor: '#404B81',
            success: function(res) {
                // code...
            },
        })
    },
    /**
     * 点击提交按钮
     */
    deleteFn: function() {
        wx.showModal({
            title: '',
            content: '确定提交吗？',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#999',
            confirmText: '确定',
            confirmColor: '#404B81',
            success: function(ress) {
                // code...
                if (ress.confirm) {
                    // 进行一次判断，判断选择的是否都测试过了，
                    // 如果还有没有测试完就有一个提示；
                    wx.showModal({
                        title: '',
                        content: '线路123还未进行测试',
                        showCancel: true,
                        cancelText: '取消',
                        cancelColor: '#999',
                        confirmText: '确定',
                        confirmColor: '#404B81',
                        success: function(ress) {
                            // code...

                        },
                    })
                }

            },
        })
    },
    /**
     * tab选择
     */
    lineRecord: function(e) {
        this.setData({
            tab_val: 0
        })
    },
    /**
     * tab选择
     */
    submitRecord: function(e) {
        this.setData({
            tab_val: 1
        })
    },
    /**
     * 选择楼层
     */
    slectedFloor: function(e) {
        console.log(e);
        var that = this;
        var currentStatu = e.currentTarget.dataset.statu;
        that.setData({
            IsShowTextarea:true
        })
        that.setData({
            selectId: e.currentTarget.id,
            menuTitle: "选择楼层",
            menuValLists: ["一楼", "二楼", "三楼", "四楼", "五楼", "六楼", "七楼", "八楼", "九楼", "十楼"],
        });
        that.showHideMenu(currentStatu);
    },
    /**
     * 选择区域
     */
    slectedRegion: function(e) {
        console.log(e);
        var that = this;
        that.setData({
            IsShowTextarea: true
        })
        var currentStatu = e.currentTarget.dataset.statu;
        that.setData({
            selectId: e.currentTarget.id,
            menuTitle: "选择楼层",
            menuValLists: ["图书馆", "测所"],
        });
        that.showHideMenu(currentStatu);
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
     * 上传图片
     */
    uploadeImg: function() {
        var that = this;
        wx.chooseImage({
            count: 6, // 设置最多可以选择的图片张数，默认9,如果我们设置了多张,那么接收时//就不在是单个变量了,
            sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
            sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
            success: function(res) {
                // 获取成功,将获取到的地址赋值给临时变量
                var tempFilePaths = res.tempFilePaths;
                that.setData({
                    //将临时变量赋值给已经在data中定义好的变量
                    avatarUrl: tempFilePaths
                });
            },
        });
    },
    /**
     * 删除上传的图片
     */
    deleteImg: function(e) {
        var that = this;
        var _index = e.target.dataset.index;
        var avatarUrl = that.data.avatarUrl.splice(_index, 1);
        this.setData({
            avatarUrl: that.data.avatarUrl
        });
    },
    /**
     * 显示查看上传的大图
     */
    lookThisImg: function(e) {
        var that = this;
        this.setData({
            showBig: !that.data.showBig,
            setThisImgUrl: e.currentTarget.dataset.url
        })
    },
    /**
     * 隐藏查看上传的大图
     */
    hideThisShow: function() {
        var that = this;
        that.setData({
            showBig: !that.data.showBig
        })
    },
    /**
     * 点击菜单列表内容
     */
    clickMenuThisInit: function(e) {
        console.log(e);
        var that = this;
        var currentStatu = e.target.dataset.statu;
        var selectedId = e.target.id;
        console.log(selectedId);
        that.setData({
            currentData: e.target.dataset.index, //标注选中样式
        });
        if (selectedId == "floor") {
            that.setData({
                selected_floor: e.target.dataset.content,
            });
            setTimeout(function () {
                that.setData({
                    IsShowTextarea: false
                });
            }, 200);
        }
        if (selectedId == "region") {
            that.setData({
                selected_region: e.target.dataset.content,
            });
            setTimeout(function(){
                that.setData({
                    IsShowTextarea: false
                });
            },200);
        }
        // code....
        this.setData({
            currentData: "", //标注一个都没选中样式
        });
        that.showHideMenu(currentStatu);
    },
    /**
     * 点击取消按钮隐藏菜单
     */
    hideMenusCancel: function(e) {
        var that = this;
        that.setData({
            IsShowTextarea: false
        })
        var currentStatu = e.currentTarget.dataset.statu;
        that.showHideMenu(currentStatu);
    },
    /**
     * 弹出菜单和隐藏菜单
     */
    showHideMenu: function(currentStatu) {
        /* 动画部分 */
        // 第1步：创建动画实例 
        var animation = wx.createAnimation({
            duration: 200, //动画时长
            timingFunction: "linear", //线性
            delay: 0 //0则不延迟
        });
        // 第2步：这个动画实例赋给当前的动画实例
        this.animation = animation;

        // 第3步：执行第一组动画：Y轴偏移240px后(盒子高度是240px)，停
        animation.translateY(240).step();

        // 第4步：导出动画对象赋给数据对象储存
        this.setData({
            animationData: animation.export()
        })
        // 第5步：设置定时器到指定时候后，执行第二组动画
        setTimeout(function() {
            // 执行第二组动画：Y轴不偏移，停
            animation.translateY(0).step()
            // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
            this.setData({
                animationData: animation
            })
            //关闭抽屉
            if (currentStatu == "close") {
                this.setData({
                    showModalStatus: false
                });
            }
        }.bind(this), 200)
        // 显示抽屉
        if (currentStatu == "open") {
            this.setData({
                showModalStatus: true
            });
        }
    },
    /**
     * 点击阴影部分隐藏
     */
    clickYinchang: function(e) {
        var that = this;
        var currentStatu = e.target.dataset.statu;
        this.showHideMenu(currentStatu);
        that.setData({
            IsShowTextarea: false
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