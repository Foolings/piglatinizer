$( "document" ).ready(function() {
    $("button").click(function(){
        $(".output").text("");
        var sentence =$("input").val();
        var words = sentence.split(' ');
        var vowels = [ 'a', 'e', 'i', 'o', 'u' ];
        words.forEach(function(word){
            var firstLetter=word[0].toLowerCase();
            if (vowels.includes(firstLetter)) {
                console.log(true);
                var vowelWord= word + "ay ";
                $('.output').append(vowelWord);
            }else {
                  console.log(false);
                var conWord= word.slice(1) + firstLetter + "ay ";
                $('.output').append(conWord);

                                            }
        });

    });

});



/*Old Solution

$(document).ready(function() {
	$('#button').on('click', function() {
		clearOutput();
		var input = $('#input').val();
		var inputArray = input.split(' ');
		inputArray.forEach(function (word) {
			var pigLatinWord = wordToPigLatin(word);
			$('#output').append(pigLatinWord + ' ');
		});
	});
});

function wordToPigLatin(word) {
	var vowels = [ 'a', 'e', 'i', 'o', 'u' ];

	var firstLetter = word[0];

	if (vowels.indexOf(firstLetter) > -1) {
		return word + 'ay';
	} else {
		return word.slice(1) + firstLetter + 'ay';
	}
}

function clearOutput() {
	$('#output').empty();
}
*/

