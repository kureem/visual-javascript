/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
class BaseBootstrap extends JSContainer {
    constructor(name, tag) {
        super(name, tag);
        if (this.context === undefined) {
            this.context = null;
        }
        this.addClass(this.getBoostrapName());
    }
    setContext(context) {
        this.context = context;
        this.clearContexts();
        if (context != null)
            this.addClass(this.getBoostrapName() + "-" + Constants.Context["_$wrappers"][context].getValue());
        return this;
    }
    refresh() {
        this.setContext(this.context);
    }
    clearContexts() {
        {
            let array136 = /* Enum.values */ function () { let result = []; for (let val in Constants.Context) {
                if (!isNaN(val)) {
                    result.push(parseInt(val, 10));
                }
            } return result; }();
            for (let index135 = 0; index135 < array136.length; index135++) {
                let context = array136[index135];
                {
                    this.removeClass(this.getBoostrapName() + "-" + Constants.Context["_$wrappers"][context].getValue());
                }
            }
        }
        return this;
    }
    getContext() {
        return this.context;
    }
}
BaseBootstrap["__class"] = "framework.components.boostrap.BaseBootstrap";
BaseBootstrap["__interfaces"] = ["framework.components.api.Renderable"];
class Breadcrumb extends JSContainer {
    constructor(name) {
        super(name, "ol");
        this.addClass("breadcrumb");
    }
    addItem(name, label) {
        const item = new Breadcrumb.BreadcrumbItem(name, label);
        this.addChild(item);
        return item;
    }
    activate(name) {
        {
            let array138 = this.getChildren();
            for (let index137 = 0; index137 < array138.length; index137++) {
                let r = array138[index137];
                {
                    const item = r;
                    if (item.getName() === name) {
                        if (!item.isActive()) {
                            item.setActive(true);
                            const evt = new CustomEvent("activate");
                            evt["item"] = item;
                            evt["source"] = this;
                            this.fireListener("activate", evt);
                        }
                    }
                    else {
                        if (item.isActive()) {
                            item.setActive(false);
                        }
                    }
                }
            }
        }
    }
}
Breadcrumb["__class"] = "framework.components.boostrap.Breadcrumb";
Breadcrumb["__interfaces"] = ["framework.components.api.Renderable"];
(function (Breadcrumb) {
    class BreadcrumbItem extends JSContainer {
        constructor(name, label) {
            super(name, "li");
            if (this.label_ === undefined) {
                this.label_ = null;
            }
            this.active = false;
            this.addClass("breadcrumb-item");
            this.setLabel(label);
            this.addEventListener(new BreadcrumbItem.BreadcrumbItem$0(this), "click");
        }
        setLabel(label) {
            this.label_ = label;
            this.refresh();
        }
        setActive(b) {
            this.active = b;
            this.refresh();
        }
        refresh() {
            if (this.active) {
                if (this.hasClass("active"))
                    this.removeClass("active");
                this.setHtml("<a href=\"#\">" + this.label_ + "</a>");
            }
            else {
                this.setHtml(this.label_);
                if (!this.hasClass("active")) {
                    this.addClass("active");
                }
            }
        }
        isActive() {
            return this.active;
        }
    }
    Breadcrumb.BreadcrumbItem = BreadcrumbItem;
    BreadcrumbItem["__class"] = "framework.components.boostrap.Breadcrumb.BreadcrumbItem";
    BreadcrumbItem["__interfaces"] = ["framework.components.api.Renderable"];
    (function (BreadcrumbItem) {
        class BreadcrumbItem$0 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                source.getParent().activate(source.getName());
            }
        }
        BreadcrumbItem.BreadcrumbItem$0 = BreadcrumbItem$0;
        BreadcrumbItem$0["__interfaces"] = ["framework.components.api.EventListener"];
    })(BreadcrumbItem = Breadcrumb.BreadcrumbItem || (Breadcrumb.BreadcrumbItem = {}));
})(Breadcrumb || (Breadcrumb = {}));
class Broot {
    static main(args) {
        const app = new MyApp("sdfs");
        app.render();
    }
}
Broot["__class"] = "framework.components.boostrap.Broot";
class ButtonGroup extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.vertical = false;
        this.addClass("btn-group");
    }
    isVertical() {
        return this.vertical;
    }
    setVertical(vertical) {
        if (vertical && !this.hasClass("btn-group-vertical")) {
            this.addClass("btn-group-vertical");
            if (this.hasClass("btn-group")) {
                this.removeClass("btn-group");
            }
        }
        else {
            this.removeClass("btn-group-vertical");
            if (!this.hasClass("btn-group")) {
                this.addClass("btn-group");
            }
        }
        this.vertical = vertical;
    }
    setSize(size) {
        if (size === "sm") {
            if (this.hasClass("btn-group-lg")) {
                this.removeClass("btn-group-lg");
            }
            this.addClass("btn-group-sm");
        }
        else if (size === "lg") {
            if (this.hasClass("btn-group-sm")) {
                this.removeClass("btn-group-sm");
            }
            this.addClass("btn-group-lg");
        }
        else {
            if (this.hasClass("btn-group-sm")) {
                this.removeClass("btn-group-sm");
            }
            if (this.hasClass("btn-group-lg")) {
                this.removeClass("btn-group-lg");
            }
        }
        return this;
    }
}
ButtonGroup.SIZE_LARGE = "lg";
ButtonGroup.SIZE_SMALL = "sm";
ButtonGroup.SIZE_NORMAL = "";
ButtonGroup["__class"] = "framework.components.boostrap.ButtonGroup";
ButtonGroup["__interfaces"] = ["framework.components.api.Renderable"];
class Card extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.header = new JSContainer("head", "div");
        this.content = new JSContainer("content", "div");
        this.footer = new JSContainer("footer", "div");
        this.addClass("card");
        this.addChild(this.header);
        this.addChild(this.content);
        this.addChild(this.footer);
    }
    getUIHeader() {
        return this.header;
    }
    getUIContent() {
        return this.content;
    }
    getUIFooter() {
        return this.footer;
    }
    addHeaderImage(img) {
        this.header.addChild(img);
        img.addClass("card-img-top");
        return this;
    }
}
Card["__class"] = "framework.components.boostrap.Card";
Card["__interfaces"] = ["framework.components.api.Renderable"];
class CardBody extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.title = new JSContainer("title", "h5").addClass("card-title");
        this.subtitle = new JSContainer("subtitle", "h6").addClass("card-subtitle mb-2 text-muted");
        this.text = new JSContainer("text", "p").addClass("card-text");
        this.foot = new JSContainer("foot", "div").addClass("card-foot");
        this.addClass("card-body");
        this.addChild(this.title);
        this.addChild(this.subtitle);
        this.addChild(this.text);
        this.addChild(this.foot);
    }
    setTitle(title) {
        this.title.setHtml(title);
        return this;
    }
    setSubtitle(subtitle) {
        this.subtitle.setHtml(subtitle);
        return this;
    }
    setText(txt) {
        this.text.setHtml(txt);
        return this;
    }
    getUITitle() {
        return this.title;
    }
    getUISubtitle() {
        return this.subtitle;
    }
    getUIText() {
        return this.text;
    }
    getUIFoot() {
        return this.foot;
    }
    addCardLink(link) {
        link.addClass("card-link");
        this.foot.addChild(link);
        return this;
    }
}
CardBody["__class"] = "framework.components.boostrap.CardBody";
CardBody["__interfaces"] = ["framework.components.api.Renderable"];
class CardFooter extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.addClass("card-footer text-muted");
    }
}
CardFooter["__class"] = "framework.components.boostrap.CardFooter";
CardFooter["__interfaces"] = ["framework.components.api.Renderable"];
class CardHeader extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.addClass("card-header");
    }
}
CardHeader["__class"] = "framework.components.boostrap.CardHeader";
CardHeader["__interfaces"] = ["framework.components.api.Renderable"];
class Carousel extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.inner = new JSContainer("inner", "div").addClass("carousel-inner");
        this.controlPrev = new JSContainer("control-prev", "a");
        this.controlNext = new JSContainer("control-next", "a");
        this.addClass("carousel");
        this.addClass("slide");
        this.addChild(this.inner);
        this.addChild(this.controlPrev);
        this.addChild(this.controlNext);
        this.decoratecontrol(this.controlPrev, "prev");
        this.decoratecontrol(this.controlNext, "next");
    }
    /*private*/ decoratecontrol(control, dir) {
        control.addClass("carousel-control-" + dir);
        control.setAttribute("href", "#" + this.getId()).setAttribute("role", "button").setAttribute("data-slide", dir);
        control.addChild(new JSContainer("span").addClass("carousel-control-" + dir + "-icon").setAttribute("aria-hidden", "true"));
        control.addChild(new JSContainer("span").addClass("sr-only").setHtml(dir));
    }
    setShowControls(b) {
        this.controlPrev.setStyle("display", b ? null : "none");
        this.controlNext.setStyle("display", b ? null : "none");
    }
    isShowControls() {
        return this.controlPrev.getStyle("display") !== "none";
    }
    setCrossFade(b) {
        if (b && !this.hasClass("carousel-fade")) {
            this.addClass("carousel-fade");
        }
        else {
            if (this.hasClass("carousel-fade")) {
                this.removeClass("carousel-fade");
            }
        }
    }
    isCrossFade() {
        return this.hasClass("carousel-fade");
    }
    addItem(item) {
        this.inner.addChild(item);
    }
    setInterval(interval) {
        this.setAttribute("data-interval", interval.toString());
    }
    setKeyboard(b) {
        this.setAttribute("keyboard", b ? "true" : "false");
    }
    setPauseOnHover(b) {
        if (b) {
            this.setAttribute("data-pause", "hover");
        }
        else {
            this.setAttribute("data-pause", null);
        }
    }
    setRideCarousel(b) {
        if (b) {
            this.setAttribute("data-ride", "carousel");
        }
        else {
            this.setAttribute("data-ride", null);
        }
    }
    setWrap(b) {
        this.setAttribute("wrap", b ? "true" : "false");
    }
    setTouch(b) {
        this.setAttribute("touch", b ? "true" : "false");
    }
    cycle() {
        this.invoke("cycle");
    }
    pause() {
        this.invoke("pause");
    }
    prev() {
        this.invoke("prev");
    }
    next() {
        this.invoke("next");
    }
    dispose() {
        this.invoke("dispose");
    }
    /*private*/ invoke(method) {
        const el = this.getNative();
        const fn = el["carousel"];
        fn.call(el, method);
    }
}
Carousel["__class"] = "framework.components.boostrap.Carousel";
Carousel["__interfaces"] = ["framework.components.api.Renderable"];
class CarouselItem extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.img = new JSContainer("img", "img").addClass("d-block w-100");
        this.caption = new JSContainer("caption", "div").addClass("carousel-caption d-none d-md-block");
        this.title = new JSContainer("title", "h5");
        this.subtitle = new JSContainer("subtitle", "p");
        this.addChild(this.img);
        this.addChild(this.caption);
        this.caption.addChild(this.title).addChild(this.subtitle);
        this.caption.setStyle("display", "none");
    }
    setShowCaption(b) {
        this.caption.setStyle("display", b ? null : "none");
    }
    isShowCaption() {
        return this.caption.getStyle("display") !== "none";
    }
    setTitle(str) {
        this.title.setHtml(str);
        this.setShowCaption(true);
    }
    setSubtitle(str) {
        this.subtitle.setHtml(str);
        this.setShowCaption(true);
    }
    setInterval(interval) {
        this.setAttribute("data-interval", interval.toString());
    }
}
CarouselItem["__class"] = "framework.components.boostrap.CarouselItem";
CarouselItem["__interfaces"] = ["framework.components.api.Renderable"];
class Constants {
}
Constants["__class"] = "framework.components.boostrap.Constants";
(function (Constants) {
    let Context;
    (function (Context) {
        Context[Context["PRIMARY"] = 0] = "PRIMARY";
        Context[Context["SECONDARY"] = 1] = "SECONDARY";
        Context[Context["SUCCESS"] = 2] = "SUCCESS";
        Context[Context["DANGER"] = 3] = "DANGER";
        Context[Context["WARNING"] = 4] = "WARNING";
        Context[Context["INFO"] = 5] = "INFO";
        Context[Context["LIGHT"] = 6] = "LIGHT";
        Context[Context["DARK"] = 7] = "DARK";
    })(Context = Constants.Context || (Constants.Context = {}));
    /** @ignore */
    class Context_$WRAPPER {
        constructor(_$ordinal, _$name, value) {
            this._$ordinal = _$ordinal;
            this._$name = _$name;
            if (this.value === undefined) {
                this.value = null;
            }
            this.value = value;
        }
        getValue() {
            return this.value;
        }
        name() { return this._$name; }
        ordinal() { return this._$ordinal; }
        compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
    }
    Constants.Context_$WRAPPER = Context_$WRAPPER;
    Context["__class"] = "framework.components.boostrap.Constants.Context";
    Context["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
    Context["_$wrappers"] = { 0: new Context_$WRAPPER(0, "PRIMARY", "primary"), 1: new Context_$WRAPPER(1, "SECONDARY", "secondary"), 2: new Context_$WRAPPER(2, "SUCCESS", "success"), 3: new Context_$WRAPPER(3, "DANGER", "danger"), 4: new Context_$WRAPPER(4, "WARNING", "warning"), 5: new Context_$WRAPPER(5, "INFO", "info"), 6: new Context_$WRAPPER(6, "LIGHT", "light"), 7: new Context_$WRAPPER(7, "DARK", "dark") };
    let Size;
    (function (Size) {
        Size[Size["SMALL"] = 0] = "SMALL";
        Size[Size["LARGE"] = 1] = "LARGE";
        Size[Size["NORMAL"] = 2] = "NORMAL";
    })(Size = Constants.Size || (Constants.Size = {}));
    /** @ignore */
    class Size_$WRAPPER {
        constructor(_$ordinal, _$name, value) {
            this._$ordinal = _$ordinal;
            this._$name = _$name;
            if (this.value === undefined) {
                this.value = null;
            }
            this.value = value;
        }
        getValue() {
            return this.value;
        }
        name() { return this._$name; }
        ordinal() { return this._$ordinal; }
        compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
    }
    Constants.Size_$WRAPPER = Size_$WRAPPER;
    Size["__class"] = "framework.components.boostrap.Constants.Size";
    Size["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
    Size["_$wrappers"] = { 0: new Size_$WRAPPER(0, "SMALL", "sm"), 1: new Size_$WRAPPER(1, "LARGE", "lg"), 2: new Size_$WRAPPER(2, "NORMAL", "") };
    let JustifyContent;
    (function (JustifyContent) {
        JustifyContent[JustifyContent["START"] = 0] = "START";
        JustifyContent[JustifyContent["CENTER"] = 1] = "CENTER";
        JustifyContent[JustifyContent["END"] = 2] = "END";
        JustifyContent[JustifyContent["AROUND"] = 3] = "AROUND";
        JustifyContent[JustifyContent["BETWEEN"] = 4] = "BETWEEN";
    })(JustifyContent = Constants.JustifyContent || (Constants.JustifyContent = {}));
    /** @ignore */
    class JustifyContent_$WRAPPER {
        constructor(_$ordinal, _$name, value) {
            this._$ordinal = _$ordinal;
            this._$name = _$name;
            if (this.value === undefined) {
                this.value = null;
            }
            this.value = value;
        }
        getValue() {
            return this.value;
        }
        name() { return this._$name; }
        ordinal() { return this._$ordinal; }
        compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
    }
    Constants.JustifyContent_$WRAPPER = JustifyContent_$WRAPPER;
    JustifyContent["__class"] = "framework.components.boostrap.Constants.JustifyContent";
    JustifyContent["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
    JustifyContent["_$wrappers"] = { 0: new JustifyContent_$WRAPPER(0, "START", "start"), 1: new JustifyContent_$WRAPPER(1, "CENTER", "center"), 2: new JustifyContent_$WRAPPER(2, "END", "end"), 3: new JustifyContent_$WRAPPER(3, "AROUND", "around"), 4: new JustifyContent_$WRAPPER(4, "BETWEEN", "between") };
    let ScreenSize;
    (function (ScreenSize) {
        ScreenSize[ScreenSize["SMALL"] = 0] = "SMALL";
        ScreenSize[ScreenSize["MEDIUM"] = 1] = "MEDIUM";
        ScreenSize[ScreenSize["LARGE"] = 2] = "LARGE";
        ScreenSize[ScreenSize["EXTRA_LARGE"] = 3] = "EXTRA_LARGE";
    })(ScreenSize = Constants.ScreenSize || (Constants.ScreenSize = {}));
    /** @ignore */
    class ScreenSize_$WRAPPER {
        constructor(_$ordinal, _$name, value) {
            this._$ordinal = _$ordinal;
            this._$name = _$name;
            if (this.value === undefined) {
                this.value = null;
            }
            this.value = value;
        }
        getValue() {
            return this.value;
        }
        name() { return this._$name; }
        ordinal() { return this._$ordinal; }
        compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
    }
    Constants.ScreenSize_$WRAPPER = ScreenSize_$WRAPPER;
    ScreenSize["__class"] = "framework.components.boostrap.Constants.ScreenSize";
    ScreenSize["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
    ScreenSize["_$wrappers"] = { 0: new ScreenSize_$WRAPPER(0, "SMALL", "sm"), 1: new ScreenSize_$WRAPPER(1, "MEDIUM", "md"), 2: new ScreenSize_$WRAPPER(2, "LARGE", "lg"), 3: new ScreenSize_$WRAPPER(3, "EXTRA_LARGE", "xl") };
})(Constants || (Constants = {}));
class Dropdown extends JSContainer {
    constructor(name, tag) {
        super(name, tag);
        this.button = new Button("button", "button");
        this.btnSplit = new Button("split", "button");
        this.menu = new DropdownMenu("menu");
        this.split = false;
        this.addClass("dropdown");
        this.addChild(this.button);
        this.addChild(this.btnSplit.setStyle("display", "none"));
        this.btnSplit.addClass("dropdown-toggle dropdown-toggle-split");
        this.btnSplit.setAttribute("data-toggle", "dropdown").setAttribute("aria-haspopup", "true").setAttribute("aria-expanded", "false");
        this.btnSplit.setHtml("<span class=\"sr-only\">Toggle Dropdown</span>");
        this.addChild(this.menu);
        this.button.addClass("dropdown-toggle").setAttribute("data-toggle", "dropdown");
        this.button.setAttribute("aria-haspopup", "true").setAttribute("aria-expanded", "false");
    }
    getButton() {
        return this.button;
    }
    getMenu() {
        return this.menu;
    }
    setSplit(b) {
        if (b) {
            this.btnSplit.setStyle("display", null);
        }
        else {
            this.btnSplit.setStyle("display", "none");
        }
        this.split = b;
        return this;
    }
    /**
     *
     * @param {HTMLElement} parent
     */
    render(parent) {
        if (this.split) {
            this.btnSplit.setSize(this.button.getSize());
            this.btnSplit.setContext(this.button.getContext());
            this.btnSplit.setDisabled(this.button.isDisabled());
        }
        super.render(parent);
    }
}
Dropdown["__class"] = "framework.components.boostrap.Dropdown";
Dropdown["__interfaces"] = ["framework.components.api.Renderable"];
class DropdownMenu extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.addClass("dropdown-menu");
        this.setAttribute("aria-labelledby", "dropdownMenuButton");
    }
    addItem(name, text) {
        const item = new DropdownMenu.DropdownItem(name, text);
        this.addChild(item);
        return item;
    }
}
DropdownMenu["__class"] = "framework.components.boostrap.DropdownMenu";
DropdownMenu["__interfaces"] = ["framework.components.api.Renderable"];
(function (DropdownMenu) {
    class DropdownItem extends JSContainer {
        constructor(name, text) {
            super(name, "a");
            this.setAttribute("href", "javascript:void(0)");
            this.addClass("dropdown-item");
            this.setHtml(text);
        }
        setText(text) {
            this.setHtml(text);
            return this;
        }
    }
    DropdownMenu.DropdownItem = DropdownItem;
    DropdownItem["__class"] = "framework.components.boostrap.DropdownMenu.DropdownItem";
    DropdownItem["__interfaces"] = ["framework.components.api.Renderable"];
})(DropdownMenu || (DropdownMenu = {}));
class ListGroup extends JSContainer {
    constructor(name, tag) {
        super(name, tag);
        this.addClass("list-group");
    }
    setFlush(b) {
        if (b && !this.hasClass("list-group-flush")) {
            this.addClass("list-group-flush");
        }
        else if (!b && this.hasClass("list-group-flush")) {
            this.removeClass("list-group-flush");
        }
    }
    isFlush() {
        return this.hasClass("list-group-flush");
    }
    setHorizontal$boolean(b) {
        if (b && !this.hasClass("list-group-horizontal")) {
            this.addClass("list-group-horizontal");
        }
        else if (!b && this.hasClass("list-group-horizontal")) {
            this.removeClass("list-group-horizontal");
        }
    }
    isHorizontal() {
        return this.hasClass("list-group-horizontal");
    }
    /*private*/ clearHorizontalCls() {
        this.removeClass("list-group-horizontal");
        {
            let array140 = /* Enum.values */ function () { let result = []; for (let val in Constants.ScreenSize) {
                if (!isNaN(val)) {
                    result.push(parseInt(val, 10));
                }
            } return result; }();
            for (let index139 = 0; index139 < array140.length; index139++) {
                let size = array140[index139];
                {
                    this.removeClass("list-group-horizontal-" + Constants.ScreenSize["_$wrappers"][size].getValue());
                }
            }
        }
    }
    setHorizontal$framework_components_boostrap_Constants_ScreenSize(screenSize) {
        this.clearHorizontalCls();
        this.addClass("list-group-horizontal-" + Constants.ScreenSize["_$wrappers"][screenSize].getValue());
    }
    setHorizontal(screenSize) {
        if (((typeof screenSize === 'number') || screenSize === null)) {
            return this.setHorizontal$framework_components_boostrap_Constants_ScreenSize(screenSize);
        }
        else if (((typeof screenSize === 'boolean') || screenSize === null)) {
            return this.setHorizontal$boolean(screenSize);
        }
        else
            throw new Error('invalid overload');
    }
    addItem(item) {
        this.addChild(item);
    }
}
ListGroup["__class"] = "framework.components.boostrap.ListGroup";
ListGroup["__interfaces"] = ["framework.components.api.Renderable"];
class MyApp extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.header = new JSContainer("other", "h1");
        this.addClass("myapp");
        this.setStyle("width", "100%").setStyle("height", "100vh");
        const div = new JSContainer("root", "div");
        div.setStyle("width", "200px");
        div.setStyle("height", "300px");
        div.setStyle("background-color", "red");
        div.addEventListener(new MyApp.MyApp$0(this), "click");
        this.header.setHtml("Hello world");
        this.addChild(this.header);
        this.addChild(div);
    }
}
MyApp["__class"] = "framework.components.boostrap.MyApp";
MyApp["__interfaces"] = ["framework.components.api.Renderable"];
(function (MyApp) {
    class MyApp$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.header.setHtml("I have been clicked");
        }
    }
    MyApp.MyApp$0 = MyApp$0;
    MyApp$0["__interfaces"] = ["framework.components.api.EventListener"];
})(MyApp || (MyApp = {}));
class Nav extends JSContainer {
    constructor(name, tag) {
        super(name, tag);
        this.type = Nav.Type.LINKS;
        this.alignment = Nav.Alignment.HORIZONTAL;
        this.spacing = Nav.Spacing.NONE;
        this.addClass("nav");
    }
    setJustifyContent(justifyContent) {
        {
            let array142 = /* Enum.values */ function () { let result = []; for (let val in Constants.JustifyContent) {
                if (!isNaN(val)) {
                    result.push(parseInt(val, 10));
                }
            } return result; }();
            for (let index141 = 0; index141 < array142.length; index141++) {
                let js = array142[index141];
                {
                    this.removeClass("justify-content-" + Constants.JustifyContent["_$wrappers"][js].getValue());
                }
            }
        }
        this.addClass("justify-content-" + Constants.JustifyContent["_$wrappers"][justifyContent].getValue());
        return this;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
        {
            let array144 = /* Enum.values */ function () { let result = []; for (let val in Nav.Type) {
                if (!isNaN(val)) {
                    result.push(parseInt(val, 10));
                }
            } return result; }();
            for (let index143 = 0; index143 < array144.length; index143++) {
                let t = array144[index143];
                {
                    if (Nav.Type["_$wrappers"][t].getValue() !== Nav.Type["_$wrappers"][type].getValue() && Nav.Type["_$wrappers"][t].getValue() !== Nav.Type["_$wrappers"][Nav.Type.LINKS].getValue())
                        this.removeClass(Nav.Type["_$wrappers"][t].getValue());
                }
            }
        }
        if (Nav.Type["_$wrappers"][type].getValue() !== Nav.Type["_$wrappers"][Nav.Type.LINKS].getValue() && !this.hasClass(Nav.Type["_$wrappers"][type].getValue())) {
            this.addClass(Nav.Type["_$wrappers"][type].getValue());
        }
    }
    getAlignment() {
        return this.alignment;
    }
    setAlignment(alignment) {
        this.alignment = alignment;
        if (Nav.Alignment["_$wrappers"][alignment].getValue() === Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue() && !this.hasClass(Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue())) {
            this.addClass(Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue());
        }
        else {
            if (this.hasClass(Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue())) {
                this.removeClass(Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue());
            }
        }
    }
    getSpacing() {
        return this.spacing;
    }
    setSpacing(spacing) {
        this.spacing = spacing;
        {
            let array146 = /* Enum.values */ function () { let result = []; for (let val in Nav.Spacing) {
                if (!isNaN(val)) {
                    result.push(parseInt(val, 10));
                }
            } return result; }();
            for (let index145 = 0; index145 < array146.length; index145++) {
                let s = array146[index145];
                {
                    if (Nav.Spacing["_$wrappers"][s].getValue() !== Nav.Spacing["_$wrappers"][Nav.Spacing.NONE].getValue()) {
                        if (Nav.Spacing["_$wrappers"][s].getValue() !== Nav.Spacing["_$wrappers"][spacing].getValue() && this.hasClass(Nav.Spacing["_$wrappers"][s].getValue())) {
                            this.removeClass(Nav.Spacing["_$wrappers"][s].getValue());
                        }
                    }
                }
            }
        }
        if (Nav.Spacing["_$wrappers"][spacing].getValue() !== Nav.Spacing["_$wrappers"][Nav.Spacing.NONE].getValue() && !this.hasClass(Nav.Spacing["_$wrappers"][spacing].getValue())) {
            this.addClass(Nav.Spacing["_$wrappers"][spacing].getValue());
        }
    }
}
Nav["__class"] = "framework.components.boostrap.Nav";
Nav["__interfaces"] = ["framework.components.api.Renderable"];
(function (Nav) {
    let Type;
    (function (Type) {
        Type[Type["PILLS"] = 0] = "PILLS";
        Type[Type["TABS"] = 1] = "TABS";
        Type[Type["LINKS"] = 2] = "LINKS";
    })(Type = Nav.Type || (Nav.Type = {}));
    /** @ignore */
    class Type_$WRAPPER {
        constructor(_$ordinal, _$name, value) {
            this._$ordinal = _$ordinal;
            this._$name = _$name;
            if (this.value === undefined) {
                this.value = null;
            }
            this.value = value;
        }
        getValue() {
            return this.value;
        }
        name() { return this._$name; }
        ordinal() { return this._$ordinal; }
        compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
    }
    Nav.Type_$WRAPPER = Type_$WRAPPER;
    Type["__class"] = "framework.components.boostrap.Nav.Type";
    Type["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
    Type["_$wrappers"] = { 0: new Type_$WRAPPER(0, "PILLS", "nav-pills"), 1: new Type_$WRAPPER(1, "TABS", "nav-tabs"), 2: new Type_$WRAPPER(2, "LINKS", "nav-links") };
    let Alignment;
    (function (Alignment) {
        Alignment[Alignment["VERTICAL"] = 0] = "VERTICAL";
        Alignment[Alignment["HORIZONTAL"] = 1] = "HORIZONTAL";
    })(Alignment = Nav.Alignment || (Nav.Alignment = {}));
    /** @ignore */
    class Alignment_$WRAPPER {
        constructor(_$ordinal, _$name, value) {
            this._$ordinal = _$ordinal;
            this._$name = _$name;
            if (this.value === undefined) {
                this.value = null;
            }
            this.value = value;
        }
        getValue() {
            return this.value;
        }
        name() { return this._$name; }
        ordinal() { return this._$ordinal; }
        compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
    }
    Nav.Alignment_$WRAPPER = Alignment_$WRAPPER;
    Alignment["__class"] = "framework.components.boostrap.Nav.Alignment";
    Alignment["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
    Alignment["_$wrappers"] = { 0: new Alignment_$WRAPPER(0, "VERTICAL", "flex-column"), 1: new Alignment_$WRAPPER(1, "HORIZONTAL", "") };
    let Spacing;
    (function (Spacing) {
        Spacing[Spacing["FILL"] = 0] = "FILL";
        Spacing[Spacing["JUSTIFIED"] = 1] = "JUSTIFIED";
        Spacing[Spacing["NONE"] = 2] = "NONE";
    })(Spacing = Nav.Spacing || (Nav.Spacing = {}));
    /** @ignore */
    class Spacing_$WRAPPER {
        constructor(_$ordinal, _$name, value) {
            this._$ordinal = _$ordinal;
            this._$name = _$name;
            if (this.value === undefined) {
                this.value = null;
            }
            this.value = value;
        }
        getValue() {
            return this.value;
        }
        name() { return this._$name; }
        ordinal() { return this._$ordinal; }
        compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
    }
    Nav.Spacing_$WRAPPER = Spacing_$WRAPPER;
    Spacing["__class"] = "framework.components.boostrap.Nav.Spacing";
    Spacing["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
    Spacing["_$wrappers"] = { 0: new Spacing_$WRAPPER(0, "FILL", "nav-fill"), 1: new Spacing_$WRAPPER(1, "JUSTIFIED", "nav-justified"), 2: new Spacing_$WRAPPER(2, "NONE", "") };
})(Nav || (Nav = {}));
class NavItem extends JSContainer {
    constructor(name, tag) {
        super(name, tag);
        this.addClass("nav-item");
    }
}
NavItem["__class"] = "framework.components.boostrap.NavItem";
NavItem["__interfaces"] = ["framework.components.api.Renderable"];
class Progress extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.bar = new JSContainer("bar", "div").addClass("progress-bar");
        if (this.context === undefined) {
            this.context = null;
        }
        this.min = 0;
        this.max = 100;
        this.value = 0;
        this.addClass("progress");
        this.addChild(this.bar);
        this.bar.setAttribute("aria-valuemin", this.min.toString());
        this.bar.setAttribute("aria-valuemax", this.max.toString());
        this.bar.setAttribute("aria-valuenow", this.value.toString());
        this.bar.setAttribute("role", "progressbar");
    }
    getContext() {
        return this.context;
    }
    setAnimated(b) {
        if (b) {
            if (!this.bar.hasClass("progress-bar-animated")) {
                this.bar.addClass("progress-bar-animated");
            }
        }
        else {
            if (this.bar.hasClass("progress-bar-animated")) {
                this.bar.removeClass("progress-bar-animated");
            }
        }
    }
    isAnimated() {
        return this.bar.hasClass("progress-bar-animated");
    }
    setStriped(b) {
        if (b) {
            if (!this.bar.hasClass("progress-bar-striped")) {
                this.bar.addClass("progress-bar-striped");
            }
        }
        else {
            if (this.bar.hasClass("progress-bar-striped")) {
                this.bar.removeClass("progress-bar-striped");
            }
        }
    }
    isStriped() {
        return this.bar.hasClass("progress-bar-striped");
    }
    setContext(context) {
        this.context = context;
        {
            let array148 = /* Enum.values */ function () { let result = []; for (let val in Constants.Context) {
                if (!isNaN(val)) {
                    result.push(parseInt(val, 10));
                }
            } return result; }();
            for (let index147 = 0; index147 < array148.length; index147++) {
                let ct = array148[index147];
                {
                    this.bar.removeClass("bg-" + Constants.Context["_$wrappers"][ct].getValue());
                }
            }
        }
        if (context != null)
            this.bar.addClass("bg-" + Constants.Context["_$wrappers"][context].getValue());
    }
    getMin() {
        return this.min;
    }
    setMin(min) {
        this.min = min;
        this.bar.setAttribute("aria-valuemin", min.toString());
    }
    getMax() {
        return this.max;
    }
    setMax(max) {
        this.max = max;
        this.bar.setAttribute("aria-valuemax", max.toString());
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
        this.bar.setAttribute("aria-valuenow", value.toString());
        const OldRange = this.max - this.min;
        const NewRange = 100;
        const NewValue = ((((value - this.min) * NewRange) / OldRange | 0)) + 0;
        this.bar.setStyle("width", NewValue + "%");
    }
    getBar() {
        return this.bar;
    }
}
Progress["__class"] = "framework.components.boostrap.Progress";
Progress["__interfaces"] = ["framework.components.api.Renderable"];
/**
 * Bootstrap Alert implementation
 * @param {string} name
 * @class
 * @extends BaseBootstrap
 */
class Alert extends BaseBootstrap {
    constructor(name) {
        super(name, "div");
        this.heading = new JSContainer("heading", "h4").addClass("alert-heading");
        this.body = new JSContainer("body", "div");
        this.__close = new JSContainer("close", "button").setAttribute("type", "button").addClass("close").setAttribute("data-dismiss", "alert").setAttribute("aria-label", "close");
        this.closing = false;
        this.addClass("alert");
        this.setAttribute("role", "alert");
        this.addChild(this.heading.setStyle("display", "none"));
        this.addChild(this.body);
        this.addChild(this.__close.setStyle("display", "none").setHtml("<span aria-hidden=\"true\">&times;</span>"));
        this.addClass("fade");
        this.getNative().addEventListener("animationend", (e) => {
            if (this.closing) {
                const evt = new CustomEvent("closed.bs.alert");
                evt["source"] = this;
                this.fireListener("closed.bs.alert", evt);
                this.closing = false;
            }
        });
    }
    /**
     *
     * @return {string}
     */
    getBoostrapName() {
        return "alert";
    }
    setHeading(heading) {
        if (heading != null && heading.length > 0) {
            this.heading.setStyle("display", null);
            this.heading.setHtml(heading);
        }
        else {
            this.heading.setStyle("display", "none");
        }
        return this;
    }
    getHeading() {
        return this.heading;
    }
    getBody() {
        return this.body;
    }
    setDismissable(b) {
        if (b) {
            if (!this.hasClass("alert-dismissible")) {
                this.addClass("alert-dismissible");
            }
            this.__close.setStyle("display", null);
        }
        else {
            this.removeClass("alert-dismissible");
            this.__close.setStyle("display", "none");
        }
        return this;
    }
    close(b) {
        if (b) {
            this.closing = false;
            this.addClass("show");
        }
        else {
            this.closing = true;
            const evt = new CustomEvent("close.bs.alert");
            evt["source"] = this;
            this.fireListener("close.bs.alert", evt);
            this.closing = true;
            this.removeClass("show");
        }
        return this;
    }
}
Alert["__class"] = "framework.components.boostrap.Alert";
Alert["__interfaces"] = ["framework.components.api.Renderable"];
class Badge extends BaseBootstrap {
    constructor(name, tag) {
        super(name, tag);
    }
    /**
     *
     * @return {string}
     */
    getBoostrapName() {
        return "badge";
    }
    setPill(b) {
        if (!b && this.hasClass("badge-pill")) {
            this.removeClass("badge-pill");
        }
        else {
            this.addClass("badge-pill");
        }
        return this;
    }
}
Badge["__class"] = "framework.components.boostrap.Badge";
Badge["__interfaces"] = ["framework.components.api.Renderable"];
class Button extends BaseBootstrap {
    constructor(name, tag) {
        super(name, tag);
        this.outline = false;
        this.disabled = false;
        this.block = false;
        this.size = Constants.Size.NORMAL;
        if ( /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(tag, "a")) {
            this.setAttribute("role", "button");
            this.setAttribute("href", "javascript:void(0);");
        }
    }
    /**
     *
     * @return {string}
     */
    getBoostrapName() {
        if (this.outline) {
            return "btn-outline";
        }
        else {
            return "btn";
        }
    }
    isOutline() {
        return this.outline;
    }
    setOutline(outline) {
        this.outline = outline;
        this.refresh();
    }
    setSize(size) {
        this.size = size;
        if (Constants.Size["_$wrappers"][size].getValue() === "sm") {
            if (this.hasClass("btn-lg")) {
                this.removeClass("btn-lg");
            }
            this.addClass("btn-sm");
        }
        else if (Constants.Size["_$wrappers"][size].getValue() === "lg") {
            if (this.hasClass("btn-sm")) {
                this.removeClass("btn-sm");
            }
            this.addClass("btn-lg");
        }
        else {
            if (this.hasClass("btn-sm")) {
                this.removeClass("btn-sm");
            }
            if (this.hasClass("btn-lg")) {
                this.removeClass("btn-lg");
            }
        }
        return this;
    }
    getSize() {
        return this.size;
    }
    isDisabled() {
        return this.disabled;
    }
    setDisabled(disabled) {
        this.disabled = disabled;
        if (disabled) {
            if ( /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.getTag(), "a")) {
                this.setAttribute("aria-disabled", "true");
                if (!this.hasClass("disabled"))
                    this.addClass("disabled");
                this.setAttribute("tabindex", "-1");
            }
            else {
                this.setAttribute("disabled", "true");
            }
        }
        else {
            if ( /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.getTag(), "a")) {
                this.setAttribute("aria-disabled", null);
                if (this.hasClass("disabled"))
                    this.removeClass("disabled");
                this.setAttribute("tabindex", null);
            }
            else {
                this.setAttribute("disabled", null);
            }
        }
    }
    isBlock() {
        return this.block;
    }
    setBlock(block) {
        this.block = block;
        if (block && !this.hasClass("btn-block")) {
            this.addClass("btn-block");
        }
        else {
            this.removeClass("btn-block");
        }
    }
}
Button["__class"] = "framework.components.boostrap.Button";
Button["__interfaces"] = ["framework.components.api.Renderable"];
class ListGroupItem extends BaseBootstrap {
    constructor(name, tag) {
        super(name, tag);
    }
    /**
     *
     * @return {string}
     */
    getBoostrapName() {
        return "list-group-item";
    }
    setActive(b) {
        if (b && !this.hasClass("active")) {
            this.addClass("active");
        }
        else if (!b && this.hasClass("active")) {
            this.removeClass("active");
        }
    }
    isActive() {
        return this.hasClass("active");
    }
    setDisabled(b) {
        if (b && !this.hasClass("disabled")) {
            this.addClass("disabled");
        }
        else if (!b && this.hasClass("disabled")) {
            this.removeClass("disabled");
        }
        this.setAttribute("aria-disabled", b ? "true" : "false");
    }
    isDisabled() {
        return this.hasClass("disabled");
    }
    setActionable(b) {
        if (b && !this.hasClass("list-group-item-action")) {
            this.addClass("list-group-item-action");
        }
        else if (!b && this.hasClass("list-group-item-action")) {
            this.removeClass("list-group-item-action");
        }
    }
    isActionable() {
        return this.hasClass("list-group-item-action");
    }
}
ListGroupItem["__class"] = "framework.components.boostrap.ListGroupItem";
ListGroupItem["__interfaces"] = ["framework.components.api.Renderable"];
Broot.main(null);
