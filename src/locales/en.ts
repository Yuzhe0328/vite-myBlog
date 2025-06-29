export default {
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
  },
  masterSection: {
    rebot_title: "Custom Component Library",
    rebot_text: "Freely write code, define any style you want, reduce logic code, and complete all basic styles with tags.",
    card_title: "Simple and easy-to-use API, quick to learn, and improves development efficiency.",
    small: "Learn more",
    section_title: "Build Solid Applications",
    feature_title: "High Performance",
    feature_text: "Uses optimal rendering strategies to ensure smooth application performance.",
    feature_title_yi: "Easy to Extend",
    feature_text_yi: "Modular design, plug-and-play, easy to maintain.",
    feature_title_er: "Secure & Reliable",
    feature_text_er: "Built-in XSS/CSRF protection, out-of-the-box security solution.",
    feature_title_san: "Consistent Styling",
    feature_text_san: "Theming mechanism for custom brand colors.",
    title_earth: "Global Map",
    features_li_yi: "Seamless 2D/3D view switching",
    features_li_er: "Precise province/city/county positioning",
    features_li_san: "World & China dual-version maps",
    features_li_si: "High-precision templates with one-click download",
    features_li_wu: "Fully aligned with standard precision/dimensions",
    features_li_liu: "Supports downloading maps for various countries",
  },
  docscenter: {
    docs_title: "Online Documentation Center",
    docs_text: "Covers documentation in multiple fields including hardware, operations, networking, and cloud computing.",
  },
  ewnyiSection: {
    lineone: "Developers weave the poetic beauty of visuals and interactions through code",
    linetwo: "The process combining design concepts with code create stunning user interfaces"
  }

}
