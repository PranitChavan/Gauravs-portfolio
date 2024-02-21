import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './UI/accordion';
import { FacebookIcon, InstagramIcon, MailIocn } from '@/assets/Svgs';

export function CustomAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg">Questions about freelance?</AccordionTrigger>
        <AccordionContent className="text-base md:text-xl">
          Eager to bring your ideas to life! For any work-related discussions, Please reach out to me via email: <span className="font-bold">dalgaurav7@gmail.com</span>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg">Socials?</AccordionTrigger>
        <AccordionContent className="flex items-center justify-start gap-2">
          <a href="https://www.facebook.com/digiart21" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/digi_art21" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="mailto:dalgaurav7@gmail.com" target="_blank" rel="noopener noreferrer">
            <MailIocn />
          </a>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
