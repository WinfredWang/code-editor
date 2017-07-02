import { MultiEditor } from './multi-editor';


const global = <any>window;

global.yi = {
    init: () => {
        let editor = new MultiEditor(
            [
                {
                    name: 'demo.ts', uri: 'file:///root/aa/demo.ts', value: `class Demo {
    init() :string {
        return 'xx';
    }
}`,language: 'typescript'
                },
                { name: 'test.ts', uri: 'file:///root/aa/test.ts', value: 'xxx', language: 'typescript' }
            ],
            { container: document.getElementById('container') });
        global.yi.Editor = editor;
    }
}

document.addEventListener('MonacoReady', global.yi.init);