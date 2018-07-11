'use strict';

// 环境域名
var HOST = {
    dev: 'vip-web-test',
    beta: 'vip-web-prod-beta',
    prod: 'vip-web'
};

// 错误信息
var ERRORINFO = {
    'vp': 'vp（公众号publicId）不能为空',
    'vc': 'vc（租户或合同号）不能为空',
    'appid': 'appid（应用ID）不能为空，',
    'redirectURL': 'redirectURL不能为空'
};

var DEFAULTCONFIG = {
    env: 'prod',
    debug: false
};

function log (msg, type) {
    if ( type === void 0 ) type='log';

    var cse = window.console;

    if(cse) {
        switch (type) {
            case 'error': 
                cse.error(msg);
                break
            case 'warn':
                cse.warn(msg);
                break
            case 'debug': 
                alert(msg);
                break
            default:
                cse.log(msg);
        }
    }
}

function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]"
}

function checkConfig (config) {
    if (!config.vp || !config.vc || !config.appid || !config.redirectURL) {
        var err = [];

        !config.vc && err.push(ERRORINFO.vc);
        !config.vp && err.push(ERRORINFO.vp);
        !config.appid && err.push(ERRORINFO.appid);
        !config.redirectURL && err.push(ERRORINFO.redirectURL);

        log(err.join('\n'), !!config.debug ? 'debug' : 'error');            
        return false
    }

    return true
}

var VIP = {
    login: function login (config, flow) {
        if ( config === void 0 ) config = {};
        if ( flow === void 0 ) flow = [];

        var _flow;
      
        if (!isObject(config)) {
            log('config 必须是一个对象', 'error');
            return 
        }

        config = Object.assign(Object.assign({}, DEFAULTCONFIG), config);

        if (checkConfig(config)) {                

            if (flow.length) {
                flow = flow.filter(function (v) {
                    return !!v
                });

                _flow = flow.join('_');
            }

            var URL = "//" + (HOST[config.env]) + ".myfuwu.com.cn/login?vc=" + (config.vc) + "&vp=" + (config.vp) + "&appid=" + (config.appid) + "&redirect_uri=" + (encodeURIComponent(config.redirectURL)) + "&flow=" + (_flow || '');

            window.location.replace(URL);
        }
    },

    membership: function membership (config) {
        if ( config === void 0 ) config = {};

        this.login(config, ['membership']);
    },

    auth: function auth (config) {
        if ( config === void 0 ) config = {};

        this.login(config, ['auth']);
    }
};

module.exports = VIP;
