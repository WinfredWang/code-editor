import { CompletionProvider } from './core';

class HTMLCompletion implements CompletionProvider {

    language: string;

    constructor() {
        this.language = 'xml';
    }

    provideCompletionItems(model: monaco.editor.IModel, position: monaco.IPosition): monaco.languages.CompletionItem[] {

        let lineNumber = position.lineNumber;
        let l = model.getLineContent(lineNumber).substr(0, position.column - 2);

        if (!(l.lastIndexOf("<") != l.lastIndexOf("</")
            && l.lastIndexOf("<") > l.lastIndexOf(">")
            && l.lastIndexOf(" ") > l.lastIndexOf("<"))) {
            return l.lastIndexOf("<") > -1 && l.lastIndexOf("<") == l.length - 1 ? item1 : item2;
        }

        let c = l.substring(l.lastIndexOf("<")).trim(),
            u = c.indexOf(" ") > 0 ? c.substring(1, c.indexOf(" ")) : c.substr(1).trim(),
            d = c.substring(c.lastIndexOf(" "), c.lastIndexOf('="')).trim();

        if (c.lastIndexOf('="') == c.length - 2) {
            if (u && d && item4[u + "," + d]) {
                return item4[u + "," + d];
            }
        } else if (u && item3[u]) {
            return item3[u];
        }

        return [];
    }
}