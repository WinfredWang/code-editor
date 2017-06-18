import { Item } from './common';
import { CodeEditor } from './code-editor';

class TabAction {

    private items: Item[];
    private container: HTMLElement;
    private codeEditor:CodeEditor;

    constructor(items: Item[], container: HTMLElement) {
        this.items = items;
        this.container = container;

        this.init();
        this.initEvent();
    }

    public setCodeEditor(codeEditor:CodeEditor) {
        this.codeEditor = codeEditor;
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
        div.style.height = '800px';
        this.container.appendChild(div);
    }

    private createTabItemDom(item: Item): HTMLElement {
        let tabDom = document.createElement('div');
        tabDom.classList.add('item');
        if (item.active) {
            tabDom.classList.add('active');
        }
        tabDom.setAttribute('title', item.path);
        tabDom.setAttribute('id', btoa(item.path));
        let nameDom = document.createElement('span');
        nameDom.innerText = item.name;
        tabDom.appendChild(nameDom);
        (<any>tabDom).dataItem = item;

        return tabDom;
    }

    private setTab(dom:HTMLElement) {
        let children = dom.parentElement.children;
        for (let i = 0 ; i < children.length; i++) {
            if (children[i].classList.contains('active')) {
                children[i].classList.remove('active');
            }
        }
        dom.classList.add('active');
        this.codeEditor.openTabByItem( (<any>dom).dataItem);
    }

    private initEvent() {
        let tabList = document.getElementById('tab-list');
        tabList.addEventListener('click', (event:Event)=>{
            let dom = <HTMLElement>event.target;
            let target;
            if (dom.classList.contains('item')) {
                target = dom;
            } else {
                if (dom.parentElement.classList.contains('item')) {
                     target = dom.parentElement;
                }
            }

            if (target) {
                this.setTab(target);
            }
        });
    }

    private createActionDom() {
        //
    }
}

export { TabAction };