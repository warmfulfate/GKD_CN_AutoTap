import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.max.xiaoheihe',
  name: '小黑盒',
  groups: [
    {
      key: 0,
      name: '自动功能-每日签到弹窗',
      desc: '测试版本:1.3.347，自动点击确定',
      exampleUrls: '', //如果有，可以填入。
      rules: [
        {
          fastQuery: true,
          activityIds: ['com.max.xiaoheihe.MainActivity'],
          matches: 'TextView[text="确定"]',
        },
      ],
    },
  ],
});
