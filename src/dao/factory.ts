import { ManagerMongoDao } from './mongo/interfaces/managerMongoDao.js';
import type { IUserRepository } from '../repositories/IUserRepository.js';
import { CompanyMongoDao } from './mongo/interfaces/companyMongoDao.js';
import type { ICompanyRepository } from '../repositories/ICompanyRepository.js';
import config from '../config/config.js'

const PERSISTENCE_TYPE = config.factory.persistence;

export class ManagerDaoFactory {
    static getDao(): IUserRepository {
        switch (PERSISTENCE_TYPE) {
            case 'MONGO':
                return new ManagerMongoDao();
            default:
                throw new Error(`Persistence type ${PERSISTENCE_TYPE} not supported.`);
        }
    }
}

export class CompanyDaoFactory {
    static getDao(): ICompanyRepository {
        switch (PERSISTENCE_TYPE) {
            case 'MONGO':
                return new CompanyMongoDao();
            default:
                throw new Error(`Persistence type ${PERSISTENCE_TYPE} not supported.`);
        }
    }
}