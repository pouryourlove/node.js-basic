//Path module
import path from "path"

console.log(path.basename("c:\\nodejs\\index.js"))
//index.js <- get the last portion of the path
console.log(path.basename("c:\\nodejs\\app.js", ".js"));
//app

console.log(path.dirname("c:\\nodejs\\courses\\app.js"));
//c:\nodejs\courses

console.log(path.extname("c:\\nodejs\\courses\\app.js"));
//.js <- extension name

console.log(path.join("c:", "yuuka", "courses", "node-js"));
//c:\yuuka\courses\node-js

//GO UP A LEVEL
console.log(path.join("c:", "yuuka", "courses", "node-js",".."));
//c:\yuuka\courses
console.log(path.join("c:", "yuuka", "courses", "node-js", "..",".."));
//c:\yuuka
console.log(path.normalize("c:\\\courses\\node.js\\store\\features"));
// c:\courses\node.js\store\features
console.log(path.parse("c:\\nodejs\\courses\\app.js"));
/*{
  root: 'c:\\',
  dir: 'c:\\nodejs\\courses',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}
*/
console.log(path.parse("c:\\nodejs\\courses\\app.js").base);
//app.js

