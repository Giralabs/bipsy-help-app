import type { FaqGroup } from './faq';
import { SUPPORT_EMAIL } from './site';

/**
 * Help for the people who book, not for the businesses that take the
 * bookings — the other half of the help centre.
 *
 * ⚠️ The six answers marked below are the client app's own text, copied
 * verbatim from `HelpSheet` (mirrored in bipsy-web-app's profile page). If
 * the sheet changes in the app, it changes here. The rest are written from
 * the client web's legal pages, which are cited where it matters; nothing
 * here describes anything the app does not do today.
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
        a: 'No hace falta. Puedes reservar desde la web de Bipsy igual que desde la app, que es gratuita en Android y iPhone. En la app tienes además los avisos de tus citas en el móvil.',
      },
      {
        q: '¿Cuánto cuesta usar Bipsy?',
        a: 'Nada. Para ti Bipsy es gratis: reservar, cambiar o cancelar no tiene coste. Quien paga una suscripción es el negocio. Lo único que puedes llegar a pagar es lo que cobre el negocio por su servicio y, si lo tiene puesto, una tarifa por cancelar tarde o no aparecer.',
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
        q: 'Qué pasa si no aparezco',
        a: 'Si el negocio tiene puesta una tarifa por no presentarse, te la puede cobrar con la tarjeta que guardaste al reservar. Si no la tiene, no se te cobra nada, pero el negocio ve que no fuiste.',
      },
      {
        q: 'El negocio me ha cancelado la cita',
        a: 'Te llega el aviso y la cita pasa a cancelada en Mis citas. Si habías pagado o tenías tarjeta guardada, no se te cobra nada por una cancelación del negocio. Para buscar otro hueco, entra en su ficha y reserva de nuevo.',
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
        // Privacidad → «Stripe», literal: Bipsy nunca ve los datos.
        q: '¿Dónde se guarda mi tarjeta?',
        a: 'En Stripe, que es quien procesa los pagos. Los datos de la tarjeta los recoge Stripe directamente y Bipsy nunca llega a verlos.',
      },
      {
        q: 'Me han cobrado algo que no entiendo',
        a: `Escríbenos a ${SUPPORT_EMAIL} con la fecha y el importe, y lo miramos. Si el cobro es del negocio por su servicio, lo suyo es hablarlo primero con ellos: el dinero de una cita es suyo, no nuestro.`,
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
        a: `Usa "He olvidado mi contraseña" en la pantalla de acceso y te mandamos un correo para ponerte otra. Si el correo no llega, mira en spam; y si sigues fuera, escríbenos a ${SUPPORT_EMAIL} contándonos con qué dirección te registraste.`,
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
