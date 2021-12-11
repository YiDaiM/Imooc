// pages/hot/hot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: {},
    currentList: [],
    rankType: 'project',
    rankTypes: [
      {
        type: 'project',
        title: '实战排行'
      },
      {
        type: 'path',
        title: '路径排行'
      }
    ],
    periodType: "week",
    periodTypes: [
      {
        title: '周',
        value: 'week'
      },
      {
        title: '月',
        value: 'month'
      }
    ]
  },
  changeCurrentList(rankType,periodType) {
    let currentList = []
    if(rankType === 'project' && periodType === 'week') {
      currentList = this.listData.projectWeek
    } else if(rankType === 'project' && periodType === 'month') {
      currentList = this.listData.projectMonth
    } else if(rankType === 'path' && periodType === 'week') {
      currentList = this.listData.pathWeek
    } else {
      currentList = this.listData.pathMonth
    }
    this.setData({currentList})
  },
  handleTabChange(e) {
    const rankType = e.currentTarget.dataset.type;
    const periodType = this.data.periodType;
    this.setData({
      rankType
    })
    this.changeCurrentList(rankType,periodType)
  },
  handlePeriodChange(e) {
    const periodType = e.currentTarget.dataset.type;
    const rankType = this.data.rankType;
    this.changeCurrentList(rankType,periodType)
    this.setData({
      periodType
    })
  },
  onLoad() {
    wx:wx.request({
      url: 'https://www.fastmock.site/mock/3dd024a4b0e6bdad7cdc44dd77d762c2/weixin/api/getData',
      success: (res) => {
        this.listData = res.data.listData;
        const periodType = this.data.periodType;
        const rankType = this.data.rankType;
        this.changeCurrentList(rankType,periodType)
      },
    })
  }
})