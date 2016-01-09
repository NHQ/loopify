var master = new AudioContext
var loopy = require('./')(master)

// add and play methods

loopy.add({ // load from relative path
  'perc1' : 'drum1.wav',
  'perc2' : 'drum2.wav'
}, function(err){ // callback happens after all downloads complete

  // play returns the web audio source node
  var src1 = loopy.play('perc1')
  var src2 = loopy.play('perc2')
  src1.playbackRate.value = .5

})
