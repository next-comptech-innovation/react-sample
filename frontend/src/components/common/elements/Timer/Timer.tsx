import { useEffect, useState } from "react";
export const Timer=()=>{const [now,setNow]=useState(new Date());useEffect(()=>{const t=setInterval(()=>setNow(new Date()),1000);return()=>clearInterval(t);},[]);return <small>{now.toLocaleTimeString()}</small>;};
