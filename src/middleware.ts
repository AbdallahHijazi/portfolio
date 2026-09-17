import { defineMiddleware } from 'astro:middleware';
import { defaultLocale } from './i18n/config';
import { isLocale } from './i18n/utils';

export const onRequest = defineMiddleware(async (context, next) => {
  if (isLocale(context.locals.locale)) {
    return next();
  }

  const firstSegment = context.url.pathname.split('/').filter(Boolean)[0];
  const queryLocale = context.url.searchParams.get('_locale') || undefined;

  context.locals.locale = isLocale(firstSegment)
    ? firstSegment
    : isLocale(queryLocale)
      ? queryLocale
      : defaultLocale;

  return next();
});