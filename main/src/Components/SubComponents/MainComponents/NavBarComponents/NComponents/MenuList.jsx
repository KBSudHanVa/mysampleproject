import { Menu } from "antd";
import { EditOutlined } from '@ant-design/icons'
import { Outlet, useNavigate } from 'react-router-dom';

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
                    key: '',
                    label: 'Client OverView',
                    path: '/home'
                },
                {
                    key: 'dashboard',
                    label: 'Dashboard',
                    children: [
                        {
                            key: 'dashboard',
                            label: 'Dashboard One',
                            path: '/home/dashboard'
                        },
                        {
                            key: 'dashboard2',
                            label: 'Dashboard Two',
                            path: '/home/dashboard2'
                        },
                    ]
                },
                {
                    key: 'tasks',
                    label: 'Tasks',
                    path: '/home/tasks'
                },
                {
                    key: 'transaction',
                    label: 'Transaction',
                    children: [
                        {
                            key: 'deals',
                            label: 'Deals',
                            path: '/home/deals'
                        },
                        {
                            key: 'logs',
                            label: 'Logs',
                            path: '/home/logs'
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
                            path: '/home/financialreporting'
                        },
                        {
                            key: 'count',
                            label: 'Count',
                            path: '/home/count'
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
                            path: '/home/orders'
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
                            path: '/home/purchase'
                        },
                        {
                            key: 'charges',
                            label: 'Charges',
                            path: '/home/charges'
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
                            path: '/home/outline'
                        },
                        {
                            key: 'statments',
                            label: 'Statments',
                            path: '/home/statments'
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
                            path: '/home/currentpayroll'
                        },
                        {
                            key: 'lastpayroll',
                            label: 'Last payroll',
                            path: '/home/lastpayroll'
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
                            path: '/home/calender'
                        },
                        {
                            key: 'timetable',
                            label: 'Time table',
                            path: '/home/timetable'
                        },
                        {
                            key: 'schedules',
                            label: 'Schedules',
                            path: '/home/schedules'
                        }
                    ]
                },
                {
                    key: 'financialplanning',
                    label: 'Financial Planning',
                    children: [
                        {
                            key: 'financialplanning',
                            label: 'Financial Planning',
                            path: '/home/financialplanning'
                        },
                        {
                            key: 'financialexcuation',
                            label: 'Financial Execution',
                            path: '/home/financialexcuation'
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
                            path: '/home/workflow'
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
                            path: '/home/taxfiling'
                        },
                        {
                            key: 'taxreturns',
                            label: 'Tax Returns',
                            path: '/home/taxreturns'
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
                            path: '/home/lending'
                        },
                        {
                            key: 'banking',
                            label: 'Banking',
                            path: '/home/banking'
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

    const clickedmenu = (path) => {
        // console.log("clicking : "+ path);
        nav(path);
    };
    

    return (
        <Menu
            mode="inline"
            theme="light"
            items={useritems}
            defaultOpenKeys={['main']}
            // defaultSelectedKeys={['home']}
            onClick={(e) => clickedmenu(e.key)}
            className="menu-bar"
        >
            <Outlet/>
        </Menu>         
        
    );
}

export default MenuList;
