import { create } from "zustand";

type CategoriesStore = {
  count: number;
  inc: () => void;
};

const useCategories = create<CategoriesStore>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));
