<template lang="pug">
div
  h1.mb-10 Top movies
  v-tabs.mb-10(v-model="tab")
    v-tab(:value="movieType.top250") TOP 250 Best
    v-tab(:value="movieType.topMost100MostPopular") TOP 100 Most popular
    v-tab(:value="movieType.topAwaiting") TOP Await
  v-row
    v-col(cols="12" lg="3" md="3" xl="3" v-for="movie in movies" :key="movie.id")
      movie-item(:movie="movie")
  .d-flex.justify-center.mt-4(v-if="pageCount < totalPage")
    v-progress-circular.mx-auto(indeterminate color="yellow" v-intersect="{handler: onIntersect}")
</template>

<script>
import {inject, ref, watch} from 'vue'
import MovieItem from "../components/MovieItem.vue"
import {MOVIE_TYPE} from "../helpers/const";

export default {
  name: 'HomeView',
  components: {
    MovieItem
  },
  setup() {
    const axios = inject('axios')
    const $notify = inject('$notify')

    const loading = ref(false)
    const movies = ref([])
    const pageCount = ref(1)
    const totalPage = ref(2)
    const tab = ref(MOVIE_TYPE.top250)
    const movieType = ref(MOVIE_TYPE)

    const getMovie = async () => {
      try {
        const {data: {films, pagesCount}} = await axios.get('/v2.2/films/top', {
          params: {
            page: pageCount.value,
            type: tab.value
          }
        })

        movies.value = [...movies.value, ...films]
        pageCount.value += 1
        totalPage.value = pagesCount
      } catch (e) {
        const title = e.response && e.response.data ? e.response.data.message : 'Server error'
        $notify({type: 'error', title})
      }
    }

    const onIntersect = (val) => {
      val && getMovie()
    }

    const resetListMovies = () => {
      pageCount.value = 1
      totalPage.value = 2
      movies.value = []
    }

    watch(tab, () => {
      resetListMovies()
    })

    return {
      getMovie,
      movies,
      onIntersect,
      totalPage,
      pageCount,
      tab,
      loading,
      movieType,
      resetListMovies
    }
  }
}
</script>
