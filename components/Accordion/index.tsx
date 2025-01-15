import AccordionItem from "./Item";
import { ContentInterface } from "../../interfaces";

const Accordion = ({ content }: { content: ContentInterface[] }) => {
  return (
    <div className="accordion flex flex-col">
      {content.map((item, index) => {
        return <AccordionItem key={item.id} content={item} index={index} />;
      })}
    </div>
  );
};

export default Accordion;
