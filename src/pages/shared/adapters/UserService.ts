import { IUserService } from '../useCases/ports/IUserService';

export class UserService implements IUserService {
  constructor() {}

  startSession(token: string): Promise<{ user: IUser; token: string; }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          user: JSON.parse(token),
          token,
        });
      }, 2000);
    });
  }
}

export class UserServiceFactory {
  static getUserService(): UserService {
    return new UserService();
  }
}