import { InfoUts } from "@/helpers/information";
import Card from "./Card";
import TitleSection, { Section } from "./TtileSection";

export default function CardsInformacion({
  dataSection,
  section
}: {
  dataSection: InfoUts[]
  section: Section
}) {
  return (
    <section>
      <TitleSection
        section={section}
      />
      <div className="grid my-3 h-full max-h-[800px] overflow-x-hidden overflow-y-auto grid-cols-1 md:grid-cols-2 gap-4">
        {dataSection.map((info, index) => (
          <Card
            key={index + 'info'}
            title={info.name}
            description={info.description}
            icon={info.icon}
          />
        ))}
      </div>
    </section>
  )
}