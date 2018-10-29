$(document).ready(function() {
	var magicNumber;
	var total = 0;
	var wins = 0;
	var losses = 0;
	var redGem;
	var yellowGem;
	var blackGem;
	var greenGem;

	function newNumbers() {
		magicNumber = Math.floor(Math.random() * 77) + 20;
		redGem = Math.ceil(Math.random() * 14);
		yellowGem = Math.ceil(Math.random() * 12);
		blackGem = Math.ceil(Math.random() * 14);
		greenGem = Math.ceil(Math.random() * 12);
	}

	function newGame() {
		newNumbers();
		total = 0;
		$("#magicNumber").text(magicNumber);
		$("#total").text(total);
		$("#gem1").attr("data-gemValue", redGem);
		$("#gem2").attr("data-gemValue", yellowGem);
		$("#gem3").attr("data-gemValue", blackGem);
		$("#gem4").attr("data-gemValue", greenGem);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#outcome").text("");

		//console.log(redGem, yellowGem, blackGem, greenGem);
	}

	function youWin() {
		$("#outcome").text("YOU WIN!");
		wins++;
		$("#wins").text(wins);
	}

	function youLose() {
		$("#outcome").text("YOU LOSE");
		losses++;
		$("#losses").text(losses);
	}

	newGame();

	$(".gemimg").hover(function() {
		$(this).css({opacity: 0.25});
	},
	function() {
		$(this).css({opacity: 1});
	});

	// Function to add the crystal values together
	$(".gemimg").on("click", function() {
		if (total >= magicNumber) {
			return;
		}

		var gemValue = $(this).attr("data-gemValue");
		gemValue = parseInt(gemValue);
		total += gemValue;
		$("#total").text(total);

		if (total === magicNumber) {
			youWin();
		} else if (total > magicNumber) {
			youLose();
		}
	});

	$(".btn").on("click", function() {
		newGame();
	});

});