import { SetMetadata } from '@nestjs/common';
import { Role } from './enum/role.enum';

export const ROLES_KEY = 'roles';
/* (...roles: Role[]) => ...: función flecha que toma un número variable de argumentos 
llamados roles y los agrupa en un array. Los tres puntos (...) antes de roles indican 
que es un parámetro que acepta múltiples valores y los agrupa en un array.*/
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
