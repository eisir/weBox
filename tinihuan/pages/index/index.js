//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '',
    times:[{
      class:"",
      text: "1周",
      ratio: 0.012
    },
    {
      class:"",
      text: "2周",      
      ratio: 0.02
    },
    {
      class:"",
      text: "3周",
      ratio: 0.035
    },
    {
      class:"",
      text: "4周",
      ratio: 0.04
    }],
    infoShow:''
  },
  //事件处理函数
  tapTime: function(e) {
    this.data.times.forEach((n,index,arr)=>{      
        this.data.times[index].class=""      
    })
    this.data.times[e.currentTarget.dataset.index].class='selected'
    this.setData({
      times : this.data.times
    })
  },
  blurInput: function(){

  },
  next: function(){
    wx.navigateTo({
      url: '../verify/verify'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
