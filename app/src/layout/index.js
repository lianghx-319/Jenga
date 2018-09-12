import React from 'react';
import {Layout} from "antd";
import "./index.less";

import TopBar from "./Topbar.js"

const {Header, Content} = Layout;

export default () => {
    return (
        <Layout className="editor">
            <Header className="editor-header">
                <TopBar></TopBar>
            </Header>
            <Content className="editor-container" >
                
            </Content>
        </Layout>
    )
}
