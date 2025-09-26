import type { IUserRepository } from '../../../repositories/IUserRepository.js';
import type { IUser } from '../../generic_models/IUser.js';

export class ManagerMongoDao implements IUserRepository {
    async createUser(user: IUser): Promise<IUser> {
        // Implementación para crear un usuario en MongoDB
        return user; // Retorna el usuario creado (simulación)
    };
    async getAllUsers(): Promise<IUser[]>{
        return [];
        // Implementación para obtener todos los usuarios desde MongoDB
    }
    async getUserById(id: string): Promise<IUser | null>{
        return null;
    }
    async getUserByEmail(email: string): Promise<IUser | null>{
        return null;
    }
    async updateUser(id: string, user: Partial<IUser>): Promise<IUser | null>{
        return null;
    }
    async deleteUser(id: string): Promise<boolean>{
        return false;
    }

}