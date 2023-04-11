import create from 'zustand';
import { defaultSelectedFilters, filters, filterType, IFilter } from '../data/data';
import { IDataProduct } from '../data/dataProducts';
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

export type SelectedFilters = Record<filterType, (string | number)[]>;

interface IUtilityStore {
  currentProduct: IDataProduct | null;
  setCurrentProduct: (product: IDataProduct | null) => void;
  filters: IFilter[];
  selectedSorting: string;
  selectedFilters: SelectedFilters;
  setAllSelectedFilters: (filters: SelectedFilters) => void;
  setSelectedFilters: (filters: Partial<SelectedFilters>) => void;
  setSelectedSorting: (newSelectedSorting: string) => void;
}

export const useUtilityStore = create<IUtilityStore>((set) => ({
  currentProduct: null,
  setCurrentProduct: (product) => set((state) => ({ currentProduct: product })),
  filters: filters,
  selectedFilters: defaultSelectedFilters,
  setAllSelectedFilters: (filters) => set((state) => ({ selectedFilters: filters })),
  setSelectedFilters: (filters) =>
    set((state) => ({ selectedFilters: { ...state.selectedFilters, ...filters } })),
  /*{
    color: [],
    cardCapacity: [],
    moneyClip: [],
    coinbox: [],
    strap: [],
    bifold: [],
  }*/
  selectedSorting: '',
  setSelectedSorting: (newSelectedSorting) => set(() => ({ selectedSorting: newSelectedSorting })),
}));

interface IFavoriteStore {
  favoriteProducts: IDataProduct[];
  addProduct: (product: IDataProduct) => void;
  removeProduct: (product: string) => void;
}

export const useFavoriteStore = create<IFavoriteStore>((set) => ({
  favoriteProducts: [],

  addProduct: (product: IDataProduct) =>
    set((state) => ({
      favoriteProducts: [...state.favoriteProducts, product],
    })),

  removeProduct: (productId: string) =>
    set((state) => ({
      favoriteProducts: state.favoriteProducts.filter((p) => p.id !== productId),
    })),
}));
