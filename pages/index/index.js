//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    wrapIndex: 2, // 默认展示页面
    tabList: [
      {
        title: "首页",
        icon: "icon-zhuye",
        linkTo: "pages/index/index"
      },
      {
        title: "发现",
        icon: "icon-sousuo",
        linkTo: "pages/index/index"
      },
      {
        title: "",
        icon: "icon-tianjia",
        linkTo: "pages/index/index"
      },
      {
        title: "信息",
        icon: "icon-xinxi",
        linkTo: "pages/index/index"
      },
      {
        title: "我的",
        icon: "icon-geren",
        linkTo: "pages/index/index"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    // console.log(e)
    // app.globalData.userInfo = e.detail.userInfo
    this.setData({
      // userInfo: e.detail.userInfo,
      // hasUserInfo: true
    })
  },
  onCheckTab: function (e) {
    //debugger 直接打断点
    let self = this,
      wrapIndex = e.detail.wrapIndex;
    self.setData({
      wrapIndex: wrapIndex // 控制当前页面内容展示组件
    });
  }
})
