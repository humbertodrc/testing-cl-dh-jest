export const createUser = (userName: string) => {
  if (!userName) throw new Error("El nombre de usuario es obligatorio");

  return {
    userName
  };
}