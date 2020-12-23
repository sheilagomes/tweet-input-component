let tweetText = document.getElementById("string");
tweetText.addEventListener('keydown', function(event) {
	document.getElementById("counterFooter").innerHTML = `${tweetText.value.length}/140`;
	document.getElementById("counterFooter").classList.remove("red");
	document.getElementById("btn").classList.remove("buttonDisabled");
	if (tweetText.value.length > 120) {
		document.getElementById("counterFooter").classList.add("red");
	}
	if (tweetText.value.length > 140) {
		document.getElementById("btn").classList.add("buttonDisabled");
	}
});