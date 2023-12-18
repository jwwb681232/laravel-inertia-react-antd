import { Link, usePage } from '@inertiajs/react';
import {CaretDownFilled, DoubleRightOutlined, GithubFilled, InfoCircleFilled, LogoutOutlined, PlusCircleFilled, QuestionCircleFilled, SearchOutlined,} from '@ant-design/icons';
import {ProConfigProvider, ProLayout, SettingDrawer,} from '@ant-design/pro-components';
import { css } from '@emotion/css';
import {UserOutlined, CrownFilled, SmileFilled, TabletFilled,} from '@ant-design/icons';
import {ConfigProvider, Divider, Dropdown, Input, Popover, theme,} from 'antd';
import React, { useState } from 'react';

const Item = (props) => {
    const { token } = theme.useToken();
    return (
        <div
            className={css`
        color: ${token.colorTextSecondary};
        font-size: 14px;
        cursor: pointer;
        line-height: 22px;
        margin-bottom: 8px;
        &:hover {
          color: ${token.colorPrimary};
        }
      `}
            style={{
                width: '33.33%',
            }}
        >
            {props.children}
            <DoubleRightOutlined
                style={{
                    marginInlineStart: 4,
                }}
            />
        </div>
    );
};

const List = (
    props,
) => {
    const { token } = theme.useToken();

    return (
        <div
            style={{
                width: '100%',
                ...props.style,
            }}
        >
            <div
                style={{
                    fontSize: 16,
                    color: token.colorTextHeading,
                    lineHeight: '24px',
                    fontWeight: 500,
                    marginBlockEnd: 16,
                }}
            >
                {props.title}
            </div>
        </div>
    );
};

const MenuCard = () => {
    const { token } = theme.useToken();
    return (
        <div style={{display: 'flex', alignItems: 'center',}}>
            <Divider style={{height: '1.5em',}} type="vertical"/>
        </div>
    );
};

const SearchInput = () => {
    const { token } = theme.useToken();
    return (
        <div
            key="SearchOutlined"
            aria-hidden
            style={{
                display: 'flex',
                alignItems: 'center',
                marginInlineEnd: 24,
            }}
            onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}
        >
            <Input
                style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: token.colorBgTextHover,
                }}
                prefix={
                    <SearchOutlined
                        style={{
                            color: token.colorTextLightSolid,
                        }}
                    />
                }
                placeholder="搜索方案"
                bordered={false}
            />
            <PlusCircleFilled
                style={{
                    color: token.colorPrimary,
                    fontSize: 24,
                }}
            />
        </div>
    );
};

