import React, { useCallback, useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const [devicePerformance, setDevicePerformance] = useState('high');
  
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isOlderDevice = window.navigator.hardwareConcurrency && window.navigator.hardwareConcurrency < 4;
    
    if (isMobile || isOlderDevice) {
      setDevicePerformance('low');
    }
  }, []);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);
  
  const getParticleOptions = () => {
      
    const baseOptions = {
      fpsLimit: 30,
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ["#334155", "#2DD4BF"],
          animation: {
            enable: devicePerformance !== 'low',
            speed: devicePerformance === 'low' ? 5 : 10,
            sync: false
          }
        },
        opacity: {
          value: 0.7,
          random: true,
          anim: {
            enable: devicePerformance !== 'low',
            speed: devicePerformance === 'low' ? 0.5 : 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: devicePerformance === 'low' ? 2 : 3,
          random: true,
          anim: {
            enable: devicePerformance !== 'low',
            speed: devicePerformance === 'low' ? 1 : 2,
            size_min: 0.1,
            sync: false
          }
        },
        rotate: devicePerformance === 'low' ? undefined : {
          value: 0,
          direction: "clockwise",
          animation: {
            enable: true,
            speed: devicePerformance === 'low' ? 1 : 2,
            sync: false
          }
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "bounce"
          },
          attract: {
            enable: false
          },
          path: undefined,
          trail: devicePerformance === 'low' ? undefined : {
            enable: false
          }
        },
        links: {
          enable: true,
          distance: devicePerformance === 'low' ? 200 : 150,
          color: "#ffffff",
          opacity: 0.2,
          width: 1,
          triangles: {
            enable: true,
            opacity: 0.05
          }
        }
      },
      background: {
        color: "#181C14"
      },
      detectRetina: true
    };
    
    return baseOptions;
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={getParticleOptions()}
      className="transition-colors duration-500"
    />
  );
};

export default ParticleBackground;