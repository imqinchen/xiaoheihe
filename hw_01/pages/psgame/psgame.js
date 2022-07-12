// pages/psgame/psgame.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      List1:[{
        image:'/images/game/psgame/apex.jpg',name:'Apex英雄',scores:'8.5',price:'免费'
      },
      {
        image:'/images/game/psgame/assassin.jpg',name:'刺客信条英灵殿',scores:'6.2',price:'¥397'
      },
      {
        image:'/images/game/psgame/control.jpg',name:'控制',scores:'7.9',price:'¥261'
      },
      {
        image:'/images/game/psgame/cyberpunk.jpg',name:'赛博朋克2077',scores:'7.1',price:'¥168'
      },
      {
        image:'/images/game/psgame/godofwar.jpg',name:'战神4',scores:'8.9',price:'¥125'
      },
      {
        image:'/images/game/psgame/humanFallFlat.jpg',name:'人类一败涂地',scores:'8.9',price:'¥33'
      },
      {
        image:'/images/game/pcgame/dyinglight2.jpg',name:'消逝的光芒2',scores:'8.0',price:'¥397'
      },
      {
        image:'/images/game/pcgame/elden_ring.jpg',name:'艾尔登法环',scores:'8.1',price:'¥406'
      },
    ],

      List2:[{
        image:'/images/game/pcgame/daysgone.jpg',name:'往日不再',scores:'7.3',price:'¥337'
      },
      {
        image:'/images/game/pcgame/awayout.jpg',name:'逃出生天',scores:'9.1',price:'¥178'
      },
      {
        image:'/images/game/psgame/dipingxian.jpg',name:'地平线 西之绝境',scores:'none',price:'¥481'
      },
      {
        image:'/images/game/switchgame/P5.jpg',name:'女神异闻录5',scores:'8.1',price:'¥213'
      },
      {
        image:'/images/game//psgame/theLastofus.jpg',name:'最后生还者',scores:'8.7',price:'¥125'
      },
      {
        image:'/images/game/psgame/spiderman.jpg',name:'漫威蜘蛛侠',scores:'6.9',price:'¥337'
      },
      {
        image:'/images/game/pcgame/red_dead2.jpg',name:'荒野大镖客2',scores:'9.4',price:'¥249'
      },
      {
        image:'/images/game/psgame/nba.jpg',name:'文明6',scores:'4.0',price:'¥116'
      }
    ],
    isloading:false,
    title:1

  },

  //获取列表方法
  getList(){
    wx.showLoading({
      title: '数据加载中...'
    })
    setTimeout(function(){
        wx.hideLoading()
    },1500)

    if(this.data.title==2){
        this.setData({
            isloading:true,
            List:[...this.data.List1,...this.data.List2]
        })
    }else if(this.data.title==1){
        this.setData({
            isloading:true,
            List:{...this.data.List1}
        })
    }
    else{
        wx.showToast({
          title: '更新完成',
        })
    }
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getList()
    wx.stopPullDownRefresh()
  },

  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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
  onPullDownRefresh: function() {
    console.log("触发了消息页面下拉刷新")
    // const length=this.data.List.length
    // for(let i=0;i<length;i++){
    //     const x=Math.floor(Math.random()*length)
    //     const y=Math.floor(Math.random()*length)
    //     const temp=this.data.List[x]
    //     this.data.List[x]=this.data.List[y]
    //     this.data.List[y]=temp
    // }
    this.setData({
        List:this.data.List,
        title:this.data.title+1
    })

    this.getList()

    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("触发了消息页面上拉")
        this.setData({
            title:this.data.title+1
        })
        
        this.getList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})