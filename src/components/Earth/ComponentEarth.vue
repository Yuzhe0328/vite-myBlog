<template>
  <div ref="chartEl" class="chart-container"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import type { ECharts, EChartsOption } from 'echarts'
import worldMapData from '@/assets/MapWorld.json'

// ========== 模块级变量，用于保证单例注册或加载 ==========
/**
 * 标志 echarts-gl 是否已动态加载过
 * 使用 window 全局标志和本模块标志双重保障：
 * - window.__echarts_gl_loaded__ 用于 HMR 或多组件情况下全局保存
 * - 本模块级 let 标志用于本模块首次执行判断
 */
let moduleEchartsGlLoaded = false

/**
 * 标志世界地图是否已注册
 */
let moduleWorldMapRegistered = false

// ========== 常量 & 类型定义 ==========

// 这里给出完整 geoCoordMap：城市名到经纬度映射，用于生成 3D 柱、散点、飞线等。
// 由于内容较多，下面直接粘贴全部内容。若项目中已有此表，可直接替换或维护更新。
interface GeoCoordMap { [key: string]: [number, number]; }
const geoCoordMap: GeoCoordMap = {
  "海门": [121.15, 31.89],
  "鄂尔多斯": [109.781327, 39.608266],
  "招远": [37.35, 120.38],
  "舟山": [122.207216, 29.985295],
  "齐齐哈尔": [123.97, 47.33],
  "盐城": [33.38, 120.13],
  "赤峰": [118.87, 42.28],
  "青岛": [120.33, 36.07],
  "乳山": [121.52, 36.89],
  "金昌": [102.188043, 38.520089],
  "泉州": [118.58, 24.93],
  "莱西": [120.53, 36.86],
  "日照": [119.46, 35.42],
  "胶南": [119.97, 35.88],
  "南通": [121.05, 32.08],
  "拉萨": [91.11, 29.97],
  "云浮": [112.02, 22.93],
  "梅州": [116.1, 24.55],
  "文登": [122.05, 37.2],
  "上海": [121.48, 31.22],
  "攀枝花": [101.718637, 26.582347],
  "威海": [122.1, 37.5],
  "承德": [117.93, 40.97],
  "厦门": [118.1, 24.46],
  "汕尾": [115.375279, 22.786211],
  "潮州": [116.63, 23.68],
  "丹东": [124.37, 40.13],
  "太仓": [121.1, 31.45],
  "曲靖": [103.79, 25.51],
  "烟台": [121.39, 37.52],
  "福州": [119.3, 26.08],
  "瓦房店": [121.979603, 39.627114],
  "即墨": [120.45, 36.38],
  "抚顺": [123.97, 41.97],
  "玉溪": [102.52, 24.35],
  "张家口": [114.87, 40.82],
  "阳泉": [113.57, 37.85],
  "莱州": [119.942327, 37.177017],
  "湖州": [120.1, 30.86],
  "汕头": [116.69, 23.39],
  "昆山": [120.95, 31.39],
  "宁波": [121.56, 29.86],
  "湛江": [110.359377, 21.270708],
  "揭阳": [116.35, 23.55],
  "荣成": [122.41, 37.16],
  "连云港": [119.16, 34.59],
  "葫芦岛": [120.836932, 40.711052],
  "常熟": [120.74, 31.64],
  "东莞": [113.75, 23.04],
  "河源": [114.68, 23.73],
  "淮安": [119.15, 33.5],
  "泰州": [119.9, 32.49],
  "南宁": [108.33, 22.84],
  "营口": [122.18, 40.65],
  "惠州": [114.4, 23.09],
  "江阴": [120.26, 31.91],
  "蓬莱": [120.75, 37.8],
  "韶关": [113.62, 24.84],
  "嘉峪关": [98.289152, 39.77313],
  "广州": [113.23, 23.16],
  "延安": [109.47, 36.6],
  "太原": [112.53, 37.87],
  "清远": [113.01, 23.7],
  "中山": [113.38, 22.52],
  "昆明": [102.73, 25.04],
  "寿光": [118.73, 36.86],
  "盘锦": [122.070714, 41.119997],
  "长治": [113.08, 36.18],
  "深圳": [114.07, 22.62],
  "珠海": [113.52, 22.3],
  "宿迁": [118.3, 33.96],
  "咸阳": [108.72, 34.36],
  "铜川": [109.11, 35.09],
  "平度": [119.97, 36.77],
  "佛山": [113.11, 23.05],
  "海口": [110.35, 20.02],
  "江门": [113.06, 22.61],
  "章丘": [117.53, 36.72],
  "肇庆": [112.44, 23.05],
  "大连": [121.62, 38.92],
  "临汾": [111.5, 36.08],
  "吴江": [120.63, 31.16],
  "石嘴山": [106.39, 39.04],
  "沈阳": [123.38, 41.8],
  "苏州": [120.62, 31.32],
  "茂名": [110.88, 21.68],
  "嘉兴": [120.76, 30.77],
  "长春": [125.35, 43.88],
  "胶州": [120.03336, 36.264622],
  "银川": [106.27, 38.47],
  "张家港": [120.555821, 31.875428],
  "三门峡": [111.19, 34.76],
  "锦州": [121.15, 41.13],
  "南昌": [115.89, 28.68],
  "柳州": [109.4, 24.33],
  "三亚": [109.511909, 18.252847],
  "自贡": [104.778442, 29.33903],
  "吉林": [126.57, 43.87],
  "阳江": [111.95, 21.85],
  "泸州": [105.39, 28.91],
  "西宁": [101.74, 36.56],
  "宜宾": [104.56, 29.77],
  "呼和浩特": [111.65, 40.82],
  "成都": [104.06, 30.67],
  "大同": [113.3, 40.12],
  "镇江": [119.44, 32.2],
  "桂林": [110.28, 25.29],
  "张家界": [110.479191, 29.117096],
  "宜兴": [119.82, 31.36],
  "北海": [109.12, 21.49],
  "西安": [108.95, 34.27],
  "金坛": [119.56, 31.74],
  "东营": [118.49, 37.46],
  "牡丹江": [129.58, 44.6],
  "遵义": [106.9, 27.7],
  "绍兴": [120.58, 30.01],
  "扬州": [119.42, 32.39],
  "常州": [119.95, 31.79],
  "潍坊": [119.1, 36.62],
  "重庆": [106.54, 29.59],
  "台州": [121.420757, 28.656386],
  "南京": [118.78, 32.04],
  "滨州": [118.03, 37.36],
  "贵阳": [106.71, 26.57],
  "无锡": [120.29, 31.59],
  "本溪": [123.73, 41.3],
  "克拉玛依": [84.77, 45.59],
  "渭南": [109.5, 34.52],
  "马鞍山": [118.48, 31.56],
  "宝鸡": [107.15, 34.38],
  "焦作": [113.21, 35.24],
  "句容": [119.16, 31.95],
  "北京": [116.46, 39.92],
  "徐州": [117.2, 34.26],
  "衡水": [115.72, 37.72],
  "包头": [110, 40.58],
  "绵阳": [104.73, 31.48],
  "乌鲁木齐": [87.68, 43.77],
  "枣庄": [117.57, 34.86],
  "杭州": [120.19, 30.26],
  "淄博": [118.05, 36.78],
  "鞍山": [122.85, 41.12],
  "溧阳": [119.48, 31.43],
  "库尔勒": [86.06, 41.68],
  "安阳": [114.35, 36.1],
  "开封": [114.35, 34.79],
  "济南": [117, 36.65],
  "德阳": [104.37, 31.13],
  "温州": [120.65, 28.01],
  "九江": [115.97, 29.71],
  "邯郸": [114.47, 36.6],
  "临安": [119.72, 30.23],
  "兰州": [103.73, 36.03],
  "沧州": [116.83, 38.33],
  "临沂": [118.35, 35.05],
  "南充": [106.110698, 30.837793],
  "天津": [117.2, 39.13],
  "富阳": [119.95, 30.07],
  "泰安": [117.13, 36.18],
  "诸暨": [120.23, 29.71],
  "郑州": [113.65, 34.76],
  "哈尔滨": [126.63, 45.75],
  "聊城": [115.97, 36.45],
  "芜湖": [118.38, 31.33],
  "唐山": [118.02, 39.63],
  "平顶山": [113.29, 33.75],
  "邢台": [114.48, 37.05],
  "德州": [116.29, 37.45],
  "济宁": [116.59, 35.38],
  "荆州": [112.239741, 30.335165],
  "宜昌": [111.3, 30.7],
  "义乌": [120.06, 29.32],
  "丽水": [119.92, 28.45],
  "洛阳": [112.44, 34.7],
  "秦皇岛": [119.57, 39.95],
  "株洲": [113.16, 27.83],
  "石家庄": [114.48, 38.03],
  "莱芜": [117.67, 36.19],
  "常德": [111.69, 29.05],
  "保定": [115.48, 38.85],
  "湘潭": [112.91, 27.87],
  "金华": [119.64, 29.12],
  "岳阳": [113.09, 29.37],
  "长沙": [113, 28.21],
  "衢州": [118.88, 28.97],
  "廊坊": [116.7, 39.53],
  "菏泽": [115.480656, 35.23375],
  "合肥": [117.27, 31.86],
  "武汉": [114.31, 30.52],
  "大庆": [125.03, 46.58],
  "多伦多": [-79.4, 43.7],
  "奥斯陆": [10.7, 59.9],
  "旧金山": [-122.4, 37.8],
  "莫斯科": [37.6, 55.7],
  "伦敦": [-0.12, 51.5],
  "巴黎": [2.3, 48.8],
  "悉尼": [151.2, -33.8],
  "迪拜": [55.3, 25.2],
  "新加坡": [103.8, 1.3],
  "柏林": [13.4, 52.5],
  "新德里": [77.2, 28.6],
  "圣保罗": [-46.6, -34.6],
  "约翰内斯堡": [28.0, -26.2],
  "首尔": [126.9, 37.5],
  "墨西哥城": [-99.1, 19.4],
  "开罗": [31.2, 30.0],
  "曼谷": [100.5, 13.7],
  "雅加达": [106.8, 6.2],
  "罗马": [12.4, 41.9],
  "布宜诺斯艾利斯": [-58.4, -34.6],
}

