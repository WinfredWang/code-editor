import { Item } from './common';
import { TabAction } from './tab-action';

class CodeEditor {
    private items: Item[];
    private container: HTMLElement
    private monaco: monaco.editor.IStandaloneCodeEditor;
    private tabAction: TabAction;

    constructor(items: Item[], tabAction: TabAction) {
        this.items = items;
        this.tabAction = tabAction;
        this.container = tabAction.getCodeContainer();

        this.init();
    }

    private init() {
        this.monaco = monaco.editor.create(this.container);
        this.openDefaultTab();
    }


    private openDefaultTab() {
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
            curItem = this.items[0];
        }
        this.openTabByItem(curItem);
    }

    openTabByItem(item: Item) {
        let uri = monaco.Uri.parse(item.path);
        let model = monaco.editor.getModel(uri);
        if (!model) {
            monaco.editor.createModel(item.value, item.language, uri);

        }
        this.monaco.setModel(model);
    }
}

export { CodeEditor }