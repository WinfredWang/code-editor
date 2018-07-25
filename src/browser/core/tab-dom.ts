import { Item } from './core';

class TabDom {
    private items: Item[];
    private container: HTMLElement;
    private codeDom: HTMLElement;
    private tabDom: HTMLElement;

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
        this.tabDom = tabContainerDiv;

        let tabListDiv = document.createElement('div');
        tabListDiv.id = 'tab-list';
        tabContainerDiv.appendChild(tabListDiv);

        for (let i = 0; i < this.items.length; i++) {
            tabListDiv.appendChild(this.createTabItemDom(this.items[i]));
        }

        this.createCodeDom();
    }


    private createCodeDom() {
        let div = document.createElement('div');
        div.id = 'code-editor';
        div.style.width = '1000px';
        div.style.height = '800px';
        this.container.appendChild(div);
        this.codeDom = div;
    }

    private createTabItemDom(item: Item): HTMLElement {
        let tabDom = document.createElement('div');
        tabDom.classList.add('item');
        if (item.active) {
            tabDom.classList.add('active');
        }
        tabDom.setAttribute('title', item.uri);
        tabDom.setAttribute('id', btoa(item.uri));
        let nameDom = document.createElement('span');
        nameDom.innerText = item.name;
        tabDom.appendChild(nameDom);
        (<any>tabDom).dataItem = item;

        return tabDom;
    }

    private setTab(dom: HTMLElement) {
        let children = dom.parentElement.children;
        for (let i = 0; i < children.length; i++) {
            if (children[i].classList.contains('active')) {
                children[i].classList.remove('active');
            }
        }
        dom.classList.add('active');
    }

    public getCodeDom() {
        return this.codeDom;
    }

    public getTabDom() {
        return this.tabDom;
    }
}

export { TabDom };