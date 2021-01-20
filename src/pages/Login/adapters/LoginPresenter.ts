import { ILoginPresenter } from '../useCases/ports/ILoginPresenter';
import { History } from 'history';

export class LoginPresenter implements ILoginPresenter {
  constructor(
    private setLoading: (loading: boolean) => void,
    private setErrorMessage: (message: string) => void,
    private storage: Storage,
    private setUser: (user: IUser) => void,
    private history: History
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
  startSession(token: string, user: IUser): void {
    console.log('token:', token);
    this.storage.setItem('token', token);
    this.setErrorMessage('');
    this.setLoading(false);
    this.setUser(user);
    this.history.replace('/');
  }
}