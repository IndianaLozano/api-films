import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

// With this decorator, we can mark a route as public, and it will be accessible without a token.
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
