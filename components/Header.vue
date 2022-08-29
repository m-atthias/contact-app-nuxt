<template>
    <header class="bg-blue-dark text-white z-10" :class="{ 'absolute w-full h-screen top-0 left-0': menu }">
        <div class="bg-white flex flex-wrap justify-between">
            <div class="desktop-nav hidden w-auto p-6 sm:flex">
                <nuxt-link 
                    id="home-nav"
                    :to="localePath('/')"
                    class="flex flex-row justify-between"
                >
                    <img class="w-16" src="~static/logo.svg" alt="Contact App logo"/>
                    <h1 class="hidden sm:block text-blue-dark font-bold self-center ml-5">
                        Contact App
                    </h1>
                </nuxt-link>
                <nuxt-link
                    class="text-blue-dark sm:self-center sm:ml-5"
                    :to="localePath('/contacts')"
                >
                    {{$t('myContacts')}}
                </nuxt-link>
            </div>

            <div id="mob-nav" class="sm:hidden p-6 text-2xl" @click="menu = !menu">
                <font-awesome-icon class="text-blue-dark" :icon="(menu) ? faX : faBars"/>
            </div>
            <nuxt-link
                id="home-nav-mob"
                class="self-center sm:hidden"
                :to="localePath('/')"
            >
                <img class="w-16" src="~static/logo.svg" alt="Contact App logo"/>
            </nuxt-link>
            <nuxt-link
                    v-for="locale in availableLocales"
                    :key="locale.code"
                    :to="switchLocalePath(locale.code)"
                    class="text-blue self-center p-6">
                    {{ locale.name }}
            </nuxt-link>
        </div>

        <nav v-show="menu" class="w-full transition-transform">
            <ul class="flex flex-col text-center">
                <li v-for="(item, index) in items" :key="index" class="p-5">
                    <nuxt-link :to="localePath(item.href)">{{$t(item.title)}}</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
export default {
    name: 'HeaderSection',
    data() {
        return {
            menu: false,
            items: [{
                title: 'homeNav',
                href: '/'
            }, {
                title: 'myContactsNav',
                href: '/contacts'
            }]
        }
    },
    computed: {
        faBars() {
            return faBars;
        },
        faX() {
            return faX;
        },
        availableLocales () {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        }
    },
};
</script>

<style scoped>
    .nuxt-link-exact-active.nuxt-link-active {
        border-bottom: 2px solid #fff;
    }
    .desktop-nav > .nuxt-link-exact-active.nuxt-link-active:not(:first-of-type) {
        border-bottom: 2px solid hsl(226, 88%, 16%);
    }
</style>