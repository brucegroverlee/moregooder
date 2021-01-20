import { IAuthService } from './ports/IAuthService';
import { IUserService } from '../../shared/useCases/ports/IUserService';
import { ILoginPresenter } from './ports/ILoginPresenter';

export function loginWithEmail(
  authService: IAuthService,
  userService: IUserService,
  presenter: ILoginPresenter
) {
  return async (form: { email: string; password: string}): Promise<void> => {
    try {
      presenter.startLoading();
      const { error, token } = await authService.authenticate(form);
      if (error) {
        presenter.showError(error);
      } else {
        const { user, } = await userService.startSession(token!);
        presenter.startSession(token!, user!);
      }
      return;
    } catch (error) {
      presenter.stopLoading();
      console.error(error);
      throw error;
    }
  }
}