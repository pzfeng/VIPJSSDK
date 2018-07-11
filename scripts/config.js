const path = require('path')
const resolve = _path => {
    return path.resolve(__dirname, '../', _path)
}
const buble = require('rollup-plugin-buble')
const uglify = require('rollup-plugin-uglify')

const builds = {
    'full-dev': {
        entry: resolve('src/index.js'),
        dest: resolve('dist/vip.js'),
        format: 'cjs'
    },
    'full-runtime': {
        entry: resolve('src/index.js'),
        dest: resolve('dist/vip.runtime.js'),
        format: 'umd'
    },
    'full-prod': {        
        entry: resolve('src/index.js'),
        dest: resolve('dist/vip.min.js'),
        format: 'umd'
    }
}

function genOptions(name){
    const opts = builds[name]
    let inputOptions = {
        input: opts.entry,
        plugins: [
            buble()
        ]
    }

    // 压缩版
    if (/min\.js$/.test(opts.dest)) {
        inputOptions.plugins.push(uglify.uglify())
    }

    let outOptions = {
        file: opts.dest,
        format: opts.format,        
        name: opts.moduleName || 'VIP'
    }

    return {
        inputOptions,
        outOptions
    }
}

exports.getAllBuilds = () => Object.keys(builds).map(genOptions)