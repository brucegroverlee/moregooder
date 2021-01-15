import { IAuthService } from '../useCases/ports/IAuthService';

export class GoogleAuthService implements IAuthService {
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
          email: 'grover@gmail.com',
        }});
      }, 1500);
    });
  }
}

export class GoogleAuthServiceFactory {
  static getGoogleAuthService(): GoogleAuthService {
    return new GoogleAuthService();
  }
}