Object.assign(window, {
  requestAnimationFrame: (callback: FrameRequestCallback) =>
    window.setTimeout(callback, 0),
})
