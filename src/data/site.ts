/**
 * The few site-wide facts the help centre needs, plus the way back to the two
 * products it serves.
 *
 * ⚠️ `TRIAL_DAYS` and `SUPPORT_RESPONSE_TIME` are copies of the same constants
 * in bipsy-business-web-app. The FAQ answers quote them, so if they change
 * there they have to change here — see the note at the top of `faq.ts`.
 */
export const TRIAL_DAYS = 30;

/** Support answers tickets in 24–48 working hours (support_screen.dart). */
export const SUPPORT_RESPONSE_TIME = '24-48 h laborables';

// The way back to the two products. Both pointed at youtube.com, left over
// from a template, so «Bipsy para clientes» and «Bipsy Business» in the footer
// led somewhere else entirely.
/** The customer-facing web (bipsy-web-app). */
export const CLIENT_WEB_URL = 'https://bipsy.es';
/** The business web (bipsy-business-web-app). */
export const BUSINESS_WEB_URL = 'https://business.bipsy.es';

export const SUPPORT_EMAIL = 'soporte@bipsy.es';
