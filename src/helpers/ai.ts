import { CohereClient } from "cohere-ai";
import { INFORMATION } from "./information";
import { QUESTION } from "./questions";
import { Message } from "cohere-ai/api";

const cohere = new CohereClient({
  token: "ZABkZCKX78XJTVaqscRGMr4SioNND7cm66dhxrdz", // This is your trial API key
});

const setChat = async (message: string, chatHistory: Message[]) => {
  const stream = await cohere.chatStream({
    model: "command-r-plus",
    message: message,
    temperature: 0.3,
    chatHistory: [{"role": "USER", "message": "Que es bienestar institucional?"}, {"role": "CHATBOT", "message": "Bienestar Institucional es la dependencia administrativa dentro de una institución educativa que se encarga de promover y velar por el bienestar y el buen desarrollo de la actividad académica de su comunidad estudiantil, profesorado y personal administrativo. Su objetivo principal es contribuir al desarrollo integral de los individuos que conforman la comunidad educativa, enfocándose en su bienestar físico, psico-afectivo y espiritual.\n\nBienestar Institucional trabaja activamente en la implementación de programas y actividades que fomenten el potencial individual y colectivo de los estudiantes, profesores y personal administrativo, con el fin de mejorar su calidad de vida y crear un ambiente propicio para el aprendizaje y el crecimiento personal.\n\nSus iniciativas pueden incluir actividades deportivas, culturales, de recreación, asesoría psicológica, apoyo académico, entre otras, que enriquezcan la vida de los miembros de la comunidad educativa y contribuyan a su formación integral."}, {"role": "USER", "message": "Cual es la dependencia administrativa que se encarga de promover y velar por el bienestar y el buen desarrollo de las actividades académicas?"}, {"role": "CHATBOT", "message": "La dependencia administrativa que se encarga de promover y velar por el bienestar y el buen desarrollo de las actividades académicas es el área de Bienestar Institucional."}, {"role": "USER", "message": "En donde debo ingresar para realizar mi matricula?"}, {"role": "CHATBOT", "message": "Para realizar tu matrícula, debes ingresar al sitio web www.uts.edu.co/inscripciones y seguir los siguientes pasos:\n\n1. Diligencia el formulario de inscripción en línea.\n2. Realiza el pago de los derechos de inscripción.\n3. Presenta la documentación requerida.\n4. Programa y asiste a la entrevista.\n\nEs importante que sigas los pasos cuidadosamente y entregues toda la documentación necesaria para garantizar un proceso de matrícula exitoso."}, ...chatHistory],
    promptTruncation: "AUTO",
    preamble: `Te pasaré temarios en los cuales debes ser experto, la información que te brindaré, estará separada con guiones para que sepas los temas, cualquier respuesta que brindes debe estar dentro del contexto de los siguientes temas:
    ${INFORMATION.map(info => `${info.name}: ${info.description}`).join("\n--------------------------------\n")}
    --------------------------------
    ${QUESTION.map(question => `${question.name}: ${question.description}`).join("\n--------------------------------\n")}
    `,
  });

  let textGenerated = "";

  for await (const chat of stream) {
    if (chat.eventType === "text-generation") {
      textGenerated += chat.text;
    }
  }
  return textGenerated;
};

export { setChat };