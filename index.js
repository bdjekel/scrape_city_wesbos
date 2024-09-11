// console.log("x0x0x index start")
// import pkg from 'web-streams-polyfill/dist/ponyfill.js';
// const { ReadableStream } = pkg;
// globalThis.ReadableStream = ReadableStream;

// import { getHTML } from "./lib/scraper.js";

console.log("x0x0x index start");

(async () => {
  try {
    // Import polyfill dynamically
    const pkgModule = await import('web-streams-polyfill/dist/ponyfill.js');
    console.log(pkgModule)
    const { ReadableStream } = pkg;
    globalThis.ReadableStream = ReadableStream;

    // Log pkg to check its contents
    console.log(pkg);

    // Import scraper module dynamically
    const scraperModule = await import("./lib/scraper.js");
    const { getHTML } = scraperModule;
    console.log(getHTML());

  } catch (error) {
    console.error("Error during import or execution:", error);
  }
})();



console.log(pkg)
console.log(getHTML())