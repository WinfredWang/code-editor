export class DomClassUtils {

    static closest(className: string, dom: HTMLElement) {
        let temp = dom;
        while (temp) {
            if (this.has(className, temp)) {
                return temp;
            }

            temp = temp.parentElement;
        }

        return null;
    }

    static has(className: string, dom: HTMLElement) {
        return dom.classList.contains(className)
    }

    static add(className: string, dom: HTMLElement) {
        if (!this.has(className, dom)) {
            dom.classList.add(className);
        }
    }

    static remove(className: string, dom: HTMLElement) {
        if (this.has(className, dom)) {
            dom.classList.remove(className);
        }
    }
    static removeAll(className: string, doms: HTMLCollection) {

        for (let i = 0; i < doms.length; i++) {
            let ele = doms.item(i);
            if (ele.nodeType == 1) {
                this.remove(className, <HTMLElement>ele);
            }

        }
    }
    static siblings(dom: HTMLElement): HTMLCollection {

        return dom.parentElement.children;
    }
}