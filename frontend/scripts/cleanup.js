import { rmSync } from "node:fs";
["dist","coverage"].forEach((d)=>rmSync(d,{recursive:true,force:true}));
console.log("cleanup done");
