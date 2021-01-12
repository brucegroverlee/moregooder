import { IAuthService } from './ports/IAuthService';
import { ILoginPresenter } from './ports/ILoginPresenter';

export function loginWithEmail(
  authService: IAuthService,
  presenter: ILoginPresenter
) {
  return async (form: { email: string; password: string}): Promise<void> => {
    try {
      presenter.startLoading();
      const { error, user } = await authService.authenticate(form);
      if (error) {
        presenter.showError(error);
      } else {
        presenter.startSession(user!);
      }
      return;
    } catch (error) {
      presenter.stopLoading();
      console.error(error);
      throw error;
    }
  }
}