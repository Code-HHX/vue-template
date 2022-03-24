/*
 * @Author: Code-HHX
 * @Date: 2022-03-24 11:49:13
 * @LastEditors: Code-HHX
 * @LastEditTime: 2022-03-24 14:31:58
 * @Description:
 */
module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', '@vue/prettier'],
	rules: {
		//'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		//'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unused-vars': [
			0,
			{
				vars: 'all',
				args: 'none',
			},
		],
	},
	//JavaScript语言选项
	parserOptions: {
		parser: 'babel-eslint',
	},
}
