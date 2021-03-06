var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        tab_val: 0, // 顶部tab切换

        //线路信息记录
        menuValLists: [{
                id: 1,
                value: "一楼"
            },
            {
                id: 2,
                value: "二楼"
            },
            {
                id: 3,
                value: "三楼"
            },
            {
                id: 4,
                value: "四楼"
            },
            {
                id: 5,
                value: "五楼"
            },
            {
                id: 6,
                value: "六楼"
            },
            {
                id: 7,
                value: "七楼"
            },
            {
                id: 8,
                value: "八楼"
            },
            {
                id: 9,
                value: "九楼"
            },
            {
                id: 10,
                value: "十楼"
            },

        ],
        selected_floor: "一楼", //楼层选择 默认值
        floor_id: 1, // 楼层选择 ID
        floor_index: 0, //  默认第一楼是选中状态  
        controlName: '', //主控制器名称
        lineName: '', // 线路
        regionName: '', //  区域
        lampNumber: '', //   灯数量
        remarksText: '', //    备注  
        textLength: 0, //     备注 字长
        selected_region: "",
        showBig: true, //点击上传图片查看大图盒子是否显示
        avatarUrl: null, // 存放图片的变量
        IsShowTextarea: false, //  底部是否显示备注

        //记录提交
        lists: [], //获取到的数据列表
        listsid: [], //存放id的数组
        selected_num: 0, //选择了几条
        all_selected: false, //全选的状态
        pages: 1,
        lastPage: false

    },

    /**
     * tab选择 线路信息记录
     */
    lineRecord: function() {
        this.setData({
            tab_val: 0
        })
    },

    //获取记录

    getlistfunction: function(pages) {
        var that = this;
        if (!that.data.lastPage) {
            wx.request({
                url: app.data.baseAPI + '/project/test/page',
                method: 'post',
                data: {
                    page: pages,
                    status: "1"
                },
                header: {
                    "X-ACCESS-TOKEN": app.data.accessToken,
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: res => {
                    console.log(res);
                    app.loginCheck(res)

                    if (res.data.code == 200) {

                        that.setData({
                            lastPage:res.data.data.last
                        })
                        var beforList = that.data.lists;
                        var newList = res.data.data.content;

                        for (var i = 0; i < newList.length; i++) {
                            beforList.push(newList[i]);
                        };

                        that.setData({
                            lists: beforList
                        });


                    } else if (res.data.code == 500) {
                        wx.showModal({
                            title: '提示',
                            content: '系统出错',
                            showCancel: false,
                        })
                    }
                }
            })
        } else {
            wx.showToast({
                title: '数据加载完啦',
                duration: 1400,
                icon: 'none'
            })
        }
    },

    /**
     * tab选择   获取 记录
     */
    submitRecord: function(e) {
        this.setData({
            tab_val: 1
        });

        this.setData({
            pages: 1
        });
        var pages = this.data.pages;
        this.getlistfunction(pages)

    },

    /**
     * 线路信息记录 部分
     * 
     * 选择楼层
     */
    slectedFloor: function(e) {
        var that = this;
        var currentStatu = e.currentTarget.dataset.statu;
        that.setData({
            IsShowTextarea: true
        })
        that.showHideMenu(currentStatu);
    },


    //主控制器名称
    inputControl: function(e) {
        this.setData({
            controlName: e.detail.value
        })
    },
    //线路名称
    inputLine: function(e) {
        this.setData({
            lineName: e.detail.value
        })
    },
    //区域
    inputRegion: function(e) {
        this.setData({
            regionName: e.detail.value
        })
    },
    //照明灯数量
    inputLamp: function(e) {
        this.setData({
            lampNumber: e.detail.value
        })
    },
    //备注
    inputRemarks: function(e) {
        var abc = e.detail.value;
        this.setData({
            remarksText: e.detail.value,
            textLength: abc.length
        });
    },
    /**
     * 上传图片
     */
    uploadeImg: function() {
        var that = this;
        wx.chooseImage({
            count: 10, // 设置最多可以选择的图片张数，默认9,如果我们设置了多张,那么接收时//就不在是单个变量了,
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
     * 点击菜单列表内容  楼层
     */
    clickMenuThisInit: function(e) {
        var that = this;
        var selectedId = e.target.id;
        var currentStatu = e.target.dataset.statu;

        that.setData({
            floor_index: e.currentTarget.dataset.activeindex,
            floor_id: e.currentTarget.id,
            selected_floor: e.currentTarget.dataset.content
        });

        that.showHideMenu(currentStatu); //关闭

        if (selectedId == "floor") {
            that.setData({
                selected_floor: e.target.dataset.content,
            });
            setTimeout(function() {
                that.setData({
                    IsShowTextarea: false
                });
            }, 200);
        }
        if (selectedId == "region") {
            that.setData({
                selected_region: e.target.dataset.content,
            });
            setTimeout(function() {
                that.setData({
                    IsShowTextarea: false
                });
            }, 200);
        }

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
     *  线路信息记录 提交 1
     */
    lineSubmit: function() {
        console.log("提交了");
        var that = this;
        var fid = that.data.floor_id;
        var cName = that.data.controlName;
        var lName = that.data.lineName;
        var rName = that.data.regionName;
        var lpName = that.data.lampNumber;
        var rText = that.data.remarksText;

        var data = that.data.avatarUrl;

        if (data) {
            var imgData = data.join(',');
        };
        if (fid == '' || fid == null || fid == undefined) {
            wx.showToast({
                title: '请选择楼层',
                duration: 1500,
                icon: 'none'
            });
            return false;

        } else if (cName == '' || cName == null || cName == undefined) {
            wx.showToast({
                title: '请输入主控制器名称',
                duration: 1500,
                icon: 'none'
            });
            return false;

        } else if (lName == '' || lName == null || lName == undefined) {
            wx.showToast({
                title: '请输入线路名称',
                duration: 1500,
                icon: 'none'
            })

        } else if (rName == '' || rName == null || rName == undefined) {
            wx.showToast({
                title: '请输入区域名称',
                duration: 1500,
                icon: 'none'
            });
            return false;

        } else if (lpName == '' || lpName == null || lpName == undefined) {
            wx.showToast({
                title: '请输入灯的数量',
                duration: 1500,
                icon: 'none'
            });
            return false;

        };

        wx.request({
            url: app.data.baseAPI + 'project/save?delFlag=' + 0,
            method: 'post',
            data: {
                floor: fid,
                controller: cName,
                circuit: lName,
                area: rName,
                lampNum: lpName,
                remark: rText,
                circuitImg: imgData,
                status: 1
            },
            header: {
                "X-ACCESS-TOKEN": app.data.accessToken,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: res => {
                console.log(res);
                if (res.data.code == 401) {
                    wx.showToast({
                        title: '登录失效',
                        icon: 'none',
                        duration: 1500
                    });
                    setTimeout(function() {
                        wx.redirectTo({
                            url: '/pages/login/login',
                        })
                    }, 1000);

                } else if (res.data.code == 300) {
                    wx.showToast({
                        title: '该条线路已存在',
                        icon: 'none',
                        duration: 2000
                    });

                } else if (res.data.code == 200) {
                    wx.showToast({
                        title: '提交成功',
                        icon: 'success',
                        duration: 2000
                    });
                    setTimeout(function() {
                        that.setData({
                            selected_floor: "一楼", //楼层选择 默认值
                            floor_id: 1, // 楼层选择 ID
                            floor_index: 0, //  默认第一楼是选中状态  
                            controlName: '', //主控制器名称
                            lineName: '', // 线路
                            regionName: '', //  区域
                            lampNumber: '', //   灯数量
                            remarksText: '', //    备注  
                            textLength: 0, //     备注 字长
                            avatarUrl: ''
                        })
                    }, 1500)
                }
            }
        })
    },




    /**
     *  记录提交部分
     */


    //开灯 关灯 测试函数
    singFunction: function(statused, singid, showCont) {
        wx.request({
            url: app.data.baseAPI + 'project/test/open/' + singid,
            method: 'post',
            header: {
                "X-ACCESS-TOKEN": app.data.accessToken,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: res => {
                if (res.data.code == 401) {
                    wx.showToast({
                        title: '登录失效',
                        icon: 'none',
                        duration: 1500
                    });
                    setTimeout(function() {
                        wx.redirectTo({
                            url: '/pages/login/login',
                        })
                    }, 1000);

                } else if (res.data.code == 300) {
                    wx.showToast({
                        title: '该条线路已存在',
                        icon: 'none',
                        duration: 2000
                    });

                } else if (res.data.code == 200) {
                    wx.showModal({
                        title: '提示',
                        content: showCont,
                        showCancel: false
                    })
                }
            }
        })
    },
    //单个测试
    switchChange: function(e) {
        var that = this;
        var singid = e.currentTarget.dataset.singleid;
        var statused = e.detail.value;

        if (statused) { //开灯
            var showCont = '测试开灯，请检查相关区域灯是否亮起'
            that.singFunction(statused, singid, showCont)
        } else { //关灯
            var showCont = '测试关灯，请检查相关区域灯是否熄灭'
            that.singFunction(statused, singid, showCont)
        };
    },


    /**
     * 点击单选按钮 删除指定的id函数
     */
    removeValue: function(arr, val) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                arr.splice(i, 1)
            }
        }
        return arr;
    },
    /**
     * 点击单选按钮
     */
    clickSelected: function(e) {
        var that = this;
        var sid = e.currentTarget.id;
        var lists = that.data.lists;
        var _index = e.currentTarget.dataset.index;
        var sidArry = that.data.listsid;
        var len = 0;

        for (let i = 0; i < lists.length; i++) {
            if (i == _index) {

                lists[i].checked = !lists[i].checked;

                if (lists[i].checked) {
                    sidArry.push(sid);
                    that.setData({
                        listsid: sidArry
                    })
                } else {
                    sidArry = that.removeValue(sidArry, sid);
                    that.setData({
                        listsid: sidArry
                    })

                }
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

        var listsidrry = [];

        if (status) {
            for (var i = 0; i < lists.length; i++) {
                lists[i].checked = true;
                len += 1;
                listsidrry.push(lists[i].id);
            };

        } else {
            for (var i = 0; i < lists.length; i++) {
                lists[i].checked = false;
                len = 0;
                listsidrry = [];
            }
        }
        that.setData({
            lists: lists,
            selected_num: len,
            listsid: listsidrry
        });

    },

    /**
     * 提交 2
     */
    deleteFn: function() {
        var that = this;
        var sidarr = that.data.listsid;

        if (sidarr.length > 0) {
            var sidstring = sidarr.join(",")

            wx.showModal({
                title: '',
                content: '确定提交吗？',
                showCancel: true,
                cancelText: '取消',
                cancelColor: '#000',
                confirmText: '确定',
                confirmColor: '#404B81',
                success: function(ress) {
                    wx.request({
                        url: app.data.baseAPI + '/project/submit/' + sidstring,
                        method: 'post',
                        header: {
                            "X-ACCESS-TOKEN": app.data.accessToken,
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: res => {
                            console.log(res);
                            if (res.data.code == 401) {
                                wx.showToast({
                                    title: '登录失效',
                                    icon: 'none',
                                    duration: 1500
                                });
                                setTimeout(function() {
                                    wx.redirectTo({
                                        url: '/pages/login/login',
                                    })
                                }, 1000);

                            } else if (res.data.code == 300) {
                                wx.showToast({
                                    title: '该条线路已存在',
                                    icon: 'none',
                                    duration: 1500
                                });

                            } else if (res.data.code == 200) {
                                wx.showModal({
                                    title: '提示',
                                    content: '记录提交成功',
                                    showCancel: false,
                                });

                                //重置
                                that.setData({
                                    selected_num: 0,
                                    all_selected: false,
                                })

                                // that.getlistFUNC(); //重新获取
                                that.setData({
                                    pages: 1
                                });
                                var pages = that.data.pages;
                                that.getlistfunction(pages)

                            }
                        }
                    })
                },
            })
        } else {
            wx.showToast({
                title: '还未选择记录',
                icon: 'none',
                duration: 1000,

            })
        }



    },



    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {},

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

        var that = this;
        var status = that.data.tab_val;

        if (status == 1) {

            that.setData({
                pages: that.data.pages + 1
            });
            var pages = that.data.pages;
            that.getlistfunction(pages)

        }

    },


    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})