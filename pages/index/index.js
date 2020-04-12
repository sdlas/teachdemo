//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  //页面跳转
  jump:function(e){
    var that = this
    switch(parseInt(e.currentTarget.dataset.id)){
      case 1:
      wx.navigateTo({
        url: '../firstclass/firstclass',
      })
      break;
      case 2:
      wx.navigateTo({
        url: '../secondclass/secondclass',
      })
    }
  },
  onLoad: function () {
    var that = this
  },
})
