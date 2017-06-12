import { Editor } from './editor';

const global = <any>window;

global.yi = {
    init: () => {
        global.yi.Editor = new Editor([{name:'xx.js', label:'xxxx', value:'xxx'}], {id:"container"})
    }
}

document.addEventListener('MonacoReady', global.yi.init);