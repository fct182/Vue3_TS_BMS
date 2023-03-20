import { userAccountLogin } from '@/service/login';
import { iAccountLogin, iUser } from '@/types/user';
import { removeCache, setCache } from '@/utils/cache';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: {} as iUser,
      token: ''
    };
  },
  actions: {
    /**
     * 设置用户账号密码的本地存储
     * @Author:付常涛
     * @Date: 2023/02/24 16:29:34
     * @param account 用户账号
     * @param password 用户密码
     */
    setUserLocalCache(account: string, password: string) {
      setCache('account', account);
      setCache('password', password);
    },
    /**
     * 清除本地账号密码缓存
     * @Author:付常涛
     * @Date: 2023/02/24 16:36:55
     */
    clearUserLocalCache() {
      removeCache('account');
      removeCache('password');
    },
    /**
     * 用户账号密码登录
     * @Author:付常涛
     * @Date: 2023/02/24 17:34:12
     * @param  data 账号密码对象
     */
    async accountLogin(data: iAccountLogin) {
      // 用户登录
      const res = await userAccountLogin(data);
      // 本地化/pinia仓库存储token
      // this.token = res.data.token;
      // setCache('token', res.data.token);
      console.log('登录信息', res);
    }
  }
});
