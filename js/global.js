/*
 * TTS (Text to Speed)
 */

 var srcHead = "http://api.voicerss.org/?key=8aeeba23cecf4c36a423044b3e6237f6&src=",
     srcTail = "&hl=en-gb",
     sourceHead = '<source src="',
     sourceTail = ' ">',

     /* Set of buttons */
     $goBtn = $("#go"),
     $verbBtn = $(".btnVerb"),
     $nounBtn = $(".btnNoun"),

     /* Result Field */
     $result = $(".result"),

    /* Check if already speak */
     $checkIfSpeak = false;
     ;


/* Add keywords to result field when press on verb or noun button */
$verbBtn.click(function() {
  addKeywordToResult($(this));
});

$nounBtn.click(function() {
  addKeywordToResult($(this));
});


/* Go Button, when press -> make sound */
$goBtn.click(function(e) {
  var $sound = $("#sound"),
      src = "",
      keywords = "",
      audio = "";

  // Clear all previous sounds
  $sound.empty();

  // Build up the API Link
  src = srcHead + $result.text() + srcTail;

  // Create audio object
  audio = sourceHead + src + sourceTail;

  // Append the object to the DOM
  $sound.append(audio);

  // Make it play sound
  $('#sound')[0].play();

  // Check speed
  $checkIfSpeak = true;

  e.preventDefault();
});


/* Add keywords to result */
function addKeywordToResult(element, e){
  var $element = element,
      currentResult = "";

  if($checkIfSpeak){
    // Clear the result box
    $result.empty();
    $checkIfSpeak = false;
  }

  // Store the current text in the result
  $currentResult = $result.text();


  // Store the word
  keywords = $element.data("tts-value");

  $currentResult = $currentResult + keywords + " ";

  $currentResult = $currentResult.replace("+"," ");

  $result.text($currentResult);

}

