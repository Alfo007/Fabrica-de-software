class navbar {
    constructor(menu) {
        this.menu = document.querySelector(menu);
        this.itemMenu = document.querySelector(item-menu)
        this.activeClass = "active"
    }

    init() {
        if (this.menu) {
            this.addClickEvent();
        }
        return this;
    }
}

const menu = new menubar(
    ".menu",
    ".item-menu"
)
menu.init();