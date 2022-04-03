// on iOS Safari
window.navigator.standalone

// on Android Chrome
window.matchMedia(
  '(display-mode: standalone)'
).matches

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}