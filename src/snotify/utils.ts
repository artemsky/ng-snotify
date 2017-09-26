/**
 * Generates random id
 * @return {number}
 */
export function uuid(): number {
  return Math.floor(Math.random() * (Date.now() - 1)) + 1;
}

/**
 * Simple is object check.
 * @param item {Object<any>}
 * @returns {boolean}
 */
export function isObject(item): boolean {
  return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
}

/**
 * Deep merge objects.
 * @param sources {Array<Object<any>>}
 * @returns {Object<any>}
 */
export function mergeDeep(...sources) {
  const target = {};
  if (!sources.length) {
    return target;
  }

  while (sources.length > 0) {
    const source = sources.shift();
    if (isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          target[key] = mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
  }
  return target;
}

// var adiv = document.getElementById('Notes')
// var starttime
//
// function animate(timestamp, el, dist, duration){
//   //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date:
//   var timestamp = timestamp;
//   var runtime = timestamp - starttime
//   var progress = runtime / duration
//   progress = Math.min(progress, 1)
//   el.style.left = (dist * progress).toFixed(2) + 'px'
//   if (runtime < duration){ // if duration not met yet
//     requestAnimationFrame(function(timestamp){ // call requestAnimationFrame again with parameters
//       moveit(timestamp, el, dist, duration)
//     })
//   }
// }


export function animate(start: number, duration: number, callback: (currentValue: number, progress: number) => void) {
  let endTime;
  requestAnimationFrame((timestamp) => endTime = timestamp + duration);
  const calculate = () => {
    requestAnimationFrame((timestamp) => {
      const runtime = timestamp - endTime;
      const progress = Math.min(runtime / duration, 1) + start;
      if (runtime < duration) {
        if (callback(+(100 * progress).toFixed(2), progress)) {
          calculate();
        }
      }
    })
  }
}
