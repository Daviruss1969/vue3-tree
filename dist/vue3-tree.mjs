import { openBlock, createElementBlock, createElementVNode, computed, resolveComponent, normalizeStyle, withModifiers, Fragment, renderSlot, createVNode, createCommentVNode, withDirectives, vModelCheckbox, toDisplayString, renderList, createBlock, withCtx, nextTick, onMounted, createSlots } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$4 = {};
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "feather feather-chevron-right"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("polyline", { points: "9 18 15 12 9 6" }, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$3);
}
var ArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = {};
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "feather feather-chevron-down"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("polyline", { points: "6 9 12 15 18 9" }, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$2);
}
var ArrowDown = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {};
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "feather feather-x"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$1,
  _hoisted_3$1
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4$1);
}
var DeleteIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var TreeRow_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  components: {
    ArrowRight,
    ArrowDown,
    DeleteIcon
  },
  props: {
    node: {
      type: Object,
      required: true
    },
    indentSize: {
      type: Number,
      required: true
    },
    gap: {
      type: Number,
      required: true
    },
    getNode: {
      type: Function,
      required: true
    },
    setNode: {
      type: Function,
      required: true
    },
    updateNode: {
      type: Function,
      required: true
    },
    expandRowByDefault: {
      type: Boolean,
      default: false
    },
    useCheckbox: {
      type: Boolean,
      default: false
    },
    useIcon: {
      type: Boolean,
      default: true
    },
    useRowDelete: {
      type: Boolean,
      default: false
    },
    showChildCount: {
      type: Boolean,
      default: false
    },
    rowHoverBackground: {
      type: String,
      default: "#e0e0e0"
    },
    expandable: {
      type: Boolean,
      default: true
    },
    showPrependNodeText: {
      type: Boolean,
      default: false
    }
  },
  emits: ["nodeClick", "toggleCheckbox", "nodeExpanded", "deleteRow"],
  setup(props, { emit }) {
    const childCount = computed(() => {
      var _a;
      return (_a = props.node.nodes) == null ? void 0 : _a.length;
    });
    const checkedChildCount = computed(
      () => {
        var _a;
        return (_a = props.node.nodes) == null ? void 0 : _a.filter((item) => item.checked).length;
      }
    );
    const toggleExpanded = (node) => {
      props.node.expanded = props.node.nodes ? !props.node.expanded : false;
      nextTick(() => {
        emit("nodeExpanded", node, props.node.expanded);
      });
    };
    const handleClick = (node, passExpand) => {
      if (!passExpand && props.expandable && childCount.value) {
        toggleExpanded(node);
      }
      emit("nodeClick", { ...node });
    };
    const onNodeExpanded = (node, state) => {
      emit("nodeExpanded", node, state);
    };
    const onToggleCheckbox = (node) => {
      emit("toggleCheckbox", node);
    };
    const removedRow = (node) => {
      emit("deleteRow", node);
    };
    return {
      childCount,
      checkedChildCount,
      handleClick,
      onNodeExpanded,
      onToggleCheckbox,
      removedRow
    };
  }
};
const _hoisted_1$1 = {
  key: 0,
  class: "tree-row-item-icon-wrapper"
};
const _hoisted_2 = ["checked", "indeterminate"];
const _hoisted_3 = { class: "tree-row-txt" };
const _hoisted_4 = { class: "child-count" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arrow_right = resolveComponent("arrow-right");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_delete_icon = resolveComponent("delete-icon");
  const _component_tree_row = resolveComponent("tree-row", true);
  return openBlock(), createElementBlock("li", {
    class: "tree-row",
    style: normalizeStyle({
      gap: `${$props.gap}px`,
      paddingLeft: `${$props.indentSize}px`,
      "--row-hover-background": $props.rowHoverBackground
    })
  }, [
    createElementVNode("div", {
      class: "tree-row-item",
      onClick: _cache[3] || (_cache[3] = withModifiers(($event) => $setup.handleClick($props.node), ["stop"]))
    }, [
      $props.useIcon ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        $setup.childCount ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          !$props.node.expanded ? renderSlot(_ctx.$slots, "iconActive", { key: 0 }, () => [
            createVNode(_component_arrow_right)
          ]) : renderSlot(_ctx.$slots, "iconInactive", { key: 1 }, () => [
            createVNode(_component_arrow_down)
          ])
        ], 64)) : createCommentVNode("", true)
      ])) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "checkbox", {
        id: $props.node.id,
        node: $props.node,
        checked: $props.node.checked,
        indeterminate: $props.node.indeterminate
      }, () => [
        $props.useCheckbox ? withDirectives((openBlock(), createElementBlock("input", {
          key: 0,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $props.node.checked = $event),
          type: "checkbox",
          checked: $props.node.checked,
          indeterminate: $props.node.indeterminate,
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $setup.onToggleCheckbox($props.node), ["stop"]))
        }, null, 8, _hoisted_2)), [
          [vModelCheckbox, $props.node.checked]
        ]) : createCommentVNode("", true)
      ]),
      renderSlot(_ctx.$slots, "node", { node: $props.node }, () => [
        createElementVNode("span", _hoisted_3, toDisplayString($props.node.label), 1)
      ]),
      $setup.childCount && $props.showChildCount ? renderSlot(_ctx.$slots, "childCount", {
        key: 1,
        count: $setup.childCount,
        checkedCount: $setup.checkedChildCount,
        childs: $props.node.nodes
      }, () => [
        createElementVNode("span", _hoisted_4, toDisplayString($setup.childCount), 1)
      ]) : createCommentVNode("", true),
      !$props.node.undeletable && $props.useRowDelete ? (openBlock(), createElementBlock("div", {
        key: 2,
        class: "delete-icon",
        onClick: _cache[2] || (_cache[2] = withModifiers(($event) => $setup.removedRow($props.node), ["stop"]))
      }, [
        renderSlot(_ctx.$slots, "deleteIcon", {}, () => [
          createVNode(_component_delete_icon)
        ])
      ])) : createCommentVNode("", true)
    ]),
    $props.node.expanded ? (openBlock(), createElementBlock("ul", {
      key: 0,
      class: "tree-list",
      style: normalizeStyle({ gap: `${$props.gap}px` })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.node.nodes, (child) => {
        return openBlock(), createElementBlock(Fragment, {
          key: child.id
        }, [
          !child.hidden ? (openBlock(), createBlock(_component_tree_row, {
            key: 0,
            ref_for: true,
            ref: `tree-row-${child.id}`,
            node: child,
            "use-checkbox": $props.useCheckbox,
            "use-icon": $props.useIcon,
            "use-row-delete": $props.useRowDelete,
            "show-child-count": $props.showChildCount,
            gap: $props.gap,
            "expand-row-by-default": $props.expandRowByDefault,
            "indent-size": $props.indentSize,
            "row-hover-background": $props.rowHoverBackground,
            "set-node": $props.setNode,
            "get-node": $props.getNode,
            "update-node": $props.updateNode,
            expandable: $props.expandable,
            onDeleteRow: $setup.removedRow,
            onNodeClick: _cache[4] || (_cache[4] = (item) => $setup.handleClick(item, true)),
            onToggleCheckbox: $setup.onToggleCheckbox,
            onNodeExpanded: $setup.onNodeExpanded
          }, {
            node: withCtx(({ node: slotNode }) => [
              renderSlot(_ctx.$slots, "node", { node: slotNode })
            ]),
            childCount: withCtx(({ count, checkedCount, childs }) => [
              renderSlot(_ctx.$slots, "childCount", {
                count,
                checkedCount,
                childs
              })
            ]),
            iconActive: withCtx(() => [
              renderSlot(_ctx.$slots, "iconActive", {}, () => [
                createVNode(_component_arrow_right)
              ])
            ]),
            iconInactive: withCtx(() => [
              renderSlot(_ctx.$slots, "iconInactive", {}, () => [
                createVNode(_component_arrow_down)
              ])
            ]),
            deleteIcon: withCtx(() => [
              renderSlot(_ctx.$slots, "deleteIcon", {}, () => [
                createVNode(_component_delete_icon)
              ])
            ]),
            checkbox: withCtx(({ node: slotNode, checked, indeterminate }) => [
              renderSlot(_ctx.$slots, "checkbox", {
                id: slotNode.id,
                node: slotNode,
                checked,
                indeterminate
              })
            ]),
            _: 2
          }, 1032, ["node", "use-checkbox", "use-icon", "use-row-delete", "show-child-count", "gap", "expand-row-by-default", "indent-size", "row-hover-background", "set-node", "get-node", "update-node", "expandable", "onDeleteRow", "onToggleCheckbox", "onNodeExpanded"])) : createCommentVNode("", true)
        ], 64);
      }), 128))
    ], 4)) : createCommentVNode("", true)
  ], 4);
}
var TreeRow = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const updateNodes = (nodes) => nodes.map((node) => {
  var _a;
  console.log("updateNodes");
  if (!((_a = node.nodes) == null ? void 0 : _a.length)) {
    return { ...node, expanded: false };
  }
  const everyChecked = node.nodes.every((item) => item.checked);
  const someChecked = node.nodes.some((item) => item.checked);
  const anyDeterminate = node.nodes.some((item) => item.indeterminate);
  node.checked = everyChecked;
  node.indeterminate = !everyChecked && (someChecked || anyDeterminate);
  return node;
});
const initNodes = (data, parentNode) => {
  let newData = [...data];
  newData = newData.map((node) => {
    const isCheckedParent = parentNode == null ? void 0 : parentNode.checked;
    let newNode = {
      checked: isCheckedParent ? true : false,
      expanded: false,
      indeterminate: false,
      ...node
    };
    if (Array.isArray(newNode.nodes)) {
      newNode.nodes = initNodes(newNode.nodes, newNode);
    }
    return newNode;
  });
  return newData;
};
const searchNodes = (nodes, searchText) => {
  const getNodes = (result, node) => {
    const isMatched = node.label.toLowerCase().includes(searchText.toLowerCase());
    if (isMatched) {
      result.push(node);
      return result;
    }
    if (Array.isArray(node.nodes)) {
      const nodes2 = node.nodes.reduce(getNodes, []);
      if (nodes2.length)
        result.push({ ...node, nodes: nodes2 });
    }
    return result;
  };
  return nodes.reduce(getNodes, []);
};
function getNodeById(nodes, id) {
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.id === id)
      return node;
    if (Array.isArray(node.nodes)) {
      const currentNode = getNodeById(node.nodes, id);
      if (currentNode)
        return currentNode;
    }
  }
}
const setNodeById = (nodes, id, newNode) => nodes.map((node) => {
  if (node.id === id) {
    node = { id, ...newNode };
  } else if (Array.isArray(node.nodes)) {
    node.nodes = setNodeById(node.nodes, id, newNode);
  }
  return node;
});
function updateChildNodeStatus(node, checkedStatus) {
  const checked = checkedStatus != null ? checkedStatus : node.checked;
  node.checked = checked;
  if (node && Array.isArray(node.nodes)) {
    node.nodes = node.nodes.map((item) => {
      const currentNode = {
        ...item,
        checked
      };
      if (item.nodes) {
        currentNode.nodes.forEach((childNode) => updateChildNodeStatus(childNode, checked));
      } else {
        delete currentNode.nodes;
      }
      return currentNode;
    });
  }
  return node;
}
const updateNodeById = (nodes, id, newNode) => nodes.map((node) => {
  let currentNode = node;
  if (currentNode.id === id) {
    currentNode = updateChildNodeStatus({ ...node, ...newNode });
  } else if (Array.isArray(currentNode.nodes)) {
    currentNode.nodes = updateNodeById(node.nodes, id, newNode);
  }
  return currentNode;
});
function removeNodeById(nodes, id) {
  if (!Array.isArray(nodes))
    return;
  let newNodes = [...nodes];
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.id === id) {
      newNodes = newNodes.filter((item) => item.id !== id);
    } else if (node.nodes) {
      node.nodes = removeNodeById(node.nodes, id);
      if (!node.nodes.length)
        delete node.nodes;
    }
  }
  return newNodes;
}
function expandNodeWithChilds(node) {
  if (!node)
    return;
  if (node.nodes)
    node.nodes.forEach(expandNodeWithChilds);
  node.expanded = true;
}
var Tree_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "Tree",
  components: {
    TreeRow
  },
  props: {
    nodes: {
      type: Array,
      required: true
    },
    props: {
      type: Object,
      default() {
        return {
          nodes: "nodes",
          label: "label"
        };
      }
    },
    indentSize: {
      type: Number,
      default: 24
    },
    gap: {
      type: Number,
      default: 10
    },
    searchText: {
      type: String,
      default: ""
    },
    expandRowByDefault: {
      type: Boolean,
      default: false
    },
    expandAllRowsOnSearch: {
      type: Boolean,
      default: true
    },
    useCheckbox: {
      type: Boolean,
      default: false
    },
    useIcon: {
      type: Boolean,
      default: true
    },
    useRowDelete: {
      type: Boolean,
      default: false
    },
    showChildCount: {
      type: Boolean,
      default: false
    },
    rowHoverBackground: {
      type: String,
      default: "#e0e0e0"
    },
    expandable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["nodeClick", "nodeExpanded", "checkboxToggle", "update:nodes"],
  setup(props, { emit }) {
    onMounted(() => emit("update:nodes", initNodes(props.nodes)));
    const filteredData = computed(() => {
      let newData = props.nodes;
      if (props.searchText) {
        newData = searchNodes(props.nodes, props.searchText);
        if (props.expandAllRowsOnSearch) {
          newData.forEach(expandNodeWithChilds);
        }
      }
      return newData;
    });
    const getNode = (id) => getNodeById(props.nodes, id);
    const setNode = (id, node) => {
      emit("update:nodes", setNodeById(props.nodes, id, node));
    };
    const updateNode = (id, data) => {
      emit("update:nodes", updateNodes(updateNodeById(props.nodes, id, data)));
    };
    const onToggleCheckbox = (node) => {
      const checked = !node.checked;
      updateNode(node.id, { checked });
      emit("nodeClick", { ...node, checked });
      emit("checkboxToggle", { ...node, checked });
    };
    const onNodeClick = (node) => {
      emit("nodeClick", node);
    };
    const onNodeExpanded = (node, state) => {
      emit("nodeExpanded", node, state);
    };
    const onUpdate = () => {
      emit("update:nodes", props.nodes);
    };
    const onDeleteRow = (node) => {
      removeNodeById(props.nodes, node.id);
      emit("update:nodes", updateNodes(removeNodeById(props.nodes, node.id)));
    };
    return {
      setNode,
      getNode,
      updateNode,
      onNodeClick,
      onNodeExpanded,
      onUpdate,
      onToggleCheckbox,
      onDeleteRow,
      filteredData
    };
  }
};
const _hoisted_1 = { class: "tree" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tree_row = resolveComponent("tree-row");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("ul", {
      class: "tree-list",
      style: normalizeStyle({ gap: `${$props.gap}px` })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.filteredData, (node) => {
        return openBlock(), createElementBlock(Fragment, {
          key: node.id
        }, [
          !node.hidden ? (openBlock(), createBlock(_component_tree_row, {
            key: 0,
            ref_for: true,
            ref: `tree-row-${node.id}`,
            node,
            "use-checkbox": $props.useCheckbox,
            "use-icon": $props.useIcon,
            "use-row-delete": $props.useRowDelete,
            "show-child-count": $props.showChildCount,
            "indent-size": $props.indentSize,
            gap: $props.gap,
            "row-hover-background": $props.rowHoverBackground,
            "set-node": $setup.setNode,
            "get-node": $setup.getNode,
            "update-node": $setup.updateNode,
            expandable: $props.expandable,
            onDeleteRow: $setup.onDeleteRow,
            onNodeClick: $setup.onNodeClick,
            onNodeExpanded: $setup.onNodeExpanded,
            onToggleCheckbox: $setup.onToggleCheckbox
          }, createSlots({
            checkbox: withCtx(({ node: slotNode, checked, indeterminate }) => [
              renderSlot(_ctx.$slots, "checkbox", {
                node: slotNode,
                checked,
                indeterminate,
                toggleCheckbox: () => $setup.onToggleCheckbox(slotNode)
              }, void 0, true)
            ]),
            node: withCtx(({ node: slotNode }) => [
              renderSlot(_ctx.$slots, "node", { node: slotNode }, void 0, true)
            ]),
            _: 2
          }, [
            $props.useIcon ? {
              name: "iconActive",
              fn: withCtx(() => [
                renderSlot(_ctx.$slots, "iconActive", {}, void 0, true)
              ]),
              key: "0"
            } : void 0,
            $props.useIcon ? {
              name: "iconInactive",
              fn: withCtx(() => [
                renderSlot(_ctx.$slots, "iconInactive", {}, void 0, true)
              ]),
              key: "1"
            } : void 0,
            $props.useRowDelete ? {
              name: "deleteIcon",
              fn: withCtx(() => [
                renderSlot(_ctx.$slots, "deleteIcon", {}, void 0, true)
              ]),
              key: "2"
            } : void 0,
            $props.showChildCount ? {
              name: "childCount",
              fn: withCtx(({ count, checkedCount, childs }) => [
                renderSlot(_ctx.$slots, "childCount", {
                  count,
                  checkedCount,
                  childs
                }, void 0, true)
              ]),
              key: "3"
            } : void 0
          ]), 1032, ["node", "use-checkbox", "use-icon", "use-row-delete", "show-child-count", "indent-size", "gap", "row-hover-background", "set-node", "get-node", "update-node", "expandable", "onDeleteRow", "onNodeClick", "onNodeExpanded", "onToggleCheckbox"])) : createCommentVNode("", true)
        ], 64);
      }), 128))
    ], 4)
  ]);
}
var Tree = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-530a65bc"]]);
export { Tree as default, getNodeById, setNodeById, updateNodeById };
