<!-------------------------------------------------SCRIPT---------------------------------------------------->
<script setup lang="ts">
import {useQuery} from '@vue/apollo-composable'
import { watch, ref} from "vue";
import {GET_BOOKS} from "@/graphql/queries";
import type {TBook, TBookInput} from "@/types/types";

const books = ref<TBook[]>([]);

const bookInput = ref<TBookInput>({
  limit: 10,
  offset: 0,
});

const { result, loading, error } = useQuery(GET_BOOKS, {bookInput});

watch(result, (): void => books.value = result.value?.books )

</script>
<!-------------------------------------------------TEMPLATE-------------------------------------------------->
<template>
  <h2>Dashboard Page</h2>
  <p v-if="error">{{error}}</p>
  <p v-if="loading">Loading...</p>
  <ul v-else>
    <li v-for="book in books" :key="book._id">{{book.title}}</li>
  </ul>
</template>

<!-------------------------------------------------STYLE----------------------------------------------------->
<style scoped>

</style>
