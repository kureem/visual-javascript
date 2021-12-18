/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var boostrap;
(function (boostrap) {
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
                this.addClass(this.getBoostrapName() + "-" + boostrap.Constants.Context["_$wrappers"][context].getValue());
            return this;
        }
        refresh() {
            this.setContext(this.context);
        }
        clearContexts() {
            {
                let array198 = /* Enum.values */ function () { let result = []; for (let val in boostrap.Constants.Context) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (let index197 = 0; index197 < array198.length; index197++) {
                    let context = array198[index197];
                    {
                        this.removeClass(this.getBoostrapName() + "-" + boostrap.Constants.Context["_$wrappers"][context].getValue());
                    }
                }
            }
            return this;
        }
        getContext() {
            return this.context;
        }
    }
    boostrap.BaseBootstrap = BaseBootstrap;
    BaseBootstrap["__class"] = "framework.components.boostrap.BaseBootstrap";
    BaseBootstrap["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
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
                let array200 = this.getChildren();
                for (let index199 = 0; index199 < array200.length; index199++) {
                    let r = array200[index199];
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
    boostrap.Breadcrumb = Breadcrumb;
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
    })(Breadcrumb = boostrap.Breadcrumb || (boostrap.Breadcrumb = {}));
})(boostrap || (boostrap = {}));
(function (boostrap) {
    class Broot {
        static main(args) {
            const app = new boostrap.MyApp("sdfs");
            app.render();
        }
    }
    boostrap.Broot = Broot;
    Broot["__class"] = "framework.components.boostrap.Broot";
})(boostrap || (boostrap = {}));
(function (boostrap) {
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
    boostrap.ButtonGroup = ButtonGroup;
    ButtonGroup["__class"] = "framework.components.boostrap.ButtonGroup";
    ButtonGroup["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
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
    boostrap.Card = Card;
    Card["__class"] = "framework.components.boostrap.Card";
    Card["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
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
    boostrap.CardBody = CardBody;
    CardBody["__class"] = "framework.components.boostrap.CardBody";
    CardBody["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
    class CardFooter extends JSContainer {
        constructor(name) {
            super(name, "div");
            this.addClass("card-footer text-muted");
        }
    }
    boostrap.CardFooter = CardFooter;
    CardFooter["__class"] = "framework.components.boostrap.CardFooter";
    CardFooter["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
    class CardHeader extends JSContainer {
        constructor(name) {
            super(name, "div");
            this.addClass("card-header");
        }
    }
    boostrap.CardHeader = CardHeader;
    CardHeader["__class"] = "framework.components.boostrap.CardHeader";
    CardHeader["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
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
            else if (!b && this.hasClass("carousel-fade")) {
                this.removeClass("carousel-fade");
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
    boostrap.Carousel = Carousel;
    Carousel["__class"] = "framework.components.boostrap.Carousel";
    Carousel["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
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
    boostrap.CarouselItem = CarouselItem;
    CarouselItem["__class"] = "framework.components.boostrap.CarouselItem";
    CarouselItem["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
    class Constants {
    }
    boostrap.Constants = Constants;
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
            Context[Context["BODY"] = 8] = "BODY";
            Context[Context["WHITE"] = 9] = "WHITE";
            Context[Context["TRANSPARENT"] = 10] = "TRANSPARENT";
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
        Context["_$wrappers"] = { 0: new Context_$WRAPPER(0, "PRIMARY", "primary"), 1: new Context_$WRAPPER(1, "SECONDARY", "secondary"), 2: new Context_$WRAPPER(2, "SUCCESS", "success"), 3: new Context_$WRAPPER(3, "DANGER", "danger"), 4: new Context_$WRAPPER(4, "WARNING", "warning"), 5: new Context_$WRAPPER(5, "INFO", "info"), 6: new Context_$WRAPPER(6, "LIGHT", "light"), 7: new Context_$WRAPPER(7, "DARK", "dark"), 8: new Context_$WRAPPER(8, "BODY", "body"), 9: new Context_$WRAPPER(9, "WHITE", "white"), 10: new Context_$WRAPPER(10, "TRANSPARENT", "transparent") };
        let Size;
        (function (Size) {
            Size[Size["SMALL"] = 0] = "SMALL";
            Size[Size["MEDIUM"] = 1] = "MEDIUM";
            Size[Size["LARGE"] = 2] = "LARGE";
            Size[Size["EXTRA_LARGE"] = 3] = "EXTRA_LARGE";
            Size[Size["NORMAL"] = 4] = "NORMAL";
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
        Size["_$wrappers"] = { 0: new Size_$WRAPPER(0, "SMALL", "sm"), 1: new Size_$WRAPPER(1, "MEDIUM", "md"), 2: new Size_$WRAPPER(2, "LARGE", "lg"), 3: new Size_$WRAPPER(3, "EXTRA_LARGE", "xl"), 4: new Size_$WRAPPER(4, "NORMAL", "") };
        let JustifyContent;
        (function (JustifyContent) {
            JustifyContent[JustifyContent["START"] = 0] = "START";
            JustifyContent[JustifyContent["CENTER"] = 1] = "CENTER";
            JustifyContent[JustifyContent["END"] = 2] = "END";
            JustifyContent[JustifyContent["AROUND"] = 3] = "AROUND";
            JustifyContent[JustifyContent["EVENLY"] = 4] = "EVENLY";
            JustifyContent[JustifyContent["BETWEEN"] = 5] = "BETWEEN";
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
        JustifyContent["_$wrappers"] = { 0: new JustifyContent_$WRAPPER(0, "START", "start"), 1: new JustifyContent_$WRAPPER(1, "CENTER", "center"), 2: new JustifyContent_$WRAPPER(2, "END", "end"), 3: new JustifyContent_$WRAPPER(3, "AROUND", "around"), 4: new JustifyContent_$WRAPPER(4, "EVENLY", "evenly"), 5: new JustifyContent_$WRAPPER(5, "BETWEEN", "between") };
        let ScreenSize;
        (function (ScreenSize) {
            ScreenSize[ScreenSize["NORMAL"] = 0] = "NORMAL";
            ScreenSize[ScreenSize["SMALL"] = 1] = "SMALL";
            ScreenSize[ScreenSize["MEDIUM"] = 2] = "MEDIUM";
            ScreenSize[ScreenSize["LARGE"] = 3] = "LARGE";
            ScreenSize[ScreenSize["EXTRA_LARGE"] = 4] = "EXTRA_LARGE";
            ScreenSize[ScreenSize["EXTRA_EXTRA_LARGE"] = 5] = "EXTRA_EXTRA_LARGE";
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
        ScreenSize["_$wrappers"] = { 0: new ScreenSize_$WRAPPER(0, "NORMAL", ""), 1: new ScreenSize_$WRAPPER(1, "SMALL", "sm"), 2: new ScreenSize_$WRAPPER(2, "MEDIUM", "md"), 3: new ScreenSize_$WRAPPER(3, "LARGE", "lg"), 4: new ScreenSize_$WRAPPER(4, "EXTRA_LARGE", "xl"), 5: new ScreenSize_$WRAPPER(5, "EXTRA_EXTRA_LARGE", "xxl") };
    })(Constants = boostrap.Constants || (boostrap.Constants = {}));
})(boostrap || (boostrap = {}));
(function (boostrap) {
    class Dropdown extends JSContainer {
        constructor(name, tag) {
            super(name, tag);
            this.button = new boostrap.Button("button", "button");
            this.btnSplit = new boostrap.Button("split", "button");
            this.menu = new boostrap.DropdownMenu("menu");
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
    boostrap.Dropdown = Dropdown;
    Dropdown["__class"] = "framework.components.boostrap.Dropdown";
    Dropdown["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
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
    boostrap.DropdownMenu = DropdownMenu;
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
    })(DropdownMenu = boostrap.DropdownMenu || (boostrap.DropdownMenu = {}));
})(boostrap || (boostrap = {}));
(function (boostrap) {
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
                let array202 = /* Enum.values */ function () { let result = []; for (let val in boostrap.Constants.ScreenSize) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (let index201 = 0; index201 < array202.length; index201++) {
                    let size = array202[index201];
                    {
                        this.removeClass("list-group-horizontal-" + boostrap.Constants.ScreenSize["_$wrappers"][size].getValue());
                    }
                }
            }
        }
        setHorizontal$framework_components_boostrap_Constants_ScreenSize(screenSize) {
            this.clearHorizontalCls();
            this.addClass("list-group-horizontal-" + boostrap.Constants.ScreenSize["_$wrappers"][screenSize].getValue());
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
    boostrap.ListGroup = ListGroup;
    ListGroup["__class"] = "framework.components.boostrap.ListGroup";
    ListGroup["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
    class Modal extends JSContainer {
        constructor(name) {
            super(name, "div");
            this.dialog = new JSContainer("dialog", "div");
            this.content = new JSContainer("content", "div");
            this.header = new JSContainer("header", "div");
            this.body = new JSContainer("body", "div");
            this.footer = new JSContainer("footer", "div");
            this.title = new JSContainer("title", "h5");
            this.btnClose = new JSContainer("btnClose", "button");
            this.setAttribute("tabindex", "-1");
            this.addChild(this.dialog.addClass("modal-dialog"));
            this.dialog.addChild(this.content.addClass("modal-content"));
            this.content.addChild(this.header.addClass("modal-header"));
            this.content.addChild(this.body.addClass("modal-body"));
            this.content.addChild(this.footer.addClass("footer"));
            this.title.addClass("modal-title");
            this.btnClose.addClass("btn-close").setAttribute("data-bs-dismiss", "#" + this.getId()).setAttribute("aria-label", "Close");
            this.header.addChild(this.title).addChild(this.btnClose);
        }
        getDialog() {
            return this.dialog;
        }
        getContent() {
            return this.content;
        }
        getHeader() {
            return this.header;
        }
        getBody() {
            return this.body;
        }
        getFooter() {
            return this.footer;
        }
        getTitle() {
            return this.title;
        }
        getBtnClose() {
            return this.btnClose;
        }
        setScrollable(b) {
            if (b && !this.dialog.hasClass("modal-dialog-scrollable")) {
                this.dialog.addClass("modal-dialog-scrollable");
            }
            else if (!b && this.dialog.hasClass("modal-dialog-scrollable")) {
                this.dialog.removeClass("modal-dialog-scrollable");
            }
            return this;
        }
        setStaticBackdrop(b) {
            if (b && this.getAttribute("data-bs-backdrop") !== "static") {
                this.setAttribute("data-bs-backdrop", "static");
                this.setAttribute("data-bs-keyboad", "false");
            }
            else if (!b && this.getAttribute("data-bs-backdrop") === "static") {
                this.setAttribute("data-bs-backdrop", null);
                this.setAttribute("data-bs-keyboad", null);
            }
            return this;
        }
        setCentered(b) {
            if (b && !this.dialog.hasClass("modal-dialog-centered")) {
                this.dialog.addClass("modal-dialog-centered");
            }
            else if (!b && this.dialog.hasClass("modal-dialog-centered")) {
                this.dialog.removeClass("modal-dialog-centered");
            }
            return this;
        }
        setFade(b) {
            if (b && !this.hasClass("fade")) {
                this.addClass("fade");
            }
            else if (!b && this.hasClass("fade")) {
                this.removeClass("fade");
            }
            return this;
        }
        setSize(size) {
            if (size === boostrap.Constants.Size.NORMAL) {
                {
                    let array204 = /* Enum.values */ function () { let result = []; for (let val in boostrap.Constants.Size) {
                        if (!isNaN(val)) {
                            result.push(parseInt(val, 10));
                        }
                    } return result; }();
                    for (let index203 = 0; index203 < array204.length; index203++) {
                        let si = array204[index203];
                        {
                            if (this.dialog.hasClass("modal-" + boostrap.Constants.Size["_$wrappers"][si].getValue())) {
                                this.dialog.removeClass("modal-" + boostrap.Constants.Size["_$wrappers"][si].getValue());
                            }
                        }
                    }
                }
            }
            else {
                {
                    let array206 = /* Enum.values */ function () { let result = []; for (let val in boostrap.Constants.Size) {
                        if (!isNaN(val)) {
                            result.push(parseInt(val, 10));
                        }
                    } return result; }();
                    for (let index205 = 0; index205 < array206.length; index205++) {
                        let si = array206[index205];
                        {
                            if ((si === size) && !this.dialog.hasClass("modal-" + boostrap.Constants.Size["_$wrappers"][si].getValue())) {
                                this.dialog.addClass("modal-" + boostrap.Constants.Size["_$wrappers"][si].getValue());
                            }
                            else if ((si !== size) && this.dialog.hasClass("modal-" + boostrap.Constants.Size["_$wrappers"][si].getValue())) {
                                this.dialog.addClass("modal-" + boostrap.Constants.Size["_$wrappers"][si].getValue());
                            }
                        }
                    }
                }
            }
            return this;
        }
        setFullScreen$boolean(b) {
            return this.setFullScreen$boolean$framework_components_boostrap_Constants_ScreenSize(b, boostrap.Constants.ScreenSize.NORMAL);
        }
        setFullScreen$boolean$framework_components_boostrap_Constants_ScreenSize(b, size) {
            if (size === boostrap.Constants.ScreenSize.NORMAL) {
                if (b && !this.dialog.hasClass("modal-fullscreen")) {
                    this.dialog.addClass("modal-fullscreen");
                }
                else if (!b && this.dialog.hasClass("modal-fullscreen")) {
                    this.dialog.removeClass("modal-fullscreen");
                }
                {
                    let array208 = /* Enum.values */ function () { let result = []; for (let val in boostrap.Constants.ScreenSize) {
                        if (!isNaN(val)) {
                            result.push(parseInt(val, 10));
                        }
                    } return result; }();
                    for (let index207 = 0; index207 < array208.length; index207++) {
                        let s = array208[index207];
                        {
                            if (s !== boostrap.Constants.ScreenSize.NORMAL) {
                                this.dialog.removeClass("modal-fullscreen-" + boostrap.Constants.ScreenSize["_$wrappers"][s].getValue() + "-down");
                            }
                        }
                    }
                }
            }
            else {
                if (b) {
                    {
                        let array210 = /* Enum.values */ function () { let result = []; for (let val in boostrap.Constants.ScreenSize) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index209 = 0; index209 < array210.length; index209++) {
                            let s = array210[index209];
                            {
                                if (s === size) {
                                    if (!this.dialog.hasClass("modal-fullscreen-" + boostrap.Constants.ScreenSize["_$wrappers"][s].getValue() + "-down")) {
                                        this.dialog.addClass("modal-fullscreen-" + boostrap.Constants.ScreenSize["_$wrappers"][s].getValue() + "-down");
                                    }
                                }
                                else {
                                    if (this.dialog.hasClass("modal-fullscreen-" + boostrap.Constants.ScreenSize["_$wrappers"][s].getValue() + "-down")) {
                                        this.dialog.removeClass("modal-fullscreen-" + boostrap.Constants.ScreenSize["_$wrappers"][s].getValue() + "-down");
                                    }
                                }
                            }
                        }
                    }
                }
                else {
                    {
                        let array212 = /* Enum.values */ function () { let result = []; for (let val in boostrap.Constants.ScreenSize) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index211 = 0; index211 < array212.length; index211++) {
                            let s = array212[index211];
                            {
                                if (s !== boostrap.Constants.ScreenSize.NORMAL) {
                                    this.dialog.removeClass("modal-fullscreen-" + boostrap.Constants.ScreenSize["_$wrappers"][s].getValue() + "-down");
                                }
                            }
                        }
                    }
                }
            }
            return this;
        }
        setFullScreen(b, size) {
            if (((typeof b === 'boolean') || b === null) && ((typeof size === 'number') || size === null)) {
                return this.setFullScreen$boolean$framework_components_boostrap_Constants_ScreenSize(b, size);
            }
            else if (((typeof b === 'boolean') || b === null) && size === undefined) {
                return this.setFullScreen$boolean(b);
            }
            else
                throw new Error('invalid overload');
        }
        show() {
            this.addClass("show");
            return this;
        }
        toggle() {
            if (this.hasClass("show")) {
                this.removeClass("show");
            }
            else {
                this.addClass("show");
            }
            return this;
        }
        hide() {
            this.removeClass("show");
            return this;
        }
        close() {
            this.hide();
            return this;
        }
    }
    boostrap.Modal = Modal;
    Modal["__class"] = "framework.components.boostrap.Modal";
    Modal["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
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
    boostrap.MyApp = MyApp;
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
    })(MyApp = boostrap.MyApp || (boostrap.MyApp = {}));
})(boostrap || (boostrap = {}));
(function (boostrap) {
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
                let array214 = /* Enum.values */ function () { let result = []; for (let val in boostrap.Constants.JustifyContent) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (let index213 = 0; index213 < array214.length; index213++) {
                    let js = array214[index213];
                    {
                        this.removeClass("justify-content-" + boostrap.Constants.JustifyContent["_$wrappers"][js].getValue());
                    }
                }
            }
            this.addClass("justify-content-" + boostrap.Constants.JustifyContent["_$wrappers"][justifyContent].getValue());
            return this;
        }
        getType() {
            return this.type;
        }
        setType(type) {
            this.type = type;
            {
                let array216 = /* Enum.values */ function () { let result = []; for (let val in boostrap.Nav.Type) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (let index215 = 0; index215 < array216.length; index215++) {
                    let t = array216[index215];
                    {
                        if (boostrap.Nav.Type["_$wrappers"][t].getValue() !== boostrap.Nav.Type["_$wrappers"][type].getValue() && boostrap.Nav.Type["_$wrappers"][t].getValue() !== boostrap.Nav.Type["_$wrappers"][Nav.Type.LINKS].getValue())
                            this.removeClass(boostrap.Nav.Type["_$wrappers"][t].getValue());
                    }
                }
            }
            if (boostrap.Nav.Type["_$wrappers"][type].getValue() !== boostrap.Nav.Type["_$wrappers"][Nav.Type.LINKS].getValue() && !this.hasClass(boostrap.Nav.Type["_$wrappers"][type].getValue())) {
                this.addClass(boostrap.Nav.Type["_$wrappers"][type].getValue());
            }
        }
        getAlignment() {
            return this.alignment;
        }
        setAlignment(alignment) {
            this.alignment = alignment;
            if (boostrap.Nav.Alignment["_$wrappers"][alignment].getValue() === boostrap.Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue() && !this.hasClass(boostrap.Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue())) {
                this.addClass(boostrap.Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue());
            }
            else {
                if (this.hasClass(boostrap.Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue())) {
                    this.removeClass(boostrap.Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue());
                }
            }
        }
        getSpacing() {
            return this.spacing;
        }
        setSpacing(spacing) {
            this.spacing = spacing;
            {
                let array218 = /* Enum.values */ function () { let result = []; for (let val in boostrap.Nav.Spacing) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (let index217 = 0; index217 < array218.length; index217++) {
                    let s = array218[index217];
                    {
                        if (boostrap.Nav.Spacing["_$wrappers"][s].getValue() !== boostrap.Nav.Spacing["_$wrappers"][Nav.Spacing.NONE].getValue()) {
                            if (boostrap.Nav.Spacing["_$wrappers"][s].getValue() !== boostrap.Nav.Spacing["_$wrappers"][spacing].getValue() && this.hasClass(boostrap.Nav.Spacing["_$wrappers"][s].getValue())) {
                                this.removeClass(boostrap.Nav.Spacing["_$wrappers"][s].getValue());
                            }
                        }
                    }
                }
            }
            if (boostrap.Nav.Spacing["_$wrappers"][spacing].getValue() !== boostrap.Nav.Spacing["_$wrappers"][Nav.Spacing.NONE].getValue() && !this.hasClass(boostrap.Nav.Spacing["_$wrappers"][spacing].getValue())) {
                this.addClass(boostrap.Nav.Spacing["_$wrappers"][spacing].getValue());
            }
        }
    }
    boostrap.Nav = Nav;
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
    })(Nav = boostrap.Nav || (boostrap.Nav = {}));
})(boostrap || (boostrap = {}));
(function (boostrap) {
    class NavBar extends JSContainer {
        constructor(name) {
            super(name, "nav");
            this.container = new JSContainer("container", "div");
            this.brand = new JSContainer("brand", "a");
            this.toggler = new input.JSButton("toggler", "<span class=\"navbar-toggler-icon\"></span>");
            this.collapse = new JSContainer("collapse", "div");
            this.addClass("navbar");
            this.addChild(this.container);
            this.brand.setAttribute("href", "#");
            this.container.addClass("container-fluid");
            this.container.addChild(this.brand);
            this.container.addChild(this.toggler);
            this.toggler.setAttribute("type", "button");
            this.toggler.setAttribute("data-bs-toggle", "collapse");
            this.toggler.setAttribute("data-bs-target", "#" + this.collapse.getId()).setAttribute("aria-controls", this.collapse.getId()).setAttribute("aria-expanded", "false").setAttribute("aria-label", "Toggle Navigation");
            this.container.addChild(this.collapse);
        }
        setBackground(ctx) {
            return this.applyContext(this, ctx, "bg");
        }
        applyContext(ctn, ctx, prefix) {
            {
                let array220 = /* Enum.values */ function () { let result = []; for (let val in boostrap.Constants.Context) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (let index219 = 0; index219 < array220.length; index219++) {
                    let ct = array220[index219];
                    {
                        if (ct === ctx) {
                            if (!ctn.hasClass(prefix + "-" + boostrap.Constants.Context["_$wrappers"][ct].getValue())) {
                                ctn.addClass(prefix + "-" + boostrap.Constants.Context["_$wrappers"][ct].getValue());
                            }
                        }
                        else {
                            if (ctn.hasClass(prefix + "-" + boostrap.Constants.Context["_$wrappers"][ct].getValue())) {
                                ctn.removeClass(prefix + "-" + boostrap.Constants.Context["_$wrappers"][ct].getValue());
                            }
                        }
                    }
                }
            }
            return this;
        }
        setForground(ctx) {
            return this.applyContext(this, ctx, "navbar");
        }
        setExpandSize(size) {
            {
                let array222 = /* Enum.values */ function () { let result = []; for (let val in boostrap.Constants.Size) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (let index221 = 0; index221 < array222.length; index221++) {
                    let si = array222[index221];
                    {
                        if (si === size) {
                            if ((size !== boostrap.Constants.Size.NORMAL) && !this.hasClass("navbar-expand-" + boostrap.Constants.Size["_$wrappers"][si].getValue())) {
                                this.addClass("navbar-expand-" + boostrap.Constants.Size["_$wrappers"][si].getValue());
                            }
                        }
                        else {
                            if ((size !== boostrap.Constants.Size.NORMAL) && this.hasClass("navbar-expand-" + boostrap.Constants.Size["_$wrappers"][si].getValue())) {
                                this.removeClass("navbar-expand-" + boostrap.Constants.Size["_$wrappers"][si].getValue());
                            }
                        }
                    }
                }
            }
            return this;
        }
        getContainer() {
            return this.container;
        }
        getBrand() {
            return this.brand;
        }
        getToggler() {
            return this.toggler;
        }
        getCollapse() {
            return this.collapse;
        }
        setPlacement(plc) {
            if (plc !== NavBar.Placement.DEFAULT) {
                {
                    let array224 = /* Enum.values */ function () { let result = []; for (let val in boostrap.NavBar.Placement) {
                        if (!isNaN(val)) {
                            result.push(parseInt(val, 10));
                        }
                    } return result; }();
                    for (let index223 = 0; index223 < array224.length; index223++) {
                        let pl = array224[index223];
                        {
                            if ((pl === plc) && !this.hasClass(boostrap.NavBar.Placement["_$wrappers"][pl].getValue())) {
                                this.addClass(boostrap.NavBar.Placement["_$wrappers"][pl].getValue());
                            }
                            else if ((pl !== plc) && this.hasClass(boostrap.NavBar.Placement["_$wrappers"][pl].getValue())) {
                                this.removeClass(boostrap.NavBar.Placement["_$wrappers"][pl].getValue());
                            }
                        }
                    }
                }
            }
            else {
                {
                    let array226 = /* Enum.values */ function () { let result = []; for (let val in boostrap.NavBar.Placement) {
                        if (!isNaN(val)) {
                            result.push(parseInt(val, 10));
                        }
                    } return result; }();
                    for (let index225 = 0; index225 < array226.length; index225++) {
                        let pl = array226[index225];
                        {
                            if (pl !== NavBar.Placement.DEFAULT)
                                this.removeClass(boostrap.NavBar.Placement["_$wrappers"][pl].getValue());
                        }
                    }
                }
            }
            return this;
        }
    }
    boostrap.NavBar = NavBar;
    NavBar["__class"] = "framework.components.boostrap.NavBar";
    NavBar["__interfaces"] = ["framework.components.api.Renderable"];
    (function (NavBar) {
        let Placement;
        (function (Placement) {
            Placement[Placement["FIXED_TOP"] = 0] = "FIXED_TOP";
            Placement[Placement["FIXED_BOTTOM"] = 1] = "FIXED_BOTTOM";
            Placement[Placement["DEFAULT"] = 2] = "DEFAULT";
            Placement[Placement["STICKY_TOP"] = 3] = "STICKY_TOP";
        })(Placement = NavBar.Placement || (NavBar.Placement = {}));
        /** @ignore */
        class Placement_$WRAPPER {
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
        NavBar.Placement_$WRAPPER = Placement_$WRAPPER;
        Placement["__class"] = "framework.components.boostrap.NavBar.Placement";
        Placement["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
        Placement["_$wrappers"] = { 0: new Placement_$WRAPPER(0, "FIXED_TOP", "fixed-top"), 1: new Placement_$WRAPPER(1, "FIXED_BOTTOM", "fixed-bottom"), 2: new Placement_$WRAPPER(2, "DEFAULT", ""), 3: new Placement_$WRAPPER(3, "STICKY_TOP", "sticky-top") };
    })(NavBar = boostrap.NavBar || (boostrap.NavBar = {}));
})(boostrap || (boostrap = {}));
(function (boostrap) {
    class NavItem extends JSContainer {
        constructor(name, tag) {
            super(name, tag);
            this.addClass("nav-item");
        }
    }
    boostrap.NavItem = NavItem;
    NavItem["__class"] = "framework.components.boostrap.NavItem";
    NavItem["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
    class PageItem extends JSContainer {
        constructor(name) {
            super(name, "li");
            this.addClass("page-item");
        }
        setDisabled(b) {
            if (b && !this.hasClass("disabled")) {
                this.addClass("disabled");
            }
            else if (!b && this.hasClass("disabled")) {
                this.removeClass("disabled");
            }
            return this;
        }
        setActive(b) {
            if (b && !this.hasClass("active")) {
                this.addClass("active");
            }
            else if (!b && this.hasClass("active")) {
                this.removeClass("active");
            }
            return this;
        }
    }
    boostrap.PageItem = PageItem;
    PageItem["__class"] = "framework.components.boostrap.PageItem";
    PageItem["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
    class Pagination extends JSContainer {
        constructor(name) {
            super(name, "ul");
            this.addClass("pagination");
        }
        addPageItem(pi) {
            this.addChild(pi);
            return this;
        }
        setSize(size) {
            {
                let array228 = /* Enum.values */ function () { let result = []; for (let val in boostrap.Constants.Size) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (let index227 = 0; index227 < array228.length; index227++) {
                    let si = array228[index227];
                    {
                        if (si === size) {
                            if ((size !== boostrap.Constants.Size.NORMAL) && !this.hasClass("pagination-" + boostrap.Constants.Size["_$wrappers"][si].getValue())) {
                                this.addClass("pagination-" + boostrap.Constants.Size["_$wrappers"][si].getValue());
                            }
                        }
                        else {
                            if ((size !== boostrap.Constants.Size.NORMAL) && this.hasClass("pagination-" + boostrap.Constants.Size["_$wrappers"][si].getValue())) {
                                this.removeClass("pagination-" + boostrap.Constants.Size["_$wrappers"][si].getValue());
                            }
                        }
                    }
                }
            }
            return this;
        }
        setJustifyContent(justifyContent) {
            {
                let array230 = /* Enum.values */ function () { let result = []; for (let val in boostrap.Constants.JustifyContent) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (let index229 = 0; index229 < array230.length; index229++) {
                    let js = array230[index229];
                    {
                        this.removeClass("justify-content-" + boostrap.Constants.JustifyContent["_$wrappers"][js].getValue());
                    }
                }
            }
            this.addClass("justify-content-" + boostrap.Constants.JustifyContent["_$wrappers"][justifyContent].getValue());
            return this;
        }
    }
    boostrap.Pagination = Pagination;
    Pagination["__class"] = "framework.components.boostrap.Pagination";
    Pagination["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
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
                let array232 = /* Enum.values */ function () { let result = []; for (let val in boostrap.Constants.Context) {
                    if (!isNaN(val)) {
                        result.push(parseInt(val, 10));
                    }
                } return result; }();
                for (let index231 = 0; index231 < array232.length; index231++) {
                    let ct = array232[index231];
                    {
                        this.bar.removeClass("bg-" + boostrap.Constants.Context["_$wrappers"][ct].getValue());
                    }
                }
            }
            if (context != null)
                this.bar.addClass("bg-" + boostrap.Constants.Context["_$wrappers"][context].getValue());
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
    boostrap.Progress = Progress;
    Progress["__class"] = "framework.components.boostrap.Progress";
    Progress["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
    var utils;
    (function (utils) {
        class FlexUtil {
            static setJustifyContent(justifyContent, r) {
                {
                    let array234 = /* Enum.values */ function () { let result = []; for (let val in boostrap.Constants.JustifyContent) {
                        if (!isNaN(val)) {
                            result.push(parseInt(val, 10));
                        }
                    } return result; }();
                    for (let index233 = 0; index233 < array234.length; index233++) {
                        let js = array234[index233];
                        {
                            r.removeClass("justify-content-" + boostrap.Constants.JustifyContent["_$wrappers"][js].getValue());
                        }
                    }
                }
                r.addClass("justify-content-" + boostrap.Constants.JustifyContent["_$wrappers"][justifyContent].getValue());
            }
        }
        utils.FlexUtil = FlexUtil;
        FlexUtil["__class"] = "framework.components.boostrap.utils.FlexUtil";
    })(utils = boostrap.utils || (boostrap.utils = {}));
})(boostrap || (boostrap = {}));
(function (boostrap) {
    /**
     * Bootstrap Alert implementation
     * @param {string} name
     * @class
     * @extends boostrap.BaseBootstrap
     */
    class Alert extends boostrap.BaseBootstrap {
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
    boostrap.Alert = Alert;
    Alert["__class"] = "framework.components.boostrap.Alert";
    Alert["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
    class Badge extends boostrap.BaseBootstrap {
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
    boostrap.Badge = Badge;
    Badge["__class"] = "framework.components.boostrap.Badge";
    Badge["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
    class Button extends boostrap.BaseBootstrap {
        constructor(name, tag) {
            super(name, tag);
            this.outline = false;
            this.disabled = false;
            this.block = false;
            this.size = boostrap.Constants.Size.NORMAL;
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
            if (boostrap.Constants.Size["_$wrappers"][size].getValue() === "sm") {
                if (this.hasClass("btn-lg")) {
                    this.removeClass("btn-lg");
                }
                this.addClass("btn-sm");
            }
            else if (boostrap.Constants.Size["_$wrappers"][size].getValue() === "lg") {
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
    boostrap.Button = Button;
    Button["__class"] = "framework.components.boostrap.Button";
    Button["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
(function (boostrap) {
    class ListGroupItem extends boostrap.BaseBootstrap {
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
    boostrap.ListGroupItem = ListGroupItem;
    ListGroupItem["__class"] = "framework.components.boostrap.ListGroupItem";
    ListGroupItem["__interfaces"] = ["framework.components.api.Renderable"];
})(boostrap || (boostrap = {}));
boostrap.Broot.main(null);
