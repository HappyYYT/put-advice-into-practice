// modules & require
const xyz = require("./people"); // [ 'yyt', 'hui', 'ch' ]

console.log(xyz); // xyz's value decided by ./people

// how can I get 'people' from people.js in this modules.js?

// add 'module.exports = people' in people.js , so xyz's value has turned '{}' to 'people'

// add 'modele.exports = {people, age}' in people.js ,
// so xyz's value has turned to '{ people: [ 'yyt', 'hui', 'ch' ], ages: [ 20, 25, 30, 35 ] }'

console.log(xyz.people, xyz.ages);

//here awesome now a nice way to import multiple different things from a different file is
// to ues destructuring:解构
const { people, ages } = require("./people");
console.log(people, ages);

// now We see how to import our own made files
// but no js also comes with some core modules built into it
// and we can also require those as well for added functionally
// so let me down here say for example
const os = require("os");
console.log(os);
// this is an object with a lot of information about the current operating system that this is running on
// so I could save this and say node modules

console.log(os.platform(), os.homedir()); // win32 C:\Users\10237
// we can see that the platform is Windows win32 and this is the home directory on my computer for slash users
// it could be useful if you need to find out information about the operating system
// and there's loads more things on that you can play around with it and see for yourself
// so there are several different core modules in nodeJs .
// OS is one of them about the operating system and another one is the file system
