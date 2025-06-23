import { u as useRouter, _ as _export_sfc } from "./index-m_YzqaoQ.js";
import { d as defineComponent, k as createElementBlock, m as openBlock, y as createBaseVNode, u as unref, z as toDisplayString, r as ref, c as computed, j as createVNode, A as ElIcon, B as withCtx, C as Transition, t as nextTick, D as search_default, G as createCommentVNode, H as withModifiers, I as withDirectives, i as isRef, J as vModelText, F as Fragment, K as renderList, L as normalizeClass, M as vShow, N as createBlock, O as ElDropdown, P as ElCard, Q as ElTag, R as createTextVNode, S as document_default, U as withKeys, V as arrow_right_default, W as ElDropdownMenu, X as ElDropdownItem, o as onMounted, b as onUnmounted, l as resolveComponent } from "./vendor-CgOVNiqH.js";
import { u as useI18n } from "./i18n-BGUYYN2N.js";
import "./locales-CU13jLom.js";
const _hoisted_1$8 = ["src"];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const logo2 = new URL("/vite-myBlog/assets/logo1-CBnGwMoX.png", import.meta.url).href;
    const router = useRouter();
    const title = "myBlog";
    const HomeIasd = () => {
      router.push("/");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "logo-container",
        onClick: HomeIasd
      }, [
        createBaseVNode("img", { src: unref(logo2) }, null, 8, _hoisted_1$8),
        createBaseVNode("h1", null, toDisplayString(unref(title)), 1)
      ]);
    };
  }
});
const logo = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-f00e63d0"]]);
const _hoisted_1$7 = { class: "header-search-overlay-wrapper" };
const _hoisted_2$5 = { class: "search-container" };
const _hoisted_3$2 = { class: "suggestions-list" };
const _hoisted_4$2 = ["onClick"];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const suggestionsListRef = ref(false);
    const router = useRouter();
    const showOverlay = ref(false);
    const searchText = ref("");
    const inputRef = ref(null);
    const highlightedIndex = ref(-1);
    const pageList = [
      { value: "首页", path: "/" },
      { value: "关于", path: "/about" },
      { value: "行业文章", path: "/article" },
      { value: "技术文档", path: "/docs" },
      { value: "后台管理框架", path: "/admin" },
      { value: "自定义组件库", path: "/components" }
    ];
    const filteredList = computed(() => {
      const q = searchText.value.trim().toLowerCase();
      if (!q) {
        return pageList;
      }
      return pageList.filter(
        (p) => p.value.toLowerCase().includes(q)
      );
    });
    function openOverlay() {
      showOverlay.value = true;
      suggestionsListRef.value = false;
      nextTick(() => {
        var _a;
        searchText.value = "";
        highlightedIndex.value = -1;
        (_a = inputRef.value) == null ? void 0 : _a.focus();
      });
    }
    function closeOverlay() {
      showOverlay.value = false;
      suggestionsListRef.value = false;
      searchText.value = "";
    }
    function showSuggestionsOnce() {
      if (!suggestionsListRef.value) {
        suggestionsListRef.value = true;
      }
    }
    function selectItem(item) {
      closeOverlay();
      if (item.path) {
        router.push(item.path);
      }
    }
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createVNode(_component_el_icon, {
          class: "search-icon",
          onClick: openOverlay
        }, {
          default: withCtx(() => [
            createVNode(unref(search_default), { onClick: openOverlay })
          ]),
          _: 1
        }),
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            unref(showOverlay) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "search-overlay",
              onClick: withModifiers(closeOverlay, ["self"])
            }, [
              createBaseVNode("div", _hoisted_2$5, [
                withDirectives(createBaseVNode("input", {
                  ref_key: "inputRef",
                  ref: inputRef,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(searchText) ? searchText.value = $event : null),
                  class: "search-input",
                  type: "text",
                  placeholder: "搜索页面",
                  onClick: withModifiers(showSuggestionsOnce, ["stop"])
                }, null, 512), [
                  [vModelText, unref(searchText)]
                ]),
                withDirectives(createBaseVNode("ul", _hoisted_3$2, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredList), (item, idx) => {
                    return openBlock(), createElementBlock("li", {
                      key: idx,
                      class: normalizeClass({ "suggestion-item": true, "is-active": idx === unref(highlightedIndex) }),
                      onClick: ($event) => selectItem(item)
                    }, toDisplayString(item.value), 11, _hoisted_4$2);
                  }), 128))
                ], 512), [
                  [vShow, unref(suggestionsListRef) && unref(filteredList).length > 0]
                ])
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const search = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-186e6dfe"]]);
const projectList = ref([
  {
    name: "project.customLib.name",
    icon: "el-icon-s-operation",
    description: "project.customLib.description",
    tags: ["project.customLib.tags.vue3", "project.customLib.tags.comp", "project.customLib.tags.elementPlus"],
    techStack: ["project.customLib.tech.vue3", "project.customLib.tech.ts", "project.customLib.tech.vite", "project.customLib.tech.scss"],
    features: ["project.customLib.features.form", "project.customLib.features.chart", "project.customLib.features.permBtn", "project.customLib.features.dialog"],
    updateTime: "2025-06-10"
  },
  {
    name: "project.adminFramework.name",
    icon: "el-icon-s-management",
    description: "project.adminFramework.description",
    tags: ["project.adminFramework.tags.admin", "project.adminFramework.tags.scaffold"],
    techStack: ["project.adminFramework.tech.vue3", "project.adminFramework.tech.pinia", "project.adminFramework.tech.vite", "project.adminFramework.tech.elementPlus"],
    features: ["project.adminFramework.features.dynamicRoutes", "project.adminFramework.features.permission", "project.adminFramework.features.tabs"],
    updateTime: "2025-06-01"
  },
  {
    name: "project.dataViz.name",
    icon: "el-icon-s-data",
    description: "project.dataViz.description",
    tags: ["project.dataViz.tags.echarts", "project.dataViz.tags.visual"],
    techStack: ["project.dataViz.tech.echarts", "project.dataViz.tech.vue3", "project.dataViz.tech.scss"],
    features: ["project.dataViz.features.bar", "project.dataViz.features.line", "project.dataViz.features.carousel"],
    updateTime: "2025-05-20"
  },
  {
    name: "project.globalMap.name",
    icon: "el-icon-s-home",
    description: "project.globalMap.description",
    // tags: ['project.globalMap.tags.map', 'project.globalMap.tags.animation'],
    techStack: ["project.globalMap.tech.echarts", "project.globalMap.tech.geojson", "project.globalMap.tech.vue3"],
    features: ["project.globalMap.features.multiSource", "project.globalMap.features.pathAnimation", "project.globalMap.features.countryHighlight"],
    updateTime: "2025-05-12"
  },
  {
    name: "project.dataMonitor.name",
    icon: "el-icon-monitor",
    description: "project.dataMonitor.description",
    tags: ["project.dataMonitor.tags.monitor", "project.dataMonitor.tags.log"],
    techStack: ["project.dataMonitor.tech.vue3", "project.dataMonitor.tech.echarts", "project.dataMonitor.tech.mock"],
    features: ["project.dataMonitor.features.chartMonitor", "project.dataMonitor.features.alert", "project.dataMonitor.features.logAnalysis"],
    updateTime: "2025-04-30"
  },
  {
    name: "project.lowCode.name",
    icon: "el-icon-s-grid",
    description: "project.lowCode.description",
    tags: ["project.lowCode.tags.lowcode", "project.lowCode.tags.configurable"],
    techStack: ["project.lowCode.tech.vue3", "project.lowCode.tech.sortablejs", "project.lowCode.tech.jsonSchema"],
    features: ["project.lowCode.features.dragDrop", "project.lowCode.features.propConfig", "project.lowCode.features.formDesigner"],
    updateTime: "2025-04-20"
  },
  {
    name: "project.aiAssistant.name",
    icon: "el-icon-s-opportunity",
    description: "project.aiAssistant.description",
    tags: ["project.aiAssistant.tags.ai", "project.aiAssistant.tags.automation"],
    techStack: ["project.aiAssistant.tech.openaiApi", "project.aiAssistant.tech.vue3", "project.aiAssistant.tech.promptEngineering"],
    features: ["project.aiAssistant.features.qa", "project.aiAssistant.features.codeGen", "project.aiAssistant.features.scriptExec"],
    updateTime: "2025-04-05"
  }
]);
const _hoisted_1$6 = { class: "nav-item" };
const _hoisted_2$4 = { class: "mega-menu" };
const _hoisted_3$1 = { class: "menu-left" };
const _hoisted_4$1 = { class: "menu-title" };
const _hoisted_5$1 = { class: "menu-list" };
const _hoisted_6$1 = ["onMouseenter", "onKeydown"];
const _hoisted_7$1 = { class: "menu-item-text" };
const _hoisted_8$1 = { class: "menu-right" };
const _hoisted_9$1 = { class: "card-header" };
const _hoisted_10$1 = { class: "card-title" };
const _hoisted_11$1 = { class: "card-body" };
const _hoisted_12$1 = { class: "card-desc" };
const _hoisted_13$1 = { class: "card-meta" };
const _hoisted_14$1 = { class: "card-features" };
const _hoisted_15 = { class: "card-tech" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "projectView",
  setup(__props) {
    const { t } = useI18n();
    const selectIndex = ref(0);
    const onItemMouseEnter = (idx) => {
      selectIndex.value = idx;
    };
    function onItemKeyDown(e, idx) {
      if (e.key === "Enter" || e.key === " ") {
        selectIndex.value = idx;
        e.preventDefault();
      }
    }
    const selectedItem = computed(() => {
      return selectIndex.value >= 0 && selectIndex.value < projectList.value.length ? projectList.value[selectIndex.value] : null;
    });
    return (_ctx, _cache) => {
      const _component_el_tag = ElTag;
      const _component_el_card = ElCard;
      const _component_el_dropdown = ElDropdown;
      return openBlock(), createBlock(_component_el_dropdown, {
        trigger: "hover",
        "popper-class": "mega-dropdown"
      }, {
        dropdown: withCtx(() => [
          createBaseVNode("div", _hoisted_2$4, [
            createBaseVNode("div", _hoisted_3$1, [
              createBaseVNode("div", _hoisted_4$1, toDisplayString(unref(t)("project.overviewTitle")), 1),
              createBaseVNode("ul", _hoisted_5$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(projectList), (item, idx) => {
                  return openBlock(), createElementBlock("li", {
                    key: idx,
                    class: normalizeClass(["menu-item-left", { active: unref(selectIndex) === idx }]),
                    onMouseenter: ($event) => onItemMouseEnter(idx),
                    tabindex: "0",
                    onKeydown: (e) => onItemKeyDown(e, idx)
                  }, [
                    createBaseVNode("i", {
                      class: normalizeClass([item.icon, "menu-item-icon"]),
                      "aria-hidden": "true"
                    }, null, 2),
                    createBaseVNode("span", _hoisted_7$1, toDisplayString(unref(t)(item.name)), 1)
                  ], 42, _hoisted_6$1);
                }), 128))
              ])
            ]),
            createBaseVNode("div", _hoisted_8$1, [
              createVNode(Transition, { name: "slide" }, {
                default: withCtx(() => [
                  unref(selectedItem) ? (openBlock(), createElementBlock("div", {
                    key: "detail-" + unref(selectedItem).name,
                    class: "detail-wrapper"
                  }, [
                    createVNode(_component_el_card, {
                      class: "project-card",
                      shadow: "hover"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_9$1, [
                          createBaseVNode("span", _hoisted_10$1, toDisplayString(unref(t)(unref(selectedItem).name)), 1)
                        ]),
                        createBaseVNode("div", _hoisted_11$1, [
                          createBaseVNode("p", _hoisted_12$1, toDisplayString(unref(t)(unref(selectedItem).description)), 1),
                          createBaseVNode("div", _hoisted_13$1, [
                            createBaseVNode("span", null, toDisplayString(unref(selectedItem).updateTime), 1)
                          ]),
                          createBaseVNode("ul", _hoisted_14$1, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(selectedItem).features, (f) => {
                              return openBlock(), createElementBlock("li", { key: f }, "✔ " + toDisplayString(unref(t)(f)), 1);
                            }), 128))
                          ]),
                          createBaseVNode("div", _hoisted_15, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(selectedItem).techStack, (tech) => {
                              return openBlock(), createBlock(_component_el_tag, {
                                key: tech,
                                type: "info",
                                size: "small"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)(tech)), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ])
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_1$6, toDisplayString(unref(t)("top.project")), 1)
        ]),
        _: 1
      });
    };
  }
});
const docsList = ref([
  {
    name: "docs.network.name",
    title: "docs.network.title",
    children: [
      { label: "docs.network.switch", path: "/path/to/switch" },
      { label: "docs.network.router", path: "/path/to/router" },
      { label: "docs.network.security", path: "/path/to/security" },
      { label: "docs.network.datacenter", path: "/path/to/datacenter" },
      { label: "docs.network.wireless", path: "/path/to/wireless" },
      { label: "docs.network.campus", path: "/path/to/campus" },
      { label: "docs.network.others", path: "/path/to/others" }
    ]
  },
  {
    name: "docs.server.name",
    title: "docs.server.title",
    children: [
      { label: "docs.server.rack", path: "/path/to/rack" },
      { label: "docs.server.tower", path: "/path/to/tower" },
      { label: "docs.server.blade", path: "/path/to/blade" },
      { label: "docs.server.storage", path: "/path/to/storage" },
      { label: "docs.server.density", path: "/path/to/density" },
      { label: "docs.server.ai", path: "/path/to/ai" },
      { label: "docs.server.others", path: "/path/to/others" }
    ]
  },
  {
    name: "docs.cloud.name",
    title: "docs.cloud.title",
    children: [{ label: "docs.cloud.openstack", path: "/path/to/openstack" }]
  },
  {
    name: "docs.virtualization.name",
    title: "docs.virtualization.title",
    children: [
      { label: "docs.virtualization.kvm", path: "/path/to/kvm" },
      { label: "docs.virtualization.qemu", path: "/path/to/qemu" },
      { label: "docs.virtualization.vmware", path: "/path/to/vmware" },
      { label: "docs.virtualization.hyperv", path: "/path/to/hyperv" }
    ]
  },
  {
    name: "docs.services.name",
    title: "docs.services.title",
    children: [
      { label: "docs.services.stp", path: "/path/to/stp" },
      { label: "docs.services.dns", path: "/path/to/dns" },
      { label: "docs.services.zabbix", path: "/path/to/zabbix" },
      { label: "docs.services.prometheus", path: "/path/to/prometheus" },
      { label: "docs.services.ansible", path: "/path/to/ansible" },
      { label: "docs.services.saltstack", path: "/path/to/saltstack" },
      { label: "docs.services.nginx", path: "/path/to/nginx" },
      { label: "docs.services.keepalived", path: "/path/to/keepalived" },
      { label: "docs.services.lvs", path: "/path/to/lvs" },
      { label: "docs.services.apache", path: "/path/to/apache" },
      { label: "docs.services.tomcat", path: "/path/to/tomcat" }
    ]
  },
  {
    name: "docs.database.name",
    title: "docs.database.title",
    children: [
      { label: "docs.database.mysql", path: "/path/to/mysql" },
      { label: "docs.database.mariadb", path: "/path/to/mariadb" },
      { label: "docs.database.postgresql", path: "/path/to/postgresql" },
      { label: "docs.database.sqlserver", path: "/path/to/sqlserver" },
      { label: "docs.database.mongodb", path: "/path/to/mongodb" },
      { label: "docs.database.redis", path: "/path/to/redis" },
      { label: "docs.database.memcache", path: "/path/to/memcache" },
      { label: "docs.database.neo4j", path: "/path/to/neo4j" }
    ]
  },
  {
    name: "docs.cloudnative.name",
    title: "docs.cloudnative.title",
    children: [
      { label: "docs.cloudnative.kubernetes", path: "/path/to/k8s" },
      { label: "docs.cloudnative.docker", path: "/path/to/docker" },
      { label: "docs.cloudnative.container", path: "/path/to/container" },
      { label: "docs.cloudnative.jenkins", path: "/path/to/jenkins" },
      { label: "docs.cloudnative.gitlab", path: "/path/to/gitlab" },
      { label: "docs.cloudnative.harbor", path: "/path/to/harbor" }
    ]
  },
  {
    name: "docs.datacenter.name",
    title: "docs.datacenter.title",
    children: [
      { label: "docs.datacenter.power", path: "/path/to/power" },
      { label: "docs.datacenter.cooling", path: "/path/to/cooling" },
      { label: "docs.datacenter.monitor", path: "/path/to/monitor" },
      { label: "docs.datacenter.securitydevices", path: "/path/to/security-devices" },
      { label: "docs.datacenter.others", path: "/path/to/others" }
    ]
  },
  {
    name: "docs.security.name",
    title: "docs.security.title",
    children: [
      { label: "docs.security.firewall", path: "/path/to/firewall" },
      { label: "docs.security.log", path: "/path/to/log" },
      { label: "docs.security.dbaudit", path: "/path/to/db-audit" },
      { label: "docs.security.vpn", path: "/path/to/vpn" },
      { label: "docs.security.ids", path: "/path/to/ids" },
      { label: "docs.security.others", path: "/path/to/others" }
    ]
  },
  {
    name: "docs.os.name",
    title: "docs.os.title",
    children: [
      { label: "docs.os.ubuntu", path: "/path/to/ubuntu" },
      { label: "docs.os.centos", path: "/path/to/centos" },
      { label: "docs.os.debian", path: "/path/to/debian" },
      { label: "docs.os.windows", path: "/path/to/windows" }
    ]
  }
]);
const _hoisted_1$5 = { class: "nav-item" };
const _hoisted_2$3 = { class: "mega-menu" };
const _hoisted_3 = { class: "menu-lefts" };
const _hoisted_4 = { class: "menu-title" };
const _hoisted_5 = { class: "menu-list" };
const _hoisted_6 = ["onClick", "onMouseenter", "onKeydown"];
const _hoisted_7 = { class: "docs-nav-item__text" };
const _hoisted_8 = { class: "menu-right" };
const _hoisted_9 = { class: "detail-header" };
const _hoisted_10 = { class: "detail-header-text" };
const _hoisted_11 = { class: "detail-body" };
const _hoisted_12 = ["onClick", "onKeydown"];
const _hoisted_13 = { class: "child-text" };
const _hoisted_14 = {
  key: 0,
  class: "no-content"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "technicalDocs",
  setup(__props) {
    const { t } = useI18n({ useScope: "global" });
    const router = useRouter();
    const selectIndex = ref(0);
    const onItemClick = (idx) => {
      selectIndex.value = idx;
    };
    const onItemMouseEnter = (idx) => {
      selectIndex.value = idx;
    };
    const selectedItem = computed(() => {
      return selectIndex.value >= 0 && selectIndex.value < docsList.value.length ? docsList.value[selectIndex.value] : null;
    });
    const navigateTo = (path) => {
      if (path) {
        router.push(path);
      }
    };
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      const _component_el_dropdown = ElDropdown;
      return openBlock(), createBlock(_component_el_dropdown, {
        trigger: "hover",
        "popper-class": "mega-dropdown"
      }, {
        dropdown: withCtx(() => [
          createBaseVNode("div", _hoisted_2$3, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_el_icon, { class: "menu-title-icon" }, {
                  default: withCtx(() => [
                    createVNode(unref(document_default))
                  ]),
                  _: 1
                }),
                createBaseVNode("span", null, toDisplayString(unref(t)("docs.overviewTitle")), 1)
              ]),
              createBaseVNode("ul", _hoisted_5, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(docsList), (item, idx) => {
                  return openBlock(), createElementBlock("li", {
                    key: idx,
                    class: normalizeClass(["docs-nav-item", { "docs-nav-item--active": unref(selectIndex) === idx }]),
                    tabindex: "0",
                    onClick: ($event) => onItemClick(idx),
                    onMouseenter: ($event) => onItemMouseEnter(idx),
                    onKeydown: withKeys(withModifiers(($event) => onItemClick(idx), ["prevent"]), ["enter"])
                  }, [
                    createVNode(_component_el_icon, { class: "docs-nav-item__icon" }, {
                      default: withCtx(() => [
                        createVNode(unref(document_default))
                      ]),
                      _: 1
                    }),
                    createBaseVNode("span", _hoisted_7, toDisplayString(unref(t)(item.name)), 1)
                  ], 42, _hoisted_6);
                }), 128))
              ])
            ]),
            createBaseVNode("div", _hoisted_8, [
              createVNode(Transition, { name: "fade" }, {
                default: withCtx(() => [
                  unref(selectedItem) ? (openBlock(), createElementBlock("div", {
                    key: `detail-${unref(selectedItem).name}`,
                    class: "detail-container"
                  }, [
                    createBaseVNode("div", _hoisted_9, [
                      createVNode(_component_el_icon, { class: "detail-header-icon" }, {
                        default: withCtx(() => [
                          createVNode(unref(document_default))
                        ]),
                        _: 1
                      }),
                      createBaseVNode("span", _hoisted_10, toDisplayString(unref(t)(unref(selectedItem).title)), 1)
                    ]),
                    createBaseVNode("div", _hoisted_11, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(selectedItem).children || [], (child, cidx) => {
                        return openBlock(), createElementBlock("div", {
                          key: cidx,
                          class: "child-card",
                          tabindex: "0",
                          onClick: ($event) => navigateTo(child.path),
                          onKeydown: withKeys(withModifiers(($event) => navigateTo(child.path), ["prevent"]), ["enter"])
                        }, [
                          createVNode(_component_el_icon, { class: "child-icon" }, {
                            default: withCtx(() => [
                              createVNode(unref(arrow_right_default))
                            ]),
                            _: 1
                          }),
                          createBaseVNode("span", _hoisted_13, toDisplayString(unref(t)(child.label)), 1)
                        ], 40, _hoisted_12);
                      }), 128)),
                      !(unref(selectedItem).children && unref(selectedItem).children.length) ? (openBlock(), createElementBlock("div", _hoisted_14, " 暂无可用文档 ")) : createCommentVNode("", true)
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ])
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_1$5, toDisplayString(unref(t)("top.docs")), 1)
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$4 = { class: "top-bar" };
const _hoisted_2$2 = { class: "language" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const router = useRouter();
    const { t, locale } = useI18n({ useScope: "global" });
    const toArticle = () => router.push("/article");
    const toAbout = () => router.push("/about");
    function changeLang(lang) {
      if (locale.value === lang) return;
      locale.value = lang;
      localStorage.setItem("lang", lang);
    }
    return (_ctx, _cache) => {
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown = ElDropdown;
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(_sfc_main$6),
        createVNode(_sfc_main$5),
        createBaseVNode("span", { onClick: toArticle }, toDisplayString(unref(t)("top.article")), 1),
        createBaseVNode("span", { onClick: toAbout }, toDisplayString(unref(t)("top.about")), 1),
        createVNode(_component_el_dropdown, { "popper-class": "custom-dropdown" }, {
          dropdown: withCtx(() => [
            createVNode(_component_el_dropdown_menu, null, {
              default: withCtx(() => [
                createVNode(_component_el_dropdown_item, {
                  onClick: _cache[0] || (_cache[0] = ($event) => changeLang("zh"))
                }, {
                  default: withCtx(() => _cache[3] || (_cache[3] = [
                    createTextVNode("中文")
                  ])),
                  _: 1,
                  __: [3]
                }),
                createVNode(_component_el_dropdown_item, {
                  onClick: _cache[1] || (_cache[1] = ($event) => changeLang("en"))
                }, {
                  default: withCtx(() => _cache[4] || (_cache[4] = [
                    createTextVNode("English")
                  ])),
                  _: 1,
                  __: [4]
                }),
                createVNode(_component_el_dropdown_item, {
                  onClick: _cache[2] || (_cache[2] = ($event) => changeLang("kr"))
                }, {
                  default: withCtx(() => _cache[5] || (_cache[5] = [
                    createTextVNode("한구어")
                  ])),
                  _: 1,
                  __: [5]
                })
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createBaseVNode("span", _hoisted_2$2, toDisplayString(unref(t)("top.language")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _hoisted_1$3 = {
  class: "github-icon",
  viewBox: "0 0 1024 1024",
  width: "30",
  height: "30",
  fill: "currentColor"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "github",
  props: {
    size: {
      type: Number,
      default: 20
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [
        createBaseVNode("a", {
          href: "https://github.com/your-repo",
          target: "_blank",
          class: "github-icon"
        }, [
          createBaseVNode("path", { d: "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.8-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-50.7 121.9-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91.1 0 65.9-0.3 127.6-0.3 145.8 0 11.1 7.2 23.5 22.8 19.3 172.2-57 296-225 296-423.8 0-247.2-200.4-447.3-447.5-447.3z" })
        ], -1)
      ]));
    };
  }
});
const github = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-637c87de"]]);
const _hoisted_1$2 = ["width", "height"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "gitee",
  props: {
    size: {
      type: Number,
      default: 30
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        width: __props.size,
        height: __props.size,
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg",
        class: "gitee-icon"
      }, _cache[0] || (_cache[0] = [
        createBaseVNode("a", {
          href: "https://github.com/your-repo",
          target: "_blank",
          class: "github-icon"
        }, [
          createBaseVNode("path", {
            fill: "#FFFFFF",
            d: "M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z"
          }),
          createBaseVNode("path", {
            fill: "#000000",
            d: "M353.9 288c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320v-96H416V384h192v64h-96v96h192c17.7 0 32-14.3 32-32V352c0-35.3-28.7-64-64-64H353.9z"
          })
        ], -1)
      ]), 8, _hoisted_1$2);
    };
  }
});
const gitee = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-aaaad78d"]]);
const _hoisted_1$1 = { class: "top-container" };
const _hoisted_2$1 = { class: "right-nav" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const rightWidth = ref(true);
    const showGithub = ref(true);
    const showGitee = ref(true);
    const showLogo = ref(true);
    function checkSecreenWidth() {
      const width = window.innerWidth;
      rightWidth.value = width >= 920;
      showGithub.value = width > 500;
      showGitee.value = width > 500;
      showLogo.value = width > 200;
    }
    onMounted(() => {
      window.addEventListener("resize", checkSecreenWidth);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", checkSecreenWidth);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        unref(showLogo) ? (openBlock(), createBlock(logo, { key: 0 })) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_2$1, [
          unref(rightWidth) ? (openBlock(), createBlock(_sfc_main$4, { key: 0 })) : createCommentVNode("", true),
          createVNode(search, { class: "search-box" }),
          unref(showGithub) ? (openBlock(), createBlock(github, { key: 1 })) : createCommentVNode("", true),
          unref(showGitee) ? (openBlock(), createBlock(gitee, { key: 2 })) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const TopBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0d24fa0c"]]);
const _hoisted_1 = { class: "layout-container" };
const _hoisted_2 = { class: "main-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(TopBar),
        createBaseVNode("main", _hoisted_2, [
          createVNode(_component_router_view)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
