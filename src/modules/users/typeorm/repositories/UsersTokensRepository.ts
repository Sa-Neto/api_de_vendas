import { EntityRepository, Repository } from 'typeorm';
import UsersToken from '../entities/UsersTokens';

@EntityRepository(UsersToken)
class UserTokensRepository extends Repository<UsersToken> {
  public async findByToken(token: string): Promise<UsersToken | undefined> {
    const userToken = await this.findOne({
      where: {
        token,
      },
    });
    return userToken;
  }

  public async generate(user_id: string): Promise<UsersToken> {
    const userToken = await this.create({
      user_id,
    });
    await this.save(userToken);
    return userToken;
  }
}

export default UserTokensRepository;
