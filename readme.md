# import

To import the framework, paste the following code in the head of your html file:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://ln.topdf.de/web_framework/css/styles.css">
<script src="https://ln.topdf.de/web_framework/js/marked.min.js"></script>
<script src="https://ln.topdf.de/web_framework/js/index.js"></script>
```

# usage

### header

To create a header, use the `<header>` element. If you want a child of it to be on the right instead of the left,
give it the `push` class.

### themes

To create a button to switch between the currently available themes, simply create a `<button>` element with the class `theme-button`.

### container

For the contents you might want it responsive. You can create a `<div>` and give it the class `container`, to make every
child responsive. The container elements also keep a nice distance

### textbox

The textbox is there to put your real content. The fields get highlighted and an outline will be made.
Simply create a `<div>` with the class `textbox`. In a textbox you can use:
- headers (`<h1>`, `<h2>`, `<h3>`)
- blocktexts (`<p>`)
- images (`<img>`)

you can give a blocktext the class ``secondary`` to make it... secondary.
