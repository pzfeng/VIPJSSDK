export default function log (msg, type='log') {
    const cse = window.console

    if(cse) {
        switch (type) {
            case 'error': 
                cse.error(msg)
                break
            case 'warn':
                cse.warn(msg)
                break
            case 'debug': 
                alert(msg)
                break
            default:
                cse.log(msg)
        }
    }
}