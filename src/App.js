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
        x: 1000,
        trigger: leftImg.current,
        start: " bottom top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Animations for each image
    tl.to(leftImg.current, {
      delay: 0.5,
      left: 55,
      opacity: 1,
      ease: "linear",
      duration: 1.4,
    }) // Move left 500px
      .to(
        rightImg.current,
        {
          delay: 0.25,
          right: 55,
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
        start: "top top+=100px", // Start animation when the top of the viewport reaches the center
        end: "bottom top", // End animation when the bottom of the viewport reaches the center
        // markers: true, // For debugging, remove in production
      },
    });

    // First, scale the logo
    tl.to(logospin.current, {
      x: 220,
      y: 1000,
      rotationZ: 1440,
      scale: 20, // Gradually increases size
      ease: "linear", // Smooth transition
      duration: 50, // You can adjust duration here to match scroll behavior
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
  //headline
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);

  useEffect(() => {
    gsap.to([headingRef1.current, headingRef2.current], {
      x: "-100%", // Moves the divs to the left by 100%
      ease: "linear",
      duration: 10, // Speed of the animation
      repeat: -1, // Infinite loop
    });
  }, []);
  return (
    <div className="flex w-screen">
      <div className=" bg-black  w-screen h-fit">
        <nav className="flex bg-[#D5B17E]/30 sticky top-0 z-50  justify-between overflow-hidden">
          <div className=" text-[25px] h-fit  normal-case  text-center">
            <h3
              ref={(el) => (h3Refs.current[0] = el)}
              className="text-black text-[18px] flex justify-center text-right align-middle items-center  ml-8 font-mono  normal-case "
            >
              <h3 className=" flex flex-row text-black text-[18px] items-center p-10 ">
                <img
                  src="/icon8location.png"
                  className=" w-[1vw] h-[1.75vh] bg-transparent mr-2"
                  alt="logo"
                />
                Store
              </h3>
            </h3>
          </div>

          <div className="flex justify-center items-center  text-white text-[30px] font-serif relative left-32">
            <h6
              style={{
                transform: "scaleY(1.15)",
                transformOrigin: "top",
                fontWeight: "50",
              }}
            >
              TOLA & Co.
            </h6>
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
        <div className=" overflow-hidden bg-black text-white ">
          <div>
            <video
              className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
              autoPlay
              // src="//media.tiffany.com/is/content/tiffanydm/2024_ICONS_BC_HP_VIDEO1_Desktop"
              src="https://media.bulgari.com/video/upload/f_auto,q_auto:best/v1722845480/hp/bvlgari-tubogas/tubogas-homepage-16x9_hu70zi.mp4"
              loop
              muted
            />
            <div className="mt-[250px] flex flex-col justify-center items-center relative  ">
              <div className="text-[250px] text-black relative z-20    text-center font-normal  leading-none  ">
                {/* TOLA MAIN */}
                <h1 className=" font-serif ">
                  <p
                    ref={headingRef}
                    className="text-[250px] text-slate-900 z-20 relative g text-center font-normal  "
                  >
                    <h3 className="flex flex-row ">
                      <p className="text-[250px]  ml-10 ">T</p>
                      <p>
                        <img
                          ref={logospin}
                          className="  w-[15vw] z-50 flex overflow-x-hidden"
                          src="/logo3r.png"
                          alt="logo"
                        />
                      </p>

                      <p className="text-[250px] ">L</p>
                      <p className="text-[250px] ml-10 ">A</p>
                    </h3>
                  </p>
                </h1>
              </div>
            </div>

            <div className="grid grid-rows-2 gap-0 flex-col justify-items-center  ">
              <p
                ref={paragraphRef}
                className="  text-center text-black text-[16px] relative  font-light pr-20 h-fit    pl-20  w-[50%] "
              >
                Ancient tradition with contemporary flair. Our brand is
                dedicated to creating jewelry with historic craftsmanship and
                modern design.
              </p>
              <div className="flex flex-col relative top-[-10vh]  w-[80%] justify-start text-black">
                <div>
                  <h1 className="text-[30px] font-serif opacity-80">
                    Go with the flow
                  </h1>
                  <p className="text-[20px]">Embrace the perfection</p>
                </div>
                <div className=" flex gap-14 mt-8">
                  <button className=" bg-[#e6bb4e] py-2 px-10 text-black ">
                    Shop now
                  </button>
                  <button className="bg-[#e6bb4e] py-2  px-10 text-black ">
                    Discover more{" "}
                  </button>
                </div>
              </div>
            </div>
            {/* Little intro */}
            <div
              ref={paragraphRef}
              className="  flex flex-col relative  bg-[#D5B17E] w-full min-h-[10vh] py-20 text-center items-center  justify-items-center gap-6"
            >
              <h6 className="text-[25px]">Masters of Gold Since 1800</h6>
              <p className="text-[14px] max-w-[800px] ">
                Ancient tradition with contemporary flair. Our brand is
                dedicated to creating jewelry with historic craftsmanship and
                modern design.
              </p>
            </div>
          </div>
          {/* TOLA headline
           */}
          <div className="flex overflow-hidden w-full gap-5">
            <div
              ref={headingRef1}
              className="flex text-[50px] gap-8 whitespace-nowrap"
            >
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div> <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
            </div>
            <div
              ref={headingRef2}
              className="flex text-[50px] gap-8 whitespace-nowrap"
            >
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
              <div>TOLA</div>
            </div>
          </div>
          {/* frist corousel */}
          <div className="mt-[50px]  pt-10 pb-[10vh]   ">
            <div className=" flex flex-col md:flex-row justify-center w-screen gap-10 h-[100vh]    mb-[10px] ">
              <div
                ref={leftImg}
                className="flex flex-col p-5  pt-20 gap-8 bg-[#D5B17E]  items-center  h-auto absolute rounded-3xl  "
              >
                <img
                  className=" w-[28vw] p-5 object-cover rounded-3xl "
                  src="model4.avif"
                  alt="model"
                />

                <div>
                  <h1 className="text-[20px]">Duomo Milan</h1>
                  <p className=" flex  text-start items-center  align-middle relative pt-5 h-[24vh] w-[24vw] text-balck">
                    The emeralds are elegantly set in sleek, contemporary
                    designs that reflect the new-age spirit of TOLA, where
                    minimalism meets sophistication.
                  </p>
                  <button className=" underline text-black p-5 ">
                    Read more
                  </button>
                </div>
              </div>
              <div
                ref={centerImg}
                className="flex flex-col p-5  pt-20 gap-8 bg-[#D5B17E] items-center  h-auto absolute rounded-3xl "
              >
                <img
                  className=" w-[28vw] p-5 object-cover rounded-3xl "
                  src="model4th.avif"
                  alt="model"
                />

                <div>
                  <h1 className="text-[20px]">Duomo Milan</h1>
                  <p className=" flex  text-start items-center  align-middle relative pt-5 h-[24vh] w-[24vw]  text-balck">
                    The emeralds are elegantly set in sleek, contemporary
                    designs that reflect the new-age spirit of TOLA, where
                    minimalism meets sophistication.
                  </p>
                  <button className=" underline text-black p-5 ">
                    Read more
                  </button>
                </div>
              </div>
              <div
                ref={rightImg}
                className="flex flex-col p-5  pt-20 gap-8 bg-[#D5B17E] items-center  h-auto absolute rounded-3xl "
              >
                <img
                  className=" w-[28vw] p-5 object-cover rounded-3xl "
                  src="model1.avif"
                  alt="model"
                />

                <div>
                  <h1 className="text-[20px]">Duomo Milan</h1>
                  <p className=" flex  text-start items-center  align-middle relative pt-5 h-[24vh] w-[24vw]  text-balck">
                    The emeralds are elegantly set in sleek, contemporary
                    designs that reflect the new-age spirit of TOLA, where
                    minimalism meets sophistication.
                  </p>
                  <button className=" underline text-black p-5 ">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={slide1}
            className="  flex justify-center items-center p-10 bg-[#D5B17E] text-[50px] font-medium font-serif text-black"
          >
            <p>Makes waves </p>
          </div>
          {/* POP up larger slides */}
          <div className="flex flex-col   text-center justify-center">
            <div className="flex flex-col  pb-36">
              <div
                ref={slide1}
                className="flex justify-start items-center bg-[#D5B17E]"
              >
                <video
                  className="z-10 w-[46.7vw] rounded-3xl"
                  src="https://asset.swarovski.com/videos/f_auto,q_auto,w_1024,h_1365,c_fill/so_0,eo_6/swa-cms/videos/SW_HANDS_SUBLIMA_WHITE_4x5_ENDLOGO/CM_port.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <p className="px-[10vw] py-[21vw] pl-24 pr-24 text-[18px]">
                  Their minimalist design makes them versatile, perfect for any
                  outfit—from casual daywear to refined evening attire.
                </p>
              </div>

              <div
                ref={slide2}
                className="flex flex-col justify-end mt-[200px] items-center  bg-[#D5B17E]"
              >
                <video
                  className="z-10 w-[50vw] h-[60vh] rounded-3xl "
                  src="https://asset.swarovski.com/videos/f_auto,q_auto,w_1024,h_576,c_fill/so_15,du_5/swa-cms/videos/5117703_1920_1080/LPT_M.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <p1 className="px-[10vw] w-[80%]  py-[1vw] pl-24 pr-24 text-[18px] relative top-[-20px] ">
                  Our rings and bracelets feature flawless emeralds, each
                  hand-selected for their vibrant green hue and unparalleled
                  clarity. The emeralds are elegantly set in sleek, contemporary
                  designs that reflect the new-age spirit of TOLA, where
                  minimalism meets sophistication.
                </p1>
              </div>
              <div
                ref={slide3}
                className="flex flex-col justify-start mt-[200px] gap-20  items-center bg-[#d5a87e]"
              >
                <div className=" relative w-full h-[34.5vh] overflow-hidden">
                  <div className="flex justify-center  w-full h-full">
                    <video
                      className=" absolute z-50 w-[50.7vw] h-[55vh] rounded-3xl"
                      src="/work.mp4"
                      autoPlay
                      controls={false}
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>
                <div className=" flex w-full justify-center mb-[40px]">
                  <p1 className="px-[10vw] w-[80%]   text-[18px] ">
                    Our heritage is deeply rooted in craftsmanship. Every TOLA
                    piece is meticulously handcrafted by skilled artisans who
                    bring decades of experience to each creation. Whether it’s
                    the precision of a setting or the subtle elegance of a
                    finishing touch, our commitment to craftsmanship is evident
                    in every facet of our jewelry.
                  </p1>
                </div>
              </div>
            </div>
          </div>
          {/* PRE_FOOTER */}
          <div className="flex flex-col">
            <div className="grid grid-cols-12 pr-8 pl-8  bg-[#f7eac9]  gap-20 justify-center pt-32 pb-32 ">
              <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center text-center pl-8 pr-8">
                <img
                  className="p-5 flex justify-center"
                  src="/icons8.png"
                  alt="logo"
                />
                <p className=" flex justify-center max-w-[40%] md:max-w-[70%]">
                  CUSTOMER SERVICE LIVE CHAT Need help? Speak to our Customer
                  Service team
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center text-center pl-8 pr-8">
                <img className="p-5" src="/icons9.png" alt="logo" />
                <p className=" flex justify-center max-w-[40%] md:max-w-[70%]">
                  CUSTOMER SERVICE Explore answers to our FAQs or connect with
                  our Customer Service team.
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center text-center">
                <img className="p-5 flex" src="/icon10.png" alt="logo" />
                <p className=" flex justify-center max-w-[40%] md:max-w-[70%]">
                  GIFT SERVICES Add a personalized touch
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12  bg-red items-center   bg-amber-300  px-2 md:px-10 align-middle   ">
              <div className=" text-[18px] col-span-12 md:col-span-9  text-center grid items-center justify-items-center md:justify-items-end   ">
                <p className=" w-[90%] md:w-[70%] m-2 md:m-6">
                  Be first to receive updates on new collections, style
                  inspiration, gift ideas and exclusive access. Sign up to the
                  TOLA Club today and receive 10% off* on your next online
                  purchase (full-price items only). *Terms and conditions apply
                  Copyright © 2023 TOLA. All rights reserved.
                </p>
              </div>

              <img
                ref={logospin1}
                className=" col-span-3 hidden md:flex justify-items-center  w-[70%] relative"
                src="/logo3r.png"
                alt="logo"
              />
            </div>
            <div className="flex items-center justify-center bg-amber-300  pt-0 pb-12">
              <button className="bg-black p-5 text-white w-[10vw]">
                Join the club
              </button>
            </div>
          </div>
          {/* FOOTER FROM HERE */}
          <footer ref={footerref} className="gird grid-rows-2 pb-0">
            <div>
              <div className="w-full flex justify-center p-10 ">
                {/* <img
                  className="  w-[8vw]   mt-8 "
                  src="/logobwr.png"
                  alt="logo"
                /> */}
              </div>
              <div className=" grid grid-cols-8 items-center justify-center text-center bg-black text-black  pb-20 pt-10 gap-[85px] pl-[260px] pr-[250px]">
                <div className="col-span-4 grid grid-cols-3 text-xs  text-right">
                  SERVICES
                  <div className=" text-xs  col-span-1 justify-end flex">
                    CARRER
                  </div>
                  <div className=" text-xs col-span-1 justify-end flex">
                    CONTACT US
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 text-xs ">
                  <div className=" text-xs  col-span-1 justify-start flex">
                    DANCE REFLECTION BY TOLA & Co
                  </div>
                  SCHOOL OF JEWELRY DESIGN
                </div>
              </div>
            </div>
            <div className="pl-[430px] pr-[430px]  pt-10 pb-10 grid col-span-2 text-center ">
              <div className="col-span-4 grid grid-cols-5 text-xs  ">
                LINKEDIN
                <div className=" text-xs  col-span-1 justify-center flex">
                  YOUTUBE
                </div>
                <div className=" text-xs col-span-1  flex justify-center">
                  LEGAL
                </div>
                <div className=" text-xs  col-span-1  flex justify-center">
                  PINTREST
                </div>
                <div className=" text-xs  col-span-1  flex justify-center">
                  INSTAGRAM
                </div>
              </div>
            </div>
          </footer>
          <div className="border-t border-black my-4"></div>
          <div className=" grid grid-cols-12 w-full bg-red p-10 text-white justify-center text-center pl-[480px] pr-[480px]">
            <div className="col-span-4 ">Privacy policy</div>
            <div className="col-span-4 ">CSR policy</div>
            <div className="col-span-4">Condition of Sale</div>
          </div>
          <div className="flex justify-center text-[20px] bg-black text-white p-10">
            Copyright © 2024 All rights reserved Tola & Co
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
