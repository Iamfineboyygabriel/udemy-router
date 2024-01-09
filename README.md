please take note on how to create a fake API server
1) install "npm i json-server"
2) and then navigate to your package.json under the "script array"
add "server":'json-server --watch data/cities.json --port 8000 -delay 500'

here the "--delay 500" is not really important , it is just to make it look as if we r fetching it from a real api

then to run , we use "npm run server"