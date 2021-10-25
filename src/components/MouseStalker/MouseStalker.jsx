import React, { useState, useEffect, memo } from 'react';
import { useSpring, animated } from 'react-spring';

export const MouseStalker = memo(() => {
  const [position, setPosition] = useState({ x: 0, y: 0, o: 0 });

  useEffect(() => {
    const setFromEvent = (e) => {
      setPosition({ x: e.clientX - 5, y: e.clientY - 5, o: 1 });
    };
    window.addEventListener('mousemove', setFromEvent);
    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  const stalkerStyle = useSpring({
    from: {
      display: 'block',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: ' red',
      pointerEvents: 'none',
      position: 'fixed',
      zIndex: '500',
      opacity: '0',
    },
    to: {
      top: position.y,
      left: position.x,
      opacity: `${position.o}`,
    },
  });

  return <animated.span style={stalkerStyle}></animated.span>;
});
