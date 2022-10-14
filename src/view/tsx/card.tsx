import { defineComponent } from 'vue'
const Card = defineComponent({
  setup(props, { slots }) {
    // const _slots = {
    //   bar: (scope: any) => {
    //     console.log(scope)
    //     return <div>{scope.name}</div>
    //   },
    // }
    return () => (
      <>
        <h1>{slots.default ? slots.default() : 'foo'}</h1>
        <h2>{slots.bar?.()}</h2>
      </>
    )
  },
})

export default Card
