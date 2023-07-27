// components/stepOne/stepOne.js

let VirtualkeyMapList=[
    {
        1: 40,
        2: 42,
        3: 44,
        4: 45,
        5: 47,
        6: 49,
        7: 51,
    }, {
        1: 42,
        2: 44,
        3: 46,
        4: 47,
        5: 49,
        6: 51,
        7: 53,
    },{
        1: 44,
        2: 46,
        3: 48,
        4: 49,
        5: 51,
        6: 53,
        7: 55,
    },  {
        1: 45,
        2: 47,
        3: 49,
        4: 50,
        5: 52,
        6: 54,
        7: 56,
    },{
        1: 47,
        2: 49,
        3: 51,
        4: 52,
        5: 54,
        6: 56,
        7: 58,
    }, {
        1: 49,
        2: 51,
        3: 53,
        4: 54,
        5: 56,
        6: 58,
        7: 60,
    }, {
        1: 51,
        2: 53,
        3: 55,
        4: 56,
        5: 58,
        6: 60,
        7: 62,
    }
]

Component({
    options:{
        styleIsolation: 'shared',
    },
    /**
     * 组件的属性列表
     */
    properties: {
        mykey:{
            type:Number,
            value:{}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        VirtualkeyMapList:VirtualkeyMapList,
        selectList:{
            //默认为隐藏
            hidden:true,
            //默认值为a
            default:"C大调",
            //可选值为:"a","b","c"
            major:[
              "C大调","D大调","E大调","F大调","G大调","A大调","B大调"
            ]
          },
        keysName:{
            40:'c1',
            42:'d1',
            44:'e1',
            45:'f1',
            47:'g1',
            49:'a1',
            51:'b1',
            52:'c2',
            54:'d2',
            56:'e2',
            57:'f2',
            59:'g2',
            61:'a2',
            62:'b2',
            41:'#c1',
            43:'#d1',
            46:'#f1',
            48:'#g1',
            50:'#a1',
            53:'#c2',
            55:'#d2',
            58:'#f2',
            60:'#g2',
            62:'#a2',
            },
        tone:0,
        questionNum:10,
        questionIndex:1,
        questionKey:'',
        correctNum:0,
        errorNum:0,
        majorIndex:0,
        changeMajorFlag:true
    },

    /**
     * 组件的方法列表
     */
    methods: {
        returnhome(){
            wx.reLaunch({
              url: '/pages/index/index',
            })
        },
        nextQuestion(){
            this.setData({
                tone:0,
                changeMajorFlag:true
            })
            if(this.data.questionIndex>this.data.questionNum){
                wx.showModal({
                  title: '已完成所有问题',
                  content: "共答对"+this.data.correctNum+"题，答错"+this.data.errorNum+"题",
                  showCancel:false,
                  confirmText:'重新开始',
                  complete: () => {
                    this.setData({questionIndex:1})
                  }
                })
            }
        },
        compareKeys(){
            // console.log(this.properties.mykey)
            if(this.data.tone!=0){
                if(this.properties.mykey==VirtualkeyMapList[this.data.majorIndex][this.data.tone]){
                    wx.showToast({
                      title: '恭喜您答对了',
                      icon:'success',
                      complete: () => {
                        this.setData({questionIndex:this.data.questionIndex+1,
                        correctNum:this.data.correctNum+1})
                        this.nextQuestion()
                      }
                    })
                }
                else{
                    wx.showModal({
                      title: '回答错误，请继续努力',
                      content: '正确的音符为'+this.data.questionKey,
                      showCancel:false,
                      complete: () => {
                        this.setData({questionIndex:this.data.questionIndex+1,
                        errorNum:this.data.errorNum+1})
                        this.nextQuestion()
                      }
                    })           
                }
            }
            
        },
        playscale(){

            if(this.data.tone==0){
                this.setData({
                    tone:Math.floor(Math.random() * 7)+1,
                    changeMajorFlag:false
                })
            }
            let scale=VirtualkeyMapList[this.data.majorIndex][this.data.tone]
            this.setData({questionKey:this.data.keysName[scale]})
            console.log(scale)
            console.log(this.data.questionKey)
            
            let audio = wx.createInnerAudioContext();
            audio.src="/assets/music/"+scale+'.mp3';
            audio.play();
        },

        showSelect:function(e){
            let data= this.data.selectList;
            data["hidden"]=!data.hidden;
            this.setData({
                selectList:data
            })
        },
        SelectVal:function(e){
            if(!this.data.changeMajorFlag) {
                wx.showToast({
                  title: '请先完成本题',
                  complete:()=>{
                    let data= this.data.selectList;
                    data["hidden"]=true;
                    this.setData({
                        selectList:data
                    })
                  }
                })
                return
            }
            // 获取到点击的列表下标，因为是在下拉的父元素点击，所以获取到menus下标
            let index= e.target.dataset.index;
            let data =this.data.selectList; 
            //设置区域默认值和隐藏
            data["default"]=data.major[index];
            data["hidden"]=!data.hidden;
            this.setData({
                selectList:data,
                majorIndex:index
            })
        }
    }
})
