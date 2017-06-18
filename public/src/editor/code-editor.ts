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
        // save current model state
        let curModel = this.monaco.getModel();
        if (curModel) {
            let curItem = this.getItemByPath(curModel.uri.toString());
            curItem && (curItem.viewState = this.monaco.saveViewState());
        }

        let uri = monaco.Uri.parse(item.path);
        let model = monaco.editor.getModel(uri);
        if (!model) {
            model = monaco.editor.createModel(item.value, item.language, uri);
        }
        this.monaco.setModel(model);
        if (item.viewState) {
            this.monaco.restoreViewState(item.viewState);
            this.monaco.focus();
        }
    }

    getItemByPath(path:string):Item {
        for (let item of this.items) {
            if (path == item.path) {
                return item;
            }
        }
        return null;
    }
}

export { CodeEditor }