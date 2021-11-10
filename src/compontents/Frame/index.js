import "./index.css"

import React from 'react'
import { withRouter} from 'react-router-dom'
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import RouterView from '../../router/RouterView'
import logoImg from '../../assets/logo.jpg'

import SiderMenu from './siderMenu'

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  handleRoutePush(history, path) {
    console.log(history, path);
    history.push(path)
  }
  render() {
    console.log('Frame render');
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <img src={logoImg} alt="logo" style={{ width: 100 + '%' }} ></img>
          </div>
          <SiderMenu data={"yo"}/>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ paddingLeft: 20 + "px", fontSize: 24 + "px" }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <RouterView />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);
export default withRouter(SiderDemo)