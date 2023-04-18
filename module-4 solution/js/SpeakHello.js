(function (window) {  
    var helloSpeaker = {};
    var speakWord = "Hello world";
    
    helloSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }
        window.helloSpeaker = helloSpeaker;
    })(window);
