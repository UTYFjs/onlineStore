import { IFilter } from '../data/data';
import { IDataProduct } from '../data/dataProducts';

export function getProducts(
  products: IDataProduct[],
  filters?: IFilter[],
  selectedSorting?: string,
  searchText?: string
) {
  return products;
}
