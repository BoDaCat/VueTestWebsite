<template>
    <div class="foodsmain">
        <div class="background-style2 valign-wrapper">
            <div class="container">
                <Foods />
            </div>

        </div>
    </div>
</template>

<script>
import Foods from '@/components/Foods.vue'
export default {
    name: 'foodsmain',
    components: {
        Foods
    },

}
</script>

<style scoped>
.background-style2 {
  background-color: lightgoldenrodyellow;
  height: auto;
}
</style>
