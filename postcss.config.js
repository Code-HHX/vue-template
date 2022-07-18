module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 37.5, // 设计图页面尺寸如果是 750 就填 75,是 640 就填入 64,为了适配 vantUI 我们保持和 vant 官方一致
      propList: ["*"]
    }
  }
};
