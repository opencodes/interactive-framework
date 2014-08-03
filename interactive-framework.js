var http = require('http');
var fs = require('fs');
var interactive = function(){	
	var _this = this;
	//Default options
	_this.options = {
			appdir : './app/',
			errorpage : '404.html',
			homepage :'index.html',
			host : 'localhost',
			port : '3000'
	};
	
	/**
	 *@param options object
	 *descriptions : Set user config 
	 */
	_this.config = function(options){
		for(var k in options){
			if(options.hasOwnProperty(k)) { //for in loop also checks the objects prototype
				if(options.k !== "" && options.k !== undefined){ 
					_this.options[k] = options[k];
				}
			}
		}
	};
	
	/**
	 * @param port
	 * @param host
	 * description : Create server and listen on specified port.
	 */
	_this.listen = function(port,host){
		var host = host || _this.options.host;
		var port = port || _this.options.port;
		var server = http.createServer(function(request, response){
			var errorHtml = "<h1>Sorry! Requested page not found on the server!</h1>";
			var reqfile = request.url.substring(1) || _this.options.homepage;
			var contenttype = reqfile.split('.')[1];
			var filename = _this.options.appdir + reqfile;
			fs.readFile(filename, function(err, data){
				if(!err){
					response.writeHead(200, {'Content-Type':'text/'+contenttype});
					response.end(data);
				}else{
					response.writeHead(404, {'Content-Type':'text/html'});
					fs.readFile(_this.options.appdir + _this.options.errorpage, function(err, data){
						if(!err){
							response.writeHead(200, {'Content-Type':'text/'+contenttype});
							response.end(data);
						}else{
							response.end(errorHtml);
						}
					});
					
				}
			});
			return this;
		});
		
		server.listen(port, host, function(){
			console.log('Server listening on '+ host +':'+ port);
		});
	};
	
	return _this;
	
};

module.exports = interactive();

