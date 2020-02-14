# aliyun-auto-login-extension

阿里云子账户自动登录的插件

## 说明

平时很依赖阿里云 Web 系统的朋友会发现，~阿里云的账号 session 太短，几乎过几个小时就得重新登录~ （现在可能也得每天登录）。使用该插件可以通过非官方渠道解决该问题。

### 功能特性

* 在主账户登录界面上，增加子账户登录入口
* 访问子账户登录页面时，会使用在插件中填写的用户名密码自动登录
* 登出判断，避免重复自动登录

## 如何运行项目

1. 使用 `git clone` 下载本项目的代码，并进入到项目根目录
1. 使用 `npm install` 安装依赖
1. 使用 `npm run build` 输出 build 文件夹
1. 在 chrome 中打开 `chrome://extensions/` 页面
1. 选中开发者模式，加载已解压的扩展程序...，选择项目中的 build 文件夹

## 开发

```
npm run watch
```

## 打包

安装 glup 打包工具

```
npm install --global gulp-cli
```

```
# 输出 build 文件
npm run build

# 输出 zip 压缩包
npm run dist
```

### chrome 浏览器打包

1. 访问 chrome://extensions/
2. 点击打包扩展程序
3. 扩展根目录选择 `$dir/build/chrome`
4. 私钥文件选择 `$dir/build/aliyun-auto-login.pem` (git 不提交，维护者自己管理)
