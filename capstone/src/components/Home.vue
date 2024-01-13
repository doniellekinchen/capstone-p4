<template>
    <div class="title">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
    h1 {
        color: brown
    }
</style>