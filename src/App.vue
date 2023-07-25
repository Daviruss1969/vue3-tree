<template>
  <Tree
    v-model:nodes="data"
    :use-checkbox="true"
    @checkboxToggle="checkboxToggle($event)"
  >
    <template #node="{node}">
      <div v-if="node.data.button">
        <button>{{ node.label }}</button>
      </div>
      <div v-else>
        <p> {{ node.label }} -- {{ node.data.type }}</p>
      </div>
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
              button: true,
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
  methods: {
    checkboxToggle(node) {
      console.log(node);
    },
  },
};
</script>
