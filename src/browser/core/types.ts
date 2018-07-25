/// <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />
export interface Item {
    uri: string;
    language: string;
    value: string;
    active?: boolean;
    dirty?: boolean;
    onLazyload?: (value: string) => Promise<string>;
    onBeforeSave?: (model: monaco.editor.ITextModel) => boolean;
    onSave?: (model: monaco.editor.ITextModel) => void;
    viewState?: monaco.editor.ICodeEditorViewState;
}

export interface Options {
    container: HTMLElement;
    height?: number;
    width?: number;
    theme?: string;
}
