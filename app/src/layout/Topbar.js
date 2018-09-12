import React from 'react';
import { Row, Col} from "antd"

const height = {height: "100%"};

export default (props) => {
    return (
        <Row style={height}>
            <Col span={7} style={height}>{props.topLeft}</Col>
            <Col span={10} style={height}>{props.topCenter}</Col>
            <Col span={7} style={height}>{props.topRight}</Col>
        </Row>
    )
}