import { DocsItem } from '@/types/topNav'
export const docsList = ref<DocsItem[]>([
  {
    name: 'docs.network.name',
    title: 'docs.network.title',
    children: [
      { label: 'docs.network.switch', path: '/path/to/switch' },
      { label: 'docs.network.router', path: '/path/to/router' },
      { label: 'docs.network.security', path: '/path/to/security' },
      { label: 'docs.network.datacenter', path: '/path/to/datacenter' },
      { label: 'docs.network.wireless', path: '/path/to/wireless' },
      { label: 'docs.network.campus', path: '/path/to/campus' },
      { label: 'docs.network.others', path: '/path/to/others' }
    ]
  },
  {
    name: 'docs.server.name',
    title: 'docs.server.title',
    children: [
      { label: 'docs.server.rack', path: '/path/to/rack' },
      { label: 'docs.server.tower', path: '/path/to/tower' },
      { label: 'docs.server.blade', path: '/path/to/blade' },
      { label: 'docs.server.storage', path: '/path/to/storage' },
      { label: 'docs.server.density', path: '/path/to/density' },
      { label: 'docs.server.ai', path: '/path/to/ai' },
      { label: 'docs.server.others', path: '/path/to/others' }
    ]
  },
  {
    name: 'docs.cloud.name',
    title: 'docs.cloud.title',
    children: [{ label: 'docs.cloud.openstack', path: '/path/to/openstack' }]
  },
  {
    name: 'docs.virtualization.name',
    title: 'docs.virtualization.title',
    children: [
      { label: 'docs.virtualization.kvm', path: '/path/to/kvm' },
      { label: 'docs.virtualization.qemu', path: '/path/to/qemu' },
      { label: 'docs.virtualization.vmware', path: '/path/to/vmware' },
      { label: 'docs.virtualization.hyperv', path: '/path/to/hyperv' }
    ]
  },
  {
    name: 'docs.services.name',
    title: 'docs.services.title',
    children: [
      { label: 'docs.services.stp', path: '/path/to/stp' },
      { label: 'docs.services.dns', path: '/path/to/dns' },
      { label: 'docs.services.zabbix', path: '/path/to/zabbix' },
      { label: 'docs.services.prometheus', path: '/path/to/prometheus' },
      { label: 'docs.services.ansible', path: '/path/to/ansible' },
      { label: 'docs.services.saltstack', path: '/path/to/saltstack' },
      { label: 'docs.services.nginx', path: '/path/to/nginx' },
      { label: 'docs.services.keepalived', path: '/path/to/keepalived' },
      { label: 'docs.services.lvs', path: '/path/to/lvs' },
      { label: 'docs.services.apache', path: '/path/to/apache' },
      { label: 'docs.services.tomcat', path: '/path/to/tomcat' }
    ]
  },
  {
    name: 'docs.database.name',
    title: 'docs.database.title',
    children: [
      { label: 'docs.database.mysql', path: '/path/to/mysql' },
      { label: 'docs.database.mariadb', path: '/path/to/mariadb' },
      { label: 'docs.database.postgresql', path: '/path/to/postgresql' },
      { label: 'docs.database.sqlserver', path: '/path/to/sqlserver' },
      { label: 'docs.database.mongodb', path: '/path/to/mongodb' },
      { label: 'docs.database.redis', path: '/path/to/redis' },
      { label: 'docs.database.memcache', path: '/path/to/memcache' },
      { label: 'docs.database.neo4j', path: '/path/to/neo4j' }
    ]
  },
  {
    name: 'docs.cloudnative.name',
    title: 'docs.cloudnative.title',
    children: [
      { label: 'docs.cloudnative.kubernetes', path: '/path/to/k8s' },
      { label: 'docs.cloudnative.docker', path: '/path/to/docker' },
      { label: 'docs.cloudnative.container', path: '/path/to/container' },
      { label: 'docs.cloudnative.jenkins', path: '/path/to/jenkins' },
      { label: 'docs.cloudnative.gitlab', path: '/path/to/gitlab' },
      { label: 'docs.cloudnative.harbor', path: '/path/to/harbor' }
    ]
  },
  {
    name: 'docs.datacenter.name',
    title: 'docs.datacenter.title',
    children: [
      { label: 'docs.datacenter.power', path: '/path/to/power' },
      { label: 'docs.datacenter.cooling', path: '/path/to/cooling' },
      { label: 'docs.datacenter.monitor', path: '/path/to/monitor' },
      { label: 'docs.datacenter.securitydevices', path: '/path/to/security-devices' },
      { label: 'docs.datacenter.others', path: '/path/to/others' }
    ]
  },
  {
    name: 'docs.security.name',
    title: 'docs.security.title',
    children: [
      { label: 'docs.security.firewall', path: '/path/to/firewall' },
      { label: 'docs.security.log', path: '/path/to/log' },
      { label: 'docs.security.dbaudit', path: '/path/to/db-audit' },
      { label: 'docs.security.vpn', path: '/path/to/vpn' },
      { label: 'docs.security.ids', path: '/path/to/ids' },
      { label: 'docs.security.others', path: '/path/to/others' }
    ]
  },
  {
    name: 'docs.os.name',
    title: 'docs.os.title',
    children: [
      { label: 'docs.os.ubuntu', path: '/path/to/ubuntu' },
      { label: 'docs.os.centos', path: '/path/to/centos' },
      { label: 'docs.os.debian', path: '/path/to/debian' },
      { label: 'docs.os.windows', path: '/path/to/windows' }
    ]
  }
])
