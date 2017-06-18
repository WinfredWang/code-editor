let HTMLTAGS = {
    "doctype": {},
    "html": {
        insertText: `<html>
    <head>
        <title></title>
    </head>
    <body></body>
</html`,
    },
    "head": {
    },
    "title": {
        document:"title"
    },
    "link": {
        insertText:'<link rel="stylesheet" type="text/css" href=""/>'
    },
    "div": {
        extend: ['id', 'class']
    },
    "img": {
        extend: ["src"]
    },


}
