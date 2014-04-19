/*
 * TTS (Text to Speed)
 */

 var srcHead = "http://api.voicerss.org/?key=8aeeba23cecf4c36a423044b3e6237f6&src=",
     srcTail = "&hl=en-gb",

     sourceHead = '<source src="',

     sourceTail = ' ">',

     $goBtn = $("#goBtn"),

     $verbBtn = $(".btnVerb"),

     $nounBtn = $(".btnNoun"),

     $result = $(".result");


/*
<audio id="beep-one" controls="controls" preload="auto">
        <source src="audio/beep.mp3">
        <source src="audio/beep.ogg">
        Your browser isn't invited for super fun time.
      </audio>
*/



$verbBtn.click(function(e) {

  var $this = $(this),
      currentResult = "";


  // Store the current text in the result
  $currentResult = $result.text();


  // Store the word
  keywords = $this.data("tts-value");

  $currentResult = $currentResult + keywords + " ";

  $currentResult = $currentResult.replace("+"," ");

  $result.text($currentResult);


  e.preventDefault();
});

$nounBtn.click(function(e) {

  var $this = $(this),
      currentResult = "";


  // Store the current text in the result
  $currentResult = $result.text();


  // Store the word
  keywords = $this.data("tts-value");

  $currentResult = $currentResult + keywords + " ";

  $currentResult = $currentResult.replace("+"," ");

  $result.text($currentResult);


  e.preventDefault();
});


/* Go Button */
$goBtn.click(function(e) {
  var $sound = $("#sound"),
      src = "",
      keywords = "",
      audio = "";

  // Clear all previous sounds
  $sound.empty();

  src = srcHead + $result.text() + srcTail;

  audio = sourceHead + src + sourceTail;

  $sound.append(audio);
  $('#sound')[0].play();

  e.preventDefault();
});


