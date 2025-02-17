import ButtonChat from "@/components/ButtonChat";
import ButtonStopSpeaker from "@/components/ButtonStopSpeaker";
import Card from "@/components/Card";
import CardsInformacion from "@/components/CardsInformation";
import RecordConversation from "@/components/RecordConversation";
import { INFORMATION } from "@/helpers/information";
import { QUESTION } from "@/helpers/questions";

export default function Home() {
  return (
    <section className="bg-green-100 h-full">
      <main className="max-w-7xl p-4 m-auto">
        <Card
          title="Bienvenido a nuestro asistente virtual"
          subtitle="Selecciona una opción para obtener más información o usa el micrófono para hacer una pregunta"
          footer={<section className="flex gap-3">
            <RecordConversation />
            <ButtonChat />
          </section>}
          startSpeaker
        />
        <CardsInformacion
          section={{
            title: 'Servicios UTS',
            description: "Bienestar Institucional, Servicios de Salud, Póliza Estudiantil, Orientación Vocacional, Biblioteca, Bolsa de Empleo UTS, Base Documental, Repositorio Institucional"
          }}
          dataSection={INFORMATION}
        />
        <CardsInformacion
          section={{
            title: 'Preguntas Frecuentes',
            description: "Econtrarás las preguntas más frecuentes de los estudiantes de la UTS"
          }}
          dataSection={QUESTION}
        />
      </main>
      <ButtonStopSpeaker />
    </section>
  );
}
