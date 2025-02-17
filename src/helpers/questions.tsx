import { IconProgressHelp } from "@tabler/icons-react"
import { InfoUts } from "./information"

export const QUESTION: InfoUts[] = [
  {
    name: '¿Cómo puedo matricular?',
    description: `Ingresa a www.uts.edu.co/inscripciones y sigue los pasos:
      1. Diligencia el formulario de inscripción.
      2. Realiza el pago de los derechos de inscripción.
      3. Presenta la documentación requerida.
      4. Realiza la entrevista.
    `,
    icon: <IconProgressHelp size={24} strokeWidth={1.5} />
  },
]