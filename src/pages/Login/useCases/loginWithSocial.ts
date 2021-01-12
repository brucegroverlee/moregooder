import { IAuthService } from './ports/IAuthService';
import { ILoginPresenter } from './ports/ILoginPresenter';

export function loginWithSocial(
  authService: IAuthService,
  presenter: ILoginPresenter
) {
  return async (): Promise<void> => {
    try {
      presenter.startLoading();
      const { user } = await authService.authenticate();
      presenter.startSession(user!);
      return;
    } catch (error) {
      presenter.stopLoading();
      console.error(error);
      throw error;
    }
  }
}