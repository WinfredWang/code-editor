export const HTML_TAG = {
    html: {
        insertText: "<html> \n<head>\n<title></title>\n</head>\n\n <body>{{}}\n</body>\n</html>",
        attrs: ['manifest']
    },
    head: {
        insertText: "<head>{{}}</head>"
    },
    div: {
        insertText: "<div>{{}}</div>"
    },
    table: {
        insertText: "<table>{{}}</table>",
        attrs: {
            border: {
                insertText: 'indicator-style="{{String}}"',
                documentation: "设置选择器中间选中框的样式"
            }
        }
    },
    script: {
        insertText: "<script></script>",
        attrs: ['src', 'type', 'charset', 'async:v', 'defer:v', 'crossorigin:xo', 'nonce']
    }
}

export const valueSets = {
    b: ['true', 'false'],
    u: ['true', 'false', 'undefined'],
    o: ['on', 'off'],
    y: ['yes', 'no'],
    w: ['soft', 'hard'],
    d: ['ltr', 'rtl', 'auto'],
    m: ['GET', 'POST', 'dialog'],
    fm: ['GET', 'POST'],
    s: ['row', 'col', 'rowgroup', 'colgroup'],
    t: ['hidden', 'text', 'search', 'tel', 'url', 'email', 'password', 'datetime', 'date', 'month', 'week', 'time', 'datetime-local', 'number', 'range', 'color', 'checkbox', 'radio', 'file', 'submit', 'image', 'reset', 'button'],
    im: ['verbatim', 'latin', 'latin-name', 'latin-prose', 'full-width-latin', 'kana', 'kana-name', 'katakana', 'numeric', 'tel', 'email', 'url'],
    bt: ['button', 'submit', 'reset', 'menu'],
    lt: ['1', 'a', 'A', 'i', 'I'],
    mt: ['context', 'toolbar'],
    mit: ['command', 'checkbox', 'radio'],
    et: ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'],
    tk: ['subtitles', 'captions', 'descriptions', 'chapters', 'metadata'],
    pl: ['none', 'metadata', 'auto'],
    sh: ['circle', 'default', 'poly', 'rect'],
    xo: ['anonymous', 'use-credentials'],
    sb: ['allow-forms', 'allow-modals', 'allow-pointer-lock', 'allow-popups', 'allow-popups-to-escape-sandbox', 'allow-same-origin', 'allow-scripts', 'allow-top-navigation'],
    tristate: ['true', 'false', 'mixed', 'undefined'],
    inputautocomplete: ['additional-name', 'address-level1', 'address-level2', 'address-level3', 'address-level4', 'address-line1', 'address-line2', 'address-line3', 'bday', 'bday-year', 'bday-day', 'bday-month', 'billing', 'cc-additional-name', 'cc-csc', 'cc-exp', 'cc-exp-month', 'cc-exp-year', 'cc-family-name', 'cc-given-name', 'cc-name', 'cc-number', 'cc-type', 'country', 'country-name', 'current-password', 'email', 'family-name', 'fax', 'given-name', 'home', 'honorific-prefix', 'honorific-suffix', 'impp', 'language', 'mobile', 'name', 'new-password', 'nickname', 'organization', 'organization-title', 'pager', 'photo', 'postal-code', 'sex', 'shipping', 'street-address', 'tel-area-code', 'tel', 'tel-country-code', 'tel-extension', 'tel-local', 'tel-local-prefix', 'tel-local-suffix', 'tel-national', 'transaction-amount', 'transaction-currency', 'url', 'username', 'work'],
    autocomplete: ['inline', 'list', 'both', 'none'],
    current: ['page', 'step', 'location', 'date', 'time', 'true', 'false'],
    dropeffect: ['copy', 'move', 'link', 'execute', 'popup', 'none'],
    invalid: ['grammar', 'false', 'spelling', 'true'],
    live: ['off', 'polite', 'assertive'],
    orientation: ['vertical', 'horizontal', 'undefined'],
    relevant: ['additions', 'removals', 'text', 'all', 'additions text'],
    sort: ['ascending', 'descending', 'none', 'other'],
    roles: ['alert', 'alertdialog', 'button', 'checkbox', 'dialog', 'gridcell', 'link', 'log', 'marquee', 'menuitem', 'menuitemcheckbox', 'menuitemradio', 'option', 'progressbar', 'radio', 'scrollbar', 'searchbox', 'slider',
        'spinbutton', 'status', 'switch', 'tab', 'tabpanel', 'textbox', 'timer', 'tooltip', 'treeitem', 'combobox', 'grid', 'listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid',
        'application', 'article', 'cell', 'columnheader', 'definition', 'directory', 'document', 'feed', 'figure', 'group', 'heading', 'img', 'list', 'listitem', 'math', 'none', 'note', 'presentation', 'region', 'row', 'rowgroup',
        'rowheader', 'separator', 'table', 'term', 'text', 'toolbar',
        'banner', 'complementary', 'contentinfo', 'form', 'main', 'navigation', 'region', 'search']
};

export const globalAttributes = [
    'accesskey', 'class', 'contenteditable:b', 'contextmenu', 'dir:d',
    'draggable:b', 'dropzone', 'hidden:v', 'id', 'itemid',
    'itemprop', 'itemref', 'itemscope:v', 'itemtype', 'lang',
    'role:roles', 'spellcheck:b', 'style', 'tabindex',
    'title', 'translate:y'];

export const eventHandlers = ['onabort', 'onblur', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'oncontextmenu', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart',
    'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'onformchange', 'onforminput', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata',
    'onloadstart', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onpause', 'onplay', 'onplaying', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onreadystatechange', 'onscroll',
    'onseeked', 'onseeking', 'onselect', 'onshow', 'onstalled', 'onsubmit', 'onsuspend', 'ontimeupdate', 'onvolumechange', 'onwaiting'];


export const angularAttrs = [
    'ng-app', 'ng-bind', 'ng-bind-html', 'ng-bind-template', 'ng-blur', 'ng-change', 'ng-checked', 'ng-class', 'ng-class-even', 'ng-class-odd',
    'ng-click', 'ng-cloak', 'ng-controller', 'ng-copy', 'ng-csp', 'ng-cut', 'ng-dblclick', 'ng-disabled', 'ng-focus', 'ng-form', 'ng-hide', 'ng-href', 'ng-if',
    'ng-include', 'ng-init', 'ng-jq', 'ng-keydown', 'ng-keypress', 'ng-keyup', 'ng-list', 'ng-model-options', 'ng-mousedown', 'ng-mouseenter', 'ng-mouseleave',
    'ng-mousemove', 'ng-mouseover', 'ng-mouseup', 'ng-non-bindable', 'ng-open', 'ng-options', 'ng-paste', 'ng-pluralize', 'ng-readonly', 'ng-repeat', 'ng-selected',
    'ng-show', 'ng-src', 'ng-srcset', 'ng-style', 'ng-submit', 'ng-switch', 'ng-transclude', 'ng-value'
]