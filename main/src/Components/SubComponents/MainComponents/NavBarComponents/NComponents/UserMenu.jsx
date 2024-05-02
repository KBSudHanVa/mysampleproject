import React, { useState, useEffect } from 'react';
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const UserMenu = ({ firstLetter }) => {

  const [visible, setVisible] = useState(false);
  const nav = useNavigate();

  let timer;

  useEffect(() => {
    if (visible) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setVisible(false);
      }, 2000);
    }
  }, [visible]);

  const handleAvatarClick = () => {
    setVisible(!visible);
  };

  const handleMenuClick = (path) => {
    if(nav==="/"){
      localStorage.clear();
    }
    nav(path);
    setVisible(false);
  };

  const items = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
      path: '/profile'
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
      path: '/settings'
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      path: '/'
    }
  ];

  const menu = (
    <Menu>
      {items.map(item => (
        <Menu.Item key={item.key} icon={item.icon} onClick={() => handleMenuClick(item.path)}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight" trigger={['click']} visible={visible} onClick={handleAvatarClick}>
      <Avatar className="avatar" style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>{firstLetter}</Avatar>
    </Dropdown>
  );
};

export default UserMenu;
