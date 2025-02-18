import { IconTreadmill, IconBriefcase2Filled } from "@tabler/icons-react"
import { ReactNode } from "react"

export type InfoUts = {
  name: string
  description: string
  icon: ReactNode
}

export const INFORMATION: InfoUts[] = [
  {
    name: 'Bienestar institucional',
    description: 'Bienestar institucional es la dependencia administrativa que brinda, promueve y trabaja para el buen desarrollo de la actividad académica, contribuyendo activamente en la formación integral de la comunidad uteísta a través de la implementación de programas que orienten el desarrollo físico, psico-afectivo, espiritual, potencial individual y colectivo del estudiante, profesores y personal administrativo que propenden por el mejoramiento de su calidad de vida.',
    icon: <IconBriefcase2Filled size={24} strokeWidth={1.5} />
  },
  {
    name: 'Póliza estudiantil',
    description: `Póliza de accidentes estudiantiles, Este procedimiento está orientado a la atención de los accidentes ocurridos dentro de los recintos de la institución, laboratorios, campos deportivos y lugares de práctica de los estudiantes de las Unidades Tecnológicas de Santander.
    PASOS A SEGUIR
    1. En caso de un accidente se deberá dar aviso de inmediato a alguna de las siguientes personas, dependiendo de donde ocurra el accidente: Profesor o encargado de la actividad académica Coordinador del programa académico al que pertenece el estudiante Profesionales de salud de Bienestar Institucional
    Trabajador de las Unidades Tecnológicas de Santander
    2. La persona informada, a partir de la disponibilidad horaria del médico de Bienestar Institucional, direccionará al estudiante al consultorio médico; en caso contrario, se pondrá en contacto con la línea gratuita de la EPS a la cual se encuentra afiliado el estudiante para que se le indique la IPS en la cual será atendido.
    En su defecto, se comunicará con la aseguradora Mundial de Seguros S.A desde un teléfono fijo Nivel Nacional: 01 8000 111 935 o en   Bogotá: 3274712 / Opción 2 Opción 4, desde un celular: #899 Opción 2, para solicitar la información de la Institución de Prestación de Servicio (IPS) en convenio y más cercana al sitio del accidente para que sea asistido el estudiante.`,
    icon: <IconTreadmill size={24} strokeWidth={1.5} />
  },
  {
    name: 'Biblioteca',
    description: `La biblioteca es el Centro de Recursos Bibliográficos encargado de apoyar y soportan los currículos de los programas académicos de la Institución , con el propósito de satisfacer todas las necesidades de información y garantizar ,el acceso y la consulta permanente y eficaz a los requerimientos de la comunidad académica; para el desarrollo adecuado de los procesos de docencia, investigación y proyección social, y dar forma siempre a nuevas ideas y proyectos, fundamentales dentro de una academia creativa e innovadora.
Colecciones y Servicios
Colección General: conformada por materiales bibliográficos relacionados con todas las áreas del saber.
Colección de Reserva: conformada por materiales utilizados como textos de apoyo a las asignaturas propias de los programas académicos de las UTS.
Colección de Referencia: conformada por materiales bibliográficos de consulta rápida tales como normas, enciclopedias, diccionarios, directorios, manuales atlas, índices, estadísticas, resúmenes.`,
    icon: <IconTreadmill size={24} strokeWidth={1.5} />
  },
  {
    name: 'Servicios en salud',
    description: `Nuestro principal objetivo es contribuir al mejoramiento de la calidad de vida de la comunidad uteísta, a través de la prestación de primeros auxilios y el servicio de atención primaria en salud en la modalidad presencial o teleconsulta, realizadas por profesionales especializados, en transversalidad con los programas de Promoción de la salud y Prevención de la enfermedad.

Estos servicios son para ustedes: Estudiantes, Docentes y Administrativos. Para acceder a los mismos, pueden registrarse en el link: https://forms.office.com/r/Mj0TGKAArq Nuestros profesionales los contactarán y atenderán.
CAMPUS BUCARAMANGA – PIEDECUESTA – EDUCACIÓN VIRTUAL
Contamos con los siguientes servicios:
MEDICINA GENERAL LABORAL
Ubicado en el Piso 1, Edificio Paideía (B)
Doctora Martha Morales
Doctor Edgar Ardila
ODONTOLOGÍA
Ubicado en el Piso 1, edificio Paideía (B)
Doctora Yamile Portilla
Auxiliar Mireya Ortega
PSICOLOGÍA 
Ubicado en el Piso 3, Edificio Xemys (D)
Psicologa Marly Yeritza Pico
Psicologa Aravely Vásquez Lagos
Psicologa María Isabel Rodríguez
Psicologa Luz Ángela Patiño
Psicologa Diana Paola Córdoba
ENFERMERÍA
Ubicado en Fisioterapia, Piso 1, Edificio Paideía (B)
Enfermera Leidy`,
    icon: <IconTreadmill size={24} strokeWidth={1.5} />
  },
  {
    name: 'Orientación vocacional',
    description: `Apreciado Aspirante, hoy en día, los procesos de proyección de vida de los estudiantes de educación media revisten mayor importancia. Al llegar al último ciclo de la educación secundaria o bachillerato, siempre salta la duda entre los adolescentes: cómo enfrentar la siguiente etapa de su vida. Si es hora de seguir con los estudios mediante una carrera tecnológica o universitaria o si es hora de empezar a laborar.
La decisión no es fácil. Los jóvenes deben tener en cuenta factores como los recursos económicos, la oferta educativa y las condiciones sociales y familiares. Pero, antes de dar este importante paso, es indispensable que los futuros bachilleres sean orientados hacia su vocación profesional. Escoger la carrera universitaria o tecnológica adecuada, o el oficio u empleo mediante al orientación vocacional y profesional.
Permitirá que el estudiante se identifique con lo que hace y saber hacer, para que de una manera acertada pueda escoger sus estudios superiores y/o oficio o labor conforme a sus actitudes.
Para atender a estos retos las Unidades Tecnológicas de Santander en busca de facilitar una experiencia de acercamiento vivencial a los diferentes procesos que se generan al abordar el tema de la orientación vocacional y profesional, desde una perspectiva de la orientación socio-ocupacional prestan un servicio de guía y charlas motivacionales.
Servicio Gratuito
Te invitamos a que agendes tu cita, y podrás presentar tu prueba OVP con un software que te indicará cuáles son los programas académicos que podrías estudiar, según los resultados obtenidos. Nosotros te prestamos un computador para presentar la prueba en nuestras instalaciones.
Si eres Docente, Coordinador o Rector de un Colegio, puedes solicitar la visita del equipo de las Unidades Tecnológicas de Santander, para realizar la prueba OVP directamente en la sede de tu institución educativa o podrás planear la visita de tus alumnos y conocer nuestras instalaciones.
Horario de atención
Lunes a viernes de 7:30 a. m. a 12 medio día y 2:00 p. m. a 6:00 p. m.
Sede Bucaramanga, Edificio B piso 1
Teléfono: 7 - 6 91 77 00 extensión 1323

Agenda tu cita, presenta la prueba, recibe la orientación vocacional que necesitas, conoce las UTS, ¡aquí tus sueños se cumplen, tenemos una oportunidad para ti!`,
    icon: <IconTreadmill size={24} strokeWidth={1.5} />
  },
]