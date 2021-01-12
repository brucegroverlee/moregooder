import { IUser } from '../../../shared/entities/IUser';

export interface ILoginPresenter {
  startLoading(): void;
  stopLoading(): void;
  startSession(user: IUser): void;
  showError(message: string): void;
}