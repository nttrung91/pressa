/*
 * TTS (Text to Speed)
 */

 var srcHead = "http://api.voicerss.org/?key=8aeeba23cecf4c36a423044b3e6237f6&src=",
     srcTail = "&hl=en-gb",

     sourceHead = '<source src="',

     sourceTail = ' ">';


/*
<audio id="beep-one" controls="controls" preload="auto">
        <source src="audio/beep.mp3">
        <source src="audio/beep.ogg">
        Your browser isn't invited for super fun time.
      </audio>
*/

$(".btnVerb").click(function(e) {

  var $this = $(this),
      $sound = $("#sound"),
      src = "",
      keywords = "",
      audio = "";

  // Clear all previous sounds
  $sound.empty();

  // Store the word
  keywords = $this.data("tts-value");


  src = srcHead + keywords + srcTail;

  audio = sourceHead + src + sourceTail;

  $sound.append(audio);
  $('#sound')[0].play();

  e.preventDefault();
});

