// pages/jssecondclass/jssecondclass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backmethodarr:["飞机","高铁","轮船"],//返校方式集合
    backmethod:"点击选择你的返校方式",//返校方式
    formdata:[],//表单数据
    codecolorarr:["红色","蓝色","绿色"],//健康码颜色数组
    issubmit:false,//表单是否提交了
  },
  //表单提交函数
  formsubmit:function(e){
    //表单传进的所有参数都在e中
    var that = this
    //this是指当前对象，就是这个js文件,通过这个式子将that等同于this，后面就可以用that代替this行使它的功能
    //这样做的原因是，在一些网络请求中也有一个this指向这个网络请求，为了不混淆，用that来代替全局的this
    console.log(e)
    //console.log()函数在控制台打印信息，可以通过它在控制台看到数据的具体结构和内容
    var formdata = { "_valueinput": e.detail.value._valueinput, "_valueswitch": e.detail.value._valueswitch, "_valueradiogroup": e.detail.value._valueradiogroup, "_valuepicker": e.detail.value._valuepicker}
    that.setData({
      formdata:formdata,
      issubmit:true
    })
    //通过that.setData({})来改变data{}里面元素的值
    console.log(that.data.formdata)
  },
  //返校方式选择
  methodchange:function(e){
    var that = this
    console.log(e)
    that.setData({
      backmethod:that.data.backmethodarr[parseInt(e.detail.value)]
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