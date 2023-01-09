import { IUser } from '@/types/user';
import { defineStore } from 'pinia';

const state: IUser = {
  userName: '付常涛',
  age: 23
};

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: state
    };
  }
});
