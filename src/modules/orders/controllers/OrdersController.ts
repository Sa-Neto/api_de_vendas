import { Request, Response } from 'express';
import CreateProductService from '../services/CreateOrderService';
import ShowOrderService from '../services/ShowOrderService';

export default class OrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showOrder = new ShowOrderService();

    const order = await showOrder.execute({ id });
    console.log(order);
    return response.json(order);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { customer_id, products } = request.body;

    const createOrder = new CreateProductService();

    const order = await createOrder.execute({
      customer_id,
      products,
    });

    console.log(order);
    return response.json(order);
  }
}
