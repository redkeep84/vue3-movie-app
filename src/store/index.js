import { createstore } from 'vuex'
import movie from './movie'
import about from './about'

export default createstore({
  modules: {
    movie,
    about
  }
})