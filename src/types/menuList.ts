export interface iMenuItem {
  /**
   * 菜单图标
   */
  icon: any;
  /**
   * 菜单url路径
   */
  index: string;
  /**
   * 菜单名
   */
  titleText: string;
  /**
   * 菜单子项
   */
  children?: iChildrenMenu[];
}

interface iChildrenMenu {
  /**
   * 菜单名
   */
  titleText?: string;
  /**
   * 菜单下标
   */
  index?: string;
  /**
   * 分组名
   */
  groupText?: string;
  /**
   * 分组Item项
   */
  groupItem?: iChildrenMenu[];
  /**
   * 菜单子项
   */
  children?: iChildrenMenu[];
}
