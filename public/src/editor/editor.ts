import { Item, Option } from './common';
import { CodeEditor } from './code-editor';
import { TabAction } from './tab-action';

class Editor {
    private items: Array<Item>;
    private container: HTMLElement;
    private codeEditor: CodeEditor;
    private tabAction: TabAction;

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

        this.setActive();
        this.tabAction = new TabAction(this.items, this.container);
        this.codeEditor = new CodeEditor(this.items, this.tabAction);
        this.tabAction.setCodeEditor(this.codeEditor);
    }

    private setActive() {
        if (!this.items || this.items.length == 0) {
            return;
        }
        let curItem = null;
        for (let item of this.items) {
            if (item.active) {
                curItem = item;
                break;
            }
        }

        if (!curItem) {
           this.items[0].active = true;
        }
    }
}

export { Editor, Item, Option }