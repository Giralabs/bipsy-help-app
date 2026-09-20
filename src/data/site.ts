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

/** Placeholder target for every external link that does not exist yet. */
const PLACEHOLDER_URL = 'https://www.youtube.com';

// TODO: point these at the production domains once they are deployed.
// The two webs link here the other way round and already switch to their
// local server while developing; do the same here once these are real.
/** The customer-facing web (bipsy-web-app). */
export const CLIENT_WEB_URL = PLACEHOLDER_URL;
/** The business web (bipsy-business-web-app). */
export const BUSINESS_WEB_URL = PLACEHOLDER_URL;

export const SUPPORT_EMAIL = 'soporte@bipsy.es';
