language order: Machine code -> Assembly Language -> C++

### JavaScript in Browsers:

v8 engine is written in C++ by google and compiles JavaScript into machine code.

but JavaScript can't run outside browsers, so Node.js is coming.

Node.js is also written in C++ and wraps the v8 engine,
so this v8 engine that's in browsers also lives inside node as well.

### Node in Server:

now because node is written in C++ it can run directly on our computer, so by installing and running node on our computer, it can take our JavaScript.

![node progress]()

It can run it through the v8 compiler that it has inside it and it compiles our JavaScript into machine code so that in essence we can now run JavaScript directly on a computer or server and not just in a browser but node is more than just a wrapper for the v8 engine.

![node is more than v8]()

    - Read & write files on a computer
    - Connect to a database
    - Act as a server for content

These all the kind of things you'd expect a server-side language to do and now we can do them with JavaScript running through node.

Now remember javascript was originally made for the browser to add interactivity and not to run directly on computers or service.

So normally it can't do all of this stuff but with the help of node, it can.

but on the flip side since we're now using node to run JavaScript outside the browser we lose access to JavaScript features such as the document object model we can't interact with HTMLelements anymore.

but we don't really need to do that when we're running JavaScript on a server and acting as back-end to our website right. so just going back to computers and machine code, node now plugs into the top of this stack with the v8 engine.

![nodeJs]()

so that now we can write JavaScript code on a computer which is then compiled down into machine code forests so that computers can now understand JavaScript and that is freaking awesome.

### The Role of Node.js

what would we actually use it for ?

the role of node in a website is basically to run JavaScript on the back end or server side. 

And then we're going to be handing requests coming in from a browser.

So for example a user might visit your website in a browser now that browser is going to make a request to the server the node server is going to run some kind of JavaScript you'll react to the request and it might communicate maybe with a database or files on the server.

Then it's going to formulate some kind of response and send it right back to the browser now that response could be an HTML page with dynamic data embedded inside it or maybe some CSS and image files etc. 

So basically the node server is running JavaScript on the back end to do all of this. 
So using node in a website is pretty much an alternative now to or the server-side languages like Python, Ruby, PHP etc. 

But the rad benefits of using node over the others :

first of all, if you are already familiar with JavaScript then there's absolutely no need to learn a new server-side language because node is going to taking JavaScript and compiling it down so we can use the same language on the front end

![But why use Nodejs]()

![What will learn]()


