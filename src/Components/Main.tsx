import { Fade } from 'react-awesome-reveal';

export default function Main() {
  return (
    <>
      <main className="flex flex-col items-center justify-center gap-2 h-dvh">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">gaurav dal</h1>
        <Fade direction="left" delay={1000} duration={500} triggerOnce={true}>
          <ul className="flex list-none gap-2">
            <li>ILLUSTRATION</li>
            <li>x</li>
            <li>CONCEPT</li>
            <li>x</li>
            <li>DESIGN</li>
          </ul>
        </Fade>
      </main>
    </>
  );
}
