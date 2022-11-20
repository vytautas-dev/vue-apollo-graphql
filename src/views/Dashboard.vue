<!-------------------------------------------------SCRIPT---------------------------------------------------->
<script setup lang="ts">
import {useQuery} from '@vue/apollo-composable'
import { watch, ref} from "vue";
import {GET_BOOKS} from "@/graphql/queries";
import type {TBook, TBookInput} from "@/types/types";
import Spinner from "../components/Spinner.vue";

const books = ref<TBook[]>([]);

const bookInput = ref<TBookInput>({
  limit: 20,
  offset: 0,
});

const { result, loading, error } = useQuery(GET_BOOKS, {bookInput});

watch(result, (): void => books.value = result.value?.books )

</script>
<!-------------------------------------------------TEMPLATE-------------------------------------------------->
<template>


  <q-page padding>
    <Container>
      <h4>Dashboard Page</h4>
      <div class="text-purple q-gutter-md column items-center" v-if="error" style="font-size: 2em">
        <q-icon name="warning" />
        <p>{{error}}</p>
      </div>
      <Spinner v-if="loading"/>
      <q-list bordered separator v-else>
        <q-item v-for="book in books" :key="book._id" clickable v-ripple>
          <q-item-section>{{book.author}} - {{ book.title }}</q-item-section>
        </q-item>
      </q-list>
    </Container>
  </q-page>


</template>

<!-------------------------------------------------STYLE----------------------------------------------------->
<style scoped>

</style>
