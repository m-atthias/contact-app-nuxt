<template>
    <section class="py-8 md:py-16 bg-gray">
        <div class="max-w-3xl lg:max-w-4xl mx-auto my-0 w-full px-4 space-y-4">
            <div class="w-full bg-white px-5 sm:px-24 xl:py-10 pt-5 md:pt-10 pb-5 rounded shadow">
                <h2 class="font-bold text-blue-dark text-2xl md:text-5xl">{{ $t('contactCreateHeading') }}</h2>
                <span v-if="success" id="success-message" class="text-blue-dark">{{ $t('contactCreated') }}</span>
                <div class="radio-group form-group flex flex-col justify-between py-5">
                    <span class="mb-5">{{ $t('contactKind') }}</span>
                    <div class="flex flex-row justify-evenly">
                        <div class="radio-section">
                            <input id="contact_type_simple" class="radio-tab" type="radio" name="contact_type" value="SIMPLE" checked @change="handleChange" />
                            <label for="contact_type_simple">{{ $t('contactTypeSimpleLabel') }}</label>
                        </div>
                        <div class="radio-section form-group">
                            <input id="contact_type_advanced" class="radio-tab" type="radio" name="contact_type" value="ADVANCED" @change="handleChange" />
                            <label for="contact_type_advanced">{{ $t('contactTypeAdvancedLabel') }}</label>
                        </div>
                    </div>
                </div>
                <form class="flex flex-col align-center" @submit.prevent="handleSubmit">
                    <div class="form-group flex flex-col my-2">
                        <label for="name" class="font-normal text-sm my-1 text-blue-dark">{{ $t('contactNameLabel') }}</label>
                        <input id="name" v-model="form.name" class="border rounded-md border-grey-dark pl-3 pr-8 h-12" type="text" name="name" :placeholder="$t('enterName')" required />
                        <span v-if="errors.nameError" class="text-red">{{errors.nameError}}</span>
                    </div>
                    <div class="form-group flex flex-col my-2">
                        <label for="type" class="font-normal text-sm my-1 text-blue-dark">{{ $t('contactTypeLabel') }}</label>
                        <select id="type" v-model="form.type" name="type" class="border rounded-md border-grey-dark bg-white pl-3 pr-8 h-12">
                            <option value="PRIVATE" selected>{{ $t('contactTypePrivateLabel') }}</option>
                            <option value="WORK">{{ $t('contactTypeWorkLabel') }}</option>
                        </select>
                    </div>
                    <div v-if="isAdvancedContact" class="flex flex-col">
                        <div class="form-group flex flex-col my-2">
                            <label 
                                for="email" 
                                class="font-normal text-sm my-1 text-blue-dark" 
                                :class="{ 'border-grey-dark': !errors.emailError, 'text-blue-dark': !errors.emailError, 'border-red': errors.emailError, 'text-red': errors.emailError }"
                            >{{ $t('contactEmailLabel') }}</label>
                            <input
                                id="email" 
                                v-model="form.email" 
                                class="border rounded-md border-grey-dark pl-3 pr-8 h-12" 
                                :class="{ 'border-grey-dark': !errors.emailError, 'text-blue-dark': !errors.emailError, 'border-red': errors.emailError, 'text-red': errors.emailError }" 
                                type="email" 
                                placeholder="bob@example.com" 
                                :required="isAdvancedContact"
                                @blur="validEmail(form.email)" 
                            />
                            <span v-if="errors.emailError" class="text-red">{{errors.emailError}}</span>
                        </div>
                        <div class="form-group flex flex-col my-2">
                            <label for="phone" class="font-normal text-sm my-1 text-blue-dark">{{ $t('contactPhoneLabel') }}</label>
                            <input
                                id="phone" v-model="form.phone" class="border rounded-md border-grey-dark pl-3 pr-8 h-12" type="tel" placeholder="+31612345678" :required="isAdvancedContact"/>
                            <span v-if="errors.phoneError" class="text-red">{{errors.phoneError}}</span>
                        </div>
                    </div>
                    <button id="create-contact" class="p-2 bg-blue text-white rounded-full text-lg px-6 py-2 mb-2 mt-4" type="submit">{{ $t('formSubmit') }}</button>
                </form>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios';

const ADVANCED_CONTACT_FORM = 'ADVANCED';

export default {
    data() {
        return {
            isAdvancedContact: false,
            success: false,
            form: {
               name: '',
               email: '',
               phone: '',
               type: 'PRIVATE'
            },
            errors: {
                nameError: '',
                emailError: '',
                phoneError: '',
            }
        }
    },
    methods: {
        resetFields() {
            // Use reduce instead of forEach since this only goes through the Object properties and not the whole chain.
            this.form = Object.keys(this.form).reduce((acc, key) => {
               acc[key] = '';
               return acc;
            }, {});
        },
        handleChange(event) {
            this.isAdvancedContact = (event.target.value === ADVANCED_CONTACT_FORM);
        },
        async handleSubmit(e) {
            if(!this.form.name) {
                this.errors.nameError = this.$t('invalidName');
            }

            if(this.isAdvancedContact) {
                this.validEmail(this.form.email);
                this.validPhone(this.form.phone);
            }

            if (this.errors.emailError || this.errors.nameError || this.errors.phoneError) {
                return;
            }

            e.preventDefault();

            const formData = new FormData();
            for (const [key, value] of Object.entries(this.form)) {
                formData.append(key, value);
            }

            await axios
                .post('api/contact', formData)
                .then(() => {
                    this.success = true;
                    setTimeout(() => {
                        this.success = false;
                    }, 5000);
                })
                .catch((_e) => {
                    window.location.reload();
                })
                .finally(() => {
                    this.resetFields();
                });
        },
        validEmail(email) {
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.errors.emailError = (regex.test(email)) ? '' : this.$t('invalidEmail');
        },
        validPhone(phone) {
            const regex = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
            this.errors.phoneError = (regex.test(phone)) ? '' : this.$t('invalidPhone');
        }
    }
};
</script>

<style scoped>
    .radio-tab {
        position: absolute;
        visibility: hidden;
        opacity: 1;
        z-index: 1;
    }

    .radio-tab:checked + label {
        border-bottom: 2px solid hsl(221, 100%, 48%);
    }

    .radio-tab + label {
        cursor: pointer;
        float: left;
        padding: .5em 1em;
        position: relative;
    }

    div#phone-input .input-tel__input.no-country-selector {
        --tw-text-opacity: 1;
        color: hsla(226, 88%, 16%, var(--tw-text-opacity));
        padding-left: 0.75rem;
        padding-right: 2rem;
        border-width: 1px;
        border-radius: 0.375rem;
        height: 3rem !important;
    }
</style>