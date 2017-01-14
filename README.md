# Astrolabe
This is an API that provides information about technical conferences worldwide. You can start browsing here [https://fiunchinho.github.io/astrolabe/conferences.json](https://fiunchinho.github.io/astrolabe/conferences.json) , and just follow the links.

# Add more conferences
Pull requests are more than welcomed! Just update the `conferences.json` file, and execute the `build` script to automatically generate all the conferences.

# Usage
Using data from `conferences.json', we generate the `conferences` folder with information for all conferences. That way we can use [Github Pages to serve the content](https://fiunchinho.github.io/astrolabe/conferences.json).

If you want to run your own server dynamically, instead of using auto generated information, you need NodeJS

```bash
node app.js
```
