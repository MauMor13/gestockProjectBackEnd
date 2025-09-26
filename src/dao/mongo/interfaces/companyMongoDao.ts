import type { ICompanyRepository } from '../../../repositories/ICompanyRepository.js';
import type { ICompany } from '../../generic_models/ICompany.js';

export class CompanyMongoDao implements ICompanyRepository {
    async createCompani(company: ICompany): Promise<ICompany> {
        // Implementación para crear una compañía en MongoDB
        return company; // Retorna la compañía creada (simulación)
    };
    async getAllCompany(): Promise<ICompany[]>{
        return [];
        // Implementación para obtener todas las compañías desde MongoDB
    };
    async getCompanyById(id: string): Promise<ICompany | null>{
        return null;
    };
    async getCompanyByEmail(email: string): Promise<ICompany | null>{
        return null;
    };
}



