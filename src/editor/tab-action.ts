import { Item } from './common';

class TabAction {

    private items: Item[];
    private container: HTMLElement;

    constructor(items: Item[], container: HTMLElement) {
        this.items = items;
        this.container = container;

        this.init();
    }

    private init(): void {
        let headDiv = document.createElement('div');
        headDiv.id = 'head';
        this.container.appendChild(headDiv);

        let tabContainerDiv = document.createElement('div');
        tabContainerDiv.id = 'tab-container';
        headDiv.appendChild(tabContainerDiv);

        let tabListDiv = document.createElement('div');
        tabListDiv.id = 'tab-list';
        tabContainerDiv.appendChild(tabListDiv);

        for (let i = 0; i < this.items.length; i++) {
            tabListDiv.appendChild(this.createTabItemDom(this.items[i]));
        }

        this.createCodeDom();
    }

    public getCodeContainer(): HTMLElement {
        return document.getElementById('code-editor');
    }

    private createCodeDom() {
        let div = document.createElement('div');
        div.id = 'code-editor';
        div.style.width = '1000px';
        this.container.appendChild(div);
    }

    private createTabItemDom(item: Item): HTMLElement {
        let tabDom = document.createElement('div');
        tabDom.classList.add('item');
        if (item.active) {
            tabDom.classList.add('active');
        }
        tabDom.setAttribute('title', item.path);

        let nameDom = document.createElement('span');
        nameDom.innerText = item.name;
        tabDom.appendChild(nameDom);

        return tabDom;
    }

    private createActionDom() {
        //
    }
}

export { TabAction };