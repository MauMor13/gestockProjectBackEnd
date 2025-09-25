import { model, Document } from 'mongoose';
import type {ICompanyMongo} from '../types/ICompanyMongo.js';
import { CompanySchema } from '../schema/companySchema.js';

export const CompanyModel = model<ICompanyMongo>('company', CompanySchema);