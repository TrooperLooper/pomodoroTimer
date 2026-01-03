import { useState, useEffect } from "react";

interface CircleConfigValues {
  radius: number;
  center: number;
  dotSize: number;
}

function getConfigForWidth(width: number): CircleConfigValues {
  if (width <= 480) {
    return { radius: 70, center: 140, dotSize: 12 };
  } else if (width <= 768) {
    return { radius: 80, center: 160, dotSize: 14 };
  } else {
    return { radius: 100, center: 200, dotSize: 18 };
  }
}

export function useCircleConfig(): CircleConfigValues {
  const [config, setConfig] = useState<CircleConfigValues>(
    getConfigForWidth(window.innerWidth)
  );

  useEffect(() => {
    const updateConfig = () => {
      const newConfig = getConfigForWidth(window.innerWidth);
      console.log("Window width:", window.innerWidth, "Config:", newConfig);
      setConfig(newConfig);
    };

    window.addEventListener("resize", updateConfig);
    return () => window.removeEventListener("resize", updateConfig);
  }, []);

  console.log("useCircleConfig returning:", config);
  return config;
}
