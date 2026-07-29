const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
      require('../Targeta-1.json')
    ],
  })
}
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)