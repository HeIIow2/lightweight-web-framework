import {toggle} from "./theme.js";
import {start_toggle} from "./popup.js";

document.addEventListener ("DOMContentLoaded", () => {
	// markdown support
	let markdown_elems = document.getElementsByClassName("markdown");
	Array.prototype.forEach.call(markdown_elems, function(el) {
		// set the innerHTML of the element to the parsed markdown
		el.innerHTML = marked.parse(el.innerHTML);
	});

	// set the onclick event for the theme toggle.
	let theme_toggle = document.getElementsByClassName("theme-button");
	Array.prototype.forEach.call(theme_toggle, function(el) {
		el.onclick = toggle;
	});

	// popup
	start_toggle();
});

