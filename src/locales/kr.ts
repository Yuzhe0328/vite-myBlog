export default {
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
    },
    masterSection: {
        rebot_title: "커스텀 컴포넌트 라이브러리",
        rebot_text: "자유롭게 코드를 작성하고 원하는 스타일을 정의하며, 로직 코드를 줄이고 태그로 모든 기본 스타일을 완성할 수 있습니다.",
        card_title: "간편하고 사용하기 쉬운 API로 빠르게 익히고 개발 효율성을 높이세요.",
        small: "자세히 알아보기",
        section_title: "견고한 애플리케이션 구축",
        feature_title: "고성능",
        feature_text: "최적의 렌더링 전략을 사용하여 애플리케이션의 원활한 성능을 보장합니다.",
        feature_title_yi: "확장성 용이",
        feature_text_yi: "모듈식 설계로 플러그 앤 플레이 방식이며 유지보수가 쉽습니다.",
        feature_title_er: "안전하고 신뢰할 수 있음",
        feature_text_er: "기본 제공 XSS/CSRF 방어 기능으로 즉시 사용 가능한 보안 솔루션입니다.",
        feature_title_san: "통일된 스타일",
        feature_text_san: "브랜드 컬러를 커스터마이징할 수 있는 테마 메커니즘.",
        title_earth: "글로벌 맵",
        features_li_yi: "2D/3D 뷰 간 자유로운 전환",
        features_li_er: "정확한 시/도/군 위치 지정",
        features_li_san: "세계 & 중국 이중 버전 맵",
        features_li_si: "고정밀 템플릿 원클릭 다운로드",
        features_li_wu: "표준 정밀도/차원과 완벽하게 일치",
        features_li_liu: "다양한 국가의 맵 다운로드 지원",
    },
    docscenter: {
        docs_title: "온라인 문서 센터",
        docs_text: "하드웨어, 운영, 네트워킹 및 클라우드 컴퓨팅을 포함한 다양한 분야의 문서를 다룹니다.",
    },
    ewnyiSection: {
        lineone: "개발자는 코드를 통해 시각적 요소와 상호작용의 시적인 아름다움을 엮어냅니다",
        linetwo: "디자인개념과코드를 결합하여놀라운 사용자인터페이스를창조하는마법 같은과정을 의미합니다"
    }

}
