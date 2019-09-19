<template>
<div class="posts">
    <h1>Add Posts</h1>
    <div class="form">
        <div>
            <input type="text" name="filename" placeholder="File Name" v-model="filename">
        </div>
        <div>
            <input type="text" name="hash" placeholder="Hash" v-model="hash">
        </div>
        <div>
            <input type="text" name="fileid" placeholder="File ID" v-model="fileid">
        </div>
        <div>
            <input type="text" name="secretkey" placeholder="Secret Key" v-model="secretkey">
        </div>
        <div>
            <input type="text" name="nameupload" placeholder="Name for Upload" v-model="nameupload">
        </div>
        <div>
            <input type="text" name="namedownload" placeholder="Name for Download" v-model="namedownload">
        </div>
        <div>
            <input type="text" name="namedelete" placeholder="Name for Delete" v-model="namedelete">
        </div>
        <!-- <div>
          <textarea cols="15" rows="10" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div> -->
        <div>
          <button class="app_post_btn" @click="addPost">UPLOAD</button>
        </div>
    </div>
</div>
</template>

<script>
import postService from '@/services/postService'

export default {
  // name: 'addpost',

  data () {
    return {
      filename: '',
      hash: '',
      fileid: '',
      secretkey: '',
      nameupload: '',
      namedownload: '',
      namedelete: ''
    }
  },
  methods: {
    async addPost () {
      await postService.addPost({
        filename: this.filename,
        hash: this.hash,
        fileid: this.fileid,
        secretkey: this.secretkey,
        nameupload: this.nameupload,
        namedownload: this.namedownload,
        namedelete: this.namedelete
      })
      this.$router.push({ name: 'posts' })
    }
  }
}
</script>

<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
