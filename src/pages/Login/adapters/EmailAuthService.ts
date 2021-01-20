import { IAuthService } from '../useCases/ports/IAuthService';

export class EmailAuthService implements IAuthService {
  authenticate(form: { email: string; password: string }): Promise<{
    error?: string;
    token?: string;
  }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (form.email==='grover@email.com' && form.password==='1234') {
          resolve({
            token: JSON.stringify({
            id: 12345,
            name: 'Grover',
            email: 'grover@email.com',
          })});
        } else {
          resolve({
            error: 'The user doesn\'t exist or the password is invalid.'});
        }
      }, 1500);
    });
  }
}

export class EmailAuthServiceFactory {
  static getEmailAuthService(): EmailAuthService {
    return new EmailAuthService();
  }
}