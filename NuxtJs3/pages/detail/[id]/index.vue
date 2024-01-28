<template>
    <div class="container">
        {{id}}
        <div class="title">
            day la title
        </div>
    </div>
</template>

<script setup>

const route = useRoute()
const id = route.params.id

</script>

<style lang="scss" scoped>
.container{
    width: 1140px;
    .title{
        color: red;
    }
}
</style>