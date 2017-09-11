//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        content:"",
        names:[
            'Tom',
            'Peter',
            'Gray',
            'Lisa'
        ]
    },
    onLoad(options){
        let content = this.data.names.join(" ")
        this.setData({
            content
        })
    }
})
