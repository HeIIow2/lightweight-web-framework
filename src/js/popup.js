/*
img src:

https://pixabay.com/de/illustrations/unter-uns-symbol-mannschaftskamerad-6008615/
Pixabay License
Freie kommerzielle Nutzung
Kein Bildnachweis nötig

https://knowyourmeme.com/photos/2165975-pepe-the-frog
*/

const src_list = [
    "https://ln.topdf.de/web_framework/assets/popup/among-us.png",
    "https://ln.topdf.de/web_framework/assets/popup/pepe-the-frog.png"
];
let temp_list = src_list.slice();
temp_list.splice(1, 1);

const till_hide = [2000, 5000];
const till_show = [10000, 20000];

const queryString = window.location.search;

// create dom element for popup
let popup_elem = document.createElement("div");
popup_elem.id = "popup-container";
popup_elem.innerHTML = `
    <img src="${random_src()}" class="hide" id="popup" alt="popup figure">
  `;
document.body.appendChild(popup_elem);

/*
<div id="popup-container">
    <img src="assets/popup/among-us.png" className="hide" id="popup">
</div>
*/

popup_elem = document.getElementById("popup");

function show_popup() {
    popup_elem.classList.remove('hide');
}

function random_src() {
    var index = Math.floor(Math.random() * temp_list.length)
    const new_src = temp_list[index];
    if (temp_list.length <= 1) {
        const latest_elem = temp_list[0];
        temp_list = src_list.slice();
        temp_list.splice(temp_list.indexOf(latest_elem), 1);
    }else {
        temp_list.splice(index, 1);
    }
    return new_src;
}

function hide_popup() {
    popup_elem.classList.add('hide');

    setTimeout(function () {
        const new_src = random_src();
        popup_elem.src = new_src;
    }, 1000);
}

if (!(queryString.includes("hide"))) {
    start_toggle();
}

function start_toggle() {
    function random(min_max) {
        return Math.floor(Math.random() * min_max[1]) + min_max[0];
    }

    setTimeout(function () {
        show_popup();

        setTimeout(function () {

            hide_popup();
            start_toggle();
        }, random(till_hide))
    }, random(till_show))
}

export {start_toggle};
