import { EntityRepository, Repository } from 'typeorm';
import UserToken from '../entities/UsersTokens';

@EntityRepository(UserToken)
class UserTokensRepository extends Repository<UserToken> {
  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = await this.findOne({
      where: {
        token,
      },
    });
    return userToken;
  }

  public async generate(user_id: string): Promise<UserToken | undefined> {
    const userToken = await this.create({
      user_id,
    });
    return userToken;
  }
}

export default UserTokensRepository;
