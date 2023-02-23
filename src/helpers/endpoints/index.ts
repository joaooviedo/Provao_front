import { auth } from './auth';
import { user } from './user';

export const endpoint = {
    baseUrl: "provaobackend-production.up.railway.app",
    ...auth,
    ...user,
};