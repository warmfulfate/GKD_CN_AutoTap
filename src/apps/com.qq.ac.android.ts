import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qq.ac.android',
  name: '腾讯动漫',
  groups: [
    {
      key: 0,
      name: '自动功能-领取阅点和月票碎片',
      desc: '测试版本12.15.8，在底部导航栏“v会员”界面领取',
      exampleUrls: '', //如果有，可以填入。
      activityIds: [''],
      rules: [
        {
          fastQuery: true,
          activityIds: ['com.qq.ac.android.main.MainActivity'],
          matches:
            'RecyclerView[visibleToUser=true && vid="recycle_view"] >3 TextView[text="每日领取"]',
          snapshotUrls: ['https://i.gkd.li/i/25825149'],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-漫画阅读页面',
      desc: '测试版本：未知，左侧悬浮广告',
      exampleUrls: '', //如果有，可以填入。
      activityIds: [''],
      rules: [
        {
          activityIds: 'com.qq.ac.android.reader.comic.ComicReaderActivity',
          matches:
            '[id="com.qq.ac.android:id/operation_ad_view"] > [id="com.qq.ac.android:id/btn_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12707756',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-信息流广告',
      desc: '测试版本：未知',
      rules: [
        {
          key: 0,
          name: '漫画章节之间的广告',
          fastQuery: true,
          activityIds: 'com.qq.ac.android.reader.comic.ComicReaderActivity',
          matches: '[vid="iv_del"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1be7564d-f6c2-429d-9cb0-3d923adafc8a', //如果有，可以填入
          snapshotUrls: 'https://i.gkd.li/i/14730335',
        },
      ],
    },
  ],
});
