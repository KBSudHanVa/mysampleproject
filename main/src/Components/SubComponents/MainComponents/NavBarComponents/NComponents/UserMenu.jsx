import React, { useState, useEffect } from 'react';
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const UserMenu = ({firstLetter}) => {
  
  const [visible, setVisible] = useState(false);
  const nav = useNavigate();

  let timer; // Declare a timer variable

  useEffect(() => {
    // Reset the timer whenever the visibility state changes
    if (visible) {
      clearTimeout(timer); // Clear any existing timer
      timer = setTimeout(() => {
        setVisible(false); // Close the menu after 2 seconds
      }, 2000); // 2000 milliseconds = 2 seconds
    }
  }, [visible]);

  const handleMenuClick = ({ key }) => {
    if (key === 'logout') {
      // Perform logout action
    } else {
      // Navigate to profile or settings page
    }
    setVisible(false); // Close the menu after clicking an item
  };

  const handleAvatarClick = () => {
    setVisible(!visible); // Toggle menu visibility on Avatar click
  };

  const menu = (
    <Menu onClick={handleMenuClick} style={{ width: 100, float: 'right', top: 0, right: 15 }}>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={()=>{nav('/')}}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight" trigger={['click']} visible={visible} onClick={handleAvatarClick}>
      <Avatar className="avatar" style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>{firstLetter}</Avatar>
    </Dropdown>
  );
};

export default UserMenu;
