import ShowProductService from '../services/ShowProfileServices';
import { Request, Response } from 'express';
import UpdateProlifileService from '../services/UpdateProfileService';

export default class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const showProfile = new ShowProductService();
    const user_id = request.user.id;

    const user = await showProfile.execute({ user_id });

    return response.json(user);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name, email, password, old_password } = request.body;

    const updateProfile = new UpdateProlifileService();

    const user = await updateProfile.execute({
      user_id,
      name,
      email,
      password,
      old_password,
    });

    return response.json(user);
  }
}
