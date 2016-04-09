# Tweet Selected Text
Tweet a selected text on a your  page or in specific areas like a content area with just one click

## Install
### Manually

In the head, add the css
```html
<link rel="stylesheet" href="path/to/your/tweet-selected-text.css">
```

Before body tag closing, add the javascript
```html
<script src="path/to/your/tweet-selected-text.min.js"></script>
```

Init the plugin
```html
<script> new SelectedText(['.class-content-block']); </script>
```

> Note: you must pass the classes or id's to constructor as array

```html
<script> new SelectedText(['#id-content', '.class-posts']); </script>
```

> Note: To pass a list of classes or IDS to the constructor, admitted that the texts within the respective elements can be shared