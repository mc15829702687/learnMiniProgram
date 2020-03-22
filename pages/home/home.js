// // pages/home/home.js
// const {
//   globalData
// } = getApp();
// const name = globalData.name;
// const pwd = globalData.pwd;

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleUserInfo(event) {
    console.log(event.detail.userInfo);
  },
  /**
   * 生命周期回调—监听页面加载
   */
  onLoad() {
    console.log('onLoad');
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success: (res) => {
    //     console.log('res: ', res);
    //   }
    // })
  },

  /**
   * 生命周期回调—监听页面显示
   */
  onShow() {
    console.log('onShow');
  },

  /**
   * 生命周期回调—监听页面初次渲染完成
   */
  onReady() {
    console.log('onReady');
  },

  /**
   * 生命周期回调—监听页面隐藏
   */
  onHide() {
    console.log('onHide');
  },

  /**
   * 生命周期回调—监听页面卸载
   */
  onUnload() {
    console.log('onHonUnloadide');
  },

  /**
   * 监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log('onPullDownRefresh');
  },

  /**
  * 页面上拉触底事件的处理函数
  */
  onReachBottom() {
    console.log('onReachBottom');
  }
})