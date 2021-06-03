import { createStore } from 'vuex'

export default createStore({
  getters: { 
    bookList(state) {
      return state.books
    },
    bookById(state) {
      return id => state.books.find(book => book.cover_i === id)
    },
    searchText(state) {
      return state.searchText
    },
    loading(state) {
      return state.loading
    }
  },
  state: {
    books: [],
    searchText: '',
    loading: false
  },
  mutations: {
    updateBooks(state, books) {
      state.books = books
    },
    updateSearchText(state, text) {
      state.searchText = text
    },
    updateLoading(state, boolean) {
      state.loading = boolean
    }
  },
  actions: {
    async search({commit}, bookName) {
      commit('updateLoading', true)  
      if (bookName) {
        const formattedBookName = bookName.toLowerCase().split(' ').join('+')
        const res = await fetch(`http://openlibrary.org/search.json?title=${formattedBookName}`)
        const books = await res.json()
        commit('updateLoading', false) 
        commit('updateBooks', books.docs)
      }
    },
    updateSearchText({commit}, text) {
      commit('updateLoading', true)  
      commit('updateSearchText', text)
    },
    clearBooksList({commit}) {
      commit('updateBooks', [])
    }
  }
})