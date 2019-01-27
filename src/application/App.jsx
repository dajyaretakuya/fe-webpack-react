/* eslint-disable no-undef */
import './App.scss';

import React, { Component } from 'react';
import { BrowserRouter, HashRouter} from 'react-router-dom';
import Helmet from 'react-helmet';
import { Layout, Menu, Breadcrumb } from 'antd';

import GithubCorner from '../component/GithubCorner';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


// 将路由放在这边是为了方便进行热加载
const Router = typeof __SSR__ !== 'undefined' ? BrowserRouter : HashRouter;

export default class App extends Component {
  render() {
    return (
      <Router>
        <section className="App__container">
          <Helmet title="React Application Demonstration">
            <link
              rel="stylesheet"
              href="https://unpkg.com/sakura.css/css/sakura.css"
              type="text/css"
            />
          </Helmet>
          <GithubCorner />
          <Layout>
            <Header className="header">
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Layout>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu key="sub1" title={<span>subnav 1</span>}>
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span>subnav 2</span>}>
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title={<span>subnav 3</span>}>
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content>Content</Content>
              </Layout>
            </Layout>
          </Layout>
        </section>
      </Router>
    );
  }
}

// 额外进行全局配置
