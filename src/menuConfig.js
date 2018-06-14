// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置
import Axios from 'utils/Axios';
import $ from 'jquery';
import * as tools from 'utils/tools';

let headerMenuConfig = [
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

// const asideMenuConfig = [
//   {
//     name: 'Dashboard',
//     path: '/',
//     icon: 'home',
//   },
//   {
//     name: '基础数据',
//     path: '/field',
//     icon: 'copy',
//     children: [
//       { name: '新增', path: '/field/addPage' },
//       { name: '展示', path: '/field/fieldMap' },
//     ],
//   },
//   {
//     name: '基础页面',
//     path: '/tableSearch',
//     icon: 'table',
//   },
//   {
//     name: '数据字典管理',
//     path: '/dictionary',
//     icon: 'table',
//     children: [
//       { name: '数据字典', path: '/dictionary/dataDictionary' },
//       { name: '新增', path: '/dictionary/add' },
//     ],
//   },
//   {
//     name: 'IconDemo',
//     path: '/icon',
//     icon: 'customize',
//   },
//   {
//     name: 'tab-table',
//     path: '/tabTable',
//     icon: 'home',
//   },
//   {
//     name: '筛选表格',
//     path: '/FilterTable',
//     icon: 'directory',
//   },
//   {
//     name: 'IceworksPreviewPage',
//     path: '/IceworksPreviewPage',
//     icon: 'home',
//   },
// ];

// const access_token = Tools.getUserToken();
// const getMenu = () => {
//   let menuData =[];
//   Axios.post('api/admin/menu/get')
//   .then(res => {
//     menuData = res.data;
//     console.log(menuData)
//   })
//   .catch(error => {});
//   return [...menuData]
// }
let asideMenuConfig =[];
// const getMenu = () => {
//   let menuData = [];
//   menuData = Axios.post('api/admin/menu/get')
//       .then(res => {
//           menuData = res.data;
//           return menuData
//       })
//       .catch(error => {
//       });
//   return menuData
// };
const token = tools.getUserToken();
const getMenu = () => {
  let menuData = [];
  $.ajax({
    url:'api/admin/menu/get',
    type:'post',
    headers:{'access_token':token},
    async:false,
    success:function(res){
      menuData = res.data;
    }
  })
  // menuData = Axios.post('api/admin/menu/get')
  //     .then(res => {
  //         menuData = res.data;
  //         return menuData
  //     })
  //     .catch(error => {
  //     });
  return menuData
};
asideMenuConfig = getMenu();
console.log(asideMenuConfig)



export { headerMenuConfig, asideMenuConfig };

