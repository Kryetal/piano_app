let VirtualkeyMapList=[28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]
let majorlist=['C','D','E','F','G',".A",".B"]
let majorList=[
  ['C1','C2','C3','C4','C5','C6','C7'],
  ['D1','D2','D3','D4','D5','D6','D7'],
  ['E1','E2','E3','E4','E5','E6','E7'],
  ['F1','F2','F3','F4','F5','F6','F7'],
  ['G1','G2','G3','G4','G5','G6','G7'],
  ['A1','A2','A3','A4','A5','A6','A7'],
  ['B1','B2','B3','B4','B5','B6','B7'],
]
let vocalList=['do','re','mi','fa','sol','la','si']
Page({
  /**
   * 页面的初始数据
   */
  data: {
    VirtualkeyMapList:VirtualkeyMapList,
    majorlist:majorlist,
    majorList:majorList,
    vocalList:vocalList,
    tone:-1,
    score_op:0,
    score_tp:0,
    total_op:0,
    total_tp:0,
    iconflag:1,
    play_standard_audio_flag:true,
    scaleindex:0,  //选调和音符
    majorindex:0,
    major:'',
    vocalindex:0,  //选唱名
    vocal:'do',
    majorshow:'C',
    playedmajor:''
  },
  addvocal(){
    if(this.data.vocalindex<6)
    {
      this.setData({
        vocalindex:this.data.vocalindex+1
      })
    }
    else{
      this.setData({
        vocalindex:0
      })
    }
    this.setData({
      vocal:this.data.vocalList[this.data.vocalindex]
    })
  },
  subvocal(){
    if(this.data.vocalindex>0)
    {
      this.setData({
        vocalindex:this.data.vocalindex-1
      })
    }
    else{
      this.setData({
        vocalindex:6
      })
    }
    this.setData({
      vocal:this.data.vocalList[this.data.vocalindex]
    })
  },
  addscale(){
    if(this.data.scaleindex<6)
    {
      this.setData({
        scaleindex:this.data.scaleindex+1
      })
    }
    else{
      this.setData({
        scaleindex:0
      })
    }
  },
  subscale(){
    if(this.data.scaleindex>0)
    {
      this.setData({
        scaleindex:this.data.scaleindex-1
      })
    }
    else{
      this.setData({
        scaleindex:6
      })
    }
  },
  addmajorindex(){
    if(this.data.majorindex<6)
    {
      this.setData({
        majorindex:this.data.majorindex+1,
      })
    }
    else{
      this.setData({
        majorindex:0
      })
    }
    this.setData({
      majorshow:this.data.majorlist[this.data.majorindex]
    })
  },
  submajorindex(){
    if(this.data.majorindex>0)
    {
      this.setData({
        majorindex:this.data.majorindex-1,
      })
    }
    else{
      this.setData({
        majorindex:6
      })
    }
    this.setData({
      majorshow:this.data.majorlist[this.data.majorindex]
    })
  },
  returnhome(){
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },
  nextQuestion(){
    this.setData({
      tone:-1
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
  majorcompare(e){
    console.log(e.detail[1])
    if(this.data.tone==-1)
    {
      let audio = wx.createInnerAudioContext();
      audio.src="/assets/audio/"+e.detail[0]+'.mp3';
      audio.play();
    }
    if(this.data.tone!=-1){
      if(e.detail[1]==majorlist[this.data.tone]){
            this.setData({
              score_op:this.data.score_op+1,
              total_op:this.data.total_op+1,
              playedmajor:majorlist[this.data.tone],
              iconflag:2
            })
            this.carrybit()
            this.nextQuestion()
      }
      else{
              this.setData({
                total_op:this.data.total_op+1,
                playedmajor:majorlist[this.data.tone],
                iconflag:3
              })
              this.carrybit()
              this.nextQuestion() 
      }
    }
  },
  playscale(){
    if(this.data.tone==-1){
      this.setData({
          tone:Math.floor(Math.random() * 7),
          iconflag:1,
          playedmajor:'?'
      })
      }
      let major=majorList[this.data.tone][this.data.vocalindex]
      console.log(major)
      let audio = wx.createInnerAudioContext();
      audio.src="/assets/audio/remajor/"+major+'.mp3';
      audio.play();
  },
  playstandardscale(){
      let audio = wx.createInnerAudioContext();
      this.setData({
        major:this.data.majorList[this.data.majorindex][this.data.scaleindex]
      })
      console.log(this.data.major);
      audio.src="/assets/audio/remajor/"+this.data.major+'.mp3';
      audio.play();
  },
  onLoad(options) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
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