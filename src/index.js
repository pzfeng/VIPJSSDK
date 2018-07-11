import * as Config from './config'
import log from './log'
import {isObject} from './utils'

function checkConfig (config) {
    if (!config.vp || !config.vc || !config.appid || !config.redirectURL) {
        let err = []

        !config.vc && err.push(Config.ERRORINFO.vc)
        !config.vp && err.push(Config.ERRORINFO.vp)
        !config.appid && err.push(Config.ERRORINFO.appid)
        !config.redirectURL && err.push(Config.ERRORINFO.redirectURL)

        log(err.join('\n'), !!config.debug ? 'debug' : 'error')            
        return false
    }

    return true
}

let VIP = {
    login (config = {}, flow = []) {
        let _flow
      
        if (!isObject(config)) {
            log('config 必须是一个对象', 'error')
            return 
        }

        config = Object.assign(Object.assign({}, Config.DEFAULTCONFIG), config)

        if (checkConfig(config)) {                

            if (flow.length) {
                flow = flow.filter(v => {
                    return !!v
                })

                _flow = flow.join('_')
            }

            const URL = `//${Config.HOST[config.env]}.myfuwu.com.cn/login?vc=${config.vc}&vp=${config.vp}&appid=${config.appid}&redirect_uri=${encodeURIComponent(config.redirectURL)}&flow=${_flow || ''}`

            window.location.replace(URL)
        }
    },

    membership (config = {}) {
        this.login(config, ['membership'])
    },

    auth (config = {}) {
        this.login(config, ['auth'])
    }
}


export default VIP