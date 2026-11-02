import {copyFileSync,existsSync,mkdirSync} from "node:fs";
mkdirSync("dist",{recursive:true});
for(const f of ["manifest.json","service-worker.js"])copyFileSync(f,`dist/${f}`);
copyFileSync("public/moja-icon.svg","dist/moja-icon.svg");
