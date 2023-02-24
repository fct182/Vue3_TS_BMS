import { iAccountLogin } from '@/types/user';
import { $http } from '..';

enum LoginUrl {
  accountLogin = '/login'
}

/**
 * 用户账号密码登录
 * @Author:付常涛
 * @Date: 2023/02/07 21:01:25
 * @param data  登录的账号密码数据
 */
export function userAccountLogin(data: iAccountLogin) {
  return $http.post({
    url: LoginUrl.accountLogin,
    data: {
      name: data.account,
      password: data.password
    }
  });
}
