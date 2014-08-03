![Interactive Framework Logo](http://rkjha.com/cdn/logo.png)
=========

interactive-framework  is a light weight web application framework for interactive developers. Create a static web server with in a minute.

Features : 
---------
  - Easy to install 
  - No configuration required
  - Less dependency


Version
----

0.0.4

Dependency
----

* commander
* ncp
* mkdirp

Installation
--------------

```sh
npm install interactive-framework

```
Usage
-----

```
var interactive = require('interactive-framework');
interactive.listen(<port>);

```

Options
---------------------
Default available options that you can override by your own prefrence.

Default options

```
 {
	appdir : './app/',
	errorpage : '404.html',
	homepage :'index.html',
	host : 'localhost',
	port : '3000'
}
```
You can override options using

```
interactive.config = {
    // JSON Object
};

```
    
App generator
---------------
We are providing a handy quickstart project generator feature with module. You just need to install interactive-framework globally with npm and you'll have option to generate app anywhere on your machine with just few command written below.

```
$ npm install interactive-framework -g
$ interactive-framework -c < project name || dir path >
$ cd < project name || dir path >
$ npm install
$ node app

```

License
----

MIT


Credit
---------
[Rajesh Jha] rkjha.it.in@gmail.com

