import "./App.css";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
function App() {
  // Initialize refs with an empty array
  const h3Refs = useRef([]);
  // const headername = useRef([]);
  // const imgRefs = useRef([]);

  const leftImg = useRef(null);
  const rightImg = useRef(null);
  const centerImg = useRef(null);

  const slide1 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(h3Refs.current, {
      y: -30,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.3,
      ease: "linear",
      opacity: 0,
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        x: 500,
        trigger: leftImg.current,
        start: " bottom top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Animations for each image
    tl.to(leftImg.current, {
      delay: 0.5,
      left: 0,
      opacity: 1,
      ease: "linear",
      duration: 1.4,
    }) // Move left 500px
      .to(
        rightImg.current,
        {
          delay: 0.25,
          right: 0,
          opacity: 1,
          duration: 1.4,
          ease: "lienar",
        },
        "<"
      ) // Move right 500px simultaneously
      .to(
        centerImg.current,
        { x: 0, opacity: 1, ease: "linear", duration: 0.1 },
        "<"
      ); // Center image stays in place
  }, []);

  // intro paragrapgh animation

  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      paragraphRef.current,
      {
        y: 160, // Start from 50px below its original position
        opacity: 0, // Start with 0 opacity
      },
      {
        y: -70, // End at its original position
        opacity: 1, // End with full opacity
        duration: 2, // Duration of the animation
        scrollTrigger: {
          trigger: paragraphRef.current, // The element that triggers the animation
          start: " bottom+=600 top", // Animation starts when the top of the paragraph hits the bottom of the viewport
          end: "center top", // Animation ends when the top of the paragraph hits the top of the viewport
          scrub: 1, // Makes the animation tied to the scroll position
          // markers: true, // Uncomment for debugging
        },
      }
    );
  }, []);

  const headingRef = useRef(null);
  //glow image
  useEffect(() => {
    gsap.to(headingRef.current, {
      textShadow:
        "0 0 5px rgba(255, 215, 0, 1), 0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.7)",
    });
  }, []);

  //slide image 1
  useEffect(() => {
    gsap.fromTo(
      slide1.current,
      {
        opacity: 0,
        scale: 0.7, // Initial scale
        y: 100,
        delay: 1,
        // markers: true, // Uncomment for debugging
        ease: "linear",
        duration: 10,
      },
      {
        opacity: 1,
        y: -100,
        scale: 1,
        // x: "10vw", // Move the image to the left to cover the viewport width
        duration: 10, // Duration of the animation
        scrollTrigger: {
          duration: 10,

          trigger: slide1.current,
          start: "top center+=900px",
          end: "bottom bottom",
          scrub: 1,
          delay: 1,
          marler: true,
          ease: "linear",

          // markers: true, // Uncomment for debugging
        },
      }
    );
  }, []);
  const slide2 = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      slide2.current,
      {
        opacity: 0,
        scale: 0.7, // Initial scale
        y: 200,
        delay: 1,
        // markers: true, // Uncomment for debugging
        ease: "linear",
        duration: 10,
      },
      {
        opacity: 1,
        y: -200,
        scale: 1,
        // x: "10vw", // Move the image to the left to cover the viewport width
        duration: 10, // Duration of the animation
        scrollTrigger: {
          duration: 10,

          trigger: slide2.current,
          start: "top center+=500px",
          end: "bottom bottom",
          scrub: 1,
          delay: 1,
          marler: true,
          ease: "linear",

          // markers: true, // Uncomment for debugging
        },
      }
    );
  }, []);
  const slide3 = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      slide3.current,
      {
        opacity: 0,
        scale: 0.7, // Initial scale
        y: 100,
        delay: 1,
        // markers: true, // Uncomment for debugging
        ease: "linear",
        duration: 10,
      },
      {
        opacity: 1,
        y: -100,
        scale: 1,
        // x: "10vw", // Move the image to the left to cover the viewport width
        duration: 10, // Duration of the animation
        scrollTrigger: {
          duration: 10,

          trigger: slide3.current,
          start: "top center+=500px",
          end: "bottom bottom",
          scrub: 1,
          delay: 1,
          marler: true,
          ease: "linear",

          // markers: true, // Uncomment for debugging
        },
      }
    );
  }, []);

  //logo spin and scale
  const logospin = useRef(null);
  useEffect(() => {
    // Continuous spinning animation
    gsap.to(logospin.current, {
      rotate: 360,
      repeat: -1,
      ease: "linear",
      duration: 10, // Slow, continuous spin
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: logospin.current, // Trigger based on the logo
        scrub: true, // Sync the scale with scroll progress
        start: "top top+=300px", // Start animation when the top of the viewport reaches the center
        end: "bottom top", // End animation when the bottom of the viewport reaches the center
        // markers: true, // For debugging, remove in production
      },
    });

    // First, scale the logo
    tl.to(logospin.current, {
      scale: 20, // Gradually increases size
      ease: "linear", // Smooth transition
      duration: 20, // You can adjust duration here to match scroll behavior
    })

      // Then, fade out the logo by setting opacity to 0
      .to(logospin.current, {
        opacity: 0,
        ease: "linear",
        duration: 10, // Time it takes to fade out
      });
  }, []);

  const logospin1 = useRef(null);
  useEffect(() => {
    // Continuous spinning animation
    gsap.to(logospin1.current, {
      rotate: 360,
      repeat: -1,
      ease: "linear",
      duration: 10, // Slow, continuous spin
    });
  }, []);

  //footer
  const footerref = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      footerref.current,
      {
        opacity: 0,
        scale: 0.7, // Initial scale
        z: 100,
        ease: "linear",
        duration: 3,
      },
      {
        opacity: 1,
        z: -100,
        scale: 1,
        duration: 13, // Duration of the animation
        ease: "linear",
        scrollTrigger: {
          trigger: footerref.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1, // Smooth scrubbing
          // markers: true, // Uncomment for debugging
        },
      }
    );
  }, []);

  return (
    <div className="">
      <div className=" bg-black   w-screen h-fit">
        <nav className="flex   justify-between">
          <div className=" text-[25px] h-fit  normal-case  text-center">
            <h3
              ref={(el) => (h3Refs.current[0] = el)}
              className="text-white text-[18px] flex justify-center text-right align-middle items-center  ml-8 font-mono  normal-case "
            >
              <h3 className=" flex flex-row text-white text-[18px] items-center p-10 ">
                <img
                  src="/icon8location.png"
                  className=" w-5 h-5 bg-transparent mr-2"
                  alt="logo"
                />
                Store
              </h3>
              {/* 
              <img
                className=" right-11 z-50 w-[150px]"
                src="/logo3r.png"
                alt="logo"
              /> */}
            </h3>
          </div>
          <div className="flex gap-20 p-10 ">
            <h3
              ref={(el) => (h3Refs.current[1] = el)}
              className="text-white text-[18px]  normal-case"
            >
              Contact
            </h3>
            <h3
              ref={(el) => (h3Refs.current[2] = el)}
              className="text-white text-[18px]     normal-case"
            >
              About
            </h3>
            <h3
              ref={(el) => (h3Refs.current[3] = el)}
              className="text-white text-[18px]   normal-case"
            >
              Design
            </h3>
          </div>
        </nav>
        <div className="mt-[150px] flex flex-col justify-center items-center relative ">
          <div className="text-[250px] text-white relative z-20  gap-0  text-center font-normal  leading-none mb-[310px] mt-[150px]">
            {/* <h1 ref={(el) => (headername.current[0] = el)}></h1> */}
            {/* <h1 className="  " ref={(el) => (headername.current[1] = el)}> */}
            <h1>
              <p
                ref={headingRef}
                className="text-[250px] text-white z-20 relative gap-0  text-center font-normal  "
              >
                <h3 className="flex flex-row">
                  <p className="text-[250px] text-white ml-10">T</p>
                  <p>
                    <img
                      ref={logospin}
                      className="  w-[280px]"
                      src="/logo3r.png"
                      alt="logo"
                    />
                  </p>

                  <p className="text-[250px] text-white">L</p>
                  <p className="text-[250px] ml-10 text-white">A</p>
                </h3>
              </p>
            </h1>
            {/* <h1 ref={(el) => (headername.current[2] = el)}>DESIGN</h1> */}
          </div>
          {/* <div className="absolute top-[-200px]">
            <img
              ref={(el) => (imgRefs.current[0] = el)}
              className="z-10 opacity-0 absolute  h-[600px] w-[600px] "
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
              className="z-10 opacity-0 relative h-[600px] w-[600px] "
              src="/model4th.avif"
              alt="model"
            />
          </div> */}
        </div>
        <div className="flex justify-center">
          <p
            ref={paragraphRef}
            className="  text-center text-white text-[22px] font-light pr-20   pl-20  w-[70%]"
          >
            Here at TOLA, we elegantly merge ancient tradition with contemporary
            flair. Our brand is dedicated to creating jewelry that beautifully
            bridges the gap between historic craftsmanship and modern design.
            Named after the ancient metric used to measure gold, TOLA not only
            pays tribute to a rich heritage but also infuses each piece with a
            fresh, innovative approach.
            {/* filigree, detailed engraving, and classic settings. These techniques
            are combined with modern design elements to create jewelry that
            feels both timeless and cutting-edge. Each piece is meticulously
            handcrafted, ensuring exceptional quality and precision. */}
            {/* Our goal is to offer pieces that not
              only complement current fashion but also stand the test of time.
              Whether you are seeking an elegant engagement ring, a thoughtful
              gift, or a personal indulgence, TOLA offers a collection that
              blends classic elegance with a modern twist. Sustainability and
              ethical practices are central to our values. */}
          </p>
        </div>
        <div className="mt-[50px] bg-black pt-10 pb-20   ">
          <div className=" flex flex-row justify-center  items-center  relative w-[100%] h-[600px] mb-[10px] ">
            <img
              ref={leftImg}
              className=" absolute h-[600px] w-[600px]  "
              src="/model2.avif"
              alt="model"
            />

            <img
              ref={centerImg}
              className="   absolute h-[600px] w-[600px] "
              src="/model4th.avif"
              alt="model"
            />

            <img
              ref={rightImg}
              className=" absolute h-[600px] w-[600px] "
              src="model1.avif"
              alt="model"
            />
          </div>
        </div>

        {/* POP up larger slides */}
        <div className="flex flex-col text-white  text-center justify-center">
          <div className="flex pb-[300px]"></div>
          <div className="flex flex-col pb-36">
            <div ref={slide1} className="flex justify-start  items-center">
              <img
                className="z-10   h-[800px] w-1/2"
                src="/model1.avif"
                alt="model"
              />
              <p1 className="pt-[320px]  pb-[320px] pl-24 pr-24 text-[18px] bg-gray-950">
                These earrings feature deep green emerald stones, cut into
                sleek, cylindrical shapes that exude sophistication. Their
                minimalist design makes them versatile, perfect for any
                outfit—from casual daywear to refined evening attire.
              </p1>
            </div>
            <div
              ref={slide2}
              className="flex justify-end mt-[200px] items-center "
            >
              <p1 className="pt-[320px]  pb-[320px] pl-24 pr-24 text-[18px] bg-gray-950">
                Our rings and bracelets feature flawless emeralds, each
                hand-selected for their vibrant green hue and unparalleled
                clarity. The emeralds are elegantly set in sleek, contemporary
                designs that reflect the new-age spirit of TOLA, where
                minimalism meets sophistication.
              </p1>
              <img
                className="z-10 opacity-1  h-[800px] w-1/2 "
                src="model2.avif"
                alt="model"
              />
            </div>
            <div
              ref={slide3}
              className="flex justify-start mt-[200px] items-center"
            >
              <img
                className="z-10 opacity-1 h-[800px] w-1/2"
                src="/model3.avif"
                alt="model"
              />
              <p1 className="pt-[320px]  pb-[320px] pl-24 pr-24 text-[18px] bg-gray-950">
                The necklace features a sleek, modern chain design accented with
                sparkling diamonds, meticulously set to capture light from every
                angle. The industrial aesthetic of the chain provides a striking
                contrast to the elegance of the pearls.
              </p1>
            </div>
          </div>
        </div>
        {/* PRE_FOOTER */}
        <div className="flex flex-col">
          <div className="grid grid-cols-12  pr-32 pl-32 bg-[#F7EAC9] gap-32 justify-center pt-32 pb-32 ">
            <div className=" flex flex-col  items-center  justify-center col-span-4 text-center">
              <img
                className=" p-5 flex justify-center"
                src="/icons8.png"
                alt="logo"
              />
              CUSTOMER SERVICE LIVE CHAT Need help? Speak to our Customer
              Service team
            </div>
            <div className=" flex flex-col  items-center  justify-center col-span-4 text-center">
              <img className="p-5" src="/icons9.png" alt="logo" />
              CUSTOMER SERVICE Explore answers to our FAQs or connect with our
              Customer Service team.
            </div>
            <div className=" flex flex-col  items-center  justify-center col-span-4 text-center">
              <img className="p-5" src="/icon10.png" alt="logo" />
              GIFT SERVICES Add a personalized touch
            </div>
          </div>
          <div className="flex flex-row gap-x-20 justify-center items-center bg-red w-screen h-[300px] bg-amber-300 gap-11  pt-10 ">
            <p className=" text-[18px] w-[800px] p-28 flex h-fit items-center text-center">
              Be first to receive updates on new collections, style inspiration,
              gift ideas and exclusive access. Sign up to the TOLA Club today
              and receive 10% off* on your next online purchase (full-price
              items only). *Terms and conditions apply Copyright © 2023 TOLA.
              All rights reserved.
              <img
                ref={logospin1}
                className="  w-[300px] left-[1400px]  mt-8 flex absolute "
                src="/logo3r.png"
                alt="logo"
              />
            </p>
          </div>
          <div className="flex items-center justify-center bg-amber-300  pb-16">
            <button className="bg-black p-5 text-white w-[200px]">
              Join the club
            </button>
          </div>
        </div>

        {/* FOOTER FROM HERE */}
        <footer ref={footerref} className="gird grid-rows-2 pb-6">
          <div>
            <div className="w-full flex justify-center p-20 ">
              <img
                // ref={logospin2}
                className="  w-[100px]   mt-8 "
                // className="w-[100px] mt-8 bg-[radial-gradient(circle,_rgba(255,215,0,1)_0%,_rgba(255,215,0,0.8)_0%,_rgba(255,215,0,0.7)_0%,_black_50%)]"
                // className="w-[100px] mt-8 bg-[radial-gradient(circle,_rgba(255,215,0,1)_0.5%,_rgba(0,0,0,1)_50%)] "
                src="/logobwr.png"
                alt="logo"
              />
            </div>
            <div className=" grid grid-cols-8 items-center justify-center text-center bg-black pb-20 pt-10 gap-[85px] pl-[260px] pr-[250px]">
              <div className="col-span-4 grid grid-cols-3 text-xs text-white  text-right">
                SERVICES
                <div className=" text-xs text-white col-span-1 justify-end flex">
                  CARRER
                </div>
                <div className=" text-xs text-white col-span-1 justify-end flex">
                  CONTACT US
                </div>
              </div>
              <div className="col-span-4 grid grid-cols-2 text-xs text-white">
                <div className=" text-xs text-white col-span-1 justify-start flex">
                  DANCE REFLECTION BY TOLA & Co
                </div>
                SCHOOL OF JEWELRY DESIGN
              </div>
            </div>
          </div>
          <div className="pl-[430px] pr-[430px]  pt-10 pb-20 grid col-span-2 text-center ">
            <div className="col-span-4 grid grid-cols-5 text-xs text-white  ">
              LINKEDIN
              <div className=" text-xs text-white col-span-1 justify-center flex">
                YOUTUBE
              </div>
              <div className=" text-xs text-white col-span-1  flex justify-center">
                LEGAL
              </div>
              <div className=" text-xs text-white col-span-1  flex justify-center">
                PINTREST
              </div>
              <div className=" text-xs text-white col-span-1  flex justify-center">
                INSTAGRAM
              </div>
            </div>
          </div>
        </footer>
        <div className="border-t border-white my-4"></div>

        <div className=" grid grid-cols-12 w-full bg-red p-10 text-white justify-center text-center pl-[480px] pr-[480px]">
          <div className="col-span-4 ">Privacy policy</div>
          <div className="col-span-4 ">CSR policy</div>
          <div className="col-span-4">Condition of Sale</div>
        </div>
        <div className="flex justify-center text-white p-10">
          Copyright © 2024 All rights reserved Tola & Co{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
