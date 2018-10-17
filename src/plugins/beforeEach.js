export default ({ router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    console.log('before each')
    debugger
    console.log(store.state.example.test)
    next()
  })
}
