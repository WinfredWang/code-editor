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

        this.tabAction = new TabAction(this.items, this.container);
        this.codeEditor = new CodeEditor(this.items, this.tabAction);
    }
}

export { Editor, Item, Option }