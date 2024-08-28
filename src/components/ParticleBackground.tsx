import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: any = useMemo(
    () => ({
      background: {
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
        color: "#000"
      },
      fullScreen: {
        enable: false
      },
      interactivity: {
        
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 10,
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: [],
            },
          },
          grab: {
            distance: 400,
          },
          repulse: {
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              selectors: [],
            },
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: {
            value: "#000",
          },
          distance: 150,
          opacity: 0.4,
        },
        move: {
          attract: {
            rotate: {
              x: 600,
              y: 1200,
            },
          },
          enable: true,
          outModes: {
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: 24,
        },
        opacity: {
          random: {
            enable: true,
          },
          value: {
            min: 0.1,
            max: 1,
          },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.2,
          },
        },
        rotate: {
          random: {
            enable: true,
          },
          animation: {
            enable: true,
            speed: 5,
          },
          direction: "random",
        },
        shape: {
          options: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400",
            },
            char: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400",
            },
            polygon: {
              sides: 5,
            },
            star: {
              sides: 5,
            },
            image: [
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                width: 20,
                height: 20,
              },
            ],
            images: [
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                width: 20,
                height: 20,
              },
            ],
          },
          type: "image",
        },
        size: {
          value: 50,
          animation: {
            speed: 40,
            minimumValue: 0.1,
          },
        },
        stroke: {
          width: "100px",
          color: {
            value: "#000000",
            animation: {
              h: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                decay: 0,
                sync: true,
              },
              s: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                decay: 0,
                sync: true,
              },
              l: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                decay: 0,
                sync: true,
              },
            },
          },
        },
      },
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute top-0 left-0 w-full h-full z-[1]"
      />
    );
  }

  return <></>;
};

export default ParticleBackground;