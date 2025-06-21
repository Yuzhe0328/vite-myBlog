<template>
    <el-dropdown trigger="hover" popper-class="mega-dropdown">
        <span class="nav-item">{{ t('top.docs') }}</span>
        <template #dropdown>
            <div class="docs-menu">
                <!-- 左侧导航 -->
                <div class="menu-left">
                    <div class="container">
                        <div class="menu-title">技术文档列表概览</div>
                        <ul class="menu-list">
                            <li v-for="(item, idx) in docsList" :key="idx" class="menu-item-left"
                                :class="{ active: selectIndex === idx }" tabindex="0"
                                @mouseenter="onItemMouseEnter(idx)">
                                {{ item.name }}
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 右侧内容 -->
                <div class="menu-right">
                    <transition class="slide">
                        <div v-if="selectedItem" :key="`detail-${selectedItem.name}`">
                            <el-card class="project-card" shadow="hover">
                                <div class="card-header">
                                    {{ selectedItem.title }}
                                </div>
                                <!-- 渲染 children -->
                                <div class="card-body">
                                    <div v-for="(child, index) in selectedItem.children || []" :key="index"
                                        @click="navigateTo(child.path)">
                                        {{ child.label }}
                                    </div>
                                </div>
                            </el-card>
                        </div>
                    </transition>
                </div>
            </div>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { DocsItem } from '@/types/topNav'
const { t } = useI18n({ useScope: 'global' })

const docsList = ref<DocsItem[]>([
    {
        name: '网络设备',
        title: '华为常用网络设备概览',
        children: [
            { label: '交换机', path: '/path/to/switch' },
            { label: '路由器', path: '/path/to/router' },
            { label: '网络安全', path: '/path/to/security' },
            { label: '数据中心网络', path: '/path/to/datacenter' },
            { label: '无线网络', path: '/path/to/wireless' },
            { label: '园区网络', path: '/path/to/campus' },
            { label: '其他', path: '/path/to/others' }
        ]
    },
    {
        name: '服务器硬件',
        title: '常见硬件服务器概览',
        children: [
            { label: '机架服务器', path: '/path/to/rack' },
            { label: '塔式服务器', path: '/path/to/tower' },
            { label: '刀片服务器', path: '/path/to/blade' },
            { label: '存储服务器', path: '/path/to/storage' },
            { label: '高密服务器', path: '/path/to/density' },
            { label: 'AI服务器', path: '/path/to/ai' },
            { label: '其他', path: '/path/to/others' }
        ]
    },
    {
        name: '云计算',
        title: '云计算概览',
        children: [
            { label: 'openstack', path: '/path/to/openstack' }
        ]
    },
    {
        name: '虚拟化',
        title: '虚拟化概览',
        children: [
            { label: 'kvm', path: '/path/to/kvm' },
            { label: 'qemu', path: '/path/to/qemu' },
            { label: 'vmware', path: '/path/to/vmware' },
            { label: 'Hyper-v', path: '/path/to/hyperv' }
        ]
    },
    {
        name: '基础运维服务',
        title: 'Linux/Windows基础运维常见服务',
        children: [
            { label: 'STP', path: '/path/to/stp' },
            { label: 'DNS', path: '/path/to/dns' },
            { label: 'zabbix', path: '/path/to/zabbix' },
            { label: 'promtheus', path: '/path/to/prometheus' },
            { label: 'Ansible', path: '/path/to/ansible' },
            { label: 'SaltStack', path: '/path/to/saltstack' },
            { label: 'Nginx', path: '/path/to/nginx' },
            { label: 'Keepalived', path: '/path/to/keepalived' },
            { label: 'LVS', path: '/path/to/lvs' },
            { label: 'Apache', path: '/path/to/apache' },
            { label: 'Tomcat', path: '/path/to/tomcat' }
        ]
    },
    {
        name: '数据库',
        title: 'Linux/Windows等数据库概览',
        children: [
            { label: 'Mysql', path: '/path/to/mysql' },
            { label: 'MariaDb', path: '/path/to/mariadb' },
            { label: 'PostgreSQL', path: '/path/to/postgresql' },
            { label: 'Sql Server', path: '/path/to/sqlserver' },
            { label: 'MongoDB', path: '/path/to/mongodb' },
            { label: 'redis', path: '/path/to/redis' },
            { label: 'Memcache', path: '/path/to/memcache' },
            { label: 'Neo4J', path: '/path/to/neo4j' }
        ]
    },
    {
        name: '云原生',
        title: '云原生概览',
        children: [
            { label: 'kubernetes', path: '/path/to/k8s' },
            { label: 'docker', path: '/path/to/docker' },
            { label: 'container', path: '/path/to/container' },
            { label: 'Jenkins', path: '/path/to/jenkins' },
            { label: 'GitLab', path: '/path/to/gitlab' },
            { label: 'Harbor', path: '/path/to/harbor' }
        ]
    },
    {
        name: '数据中心建设',
        title: '数据中心建设',
        children: [
            { label: '电力系统', path: '/path/to/power' },
            { label: '冷却系统', path: '/path/to/cooling' },
            { label: '监控设备', path: '/path/to/monitor' },
            { label: '安全设备', path: '/path/to/security-devices' },
            { label: '其他', path: '/path/to/others' }
        ]
    },
    {
        name: '网络安全',
        title: '网络安全概览',
        children: [
            { label: '防火墙', path: '/path/to/firewall' },
            { label: '日志审计', path: '/path/to/log' },
            { label: '数据库审计', path: '/path/to/db-audit' },
            { label: 'VPN', path: '/path/to/vpn' },
            { label: '入侵检测', path: '/path/to/ids' },
            { label: '其他', path: '/path/to/others' }
        ]
    },
    {
        name: '操作系统',
        title: 'Linux/Windows常用操作系统概览',
        children: [
            { label: 'ubuntu', path: '/path/to/ubuntu' },
            { label: 'centos', path: '/path/to/centos' },
            { label: 'debian', path: '/path/to/debian' },
            { label: 'windows', path: '/path/to/windows' }
        ]
    }
])

