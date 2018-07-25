
import { Item, Options } from './types';

class CodeEditor {
    private items: Item[];

    private editor: monaco.editor.IStandaloneCodeEditor;
    private activeModel: monaco.editor.IModel;
    private activeItem: Item;

    private options: Options;

    constructor(items: Item | Item[], options: Options) {
        items instanceof Array ? (this.items = items) : (this.items = [items]);
        this.initOption(options);

        for (let i = 0; i < this.items.length; i++) {
            let temp = this.items[i];
            if (temp.active) {
                this.activeItem = temp;
            } else {
                temp.active = false;
            }
        }

        !this.activeItem && (this.activeItem = this.items[0]);

        this.create();
        this.addModel(this.activeItem);
    }

    private initOption(option: Options) {
        this.options = {
            container: option.container,
            height: option.height ? option.height : 800,
            width: option.width ? option.width : 1000,
            theme: option.theme ? option.theme : "vs"
        };
    }

    private create() {
        this.editor = monaco.editor.create(this.options.container, { theme: this.options.theme });

        this.editor.onDidChangeModelContent(() => {
            let uri = this.activeModel.uri;
            let item = this.getItemByUri(uri.toString());
            item.dirty = true;
            if (item.onBeforeSave) {
                if (item.onBeforeSave(this.activeModel) === false) {
                    return;
                }
            }
            item.onSave && item.onSave(this.activeModel);
        });
    }

    getValue(): string {
        return this.activeModel.getValue();
    }

    setValue(value: string): void {
        this.activeModel.setValue(value);
    }

    setLayout(dimension?: monaco.editor.IDimension): void {
        this.editor.layout(dimension);
    }

    addModel(item: Item): monaco.editor.IModel {
        let exist = !!this.modelExist(item.uri);
        if (exist) {
            throw new Error(`uri : ${item.uri} exist.`);
        }

        let uri = monaco.Uri.parse(item.uri);
        let model = monaco.editor.getModel(uri);
        if (!model) {
            model = monaco.editor.createModel(item.value, item.language, uri);
            this.items.push(item);
        }
        this.editor.setModel(model);
        this.activeModel = model;
        this.activeItem = item;

        return model;
    }

    setModel(item: Item) {
        this.activeItem.viewState = this.editor.saveViewState();

        let uri = monaco.Uri.parse(item.uri);
        let model = monaco.editor.getModel(uri);
        if (model) {
            this.editor.setModel(model);
            this.activeItem = item;
            this.activeModel = model;
            this.editor.restoreViewState(item.viewState);
        } else {
            throw new Error(`model : ${item.uri} not exist.`);
        }
    }

    modelExist(uri: string): boolean {
        return !!this.getItemByUri(uri);
    }

    getItemByUri(uri: string): Item {
        for (let i = 0; this.items.length; i++) {
            if (this.items[i].uri === uri) {
                return this.items[i];
            }
        }
    }

    onDestroy(): void {
        let models = monaco.editor.getModels();
        for (let model of models) {
            model.dispose();
        }

        this.editor.dispose();
    }
}

export function LoadMonaco() {
    const global = <any>window;
    if (global['monaco']) {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        var s = document.createElement('script')
        s.onload = function () {
            let amdRequire = global['require'];
            amdRequire.config({ paths: { 'vs': './vs' } });
            amdRequire(['vs/editor/editor.main'], resolve)
        }
        s.src = "vs/loader.js";
        document.head.appendChild(s)
    });
}
