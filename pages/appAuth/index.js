const util = require('../../utils/util.js');
const api = require('../../config/api.js');
// pages/appAuth/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },

  getUserProfile: function () {
    let that = this;
    let code = '';
    wx.login({
      success: (res) => {
        code = res.code
      }
    })

    // 获取用户信息
    wx.getUserProfile({
      lang: 'zh_CN',
      desc: '用户登录',
      success: (res) => {
        let loginParams = {
          code: code,
          encryptedData: res.encryptedData,
          iv: res.iv,
          rawData: res.rawData,
          signature: res.signature
        };
        console.log(loginParams);
        that.postLogin(loginParams);
      },
      // 失败回调
      fail: () => {
        // 弹出错误
        App.showError('已拒绝小程序获取信息');
      }
    });
  },

  postLogin(info) {
    console.log(info);
    util.request(api.AuthLoginByWX, {
      info: info
    }, 'POST').then(function(res){
      console.log(res)
    })
    // util.request(api.AuthLoginByWeixin, {
    //   info: info
    // }, 'POST').then(function (res) {
    //   console.log(res);
    //   if (res.errno === 0) {
    //     wx.setStorageSync('userInfo', res.data.userInfo);
    //     wx.setStorageSync('token', res.data.token);
    //     app.globalData.userInfo = res.data.userInfo;
    //     app.globalData.token = res.data.token;
    //     let is_new = res.data.is_new; //服务器返回的数据；
    //     console.log(is_new);
    //     if (is_new == 0) {
    //       util.showErrorToast('欢迎回来！');
    //       wx.navigateBack();
    //     } else if (is_new == 1) {
    //       wx.navigateBack();
    //     }
    //   }
    // });
  },
  goBack: function () {
    wx.navigateBack();
  }


})