import { getCustomRepository } from 'typeorm';
import Product from '../typeorom/entities/Products';
import { ProductRepository } from '../typeorom/repositories/ProductsRepository';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);

    const products = productsRepository.find();

    return products;
  }
}
export default ListProductService;
