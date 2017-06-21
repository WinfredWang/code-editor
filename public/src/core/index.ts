interface Item {
    name: string;
    language: string;
    value: string;
    lazyload?: (value: string) => Promise<string>;
    position?: monaco.IPosition;
    uri: string;
}

interface ISaveHook {
    onBeforeSave(): boolean;
    onSave(): void;
}

interface IEditor {
    getValue: () => string;
    setValue: (value: string) => void;

    setPosition: (position: monaco.IPosition) => void;
    setLayout: (dimension: monaco.editor.IDimension) => void;

    getLanguage: () => string;

    getTheme: () => string;
    setTheme: (nanme: string) => void;

    setModel: (model: monaco.editor.IModel) => void;
    createModel: (item: Item) => monaco.editor.IModel;
    getModels: () => monaco.editor.IModel[];
    getModel(): monaco.editor.IModel;

    onDestroy(): void;
    onChangeContent(onChange: () => void): void;
}

interface CompletionProvider {
    provideCompletionItems: (model: monaco.editor.IModel, position: monaco.IPosition) => monaco.languages.CompletionItem[];
}

class Editor implements IEditor {
    private model: monaco.editor.IModel;
    private item: Item;
    private editor: monaco.editor.IStandaloneCodeEditor;
    private container: HTMLElement;

    constructor(item: Item, container: HTMLElement) {
        this.item = item;
        this.container = container;
        this.editor = monaco.editor.create(container);

        let model = this.createModel(this.item);
        this.model = model;
        this.setModel(model);
    }

    getValue(): string {
        return this.model.getValue();
    }

    setValue(value: string): void {
        this.model.setValue(value);
    }

    setPosition(position: monaco.IPosition): void {
        this.editor.setPosition(position);
    }

    setLayout(dimension?: monaco.editor.IDimension): void {
        this.editor.layout(dimension);
    }

    getLanguage(): string {
        return this.item.language;
    }

    getTheme(): string {
        return `TODO`;
    }

    setTheme(nanme: string): void {
        this.editor.updateOptions({ theme: name });
    }

    setModel(model: monaco.editor.IModel): void {
        this.editor.setModel(model);
    }

    createModel(item: Item): monaco.editor.IModel {
        let uri = monaco.Uri.parse(item.uri);
        let model = monaco.editor.getModel(uri);
        if (!model) {
            model = monaco.editor.createModel(item.value, item.language, uri);
        }

        return model;
    }

    getModels(): monaco.editor.IModel[] {
        return monaco.editor.getModels();
    }

    getModel(): monaco.editor.IModel {
        return this.model;
    }

    onChangeContent(onChange: () => void): void {
        onChange();
    }

    onSave(saveHook: ISaveHook): void {
        if (saveHook.onBeforeSave) {
            if (saveHook.onBeforeSave()) {
                saveHook.onSave();
            }
        } else {
            saveHook.onSave && saveHook.onSave();
        }
    }

    onDestroy(): void {
        let models = this.getModels();
        for (let model of models) {
            model.dispose();
        }

        this.editor.dispose();

    }
}