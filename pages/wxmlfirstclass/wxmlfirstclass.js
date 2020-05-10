// pages/wxmlfirstclass/wxmlfirstclass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fruitarr:['苹果','梨子','西瓜','香蕉','桃子'],
    planlistarr: [
      { 
        time: '2020年13月32日', 
        type: '口服', 
        numlist: [
                  { id: "1", name: '敌敌畏', num: '10t' }, 
                  { id: '2', name: '老鼠药', num: '3t' },
                  {id:'3',name:'bala',num:'xx'}
                 ], 
        method: '手机短信提醒' 
      },
      {
        time: '2020年13月32日',
        type: '口服',
        numlist: [
          { id: "1", name: '敌敌畏', num: '10t' },
          { id: '2', name: '老鼠药', num: '3t' }
        ],
        method: '手机短信提醒'
      },
      {
        time: '2020年13月32日',
        type: '口服',
        numlist: [
          { id: "1", name: '敌敌畏', num: '10t' },
          { id: '2', name: '老鼠药', num: '3t' }
        ],
        method: '手机短信提醒'
      },
      {
        time: '2020年13月32日',
        type: '口服',
        numlist: [
          { id: "1", name: '敌敌畏', num: '10t' },
          { id: '2', name: '老鼠药', num: '3t' }
        ],
        method: '手机短信提醒'
      },
    ],
    colorarr:['red','green','yellow','blue','black','yellowgreen','brown','grey'],
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