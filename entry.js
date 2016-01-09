var master = new AudioContext
var loopy = require('./')(master)

loopy.add({
  'perc1' : 'drum1.wav',
  'perc2' : 'drum2.wav'
}, function(err){
  var src1 = loopy.play('perc1', 0)
  var src2 = loopy.play('perc2', .5)
  src1.playbackRate.value = .5
})
