import React, { useEffect, useState } from 'react'

function Hour() {
                const [hour, setHour] = useState(new Date().getHours());
                
                useEffect(() => {
                  const interval = setInterval(() => {
                    setHour(new Date().getHours());
                  }, 3600000);
                  return () => clearInterval(interval);
                }, []);
              
                return <span>{hour < 10 ? "0" + hour : hour}</span>;
              }

export default Hour