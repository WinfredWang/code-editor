import { Editor } from './editor';

const global = <any>window;

global.yi = {
    init: () => {
        global.yi.Editor = new Editor([{name:'xx.js', path:'/aa/xx.js', value:'xxx', language:'javascript'}], {id:"container"})
    }
}

document.addEventListener('MonacoReady', global.yi.init);