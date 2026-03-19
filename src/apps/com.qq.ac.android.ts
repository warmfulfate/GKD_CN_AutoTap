import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qq.ac.android',
  name: '腾讯动漫',
  groups: [
    {
      key: 0,
      name: '自动功能-领取阅点和月票碎片',
      desc: '测试版本12.15.8，在底部导航栏“v会员”界面领取',
      exampleUrls: 'https://e.gkd.li/e0b51608-f761-47d2-b40d-f20266a502e1', //如果有，可以填入。
      rules: [
        {
          fastQuery: true,
          actionDelay: 250,
          activityIds: ['com.qq.ac.android.main.MainActivity'],
          matches:
            'RecyclerView[visibleToUser=true && vid="recycle_view"] >3 TextView[text="每日领取"]',
          snapshotUrls: ['https://i.gkd.li/i/25825149'],
          actionCd: 500,
        },
      ],
    },
    {
      key: 1,
      name: '自动功能-签到页面',
      desc: '测试版本:12.15.8，在签到页面自动签到',
      exampleUrls: 'https://e.gkd.li/85826dda-2ae6-45db-a62a-27479655d3f1', //如果有，可以填入。
      rules: [
        {
          activityIds: ['com.qq.ac.android.view.activity.web.WebActivity'],
          matches: 'TextView[text="签到领奖"]',
          snapshotUrls: 'https://i.gkd.li/i/26120337',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-漫画阅读页面',
      desc: '测试版本：11.5.8，左侧悬浮广告',
      exampleUrls: 'https://e.gkd.li/f6a5d536-d3d3-46af-a9d2-6544a0727245', //如果有，可以填入。
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
      key: 3,
      name: '局部广告-信息流广告',
      desc: '测试版本：11.8.8，漫画末尾的广告',
      exampleUrls:
        'https://m.gkd.li/57941037/1be7564d-f6c2-429d-9cb0-3d923adafc8a', //如果有，可以填入
      rules: [
        {
          key: 0,
          name: '漫画章节之间的广告',
          fastQuery: true,
          activityIds: 'com.qq.ac.android.reader.comic.ComicReaderActivity',
          matches: '[vid="iv_del"]',
          snapshotUrls: 'https://i.gkd.li/i/14730335',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-个人信息页面',
      desc: '测试版本:12.15.8，“我的”页面-“游戏中心”和“福利中心”下的广告',
      exampleUrls: 'https://e.gkd.li/ea4e5509-35d9-40c7-9488-03d3b283d3e2',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.qq.ac.android.main.MainActivity',
          matches: 'ImageView[vid="iv_del"]',
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-漫画详情',
      desc: '测试版本:12.15.8,点击一本漫画-在话题讨论下广告',
      exampleUrls: 'https://e.gkd.li/856f0803-333e-414a-852e-24f713c06ad7', //如果有，可以填入。
      rules: [
        {
          fastQuery: true,
          activityIds: ['.view.activity.comicdetail.ComicDetailActivity'],
          matches: 'ImageView[vid="iv_del"]',
        },
      ],
    },
  ],
});
