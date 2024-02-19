import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './UI/accordion';
import { Link } from 'react-router-dom';

export default function CustomAccordion() {
  return (
    <>
      <Accordion type="single" collapsible className="ml-3">
        <AccordionItem value="item-1" className="border-none justify-center">
          <AccordionTrigger className="hover:no-underline justify-center text-1xl">ILLUSTRATIONS</AccordionTrigger>
          <AccordionContent className="text-start border-b underline">
            <Link to="/portraits">Portraits</Link>
          </AccordionContent>
          <AccordionContent className="text-start border-b underline">
            <Link to="/backgrounds">Backgrounds</Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
