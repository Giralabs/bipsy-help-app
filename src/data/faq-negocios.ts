import { HELP_FAQ, type FaqGroup } from './faq';
import { SUPPORT_EMAIL } from './site';

/**
 * What the help centre adds on top of the five groups it shares with
 * bipsy-business-web-app.
 *
 * `faq.ts` is a copy of that app's `faq.data.ts` and stays a copy, so it can
 * be diffed against it. Everything written for the help centre itself lives
 * here instead, and the page shows the two together.
 *
 * Every answer below is drawn from `features.data.ts` in the business web,
 * which describes what the app does today; the wording of each feature is
 * cited in a comment where the answer leans on it.
 */
const EXTRA: FaqGroup[] = [
  {
    id: 'clientes',
    label: 'Clientes y mensajes',
    icon: 'group',
    items: [
      {
        q: '¿Cómo traigo a mis clientes de siempre?',
        a: 'Desde la agenda de tu teléfono: eliges a quién traer y nada sale del móvil hasta que pulsas Importar. Después puedes mandarles la invitación a Bipsy con un mensaje ya escrito y tu código de negocio.',
      },
      {
        q: '¿Puedo escribirles desde la app?',
        a: 'Sí. Desde la ficha del cliente los contactas por WhatsApp, SMS, llamada o email, el canal que prefiera cada uno. Y tienes un chat dentro de Bipsy con los que ya usan la app.',
      },
      {
        q: '¿Qué se puede mandar por el chat?',
        a: 'Mensajes, fotos y documentos —el cliente te enseña el corte que quiere, tú le mandas lo que necesite— y llegan al momento con notificación. Cuando una cita se reserva, se cancela o se mueve, queda anotado en la propia conversación.',
      },
      {
        q: '¿Puedo desactivar el chat?',
        a: 'Sí, cuando quieras, y además decides qué trabajadores pueden usarlo.',
      },
      {
        q: '¿Qué hago con un cliente que no respeta mis normas?',
        a: 'Puedes vetarlo: se cancelan sus reservas activas y no puede volver a reservar contigo.',
      },
    ],
  },

  {
    id: 'resenas',
    label: 'Reseñas',
    icon: 'star',
    items: [
      {
        q: '¿Quién puede dejarme una reseña?',
        a: 'Solo quien ha estado. Cada reseña va ligada a una cita que ha ocurrido, y es una por cliente y negocio.',
      },
      {
        q: '¿Puedo responder a una reseña?',
        a: 'Sí, en público: das las gracias o aclaras lo que haga falta, y tu respuesta se ve en tu ficha.',
      },
      {
        q: '¿Sirven para algo más?',
        a: 'Una buena nota ayuda a aparecer en Destacados dentro de la app de Bipsy, que es donde miran los clientes que aún no te conocen.',
      },
    ],
  },

  {
    id: 'cobros',
    label: 'Cobros y caja',
    icon: 'payments',
    items: [
      {
        q: '¿Cómo cobro una cita?',
        a: 'Al terminarla, en efectivo, tarjeta, Bizum o transferencia, incluso mezclando varias formas en un mismo cobro, con descuentos y propinas.',
      },
      {
        q: '¿Llevo la caja del día?',
        a: 'Sí: la abres con el cambio, apuntas entradas y salidas y la cierras sabiendo si sobra o falta.',
      },
      {
        q: '¿Y los gastos?',
        a: 'Haces una foto al ticket y el gasto queda apuntado en su categoría. Al final tienes el informe de IVA para tu gestoría y la exportación a hoja de cálculo.',
      },
      {
        q: '¿Puedo repartir comisiones y propinas?',
        a: 'Sí. Calculas la comisión de cada trabajador sobre bruto o neto y repartes las propinas.',
      },
      {
        q: '¿Puedo vender productos?',
        a: 'Lo que vendas en mostrador, con su coste, su margen y aviso cuando baja del stock mínimo.',
      },
    ],
  },

  {
    id: 'pagos-online',
    label: 'Cobros con tarjeta',
    icon: 'credit_card',
    items: [
      {
        q: '¿Qué necesito para cobrar con tarjeta?',
        a: 'Titular, domicilio e IBAN, y el alta se hace en minutos. Los pagos los procesa Stripe, uno de los mayores procesadores de pago del mundo.',
      },
      {
        q: '¿Bipsy se queda una comisión?',
        a: 'No. Bipsy no se queda nada: solo se descuenta la tarifa del procesador de pagos.',
      },
      {
        q: '¿Cuándo veo el dinero?',
        a: 'En Saldo y movimientos tienes lo que está de camino, lo que está listo para ingresar y cada cobro con su detalle.',
      },
      {
        q: '¿Puedo devolver un cobro?',
        a: 'Sí. Si algo no fue culpa del cliente, le devuelves el cobro desde la app.',
      },
    ],
  },

  {
    id: 'fichaje',
    label: 'Fichaje',
    icon: 'schedule',
    items: [
      {
        q: '¿Cómo ficha mi equipo?',
        a: 'Un toque para entrar y otro para salir, y al negocio le llega un aviso cuando alguien empieza o termina.',
      },
      {
        q: '¿Se les avisa?',
        a: 'Sí, 10 minutos antes de empezar o de terminar su turno.',
      },
      {
        q: '¿Dónde veo las horas?',
        a: 'Tienes el historial por día y el resumen mensual de cada persona del equipo.',
      },
    ],
  },

  {
    id: 'ficha',
    label: 'Tu ficha en Bipsy',
    icon: 'storefront',
    items: [
      {
        q: '¿Cómo me encuentran los clientes?',
        a: 'Buscan por nombre, servicio o categoría, en lista o en el mapa, así que también te encuentra quien no te conocía y está en tu zona.',
      },
      {
        q: '¿Puedo enseñar mis trabajos?',
        a: 'Sí, hasta 10 fotos con su servicio, o sin límite con el plan Quality. También puedes traerlas desde Instagram.',
      },
      {
        q: '¿Qué son las normas del negocio?',
        a: '38 normas listas para marcar —cita previa, formas de pago, accesibilidad— o las escribes tú. Salen en tu ficha para que el cliente sepa a qué atenerse antes de reservar.',
      },
      {
        q: '¿Puedo ver mi ficha como la ve un cliente?',
        a: 'Sí, con la vista previa: enseña tu ficha exactamente como la ve él.',
      },
      {
        q: '¿Qué es la insignia «Nuevo»?',
        a: 'Los primeros 60 días tu negocio la lleva en la app, para que los clientes sepan que acabas de llegar.',
      },
      {
        q: '¿Qué me da Quality en la ficha?',
        a: 'Tu color de marca en botones y acentos, portada y foto animadas (un GIF o WebP en vez de una imagen fija), efectos exclusivos —5 marcos de foto, 9 de portada, 7 para la tarjeta en búsquedas y 6 para tu nombre—, portfolio sin límite y ordenar galería, servicios y reseñas como quieras.',
      },
    ],
  },
];

/**
 * The five shared groups first — they answer what people ask on day one —
 * then everything the app can actually do.
 */
export const BUSINESS_FAQ: FaqGroup[] = [...HELP_FAQ, ...EXTRA];

export { SUPPORT_EMAIL };
