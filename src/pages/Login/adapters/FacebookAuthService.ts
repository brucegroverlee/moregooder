import { IAuthService } from '../useCases/ports/IAuthService';

export class FacebookAuthService implements IAuthService {
  authenticate(): Promise<{
    error?: any;
    user?: IUser;
  }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          user: {
          id: 12345,
          name: 'Grover',
          email: 'grover@facebook.com',
        }});
      }, 1500);
    });
  }
}

export class FacebookAuthServiceFactory {
  static getFacebookAuthService(): FacebookAuthService {
    return new FacebookAuthService();
  }
}