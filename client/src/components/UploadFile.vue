<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col></b-col>
        <div class="w-75 p-3">
          <b-card
            bg-variant="secondary"
            text-variant="white"
            header="Upload File"
            class="text-center"
          >
            <b-form @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label-cols-sm="1"
                label-cols-lg="2"
                label="File Name :"
                label-align-sm="right"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.filename"
                  required
                  placeholder="File Name"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group2"
                label-cols-sm="1"
                label-cols-lg="2"
                label="Hash :"
                label-align-sm="right"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.hash"
                  required
                  placeholder="Hash"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group2"
                label-cols-sm="1"
                label-cols-lg="2"
                label="File ID :"
                label-align-sm="right"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.fileid"
                  required
                  placeholder="File ID"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group2"
                label-cols-sm="1"
                label-cols-lg="2"
                label="Secret Key :"
                label-align-sm="right"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.secretkey"
                  required
                  placeholder="Secret Key"
                >
                </b-form-input>
              </b-form-group>

              <br />

              <!-- เริ่มส่วน Asses List -->
              <b-card
                bg-variant="info"
                text-variant="white"
                header="Assess List"
                class="text-left"
              >
                <b-form-group
                  id="input-group-1"
                  label-cols-sm="1"
                  label-cols-lg="2"
                  label="Upload :"
                  label-align-sm="right"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.nameupload"
                    required
                    placeholder="Name for Uplaod"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group2"
                  label-cols-sm="1"
                  label-cols-lg="2"
                  label="Download :"
                  label-align-sm="right"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.namedownload"
                    required
                    placeholder="Name for Download"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group2"
                  label-cols-sm="1"
                  label-cols-lg="2"
                  label="Delete :"
                  label-align-sm="right"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.namedelete"
                    required
                    placeholder="Name for Delete"
                  ></b-form-input>
                </b-form-group>
              </b-card>
              <!-- จบส่วนAssessList -->
              <br />

              <!-- button -->
              <center>
                <b-button type="submit" variant="primary">Upload</b-button>
                &nbsp;
                <b-button type="reset" variant="primary">Reset</b-button>
              </center>
            </b-form>
          </b-card>
        </div>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
button[type="submit"] {
  background-color: #0fb992;
}
button[type="reset"] {
  background-color: #fc294c;
}
</style>

<script>
export default {
  data () {
    return {
      form: {
        filename: '',
        hash: '',
        fileid: '',
        secretkey: '',
        nameupload: '',
        namedownload: '',
        namedelete: ''
      },
      show: true
    }
  },
  methods: {
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.filename = ''
      this.form.hash = ''
      this.form.fileid = ''
      this.form.secretkey = ''
      this.form.nameupload = ''
      this.form.namedownload = ''
      this.form.namedelete = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
