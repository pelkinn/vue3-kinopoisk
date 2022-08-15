<template lang="pug">
v-card.d-flex.flex-column(height="600" tonal)
  v-img.flex-grow-0(
    :src="movie.posterUrlPreview"
    height="400"
    cover)
  .flex-grow-1.d-flex.flex-column.pa-4
    .text-subtitle-1.mb-3.title {{ movie.nameRu }}
    p.text-caption
      span.mr-1 Год производства:
      | {{ movie.year }}
    p.text-caption
      span.mr-1 Длительность:
      | {{ movie.filmLength }}
    v-hover(v-slot="{ isHovering, props }")
      .text-caption.pointer(v-bind="props" @click="showDialog = true")
        span.mr-1(:class="{'text-decoration-underline': !isHovering}") Смотреть трейлер
        v-icon(size="small") mdi-play-circle
    .d-flex.align-center.mt-auto.justify-space-between
      p.text-h5.text-yellow {{ movie.rating }}
v-dialog(v-model="showDialog")
  v-card.d-flex.justify-center.align-center(width="800" height="450")
    v-progress-circular(v-if="loading" indeterminate color="yellow")
    iframe(v-else-if="getSrcVideoYoutube" :src="getSrcVideoYoutube" allowfullscreen height="100%" width="100%")
    p.text-h5.text-white(v-else) Трейлер отсутствует
</template>

<script>
import {ref, watch, inject, computed} from 'vue'

export default {
  name: "MovieItem",
  props: {
    movie: Object
  },
  setup(props) {
    const showDialog = ref(false)
    const axios = inject('axios')
    const $notify = inject('$notify')
    const videos = ref([])
    const loading = ref(false)

    const videoMovieYoutube = computed(() => {
      return videos.value.find(el => {
        if (el.site === 'YOUTUBE') {
          if (el.name.includes('Трейлер')) return el
          if (el.name.includes('Тизер')) return el
        }
      })
    })

    const getSrcVideoYoutube = computed(() => {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = videoMovieYoutube.value?.url.match(regExp);

      return (match && match[2].length === 11)
          ? 'https://youtube.com/embed/' + match[2]
          : null;
    })

    const getTrailer = async () => {
      loading.value = true
      try {
        videos.value = (await axios.get(`/v2.2/films/${props.movie.filmId}/videos`)).data.items
      } catch (e) {
        const title = e.response && e.response.data ? e.response.data.message : 'Server error'
        $notify({type: 'error', title})
      }
      loading.value = false
    }

    watch(showDialog, (val) => {
      val && getTrailer()
    })

    return {
      showDialog,
      getTrailer,
      videoMovieYoutube,
      videos,
      getSrcVideoYoutube,
      loading
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  height: 56px;
}
</style>