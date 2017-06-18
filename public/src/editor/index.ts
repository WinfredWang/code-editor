import { Editor } from './editor';

const global = <any>window;

global.yi = {
    init: () => {
        let editor = new Editor([{name:'xx.js', path:'/aa/xx.js', value:'xxx', language:'javascript'},
        {name:'xxxx.html', path:'/aa/xxxx.html', value:'<html></html>', language:'html'},
        {name:'xxxx.css', path:'/aa/xxxx.css', value:'.x{}', language:'css'}
        ], {id:"container"});
        global.yi.Editor = editor;

        editor.

    }
}

document.addEventListener('MonacoReady', global.yi.init);