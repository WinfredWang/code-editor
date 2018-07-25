import { TabDom } from "./tab-dom";
import { DomClassUtils } from "../utils/dom-utils";


class MultiEditor {

    private items: Item[];
    private editor: IEditor;
    private option: IOption;
    private tabDom: TabDom;

    constructor(items: Item[], option: IOption) {
        this.items = items;
        this.option = option;

        this.init();
    }

    init() {
        let active = null;
        for (let item of this.items) {
            if (item.active) {
                active = item;
            }
        }

        if (!active) {
            this.items[0].active = true;
            active = this.items[0];
        }

        this.tabDom = new TabDom(this.items, this.option.container);
        this.editor = new Editor(active, { container: this.tabDom.getCodeDom() });

        this.initEvent();
    }

    initEvent() {
        this.tabDom.getTabDom().addEventListener('click', (e: MouseEvent) => {
            let itemDom = <HTMLElement>e.target;

            let targetDom = DomClassUtils.closest('item', itemDom);
            if (targetDom) {
                DomClassUtils.removeAll('active', DomClassUtils.siblings(targetDom));
                DomClassUtils.add('active', targetDom);

                let item = this.getItemById(atob(targetDom.id));
                if (item) {
                    this.editor.switchModel(item);
                }

            }
        })

    }

    private getItemById(uri: string): Item {
        for (let item of this.items) {
            if (item.uri == uri) {
                return item;
            }
        }

        return null;
    }
}
export { MultiEditor }