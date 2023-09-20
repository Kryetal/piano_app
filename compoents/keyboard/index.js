let whitekeys1=[
  {scale:28,voice:'.C',bg:'#FA8C35'},
  {scale:30,voice:'.D',bg:'#FA8C35'},
  {scale:32,voice:'.E',bg:'#FA8C35'},
  {scale:33,voice:'.F',bg:'#FA8C35'},
  {scale:35,voice:'.G',bg:'#FA8C35'},
  {scale:37,voice:'.A',bg:'#FA8C35'},
  {scale:39,voice:'.B',bg:'#FA8C35'},
  {scale:40,voice:'C',bg:'#409EFF'},
  {scale:42,voice:'D',bg:'#409EFF'},
  {scale:44,voice:'E',bg:'#409EFF'},
  {scale:45,voice:'F',bg:'#409EFF'},
  {scale:47,voice:'G',bg:'#409EFF'},
];
let whitekeys2=[
  {scale:49,voice:'A',bg:'#409EFF'},
]
let whitekeys3=[
  {scale:51,voice:'B',bg:'#409EFF'},
  {scale:52,voice:"C'",bg:'#5CB87A'},
  {scale:54,voice:"D'",bg:'#5CB87A'},
  {scale:56,voice:"E'",bg:'#5CB87A'},
  {scale:57,voice:"F'",bg:'#5CB87A'},
  {scale:59,voice:"G'",bg:'#5CB87A'},
  {scale:61,voice:"A'",bg:'#5CB87A'},
  {scale:63,voice:"B'",bg:'#5CB87A'},
]
let blackkeys=[
    {scale:29,left:'23rpx',voice:'.C+'},
    {scale:31,left:'64rpx',voice:'.D+'},
    {scale:34,left:'146rpx',voice:'.F+'},
    {scale:36,left:'186rpx',voice:'.G+'},
    {scale:38,left:'227rpx',voice:'.A+'},
    {scale:41,left:'308rpx',voice:"C+"},
    {scale:43,left:'348rpx',voice:'D+'},
    {scale:46,left:'429rpx',voice:'F+'},
    {scale:48,left:'471rpx',voice:'G+'},
    {scale:50,left:'511rpx',voice:'A+'},
    {scale:53,left:'592rpx',voice:"C'+"},
    {scale:55,left:'631rpx',voice:"D'+"},
    {scale:58,left:'713rpx',voice:"F'+"},
    {scale:60,left:'753rpx',voice:"G'+"},
    {scale:62,left:'795rpx',voice:"A'+"},
]

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    whitekeys1:whitekeys1,
    whitekeys2:whitekeys2,
    whitekeys3:whitekeys3,
    blackkeys:blackkeys,
    mykey:0,
    myvoice:'',
    play_standard_flag:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    playstandardaudio(){
      this.setData({play_standard_flag:true})
      setTimeout(()=>{
        this.setData({
          play_standard_flag:false
        })
      },1000)
    },
    playmusic(e){
      this.setData({
          mykey : e.currentTarget.dataset.scale,
          myvoice:e.currentTarget.dataset.voice
          
        })
      //console.log(this.data.myvoice)
      
      this.triggerEvent("compare",this.data.mykey)
      this.triggerEvent("comparemajor",[this.data.mykey,this.data.myvoice])
    }
  }
})
