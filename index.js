var url = require('url')
var sample = require('jsynth-file-sample')
var concat = require('concat-stream')
var xhr = require('xhr')

module.exports = loopify 

function loopify (master, size){
  if(!(this instanceof loopify)) return new loopify(master, size)

  this.bufSize = size
  this.master = master
  this.loops = {}
}

loopify.prototype.add = function(loops, cb){
  var ct = Object.keys(loops).length
  for(l in loops){
    var url = loops[l]
    var name = l
    var self = this
    ;(function(name){
      self.fetch(url, function(err, src){
        if(!err) self.loops[name] = {src: src}
        ct--
        if(ct===0) cb(null)
    })})(name)
  }
}


loopify.prototype.play = function(name, params){
  var src = this.loops[name].src
  src.loop = true
  src.connect(this.master.destination)
  src.start(this.master.currentTime)
  return this.loops[name].src
}

loopify.prototype.fetch = function (loc, cb){
  var self = this
  if(typeof loc === 'string'){
    xhr.get(url.resolve(window.location.origin, loc), {responseType: 'arraybuffer'}, function(err, res){
      sample(self.master, res.body, function(err, src){
        cb(null, src)
      })
    })
  }
  else{ // it's a file buffer
    sample(self.master, loc, function(err, src){
      cb(err, src)
    })
  }
}

