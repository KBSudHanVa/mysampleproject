import { Profiler, useState } from "react";
import { Avatar, Button, Layout, theme } from "antd";
import { Route, Routes } from 'react-router-dom';

import "./SideNav.css"
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import Logo from "./NComponents/Logo";
import MenuList from "./NComponents/MenuList";
import ToggleThemeButton from "./NComponents/ToggleThemeButton";
import { Content } from "antd/es/layout/layout";
import UserMenu from "./NComponents/UserMenu";
import TaskComponent from "../ComponentScreens/DataComponents/TaskComponent";
import NotFoundComponent from "../ComponentScreens/ErrorComponents/NotFoundComponent";

const { Header, Sider } = Layout;

function SideNav() {

    const [darkTheme, setDarkTheme] = useState(true);
    const [collapsed, setCollapsed] = useState(false);

    const name = 'Sudhanva';
    var firstLetter = name[0];

    const toggleTheme =()=>{
        setDarkTheme(!darkTheme)
    }

    const { 
        token: {colorBgContainer}, 
    } = theme.useToken();

    return (
        <Layout>
            <Sider className="sidebar" collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? 'dark' : 'light'}>
                <Logo />
                <MenuList darkTheme={darkTheme}/>
                {/* <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}/> */}
            </Sider>
            <Layout>
                <Header style={{padding: 0, background: colorBgContainer}}>
                    <Button type="text" className="toggle" onClick={()=>{setCollapsed(!collapsed)}} icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/> }></Button>

                    <UserMenu firstLetter={firstLetter}/>
                    <label className="login-name">{name}</label>

                </Header>
                <Content>
                    <Routes>
                        <Route path="tasks" element={<TaskComponent />} />
                        <Route path="dashboard" element={<TaskComponent />} />
                        <Route path="*" element={<NotFoundComponent />} />
                    </Routes>
                </Content>

            </Layout>
        </Layout>
    );
}

export default SideNav;
