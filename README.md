# react-redux-app
My First application on React Redux Framework

##Installation
> Steps for React setup
* npm install --save react react-dom
* npm install --save webpack webpack-dev-server
* npm install --save-dev babel-cli babel-core babel-loader babel-plugin-transform-object-rest-spread babel-preset-es2015 babel-preset-react babel-preset-stage-0 babel-register
* Add babel configuration in package.json
```
"babel": {
    "presets": [
      "es2015",
      "react",
      "stage-0"
    ],
    "plugins": [
      "transform-object-rest-spread"
    ]
  }
```
* Create new webpack config file

```
var webpack = require('webpack');
var path = require('path');
console.log(__dirname);
console.log(path.join(__dirname, './src/index.js'));
module.exports = {
	entry: [
		path.join(__dirname, './src/index.js')
	],
	module:{
	    loaders:[
	        {
	            test:/\.(js|jsx)$/,
	            exclude:/node_modules/,
	            loader:'babel-loader'
	        },
	        {
	            test:/\.less$/,
	            loaders:["style-loader", "css-loader","less-loader"]
	        }
	    ]
	},
	output:{
	    path: __dirname+'/dist',
	    filename: 'bundle.js'
	},
	devServer: {
        contentBase: __dirname,
        historyApiFallback: true
    }
}
```
* npm install --save-dev style-loader css-loader less-loader
* npm install --save-dev less
* Create an index.html, which contains a placeholder <div> tag where we can mount React Components
```
<!DOCTYPE html>
<html>
    <head>
        <title> Ideal React Seed </title>
    </head>
    <body>
        <div id="app"></div>
        <script type="text/javascript" src="/bundle.js"></script>
    </body>
</html>
```
* Update package.json to add scripts for running application
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev" : "webpack-dev-server --config webpack.config.js"
  },
```
