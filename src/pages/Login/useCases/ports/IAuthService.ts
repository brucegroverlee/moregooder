export interface IAuthService {
  authenticate(form?: { email: string; password: string }): Promise<{
    error?: any;
    token?: string;
  }>;
}