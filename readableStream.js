const fs = require('fs')

const readerStream = fs.createReadStream('./test.txt')

readerStream.setEncoding('UTF8'); // Set the encoding to be utf8. 

readerStream.on('open',function(){
    console.log('file is opened')
    readerStream.pause()
    setTimeout(() => {
        readerStream.resume()
    }, 1000);
})

readerStream.on('data',function(chunk){
    console.log(chunk.toString())
})

readerStream.on('pause',function(){
    console.log('Stream is paused')
})

readerStream.on('resume',function(){
    console.log('Stream is in flowing mode')
})

readerStream.on('end',function(){
    console.log('Stream ended')
})

readerStream.on('close',function(){
    console.log('Stream is closed')
})