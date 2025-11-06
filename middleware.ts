import {
  intlayerMiddleware,
  multipleMiddlewares,
} from 'next-intlayer/middleware';

export default multipleMiddlewares([intlayerMiddleware]);

export const config = {
  matcher:
    '/((?!api|static|assets|robots|sitemap|sw|service-worker|manifest|.*\\..*|_next).*)',
};
