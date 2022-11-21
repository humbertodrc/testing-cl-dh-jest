export const createUser = (userName: string) => {
  if (userName === 'admin') {
    throw new Error('User not allowed');
  } else {
    return userName;
  }
}