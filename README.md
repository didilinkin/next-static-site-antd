<!--
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2020-10-13 12:38:03
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2023-02-10 01:51:48
 * @Description: 
-->
# Basic export example

This example shows the most basic usage of `next export`. Without `exportPathMap`.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/basic-export)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example basic-export basic-export-app
# or
yarn create next-app --example basic-export basic-export-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## 已完成的任务

- 图标
- 资源文件夹 迁移
- 网站统计功能
- 跳转到 github

## TODO

- 国际化
  

## 统计 备注（需要手动修改）

```html
<!-- 以下内容之前插入 统计和样式代码 -->
<meta charset="utf-8" />

<!-- 百度统计 -->
<script>
  var _hmt = _hmt || []
  ;(function () {
    const hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?7267ca88f14bdb65d7e15a842d8be5e5'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  })()
</script>
```

### Nginx 更新命令
```bash
service nginx restart
```

### 参考文章

* [如何使用蚂蚁设计 5.0 切换深色主题 (成功实践)](https://betterprogramming.pub/how-to-toggle-dark-theme-with-ant-design-5-0-eb68552f62b8)
