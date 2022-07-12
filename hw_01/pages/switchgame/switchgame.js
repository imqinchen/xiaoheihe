// pages/pcgame/switchgame.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      List1:[{
        image:'/images/game/switchgame/zalda.jpg',name:'塞尔达传说',scores:'9.7',price:'¥399'
      },
      {
        image:'/images/game/switchgame/yidushenjian2.jpg',name:'异度神剑2',scores:'8.8',price:'¥399'
      },
      {
        image:'/images/game/switchgame/SwordArtOL.jpg',name:'刀剑神域虚空幻界',scores:'6.6',price:'¥49'
      },
      {
        image:'/images/game//switchgame/shisanjibin.jpg',name:'十三机兵防卫圈',scores:'9.4',price:'¥352'
      },
      {
        image:'/images/game/switchgame/sakuna.jpg',name:'天穗之咲稻姬',scores:'7.8',price:'¥106'
      },
      {
        image:'/images/game/switchgame/P5.jpg',name:'女神异闻录5',scores:'7.9',price:'¥199'
      },
      {
        image:'/images/game/switchgame/monsterhunter.jpg',name:'怪物猎人：崛起',scores:'7.6',price:'¥198'
      },
      {
        image:'/images/game/switchgame/kirby.jpg',name:'星之卡比',scores:'8.6',price:'¥339'
      },
    ],

      List2:[{
        image:'/images/game/switchgame/GodEater.jpg',name:'噬神者',scores:'9.1',price:'¥57'
      },
      {
        image:'/images/game/switchgame/animalCrossing.jpg',name:'动物森友会',scores:'9.2',price:'¥344'
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