// 示例飞线数据
const alirl: [number, number][][] = [
  [[121.15, 31.89], [121.48, 31.22]],
  [[120.38, 37.35], [121.48, 31.22]],
  [[123.97, 47.33], [121.48, 31.22]],
  [[118.87, 42.28], [121.48, 31.22]],
  [[121.52, 36.89], [121.48, 31.22]],
  [[102.188043, 38.520089], [121.48, 31.22]],
  [[118.58, 24.93], [121.48, 31.22]],
  [[120.53, 36.86], [121.48, 31.22]],
  [[119.46, 35.42], [121.48, 31.22]],
  [[119.97, 35.88], [121.48, 31.22]],
  [[121.05, 32.08], [121.48, 31.22]],
  [[91.11, 29.97], [121.48, 31.22]]
]

// ========== 组件内部逻辑 ==========

// Vue ref 绑定的 DOM
const chartEl = ref<HTMLElement>()
let chartInstance: ECharts | null = null
let baseTexture: ECharts | null = null
let worldGeoJson: any = null

// 数据转换：DataItem -> [lng, lat, value]
interface DataItem { name: string; value: number; }
interface ConvertedData { name: string; value: [number, number, number]; }

const convertData = (data: DataItem[]): ConvertedData[] => {
  return data.reduce<ConvertedData[]>((acc, item) => {
    const coord = geoCoordMap[item.name]
    if (coord) {
      acc.push({ name: item.name, value: [...coord, item.value] })
    }
    return acc
  }, [])
}