const selectIndex = ref<number>(0)
const router = useRouter()

const onItemMouseEnter = (idx: number) => {
    selectIndex.value = idx
}

const selectedItem = computed(() => {
    return selectIndex.value >= 0 && selectIndex.value < docsList.value.length
        ? docsList.value[selectIndex.value]
        : null
})

const navigateTo = (path: string) => {
    if (path) router.push(path)
}
</script>


<style lang="scss" scoped>
.docs-menu {
    display: flex;
    background: #0F0F0F;
    height: 416px;
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

    .menu-left {
        width: 30%;
        display: flex;
        flex-direction: column;

        .container {
            flex: 1;
            background: #2a2a2a;
            overflow-y: auto;
            overflow-x: hidden;
            padding: 10px;
            box-sizing: border-box;

            /* 自定义滚动条样式 */
            &::-webkit-scrollbar {
                width: 6px;
            }

            &::-webkit-scrollbar-thumb {
                background: #444;
                border-radius: 3px;
            }

            &::-webkit-scrollbar-track {
                background: #1e1e1e;
            }
        }

        .menu-title {
            font-weight: 600;
            margin-bottom: 10px;
            color: #e0e0e0;
            margin-left: 10px;
            font-size: 15px;
        }

        .menu-list {
            list-style: none;
            padding: 0;
            margin: 0;

            .menu-item-left {
                padding: 6px 10px;
                color: #ccc;
                cursor: pointer;
                border-radius: 4px;
                transition: background 0.2s;

                &:hover {
                    background-color: #6688AC;
                }
            }
        }
    }

    .menu-right {
        display: flex;
        justify-content: center;

        .project-card {
            width: 600px;
            color: white;

            .card-header {
                font-size: 20px;
            }

            .card-body {
                display: flex;
                flex-wrap: wrap; // 允许换行
                gap: 20px; // 每项之间的间距
                padding: 10px;
                font-size: 14px;

                >div {
                    flex: 0 0 calc(25% - 20px); // 每行 4 项，减去间距
                    background-color: #1f1f1f;
                    padding: 6px 8px;
                    border-radius: 4px;
                    box-sizing: border-box;
                    text-align: center;
                    color: #e0e0e0;
                    cursor: pointer;

                    &:hover {
                        color: #6688AC;
                    }
                }
            }
        }
    }
}
</style>
