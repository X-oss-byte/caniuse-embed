var caniuse_embeds = document.getElementsByClassName("ciu_embed");

function calcIframeHeight(embed) {
	var parentWidth = embed.parentNode.offsetWidth; 
	var iframeHeight = '430px';

	if (parentWidth < 350) {
		iframeHeight = '620px';
	} 
	else if (parentWidth < 400) {
		iframeHeight = '610px';
	} 
	else if (parentWidth < 500) {
		iframeHeight = '580px';
	} 
	else if (parentWidth < 600) {
		iframeHeight = '550px';
	}
	else if (parentWidth < 650) {
		iframeHeight = '550px';
	}
	else if (parentWidth < 710) {
		iframeHeight = '520px';
	}

	return iframeHeight;
}

for (var i = 0; i < caniuse_embeds.length; i++) {
	var embed = caniuse_embeds[i];
	var feature = embed.dataset.feature;
	var iframeHeight = calcIframeHeight(embed);

	if (!feature) {
		embed.innerHTML = "A feature was not included. Add a caniuse feature ID to the 'data-feature' attribute of the element with class 'ciu_embed'.";
	} else {
		var iframe = '<iframe src="http://caniuse.bitsofco.de/embed/index.html?feat='+feature+'" frameborder="0" width="100%" height="'+iframeHeight+'"></iframe>';
		embed.innerHTML = iframe;
	}
}

window.onresize = function(event) {
	for (var i = 0; i < caniuse_embeds.length; i++) {
		var embed = caniuse_embeds[i];
		var iframeHeight = calcIframeHeight(embed);
		embed.childNodes[0].height = iframeHeight;
	}
};