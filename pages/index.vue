<template>
  <div>
    <Header />
    <div id="intro" class="space-y-3 w-full md:w-full p-8 md:p-12 md:bg-blue-dark">
      <h1 class="mb-4 font-bold text-blue-dark text-3xl md:text-7xl md:text-white md:p-12">{{ $t('intro') }}</h1>
      <p class="md:p-12 md:text-white md:text-4xl">{{ $t('subheading') }} <nuxt-link class="text-blue md:text-white md:underline" :to="localePath('/contacts')">{{ $t('here') }}</nuxt-link></p>
    </div>
    <ContactCreate />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
        document.title = 'Contact App'
  },
}
</script>