import crypto from 'crypto';

module.exports = {
	// md5 后缀加密添加
	MD5_SUFFIX: 'www.biaochenxuying.cn*&^%$#',
	// md5 加密
	md5: function(pwd) {
		let md5 = crypto.createHash('md5'); // 创建并返回一个hash对象，它是一个指定算法的加密hash (md5 sha1 sha256 sha512)
		return md5.update(pwd) // 更新hash的内容为指定的data。当使用流数据时可能会多次调用该方法
			.digest('hex'); // 编码方式 hex binary base64
	},
	// 响应客户端 统一处理服务器响应
	responseClient(res, httpCode = 500, code = 3, message = '服务端异常', data = {}) {
		let responseData = {};
		responseData.code = code;
		responseData.message = message;
		responseData.data = data;
		res.status(httpCode).json(responseData);
	},
	// 时间 格式化成 2018-12-12 12:12:00
	timestampToTime(timestamp) {
		const date = new Date(timestamp);
		const Y = date.getFullYear() + '-';
		const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		const D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
		const h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
		const m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
		const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
		return Y + M + D + h + m + s;
	},
};
