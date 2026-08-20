import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'ScriptRedSocial',

  schema: {
    url: ecs.string,
  },

  schemaDefaults: {
    url: 'https://www.instagram.com/',
  },

  add: (world, component) => {
    const {eid} = component

    world.events.addListener(
      eid,
      ecs.input.SCREEN_TOUCH_START,
      () => {
        console.log('¡¡¡BOTÓN INSTAGRAM TOCADO!!!')
      }
    )
  },
})