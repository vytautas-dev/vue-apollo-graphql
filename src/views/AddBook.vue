<script setup lang="ts">
import { ref } from "vue";

const author = ref<string | null>(null);
const title = ref<string | null>(null);
const description = ref<string | null>(null);
const genre = ref<string | null>("fiction");

const options = ref([
  {
    label: "Fiction",
    value: "fiction",
  },
  {
    label: "Nonfiction",
    value: "nonfiction",
  },
  {
    label: "Drama",
    value: "drama",
  },
  {
    label: "Poetry",
    value: "poetry",
  },
  {
    label: "Folktale",
    value: "folktale",
  },
]);
</script>

<template>
  <q-page padding>
    <h4>Add Book</h4>
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="author"
          label="Author *"
          hint="Author's name"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          filled
          v-model="title"
          label="Title *"
          hint="Book's title"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          filled
          v-model="description"
          label="Description *"
          hint="Description"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <div class="q-pa-lg">
          <q-option-group
            v-model="genre"
            :options="options"
            color="red"
            left-label
          />
        </div>

        <div>
          <q-btn label="Add book" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>
