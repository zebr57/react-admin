import React, { Component } from 'react'
import { Card, Button, Table } from 'antd'
export default class index extends Component {
	state = {
		dataSource: [
			{
				key: '1',
				name: '胡彦斌',
				age: 32,
				address: '西湖区湖底公园1号',
			},
			{
				key: '2',
				name: '胡彦祖',
				age: 42,
				address: '西湖区湖底公园1号',
			},
		],
		columns: [
			{
				title: '序号ID',
				dataIndex: 'key',
				key: 'key',
				render: text => <p>{text}</p>,
			},
			{
				title: '姓名',
				dataIndex: 'name',
				key: 'name',
			},
			{
				title: '年龄',
				dataIndex: 'age',
				key: 'age',
			},
			{
				title: '住址',
				dataIndex: 'address',
				key: 'address',
			},
			{
				title: '操作',
				key: 'operate',
				render: (text, record, index) => (
					<div>
						<Button type="primary" onClick={this.handleEdit(6)}>修改</Button>
						<Button type="primary" danger style={{ marginLeft: 5 + 'px' }} onClick={this.handleDel(6)}>删除</Button>
					</div>
				)
			},
		]
	}
	constructor(props) {
		super(props)
	}
	handleAdd = () => {
		console.log('add');
	}
	handleEdit = (id) => {
		return (e) => { //	$event 默认作为最后一个参数
			console.log('handleEdit', id);
		}
	}
	handleDel = (id) => {
		return (e) => { //	$event 默认作为最后一个参数
			console.log('handleDel', id);
		}
	}
	render() {
		const { dataSource, columns } = this.state
		return (
			<div>
				<Card title='assetsTrak' extra={<Button type="primary" onClick={this.handleAdd}>新 增</Button>}>
					<p>资产追踪列表</p>
					<Table dataSource={dataSource} columns={columns}></Table>
				</Card>
			</div>
		)
	}
}
