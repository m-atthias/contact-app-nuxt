<template>
    <section v-if="error">
        <p>{{ $t('contactLoadingFailed') }}</p>
    </section>
    <section v-else class="bg-gray py-8">
        <span v-if="loading" class="text-center block text-blue-dark font-bold">{{ $t('loading') }}</span>
        <div v-for="contact in contactList" v-else :key="contact.id">
            <div class="flex flex-row justify-between px-4 lg:px-8 py-4 m-4 bg-white shadow-md h-40 items-center lg:w-2/5 lg:mx-auto">
                <div>
                    <span class="text-2xl text-blue-dark">{{contact.name}}</span>
                    <div class="flex flex-col">
                        <span>{{contact.type}}</span>
                        <span>{{contact.email}}</span>
                        <span>{{contact.phone}}</span>
                    </div>
                </div>
                <div class="delete" @click="deleteContact(contact.id)">
                    <font-awesome-icon class="text-red text-2xl cursor-pointer self-center" :icon="faTrash"/>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
export default {
    data() {
        return {
            contactList: [],
            loading: true,
            error: false,
        }
    },
    computed: {
        faTrash() {
            return faTrash;
        }
    },
    mounted() {
        document.title = 'My Contacts';
        this.getAllContacts();
    },
    methods: {
        getAllContacts() {
            axios
                .get('/api/contacts')
                .then(response => (this.contactList = response.data))
                .catch(_error => {
                    this.error = true;
                })
                .finally(() => {
                    this.loading = false
                });
        }, 
        deleteContact(contactId) {
            const self = this;
            axios
            .delete(`/api/contact/${contactId}`)
            .then(_response => {
                const idx = self.contactList.findIndex(object => {
                    return object.id === contactId;
                });
                self.contactList.splice(idx, 1);                
            })
            .catch(_error => {
                this.error = true;
            });
        },
    },
};
</script>