importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );
  console.log(workbox.recipes);
 
  import {
    pageCache,
    imageCache,
    staticResourceCache,
    googleFontsCache,
    offlineFallback,
  } from 'workbox.recipes;
  
  pageCache();
  
  googleFontsCache();
  
  staticResourceCache();
  
  imageCache();
  
  offlineFallback(); 