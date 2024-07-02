// without callback

import fs from 'fs'
// console.log('start')
// let data = fs.readFileSync('test.txt')
// console.log(data.toString());

// console.log("end")

// with callback


console.log('start')
fs.readFile('test.txt', 'utf-8', (err,res) => {
    err? console.log(err) : console.log(res)
})
console.log("end")