export interface IUserService {
  startSession(token: string): Promise<{
    user: IUser;
    token: string;
  }>;
}