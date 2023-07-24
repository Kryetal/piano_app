let whitekeys=[
    {scale:40,voice:'c1',bg:'#409EFF'},
    {scale:42,voice:'d1',bg:'#409EFF'},
    {scale:44,voice:'e1',bg:'#409EFF'},
    {scale:45,voice:'f1',bg:'#409EFF'},
    {scale:47,voice:'g1',bg:'#409EFF'},
    {scale:49,voice:'a1',bg:'#409EFF'},
    {scale:51,voice:'b1',bg:'#409EFF'},
    {scale:52,voice:'c2',bg:'#5CB87A'},
    {scale:54,voice:'d2',bg:'#5CB87A'},
    {scale:56,voice:'e2',bg:'#5CB87A'},
    {scale:57,voice:'f2',bg:'#5CB87A'},
    {scale:59,voice:'g2',bg:'#5CB87A'},
    {scale:61,voice:'a2',bg:'#5CB87A'},
    {scale:62,voice:'b2',bg:'#5CB87A'},
  ];
  let blackkeys=[
      {scale:41,left:'36rpx',voice:'#c1'},
      {scale:43,left:'88rpx',voice:'#d1'},
      {scale:46,left:'196rpx',voice:'#f1'},
      {scale:48,left:'250rpx',voice:'#g1'},
      {scale:50,left:'303rpx',voice:'#a1'},
      {scale:53,left:'411rpx',voice:'#c2'},
      {scale:55,left:'464rpx',voice:'#d2'},
      {scale:58,left:'571rpx',voice:'#f2'},
      {scale:60,left:'625rpx',voice:'#g2'},
      {scale:62,left:'678rpx',voice:'#a2'},
  ]
  Page({
    data:{
      whitekeys:whitekeys,
      blackkeys:blackkeys,
      mykey:0,
    },
    playmusic(e){
      this.setData({
          mykey : e.currentTarget.dataset.scale
        })
        console.log(this.data.mykey)
      let audio = wx.createInnerAudioContext();
      audio.src="/assets/music/"+this.data.mykey+'.mp3';
      audio.play();
      this.selectComponent('#stepOne').compareKeys()
    }
  })
  