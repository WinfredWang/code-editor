import { Item, Option } from './common';
import { TabDom } from './tab-dom';


class Editor {
    private items: Array<Item>;
    private container: HTMLElement;
    private tabDom: TabDom;

    constructor(items: Item[], option: Option) {
        this.items = items;
        if (option) {
            if (option.container) {
                this.container = option.container;
            } else {
                if (option.id) {
                    this.container = document.getElementById(option.id);
                } else {
                    throw new Error('no found document element');
                }
            }
        } else {
            throw new Error('no found document element');
        }

        this.tabDom = new TabDom(this.items, this.container);
    }

    private init() {
        var editor = monaco.editor.create(document.getElementById('container'), {
            value: '<html><head></head>\n</html>',
            language: 'xml'
        });
    }
}

export { Editor, Item, Option }