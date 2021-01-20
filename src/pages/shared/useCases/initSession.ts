import { IUserService } from './ports/IUserService';

export function initSession(
  storage: Storage,
  userService: IUserService,
  setUser: (u: IUser) => void
) {
  return async () => {
    try {
      const { user, token } = await userService.startSession(storage.getItem('token')!);
      setUser(user);
      storage.setItem('token', token);
    } catch (error) {
      throw error;
    }
  }
} 