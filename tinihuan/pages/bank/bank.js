// pages/bank/bank.js
Page({
  data:{
    bankOptions:{
      creditIndex:0,
      index:0,
      arr:[
        "请选择银行",
        "农业银行",
        "工商银行",
        "建设银行",
        "招商银行",
      ]
    }
  },
  bindPickerChange: function(e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      'bankOptions.index': e.detail.value
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