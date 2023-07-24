// components/test/test.js
Component({
    options:{
        styleIsolation: 'shared',
    },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    keys0:[
      {num:1,name:"A2"},
      {num:3,name:"B2"}
    ],
    keys1: [
      {
        num: 4,
        name: "C1"
      },
      {
        num: 6,
        name: "D1"
      },
      {
        num: 8,
        name: "E1"
      },
      {
        num: 9,
        name: "F1"
      },
      {
        num: 11,
        name: "G1"
      },
      {
        num: 13,
        name: "A1"
      },
      {
        num: 15,
        name: "B1"
      },
      {
        num: 16,
        name: "C"
      },
      {
        num: 18,
        name: "D"
      },
      {
        num: 20,
        name: "E"
      },
      {
        num: 21,
        name: "F"
      },
      {
        num: 23,
        name: "G"
      },
      {
        num: 25,
        name: "A"
      },
      {
        num: 27,
        name: "B"
      },
      {
        num: 28,
        name: "c"
      },
      {
        num:30,
        name: "d"
      },
      {
        num: 32,
        name: "e"
      },
      {
        num: 33,
        name: "f"
      },
      {
        num: 35,
        name: "g"
      },
      {
        num: 37,
        name: "a"
      },
      {
        num: 39,
        name: "b"
      },
    ],
    keys2: [
      {
        num: 40,
        name: "c1"
      },
      {
        num: 42,
        name: "d1"
      },
      {
        num: 44,
        name: "e1"
      },
      {
        num: 45,
        name: "f1"
      },
      {
        num: 47,
        name: "g1"
      },
      {
        num: 49,
        name: "a1"
      },
      {
        num: 51,
        name: "b1"
      },
      {
        num: 52,
        name: "c2"
      },
      {
        num: 54,
        name: "d2"
      },
      {
        num: 56,
        name: "e2"
      },
      {
        num: 57,
        name: "f2"
      },
      {
        num: 59,
        name: "g2"
      },
      {
        num: 61,
        name: "a2"
      },
      {
        num: 63,
        name: "b2"
      },
      {
        num: 64,
        name: "c3"
      },
      {
        num:66,
        name: "d3"
      },
      {
        num: 68,
        name: "e3"
      },
      {
        num: 69,
        name: "f3"
      },
      {
        num: 71,
        name: "g3"
      },
      {
        num: 73,
        name: "a3"
      },
      {
        num: 75,
        name: "b3"
      },
    ],
    keys3:[
      {num:76,name:"c4"},
      {num:78,name:"d4"},
      {num:80,name:"e4"},
      {num:81,name:"f4"},
      {num:83,name:"g4"},
      {num:85,name:"a4"},
      {num:87,name:"b4"},
      {num:88,name:"c5"}
    ],
    blackKeys0:[
      {num:2}
    ],
    blackKeys1:[
      {num:5},
      {num:7},
      {num:10},
      {num:12},
      {num:14},
      {num:17},
      {num:19},
      {num:22},
      {num:24},
      {num:26},
      {num:29},
      {num:31},
      {num:34},
      {num:36},
      {num:38}
    ],
    blackKeys2:[
      {num:41},
      {num:43},
      {num:46},
      {num:48},
      {num:50},
      {num:53},
      {num:55},
      {num:58},
      {num:60},
      {num:62},
      {num:65},
      {num:67},
      {num:70},
      {num:72},
      {num:74}
    ],
    blackKeys3:[
      {num:77},
      {num:79},
      {num:82},
      {num:84},
      {num:86}
    ]
  }
  ,
  /**
   * 组件的方法列表
   */
  methods: {
    play(e){
      var ac= wx.createInnerAudioContext();
      ac.src=`/assets/music/${e.currentTarget.dataset.num}.mp3`;
      ac.play();
     },
  }
})
