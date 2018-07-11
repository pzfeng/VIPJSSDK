# vip-web-jssdk

> 会员开放平台

## 使用

1. 联系会员组，申请appid
2. 引用vip jssdk
3. 参数说明：
```
# config参数
{
    appid:,         // 在会员组注册过的appid（必填）
    vc:,            // 租户或合同号（必填）
    vp:,            // 公众号ID（必填）
    redirectURL:,   // 回跳地址（不需要encodeURIComponent）（必填）
    debug: false,   // 是否开启debug（true: 错误信息alert，false: 错误信息console）
    env: 'prod'     // 环境选择（dev/beta/prod）
}

# flow参数（Array）
flow指的是需要补充的会员资料，目前可选：membership(会籍)，auth(认证)
```
4. 调用方法：
```
# login 方法
VIP.login(config, [...flow])

# membership方法
VIP.membership(config)

# auth方法
VIP.auth(config)
```

## 开发
``` 
yarn run build 进行代码构建，自动生成min或源代码
```
