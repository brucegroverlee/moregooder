import { IUser } from '../../../shared/entities/IUser';

export interface IAuthService {
  authenticate(form?: { email: string; password: string }): Promise<{
    error?: any;
    user?: IUser;
  }>;
}