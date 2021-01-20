import { IAuthService } from './ports/IAuthService';
import { IUserService } from '../../shared/useCases/ports/IUserService';
import { ILoginPresenter } from './ports/ILoginPresenter';

export function loginWithSocial(
  authService: IAuthService,
  userService: IUserService,
  presenter: ILoginPresenter
) {
  return async (): Promise<void> => {
    try {
      presenter.startLoading();
      const { token } = await authService.authenticate();
      const { user, } = await userService.startSession(token!);
      presenter.startSession(token!, user);
      return;
    } catch (error) {
      presenter.stopLoading();
      console.error(error);
      throw error;
    }
  }
}