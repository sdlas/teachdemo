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
      break;
      case 3:
      wx.navigateTo({
        url: '../thirdclass/thirdclass',
      })
      break;
      case 4:
      wx.navigateTo({
        url: '../additionalcss/additionalcss',
      })
      break;
      case 5:
      wx.navigateTo({
        url: '../jsfirstclass/jsfirstclass',
      })
    }
  },
  onLoad: function () {
    var that = this
  },
})
