import { useState, useEffect } from 'react';

const useOpacity = (step, frames) => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setOpacity((curr) => {
        const nextOpacity = curr + step;
        if (nextOpacity < 1) {
          return nextOpacity;
        } else {
          clearInterval(id);
          return 1;
        }
      });
    }, 1000 / frames);
    return () => clearInterval(id);
  }, []);
  return opacity;
};

export default useOpacity;
