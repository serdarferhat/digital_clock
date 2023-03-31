import React, { useEffect, useState } from 'react'

function Minute() {
                const [minute, setMinute] = useState(new Date().getMinutes());
                
                useEffect(() => {
                  const interval = setInterval(() => {
                    setMinute(new Date().getMinutes());
                  }, 60000);
                  return () => clearInterval(interval);
                }, []);
              
                return <span>{minute < 10 ? "0" + minute : minute}</span>;
              }

export default Minute