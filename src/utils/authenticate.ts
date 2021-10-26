const DEFAULT_EMAIL = "test@test.com";
const DEFAULT_PASSWORD = "qwe123";

const EMAIL_KEY = "##email";

export const login = (email: string, password: string): boolean => {
  if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
    localStorage.setItem(EMAIL_KEY, email);
    return true;
  }
  return false;
};

export const isLoggedIn = (): boolean => {
  return localStorage.getItem(EMAIL_KEY) !== null;
};

export const logout = () => {
  localStorage.removeItem(EMAIL_KEY);
};
