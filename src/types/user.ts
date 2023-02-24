/**
 * 用户信息接口
 */
export interface iUser {
  /**
   * 用户头像Url
   */
  avataryUrl: string;
  /**
   * 用户名
   */
  userName: string;
  /**
   * 用户账号
   */
  account: string;
}

/**
 * 账号密码接口
 */
export interface iAccountLogin {
  /**
   * 账号
   */
  account: string;
  /**
   * 密码
   */
  password: string;
}
