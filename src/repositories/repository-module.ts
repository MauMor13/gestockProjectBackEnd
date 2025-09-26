// Importa las fábricas de DAO para obtener las instancias correctas
import { ManagerDaoFactory } from '../dao/factory.js';
import { CompanyDaoFactory } from '../dao/factory.js';

// Importa las interfaces de los repositorios para tipado estático
import type { IUserRepository } from './IUserRepository.js';
import type { ICompanyRepository } from './ICompanyRepository.js';

// Obtiene la instancia correcta del DAO (Mongo, SQL, etc.) usando el Factory
const userManager = ManagerDaoFactory.getDao(); // El DAO implementa IUserRepository
const companyManager = CompanyDaoFactory.getDao(); // El DAO implementa ICompanyRepository

// Exporta las instancias tipadas para que puedan ser consumidas
export const userRepository: IUserRepository = userManager;
export const companyRepository: ICompanyRepository = companyManager;