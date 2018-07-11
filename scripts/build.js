const Rollup = require('rollup')
let builds = require('./config').getAllBuilds()


function goBuild(){
    let total = builds.length
    let built = 0
    let next = () => {
        buildEntry(builds[built])
        .then(() => {
            built++
            if (built < total) {
                next()
            }
        })
    }
    
    next()
}

goBuild()

async function buildEntry(options){
    const bundle = await Rollup.rollup(options.inputOptions);

    await bundle.write(options.outOptions);
}
