// pages/checkEmail/checkEmail.js
Page({
    data: {
        email: ""
    },
    onLoad(options) {

    },
    emailInput(e){
        let that = this
        let email = e.detail.value
        that.setData({
            email
        })
    },
    confirmTap(){
        let that = this

        wx.showModal({
            title: '邮箱',
            content: that.data.email,
            showCancel:false
        })
    }
})