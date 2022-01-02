const fs = require('fs')

const readStream = fs.createReadStream('./tet.txt')

readStream.on('error',function(err){
   throw new Error(err)
})

readStream.pipe(process.stdout).on('error',function(err){
    console.log('pipe broken',err)
})