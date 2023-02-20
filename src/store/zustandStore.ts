import create from 'zustand';
import { filters, IFilter } from '../data/data';
interface IZustandStore {
  burgerType: 'menu' | 'filter' | null;
  isBurgerOpen: boolean;
  isShadedActive: boolean;
  handleShaded: () => void;

  setIsShadedActive: () => void;
  setIsBurgerOpen: () => void;
  setBurgerType: (type: 'menu' | 'filter' | null) => void;
  burgerOpen: () => void;
}

export const useZustandStore = create<IZustandStore>((set) => ({
  burgerType: null,
  isShadedActive: false,
  setIsShadedActive: () => set((state) => ({ isShadedActive: !state.isShadedActive })),
  handleShaded: () =>
    set((state) => ({ isShadedActive: !state.isShadedActive, isBurgerOpen: false })),
  isBurgerOpen: false,
  setIsBurgerOpen: () => set((state) => ({ isBurgerOpen: !state.isBurgerOpen })),
  setBurgerType: (type) => set(() => ({ burgerType: type })),
  burgerOpen: () => set(() => ({ isShadedActive: true, isBurgerOpen: true })),
}));

interface IUtilityStore {
  filters: IFilter[];
  //setFilters: (filter: string, action: 'add' | 'del') => void;
  selectedSorting: string;
  setSelectedSorting: (newSelectedSorting: string) => void;
}

export const useUtilityStore = create<IUtilityStore>((set) => ({
  filters: filters,
  /*setFilters: (filter, action) =>
    set((state) => {
      if (action === 'add') {
        return {filters: state.filters};
      }
    }),*/
  selectedSorting: '',
  setSelectedSorting: (newSelectedSorting) => set(() => ({ selectedSorting: newSelectedSorting })),
}));
