/**
 * The few site-wide facts the help centre needs, plus the way back to the two
 * products it serves.
 *
 * ⚠️ The plan facts below are copies of the same constants in
 * bipsy-business-web-app (`plans.data.ts`, `site.data.ts` and the subscription
 * conditions). The FAQ answers quote them, so if they change there they have
 * to change here.
 */

/** Monthly prices, as shown (bipsy-business-web-app `PLANS`). */
export const PRICE_BIPSY = '19,99';
export const PRICE_QUALITY = '29,99';
/** Free days after the sign-up, before choosing a plan (`WELCOME_DAYS`). */
export const WELCOME_DAYS = 3;
/** Portfolio photos per plan (`BUSINESS_PHOTOS`, `QUALITY_PHOTOS`). */
export const BUSINESS_PHOTOS = 20;
export const QUALITY_PHOTOS = 100;
/** Days of access kept while a failed renewal is retried. */
export const PAST_DUE_GRACE_DAYS = 3;
/** Days to change your mind after asking to close the business. */
export const DELETION_GRACE_DAYS = 14;

/** Support answers tickets in 24–48 working hours (support_screen.dart). */
export const SUPPORT_RESPONSE_TIME = '24-48 h laborables';

// The way back to the two products. Both pointed at youtube.com, left over
// from a template, so «Bipsy para clientes» and «Bipsy Business» in the footer
// led somewhere else entirely.
/** The customer-facing web (bipsy-web-app). */
export const CLIENT_WEB_URL = 'https://bipsy.es';
/** The business web (bipsy-business-web-app). */
export const BUSINESS_WEB_URL = 'https://business.bipsy.es';
/** The studio behind Bipsy. */
export const GIRALABS_URL = 'https://www.giralabs.es';

/** The two apps in the App Store. Android arrives in a few weeks. */
export const CLIENT_APP_STORE_URL = 'https://apps.apple.com/es/app/bipsy/id6828380156';
export const BUSINESS_APP_STORE_URL = 'https://apps.apple.com/es/app/bipsy-business/id6828380398';

export const SUPPORT_EMAIL = 'soporte@bipsy.es';

/** Footer columns. Every link goes to a real page of the two webs. */
export const FOOTER_COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Bipsy',
    links: [
      { label: 'bipsy.es', href: CLIENT_WEB_URL },
      { label: 'Buscar un negocio', href: `${CLIENT_WEB_URL}/buscar` },
      { label: 'Bipsy en el App Store', href: CLIENT_APP_STORE_URL },
    ],
  },
  {
    title: 'Bipsy Business',
    links: [
      { label: 'business.bipsy.es', href: BUSINESS_WEB_URL },
      { label: 'Precios', href: `${BUSINESS_WEB_URL}/precios` },
      { label: 'Funcionalidades', href: `${BUSINESS_WEB_URL}/funcionalidades` },
      { label: 'Blog', href: `${BUSINESS_WEB_URL}/blog` },
      { label: 'Bipsy Business en el App Store', href: BUSINESS_APP_STORE_URL },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Términos', href: `${CLIENT_WEB_URL}/legal/terminos` },
      { label: 'Privacidad', href: `${CLIENT_WEB_URL}/legal/privacidad` },
      { label: 'Cookies', href: `${CLIENT_WEB_URL}/legal/cookies` },
      { label: 'Condiciones de suscripción', href: `${BUSINESS_WEB_URL}/legal/condiciones-suscripcion` },
      { label: 'Aviso legal', href: `${CLIENT_WEB_URL}/legal/aviso-legal` },
    ],
  },
];
