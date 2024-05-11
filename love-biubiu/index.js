Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		loveList: [],
		hideLoveList: [1, 2, 6, 7, 8, 12, 13, 14, 20, 26, 66, 78, 79, 80, 90, 91, 92, 93, 94, 102, 103, 104, 105, 106, 107, 108, 114, 115, 116, 117, 118, 119, 120, 121, 122, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 138, 139, 140, 141, 142, 143],
		showNumber: 13,
		loveNumber: 11 * 13,
		showTime: 0,
		severalTimes: 1,
		showImg: false
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		this.getLoveList()
		this.data.showTime = Math.ceil(this.data.loveNumber / this.data.showNumber)
		console.log(this.data.showTime)
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {
		//git动画是12000ms
		let _this = this
		setTimeout(() => {
			_this.showLive()
		}, 12000)

	},
	getLoveList() {
		for (let i = 0; i < 143; i++) {
			this.data.loveList.push('1')
		}
		this.data.loveList.forEach((v, n) => {
			this.data.hideLoveList.forEach(h => {
				if (n == h - 1) {
					this.data.loveList[n] = '0'
				}
			})
		})

	},
	showLive() {
		let _this = this
		console.log("执行一次")
		if (this.data.severalTimes > this.data.showTime) {
			console.log("绘制完成")
			this.setData({
				showOK: true
			})
			setTimeout(() => {
				_this.setData({
					showImg: true
				})
			}, 6000)
		} else {
			let loveList = []
			this.data.loveList.forEach((v, n) => {
				if (n < this.data.severalTimes * this.data.showNumber) {
					loveList.push(this.data.loveList[n])
				}
			})
			this.setData({
				showloveList: loveList
			})
			this.data.severalTimes++
			setTimeout(() => {
				_this.showLive()
			}, 1000)
		}
	},
	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})