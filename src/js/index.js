import {toggle} from "https://ln.topdf.de/web_framework/js/theme.js";
import {start_toggle} from "https://ln.topdf.de/web_framework/js/popup.js";
import {loadTOC} from "https://ln.topdf.de/web_framework/js/toc.js";

// load the table of contents
const toc = `
<div id="toc">
    <h1>Content</h1>
    <ul id="toc_list">

    </ul>
</div>
`
document.body.innerHTML = toc + document.body.innerHTML;


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

	loadTOC();
});

/*
<div id="toc">
    <h1>Content</h1>
    <ul id="toc_list">

    </ul>
</div>
 */

