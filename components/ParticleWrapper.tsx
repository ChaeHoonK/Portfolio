import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback,useEffect } from "react";

export default function ParticlesWrapper({ children }: any) {
  const particlesInit = useCallback(async (engine: any) => {
    //console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  const bgColor = '#1E3F64'

  const starColor = "#FFFFFF"

  const randomColor = ["random", "random"]
  

  return (
    <>
      <Particles
      height="100vh"
        width="100vw"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: bgColor,
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              //   onHover: {
              //       enable: true,
              //       mode: ["grab", "bubble"],
              //   },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 2,
              },
            },
          },
          particles: {
            color: {
              value: starColor,
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 600,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    
      {children}
      </>
  );
}
