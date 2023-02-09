import create from 'zustand';
interface IZustandStore {
  isBurgerOpen: boolean;
  setIsBurgerOpen: () => void;
}

export const useZustandStore = create<IZustandStore>((set) => ({
  isBurgerOpen: false,
  setIsBurgerOpen: () => set((state) => ({ isBurgerOpen: !state.isBurgerOpen })),
}));
