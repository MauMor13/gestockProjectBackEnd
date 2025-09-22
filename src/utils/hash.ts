import bcrypt from "bcrypt";

export const hash = (password: string) =>
    bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const isValidPassword = (password: string, hash: string) =>
    bcrypt.compareSync(password, hash);
