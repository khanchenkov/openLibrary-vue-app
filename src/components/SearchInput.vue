<template>
    <div class="wrapper">
        <input 
          type="text" 
          placeholder="What shall we read..." 
          class="search-bar" 
          v-model="searchText"
          @focus="isFocused = true"
          @blur="showingBooksList"
          :class="{focused: isFocused || !isFocused && searchText || !isFocused && bookList == []}"
          @input="searching"
        >
    </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: this.currentSearchText || '',
      isFocused: false,
      timeout: null,
    }  
  },
  methods: {
    search() {
      return this.$store.dispatch('search', this.searchText)
    },
    searching() {
      this.$store.dispatch('updateSearchText', this.searchText)
      if (this.searchText != '') {
        clearTimeout(this.timeout)
        this.$store.dispatch('clearBooksList')
          this.timeout = setTimeout(() => {
            console.log('searching...')
            this.search()
        }, 1000)
      } 
    },
    showingBooksList() {
      if (this.searchText == '' && this.bookList) {
        this.isFocused = false
      }
    }
  },
  computed: {
    bookList() {
      return this.$store.getters.bookList
    },
    currentSearchText() {
        return this.$store.getters.searchText
    }
  },
  mounted() {
    this.searchText = this.currentSearchText 
  }
}
</script>

<style lang="sass" scoped>

.wrapper
  display: flex
  align-items: center 
.search-bar
  display: block
  box-sizing: border-box
  border-radius: 5px
  border: 1px solid #ebebeb
  width: 900px
  height: 50px
  padding: 0 15px 0
  margin: 45vh auto
  text-align: center
  font-size: 1.5rem  
  outline: none
  transition: 0.8s
  &:placeholder
    color: #ebebeb
.focused
  text-align: left
  width: 700px
  margin: 1vh auto
  border: 2px solid #4abe89

</style>
