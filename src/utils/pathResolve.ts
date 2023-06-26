/**
 * 路径解析
 */

import { menuList } from '@/config/menuList';

export function retrunDefaultMenu(path: string) {
  menuList.find((menuItem) => {
    if (menuItem.children) {
      menuItem.children.find((item) => {
        return item.index === path;
      });
    } else {
      return menuItem.index === path;
    }
  });
}
