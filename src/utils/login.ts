const DEFAULT_EMAIL = "test@test.com";
const DEFAULT_PASSWORD = "qwe123";

export const login = (email: string, password: string): boolean => {
  if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
    return true;
  }
  return false;
};
