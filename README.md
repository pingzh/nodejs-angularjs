# barebone_nodejs_angular

## app

### 1. Frontend (recommend bower to install frontend dependencies)
public/ defines angularjs and frontend dependencies

```
npm install -g bower # install bower
cd public/
bower init # create bower.json

# install package and add it to bower.json dependencies
bower install <package> --save # under public/ to run the command

# install package and add it to bower.json devDependencies
bower install <package> --save-dev # under public/ to run the command

# after install the package, do not forget to include them into the index.html
```

### 2. Backend Server
2.1 server.js define the server
2.2 app/ defines nodejs api controllers and models

2.3 npm install # to install all packages in package.json modify your dependencies in package.json
```
npm install <package> --save # save the package into package.json
npm install <package> --save-dev # save the package into package.json as devDependencies
npm install <package> -g # install the package globally
```


2. start the server

```
sudo npm install -g supervisor # install supervisor to auto reload code changes
supervisor server.js # start the server
```


