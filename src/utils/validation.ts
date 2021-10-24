const emailConstraints = {
  // regex from: https://regexr.com/3e48o
  regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  minLength: 5,
  maxLength: 50,
};

const passwordContraints = {
  regex: /^[a-zA-Z0-9_\-!@#$%^&*()]{4,16}$/,
  minLength: 4,
  maxLength: 16,
};

export const validateEmail = (email: string): boolean => {
  const { regex, minLength, maxLength } = emailConstraints;

  if (email.length < minLength || email.length > maxLength) return false;

  return email.match(regex) !== null;
};

export const validatePassword = (password: string): boolean => {
  const { regex, minLength, maxLength } = passwordContraints;

  if (password.length < minLength || password.length > maxLength) return false;

  return password.match(regex) !== null;
};
