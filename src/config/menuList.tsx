/**
 * 个性化菜单配置
 * @Date: 2023/03/20 14:02:57
 */

import { iMenuItem } from '@/types/menuList';
import {
  HomeFilled,
  Document,
  FolderOpened,
  CollectionTag,
  Picture,
  Setting
} from '@element-plus/icons-vue';

export const menuList: iMenuItem[] = [
  {
    icon: <HomeFilled />,
    index: '/home',
    titleText: '首页'
  },
  {
    icon: <Document />,
    index: '/article',
    titleText: '文章管理'
  },
  {
    icon: <FolderOpened />,
    index: '/category',
    titleText: '分类管理'
  },
  {
    icon: <CollectionTag />,
    index: '/tag',
    titleText: '标签管理'
  },
  {
    icon: <Picture />,
    index: '/picture',
    titleText: '图片管理'
  },
  {
    icon: <Setting />,
    index: '/setting',
    titleText: '系统设置',
    children: [
      { titleText: '用户管理', index: '/setting/user' },
      { titleText: '友链管理', index: '/setting/friendChain' }
    ]
  },
  // 测试
  {
    icon: <Setting />,
    index: '6',
    titleText: '测试子菜单',
    children: [
      {
        groupText: '分组01',
        groupItem: [
          { titleText: '子菜单01', index: '6-1' },
          { titleText: '子菜单02', index: '6-2' }
        ]
      },
      { titleText: '子菜单03', index: '6-3' },
      {
        groupText: '分组02',
        groupItem: [{ titleText: '子菜单04', index: '6-4' }]
      },
      {
        titleText: '子菜单05',
        index: '6-5',
        children: [{ titleText: '子菜单05-01', index: '6-5-1' }]
      }
    ]
  }
];
