<template>
    <div>
        <h1>Match List</h1>
        <ol>
            <li v-for="record in filteredUndertoneData" :key="record.id" :value="record.fields.Brand ">
                
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: 'MatchList'
    }
</script>


<style>
    h1 {
        color: red
    }
</style>