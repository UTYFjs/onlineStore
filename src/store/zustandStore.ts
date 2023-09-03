import create from 'zustand';
import { defaultSelectedFilters, filters, filterType, IFilter } from '../data/data';
import { IDataProduct } from '../data/dataProducts';
interface IZustandStore {
  burgerType: 'menu' | 'filter' | 'cart' | null;
  isBurgerOpen: boolean;
  isShadedActive: boolean;
  handleShaded: () => void;

  setIsShadedActive: () => void;
  setIsBurgerOpen: () => void;
  setBurgerType: (type: 'menu' | 'filter' | 'cart' | null) => void;
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

export type SelectedFilters = Record<filterType, (string | number | never)[]>;

interface IUtilityStore {
  currentProduct: IDataProduct | null;
  setCurrentProduct: (product: IDataProduct | null) => void;
  filters: IFilter[];
  selectedSorting: string;
  selectedFilters: SelectedFilters;
  searchText: string;
  //remove count active filters
  countActiveFilters: number;
  setSearchText: (newSearchText: string) => void;
  setAllSelectedFilters: (filters: SelectedFilters, countActiveFilters: number) => void;
  setSelectedFilters: (filters: Partial<SelectedFilters>) => void;
  setSelectedSorting: (newSelectedSorting: string) => void;
}

export const useUtilityStore = create<IUtilityStore>((set) => ({
  currentProduct: null,
  setCurrentProduct: (product) => set((state) => ({ currentProduct: product })),
  filters: filters,
  selectedFilters: defaultSelectedFilters,
  searchText: '',
  countActiveFilters: 0,
  setSearchText: (newSearchText) => set((state) => ({ searchText: newSearchText })),
  setAllSelectedFilters: (filters, countActiveFilters) =>
    set((state) => ({ selectedFilters: filters, countActiveFilters: countActiveFilters })),
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
const getInitialFavoriteProducts = (): IDataProduct[] => {
  const favoriteProductsString = localStorage.getItem('favoriteProducts');
  const initialFavoriteProducts: IDataProduct[] = favoriteProductsString
    ? JSON.parse(favoriteProductsString)
    : [];
  return initialFavoriteProducts;
};

export const useFavoriteStore = create<IFavoriteStore>((set) => ({
  favoriteProducts: getInitialFavoriteProducts(),

  addProduct: (product: IDataProduct) => {
    set((state) => ({
      favoriteProducts: [...state.favoriteProducts, product],
    }));

    const storedFavoriteProductsString = localStorage.getItem('favoriteProducts');
    const storedFavoriteProducts: IDataProduct[] =
      storedFavoriteProductsString !== null ? JSON.parse(storedFavoriteProductsString) : [];
    storedFavoriteProducts.push(product);
    localStorage.setItem('favoriteProducts', JSON.stringify(storedFavoriteProducts));
  },

  removeProduct: (productId: string) => {
    set((state) => ({
      favoriteProducts: state.favoriteProducts.filter((p) => p.id !== productId),
    }));

    const storedFavoriteProductsString = localStorage.getItem('favoriteProducts');
    const storedFavoriteProducts: IDataProduct[] =
      storedFavoriteProductsString !== null ? JSON.parse(storedFavoriteProductsString) : [];
    const newFavoriteProducts = storedFavoriteProducts.filter((item) => item.id !== productId);
    localStorage.setItem('favoriteProducts', JSON.stringify(newFavoriteProducts));
  },
}));

export interface ICartProduct {
  cartProduct: IDataProduct;
  color: string;
  isGiftBox: boolean;
  isEmbossing: boolean;
  embossing: string | null;
  price: number;
  priceCurrency: string;
  discount: number;
  count: number;
}

interface ICartStore {
  cartProducts: ICartProduct[];
  addCartProduct: (product: ICartProduct) => void;
  removeCartProduct: (id: string) => void;
  updateCartProduct: (updatedCartProduct: ICartProduct) => void;
}

const getInitialCartProducts = (): ICartProduct[] => {
  const favoriteProductsString = localStorage.getItem('cartProducts');
  const initialFavoriteProducts: ICartProduct[] = favoriteProductsString
    ? JSON.parse(favoriteProductsString)
    : [];
  return initialFavoriteProducts;
};

export const useCartStore = create<ICartStore>((set) => ({
  cartProducts: getInitialCartProducts(),
  addCartProduct: (product: ICartProduct) => {
    set((state) => {
      const cartProduct = state.cartProducts.find(
        (item) => item.cartProduct.id === product.cartProduct.id
      );
      if (!cartProduct) {
        return { cartProducts: [...state.cartProducts, product] };
      }
      return state;
    });

    const storedCartProductsString = localStorage.getItem('cartProducts');
    const storedCartProducts: ICartProduct[] =
      storedCartProductsString !== null ? JSON.parse(storedCartProductsString) : [];
    storedCartProducts.push(product);
    localStorage.setItem('cartProducts', JSON.stringify(storedCartProducts));
  },
  removeCartProduct: (id: string) => {
    set((state) => ({
      cartProducts: [...state.cartProducts.filter((item) => item.cartProduct.id !== id)],
    }));

    const storedCartProductsString = localStorage.getItem('cartProducts');
    const storedCartProducts: ICartProduct[] =
      storedCartProductsString !== null ? JSON.parse(storedCartProductsString) : [];
    const newCartProducts = storedCartProducts.filter((item) => item.cartProduct.id !== id);
    localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
  },
  updateCartProduct: (updatedCartProduct: ICartProduct) => {
    set((state) => ({
      cartProducts: state.cartProducts.map((item) => {
        return item.cartProduct.id === updatedCartProduct.cartProduct.id
          ? updatedCartProduct
          : item;
      }),
    }));
    const storedCartProductsString = localStorage.getItem('cartProducts');
    const storedCartProducts: ICartProduct[] =
      storedCartProductsString !== null ? JSON.parse(storedCartProductsString) : [];
    const newCartProducts = storedCartProducts.map((item) => {
      return item.cartProduct.id === updatedCartProduct.cartProduct.id ? updatedCartProduct : item;
    });
    localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
  },
}));
