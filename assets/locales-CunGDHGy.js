import { c as createI18n } from "./i18n-DNJ5Tj2P.js";
const zh = {
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
  }
};
const en = {
  top: {
    project: "project",
    docs: "docs",
    article: "article",
    about: "about",
    language: "language",
    search: "please search content"
  },
  docs: {
    overviewTitle: "Technical document classification",
    network: {
      name: "Network Devices",
      title: "Huawei Common Network Devices Overview",
      switch: "Switch",
      router: "Router",
      security: "Network Security",
      datacenter: "Data Center Network",
      wireless: "Wireless Network",
      campus: "Campus Network",
      others: "Others"
    },
    server: {
      name: "Server Hardware",
      title: "Common Server Hardware Overview",
      rack: "Rack Server",
      tower: "Tower Server",
      blade: "Blade Server",
      storage: "Storage Server",
      density: "High-Density Server",
      ai: "AI Server",
      others: "Others"
    },
    cloud: {
      name: "Cloud Computing",
      title: "Cloud Computing Overview",
      openstack: "OpenStack"
    },
    virtualization: {
      name: "Virtualization",
      title: "Virtualization Overview",
      kvm: "KVM",
      qemu: "QEMU",
      vmware: "VMware",
      hyperv: "Hyper-V"
    },
    services: {
      name: "Basic O&M Services",
      title: "Common Linux/Windows O&M Services",
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
      name: "Database",
      title: "Linux/Windows Database Overview",
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
      name: "Cloud Native",
      title: "Cloud Native Overview",
      kubernetes: "Kubernetes",
      docker: "Docker",
      container: "Container",
      jenkins: "Jenkins",
      gitlab: "GitLab",
      harbor: "Harbor"
    },
    datacenter: {
      name: "Data Center Infrastructure",
      title: "Data Center Infrastructure",
      power: "Power System",
      cooling: "Cooling System",
      monitor: "Monitoring Equipment",
      securitydevices: "Security Equipment",
      others: "Others"
    },
    security: {
      name: "Network Security",
      title: "Network Security Overview",
      firewall: "Firewall",
      log: "Log Audit",
      dbaudit: "Database Audit",
      vpn: "VPN",
      ids: "Intrusion Detection",
      others: "Others"
    },
    os: {
      name: "Operating Systems",
      title: "Linux/Windows Common Operating Systems",
      ubuntu: "Ubuntu",
      centos: "CentOS",
      debian: "Debian",
      windows: "Windows"
    }
  },
  project: {
    overviewTitle: "Overview and Display of Open Source Projects",
    customLib: {
      name: "Custom Component Library",
      description: "A highly customizable Vue 3 + TypeScript component library supporting on-demand import, theme switching, type inference, and custom directives, suitable for fast mid-backend system development and team collaboration.",
      tags: ["Vue3", "Component Library", "Element Plus"],
      tech: {
        vue3: "Vue3",
        ts: "TypeScript",
        vite: "Vite",
        scss: "SCSS"
      },
      features: {
        form: "Form Wrapping",
        chart: "Chart Wrapping",
        permBtn: "Permission Buttons",
        dialog: "Dialog Components"
      }
    },
    adminFramework: {
      name: "Admin Backend Framework",
      description: "Enterprise-level admin backend framework integrating Vue 3, Pinia, Element Plus, Vite, with built-in user permission control, dynamic routing, menu management, CRUD generator, tabs navigation, theme switching, i18n support, and modular development.",
      tags: ["Admin Backend", "Scaffolding"],
      tech: {
        vue3: "Vue3",
        pinia: "Pinia",
        vite: "Vite",
        elementPlus: "Element Plus"
      },
      features: {
        dynamicRoutes: "Dynamic Routes",
        permission: "Permission Control",
        tabs: "Tabs Navigation"
      }
    },
    dataViz: {
      name: "Data Visualization Dashboard",
      description: "Provides multiple real-time visualization modules including carousel cards, business charts, line statistics, bar comparison, and regional maps, suitable for dashboards, monitoring panels, and enterprise reports. Supports responsive design and dynamic data.",
      tags: ["ECharts", "Visualization"],
      tech: {
        echarts: "ECharts",
        vue3: "Vue3",
        scss: "SCSS"
      },
      features: {
        bar: "Bar Chart",
        line: "Line Chart",
        carousel: "Carousel Component"
      }
    },
    globalMap: {
      name: "Global Map",
      description: "Animated global attack path simulation with attack lines, target highlighting, country name positioning, source point flashing, widely used in network attack demos, situational awareness platforms, and security visualization projects.",
      // tags: ["Map", "Animation"],
      tech: {
        echarts: "ECharts",
        geojson: "GeoJSON",
        vue3: "Vue3"
      },
      features: {
        multiSource: "Multi-source Connections",
        pathAnimation: "Path Animation",
        countryHighlight: "Country Highlighting"
      }
    },
    dataMonitor: {
      name: "Data Stability Monitoring",
      description: "Constructs an ops-like platform interface covering real-time alarm statistics, log analysis, multi-dimensional charts, metric fluctuation trends, suitable for business health monitoring, performance warnings, anomaly detection in DevOps.",
      tags: ["Monitoring", "Logs"],
      tech: {
        vue3: "Vue3",
        echarts: "ECharts",
        mock: "Mock"
      },
      features: {
        chartMonitor: "Chart Monitoring",
        alert: "Anomaly Alerts",
        logAnalysis: "Log Analysis"
      }
    },
    lowCode: {
      name: "Low-Code Platform",
      description: "Configure forms, page layouts, and interaction logic by drag-and-drop, output JSON Schema or code templates, support page preview, config export, runtime rendering; suitable as a SaaS, CMS, or operations platform low-code engine base.",
      tags: ["Low-Code", "Configurable"],
      tech: {
        vue3: "Vue3",
        sortablejs: "SortableJS",
        jsonSchema: "JSON Schema"
      },
      features: {
        dragDrop: "Component Drag-and-Drop",
        propConfig: "Property Configuration",
        formDesigner: "Form Designer"
      }
    },
    aiAssistant: {
      name: "AI Intelligent Assistant",
      description: "NLP-based intelligent Q&A system integrating context memory, script generator, and auto command execution, suitable for IT assistants, dev helpers, and enterprise automation script platforms.",
      tags: ["AI", "Automation"],
      tech: {
        openaiApi: "OpenAI API",
        vue3: "Vue3",
        promptEngineering: "Prompt Engineering"
      },
      features: {
        qa: "Q&A Dialogue",
        codeGen: "Code Generation",
        scriptExec: "Script Execution"
      }
    }
  },
  main: {
    titleA: "Code is Art Frontend is Creation",
    titleB: "Beyond Meets the Eye Code Shapes Infinite Possibilities",
    titleC: "From DevOps to Cloud Computing, CI/CD Pipeline, One-Click Rapid Application Development, Empowering Next-Gen Web Applications",
    docs: "docs",
    more: "more"
  }
};
const kr = {
  top: {
    project: "프로젝트",
    docs: "문서",
    article: "기사",
    about: "소개",
    language: "한국어",
    search: "검색어를 입력하세요"
  },
  docs: {
    overviewTitle: "기술 문서 분류",
    network: {
      name: "네트워크 장비",
      title: "화웨이 일반 네트워크 장비 개요",
      switch: "스위치",
      router: "라우터",
      security: "네트워크 보안",
      datacenter: "데이터 센터 네트워크",
      wireless: "무선 네트워크",
      campus: "캠퍼스 네트워크",
      others: "기타"
    },
    server: {
      name: "서버 하드웨어",
      title: "일반 서버 하드웨어 개요",
      rack: "랙 서버",
      tower: "타워 서버",
      blade: "블레이드 서버",
      storage: "스토리지 서버",
      density: "고밀도 서버",
      ai: "AI 서버",
      others: "기타"
    },
    cloud: {
      name: "클라우드 컴퓨팅",
      title: "클라우드 컴퓨팅 개요",
      openstack: "오픈스택"
    },
    virtualization: {
      name: "가상화",
      title: "가상화 기술 개요",
      kvm: "KVM",
      qemu: "QEMU",
      vmware: "VMware",
      hyperv: "Hyper-V"
    },
    services: {
      name: "기초 운영 관리 서비스",
      title: "Linux/Windows 기초 운영 관리 일반 서비스",
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
      name: "데이터베이스",
      title: "Linux/Windows 데이터베이스 개요",
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
      name: "클라우드 네이티브",
      title: "클라우드 네이티브 기술 개요",
      kubernetes: "Kubernetes",
      docker: "Docker",
      container: "컨테이너",
      jenkins: "Jenkins",
      gitlab: "GitLab",
      harbor: "Harbor"
    },
    datacenter: {
      name: "데이터 센터 구축",
      title: "데이터 센터 구축",
      power: "전력 시스템",
      cooling: "냉각 시스템",
      monitor: "모니터링 장비",
      securitydevices: "보안 장비",
      others: "기타"
    },
    security: {
      name: "네트워크 보안",
      title: "네트워크 보안 개요",
      firewall: "방화벽",
      log: "로그 감사",
      dbaudit: "데이터베이스 감사",
      vpn: "VPN",
      ids: "침입 탐지",
      others: "기타"
    },
    os: {
      name: "운영 체제",
      title: "Linux/Windows 일반 운영 체제 개요",
      ubuntu: "Ubuntu",
      centos: "CentOS",
      debian: "Debian",
      windows: "Windows"
    }
  },
  project: {
    overviewTitle: "오픈소스 프로젝트 개요",
    customLib: {
      name: "커스텀 컴포넌트 라이브러리",
      description: "Vue 3 + TypeScript 기반의 고도로 커스터마이징 가능한 컴포넌트 라이브러리로, 필요에 따라 선택적 로딩, 테마 변경, 타입 추론 및 커스텀 디렉티브를 지원합니다. 중간 규모 이상의 관리 시스템 신속 개발과 팀 협업 표준화에 적합합니다.",
      tags: ["Vue3", "컴포넌트 라이브러리", "Element Plus"],
      tech: {
        vue3: "Vue3",
        ts: "TypeScript",
        vite: "Vite",
        scss: "SCSS"
      },
      features: {
        form: "폼 컴포넌트",
        chart: "차트 래퍼",
        permBtn: "권한 버튼",
        dialog: "다이얼로그 컴포넌트"
      }
    },
    adminFramework: {
      name: "관리자 프레임워크",
      description: "Vue 3, Pinia, Element Plus, Vite 등의 기술 스택을 통합한 기업용 관리자 프레임워크로, 사용자 권한 제어, 동적 라우팅, 메뉴 관리, CRUD 자동 생성기, 탭 네비게이션, 테마 변경, 국제화 지원 등이 내장되어 있습니다. 모듈식 개발을 지원하며 다양한 관리 시스템 시나리오에 적용 가능합니다.",
      tags: ["관리자 시스템", "스캐폴딩"],
      tech: {
        vue3: "Vue3",
        pinia: "Pinia",
        vite: "Vite",
        elementPlus: "Element Plus"
      },
      features: {
        dynamicRoutes: "동적 라우팅",
        permission: "권한 관리",
        tabs: "탭 네비게이션"
      }
    },
    dataViz: {
      name: "데이터 시각화 대시보드",
      description: "실시간 시각화 모듈(회전 카드, 비즈니스 차트, 라인 통계, 바 차트 비교, 지역 지도 등)을 제공하여 데이터 코크핏, 비즈니스 모니터링 패널, 기업 프레젠테이션에 적합합니다. 반응형 디자인과 동적 데이터 드리븐을 지원하며 다양한 해상도와 디스플레이 단말기에 호환됩니다.",
      tags: ["ECharts", "시각화"],
      tech: {
        echarts: "ECharts",
        vue3: "Vue3",
        scss: "SCSS"
      },
      features: {
        bar: "막대 그래프",
        line: "선 그래프",
        carousel: "회전 컴포넌트"
      }
    },
    globalMap: {
      name: "글로벌 맵",
      description: "애니메이션 효과가 있는 글로벌 공격 경로 시뮬레이션을 구현하며, 공격 라인, 타겟 하이라이트, 국가 이름 위치 표시, 소스 점멸 등의 시각 효과를 포함합니다. 네트워크 공격 데모, 상황 인식 플랫폼, 보안 시각화 프로젝트 등에 광범위하게 적용 가능합니다.",
      tech: {
        echarts: "ECharts",
        geojson: "GeoJSON",
        vue3: "Vue3"
      },
      features: {
        multiSource: "다중 소스 연결",
        pathAnimation: "경로 애니메이션",
        countryHighlight: "국가 하이라이트"
      }
    },
    dataMonitor: {
      name: "데이터 안정성 모니터링",
      description: "운영 플랫폼 스타일의 인터페이스로, 실시간 경고 통계, 로그 분석, 다차원 차트, 지표 변동 추세 모니터링 등을 포함합니다. 비즈니스 건강도 모니터링, 성능 경고 분석, 이상 감지 등 DevOps 시나리오에 적용 가능합니다.",
      tags: ["모니터링", "로그"],
      tech: {
        vue3: "Vue3",
        echarts: "ECharts",
        mock: "Mock"
      },
      features: {
        chartMonitor: "차트 모니터링",
        alert: "이상 경고",
        logAnalysis: "로그 분석"
      }
    },
    lowCode: {
      name: "로우 코드 플랫폼",
      description: "드래그 앤 드롭 방식으로 폼, 페이지 레이아웃 및 상호작용 로직을 구성할 수 있으며, JSON Schema 또는 코드 템플릿을 출력할 수 있습니다. 페이지 미리보기, 구성 내보내기, 런타임 렌더링을 지원하여 SaaS, CMS, 운영 플랫폼 등의 로우 코드 엔진 기반 구축에 적합합니다.",
      tags: ["로우 코드", "구성화"],
      tech: {
        vue3: "Vue3",
        sortablejs: "SortableJS",
        jsonSchema: "JSON Schema"
      },
      features: {
        dragDrop: "컴포넌트 드래그",
        propConfig: "속성 구성",
        formDesigner: "폼 디자이너"
      }
    },
    aiAssistant: {
      name: "AI 인텔리전트 어시스턴트",
      description: "자연어 처리 기반의 지능형 질의응답 시스템으로, 컨텍스트 메모리, 스크립트 생성기, 자동 명령 실행 기능이 통합되어 있습니다. IT 어시스턴트, 개발 보조, 기업 자동화 스크립트 실행 플랫폼 등에 적합합니다.",
      tags: ["AI", "자동화"],
      tech: {
        openaiApi: "OpenAI API",
        vue3: "Vue3",
        promptEngineering: "프롬프트 엔지니어링"
      },
      features: {
        qa: "질의응답",
        codeGen: "코드 생성",
        scriptExec: "스크립트 실행"
      }
    }
  },
  main: {
    titleA: "코드는 예술 프론트엔드는 창조",
    titleB: "눈에 보이는 것 이상의 무한한 가능성을 만드는 코드",
    titleC: "DevOps부터 클라우드 컴퓨팅, CI/CD 파이프라인, 원클릭 빠른 애플리케이션 개발, 차세대 웹 애플리케이션의 혁신",
    docs: "문서",
    more: "더보기"
  }
};
const messages = { zh, en, kr };
const availableLocales = Object.keys(messages);
function safeGetItem(key) {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(key);
  }
  return null;
}
function safeSetItem(key, value) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, value);
  }
}
function determineInitialLocale() {
  if (typeof window === "undefined") return "zh";
  const saved = safeGetItem("lang");
  if (saved && availableLocales.includes(saved)) {
    return saved;
  }
  const nav = navigator.language || "";
  const primary = nav.split("-")[0].toLowerCase();
  if (availableLocales.includes(primary)) {
    safeSetItem("lang", primary);
    return primary;
  }
  safeSetItem("lang", "zh");
  return "zh";
}
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "zh",
  fallbackLocale: "en",
  messages: {
    zh: zh || {},
    en: en || {},
    kr: kr || {}
  },
  silentTranslationWarn: true,
  missingWarn: false,
  fallbackWarn: false,
  warnHtmlMessage: false
});
function setupI18n(app) {
  const initialLocale = determineInitialLocale();
  {
    const available = Object.keys(messages);
    if (!available.includes(initialLocale)) {
      i18n.global.locale.value = "zh";
    }
  }
  const i18nGlobal = i18n.global;
  i18nGlobal.locale.value = initialLocale;
  app.use(i18n);
}
export {
  setupI18n as s
};
