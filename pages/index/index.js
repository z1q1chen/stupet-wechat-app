// index.js
// 获取应用实例

const util = require('../../utils/util.js');

const app = getApp()

Page({
  data: {
    autoplay: false,
    loading: 0,
    sysHeight: 0,
  },
  getIndexData: function () {
    // let that = this;
    // util.request(api.IndexUrl).then(function (res) {
    //   if (res.errno === 0) {
    //     that.setData({
    //       floorGoods: res.data.categoryList,
    //       banner: res.data.banner,
    //       channel: res.data.channel,
    //       notice: res.data.notice,
    //       loading: 1,
    //     });
    //     let cartGoodsCount = '';
    //     if (res.data.cartCount == 0) {
    //       wx.removeTabBarBadge({
    //         index: 2,
    //       })
    //     } else {
    //       cartGoodsCount = res.data.cartCount + '';
    //       wx.setTabBarBadge({
    //         index: 2,
    //         text: cartGoodsCount
    //       })
    //     }
    //   }
    // });
    this.setData({
      loading: 1,
    })
  },
  onLoad: function (options) {
    
  },
  onShow: function () {
    this.getIndexData();
    let info = wx.getSystemInfoSync();
    let sysHeight = info.windowHeight - 100;
    this.setData({
      sysHeight: sysHeight,
      autoplay: true
    });
  }
})