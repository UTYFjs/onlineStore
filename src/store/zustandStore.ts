import create from 'zustand';
interface IZustandStore {
  burgerType: 'menu' | 'filter' | null;
  isBurgerOpen: boolean;
  isShadedActive: boolean;
  handleShaded: () => void;
  setHandleShaded: (handleShaded: () => void) => void;
  setIsShadedActive: () => void;
  setIsBurgerOpen: () => void;
  setBurgerType: (type: 'menu' | 'filter' | null) => void;
  burgerOpen: () => void;
}

export const useZustandStore = create<IZustandStore>((set) => ({
  burgerType: null,
  isShadedActive: false,
  setIsShadedActive: () => set((state) => ({ isShadedActive: !state.isShadedActive })),
  handleShaded: () => {},
  setHandleShaded: (handleShaded) => set((state) => ({ handleShaded: handleShaded })),
  isBurgerOpen: false,
  setIsBurgerOpen: () => set((state) => ({ isBurgerOpen: !state.isBurgerOpen })),
  setBurgerType: (type) => set(() => ({ burgerType: type })),
  burgerOpen: () => set(() => ({ isShadedActive: true, isBurgerOpen: true })),
}));
