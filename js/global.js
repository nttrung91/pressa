/*
 * Play the sound
 */

 var ttsUrl = "http://api.voicerss.org/?key=8aeeba23cecf4c36a423044b3e6237f6&src=";

 var keywords = "";

 var ttsUrl2 = "&hl=en-gb";

 var audio1 = '<audio controls="controls" preload="auto"><source src="';

 var audio2 = ' ></audio>';


/*
<audio id="beep-one" controls="controls" preload="auto">
        <source src="audio/beep.mp3">
        <source src="audio/beep.ogg">
        Your browser isn't invited for super fun time.
      </audio>
*/

$(".btnVerb").click(function(e) {
  var $this = $(this);
  keywords = $this.data("tts-value");
  ttsUrl = ttsUrl + keywords + ttsUrl2;

  console.log(ttsUrl);

  var audio = audio1 + ttsUrl + audio2;

  $('body').append(audio);
  console.log(audio);

  e.preventDefault();
});

