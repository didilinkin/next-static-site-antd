/*
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2023-02-06 17:10:24
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2023-02-15 19:47:02
 * @Description:
 */
import '@/styles/globals.css'

import React, { useState } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { StyleProvider } from '@ant-design/cssinjs'

// 定制主题
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider, theme } from 'antd'
const { defaultAlgorithm, darkAlgorithm } = theme

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  // theme
  const [isDarkMode, setIsDarkMode] = useState(false)
  const handleThemeClick = () => setIsDarkMode((previousValue) => !previousValue)
  // locale
  const [locale, setLocal] = useState('zhCN')
  const handleLocalClick = (value: 'zhCN' | 'enUS') => setLocal(value)
  return (
    <ConfigProvider
      locale={locale === 'zhCN' ? zhCN : enUS}
      theme={{ algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}
    >
      <StyleProvider hashPriority='high'>
        <>
          <Head>
            <title>didilinkin 主页</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <meta
              name="keywords"
              content="didilinkin，哈希肯，yanxiaodi，Sam Fisher, 晓迪"
            />
            <meta
              name="description"
              content="didilinkin.cn 是 didilinkin的主页; 哈希肯, yanxiaodi, 晓迪, 929213769@qq.com, didilinkin@hotmail.com"
            />
          </Head>
          <Component
            {...pageProps}
            isDarkMode={isDarkMode}
            handleThemeClick={handleThemeClick}
            locale={locale}
            handleLocalClick={handleLocalClick}
          />
        </>
      </StyleProvider>
    </ConfigProvider>
  )
}
