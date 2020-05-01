import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const PlusButton = (props) => {
	const id = props.poseId;
	return <Button className="plus_minus_button" icon={<PlusOutlined className="plus_button_icon" />} />;
};

export default PlusButton;
