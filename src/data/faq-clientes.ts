import type { FaqGroup } from './faq';
import { SUPPORT_EMAIL } from './site';

/**
 * Help for the people who book, not for the businesses that take the
 * bookings — the other half of the help centre.
 *
 * ⚠️ The answers marked «HelpSheet, verbatim» are the client app's own text,
 * copied from `HelpSheet` (mirrored in bipsy-web-app's profile page). If the
 * sheet changes in the app, it changes here. The rest are written from
 * bipsy-web-app (booking flow, waitlist sheet and offer, payments) and its
 * legal pages, and from the business side of the same features
 * (bipsy-business-web-app `features.data.ts`); nothing here describes
 * anything the app does not do today.
 */
export const CLIENT_FAQ: FaqGroup[] = [
  {
    id: 'reservar',
    label: 'Reservar una cita',
    icon: 'event_available',
    items: [
      {
        // HelpSheet, verbatim.
        q: 'Cómo reservo una cita',
        a: 'Busca un negocio en Explorar, entra en su ficha y elige el servicio. Después te pedimos día, hora y, si el negocio tiene equipo, con quién quieres ir.',
      },
      {
        q: '¿Tengo que descargarme la app?',
        a: 'No hace falta. Puedes reservar desde la web, en bipsy.es, igual que desde la app, que es gratuita en iPhone (en Android llega en unas semanas). En la app tienes además los avisos de tus citas en el móvil.',
      },
      {
        q: '¿Necesito una cuenta?',
        a: 'Sí. Para reservar hay que entrar con tu cuenta de Bipsy: así el negocio sabe quién va, y tú tienes tus citas, tus avisos y tus pagos en un mismo sitio.',
      },
      {
        q: '¿Cuánto cuesta usar Bipsy?',
        a: 'Nada. Para ti Bipsy es gratis: reservar, cambiar o cancelar no tiene coste. Quien paga una suscripción es el negocio. Lo único que puedes llegar a pagar es lo que cobre el negocio por su servicio y, si lo tiene puesto, una tarifa por cancelar tarde o no aparecer.',
      },
      {
        q: '¿Cómo encuentro un sitio cerca?',
        a: 'En Explorar buscas por nombre, servicio o categoría, en lista o en el mapa. Si activas la ubicación, te enseñamos primero lo que tienes cerca.',
      },
      {
        q: '¿Puedo elegir con quién voy?',
        a: 'Sí, si el negocio tiene equipo. Eliges a la persona o «cualquiera disponible», que te enseña más horas libres.',
      },
      {
        q: '¿Y si el servicio es a domicilio?',
        a: 'Al reservar te pedimos la dirección donde quieres que te atiendan.',
      },
      {
        q: '¿Me recordáis la cita?',
        a: 'Sí, te llega un recordatorio el día anterior. Y si el negocio la confirma, la cambia o la cancela, te avisamos al momento.',
      },
      {
        q: 'Quiero volver al mismo sitio',
        a: 'Usa «Volver a reservar»: está en tus citas pasadas y en la ficha del negocio, y te deja el mismo servicio (y la misma persona, si la elegiste) listo para escoger hora. También puedes guardar los sitios que te gustan en Favoritos.',
      },
      {
        q: 'Un negocio me ha dado un código, ¿dónde lo pongo?',
        a: 'Al crear tu cuenta. Así cuentas como invitado de ese negocio.',
      },
      {
        q: 'No encuentro el negocio al que voy',
        a: 'Puede que todavía no esté en Bipsy. Díselo: cuando se den de alta, sus clientes pueden reservar desde aquí. Si crees que sí está pero no te sale, prueba a buscar por el nombre exacto o por la ciudad.',
      },
    ],
  },

  {
    id: 'cambios',
    label: 'Cambiar o cancelar',
    icon: 'edit_calendar',
    items: [
      {
        // HelpSheet, verbatim.
        q: 'Cómo cancelo o cambio una cita',
        a: 'En Mis citas, abre la que quieras y usa "Cambiar día u hora" o "Cancelar cita". Si el negocio cobra por cancelar tarde, la propia pantalla te dice hasta cuándo es gratis y cuánto costaría después.',
      },
      {
        q: '¿Hasta cuándo puedo cancelar gratis?',
        a: 'Lo decide cada negocio, así que no hay un plazo único. El que se aplica a tu cita aparece en la propia pantalla de cancelar, antes de que confirmes nada.',
      },
      {
        q: '¿Cuánto me pueden cobrar por cancelar tarde?',
        a: 'Lo que diga la política del negocio, que aceptas al reservar. En Bipsy esa tarifa nunca pasa del 50 % del precio del servicio ni de 100 €.',
      },
      {
        q: 'Qué pasa si no aparezco',
        a: 'Si el negocio tiene puesta una tarifa por no presentarse, te la puede cobrar con la tarjeta que guardaste al reservar. Si no la tiene, no se te cobra nada, pero el negocio ve que no fuiste.',
      },
      {
        q: 'El negocio me ha cancelado la cita',
        a: 'Te llega el aviso y la cita pasa a cancelada en Mis citas. Si habías pagado o tenías tarjeta guardada, no se te cobra nada por una cancelación del negocio. Para buscar otro hueco, entra en su ficha y reserva de nuevo.',
      },
      {
        q: 'Mi cita sale «pendiente»',
        a: 'Algunos negocios confirman cada reserva a mano. Te avisamos en cuanto la confirmen; si no la confirman a tiempo, se cancela sola y te lo decimos.',
      },
    ],
  },

  {
    id: 'lista-espera',
    label: 'Lista de espera',
    icon: 'hourglass_top',
    items: [
      {
        q: 'No hay hueco el día que quiero',
        a: 'Si el negocio tiene lista de espera, apúntate desde la misma pantalla de horas. Te avisamos si alguien cancela y se libera un hueco que te encaje.',
      },
      {
        q: '¿Puedo decir qué días me vienen bien?',
        a: 'Sí: marcas los días y las franjas que te vienen bien y con quién quieres ir. Sin marcar nada te avisamos de cualquier hueco, y con «cualquiera» te avisamos de más. También puedes dejar una nota para el negocio.',
      },
      {
        q: 'Me ha llegado un hueco, ¿qué hago?',
        a: 'Ábrelo y acéptalo antes de que termine el plazo que se indica. Si el negocio lo pide, aceptas su política de cancelación o guardas una tarjeta en el mismo paso (guardarla no te cobra nada).',
      },
      {
        q: '¿Y si no me viene bien?',
        a: 'Pulsa «No me viene bien»: sales de esa lista y el hueco pasa al siguiente. Puedes volver a apuntarte cuando quieras.',
      },
    ],
  },

  {
    id: 'pagos',
    label: 'Pagos',
    icon: 'credit_card',
    items: [
      {
        // HelpSheet, verbatim.
        q: 'Por qué me piden una tarjeta',
        a: 'Algunos negocios la exigen como garantía para aceptar la reserva. No se cobra nada al guardarla: solo sirve si cancelas tarde o no apareces y ese negocio aplica tarifa.',
      },
      {
        q: '¿Puedo pagar la cita desde la app?',
        a: 'Si el negocio lo tiene activado, sí: al reservar (cuando lo permite o lo pide) o al terminar la cita, cuando te llega la petición de pago al móvil. Pagas con tarjeta o Apple Pay. Si prefieres pagar en el local, el negocio lo apunta como cobrado.',
      },
      {
        // Privacidad → «Stripe», literal: Bipsy nunca ve los datos.
        q: '¿Dónde se guarda mi tarjeta?',
        a: 'En Stripe, que es quien procesa los pagos. Los datos de la tarjeta los recoge Stripe directamente y Bipsy nunca llega a verlos.',
      },
      {
        q: '¿Cómo me devuelven un pago?',
        a: 'La devolución la hace el negocio desde su app, entera o en parte, y vuelve a la misma tarjeta con la que pagaste. Si el negocio cancela una cita que ya habías pagado, se te devuelve.',
      },
      {
        q: 'Me han cobrado algo que no entiendo',
        a: `Escríbenos a ${SUPPORT_EMAIL} con la fecha y el importe, y lo miramos. Si el cobro es del negocio por su servicio, lo suyo es hablarlo primero con ellos: el dinero de una cita es suyo, no nuestro.`,
      },
    ],
  },

  {
    id: 'mensajes',
    label: 'Hablar con el negocio',
    icon: 'chat',
    items: [
      {
        q: '¿Puedo escribir al negocio?',
        a: 'Sí, por el chat de Bipsy, si el negocio lo tiene activado. Puedes mandar mensajes, fotos y documentos —por ejemplo, el corte que quieres—, y te llega una notificación cuando te contestan.',
      },
      {
        q: '¿Se ve mi cita en la conversación?',
        a: 'Sí. Cuando reservas, cancelas o cambias una cita, queda anotado en el propio chat, así los dos tenéis el historial a mano.',
      },
      {
        q: 'Algo del precio o del horario',
        a: 'El precio, el horario y la política de cancelación los pone cada negocio. Para eso, lo más rápido es escribirle o llamarle directamente.',
      },
    ],
  },

  {
    id: 'cuenta',
    label: 'Tu cuenta',
    icon: 'account_circle',
    items: [
      {
        // HelpSheet, verbatim.
        q: 'Cómo cambio mi contraseña',
        a: 'Ajustes → Cambiar contraseña. Al cambiarla se cierran tus sesiones en los demás dispositivos; en este sigues dentro.',
      },
      {
        // HelpSheet, verbatim.
        q: 'Puedo dejar una reseña',
        a: 'Sí, después de tu cita, desde Ajustes → Reseñas. Es una por negocio: si vuelves más adelante podrás actualizarla borrando la anterior.',
      },
      {
        // HelpSheet, verbatim.
        q: 'Cómo elimino mi cuenta',
        a: 'Ajustes → Eliminar cuenta. Se te pide la contraseña. Tus reservas pasadas se conservan anonimizadas y las futuras se cancelan.',
      },
      {
        q: 'No puedo entrar en mi cuenta',
        a: `Usa "He olvidado mi contraseña" en la pantalla de acceso y te mandamos un código a tu correo para ponerte otra. Si no llega, mira en spam; y si sigues fuera, escríbenos a ${SUPPORT_EMAIL} contándonos con qué dirección te registraste.`,
      },
      {
        q: '¿Puedo entrar con Google o Apple?',
        a: 'Sí, además de con tu correo y una contraseña.',
      },
      {
        q: 'Tengo un negocio y también reservo en otros',
        a: 'Son dos cuentas distintas aunque uses el mismo correo: la de Bipsy, para reservar, y la de Bipsy Business, para tu negocio. Cada una con su contraseña.',
      },
    ],
  },

  {
    id: 'soporte',
    label: 'Si algo falla',
    icon: 'support_agent',
    items: [
      {
        q: 'Cómo os escribo',
        a: `A ${SUPPORT_EMAIL}, poniendo «Soporte» en el asunto. Si el problema es con una cita, dinos el negocio, el día y la hora; si es con un cobro, la fecha y el importe; y si algo falla en la app, qué estabas haciendo justo antes.`,
      },
      {
        q: 'Cuánto tardáis en contestar',
        a: 'Contestamos en días laborables y lo antes que podemos. Escríbenos desde el correo con el que te registraste: para cosas que afectan a tu cuenta, si no, tenemos que comprobar de otra forma que eres tú.',
      },
      {
        q: 'Quiero avisar de una ficha o una reseña',
        a: `Escríbenos a ${SUPPORT_EMAIL} con «Contenido» en el asunto y dinos cuál y por qué. Sirve para fichas, fotos y valoraciones.`,
      },
      {
        q: 'Quiero mis datos, o que los borréis',
        a: `Con «Privacidad» en el asunto, a ${SUPPORT_EMAIL}. Puedes pedir acceder a tus datos, corregirlos o que los eliminemos; los detalles están en la página de Privacidad de la web de Bipsy.`,
      },
    ],
  },
];
