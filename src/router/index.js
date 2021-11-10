import  React from 'react'
import {
	BarcodeOutlined,
	CalculatorOutlined
} from '@ant-design/icons';

import Login from "../pages/Login"
import NotFound from '../pages/NotFound'

// dashboard
const UserTrack = React.lazy(() => import('../pages/admin/dashboard/userTrack'))
const AssetsTrack = React.lazy(() => import('../pages/admin/dashboard/assetsTrack'))
const List = React.lazy(() => import('../pages/admin/products/List'))
const Edit = React.lazy(() => import('../pages/admin/products/Edit'))

// 多级菜单
const ThreeMenu = React.lazy(() => import('../pages/admin/oneMenu/twoMenu/threeMenu'))
const TwoMenuOther = React.lazy(() => import('../pages/admin/oneMenu/twoMenuOther'))


export const mainRoutes = [
	{
		path: '/login',
		component: Login
	},
	{
		path: '/404',
		component: NotFound
	}
]


export const adminRoutes = [
	{ 
    path: '/',
    redirect: '/admin/dashboard',
    hidden: true // 该路由不出现在左侧菜单栏
  },
	{
		path: '/admin/dashboard',
		title: "看板",
		icon: <BarcodeOutlined />,
		redirect: '/admin/dashboard/newPage',
		children: [
			{
				path: '/admin/dashboard/user-track',
				component: UserTrack,
				title: "用户看板",
			},
			{
				path: '/admin/dashboard/assets-track',
				component: AssetsTrack,
				title: "资产看板",
			}
		]
	},
	{
		path: '/admin/products',
		component: List,
		title: "商品管理",
		icon: <CalculatorOutlined />,
		redirect: '/admin/products/List',
		children: [
			// {
			// 	path: '/admin/products/List',
			// 	component: List,
			// 	hidden: true,
			// 	title: "商品管理list",
			// },
			{
        path: '/admin/products/List',
        title: '首页秒杀列表',
        component: React.lazy(() => import('../pages/admin/dashboard')),
      },
		]
	},
	{
		path: '/admin/products/edit',
		component: Edit,
		hidden: true,
	},
	{
		path: '/admin/menus',
		title: "一级菜单",
		icon: <BarcodeOutlined />,
		children: [
			{
				path: '/admin/twoMenu',
				// component: TwoMenu,
				title: "二级菜单",
				children: [
					{
						path: '/admin/threeMenu',
						component: ThreeMenu,
						title: "三级级菜单",
					},
					{
						path: '/admin/threeMenu2',
						component: ThreeMenu,
						title: "三级级菜单",
					},
				]
			},
			{
				path: '/admin/twoMenuOther',
				component: TwoMenuOther,
				title: "二级菜单",
			}
		]
	},
	// {
  //   path: '/hmanager',
  //   title: '首页数据管理',
  //   icon: <ClockCircleOutlined />,
  //   redirect: '/hmanager/seckilllist',
  //   children: [
  //     {
  //       path: '/hmanager/seckilllist',
  //       title: '首页秒杀列表',
  //       icon: <MenuOutlined />,
  //       component: lazy(() => import('../views/homedata/SeckillList'))
  //     },
  //     {
  //       path: '/hmanager/recommentlist',
  //       title: '首页推荐列表',
  //       icon: <MenuOutlined />,
  //       component: lazy(() => import('../views/homedata/RecommentList'))
  //     }
  //   ]
  // },
]