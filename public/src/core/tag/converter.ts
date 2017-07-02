
export interface CompletionItem {
    label: string;
    insertText: string;
    documentation: string;
    kind: number;
}

function conveter(htmlTag: any) {

    let htmlTagList: CompletionItem[] = [];
    let htmlTagListNoSlash: CompletionItem[] = [];

    for (let tag in htmlTag) {

        let obj = htmlTag.tag;

        let item1 = {
            label: tag,
            insertText: htmlTag.tag.insertText,
            documentation: obj.documentation || obj.label,
            kind: monaco.languages.CompletionItemKind.Keyword,
        };
        let item2 = {
            label: tag,
            insertText: htmlTag.tag.insertText,
            documentation: obj.documentation || obj.label,
            kind: monaco.languages.CompletionItemKind.Keyword,
        };

        htmlTagList.push(item1);
        htmlTagListNoSlash.push(item2);
    }
}