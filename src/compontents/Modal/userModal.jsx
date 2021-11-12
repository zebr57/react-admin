import React from 'react'
import { Form, Select, Input } from 'antd'
const { Option } = Select

const layout = { 	// form - label跟控件的占比
	labelCol: { span: 4 },
	wrapperCol: { span: 16 },
};
// const tailLayout = {	// form.item - label跟控件的占比
// 	wrapperCol: {
// 		offset: 4,
// 		span: 16,
// 	},
// };
const UserModal = React.forwardRef((props, ref) => {
	// const [form] = Form.useForm();
	const onGenderChange = () => {
		console.log('onGenderChange');
	}
	const onFinish = (values) => {
		console.log(values);
	};


	const genderOption = [
		{ label: "male", value: "male" },
		{ label: "female", value: "female" },
		{ label: "other", value: "other" },
	]
	// 自定验证规则
	const nameRules = (rule, value, callback) => {
		return new Promise((resolve, reject) => {
			if (value?.length > 6) {
				reject('名姓名不能超过 6 个字符')
			} else {
				resolve('ok')
			};
		});

	}
	return (
		<Form {...layout} ref={ref} name="userInfo-ref" onFinish={onFinish}>
			<Form.Item name="name" label="Name" rules={[
				{ required: true,
					message: '请输入姓名',
				},
				{
					validator: (rule, value, callback) => nameRules(rule, value, callback),
				},
			]}>
				<Input placeholder="请输入姓名" />
			</Form.Item>
			<Form.Item
				name="gender"
				label="Gender"
				rules={[
					{
						required: true,
					},
				]}>
				<Select
					placeholder="请选择性别"
					onChange={onGenderChange}
					allowClear
				>
					{genderOption.map(item => {
						return <Option value={item.value} key={item.value}>{item.label}</Option>
					})}
				</Select>
			</Form.Item>
			<Form.Item
				name="age"
				label="age"
				rules={[
					{
						required: true,
					},
				]}>
				<Input placeholder="请输入年龄" />
			</Form.Item>
			<Form.Item
				name="adress"
				label="adress"
				rules={[
					{
						required: true,
					},
				]}>
				<Input placeholder="请输入地址" />
			</Form.Item>
		</Form>
	)

})
export default UserModal