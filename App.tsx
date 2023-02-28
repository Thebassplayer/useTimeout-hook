import { useState, useEffect, useRef } from 'react';

function useTimeout(time: number): boolean {
  const [isExpired, setIsExpired] = useState(true);
  const timeoutId = useRef(null);

  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      setIsExpired(false);
    }, time * 1000);

    return () => {
      clearTimeout(timeoutId.current);
    };
  }, [time]);

  return isExpired;
}

export default useTimeout;
