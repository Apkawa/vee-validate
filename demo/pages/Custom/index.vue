<template>
    <div>
        <h2>Custom inputs</h2>
        <div>
            <custom-input
                    name="custom"
                    v-model="model.custom"
            >

            </custom-input>
            index. {{ errors.first("custom") }}
        </div>
        <div>
            <button @click="doValidate">Submit</button>
            <button @click="doTest">Test</button>
        </div>
    </div>
</template>

<script>
  import CustomInput from './CustomInput'

  export default {
    name: 'custom',
    components: {'custom-input': CustomInput},
    data () {
      return {
        model: {}
      }
    },
    created () {
      window.errors = this.errors
    },
    methods: {
      doTest() {
        this.errors.add({
          field: 'custom',
          msg: '111',
          id: "1",
          rule: 'required',
        })
      },
      doValidate () {
        this.$validator.validate()
          .then(result => {
            if (!result) {
              console.log('ERROR!')
              return
            }
            setTimeout(() => {
              this.errors.add({
                field: 'custom',
                msg: 'custom error from api'
              })
            }, 500)
          })
      }
    }
  }
</script>

<style>
</style>
