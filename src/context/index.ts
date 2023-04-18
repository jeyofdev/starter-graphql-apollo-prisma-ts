import { PrismaClient } from '@prisma/client';

export interface IContext {
	prisma: PrismaClient;
}

export const context = {
	prisma: new PrismaClient(),
};
