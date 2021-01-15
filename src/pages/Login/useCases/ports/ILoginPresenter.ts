export interface ILoginPresenter {
  startLoading(): void;
  stopLoading(): void;
  startSession(user: IUser): void;
  showError(message: string): void;
}