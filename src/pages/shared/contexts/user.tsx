import React from 'react';

export type UserState = [
  IUser|null,
  React.Dispatch<React.SetStateAction<IUser | null>>
];

export const UserContext = React.createContext<UserState>([null, () => ({})]);

export const useUser = () => {
  const context = React.useContext(UserContext);
  const [user, setUser] = context;
  return { user, setUser, };
}

export const UserProvider: React.FunctionComponent = (props) => {
  const [user, setUser] = React.useState<IUser|null>(null);
  const value = React.useMemo(() => [user, setUser], [user]) as UserState;
  return (<UserContext.Provider value={value} {...props} />);
}