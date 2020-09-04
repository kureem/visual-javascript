/* Generated from Java with JSweet 2.3.0 - http://www.jsweet.org */
class BaseBootstrap extends JSContainer {
    constructor(name, tag) {
        super(name, tag);
        if (this.context === undefined)
            this.context = null;
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
            let array122 = function () { let result = []; for (let val in Constants.Context) {
                if (!isNaN(val)) {
                    result.push(parseInt(val, 10));
                }
            } return result; }();
            for (let index121 = 0; index121 < array122.length; index121++) {
                let context = array122[index121];
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
class Boot {
    static main(args) {
        let nav = new Nav("test", "ul");
        nav.setJustifyContent(Constants.JustifyContent.AROUND);
        nav.render();
    }
}
Boot["__class"] = "framework.components.boostrap.Boot";
class Breadcrumb extends JSContainer {
    constructor(name) {
        super(name, "ol");
        this.addClass("breadcrumb");
    }
    addItem(name, label) {
        let item = new Breadcrumb.BreadcrumbItem(name, label);
        this.addChild(item);
        return item;
    }
    activate(name) {
        {
            let array124 = this.getChildren();
            for (let index123 = 0; index123 < array124.length; index123++) {
                let r = array124[index123];
                {
                    let item = r;
                    if (item.getName() === name) {
                        if (!item.isActive()) {
                            item.setActive(true);
                            let evt = new CustomEvent("activate");
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
            this.active = false;
            if (this.label_ === undefined)
                this.label_ = null;
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
class ButtonGroup extends JSContainer {
    constructor(name) {
        super(name, "div");
        /*private*/ this.vertical = false;
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
        /*private*/ this.header = new JSContainer("head", "div");
        /*private*/ this.content = new JSContainer("content", "div");
        /*private*/ this.footer = new JSContainer("footer", "div");
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
        /*private*/ this.title = new JSContainer("title", "h5").addClass("card-title");
        /*private*/ this.subtitle = new JSContainer("subtitle", "h6").addClass("card-subtitle mb-2 text-muted");
        /*private*/ this.text = new JSContainer("text", "p").addClass("card-text");
        /*private*/ this.foot = new JSContainer("foot", "div").addClass("card-foot");
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
class Constants {
}
Constants["__class"] = "framework.components.boostrap.Constants";
(function (Constants) {
    var Context;
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
            if (this.value === undefined)
                this.value = null;
            this.value = value;
        }
        getValue() {
            return this.value;
        }
        name() { return this._$name; }
        ordinal() { return this._$ordinal; }
    }
    Constants.Context_$WRAPPER = Context_$WRAPPER;
    Context["__class"] = "framework.components.boostrap.Constants.Context";
    Context["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
    Context["_$wrappers"] = [new Context_$WRAPPER(0, "PRIMARY", "primary"), new Context_$WRAPPER(1, "SECONDARY", "secondary"), new Context_$WRAPPER(2, "SUCCESS", "success"), new Context_$WRAPPER(3, "DANGER", "danger"), new Context_$WRAPPER(4, "WARNING", "warning"), new Context_$WRAPPER(5, "INFO", "info"), new Context_$WRAPPER(6, "LIGHT", "light"), new Context_$WRAPPER(7, "DARK", "dark")];
    var Size;
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
            if (this.value === undefined)
                this.value = null;
            this.value = value;
        }
        getValue() {
            return this.value;
        }
        name() { return this._$name; }
        ordinal() { return this._$ordinal; }
    }
    Constants.Size_$WRAPPER = Size_$WRAPPER;
    Size["__class"] = "framework.components.boostrap.Constants.Size";
    Size["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
    Size["_$wrappers"] = [new Size_$WRAPPER(0, "SMALL", "sm"), new Size_$WRAPPER(1, "LARGE", "lg"), new Size_$WRAPPER(2, "NORMAL", "")];
    var JustifyContent;
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
            if (this.value === undefined)
                this.value = null;
            this.value = value;
        }
        getValue() {
            return this.value;
        }
        name() { return this._$name; }
        ordinal() { return this._$ordinal; }
    }
    Constants.JustifyContent_$WRAPPER = JustifyContent_$WRAPPER;
    JustifyContent["__class"] = "framework.components.boostrap.Constants.JustifyContent";
    JustifyContent["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
    JustifyContent["_$wrappers"] = [new JustifyContent_$WRAPPER(0, "START", "start"), new JustifyContent_$WRAPPER(1, "CENTER", "center"), new JustifyContent_$WRAPPER(2, "END", "end"), new JustifyContent_$WRAPPER(3, "AROUND", "around"), new JustifyContent_$WRAPPER(4, "BETWEEN", "between")];
})(Constants || (Constants = {}));
class Dropdown extends JSContainer {
    constructor(name, tag) {
        super(name, tag);
        /*private*/ this.button = new Button("button", "button");
        /*private*/ this.btnSplit = new Button("split", "button");
        /*private*/ this.menu = new DropdownMenu("menu");
        /*private*/ this.split = false;
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
        let item = new DropdownMenu.DropdownItem(name, text);
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
class Nav extends JSContainer {
    constructor(name, tag) {
        super(name, tag);
        /*private*/ this.type = Nav.Type.LINKS;
        /*private*/ this.alignment = Nav.Alignment.HORIZONTAL;
        /*private*/ this.spacing = Nav.Spacing.NONE;
        this.addClass("nav");
    }
    setJustifyContent(justifyContent) {
        {
            let array126 = function () { let result = []; for (let val in Constants.JustifyContent) {
                if (!isNaN(val)) {
                    result.push(parseInt(val, 10));
                }
            } return result; }();
            for (let index125 = 0; index125 < array126.length; index125++) {
                let js = array126[index125];
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
            let array128 = function () { let result = []; for (let val in Nav.Type) {
                if (!isNaN(val)) {
                    result.push(parseInt(val, 10));
                }
            } return result; }();
            for (let index127 = 0; index127 < array128.length; index127++) {
                let t = array128[index127];
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
            let array130 = function () { let result = []; for (let val in Nav.Spacing) {
                if (!isNaN(val)) {
                    result.push(parseInt(val, 10));
                }
            } return result; }();
            for (let index129 = 0; index129 < array130.length; index129++) {
                let s = array130[index129];
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
    var Type;
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
            if (this.value === undefined)
                this.value = null;
            this.value = value;
        }
        getValue() {
            return this.value;
        }
        name() { return this._$name; }
        ordinal() { return this._$ordinal; }
    }
    Nav.Type_$WRAPPER = Type_$WRAPPER;
    Type["__class"] = "framework.components.boostrap.Nav.Type";
    Type["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
    Type["_$wrappers"] = [new Type_$WRAPPER(0, "PILLS", "nav-pills"), new Type_$WRAPPER(1, "TABS", "nav-tabs"), new Type_$WRAPPER(2, "LINKS", "nav-links")];
    var Alignment;
    (function (Alignment) {
        Alignment[Alignment["VERTICAL"] = 0] = "VERTICAL";
        Alignment[Alignment["HORIZONTAL"] = 1] = "HORIZONTAL";
    })(Alignment = Nav.Alignment || (Nav.Alignment = {}));
    /** @ignore */
    class Alignment_$WRAPPER {
        constructor(_$ordinal, _$name, value) {
            this._$ordinal = _$ordinal;
            this._$name = _$name;
            if (this.value === undefined)
                this.value = null;
            this.value = value;
        }
        getValue() {
            return this.value;
        }
        name() { return this._$name; }
        ordinal() { return this._$ordinal; }
    }
    Nav.Alignment_$WRAPPER = Alignment_$WRAPPER;
    Alignment["__class"] = "framework.components.boostrap.Nav.Alignment";
    Alignment["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
    Alignment["_$wrappers"] = [new Alignment_$WRAPPER(0, "VERTICAL", "flex-column"), new Alignment_$WRAPPER(1, "HORIZONTAL", "")];
    var Spacing;
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
            if (this.value === undefined)
                this.value = null;
            this.value = value;
        }
        getValue() {
            return this.value;
        }
        name() { return this._$name; }
        ordinal() { return this._$ordinal; }
    }
    Nav.Spacing_$WRAPPER = Spacing_$WRAPPER;
    Spacing["__class"] = "framework.components.boostrap.Nav.Spacing";
    Spacing["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
    Spacing["_$wrappers"] = [new Spacing_$WRAPPER(0, "FILL", "nav-fill"), new Spacing_$WRAPPER(1, "JUSTIFIED", "nav-justified"), new Spacing_$WRAPPER(2, "NONE", "")];
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
        /*private*/ this.bar = new JSContainer("bar", "div").addClass("progress-bar");
        /*private*/ this.min = 0;
        /*private*/ this.max = 100;
        /*private*/ this.value = 0;
        if (this.context === undefined)
            this.context = null;
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
            let array132 = function () { let result = []; for (let val in Constants.Context) {
                if (!isNaN(val)) {
                    result.push(parseInt(val, 10));
                }
            } return result; }();
            for (let index131 = 0; index131 < array132.length; index131++) {
                let ct = array132[index131];
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
        let OldRange = this.max - this.min;
        let NewRange = 100;
        let NewValue = ((((value - this.min) * NewRange) / OldRange | 0)) + 0;
        this.bar.setStyle("width", NewValue + "%");
    }
    getBar() {
        return this.bar;
    }
}
Progress["__class"] = "framework.components.boostrap.Progress";
Progress["__interfaces"] = ["framework.components.api.Renderable"];
class Alert extends BaseBootstrap {
    constructor(name) {
        super(name, "div");
        /*private*/ this.heading = new JSContainer("heading", "h4").addClass("alert-heading");
        /*private*/ this.body = new JSContainer("body", "div");
        /*private*/ this.__close = new JSContainer("close", "button").setAttribute("type", "button").addClass("close").setAttribute("data-dismiss", "alert").setAttribute("aria-label", "close");
        /*private*/ this.closing = false;
        this.addClass("alert");
        this.setAttribute("role", "alert");
        this.addChild(this.heading.setStyle("display", "none"));
        this.addChild(this.body);
        this.addChild(this.__close.setStyle("display", "none").setHtml("<span aria-hidden=\"true\">&times;</span>"));
        this.addClass("fade");
        this.getNative().addEventListener("animationend", (e) => {
            if (this.closing) {
                let evt = new CustomEvent("closed.bs.alert");
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
            let evt = new CustomEvent("close.bs.alert");
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
        /*private*/ this.outline = false;
        /*private*/ this.disabled = false;
        /*private*/ this.block = false;
        /*private*/ this.size = Constants.Size.NORMAL;
        if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(tag, "a")) {
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
            if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.getTag(), "a")) {
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
            if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.getTag(), "a")) {
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
Boot.main(null);
