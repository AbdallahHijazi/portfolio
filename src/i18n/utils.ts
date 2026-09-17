import {
  authorTranslations,
  defaultLocale,
  localeInfo,
  locales,
  pageTranslations,
  routeTranslations,
  translations,
  type Locale,
  type RouteName,
} from './config';

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export function getLocale(value?: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function getDirection(locale: Locale) {
  return localeInfo[locale].dir;
}

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export function getPageTranslations(locale: Locale) {
  return pageTranslations[locale];
}

export function getAuthorTranslations(locale: Locale) {
  return authorTranslations[locale];
}

export function localizePath(path: string, locale: Locale): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const withoutLocale = stripLocale(normalizedPath);
  const segments = withoutLocale.split('/').filter(Boolean);
  const localizedSegments = segments.map((segment) => {
    for (const route of Object.keys(routeTranslations[defaultLocale]) as RouteName[]) {
      if (routeTranslations[defaultLocale][route] === segment) {
        return routeTranslations[locale][route];
      }
    }
    return segment;
  });
  const suffix = localizedSegments.filter(Boolean).join('/');
  return `/${locale}${suffix ? `/${suffix}` : '/'}`;
}

export function stripLocale(path: string): string {
  const segments = path.split('/').filter(Boolean);
  return isLocale(segments[0]) ? `/${segments.slice(1).join('/')}`.replace(/\/$/, '') || '/' : path || '/';
}

export function getLocaleFromPath(pathname: string): Locale {
  return getLocale(pathname.split('/').filter(Boolean)[0]);
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'ar' : 'en';
}

export function getAlternatePath(pathname: string, activeLocale?: Locale): string {
  const locale = activeLocale || getLocaleFromPath(pathname);
  return localizePath(stripLocale(pathname), getAlternateLocale(locale));
}

export function localizedValue<T>(
  data: Record<string, T | undefined>,
  key: string,
  locale: Locale,
  fallback?: T,
): T | undefined {
  if (locale === 'ar' && data[`${key}Ar`] !== undefined) {
    return data[`${key}Ar`];
  }
  return data[key] ?? fallback;
}