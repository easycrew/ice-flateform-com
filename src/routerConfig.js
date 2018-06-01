// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideFooterResponsiveLayout from './layouts/HeaderAsideFooterResponsiveLayout';
import HeaderFooterLayout from './layouts/HeaderFooterLayout';
import BlankLayout from './layouts/BlankLayout';

import Dashboard from './pages/Dashboard';

import NotFound from './pages/NotFound';
import Empty from './pages/Empty';
import Error from './pages/Error';
import IconDemo from './components/IconDemo';

import Login from './pages/Login';
import AddPage from './pages/AddPage';
import FieldMap from './pages/FieldMap';
import TableSearch from './pages/TableSearch';
import DataDictionary from './pages/DataDictionary';
import TabTable from './pages/TabTable';
import HeaderAsideFooterLayout from './layouts/HeaderAsideFooterLayout';

import Notpermission from './pages/Notpermission';
import AddDataDictionary from './pages/DataDictionary/components/SimpleFluencyForm';

const routerConfig = [
  {
    path: '/dictionary',
    layout: HeaderAsideFooterResponsiveLayout,
    component: DataDictionary,
    children: [
      {
        path: 'dataDictionary',
        layout: HeaderAsideFooterResponsiveLayout,
        component: DataDictionary,
      },
      {
        path: 'add',
        layout: HeaderAsideFooterResponsiveLayout,
        component: AddDataDictionary,
      },
    ],
  },
  {
    path: '/',
    layout: HeaderAsideFooterResponsiveLayout,
    component: Dashboard,
  },
  {
    path: '/tableSearch',
    layout: HeaderAsideFooterResponsiveLayout,
    component: TableSearch,
  },
  {
    path: '/field',
    layout: HeaderAsideFooterResponsiveLayout,
    component: AddPage,
    children: [
      {
        path: 'addPage',
        layout: HeaderAsideFooterResponsiveLayout,
        component: AddPage,
      },
      {
        path: 'fieldMap',
        layout: HeaderAsideFooterResponsiveLayout,
        component: FieldMap,
      },
    ],
  },
  {
    path: '/login',
    layout: BlankLayout,
    component: Login,
  },
  {
    path: '/icon',
    layout: HeaderAsideFooterResponsiveLayout,
    component: IconDemo,
  },
  {
    path: '/empty',
    layout: HeaderFooterLayout,
    component: Empty,
  },
  {
    path: '/error',
    layout: HeaderFooterLayout,
    component: Error,
  },
  {
    path: '/tabTable',
    layout: HeaderAsideFooterLayout,
    component: TabTable,
  },
  {
    path: '/Notpermission',
    layout: HeaderAsideFooterResponsiveLayout,
    component: Notpermission,
  },
  {
    path: '*',
    layout: HeaderAsideFooterResponsiveLayout,
    component: NotFound,
  },
];

export default routerConfig;
