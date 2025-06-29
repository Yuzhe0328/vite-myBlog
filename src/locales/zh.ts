
export default {
  top: {
    project: "项目概览",
    docs: "技术文档",
    article: "行业文章",
    about: "关于",
    language: "语言",
    search: "请输入搜索内容"
  },
  docs: {
    overviewTitle: "技术文档分类",
    network: {
      name: "网络设备",
      title: "华为常用网络设备概览",
      switch: "交换机",
      router: "路由器",
      security: "网络安全",
      datacenter: "数据中心网络",
      wireless: "无线网络",
      campus: "园区网络",
      others: "其他"
    },
    server: {
      name: "服务器硬件",
      title: "常见硬件服务器概览",
      rack: "机架服务器",
      tower: "塔式服务器",
      blade: "刀片服务器",
      storage: "存储服务器",
      density: "高密服务器",
      ai: "AI服务器",
      others: "其他"
    },
    cloud: {
      name: "云计算",
      title: "云计算概览",
      openstack: "OpenStack"
    },
    virtualization: {
      name: "虚拟化",
      title: "虚拟化概览",
      kvm: "KVM",
      qemu: "QEMU",
      vmware: "VMware",
      hyperv: "Hyper-V"
    },
    services: {
      name: "基础运维服务",
      title: "Linux/Windows基础运维常见服务",
      stp: "STP",
      dns: "DNS",
      zabbix: "Zabbix",
      prometheus: "Prometheus",
      ansible: "Ansible",
      saltstack: "SaltStack",
      nginx: "Nginx",
      keepalived: "Keepalived",
      lvs: "LVS",
      apache: "Apache",
      tomcat: "Tomcat"
    },
    database: {
      name: "数据库",
      title: "Linux/Windows等数据库概览",
      mysql: "MySQL",
      mariadb: "MariaDB",
      postgresql: "PostgreSQL",
      sqlserver: "SQL Server",
      mongodb: "MongoDB",
      redis: "Redis",
      memcache: "Memcache",
      neo4j: "Neo4J"
    },
    cloudnative: {
      name: "云原生",
      title: "云原生概览",
      kubernetes: "Kubernetes",
      docker: "Docker",
      container: "容器",
      jenkins: "Jenkins",
      gitlab: "GitLab",
      harbor: "Harbor"
    },
    datacenter: {
      name: "数据中心建设",
      title: "数据中心建设",
      power: "电力系统",
      cooling: "冷却系统",
      monitor: "监控设备",
      securitydevices: "安全设备",
      others: "其他"
    },
    security: {
      name: "网络安全",
      title: "网络安全概览",
      firewall: "防火墙",
      log: "日志审计",
      dbaudit: "数据库审计",
      vpn: "VPN",
      ids: "入侵检测",
      others: "其他"
    },
    os: {
      name: "操作系统",
      title: "Linux/Windows常用操作系统概览",
      ubuntu: "Ubuntu",
      centos: "CentOS",
      debian: "Debian",
      windows: "Windows"
    }
  },
  project: {
    overviewTitle: "开源项目概览展示",
    customLib: {
      name: "自定义组件库",
      description: "一套基于 Vue 3 + TypeScript 打造的高可定制组件库，支持按需引入、主题切换、类型推导和自定义指令，适用于中后台系统快速开发和团队协作统一规范。",
      tags: ["Vue3", "组件库", "Element Plus"],
      tech: {
        vue3: "Vue3",
        ts: "TypeScript",
        vite: "Vite",
        scss: "SCSS"
      },
      features: {
        form: "表单封装",
        chart: "图表封装",
        permBtn: "权限按钮",
        dialog: "弹窗组件"
      }
    },
    adminFramework: {
      name: "后台管理框架",
      description: "集成 Vue 3、Pinia、Element Plus、Vite 等技术栈的企业级后台管理框架，内置用户权限控制、动态路由、菜单管理、CRUD 快速生成器、标签页导航、主题切换、国际化支持等模块，支持模块化开发，适配多种中后台业务场景。",
      tags: ["后台管理", "脚手架"],
      tech: {
        vue3: "Vue3",
        pinia: "Pinia",
        vite: "Vite",
        elementPlus: "Element Plus"
      },
      features: {
        dynamicRoutes: "动态路由",
        permission: "权限控制",
        tabs: "标签页导航"
      }
    },
    dataViz: {
      name: "数据可视化大屏",
      description: "提供多个实时可视化模块，包括轮播卡片、业务图表、折线统计、柱状对比、区域地图等，适合用于数据驾驶舱、业务监控面板、企业汇报展示。支持响应式设计与动态数据驱动，兼容多种分辨率和显示终端。",
      tags: ["ECharts", "可视化"],
      tech: {
        echarts: "ECharts",
        vue3: "Vue3",
        scss: "SCSS"
      },
      features: {
        bar: "柱状图",
        line: "折线图",
        carousel: "轮播组件"
      }
    },
    globalMap: {
      name: "全球地图",
      description: "实现带动画的全球攻击路径模拟，具备攻击线条、目标高亮、国家名称定位、源点闪烁等视觉效果，可广泛应用于网络攻击演示、态势感知平台、安全可视化项目。",
      // tags: ["地图", "动画"],
      tech: {
        echarts: "ECharts",
        geojson: "GeoJSON",
        vue3: "Vue3"
      },
      features: {
        multiSource: "多源连线",
        pathAnimation: "轨迹动画",
        countryHighlight: "国家高亮"
      }
    },
    dataMonitor: {
      name: "数据稳定监控",
      description: "构建类运维平台界面，涵盖实时告警统计、日志分析、多维图表、指标波动趋势监控等内容。可用于业务健康度监测、性能预警分析、异常检测等 DevOps 场景。",
      tags: ["监控", "日志"],
      tech: {
        vue3: "Vue3",
        echarts: "ECharts",
        mock: "Mock"
      },
      features: {
        chartMonitor: "图表监控",
        alert: "异常告警",
        logAnalysis: "日志分析"
      }
    },
    lowCode: {
      name: "低代码平台",
      description: "通过拖拽方式配置表单、页面布局和交互逻辑，可输出 JSON Schema 或代码模板。支持页面预览、配置导出、运行时渲染，适合构建 SaaS、CMS、运营平台的低代码引擎基础。",
      tags: ["低代码", "配置化"],
      tech: {
        vue3: "Vue3",
        sortablejs: "SortableJS",
        jsonSchema: "JSON Schema"
      },
      features: {
        dragDrop: "组件拖拽",
        propConfig: "属性配置",
        formDesigner: "表单设计器"
      }
    },
    aiAssistant: {
      name: "AI智能助手",
      description: "基于自然语言处理构建的智能问答系统，集成上下文记忆、脚本生成器、自动命令执行能力，适合用于 IT 助手、开发辅助、企业自动化脚本运行平台等。",
      tags: ["AI", "自动化"],
      tech: {
        openaiApi: "OpenAI API",
        vue3: "Vue3",
        promptEngineering: "Prompt Engineering"
      },
      features: {
        qa: "问答对话",
        codeGen: "代码生成",
        scriptExec: "脚本执行"
      }
    }
  },
  main: {
    titleA: "代码即艺术 前端即创造",
    titleB: "让所见不止于眼前 代码塑造无限可能",
    titleC: "DevOps到云计算 持续集成/持续发布 一键式快速构建应用网站 赋能下一代Web应用发展",
    docs: "查阅文档",
    more: "了解更多"
  },
  masterSection: {
    rebot_title: "自定义组件库",
    rebot_text: "自由编写代码，随意定义你想要的样式，减少逻辑代码，标签完成所有基本样式",
    card_title: "简洁易用的 API，快速上手，提升开发效率。",
    small: "了解详情",
    section_title: "构建坚实的应用",
    feature_title: "高性能",
    feature_text: "使用最优渲染策略，保证应用流畅。",
    feature_title_yi: "易扩展",
    feature_text_yi: "组件化设计，随时插拔，易于维护。",
    feature_title_er: "安全可靠",
    feature_text_er: "默认防 XSS/CSRF，开箱即用的安全方案。",
    feature_title_san: "风格统一",
    feature_text_san: "主题化机制，自定义品牌配色。",
    title_earth: "全球地图",
    features_li_yi: "2D/3D 视图自由切换",
    features_li_er:"省/市/县 精准定位",
    features_li_san: "世界 & 中国 双版地图",
    features_li_si: "高精度模板 一键下载",
    features_li_wu: "高度对齐标准精度/维度",
    features_li_liu: "支持各个国家地图下载",
  },
  docscenter: {
    docs_title: "文档中心在线查阅",
    docs_text: "覆盖了硬件运维网络云计算等多个方向文档",
  },
  ewnyiSection: {
    lineone: "开发者通过代码编织出视觉与交互的诗意之美",
    linetwo: "将设计理念与代码结合创造出令人惊叹的用户界面的魔法过程"
  }
}
