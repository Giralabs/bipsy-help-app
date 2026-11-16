import { HELP_FAQ, type FaqGroup } from './faq';
import {
  BUSINESS_PHOTOS, DELETION_GRACE_DAYS, PAST_DUE_GRACE_DAYS, PRICE_BIPSY, PRICE_QUALITY, QUALITY_PHOTOS,
  SUPPORT_EMAIL, WELCOME_DAYS,
} from './site';

/**
 * What the help centre adds on top of the five groups it shares with
 * bipsy-business-web-app (`faq.ts`).
 *
 * Every answer is drawn from the business web, which describes what the app
 * does today: `features.data.ts` (the features), `plans.data.ts` (plans and
 * prices) and the subscription conditions in `business-legal.content.ts`
 * (trial, renewal, plan changes, cancellation, closing the business).
 *
 * ⚠️ Finance (cash register, expenses, VAT report, commissions, products) was
 * dropped from the app: only taking payment for appointments remains. Nothing
 * here may describe it.
 */
const EXTRA: FaqGroup[] = [
  {
    id: 'dia-a-dia',
    label: 'Tu día a día en la agenda',
    icon: 'today',
    items: [
      {
        q: '¿Qué veo al abrir la agenda?',
        a: 'Tres vistas para las tres preguntas del día: Hoy (qué toca ahora), Pendientes (qué tienes que confirmar) y Agenda (cómo va la semana). Desde el inicio ves también cuántas personas del equipo han fichado.',
      },
      {
        q: '¿Qué significa el color de cada cita?',
        a: 'Cada estado tiene su color: pendiente, confirmada, por cobrar, cobrada, cancelada o no vino. Así sabes en qué punto está una cita sin abrirla.',
      },
      {
        q: '¿Puedo tener horario de mañana y tarde?',
        a: 'Sí. El horario admite varios tramos por día, días cerrados y servicios que solo se pueden reservar a ciertas horas.',
      },
      {
        q: '¿Me avisa la app cuando entra una cita?',
        a: 'Sí, con una notificación cuando una cita entra, se cancela o se mueve. Y al cliente le llega un recordatorio el día anterior, sin que tengas que hacer nada.',
      },
      {
        q: '¿Puedo apuntar una cita yo, por ejemplo de alguien que llama por teléfono?',
        a: 'Sí, desde la agenda. Si el cliente ya está en tu agenda de clientes lo eliges de la lista; si no, lo añades en el momento.',
      },
      {
        q: '¿Puedo usar Bipsy Business desde el ordenador?',
        a: 'Sí. Además de la app del móvil tienes el panel web en business.bipsy.es, con la misma agenda, y una app para Windows que se descarga desde el propio panel y avisa de cada cita.',
      },
    ],
  },

  {
    id: 'cancelaciones',
    label: 'Cancelaciones y plantones',
    icon: 'event_busy',
    items: [
      {
        q: '¿Puedo cobrar si un cliente cancela tarde o no viene?',
        a: 'Sí, si lo activas. Pones una tarifa en porcentaje del servicio para las cancelaciones o los cambios que se hagan dentro de la ventana que elijas, de 3 a 24 horas antes de la cita.',
      },
      {
        q: '¿Cuánto puedo cobrar como máximo?',
        a: 'Hasta el 50 % del precio del servicio, y nunca más de 100 €. Bipsy no se queda nada: solo se descuenta la tarifa del procesador de pagos.',
      },
      {
        q: '¿Cómo me aseguro de poder cobrarla?',
        a: 'Activa «Pedir tarjeta al reservar»: la reserva solo se completa si el cliente deja una tarjeta guardada. Guardarla no le cobra nada; solo se usa si se aplica la tarifa.',
      },
      {
        q: '¿Y si alguien dice que no sabía la política?',
        a: 'El cliente la ve y la acepta antes de reservar, y Bipsy guarda qué política aceptó y cuándo, por si alguna vez hay que demostrarlo.',
      },
      {
        q: '¿Qué hago si no ha sido culpa del cliente?',
        a: 'Desde la app le devuelves el cobro, entero o una parte, con su motivo.',
      },
    ],
  },

  {
    id: 'lista-espera',
    label: 'Lista de espera',
    icon: 'hourglass_top',
    items: [
      {
        q: '¿Para qué sirve?',
        a: 'Para que una cancelación no sea un hueco vacío. Cuando alguien cancela, el hueco se ofrece solo a los clientes que esperan, sin que tengas que llamar a nadie.',
      },
      {
        q: '¿A quién se avisa primero?',
        a: 'Tú eliges: por turno, respetando quién se apuntó antes, o a todos a la vez para llenar el hueco cuanto antes. Si la cita es para dentro de menos de 24 horas, se avisa a todos.',
      },
      {
        q: '¿Cuánto tiempo tiene cada cliente para contestar?',
        a: 'El que tú pongas, de 6 a 72 horas. Si no contesta o dice que no le viene bien, el hueco pasa al siguiente.',
      },
      {
        q: '¿Puedo ofrecer un hueco aunque nadie haya cancelado?',
        a: 'Sí. ¿Un día flojo? Desde la agenda eliges servicio, profesional y hora, y lo ofreces a la lista.',
      },
      {
        q: '¿Puedo ordenar la lista?',
        a: 'Sí: la reordenas, quitas a quien haga falta y decides qué miembros del equipo pueden gestionarla. Está incluida en todos los planes.',
      },
    ],
  },

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
        q: '¿Qué guarda la ficha de cada cliente?',
        a: 'Sus citas, sus reseñas, sus pagos y tus notas privadas, como alergias o preferencias. Puedes buscar a cualquier cliente por nombre, teléfono o email.',
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
        a: 'Sí, cuando quieras, y además decides qué trabajadores pueden usarlo. Es gratis en todos los planes.',
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
        q: '¿Me entero cuando me dejan una?',
        a: 'Sí, te llega un aviso con cada reseña nueva.',
      },
      {
        q: '¿Puedo responder a una reseña?',
        a: 'Sí, en público: das las gracias o aclaras lo que haga falta, y tu respuesta se ve en tu ficha. Contestar también a las buenas cuenta: quien te lee antes de reservar ve que hay alguien detrás.',
      },
      {
        q: '¿Sirven para algo más?',
        a: 'Una buena nota ayuda a aparecer en Destacados dentro de la app de Bipsy, que es donde miran los clientes que aún no te conocen.',
      },
      {
        q: 'Una reseña es falsa u ofensiva, ¿qué hago?',
        a: `Escríbenos a ${SUPPORT_EMAIL} con «Contenido» en el asunto, diciendo cuál es y por qué. La revisamos y, si incumple las normas, la retiramos.`,
      },
    ],
  },

  {
    id: 'cobros',
    label: 'Cobrar las citas',
    icon: 'payments',
    items: [
      {
        q: '¿Puedo pedir que paguen al reservar?',
        a: 'Tú eliges: que no paguen al reservar, que puedan hacerlo si quieren o que sea obligatorio para reservar.',
      },
      {
        q: '¿Y cobrar al terminar la cita?',
        a: 'Sí. Al terminar, le pides el pago a su app: le llega la petición al móvil y paga con tarjeta o Apple Pay. Ves en directo cuándo ha pagado.',
      },
      {
        q: '¿Y si me paga en efectivo o por Bizum?',
        a: 'Márcala como «Ya cobrada» y la agenda queda al día. Cada cita dice si está por cobrar o cobrada, y la ficha de cada cliente guarda sus pagos.',
      },
      {
        q: '¿Puedo devolver un cobro?',
        a: 'Sí, entero o solo una parte, desde la app y con su motivo.',
      },
      {
        q: '¿Mis trabajadores pueden cobrar?',
        a: 'Si les das el permiso, cobran sus propias citas, sin tocar la cuenta de cobros del negocio.',
      },
      {
        q: '¿Bipsy lleva mi contabilidad?',
        a: 'No. Bipsy Business cobra las citas y lleva el dinero a tu cuenta, pero no lleva caja, gastos ni impuestos, ni emite facturas: eso lo sigues haciendo con tu programa de facturación o tu gestoría.',
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
        a: 'En Saldo y movimientos tienes lo que está de camino, lo que está listo para ingresar y cada cobro con su detalle. El dinero llega a tu cuenta bancaria.',
      },
      {
        q: '¿Puedo cambiar la cuenta donde lo recibo?',
        a: 'Sí. Pon otro IBAN y los cobros pasan a ingresarse en la cuenta nueva.',
      },
      {
        q: '¿Me lo pide la app si no lo tengo configurado?',
        a: 'Sí. Si elegiste cobrar con tarjeta y aún no has dado de alta la cuenta de cobros, el panel te lo recuerda hasta que la configures: sin ella, la tarifa de cancelación y los pagos con tarjeta no funcionan.',
      },
    ],
  },

  {
    id: 'ausencias',
    label: 'Vacaciones y ausencias',
    icon: 'beach_access',
    items: [
      {
        q: '¿Qué puede pedir un trabajador?',
        a: 'Vacaciones, asuntos personales, baja médica u otro motivo, desde su móvil y con una explicación.',
      },
      {
        q: '¿Cómo las apruebo?',
        a: 'Con un toque. El trabajador recibe la respuesta al momento.',
      },
      {
        q: '¿Qué pasa con las citas que ya tenía?',
        a: 'Antes de aprobar, las citas afectadas aparecen juntas: las reasignas a otra persona del equipo o las cancelas. Así nadie se encuentra la puerta cerrada.',
      },
      {
        q: '¿Puedo bloquear días yo directamente?',
        a: 'Sí, a cualquier persona del equipo, sin esperar a que lo pida.',
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
        a: 'Tienes el historial por día y el resumen mensual de cada persona del equipo. Y desde el inicio de la agenda ves cuántos han fichado hoy.',
      },
      {
        q: '¿Tiene coste?',
        a: 'No: el fichaje está incluido en todos los planes.',
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
        a: `Sí, en el portfolio: hasta ${BUSINESS_PHOTOS} fotos con su servicio, o ${QUALITY_PHOTOS} con Quality. También puedes traerlas desde Instagram.`,
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
        q: '¿Tengo un enlace para compartir mi ficha?',
        a: 'Sí, en «Mi enlace»: lo pegas en la bio de Instagram, en WhatsApp o en tu web, y tienes también su código QR para imprimirlo en un cartel.',
      },
      {
        q: '¿Qué me da Quality en la ficha?',
        a: `Portada animada (un GIF o WebP en lugar de una imagen fija), tu negocio anunciado con prioridad en Destacados de Explorar y un portfolio de ${QUALITY_PHOTOS} fotos en lugar de ${BUSINESS_PHOTOS}. Puedes ver cómo quedaría antes de contratarlo.`,
      },
    ],
  },

  {
    id: 'suscripcion',
    label: 'Tu suscripción, a fondo',
    icon: 'receipt_long',
    items: [
      {
        q: '¿Qué diferencia hay entre los dos planes?',
        a: `Bipsy Business (${PRICE_BIPSY} € al mes) es toda la app: agenda, reservas, lista de espera, clientes, chat, reseñas, equipo, fichaje y cobros. Quality (${PRICE_QUALITY} € al mes) añade portada animada, prioridad en Destacados y un portfolio de ${QUALITY_PHOTOS} fotos.`,
      },
      {
        q: '¿Cómo funcionan los días de prueba y el mes gratis?',
        a: `Al terminar el alta tienes ${WELCOME_DAYS} días para probarlo todo y elegir plan, sin dar ningún método de pago. El primer plan que contrates incluye el primer mes gratis: se pide un método de pago, pero no se cobra nada hasta que termina ese mes, y antes de contratar ves la fecha del primer cobro. El mes gratis es una sola vez por negocio.`,
      },
      {
        q: '¿Se renueva sola?',
        a: 'Sí, cada mes, hasta que la canceles. Si la contrataste en una tienda, cada tienda pone su plazo para que la cancelación evite la siguiente renovación (en App Store, al menos 24 horas antes).',
      },
      {
        q: '¿Qué pasa si falla el cobro de la renovación?',
        a: `Mantienes el acceso ${PAST_DUE_GRACE_DAYS} días mientras se vuelve a intentar, y en ese tiempo puedes cambiar el método de pago desde Mi plan.`,
      },
      {
        q: '¿Puedo cambiar de plan?',
        a: 'Cuando quieras, desde Mi plan. Si pagas desde el panel web, la diferencia se prorratea por los días que quedan; si lo contrataste en el móvil, el cambio lo hace la tienda, que te enseña la diferencia antes de confirmar.',
      },
      {
        q: '¿Dónde están mis facturas?',
        a: 'Las de lo que pagas desde el panel web, en el portal de pagos al que se llega desde Mi plan. Si necesitas unos datos fiscales concretos, escríbenos antes del cobro. Las compras hechas en Google Play o App Store las factura la propia tienda.',
      },
      {
        q: '¿Me devolvéis el dinero si cancelo?',
        a: `Al cancelar mantienes el acceso hasta el final del periodo pagado, y los periodos ya empezados no se devuelven, salvo error en el cobro. Si contrataste en una tienda, el reembolso se pide a la tienda; si pagaste desde el panel web, escríbenos a ${SUPPORT_EMAIL}. Durante el mes gratis puedes cancelar sin que se cobre nada.`,
      },
    ],
  },

  {
    id: 'cuenta',
    label: 'Tu cuenta y la baja',
    icon: 'manage_accounts',
    items: [
      {
        q: '¿Puedo entrar con Google?',
        a: 'Sí. Al darte de alta eliges entrar con tu correo y contraseña o con tu cuenta de Google.',
      },
      {
        q: 'He olvidado la contraseña',
        a: 'En la pantalla de acceso, «He olvidado mi contraseña»: te mandamos un código a tu correo y eliges otra. Si no te llega, mira en spam.',
      },
      {
        q: '¿Puedo usar el mismo correo como cliente y como negocio?',
        a: 'Sí. La cuenta de Bipsy (para reservar) y la de Bipsy Business (para tu negocio) son dos cuentas distintas, aunque usen el mismo correo, y cada una tiene su contraseña.',
      },
      {
        q: '¿Cómo doy de baja el negocio?',
        a: `Desde Bipsy Business. Desde ese momento dejas de aparecer en Bipsy y de aceptar reservas, y se cancelan tus citas futuras con la devolución íntegra a los clientes. Tienes ${DELETION_GRACE_DAYS} días para arrepentirte volviendo a entrar; después, la cuenta se elimina.`,
      },
      {
        q: '¿La baja cancela también la suscripción?',
        a: 'Si pagas desde el panel web, sí: dejamos de renovarla. Si la contrataste en Google Play o App Store, cancélala también allí, porque ninguna tienda deja que el vendedor la cancele por ti.',
      },
    ],
  },
];

/**
 * The order of the topics on the landing page: starting out, the day to day,
 * clients, money, the team, the listing, the plan and the account, and support
 * last.
 */
const ORDER = [
  'empezar', 'agenda', 'dia-a-dia', 'cancelaciones', 'lista-espera',
  'clientes', 'resenas', 'cobros', 'pagos-online',
  'equipo', 'ausencias', 'fichaje', 'ficha',
  'plan', 'suscripcion', 'cuenta', 'soporte',
];

const ALL = [...HELP_FAQ, ...EXTRA];
export const BUSINESS_FAQ: FaqGroup[] = [
  ...ORDER.map((id) => ALL.find((g) => g.id === id)).filter((g): g is FaqGroup => !!g),
  // Anything new that was not given a place above still shows, at the end.
  ...ALL.filter((g) => !ORDER.includes(g.id)),
];

export { SUPPORT_EMAIL };
