// pages/applyLoan/applyLoan.js
Page({
  data:{
    agreeParams:[0]
  },
  choose:function(e){
    var _index= e.target.dataset.index
    this.data.agreeParams[_index]=this.data.agreeParams[_index]==0?1:0
    this.setData({
      agreeParams:this.data.agreeParams
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})