import { Menu } from "antd";
import {
    HomeOutlined,
    AppstoreOutlined,
    AreaChartOutlined,
    PayCircleOutlined,
    SettingOutlined,
    BarsOutlined,
    EditOutlined,
    UserOutlined,
    LogoutOutlined
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

const MenuList = ({ darkTheme }) => {

    const nav = useNavigate();

    var a = 'more ('+0+')';

    const useritems = [
        {
            key: 'main',
            icon: <EditOutlined />,
            label: 'YOUR Books',
            children: [
                {
                    key: 'home',
                    label: 'Client OverView'
                },
                {
                    key: 'dashboard',
                    label: 'Dashboard',
                    children: [
                        {
                            key: 'dashboard1',
                            label: 'Dashboard One',
                        },
                        {
                            key: 'dashboard2',
                            label: 'Dashboard Two',
                        },
                    ]
                },
                {
                    key: 'tasks',
                    label: 'Tasks'
                },
                {
                    key: 'transaction',
                    label: 'Transaction',
                    children: [
                        {
                            key: 'deals',
                            label: 'Deals',
                        },
                        {
                            key: 'logs',
                            label: 'Logs',
                        },
                    ]
                },
                {
                    key: 'advanceaccountion',
                    label: 'Advance Accounting',
                    children: [
                        {
                            key: 'financialreporting',
                            label: 'Financial Reporting',
                        },
                        {
                            key: 'count',
                            label: 'Count',
                        },
                    ]
                },
                {
                    key: 'sales',
                    label: 'Sales',
                    children: [
                        {
                            key: 'orders',
                            label: 'Orders',
                        },
                    ]
                },
                {
                    key: 'expenses',
                    label: 'Expenses',
                    children: [
                        {
                            key: 'purchase',
                            label: 'Purchase',
                        },
                        {
                            key: 'charges',
                            label: 'Charges',
                        },
                    ]
                },
                {
                    key: 'reports',
                    label: 'Reports',
                    children: [
                        {
                            key: 'outline',
                            label: 'Outline',
                        },
                        {
                            key: 'statments',
                            label: 'Statments',
                        },
                    ]
                },
                {
                    key: 'payroll',
                    label: 'Payroll',
                    children: [
                        {
                            key: 'currentpayroll',
                            label: 'Current payroll',
                        },
                        {
                            key: 'lastpayroll',
                            label: 'Last payroll',
                        },
                    ]
                },
                {
                    key: 'time',
                    label: 'Time',
                    children: [
                        {
                            key: 'calender',
                            label: 'Calender',
                        },
                        {
                            key: 'timetable',
                            label: 'Time table',
                        },
                        {
                            key: 'schedules',
                            label: 'Schedules',
                        }
                    ]
                },
                {
                    key: 'financialplanning',
                    label: 'Financial Planning',
                    children: [
                        {
                            key: 'fplainingplanning',
                            label: 'Financial Planning',
                        },
                        {
                            key: 'fplainingexcuation',
                            label: 'Financial Excution',
                        },
                    ]
                },
                {
                    key: 'workflowautomation',
                    label: 'Workflow automation',
                    children: [
                        {
                            key: 'workflowautomation',
                            label: 'Workflow',
                        }
                    ]
                },
                {
                    key: 'taxes',
                    label: 'Taxes',
                    children: [
                        {
                            key: 'taxesfiling',
                            label: 'Tax filing',
                        },
                        {
                            key: 'taxreturns',
                            label: 'Tax Returns',
                        },
                    ]
                },
                {
                    key: 'landingandbanking',
                    label: 'Landing & Banking',
                    children: [
                        {
                            key: 'lending',
                            label: 'Lending',
                        },
                        {
                            key: 'banking',
                            label: 'Banking',
                        },
                    ]
                },
                {
                    key: 'more',
                    label: 'more ('+a+')',
                    children: [
                    ]
                },
                
                
            ]
        }
    ]

    const clickedmenu = (key)=>{
        console.log(key);
        nav(`/${key}`);
      }

    return (
        // <Menu theme={darkTheme ? 'light' : 'dark'} mode="inline" className="menu-bar">
            
        //     <Menu.SubMenu key="yourbooks" icon={<EditOutlined />} title="YOUR Books">
        //         <Menu.Item key="clientoverview"  >
        //             Client OverView
        //         </Menu.Item>
        //         <Menu.SubMenu key={"dashboard"} title="Dashboard" >
        //             <Menu.Item key="dashboard1"  >
        //                 Dashboard 1
        //             </Menu.Item>
        //             <Menu.Item key="dashboard2"  >
        //                 Dashboard 2
        //             </Menu.Item>
        //         </Menu.SubMenu>
        //         <Menu.Item key="tasks"  >
        //             Tasks
        //         </Menu.Item>
        //         <Menu.SubMenu key={"transcations"} title="Transcations">
        //             <Menu.Item key="transcations1"  >
        //                 Transcations 1
        //             </Menu.Item>
        //             <Menu.Item key="transcations"  >
        //                 Transcations 2
        //             </Menu.Item>
        //         </Menu.SubMenu>
        //         <Menu.SubMenu key={"advanceaccounting"} title="Advance Accounting">
        //             <Menu.Item key="advanceaccounting1"  >
        //                 Advance Accounting 1
        //             </Menu.Item>
        //             <Menu.Item key="advanceaccounting2"  >
        //                 Advance Accounting 2
        //             </Menu.Item>
        //         </Menu.SubMenu>
        //         <Menu.SubMenu key={"sales"} title="Sales">
        //             <Menu.Item key="sales1"  >
        //                 Sales 1
        //             </Menu.Item>
        //             <Menu.Item key="sales2"  >
        //                 Sales 2
        //             </Menu.Item>
        //         </Menu.SubMenu>
        //         <Menu.SubMenu key={"expenses"} title="Expenses">
        //             <Menu.Item key="expenses1"  >
        //                 Expenses 1
        //             </Menu.Item>
        //             <Menu.Item key="expenses2"  >
        //                 Expenses 2
        //             </Menu.Item>
        //         </Menu.SubMenu>
        //         <Menu.SubMenu key={"reports"} title="Reports">
        //             <Menu.Item key="reports1"  >
        //                 Reports 1
        //             </Menu.Item>
        //             <Menu.Item key="reports2"  >
        //                 Reports 2
        //             </Menu.Item>
        //         </Menu.SubMenu>
        //         <Menu.SubMenu key={"payroll"} title="Payroll">
        //             <Menu.Item key="payroll1"  >
        //                 Payroll 1
        //             </Menu.Item>
        //             <Menu.Item key="payroll2"  >
        //                 Payroll 2
        //             </Menu.Item>
        //         </Menu.SubMenu>
        //         <Menu.SubMenu key={"time"} title="Time">
        //             <Menu.Item key="time1"  >
        //                 Time 1
        //             </Menu.Item>
        //             <Menu.Item key="time2"  >
        //                 Time 2
        //             </Menu.Item>
        //         </Menu.SubMenu>
        //         <Menu.SubMenu key={"financialplanning"} title="Financial Planning">
        //             <Menu.Item key="financialplanning1"  >
        //                 Financial Planning
        //             </Menu.Item>
        //         </Menu.SubMenu>
        //         <Menu.SubMenu key={"workflowautomation"} title="Workflow automation">
        //             <Menu.Item key="workflowautomation1"  >
        //                 Workflow automation 1
        //             </Menu.Item>
        //             <Menu.Item key="workflowautomation2"  >
        //                 Workflow automation 2
        //             </Menu.Item>
        //         </Menu.SubMenu>
        //         <Menu.SubMenu key={"taxes"} title="Taxes">
        //             <Menu.Item key="taxes1"  >
        //                 Taxes 1
        //             </Menu.Item>
        //             <Menu.Item key="taxes2"  >
        //                 Taxes 2
        //             </Menu.Item>
        //         </Menu.SubMenu>
        //         <Menu.SubMenu key={"landb"} title="Lending and banking">
        //             <Menu.Item key="lending"  >
        //                 Lending
        //             </Menu.Item>
        //             <Menu.Item key="banking"  >
        //                 Banking
        //             </Menu.Item>
        //         </Menu.SubMenu>
        //         <Menu.SubMenu key={"more"} title={a}>
        //         </Menu.SubMenu>

        //     </Menu.SubMenu>

        //     <Menu.Item key='logout' icon={<LogoutOutlined/>} onClick={()=>{nav('/')}}> Logout </Menu.Item>


        // </Menu>

        <Menu
          mode="inline"
          theme="light"
          items={useritems}
          defaultOpenKeys={['main']}
          defaultSelectedKeys={['home']}
          onClick={(e)=>clickedmenu(e.key)}
          className="menu-bar"
          />

    );
}

export default MenuList;