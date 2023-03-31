import React, { useEffect, useState } from 'react'


function Second() {
  const [second, setSecond] = useState(new Date().getSeconds());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSecond(new Date().getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span>{second < 10 ? "0" + second : second}</span>;
}


export default Second