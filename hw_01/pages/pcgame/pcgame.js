// pages/pcgame/pcgame.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      List1:[{
        image:'/images/game/pcgame/dota2.jpg',name:'Dota2',scores:'9.7',price:'免费'
      },
      {
        image:'/images/game/pcgame/csgo.jpg',name:'CS:GO',scores:'9.4',price:'免费'
      },
      {
        image:'/images/game/pcgame/pugb.jpg',name:'绝地求生',scores:'6.6',price:'免费'
      },
      {
        image:'/images/game/pcgame/gta5.jpg',name:'侠盗猎车手5',scores:'9.6',price:'¥119'
      },
      {
        image:'/images/game/pcgame/rainbowsix.jpg',name:'彩虹6号：围攻',scores:'9.4',price:'¥88'
      },
      {
        image:'/images/game/pcgame/raft.jpg',name:'木筏求生',scores:'8.4',price:'¥67'
      },
      {
        image:'/images/game/pcgame/dyinglight2.jpg',name:'消逝的光芒2',scores:'8.0',price:'¥269'
      },
      {
        image:'/images/game/pcgame/elden_ring.jpg',name:'艾尔登法环',scores:'9.3',price:'¥298'
      },
    ],

      List2:[{
        image:'/images/game/pcgame/daysgone.jpg',name:'往日不再',scores:'8.3',price:'¥135'
      },
      {
        image:'/images/game/pcgame/awayout.jpg',name:'逃出生天',scores:'8.6',price:'¥156'
      },
      {
        image:'/images/game/pcgame/the_forest.jpg',name:'森林',scores:'9.3',price:'¥69'
      },
      {
        image:'/images/game/pcgame/fortnite.jpg',name:'堡垒之夜',scores:'8.6',price:'免费'
      },
      {
        image:'/images/game/pcgame/warframe.jpg',name:'星际战甲',scores:'9.2',price:'免费'
      },
      {
        image:'/images/game/pcgame/world_of_warships.jpg',name:'战舰世界',scores:'7.8',price:'免费'
      },
      {
        image:'/images/game/pcgame/red_dead2.jpg',name:'荒野大镖客2',scores:'9.4',price:'¥249'
      },
      {
        image:'/images/game/pcgame/civilization6.jpg',name:'文明6',scores:'9.4',price:'¥30'
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