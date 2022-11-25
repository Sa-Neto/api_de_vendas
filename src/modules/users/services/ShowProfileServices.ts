import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/Users';
import UserRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  user_id: string;
}

class ShowProlifileService {
  public async execute({ user_id }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UserRepository);

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }
}
export default ShowProlifileService;