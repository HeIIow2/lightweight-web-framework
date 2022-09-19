const depths = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
];

const random = (min = 100, max = 999) => {
    let num = Math.random() * (max - min) + min;
    return Math.round(num);
};

let header_ids = [];

const USE_SUB_POINTS = false;
const START_SUB_POINTS = 0;
let sub_points = [0, 0, 0, 0, 0, 0];

function appendToc(toc_list, headers) {
    // iterate over all headers
    let prev_depth = 1;
    let list_by_depth = {1: toc_list};

    for (let i = 0; i < headers.length; i++) {
        const header = headers[i];

        // set a random id for the header if none is set.
        if (header.id === '') {
            header.id = `toc_header_${random()}`;
            while (header_ids.includes(header.id)) {
                header.id = `toc_header_${random()}`;
            }
        }
        const header_id = header.id;
        header_ids.push(header_id);

        const header_depth = depths.indexOf(header.tagName.toLowerCase()) + 1;

        // if the header is deeper than the last one, add a new list
        if (header_depth > prev_depth) {
            let tem_prev_depth = prev_depth;
            let new_list;
            while (tem_prev_depth < header_depth) {
                tem_prev_depth++;
                new_list = document.createElement('ul');
                list_by_depth[tem_prev_depth - 1].appendChild(new_list);
                list_by_depth[tem_prev_depth] = new_list;
            }
        }

        let header_text = header.textContent;

        if (USE_SUB_POINTS) {
            // numbers in front of the labels
            sub_points[header_depth - 1]++;
            for (let j = header_depth; j < sub_points.length; j++) {
                sub_points[j] = START_SUB_POINTS;
            }
            // append sub_points to header_text
            header_text = `${sub_points.slice(0, header_depth).join(".")}  ` + header_text;
        }

        // create a new list item
        const list_item = document.createElement('li');
        const list_item_link = document.createElement('a');
        list_item_link.href = '#' + header_id;
        list_item_link.textContent = header_text;
        list_item.appendChild(list_item_link);

        // add the list item to the list
        list_by_depth[header_depth].appendChild(list_item);

        prev_depth = header_depth;
    }

    return toc_list;
}

function loadTOC() {
    const toc = document.getElementById("toc");
    if (!toc) {
        return;
    }
    console.log(toc)
    let toc_list = document.getElementById("toc_list");
    if (!toc_list) {
        return;
    }

    let text_boxes = document.getElementsByClassName("textbox");
    // iterate over all text boxes
    for (let i = 0; i < text_boxes.length; i++) {
        let text_box = text_boxes[i];
        let headings = text_box.querySelectorAll("h1, h2, h3, h4, h5, h6");
        if (headings.length === 0) {continue;}

        toc_list = appendToc(toc_list, headings);
    }
}

export { loadTOC };