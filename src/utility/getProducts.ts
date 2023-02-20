import { IFilter } from '../data/data';
import { IDataProduct } from '../data/dataProducts';
interface IGetProducts {
  products: IDataProduct[];
  category?: string;
  filters?: IFilter[];
  selectedSorting?: string;
  searchText?: string;
}

export function getProducts(
  products: IDataProduct[],
  filters: IFilter[],
  category = '',
  selectedSorting = '',
  searchText = ''
) {
  let currentProducts = products;
  //case category (for example wallet)
  if (category) {
    currentProducts = products.filter(
      (item) => item.category.toLowerCase() === category.slice(0, category.length - 1).toLowerCase()
    );
  }
  //case sorting
  if (selectedSorting) {
    console.log('заходит в сортировку');
    currentProducts = getSortingProducts(currentProducts, selectedSorting);
  }
  //case search
  /* if (searchText.trim() !== '') {
    const searchTextLower = searchText.trim().toLowerCase();
    currentProducts = currentProducts.filter(
      (product) => product.title.indexOf(searchTextLower) !== -1
    );
  }*/
  //case filter

  return currentProducts;
}

function getSortingProducts(products: IDataProduct[], selectedSorting: string): IDataProduct[] {
  switch (selectedSorting) {
    case 'priceAscending':
      products.sort((a, b) => a.price - b.price);
      break;
    case 'priceDescending':
      products.sort((a, b) => b.price - a.price);
      break;
    case 'titleAscending':
      products.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      break;
    case 'titleDescending':
      products.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
        return 0;
      });
      break;
    case 'bestselling':
      products.sort((a, b) => a.countSales - b.countSales);
      break;
  }
  return products;
}
