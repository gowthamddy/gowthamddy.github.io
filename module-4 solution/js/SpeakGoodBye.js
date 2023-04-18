(function (window){
    var byeSpeaker = {};
    var speakWord = "Good ggr";
    
    byeSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }
     
     window.byeSpeaker = byeSpeaker;
    })(window);
