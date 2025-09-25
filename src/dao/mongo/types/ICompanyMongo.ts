import { Document } from 'mongoose';
import type { ICompany } from '../../generic_models/ICompany.js';

export interface ICompanyMongo extends ICompany, Document {}