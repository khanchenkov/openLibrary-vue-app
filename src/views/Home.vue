<template>
  <div>
    <SearchInput/>

    <div class="booksList" v-show="searchText">
        <div v-if="!loading">
          <div v-for="book in bookList" :key="book.key">
            <router-link :to="'/book/' + book.cover_i" class="router-link">
              <div v-if="book.cover_i" class="bookcard">
                <div class="bookcard__image">
                  <img 
                    :src="`http://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`"
                    alt="cover"
                  >
                </div>
                <div class="bookcard__details">
                  <div class="bookcard__title">
                    <span>
                      {{book.title}}
                    </span>
                  </div>

                  <div class="bookcard__authors">
                    <div v-if="book.author_name && book.author_name.length == 1">
                      <span>
                        {{ book.author_name[0] }}
                      </span>
                    </div>
                    <div v-if="book.author_name && book.author_name.length > 1">
                      <span>
                        {{ book.author_name[0] }} and others
                      </span>
                    </div>
                  </div>

                </div>    
              </div>
            </router-link>
          </div>
        </div>
        <div v-else>
          <Loader/>
        </div>
      </div>
  </div>
</template>


<script>
import SearchInput from '@/components/SearchInput'
import Loader from '@/components/Loader'

export default {
  name: 'Home',
  components: {
    SearchInput,
    Loader
  },
  computed: {
    bookList() {
      return this.$store.getters.bookList
    },
    searchText() {
      return this.$store.getters.searchText
    },
    loading() {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped lang="sass">
.router-link
  text-decoration: none
  & .bookcard
    border-bottom: 1px solid #ebebeb
    display: flex
    align-items: center
    padding: 15px 35px 
    &__image
      width: 100px
    &__title
      color: #000
      font-weight: bold
      width: 450px
    &__authors
      width: 450px
      color: #666

.booksList
  background: #fff
  box-sizing: border-box
  margin: 0px auto
  border-radius: 5px
  border: 2px solid #4abe89
  width: 700px



</style>