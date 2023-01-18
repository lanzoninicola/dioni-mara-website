import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StickyContainer from "../layout/sticky-container/sticky-container";
import { Video } from "../primitives";

const AnimateSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const slideOneScrollY = useTransform(scrollYProgress, [0, 0.33], [1, 0]);
  const slideTwoScrollY = useTransform(
    scrollYProgress,
    [0.33, 0.66, 0.99],
    [0, 1, 0]
  );
  const slideThirdScrollY = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  console.log(slideOneScrollY);

  return (
    <section className="bg-tea-900 static h-[600vh]" ref={sectionRef}>
      <StickyContainer>
        <motion.div
          className="absolute inset-0 grid h-full place-items-center"
          data-element="content-background"
          style={{ opacity: backgroundOpacity }}
        >
          <div className="relative">
            <Video src="/assets/videos/massagen-costas.mp4" />
            <div className="bg-gradient-to-t from-tea-900/70 absolute inset-0 to-transparent"></div>
            <div className="bg-gradient-to-b from-tea-900/70 absolute inset-0 to-transparent"></div>
          </div>
        </motion.div>

        <div
          className="relative top-0 z-20 mt-0 flex h-screen flex-col items-center justify-center"
          data-element="content-text"
        >
          <motion.div
            className="absolute grid h-screen w-full place-items-center"
            data-element="first-slide"
            style={{ opacity: slideOneScrollY }}
          >
            <motion.h2
              className="-translate-y-10 text-center  text-3xl tracking-wide text-sky-500"
              style={{
                transform: `translateY(${slideOneScrollY}px)`,
              }}
            >
              O teu corpo e a tua mente estão falando contigo.
            </motion.h2>
          </motion.div>
          <motion.div
            className="absolute grid h-screen w-full place-items-center"
            data-element="second-slide"
            style={{ opacity: slideTwoScrollY }}
          >
            <h2 className="text-center text-3xl  tracking-wide text-sky-500">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            </h2>
          </motion.div>
          <motion.div
            className="absolute grid h-screen w-full place-items-center bg-sky-500"
            data-element="third-slide"
            style={{ opacity: slideThirdScrollY }}
          >
            <h2 className="text-2xl text-black">Hello World (3)</h2>
          </motion.div>
        </div>
      </StickyContainer>
    </section>
  );
};
