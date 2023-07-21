<template>
  <Tree
    v-model:nodes="data"
    :use-checkbox="true"
  >
    <template #node="{node}">
      <p> {{ node.label }}</p>
      <button>ceci est un button</button>
      <p>{{ node.data.type }}</p>
    </template>
  </Tree>
</template>

<script>
import { ref } from 'vue';
import Tree from './lib/index';

export default {
  components: {
    Tree,
  },
  setup() {
    const data = ref([
      {
        id: 1,
        label: 'Animal',
        data: {
          type: 'list',
        },
        nodes: [
          {
            id: 2,
            label: 'Dog',
            data: {
              type: 'string',
            },
          },
          {
            id: 3,
            label: 'Cat',
            data: {
              type: 'list',
            },
            nodes: [
              {
                id: 4,
                label: 'Egyptian Mau Cat',
                data: {
                  type: 'string',
                },
              },
              {
                id: 5,
                label: 'Japanese Bobtail Cat',
                data: {
                  type: 'string',
                },
              },
            ],
          },
        ],
      },
      {
        id: 6,
        label: 'People',
        data: {
          type: 'list',
        },
      },
    ]);

    return {
      data,
    };
  },
};
</script>