// 随机生成示例数据
const generateRandomData = (count: number, max = 300): DataItem[] => {
  return Object.keys(geoCoordMap)
    .slice(0, count)
    .map(name => ({
      name,
      value: Number((Math.random() * max).toFixed(2))
    }))
}

// 随机飞线
const generateRandomLines = (count: number) => {
  return Array.from({ length: count }).map(() => ({
    coords: [
      [Math.random() * 360 - 180, Math.random() * 180 - 90],
      [105.18, 37.51]
    ],
    value: Number((Math.random() * 3000).toFixed(2))
  }))
}

// 加载世界地图 GeoJSON
const loadWorldGeo = async () => {
  try {
    // const worldMapUrl = new URL('@/assets/MapWorld.json', import.meta.env.).href;
    // const resp = await fetch(`${import.meta.env.BASE_URL}src/assets/MapWorld.json`);
    worldGeoJson = worldMapData

    // if (!resp.ok) {
      // throw new Error(`HTTP ${resp.status}`);
    // }
    // worldGeoJson = await resp.json();
    initBaseTexture()
  } catch (err) {
    console.error('加载世界地图 GeoJSON 失败:', err)
  }
}

// 初始化 baseTexture：离屏 canvas 渲染地图底图
const initBaseTexture = () => {
  if (!worldGeoJson) return

  // 单例注册 world 地图
  if (!moduleWorldMapRegistered) {
    try {
      echarts.registerMap('world', worldGeoJson)
    } catch (e) {
      console.warn('[EarthChart] 注册 world 地图异常:', e)
    }
    moduleWorldMapRegistered = true
  } else {
    // console.log('[EarthChart] world 地图已注册，跳过注册');
  }

  // 创建离屏 canvas 实例
  const offCanvas = document.createElement('canvas')
  baseTexture = echarts.init(offCanvas, undefined, {
    width: 4096,
    height: 2048
  })
  baseTexture.setOption({
    backgroundColor: '#001213',
    series: [{
      type: 'map',
      map: 'world',
      label: { show: false },
      itemStyle: {
        areaColor: '#004444',
        borderColor: '#00cccc',
        borderWidth: 2
      }
    }],
  })

  // baseTexture 准备好后，初始化主图
  initChart()
}

// 初始化主图实例
const initChart = () => {
  if (chartInstance || !baseTexture || !chartEl.value) return

  const option: EChartsOption = {
    tooltip: { show: true },
    globe: {
      silent: true,
      shading: 'color',
      environment: '#0D1117',
      baseTexture: baseTexture.getDom(),
      viewControl: {
        // 初始距离，值越大看起来越“缩小”
        distance: 300,
        // 限制最小/最大可缩放距离，避免太近或太远
        minDistance: 100,
        maxDistance: 500,
      }
    },
    series: [
      createBarSeries(),
      createLinesSeries(),
      createAnimatedLinesSeries()
    ] as any
  }

  chartInstance = echarts.init(chartEl.value)
  chartInstance.setOption(option)
}

// 3D 柱状图系列
const createBarSeries = () => ({
  type: 'bar3D',
  coordinateSystem: 'globe',
  barSize: 1.5,
  bevelSize: 0.5,
  minHeight: 0.5,
  altitudeScale: 3,
  silent: true,
  shading: 'realistic',
  itemStyle: {
    color: '#EBE806',
    opacity: 0.9,
    emissive: '#404040',
    specular: 0.8
  },
  label: {
    show: false,
    formatter: '',
    color: '#fff',
    fontSize: 10,
    textBorderColor: '#000',
    textBorderWidth: 1
  },
  emphasis: {
    label: {
      show: false
    }
  },
  encode: {
    x: 'lng',
    y: 'lat',
    z: 'value'
  },
  data: convertData(generateRandomData(150))
})

// 静态飞线系列
const createLinesSeries = () => ({
  type: 'lines3D',
  coordinateSystem: 'globe',
  effect: {
    show: true,
    period: 2,
    trailWidth: 3,
    trailLength: 0.5,
    trailColor: '#0087f4'
  },
  lineStyle: { color: '#0087f4', width: 1 },
  data: generateRandomLines(50)
})

// 动画飞线系列
const createAnimatedLinesSeries = () => ({
  type: 'lines3D',
  coordinateSystem: 'globe',
  effect: {
    show: true,
    trailWidth: 5,
    trailLength: 0.2,
    constantSpeed: 5
  },
  lineStyle: { color: '#EBE806', width: 1 },
  data: alirl
})

// 组件挂载
onMounted(async () => {
  // 先动态 import echarts-gl，只加载一次
  if (typeof window !== 'undefined') {
    // 结合 module-level 和 window 全局标志
    if (!moduleEchartsGlLoaded && !(window as any).__echarts_gl_loaded__) {
      try {
        await import('echarts-gl')
        moduleEchartsGlLoaded = true;
        (window as any).__echarts_gl_loaded__ = true
      } catch (e) {
        console.error('[EarthChart] echarts-gl 加载失败:', e)
        // 即使失败，后续 globe 可能无法正常工作，但不会阻止页面整体运行
      }
    } else {
      // console.log('[EarthChart] echarts-gl 已加载，跳过动态 import');
    }
  }
  // 然后加载世界地图 GeoJSON 并初始化图表
  await loadWorldGeo()
})

// 组件卸载：销毁实例，避免内存泄漏
onUnmounted(() => {
  if (chartInstance) {
    chartInstance.dispose()
    chartInstance = null
  }
  if (baseTexture) {
    baseTexture.dispose()
    baseTexture = null
  }
})
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  position: absolute;
  /* 可根据父容器布局调整 */
}
</style>
