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
- sentry 监控
- 网站统计功能

## TODO

- 国际化
- 404
- 500
  跳转到 github

## 统计 备注（需要手动修改）

> https://web.umeng.com/main.php?c=site&a=show
> 底部加入代码

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
<!-- 站长统计 -->
<script type="text/javascript">
  document.write(
    unescape(
      "%3Cspan id='cnzz_stat_icon_1279350006'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/stat.php%3Fid%3D1279350006' type='text/javascript'%3E%3C/script%3E"
    )
  )
</script>
<style type="text/css">
  body > span {
    display: none;
  }
</style>
```

#### 上传命令

```bash
scp /out/new.zip root@47.105.184.229:/root/production/html
```
