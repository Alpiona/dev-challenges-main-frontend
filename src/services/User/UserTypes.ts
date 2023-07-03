export type LogInParams = {
  username?: string;
  email?: string;
  password: string;
};

export type LogInData = {
  username: string;
  token: string;
  expiresAt: string;
  accessType: string;
};

export type SignUpUserParams = {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type SignUpUserData = {
  username: string;
  accessType: string;
};
