<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)" :key="quote.id">{{ quote }}</app-quote>
    </div>
</template>

<script>
    import Quote from './Quote'

    export default {
        props: ['quotes'],
        components: {
            appQuote: Quote
        },
        methods: {
            deleteQuote(index) {
                this.$emit('quoteDelited', index)
            },
        },
    }
</script>

<style>
    
</style>