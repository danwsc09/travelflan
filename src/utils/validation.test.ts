import { validateEmail } from "./validation";

describe("Email validation function", () => {
  test("A standard and valid email address returns true", () => {
    const valid_email = "john_doe123@gmail.com";
    expect(validateEmail(valid_email)).toBe(true);
  });

  test("An invalid email address returns false", () => {
    const invalid_email = "johndoe@gmail";
    expect(validateEmail(invalid_email)).toBe(false);
  });
});
