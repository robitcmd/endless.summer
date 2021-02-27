chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
        try {
			var m = setTimeout(";");
            for (var i = 0; i < z; i++) {
                clearTimeout(i);
            }
		} catch (e) {
			console.log(e);
		} 
	}
	}, 10);
});