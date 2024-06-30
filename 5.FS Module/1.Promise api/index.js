import * as fs from 'fs/promises';

//Creating Directory / Folder

// try {
//     await fs.mkdir('c:\\nodejs\\courses',{rescursive: true})
//     console.log('Folder created ...')
    
// } catch (error) {
//     console.log(error)
// }

//Read the content

// try {
//     const files = await fs.readdir("c:\\nodejs");
//     for (const file of files) {
//         console.log(file)
//     }
// } catch (error) {
//     console.log(error)
// }

//Remove folder / directory
//the folder should be empty

// try {
//     await fs.rmdir("c:\\nodejs\\Courses")
// } catch (error) {
//     console.log(error)
// }

//Create and Write Files
//by default it will replace it if we change the 'Hello Nodejs' part

// try {
//   await fs.writeFile('README.md','Hello Nodejs')
// } catch (error) {
//   console.log(error);
// }

//Read File
// try {
//     const data = await fs.readFile('README.md',"utf-8")
//     console.log(data)//buffer without utf-8
// } catch (error) {
//   console.log(error);
// }

//Append data
// try {
//   await fs.appendFile('README.md',"Nodejs is the best")
// } catch (error) {
//   console.log(error);
// }

//Copy File
// try {
//   await fs.copyFile('README.md', 'info.txt')
// } catch (error) {
//   console.log(error);
// }

//Get File information
try {
  const info = await fs.stat("info.txt")
    //   console.log(info)  
    console.log(info.isDirectory());//false
    console.log(info.isFile());//true
} catch (error) {
  console.log(error);
}