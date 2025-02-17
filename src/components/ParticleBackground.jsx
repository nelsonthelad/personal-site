import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        particles: {
          number: {
            value: 100,  // Increased number of particles
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          opacity: {
            value: 0.5,  // Increased opacity
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,  // Slightly larger particles
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 1,  // Slightly faster movement
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce"  // Changed to bounce for more interesting movement
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          links: {  // Added connecting lines between particles
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2,
            width: 1
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"  // Changed to grab for better interaction
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5
              }
            },
            push: {
              quantity: 4
            }
          }
        },
        background: {
          color: "#181C14"
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticleBackground;