// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置
import Axios from 'utils/Axios';
import * as Tools from 'utils/tools'

const  access_token = Tools.getUserToken();
console.log(access_token)
Axios.post('api/admin/menu/get',access_token)
  .then((res) => {
    const menuData = res.data;
    asideMenuConfig = menuData;
  })
  .catch((error) => {

  })

const headerMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  },
  {
    name: '消息',
    path: '/',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '退出',
    path: '/login',
    icon: 'compass',
  },
];


const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/',
    icon: 'home',
  },
  {
    name: '基础数据',
    path: '/field',
    icon: 'copy',
    children: [
      { name: '新增', path: '/field/addPage' },
      { name: '展示', path: '/field/fieldMap' },
    ],
  },
  {
    name: '基础页面',
    path: '/tableSearch',
    icon: 'table',
  },
  {
    name: '数据字典管理',
    path: '/dictionary',
    icon: 'table',
    children: [
      { name: '数据字典', path: '/dictionary/dataDictionary' },
      { name: '新增', path: '/dictionary/add' },
    ],
  },
  {
    name: 'IconDemo',
    path: '/icon',
    icon: 'table',
  },
  {
    name: 'tab-table',
    path: '/tabTable',
    icon: 'home',
  },
];

export { headerMenuConfig, asideMenuConfig };
