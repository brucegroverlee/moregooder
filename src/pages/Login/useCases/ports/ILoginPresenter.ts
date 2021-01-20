export interface ILoginPresenter {
  startLoading(): void;
  stopLoading(): void;
  startSession(token: string, user: IUser): void;
  showError(message: string): void;
}