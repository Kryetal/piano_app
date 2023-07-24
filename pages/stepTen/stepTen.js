// pages/stepTen/stepTen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:true,
    tone:0,
    flag:true,
    myKey:0,
    mp3Arr: {
      1: [4,6,8,9,11,13,15],
      2: [16,18,20,21,23,25,27],
      3: [28,30,32,33,35,37,39],
      4: [40,42,44,45,47,49,51],
      5: [52,54,56,57,59,61,63],
      6: [64,66,68,69,71,73,75],
      7: [76,78,80,81,83,85,87],
    },
    answer:{
      1:"低音3",
      2:"低音2",
      3:"低音1",
      4:"中央C",
      5:"高音1",
      6:"高音2",
      7:"高音3"
    }
  },
  startStep(){
    if(this.data.flag==false){
      return
    };
    this.setData({flag:false});
    if(this.data.tone==0){
      this.setData({tone:Math.floor(Math.random()*7)+1});
    };
    var currentIndex=0;
    var arr=this.data.mp3Arr[this.data.tone];
    if(arr.length>0){
      this.play(arr,currentIndex);
    };
  },
  play(arr,index){
    var audio=wx.createInnerAudioContext();
    audio.src=`/assets/music/${arr[index]}.mp3`;
    audio.play();
    audio.onEnded((res)=>{
      if(index<arr.length-1){
        index++;
        this.play(arr,index);
      }
    });
    if(index>=arr.length-1){
      this.setData({flag:true});
    };
  },

  getMyKey(event){
    this.setData({myKey:event.currentTarget.dataset.key});
    if(this.data.tone!=0){
      if(this.data.tone==this.data.myKey){
        wx.showToast({
          title: `正确，是${this.data.answer[this.data.tone]}组`,
          icon:"none",
          duration:3000
        })
      }else{
        wx.showToast({
          title: `错误，是${this.data.answer[this.data.tone]}组`,
          icon:"none",
          duration:3000
        })
      };
    };
    this.setData({
      'tone':0,
    });
  },
  // 获取图片的原始宽度和高度


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})