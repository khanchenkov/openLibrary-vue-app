<template>
  <div class="wrapper">
    <div class="bookcard">
      <div class="bookcard__image">
        <img 
          :src="`http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`"
          alt="cover"
        >
      </div>
      <div class="bookcard__data">
        <div class="bookcard__title">
          {{book.title}}
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
        <div class="bookcard__publicated">
          {{book.first_publish_year}}
        </div>
        <div class="bookcard__publisher">
          
          <div v-if="book.publisher && book.publisher.length == 1">
            <span>
              {{ book.publisher[0] }}
            </span>
          </div>
          <div v-if="book.publisher && book.publisher.length > 1">
            <span>
              {{ book.publisher[0] }} and more
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    computed: {
        book() {
            return this.$store.getters.bookById(+this.$route.params.id)
        }
    }
}
</script>

<style lang="sass" scoped>
.wrapper 
  margin: 20px
  padding: 25px
  border-radius: 5px
  border: 2px solid #4abe89
.bookcard
  display: flex
  &__image
    margin-right: 100px
  &__date
  &__title
    color: #000
    font-weight: bold
    font-size: 2rem
  &__authors
    font-size: 1.2rem

</style>