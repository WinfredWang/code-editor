import { Editor } from './editor';

const global = <any>window;

global.yi = {
    init: () => {
        global.yi.Editor = new Editor([{name:'xx.js', path:'/aa/xx.js', value:'xxx', language:'javascript'},
        {name:'xxxx.html', path:'/aa/xxxx.html', value:'<html></html>', language:'html'},
        {name:'xxxx.css', path:'/aa/xxxx.css', value:'.x{}', language:'css'}
        ], {id:"container"})
    }
}

document.addEventListener('MonacoReady', global.yi.init);