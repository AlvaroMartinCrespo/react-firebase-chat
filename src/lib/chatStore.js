import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand';
import { db } from './firebase';

export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  changeChat: (chatId, user) => {
    set({ chatId, user });
  },
}));
