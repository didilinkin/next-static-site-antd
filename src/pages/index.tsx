/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2020-10-13 12:38:13
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2023-02-15 23:45:32
 * @Description:
 */
import React from 'react'
import waves from 'vanta/dist/vanta.waves.min'
import { Layout, Space, Typography, Button, FloatButton, Table, Modal } from 'antd'
import {
  GithubFilled,
  GitlabFilled,
  ZhihuCircleFilled,
  createFromIconfontCN,
  ControlFilled,
  GlobalOutlined,
} from '@ant-design/icons'

import _ from 'lodash'
const { dependencies } = require('../../package.json')

const { Header, Footer, Content } = Layout
const { Title } = Typography
const IconFont = createFromIconfontCN({
  scriptUrl: 'https://at.alicdn.com/t/c/font_3896197_l7m36db3j6s.js?spm=a313x.7781069.1998910419.53&file=font_3896197_l7m36db3j6s.js',
})

import dayjs from 'dayjs'
// import 'dayjs/locale/zh-cn' // 导入本地化语言
dayjs.locale('zh-cn') // 使用本地化语言

const headerStyle: React.CSSProperties = {
  textAlign: 'left',
  color: '#fff',
  paddingInline: 50,
  paddingTop: '.5em',
  lineHeight: '64px',
  backgroundColor: '#424242',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'left',
  minHeight: 120,
  lineHeight: '120px',
  paddingLeft: 50,
};

const footerStyle: React.CSSProperties = {
  height: 100,
  textAlign: 'left',
  color: '#fff',
  backgroundColor: '#424242',
};

const titleSyle: React.CSSProperties = {
  margin: '.5em 0',
  fontSize: '1.6em',
  color: '#FFF',
}

const floatButtonStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '3em',
  right: '3em',
}

interface IProps {
  // 国际化
  locale: 'zhCN' | 'enUS'
  handleLocalClick: Function
  // 主题
  isDarkMode: Boolean
  handleThemeClick: Function
}
interface IState {
  open: boolean
}

export default class Index extends React.Component<IProps, IState> {
  private vantaRef: React.RefObject<HTMLInputElement>
  private vantaEffect: any
  constructor(props: any) {
    super(props)
    this.vantaRef = React.createRef()
    this.state = {
      open: false,
    }
  }
  componentDidMount() {
    this.vantaEffect = waves({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      // 自定义
      // color: this.props.isDarkMode ? '#141414' : '#1677ff',
      shininess: '10.00',
      waveHeight: '20.00',
      waveSpeed: '1.00',
      zoom: '0.65',
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }

  render() {
    const columns = [
      {
        title: 'Technologies',
        dataIndex: 'technologies',
      },
      {
        title: 'Version',
        dataIndex: 'version',
      },
    ]

    const technologiesList = _.keys(dependencies).map((key: string) => _.assign({}, {
      key,
      technologies: key,
      version: _.get(dependencies, key)
    }))

    // Modal
    const showModal = () => this.setState({ open: true })
    const hideModal = () => this.setState({ open: false })

    return (
      <div ref={this.vantaRef} className="s-page-1">
        {/* AntD */}
        <Space
          size={[0, 48]}
          direction="vertical"
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <Layout style={{
            height: '100%',
            background: 'transparent',
          }}>
            <Header style={headerStyle}>
              <Title style={titleSyle}>
                {this.props.locale === 'zhCN'
                  ? '欢迎'
                  : 'Welcome'}
              </Title>
            </Header>

            {/* 内容部分 */}
            <Content style={contentStyle}>
              <Space direction="vertical">
                <Button
                  shape="round"
                  icon={<GithubFilled />}
                  size={"large"}
                  onClick={() => {
                    window.open('https://github.com/didilinkin', '_blank')
                  }}
                >
                  Github
                </Button>
                <Button
                  disabled
                  shape="round"
                  icon={<GitlabFilled />}
                  size={"large"}
                  onClick={() => {
                    window.open('http://gitlab.didilinkin.cn', '_blank')
                  }}
                >
                  Gitlab
                </Button>
                <Button
                  shape="round"
                  icon={<ZhihuCircleFilled />}
                  size={"large"}
                  onClick={() => {
                    window.open(
                      'https://www.zhihu.com/people/yan-xiao-di-41',
                      '_blank'
                    )
                  }}
                >
                  知乎
                </Button>
                <Button
                  shape="round"
                  size={"large"}
                  disabled
                  icon={<IconFont type="icon-steam" />}
                >
                  “玩家宝” 小程序后台
                </Button>
                {/* 国际化 Modal */}
                <Button
                  shape="round"
                  size={"large"}
                  icon={<GlobalOutlined />}
                  onClick={showModal}
                >
                  Modal
                </Button>
              </Space>

              <Modal
                title={this.props.locale === 'zhCN' ? '国际化' : 'Locale'}
                open={this.state.open}
                onOk={hideModal}
                onCancel={hideModal}
                // okText="确认"
                footer={[
                  <Button key="okBtn" type="primary" onClick={hideModal}>
                    {this.props.locale === 'zhCN' ? '确认' : 'OK'}
                  </Button>,
                ]}
              >
                <p>
                  {this.props.locale === 'zhCN'
                    ? '此处列出 Ant Design 中需要国际化支持的组件，你可以在演示里切换语言。'
                    : 'Components which need localization support are listed here, you can toggle the language in the demo.'}
                </p>
                <Table dataSource={technologiesList} columns={columns} />
              </Modal>

              {/* 浮动标签 */}
              <FloatButton.Group
                trigger="click"
                type="default"
                style={floatButtonStyle}
                icon={<ControlFilled />}
              >
                {/* 国际化 语言切换 */}
                {this.props.locale === 'zhCN'
                  ? <FloatButton
                      icon={<IconFont type="icon-enUS" />}
                      onClick={() => this.props.handleLocalClick('enUS')}
                    />
                  : <FloatButton
                      icon={<IconFont type="icon-zhCN" />}
                      onClick={() => this.props.handleLocalClick('zhCN')}
                    />}

                {/* 主题颜色切换 */}
                {this.props.isDarkMode
                  ? <Button
                    shape="circle"
                    size="large"
                    icon={<IconFont type="icon-light" />}
                    onClick={() => this.props.handleThemeClick()}
                  />
                  : <Button
                    shape="circle"
                    size="large"
                    icon={<IconFont type="icon-dark" />}
                    onClick={() => this.props.handleThemeClick()}
                  />}
              </FloatButton.Group>
            </Content>
            {/* 底部 */}
            <Footer style={footerStyle}>
              <>
                <p>
                  {'Copyright © '}
                  <a
                    style={{ color: '#FFF' }}
                    href="http://didilinkin.cn/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    didilinkin.cn
                  </a>{' '}
                  {dayjs().get('year')}
                </p>
                <p>
                  <a href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer">
                    鲁ICP备2020037005号-1
                  </a>
                </p>
              </>
            </Footer>
          </Layout>
        </Space>
      </div>
    )
  }
}
