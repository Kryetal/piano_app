let VirtualkeyMapList=[28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]
let keynamelist=['.C','.C+','.D','.D+','.E','.F','.F+','.G','.G+','.A','.A+','.B','C','C+','D','D+','E','F','F+','G','G+','A','A+','B',"C'","C'+","D'","D'+","E'","F'","F'+","G'","G'+","A'","A'+","B'"]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    VirtualkeyMapList:VirtualkeyMapList,
    keynamelist:keynamelist,
    tone:0,
    score_op:0,
    score_tp:0,
    total_op:0,
    total_tp:0,
    iconflag:1,
    play_standard_audio_flag:true,
    myvoice:''
  },
  returnhome(){
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },
  nextQuestion(){
    this.setData({
      tone:0,
    })
  },
  carrybit(){
    if(this.data.score_op==10)
    this.setData({
      score_op:0,
      score_tp:this.data.score_tp+1
    })
    if(this.data.total_op==10)
    this.setData({
      total_op:0,
      total_tp:this.data.total_tp+1
    })
  },
  keycompare(e){
    console.log(e.detail)
    let audio = wx.createInnerAudioContext();
      audio.src="/assets/audio/"+e.detail+'.mp3';
      audio.play();
    if(this.data.tone!=0){
      if(e.detail==VirtualkeyMapList[this.data.tone]){
            this.setData({
              score_op:this.data.score_op+1,
              total_op:this.data.total_op+1,
              iconflag:2,
              myvoice:this.data.keynamelist[this.data.tone]
            })
            this.carrybit()
            this.nextQuestion()
      }
      else{
              this.setData({
                total_op:this.data.total_op+1,
                iconflag:3,
                myvoice:this.data.keynamelist[this.data.tone]
              })
              this.carrybit()
              this.nextQuestion() 
      }
    }
  },
  playscale(){
    if(this.data.tone==0){
      this.setData({
          tone:Math.floor(Math.random() * 36),
          iconflag:1,
          myvoice:"?"
      })
      }
      let scale=VirtualkeyMapList[this.data.tone]
      // this.setData({questionKey:this.data.keysName[scale]})
      console.log(scale)
      let audio = wx.createInnerAudioContext();
      audio.src="/assets/audio/"+scale+'.mp3';
      audio.play();
  },
  playstandardscale(){
      let audio = wx.createInnerAudioContext();
      audio.src="/assets/audio/49.mp3";
      this.selectComponent('#keyboard').playstandardaudio()
      audio.play();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

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