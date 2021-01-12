import { IUser } from '../../shared/entities/IUser';
import { ILoginPresenter } from '../useCases/ports/ILoginPresenter';

export class LoginPresenter implements ILoginPresenter {
  constructor(
    private setLoading: (loading: boolean) => void,
    private setErrorMessage: (message: string) => void
    ) {}

  startLoading(): void {
    console.log('startLoading');
    this.setLoading(true);
  }
  stopLoading(): void {
    console.log('stopLoading');
    this.setLoading(false);
  }
  showError(message: string): void {
    console.log('message:', message);
    this.setErrorMessage(message);
    this.setLoading(false);
  }
  startSession(user: IUser): void {
    console.log('user:', user);
    this.setErrorMessage('');
    this.setLoading(false);
  }
}

export class LoginPresenterFactory {
  static getLoginPresenter(
    setLoading: (loading: boolean) => void,
    setErrorMessage: (message: string) => void
    ): LoginPresenter {
    return new LoginPresenter(setLoading, setErrorMessage);
  }
}