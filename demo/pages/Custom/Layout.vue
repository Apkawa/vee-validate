<template>
    <div>
        <div class="input">
            <slot name="field">

            </slot>
        </div>
        <div v-if="errors.has(name)" class="error">
            {{errors.first(name)}}
        </div>
        layout. {{ errors.first('custom')}} <br>
    </div>
</template>

<script>
  export default {
    name: 'Layout',
    inject: ['$validator'],
    props: ['name']
  }
</script>

<style scoped>
    .error {
        color:darkred;
    }
</style>