export default {
  // module!
  namespaced: 'true',
  // data!
  state: () => ({
    movies: []
  }),
  // comuted!
  getters: {
    movieIds(state) {
      return state.movies.map(m => m.indbID)
    }
  },
  // methods!
  // 변이- mutations에서만 데이터 변경 가능
  mutations: {
    resetMovies(state) {
      state.movies = []
    }
  },
  // 비동기
  actions: {
    searchMovies() {

    }
  }
}