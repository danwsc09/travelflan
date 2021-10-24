const emailConstraints = {
  // regex from: https://regexr.com/3e48o
  regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  minLength: 5,
  maxLength: 50,
};

export const validateEmail = (email: string): boolean => {
  const { regex, minLength, maxLength } = emailConstraints;

  if (email.length < minLength || email.length > maxLength) return false;

  return email.match(regex) !== null;
};
