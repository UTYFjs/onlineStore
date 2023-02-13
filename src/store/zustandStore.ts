import create from 'zustand';
interface IZustandStore {
  isBurgerOpen: boolean;
  isShadedActive: boolean;
  handleShaded: () => void;
  setHandleShaded: (handleShaded: () => void) => void;
  setIsShadedActive: () => void;
  setIsBurgerOpen: () => void;
}

export const useZustandStore = create<IZustandStore>((set) => ({
  isShadedActive: false,
  setIsShadedActive: () => set((state) => ({ isShadedActive: !state.isShadedActive })),
  handleShaded: () => {},
  setHandleShaded: (handleShaded) => set((state) => ({ handleShaded: handleShaded })),
  isBurgerOpen: false,
  setIsBurgerOpen: () => set((state) => ({ isBurgerOpen: !state.isBurgerOpen })),
}));
