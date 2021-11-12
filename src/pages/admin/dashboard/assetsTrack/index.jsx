import React, { Component } from 'react'
import { Card, Button, Table, Divider, Modal } from 'antd'
import UserModal from '../../../../compontents/Modal/userModal'
export default class index extends Component {
 	formRef = React.createRef(); // ref 标识

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
		],
	 	rowSelection: { // 表单选择框携带的方法
			onChange: (selectedRowKeys, selectedRows) => {
				console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
			},
			getCheckboxProps: (record) => ({
				disabled: record.key === "1", // 禁用
				// Column configuration not to be checked
				key: record.key,
			}),
		},
		isModalVisible: false,
	}
	constructor(props) {
		super(props)
	}
	handleAdd = () => {
		console.log('add');
		this.rowSelection.getCheckboxProps()
	}
	handleEdit = (id) => {
		return (e) => { //	$event 默认作为最后一个参数
			this.setState({isModalVisible: true})
			console.log('handleEdit', id);
		}
	}
	handleDel = (id) => {
		return (e) => { //	$event 默认作为最后一个参数
			console.log('handleDel', id);
		}
	}
	handleOk = async () => {
		// this.setState({isModalVisible: false})
		console.log('OK');
		try {
			const res = await this.formRef.current.validateFields()
			console.log('下一步',res);
		} catch (error) {
			console.log('验证失败！',error);
		}
	}
	handleCancel = () => {
		this.setState({isModalVisible: false})
		console.log('CANCEL');
	}
	render() {
		const { dataSource, columns, rowSelection, isModalVisible } = this.state
		return (
			<div>
				<Card title='assetsTrak' extra={<Button type="primary" onClick={this.handleAdd}>新 增</Button>}>
					<p>资产追踪列表</p>
					<Divider></Divider>
					<Table rowSelection={{ type: "checkbox", ...rowSelection }} dataSource={dataSource} columns={columns}></Table>
				</Card>
				<Modal title="修改用户信息" visible={isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
					<UserModal ref={this.formRef} ></UserModal>
				</Modal>
			</div>
		)
	}
}
