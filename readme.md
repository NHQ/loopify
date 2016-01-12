# loopify

A web audio sample loader n looper.  See [entry.js](entry.js) for use.

To test run, clone and do

```
npm install 
npm run bundle
ecstatic /public
```

to install ecstatic, do

```
npm install -g ecstatic
```

## api

initialize loopify with a master audio context

```js
var master = new AudioContext
var loopify = require('loopify')(master)
```

### methods

#### loopify.add

accepts an object with key/value pairs where key is the loop name, and value is either a URI string for the resource, or a file ArrayBuffer (input file, drag and drop)

accepts a second param, a function that will be called after all the files have been fetched / converted to Audio Nodes

#### loopify.play(string)

accepts a string corresponding to the name of a loop from loopify.add

### properties

#### loopify.loops

an object containing reference to all the loops by name
