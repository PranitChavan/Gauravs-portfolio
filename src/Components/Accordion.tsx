import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './UI/accordion';

export default function CustomAccordion() {
  return (
    <>
      <Accordion type="single" collapsible className="ml-3">
        <AccordionItem value="item-1" className="border-none justify-center">
          <AccordionTrigger className="hover:no-underline justify-center text-1xl">ILLUSTRATIONS</AccordionTrigger>
          <AccordionContent className="text-start border-b underline">Portraits</AccordionContent>
          <AccordionContent className="text-start border-b underline">Backgrounds</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
