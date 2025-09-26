import type { ICompany } from '../dao/generic_models/ICompany.js';

export interface ICompanyRepository {
    createCompani(company: ICompany): Promise<ICompany>;
    getAllCompany(): Promise<ICompany[]>;
    getCompanyById(id: string): Promise<ICompany | null>;
    getCompanyByEmail(email: string): Promise<ICompany | null>;
}