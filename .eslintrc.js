/*
 * @Author: Code-HHX
 * @Date: 2022-03-24 11:49:13
 * @LastEditors: Code-HHX
 * @LastEditTime: 2022-03-24 16:10:21
 * @Description:
 */
module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/essential', '@vue/prettier', 'plugin:prettier/recommended'],
	rules: {
		indent: ['off'], //缩进
		// 强制在对象字面量的属性中键和值之间使用一致的间距
		quotes: ['off'], //关闭不知所谓的字符串引号限制
		//semi: ["off", 2], // 0 = off, 1 = warn, 2 = error
		// 禁止不必要的分号
		'no-extra-semi': 0,
		eqeqeq: 'off', // 关闭===代替==的告警
		'space-before-function-paren': 0, //关闭函数后强制控制
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-unused-vars': [
			0,
			{
				vars: 'all',
				args: 'none'
			}
		],
		'no-irregular-whitespace': 'off',
		// "no-console": "off", //禁止console报错检查
		'generator-star-spacing': 'off', //禁止空格报错检查
		'no-useless-escape': 0

		//'prettier/prettier': 'off', 关闭prettier
	},
	//JavaScript语言选项
	parserOptions: {
		parser: 'babel-eslint'
	}
};
