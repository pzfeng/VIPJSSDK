// 环境域名
const HOST = {
    dev: 'vip-web-test',
    beta: 'vip-web-prod-beta',
    prod: 'vip-web'
}

// 错误信息
const ERRORINFO = {
    'vp': 'vp（公众号publicId）不能为空',
    'vc': 'vc（租户或合同号）不能为空',
    'appid': 'appid（应用ID）不能为空，',
    'redirectURL': 'redirectURL不能为空'
}

// 默认参数
const DEFAULTCONFIG = {
    env: 'prod',
    debug: false
}

export {
    HOST,
    ERRORINFO,
    DEFAULTCONFIG
}