import { model, Document } from 'mongoose';
import type {ICompany} from '../models/ICompany.js';
import { CompanySchema } from '../mongo/schema/companySchema.js';

export const CompanyModel = model<ICompany>('company', CompanySchema);

