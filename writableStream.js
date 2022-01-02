const {Writable} = require('stream')

const outStream = new Writable({
    write(chunk,encoding,callback){
        console.log('from write',chunk.toString())
        callback()
    }
})

process.stdin.pipe(outStream)