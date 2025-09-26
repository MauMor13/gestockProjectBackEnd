import type { IUser } from '../dao/generic_models/IUser.js';

export interface IUserRepository {
    createUser(user: IUser): Promise<IUser>;
    getAllUsers(): Promise<IUser[]>;
    getUserByEmail(email: string): Promise<IUser | null>;
    getUserById(id: string): Promise<IUser | null>;
    updateUser(id: string, user: Partial<IUser>): Promise<IUser | null>;
    deleteUser(id: string): Promise<boolean>;
}