import { model } from 'mongoose';
import type { IManagerMongo } from '../types/IManagerMongo.js';
import { ManagerSchema } from '../schema/managerSchema.js';

export const ManagerModel = model<IManagerMongo>('manager', ManagerSchema);