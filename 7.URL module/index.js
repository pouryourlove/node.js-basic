import {URL} from "url";

const myURL = new URL("https://www.exmaple.com:8080/p/a/t/h?qyery=string#hash");

console.log(myURL.hash) //#hash
console.log(myURL.host) //www.exmaple.com:8080
console.log(myURL.hostname)//www.exmaple.com
console.log(myURL.port)//8080
console.log(myURL.href)//https://www.exmaple.com:8080/p/a/t/h?qyery=string#hash
console.log(myURL.protocol)//https:
console.log(myURL.search)//?qyery=string
console.log(myURL.searchParams)//URLSearchParams { 'qyery' => 'string' }

// Both works the same
console.log(myURL.toString());
console.log(myURL.toJSON());