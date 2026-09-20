import { BUSINESS_FAQ } from './faq-negocios';
import { CLIENT_FAQ } from './faq-clientes';
import type { FaqGroup, FaqItem } from './faq';

/**
 * The help centre as a site: two audiences, each a set of categories, each
 * category a page of articles.
 *
 * The questions themselves live in `faq.ts`, `faq-negocios.ts` and
 * `faq-clientes.ts`. This file is what turns them into somewhere you can
 * navigate: it adds the one-line description each category needs on the
 * landing page, and the slugs the routes are built from.
 */
export interface HelpCategory extends FaqGroup {
  /** One line on the landing card, so the grid is readable and not a list of
   *  bare nouns. */
  blurb: string;
}

export interface Audience {
  id: 'negocios' | 'clientes';
  /** URL prefix; also the folder under `src/pages`. */
  base: string;
  nav: string;
  title: string;
  lead: string;
  placeholder: string;
  /** Which brand goes in the bar. */
  brand: 'business' | 'bipsy';
  categories: HelpCategory[];
}

const BUSINESS_BLURBS: Record<string, string> = {
  empezar: 'Darte de alta, verificar el negocio y dejarlo listo para recibir reservas.',
  agenda: 'Cómo entran las citas, qué confirmas tú y qué hace la app sola.',
  equipo: 'Invitar trabajadores, qué ve cada uno y cómo se piden las vacaciones.',
  plan: 'Qué se paga, cómo se paga y qué pasa si dejas de pagarlo.',
  soporte: 'Por dónde escribirnos y cómo pedir una función nueva.',
  clientes: 'Traer tu cartera, hablar con ella y bloquear a quien haga falta.',
  resenas: 'Quién puede valorarte, cómo responder y para qué sirven.',
  cobros: 'Cobrar la cita, la caja del día, los gastos y el IVA.',
  'pagos-online': 'Aceptar tarjeta, cuándo llega el dinero y cómo devolver un cobro.',
  fichaje: 'Entradas y salidas del equipo, avisos y horas del mes.',
  ficha: 'Cómo te encuentran, qué enseñas y qué añade el plan Quality.',
};

const CLIENT_BLURBS: Record<string, string> = {
  reservar: 'Encontrar un negocio, elegir servicio y confirmar tu hora.',
  cambios: 'Mover la cita, cancelarla y qué pasa si no llegas a tiempo.',
  pagos: 'Por qué a veces se pide tarjeta y qué se cobra exactamente.',
  cuenta: 'Contraseña, reseñas y cómo borrar tu cuenta.',
  soporte: 'Escribirnos, avisar de un contenido o pedir tus datos.',
};

const withBlurbs = (groups: FaqGroup[], blurbs: Record<string, string>): HelpCategory[] =>
  groups
    .filter((g) => g.items.length > 0)
    .map((g) => ({ ...g, blurb: blurbs[g.id] ?? '' }));

export const AUDIENCES: Audience[] = [
  {
    id: 'negocios',
    base: '/negocios',
    nav: 'Para negocios',
    title: 'Ayuda para tu negocio',
    lead: 'Todo sobre Bipsy Business: la agenda, tu equipo, los cobros y tu ficha.',
    placeholder: 'Busca: equipo, cancelar, IVA, reseñas…',
    brand: 'business',
    categories: withBlurbs(BUSINESS_FAQ, BUSINESS_BLURBS),
  },
  {
    id: 'clientes',
    base: '/clientes',
    nav: 'Para clientes',
    title: 'Ayuda con tus citas',
    lead: 'Cómo reservar en Bipsy, cambiar o cancelar, y qué pasa con los pagos.',
    placeholder: 'Busca: cancelar, cambiar hora, tarjeta…',
    brand: 'bipsy',
    categories: withBlurbs(CLIENT_FAQ, CLIENT_BLURBS),
  },
];

export const audienceOf = (id: string): Audience =>
  AUDIENCES.find((a) => a.id === id) ?? AUDIENCES[0];

/** Every article, flattened, for the search index on a landing page. */
export interface Article extends FaqItem {
  category: string;
  categoryLabel: string;
  href: string;
}

export const articlesOf = (a: Audience): Article[] =>
  a.categories.flatMap((c) =>
    c.items.map((item, i) => ({
      ...item,
      category: c.id,
      categoryLabel: c.label,
      href: `${a.base}/${c.id}#a${i}`,
    })));
