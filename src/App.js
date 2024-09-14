import "./App.css";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
function App() {
  // Initialize refs with an empty array
  const h3Refs = useRef([]);
  const headername = useRef([]);
  const imgRefs = useRef([]);

  const leftImg = useRef(null);
  const rightImg = useRef(null);
  const centerImg = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(h3Refs.current, {
      y: -30,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.3,
      ease: "power2.out",
      opacity: 0,
    });

    tl.from(headername.current, {
      x: -300,
      duration: 1,
      opacity: 0,
      stagger: 0.4,
      color: "black",
      ease: "power2.out",
    });

    if (imgRefs.current.length === 3) {
      tl.to(imgRefs.current, {
        x: -50,
        opacity: 1,
        duration: 2,
        stagger: 0.8,
        rotate: (index) => {
          if (index === 0) return -2; // First image rotates left
          if (index === 1) return -5; // Second image stays in place
          if (index === 2) return -10;
        },
      });
    }
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top-=500", // Starting position of the scroll animation
        end: "bottom-=400 top", // End point for the scroll
        scrub: true,
      },
    });

    // Animations for each image
    tl.to(leftImg.current, { x: -900, opacity: 1, ease: "none", duration: 0.1 }) // Move left 500px
      .to(
        rightImg.current,
        { x: 900, opacity: 1, ease: "none", duration: 0.1 },
        "<"
      ) // Move right 500px simultaneously
      .to(
        centerImg.current,
        { x: 0, opacity: 1, ease: "none", duration: 0.1 },
        "<"
      ); // Center image stays in place
  }, []);

  //intro paragrapgh animation

  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      paragraphRef.current,
      {
        y: 50, // Start from 50px below its original position
        opacity: 0, // Start with 0 opacity
      },
      {
        y: 0, // End at its original position
        opacity: 1, // End with full opacity
        duration: 3, // Duration of the animation
        scrollTrigger: {
          trigger: paragraphRef.current, // The element that triggers the animation
          start: "top bottom", // Animation starts when the top of the paragraph hits the bottom of the viewport
          end: "top top", // Animation ends when the top of the paragraph hits the top of the viewport
          scrub: true, // Makes the animation tied to the scroll position
        },
      }
    );
  }, []);
  return (
    <div className="">
      <div className=" bg-black   w-screen h-fit">
        <nav className="flex   justify-between">
          <div className="p-10 text-[25px] h-auto  normal-case">
            <h3
              ref={(el) => (h3Refs.current[0] = el)}
              className="text-white text-[25px]  ml-8  font-mono normal-case"
            >
              TOLA
            </h3>
          </div>
          <div className="flex gap-20 p-10 ">
            <h3
              ref={(el) => (h3Refs.current[1] = el)}
              className="text-white text-[25px]  normal-case"
            >
              Contact
            </h3>
            <h3
              ref={(el) => (h3Refs.current[2] = el)}
              className="text-white text-[25px]   font-mono  normal-case"
            >
              About
            </h3>
            <h3
              ref={(el) => (h3Refs.current[3] = el)}
              className="text-white text-[25px]   font-mono  normal-case"
            >
              Design
            </h3>
          </div>
        </nav>
        <div className="mt-[150px] flex flex-col justify-center items-center relative ">
          <div className="text-[250px] text-cyan-400 relative z-20  gap-0  text-center font-normal  leading-none">
            <h1 ref={(el) => (headername.current[0] = el)}>HELLO WE'RE</h1>
            <h1 className="   " ref={(el) => (headername.current[1] = el)}>
              TOLA
            </h1>
            <h1 ref={(el) => (headername.current[2] = el)}>DESIGN</h1>
          </div>

          <img
            ref={(el) => (imgRefs.current[0] = el)}
            className="z-10 opacity-0 absolute h-[600px] w-[600px] "
            src="/model2.avif"
            alt="model"
          />
          <img
            ref={(el) => (imgRefs.current[1] = el)}
            className="z-10 opacity-0 absolute h-[600px] w-[600px] "
            src="/model1.avif"
            alt="model"
          />
          <img
            ref={(el) => (imgRefs.current[2] = el)}
            className="z-10 opacity-0 absolute h-[600px] w-[600px] "
            src="/model3.avif"
            alt="model"
          />
        </div>

        <div className="mt-[150px] bg-black h-[1000px] w-full  items-center flex">
          <div className=" flex z-50 relative w-[100%] h-[600px] justify-center">
            <img
              ref={leftImg}
              className="z-10  absolute h-[600px] w-[600px] "
              src="/model2.avif"
              alt="model"
            />

            <img
              ref={centerImg}
              className="z-10 absolute h-[600px] w-[600px] "
              src="model1.avif"
              alt="model"
            />
            <img
              ref={rightImg}
              className="z-10  absolute h-[600px] w-[600px] "
              src="/model4th.avif"
              alt="model"
            />
          </div>
        </div>
        <div className="flex flex-col text-white  text-center align-middle justify-center">
          <div className="flex">
            <p
              ref={paragraphRef}
              className="  text-center text-[30px] font-light p-20 "
            >
              Here at TOLA, we elegantly merge ancient tradition with
              contemporary flair. Our brand is dedicated to creating jewelry
              that beautifully bridges the gap between historic craftsmanship
              and modern design. Named after the ancient metric used to measure
              gold, TOLA not only pays tribute to a rich heritage but also
              infuses each piece with a fresh, innovative approach. At TOLA, we
              honor traditional goldsmithing techniques that have been refined
              over centuries. Our artisans are skilled in time-honored methods
              such as intricate filigree, detailed engraving, and classic
              settings. These techniques are combined with modern design
              elements to create jewelry that feels both timeless and
              cutting-edge. Each piece is meticulously handcrafted, ensuring
              exceptional quality and precision. Our design philosophy centers
              on creating jewelry that reflects the wearers personal story. We
              believe that jewelry should be more than just an accessory; it
              should be an expression of identity and a celebration of special
              moments. To achieve this, we blend high-quality materials with
              innovative design principles. Our collections feature a range of
              precious metals, including gold, platinum, and silver, chosen for
              their beauty and durability. We stay attuned to contemporary
              fashion trends while remaining committed to creating designs that
              transcend fleeting styles. Our goal is to offer pieces that not
              only complement current fashion but also stand the test of time.
              Whether you are seeking an elegant engagement ring, a thoughtful
              gift, or a personal indulgence, TOLA offers a collection that
              blends classic elegance with a modern twist. Sustainability and
              ethical practices are central to our values.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-start">
              <img
                className="z-10 opacity-1  h-[600px] w-[600px] "
                src="/model3.avif"
                alt="model"
              />
            </div>
            <div className="flex justify-end">
              <img
                className="z-10 opacity-1  h-[600px] w-[600px] "
                src="model3.avif"
                alt="model"
              />
            </div>
            <div className="flex justify-start">
              <img
                className="z-10 opacity-1  h-[600px] w-[600px] "
                src="/model3.avif"
                alt="model"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
