import { ILoginPresenter } from '../useCases/ports/ILoginPresenter';

export class LoginPresenter implements ILoginPresenter {
  constructor(
    private setLoading: (loading: boolean) => void,
    private setErrorMessage: (message: string) => void,
    private setUser: (user: IUser) => void,
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
    this.setUser(user);
    this.setErrorMessage('');
    this.setLoading(false);
  }
}