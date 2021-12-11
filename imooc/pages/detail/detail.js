// pages/detail/detail.js
Page({
  data: {
    id: undefined,
    descImgUrl: "",
    level: undefined,
    price: undefined,
    sales: undefined,
    title: undefined,
    score: undefined,
    durarion: undefined,
    desc: undefined
  },
  onLoad(options) {
    this.setData({
      id: options.id
    })
    wx.request({
      url: 'https://www.fastmock.site/mock/3dd024a4b0e6bdad7cdc44dd77d762c2/weixin/api/getData',
      success: (res) => {
        const descImgUrl = res.data.data.courses[this.data.id].descImgUrl
        const level = res.data.data.courses[this.data.id].level
        const price = res.data.data.courses[this.data.id].price
        const sales = res.data.data.courses[this.data.id].sales
        const title = res.data.data.courses[this.data.id].title
        const score = res.data.data.courses[this.data.id].score
        const duration = res.data.data.courses[this.data.id].duration
        const desc = res.data.data.courses[this.data.id].desc
        this.setData({
          descImgUrl,
          level,
          price,
          sales,
          title,
          score,
          duration,
          desc
        })
      }
    })
  }
})