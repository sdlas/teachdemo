// pages/thirdclass/thirdclass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flex_directionarr: ['row', 'row-reverse', 'column','column-reverse'],
    flex_direction:['row'],
    flex_wraparr:['nowrap','wrap','wrap-reverse'],
    flex_wrap:['nowrap'],
    justify_contentarr:['flex-start','flex-end','center','space-between','space-around'],
    justify_content:['flex-start'],
    align_itemsarr:['flex-start','flex-end','center','baseline','stretch'],
    align_items:['flex-start'],
    align_contentarr:['stretch','flex-start','flex-end','center','space-between','space-around'],
    align_content:[],
    iswrap:false,
    hidden0:true,
    hidden1:true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  //改变flex-direction
  changedirection:function(e){
    var that = this
    that.setData({
      flex_direction:that.data.flex_directionarr[parseInt(e.currentTarget.dataset.id)]
    })
  },
  //改变flex-wrap
  changewrap:function(e){
    var that = this
    that.setData({
      flex_wrap:that.data.flex_wraparr[parseInt(e.currentTarget.dataset.id)]
    })
  },
  //改变justify-content
  changejustify:function(e){
    var that = this
    that.setData({
      justify_content: that.data.justify_contentarr[parseInt(e.currentTarget.dataset.id)]
    })
  },
  //改变align-items
  changealign:function(e){
    var that = this
    that.setData({
      align_items: that.data.align_itemsarr[parseInt(e.currentTarget.dataset.id)]
    })
  },
  //改变align-content
  changealigncontent:function(e){
    var that = this
    that.setData({
      align_content: that.data.align_contentarr[parseInt(e.currentTarget.dataset.id)]
    })
  },
  //显示隐藏内容
  showhidden:function(e){
    var that = this
    switch(parseInt(e.currentTarget.dataset.id)){
      case 0:
        that.setData({
          hidden0:!that.data.hidden0
        })
      break;
      case 1:
        that.setData({
          hidden1:!that.data.hidden1
        })
      break;
    } 
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