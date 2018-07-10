<template>
    <div>
        <layout :name="name">
            <input
                    slot="field"
                    v-validate="validate"
                    :name="name"
                    :class="{'has-error': errors.has(name)}"
                    v-model="inputValue"
                    type="text"
                    @input="updateInput"
                    @change="updateInput"
                    ref="input"
                    @blur="$emit('blur')"
                    @focus="$emit('focus')"
            >
        </layout>
        custom-input. {{ errors.first(name)}} <br>
    </div>
</template>

<script>
  import Layout from './Layout'

  export default {
    name: 'custom-input',
    components: {Layout},
    props: {
      name: {
        type: String,
        required: true,
      },
      value: {},
      validate: {
        type: String,
        default: 'required',
      },
    },
    data () {
      return {
        inputValue: this.value,
      }
    },
    watch: {
      value (newValue, oldValue) {
        if (newValue !== oldValue) {
          this.inputValue = newValue
        }
      },
    },
    methods: {
      updateInput () {
        this.$emit('input', this.$refs.input.value)
      },
    },
  }
</script>

<style scoped>

</style>
