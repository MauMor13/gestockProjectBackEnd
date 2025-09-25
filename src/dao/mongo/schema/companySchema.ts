import {Schema} from 'mongoose';
import type {ICompanyMongo} from '../types/ICompanyMongo.js';

export const CompanySchema = new Schema<ICompanyMongo>({
    id: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    emailCompany: {type: String, required: true, unique: true},
    dataRegister: {type: Date, required: true, default: Date.now},
    active: {type: Boolean, required: true, default: false}
})