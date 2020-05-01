import React from 'react';
import { Button } from 'antd';
import { MinusOutlined } from '@ant-design/icons';

const PlusButton = (props) => {
	const id = props.poseId;
	return <Button shape="square" className="plus_minus_button" icon={<MinusOutlined className="plus_button_icon" />} />;
};

export default PlusButton;
