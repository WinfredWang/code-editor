interface Item {
    name: string;
    language: string;
    value: string;
    lazyload?: (value: string) => Promise<string>;
    position?: monaco.IPosition;
}

interface IEditor {
    
    destroy: () => void;

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
    getModel(): () => monaco.editor.IModel[];

    onSave:(item:Item)=>void;
    onBeforeSave:(item:Item)=>boolean;
    onChangeContent:()=>void;
}

interface CompletionProvider {
    provideCompletionItems: (model: monaco.editor.IModel, position: monaco.IPosition) => monaco.languages.CompletionItem[];
}

class Editor {
    private
}