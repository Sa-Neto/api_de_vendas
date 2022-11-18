import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorom/entities/Products';
import { ProductRepository } from '../typeorom/repositories/ProductsRepository';

interface IRequest {
  id: string;
}
class ShowProductService {
  public async execute({ id }: IRequest): Promise<Product | undefined> {
    const productsRepository = getCustomRepository(ProductRepository);

    const products = productsRepository.findOne(id);

    if (!products) {
      throw new AppError('Product not fo und');
    }

    return products;
  }
}
export default ShowProductService;
