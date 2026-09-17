/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { Locale } from './i18n/config';

declare global {
	namespace App {
		interface Locals {
			locale: Locale;
		}
	}
}
