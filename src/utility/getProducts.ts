import { IFilter } from '../data/data';
import { IDataProduct } from '../data/dataProducts';
import { SelectedFilters } from '../store/zustandStore';

export function getProducts(
  products: IDataProduct[],
  filters: IFilter[],
  selectedFilters: SelectedFilters,
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

  //case filtering
  currentProducts = getFilteringProducts(currentProducts, filters, selectedFilters);

  //case search
  if (searchText.trim() !== '') {
    console.log('заходит в поиск', searchText);
    const searchTextLower = searchText.trim().toLowerCase();
    currentProducts = currentProducts.filter(
      (product) => product.title.toLocaleLowerCase().indexOf(searchTextLower) !== -1
    );
  }

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

function getFilteringProducts(
  products: IDataProduct[],
  filters: IFilter[],
  selectedFilters: SelectedFilters
): IDataProduct[] {
  let currentProducts = [...products];
  filters.forEach((filter) => {
    const filteredProducts: IDataProduct[] = [];

    if (selectedFilters[filter.name].length > 0) {
      console.log('selectedFilters[filter.name]', selectedFilters[filter.name]);

      selectedFilters[filter.name].forEach((filterValue) => {
        currentProducts.forEach((product) => {
          if (product[filter.name] === filterValue) {
            filteredProducts.push(product);
          }
        });
      });
      currentProducts = filteredProducts;
    }

    /*if (selectedFilters[filter.name].length > 0) {
      
      console.log('выбранные фильтры', filter.selectedOptions.length);
      currentProducts = currentProducts.filter((product) => {
        if (product[filter.name] === ) {
          return filter.selectedOptions.includes(product[filter.name] || '');
        }
        return false;
      });
    }*/
  });
  return currentProducts;
}

/* filters.forEach((filter) => {
    const filteredProducts: IDataProduct[] = [];

    if (selectedFilters[filter.name].length > 0) {
      console.log('selectedFilters[filter.name]', selectedFilters[filter.name]);

      selectedFilters[filter.name].forEach((filterValue) => {
        currentProducts.forEach((product) => {
          if (product[filter.name] === filterValue) {
            filteredProducts.push(product);
          }
        });
      });
      currentProducts = filteredProducts;
    }


  }); */
