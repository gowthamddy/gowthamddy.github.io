(function () {

var names = ["gaddam", "gowtham", "geetha", "karthik", "nikhil", "vishnu", "srihari", "tharun", "nithin", "umesh"];

for (var i = 0; i < names.length; i++) {

  
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'g') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();