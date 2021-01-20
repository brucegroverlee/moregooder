export function logout(
  storage: Storage,
  setUser: (u: null) => void
) {
  return async () => {
    setUser(null);
    storage.removeItem('token');
  }
} 