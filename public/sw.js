/* importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );
 */
  import {
    pageCache,
    imageCache,
    staticResourceCache,
    googleFontsCache,
    offlineFallback,
  } from 'workbox.workbox-recipes';
  
  pageCache();
  
  googleFontsCache();
  
  staticResourceCache();
  
  imageCache();
  
  offlineFallback();