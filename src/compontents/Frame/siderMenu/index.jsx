import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import { adminRoutes } from '../../../router/index'
const { SubMenu } = Menu;
const rootSubmenuKeys = []
adminRoutes.forEach(item => {
	item.children && rootSubmenuKeys.push(item.path)
})
console.log(rootSubmenuKeys, 'rootSubmenuKeys');

// 无state属性，使用function 创建 《路由下拉菜单》 组件
const SiderMenu = (props) => {
	console.log("props：", props); // 打印SiderMenu携带的属性
	const [openKeys, setOpenKeys] = useState([])
	const [selectedKeys, setSelectKeys] = useState([])
	const history = useHistory()


	const goPage = ({ key }) => {
		history.push(key)
	}
	const onOpenChange = keys => {
		// console.log(keys); // keys = 前一个和当前展开的菜单数组[pre,cur]
		const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
		if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			setOpenKeys(keys)
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
		}
	}
	const { pathname } = useLocation()

	useEffect(() => {
		setOpenKeys(openKeys) // 展开的菜单  					openKeys = ['/admin/menus', '/admin/menus/twoMenu']
		setSelectKeys([pathname]) // 选中的菜单            						* 父级						*子级            ...
	}, [pathname,openKeys])
	console.log(openKeys);

	const createMenuItem = (menus) => {
		return (
			<>
				{
					menus.map(route => {
						if (route.children) {
							return (
								<SubMenu key={route.path} icon={route.icon} title={route.title}>
									{
										createMenuItem(route.children)
									}
								</SubMenu>
							)
						} else {
							return route.hidden ? null : <Menu.Item key={route.path} icon={route.icon} >{route.title}</Menu.Item>

						}
					})
				}
			</>
		)
	}
	return (
		<Menu theme="dark" mode="inline" onClick={goPage} onOpenChange={onOpenChange}
			defaultSelectedKeys={[pathname]}
			defaultOpenKeys={[pathname]}
			openKeys={openKeys}
			selectedKeys={selectedKeys}
		>
			{createMenuItem(adminRoutes)}
		</Menu >
	)
}

export default SiderMenu
