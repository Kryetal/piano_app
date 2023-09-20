const app = getApp()
Page({
  data: {
  
  },
  torekey(){
    wx.navigateTo({
      url: '../rekey/index',
    })
  },
  toremajor(){
    wx.navigateTo({
      url: '../remajor/index',
    })
  }

})
