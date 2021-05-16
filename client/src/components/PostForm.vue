<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <div class="field mt-5">
        <label class="label">Title</label>
        <div class="control">
          <input
            v-model="post.title"
            class="input"
            type="text"
            placeholder="Author Name"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Post Content</label>
        <div class="control">
          <textarea
            v-model="post.content"
            class="textarea"
            placeholder="Textarea"
          ></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Author</label>
        <div class="control">
          <input
            v-model="post.creator"
            class="input"
            type="text"
            placeholder="Author Name"
          />
        </div>

        <div class="field is-grouped mt-3">
          <div class="control">
            <button type="submit" class="button is-primary">Submit</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: ["post", "submitForm"],
};
</script>