export default function Authenticated({ header, children }) {
    const { auth } = usePage().props
    const [settings, setSetting] = useState({
        fixSiderbar: true,
        layout: 'mix',
        splitMenus: true,
    });

    const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');
    const [num, setNum] = useState(40);
    if (typeof document === 'undefined') {
        return <div />;
    }
    return (
        <div id="pro-layout" style={{height: '100vh', overflow: 'auto',}}>
            <ProConfigProvider hashed={false}>
                <ConfigProvider getTargetContainer={() => document.getElementById('pro-layout') || document.body}>
                    <ProLayout
                        prefixCls="my-prefix"
                        bgLayoutImgList={[
                            {
                                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                                left: 85,
                                bottom: 100,
                                height: '303px',
                            },
                            {
                                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                                bottom: -68,
                                right: -45,
                                height: '303px',
                            },
                            {
                                src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                                bottom: 0,
                                left: 0,
                                width: '331px',
                            },
                        ]}
                        {...{
                            route: {
                                path: '/',
                                routes: [
                                    {
                                        path: '/admin',
                                        name: '管理页',
                                        icon: <CrownFilled />,
                                        access: 'canAdmin',
                                        component: './Admin',
                                        routes: [
                                            {
                                                path: '/admin/sub-page1',
                                                name: '一级页面',
                                                icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
                                                component: './Welcome',
                                            },
                                            {
                                                path: '/admin/sub-page2',
                                                name: '二级页面',
                                                icon: <CrownFilled />,
                                                component: './Welcome',
                                            },
                                            {
                                                path: '/admin/sub-page3',
                                                name: '三级页面',
                                                icon: <CrownFilled />,
                                                component: './Welcome',
                                            },
                                        ],
                                    },
                                    {
                                        name: '列表页',
                                        icon: <TabletFilled />,
                                        path: '/list',
                                        component: './ListTableList',
                                        routes: [
                                            {
                                                path: '/list/sub-page',
                                                name: '列表页面',
                                                icon: <CrownFilled />,
                                                routes: [
                                                    {
                                                        path: 'sub-sub-page1',
                                                        name: '一一级列表页面',
                                                        icon: <CrownFilled />,
                                                        component: './Welcome',
                                                    },
                                                    {
                                                        path: 'sub-sub-page2',
                                                        name: '一二级列表页面',
                                                        icon: <CrownFilled />,
                                                        component: './Welcome',
                                                    },
                                                    {
                                                        path: 'sub-sub-page3',
                                                        name: '一三级列表页面',
                                                        icon: <CrownFilled />,
                                                        component: './Welcome',
                                                    },
                                                ],
                                            },
                                            {
                                                path: '/list/sub-page2',
                                                name: '二级列表页面',
                                                icon: <CrownFilled />,
                                                component: './Welcome',
                                            },
                                            {
                                                path: '/list/sub-page3',
                                                name: '三级列表页面',
                                                icon: <CrownFilled />,
                                                component: './Welcome',
                                            },
                                        ],
                                    },
                                ],
                            },
                            appList: [
                                {
                                    icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
                                    title: 'Ant Design',
                                    desc: '杭州市较知名的 UI 设计语言',
                                    url: 'https://ant.design',
                                },
                                {
                                    icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
                                    title: 'AntV',
                                    desc: '蚂蚁集团全新一代数据可视化解决方案',
                                    url: 'https://antv.vision/',
                                    target: '_blank',
                                },
                                {
                                    icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
                                    title: 'Pro Components',
                                    desc: '专业级 UI 组件库',
                                    url: 'https://procomponents.ant.design/',
                                },
                                {
                                    icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
                                    title: 'umi',
                                    desc: '插件化的企业级前端应用框架。',
                                    url: 'https://umijs.org/zh-CN/docs',
                                },

                                {
                                    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
                                    title: 'qiankun',
                                    desc: '可能是你见过最完善的微前端解决方案🧐',
                                    url: 'https://qiankun.umijs.org/',
                                },
                                {
                                    icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
                                    title: '语雀',
                                    desc: '知识创作与分享工具',
                                    url: 'https://www.yuque.com/',
                                },
                                {
                                    icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
                                    title: 'Kitchen ',
                                    desc: 'Sketch 工具集',
                                    url: 'https://kitchen.alipay.com/',
                                },
                                {
                                    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
                                    title: 'dumi',
                                    desc: '为组件开发场景而生的文档工具',
                                    url: 'https://d.umijs.org/zh-CN',
                                },
                            ],
                        }}
                        location={{
                            pathname,
                        }}
                        token={{
                            header: {
                                colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
                            },
                        }}
                        siderMenuType="group"
                        menu={{
                            collapsedShowGroupTitle: true,
                        }}
                        avatarProps={{
                            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
                            size: 'small',
                            title: auth.user.name,
                            render: (props, dom) => {
                                return (
                                    <Dropdown
                                        menu={{
                                            items: [
                                                {
                                                    key: 'profile',
                                                    label: (
                                                        <Link href={window.route('profile.edit')}>
                                                            个人信息
                                                        </Link>
                                                    ),
                                                    icon: <UserOutlined />,
                                                },
                                                {
                                                    key: 'logout',
                                                    icon: <LogoutOutlined />,
                                                    label: (
                                                        <Link href={window.route('logout')} method='post' as='div'>
                                                            退出登录
                                                        </Link>
                                                    ),
                                                },
                                            ],
                                        }}
                                    >
                                        {dom}
                                    </Dropdown>
                                );
                            },
                        }}
                        actionsRender={(props) => {
                            if (props.isMobile) return [];
                            if (typeof window === 'undefined') return [];
                            return [
                                <InfoCircleFilled key="InfoCircleFilled" />,
                                <QuestionCircleFilled key="QuestionCircleFilled" />,
                                <GithubFilled key="GithubFilled" />,
                            ];
                        }}
                        headerTitleRender={(logo, title, _) => {
                            const defaultDom = (
                                <a>
                                    {logo}
                                    {title}
                                </a>
                            );
                            if (typeof window === 'undefined') return defaultDom;
                            if (document.body.clientWidth < 1400) {
                                return defaultDom;
                            }
                            if (_.isMobile) return defaultDom;
                            return (
                                <>
                                    {defaultDom}
                                    <MenuCard />
                                </>
                            );
                        }}
                        onMenuHeaderClick={(e) => console.log(e)}
                        menuItemRender={(item, dom) => (
                            <div
                                onClick={() => {
                                    setPathname(item.path || '/welcome');
                                }}
                            >
                                {dom}
                            </div>
                        )}
                        {...settings}
                    >
                        {children}

                        <SettingDrawer
                            pathname={pathname}
                            enableDarkTheme
                            getContainer={(e) => {
                                if (typeof window === 'undefined') return e;
                                return document.getElementById('pro-layout');
                            }}
                            settings={settings}
                            onSettingChange={(changeSetting) => {
                                setSetting(changeSetting);
                            }}
                            disableUrlParams={true}
                        />
                    </ProLayout>
                </ConfigProvider>
            </ProConfigProvider>
        </div>
    );
};
