import React from 'react';
import {Layout} from "antd";

const {Header, Sider, Content} = Layout;

export default (props) => {
    return (
        <Layout style={{height: '100vh'}}>
            <Header>{props.header}</Header>
            <Layout>
                <Sider>{props.leftSider}</Sider>
                <Content>{props.container}</Content>
                <Sider>{props.rightSider}</Sider>
            </Layout>
        </Layout>
    )
}
