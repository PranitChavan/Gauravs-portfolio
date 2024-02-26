import { CustomAccordion } from '@/Components/Accordion';
import { Fade } from 'react-awesome-reveal';
import { useEffect } from 'react';
import { Spotlight } from '@/Components/UI/spotlight';

export default function About() {
  useEffect(() => {
    document.title = `About`;
  }, []);

  return (
    <>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <Fade delay={500} duration={500} triggerOnce={true}>
        <div className="lg:max-w-3xl lg:m-auto container">
          <section className="my-16">
            <h1 className="pb-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-start bg-gradient-to-r from-gray-600 to-white text-transparent bg-clip-text">Hey, I'm gaurav</h1>
            <p className="mt-4 text-lg">As an experienced illustrator, I offer an arsenal of knowledge and variety within my craft, and I am confident in my ability to fluidly transition between artistic styles. From delicate details to bold and dynamic compositions, I am fully prepared to bring a creative concepts to life with grace and flare.</p>
          </section>
          <CustomAccordion />
        </div>
      </Fade>
    </>
  );
}
