import { Menu } from "antd";
import {
    HomeOutlined,
    AppstoreOutlined,
    AreaChartOutlined,
    PayCircleOutlined,
    SettingOutlined,
    BarsOutlined,
    EditOutlined,
    UserOutlined
} from '@ant-design/icons'

const MenuList = ({ darkTheme }) => {

    var a = 'more ('+0+')';

    return (
        <Menu theme={darkTheme ? 'light' : 'dark'} mode="inline" className="menu-bar">
            {/* <Menu.Item key="home" icon={ <HomeOutlined/> } >
                Home 
            </Menu.Item>
            <Menu.Item key="activity" icon={ <AppstoreOutlined/> } >
                Activity 
            </Menu.Item>
            <Menu.SubMenu key="tasks" icon={ <BarsOutlined/>}
                title="Tasks" >
                    <Menu.Item key="task-1" >Task 1</Menu.Item>
                    <Menu.Item key="task-2" >Task 2</Menu.Item>
                    <Menu.SubMenu key="subtasks" title="SubTasks">
                        <Menu.Item key="subtask-1">Subtask 1</Menu.Item>
                        <Menu.Item key="subtask-2">Subtask 2</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="task-3" >Task 3</Menu.Item>
                </Menu.SubMenu>
            <Menu.Item key="progress" icon={ <AreaChartOutlined/> } >
                Progress 
            </Menu.Item>
            <Menu.Item key="payment" icon={ <PayCircleOutlined/> } >
                payment 
            </Menu.Item>
            <Menu.Item key="setting" icon={ <SettingOutlined/> } >
                Setting 
            </Menu.Item> */}

            <Menu.SubMenu key="yourbooks" icon={<EditOutlined />} title="YOUR Books">
                <Menu.Item key="clientoverview"  >
                    Client OverView
                </Menu.Item>
                <Menu.SubMenu key={"dashboard"} title="Dashboard" >
                    <Menu.Item key="dashboard1"  >
                        Dashboard 1
                    </Menu.Item>
                    <Menu.Item key="dashboard2"  >
                        Dashboard 2
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="tasks"  >
                    Tasks
                </Menu.Item>
                <Menu.SubMenu key={"transcations"} title="Transcations">
                    <Menu.Item key="transcations1"  >
                        Transcations 1
                    </Menu.Item>
                    <Menu.Item key="transcations"  >
                        Transcations 2
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key={"advanceaccounting"} title="Advance Accounting">
                    <Menu.Item key="advanceaccounting1"  >
                        Advance Accounting 1
                    </Menu.Item>
                    <Menu.Item key="advanceaccounting2"  >
                        Advance Accounting 2
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key={"sales"} title="Sales">
                    <Menu.Item key="sales1"  >
                        Sales 1
                    </Menu.Item>
                    <Menu.Item key="sales2"  >
                        Sales 2
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key={"expenses"} title="Expenses">
                    <Menu.Item key="expenses1"  >
                        Expenses 1
                    </Menu.Item>
                    <Menu.Item key="expenses2"  >
                        Expenses 2
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key={"reports"} title="Reports">
                    <Menu.Item key="reports1"  >
                        Reports 1
                    </Menu.Item>
                    <Menu.Item key="reports2"  >
                        Reports 2
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key={"payroll"} title="Payroll">
                    <Menu.Item key="payroll1"  >
                        Payroll 1
                    </Menu.Item>
                    <Menu.Item key="payroll2"  >
                        Payroll 2
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key={"time"} title="Time">
                    <Menu.Item key="time1"  >
                        Time 1
                    </Menu.Item>
                    <Menu.Item key="time2"  >
                        Time 2
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key={"financialplanning"} title="Financial Planning">
                    <Menu.Item key="financialplanning1"  >
                        Financial Planning
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key={"workflowautomation"} title="Workflow automation">
                    <Menu.Item key="workflowautomation1"  >
                        Workflow automation 1
                    </Menu.Item>
                    <Menu.Item key="workflowautomation2"  >
                        Workflow automation 2
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key={"taxes"} title="Taxes">
                    <Menu.Item key="taxes1"  >
                        Taxes 1
                    </Menu.Item>
                    <Menu.Item key="taxes2"  >
                        Taxes 2
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key={"landb"} title="Lending and banking">
                    <Menu.Item key="lending"  >
                        Lending
                    </Menu.Item>
                    <Menu.Item key="banking"  >
                        Banking
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key={"more"} title={a}>
                </Menu.SubMenu>

            </Menu.SubMenu>


        </Menu>
    );
}

export default MenuList;