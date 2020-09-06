/* Generated from Java with JSweet 2.3.0 - http://www.jsweet.org */
abstract class BaseBootstrap extends JSContainer {
    /*private*/ context : Constants.Context;

    public constructor(name : string, tag : string) {
        super(name, tag);
        if(this.context===undefined) this.context = null;
        this.addClass(this.getBoostrapName());
    }

    public setContext(context : Constants.Context) : BaseBootstrap {
        this.context = context;
        this.clearContexts();
        if(context != null) this.addClass(this.getBoostrapName() + "-" + Constants.Context["_$wrappers"][context].getValue());
        return this;
    }

    public refresh() {
        this.setContext(this.context);
    }

    clearContexts() : BaseBootstrap {
        {
            let array136 = /* Enum.values */function() { let result: number[] = []; for(let val in Constants.Context) { if(!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
            for(let index135=0; index135 < array136.length; index135++) {
                let context = array136[index135];
                {
                    this.removeClass(this.getBoostrapName() + "-" + Constants.Context["_$wrappers"][context].getValue());
                }
            }
        }
        return this;
    }

    public getContext() : Constants.Context {
        return this.context;
    }

    public abstract getBoostrapName() : string;
}
BaseBootstrap["__class"] = "framework.components.boostrap.BaseBootstrap";
BaseBootstrap["__interfaces"] = ["framework.components.api.Renderable"];



class Boot {
    public static main(args : string[]) {
        let nav : Nav = new Nav("test", "ul");
        nav.setJustifyContent(Constants.JustifyContent.AROUND);
        nav.render();
    }
}
Boot["__class"] = "framework.components.boostrap.Boot";


class Breadcrumb extends JSContainer {
    public constructor(name : string) {
        super(name, "ol");
        this.addClass("breadcrumb");
    }

    public addItem(name : string, label : string) : Breadcrumb.BreadcrumbItem {
        let item : Breadcrumb.BreadcrumbItem = new Breadcrumb.BreadcrumbItem(name, label);
        this.addChild(item);
        return item;
    }

    public activate(name : string) {
        {
            let array138 = this.getChildren();
            for(let index137=0; index137 < array138.length; index137++) {
                let r = array138[index137];
                {
                    let item : Breadcrumb.BreadcrumbItem = <Breadcrumb.BreadcrumbItem><any>r;
                    if(item.getName() === name) {
                        if(!item.isActive()) {
                            item.setActive(true);
                            let evt : CustomEvent = new CustomEvent("activate");
                            evt["item"] = item;
                            evt["source"] = this;
                            this.fireListener("activate", evt);
                        }
                    } else {
                        if(item.isActive()) {
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



namespace Breadcrumb {

    export class BreadcrumbItem extends JSContainer {
        label_ : string;

        active : boolean = false;

        public constructor(name : string, label : string) {
            super(name, "li");
            if(this.label_===undefined) this.label_ = null;
            this.addClass("breadcrumb-item");
            this.setLabel(label);
            this.addEventListener(new BreadcrumbItem.BreadcrumbItem$0(this), "click");
        }

        public setLabel(label : string) {
            this.label_ = label;
            this.refresh();
        }

        public setActive(b : boolean) {
            this.active = b;
            this.refresh();
        }

        public refresh() {
            if(this.active) {
                if(this.hasClass("active")) this.removeClass("active");
                this.setHtml("<a href=\"#\">" + this.label_ + "</a>");
            } else {
                this.setHtml(this.label_);
                if(!this.hasClass("active")) {
                    this.addClass("active");
                }
            }
        }

        public isActive() : boolean {
            return this.active;
        }
    }
    BreadcrumbItem["__class"] = "framework.components.boostrap.Breadcrumb.BreadcrumbItem";
    BreadcrumbItem["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace BreadcrumbItem {

        export class BreadcrumbItem$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source : api.Renderable, evt : Event) {
                (<Breadcrumb><any>source.getParent()).activate(source.getName());
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        BreadcrumbItem$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

}


class ButtonGroup extends JSContainer {
    public static SIZE_LARGE : string = "lg";

    public static SIZE_SMALL : string = "sm";

    public static SIZE_NORMAL : string = "";

    /*private*/ vertical : boolean = false;

    public constructor(name : string) {
        super(name, "div");
        this.addClass("btn-group");
    }

    public isVertical() : boolean {
        return this.vertical;
    }

    public setVertical(vertical : boolean) {
        if(vertical && !this.hasClass("btn-group-vertical")) {
            this.addClass("btn-group-vertical");
            if(this.hasClass("btn-group")) {
                this.removeClass("btn-group");
            }
        } else {
            this.removeClass("btn-group-vertical");
            if(!this.hasClass("btn-group")) {
                this.addClass("btn-group");
            }
        }
        this.vertical = vertical;
    }

    public setSize(size : string) : ButtonGroup {
        if(size === "sm") {
            if(this.hasClass("btn-group-lg")) {
                this.removeClass("btn-group-lg");
            }
            this.addClass("btn-group-sm");
        } else if(size === "lg") {
            if(this.hasClass("btn-group-sm")) {
                this.removeClass("btn-group-sm");
            }
            this.addClass("btn-group-lg");
        } else {
            if(this.hasClass("btn-group-sm")) {
                this.removeClass("btn-group-sm");
            }
            if(this.hasClass("btn-group-lg")) {
                this.removeClass("btn-group-lg");
            }
        }
        return this;
    }
}
ButtonGroup["__class"] = "framework.components.boostrap.ButtonGroup";
ButtonGroup["__interfaces"] = ["framework.components.api.Renderable"];



class Card extends JSContainer {
    /*private*/ header : JSContainer = new JSContainer("head", "div");

    /*private*/ content : JSContainer = new JSContainer("content", "div");

    /*private*/ footer : JSContainer = new JSContainer("footer", "div");

    public constructor(name : string) {
        super(name, "div");
        this.addClass("card");
        this.addChild(this.header);
        this.addChild(this.content);
        this.addChild(this.footer);
    }

    public getUIHeader() : JSContainer {
        return this.header;
    }

    public getUIContent() : JSContainer {
        return this.content;
    }

    public getUIFooter() : JSContainer {
        return this.footer;
    }

    public addHeaderImage(img : JSContainer) : Card {
        this.header.addChild(img);
        img.addClass("card-img-top");
        return this;
    }
}
Card["__class"] = "framework.components.boostrap.Card";
Card["__interfaces"] = ["framework.components.api.Renderable"];



class CardBody extends JSContainer {
    /*private*/ title : JSContainer = new JSContainer("title", "h5").addClass("card-title");

    /*private*/ subtitle : JSContainer = new JSContainer("subtitle", "h6").addClass("card-subtitle mb-2 text-muted");

    /*private*/ text : JSContainer = new JSContainer("text", "p").addClass("card-text");

    /*private*/ foot : JSContainer = new JSContainer("foot", "div").addClass("card-foot");

    public constructor(name : string) {
        super(name, "div");
        this.addClass("card-body");
        this.addChild(this.title);
        this.addChild(this.subtitle);
        this.addChild(this.text);
        this.addChild(this.foot);
    }

    public setTitle(title : string) : CardBody {
        this.title.setHtml(title);
        return this;
    }

    public setSubtitle(subtitle : string) : CardBody {
        this.subtitle.setHtml(subtitle);
        return this;
    }

    public setText(txt : string) : CardBody {
        this.text.setHtml(txt);
        return this;
    }

    public getUITitle() : JSContainer {
        return this.title;
    }

    public getUISubtitle() : JSContainer {
        return this.subtitle;
    }

    public getUIText() : JSContainer {
        return this.text;
    }

    public getUIFoot() : JSContainer {
        return this.foot;
    }

    public addCardLink(link : JSContainer) : CardBody {
        link.addClass("card-link");
        this.foot.addChild(link);
        return this;
    }
}
CardBody["__class"] = "framework.components.boostrap.CardBody";
CardBody["__interfaces"] = ["framework.components.api.Renderable"];



class CardFooter extends JSContainer {
    public constructor(name : string) {
        super(name, "div");
        this.addClass("card-footer text-muted");
    }
}
CardFooter["__class"] = "framework.components.boostrap.CardFooter";
CardFooter["__interfaces"] = ["framework.components.api.Renderable"];



class CardHeader extends JSContainer {
    public constructor(name : string) {
        super(name, "div");
        this.addClass("card-header");
    }
}
CardHeader["__class"] = "framework.components.boostrap.CardHeader";
CardHeader["__interfaces"] = ["framework.components.api.Renderable"];



class Carousel extends JSContainer {
    /*private*/ inner : JSContainer = new JSContainer("inner", "div").addClass("carousel-inner");

    /*private*/ controlPrev : JSContainer = new JSContainer("control-prev", "a");

    /*private*/ controlNext : JSContainer = new JSContainer("control-next", "a");

    public constructor(name : string) {
        super(name, "div");
        this.addClass("carousel");
        this.addClass("slide");
        this.addChild(this.inner);
        this.addChild(this.controlPrev);
        this.addChild(this.controlNext);
        this.decoratecontrol(this.controlPrev, "prev");
        this.decoratecontrol(this.controlNext, "next");
    }

    /*private*/ decoratecontrol(control : JSContainer, dir : string) {
        control.addClass("carousel-control-" + dir);
        control.setAttribute("href", "#" + this.getId()).setAttribute("role", "button").setAttribute("data-slide", dir);
        control.addChild(new JSContainer("span").addClass("carousel-control-" + dir + "-icon").setAttribute("aria-hidden", "true"));
        control.addChild(new JSContainer("span").addClass("sr-only").setHtml(dir));
    }

    public setShowControls(b : boolean) {
        this.controlPrev.setStyle("display", b?null:"none");
        this.controlNext.setStyle("display", b?null:"none");
    }

    public isShowControls() : boolean {
        return this.controlPrev.getStyle("display") !== "none";
    }

    public setCrossFade(b : boolean) {
        if(b && !this.hasClass("carousel-fade")) {
            this.addClass("carousel-fade");
        } else {
            if(this.hasClass("carousel-fade")) {
                this.removeClass("carousel-fade");
            }
        }
    }

    public isCrossFade() : boolean {
        return this.hasClass("carousel-fade");
    }

    public addItem(item : CarouselItem) {
        this.inner.addChild(item);
    }

    public setInterval(interval : number) {
        this.setAttribute("data-interval", interval.toString());
    }

    public setKeyboard(b : boolean) {
        this.setAttribute("keyboard", b?"true":"false");
    }

    public setPauseOnHover(b : boolean) {
        if(b) {
            this.setAttribute("data-pause", "hover");
        } else {
            this.setAttribute("data-pause", null);
        }
    }

    public setRideCarousel(b : boolean) {
        if(b) {
            this.setAttribute("data-ride", "carousel");
        } else {
            this.setAttribute("data-ride", null);
        }
    }

    public setWrap(b : boolean) {
        this.setAttribute("wrap", b?"true":"false");
    }

    public setTouch(b : boolean) {
        this.setAttribute("touch", b?"true":"false");
    }

    public cycle() {
        this.invoke("cycle");
    }

    public pause() {
        this.invoke("pause");
    }

    public prev() {
        this.invoke("prev");
    }

    public next() {
        this.invoke("next");
    }

    public dispose() {
        this.invoke("dispose");
    }

    /*private*/ invoke(method : string) {
        let el : HTMLElement = this.getNative();
        let fn : Function = <Function>el["carousel"];
        fn.call(el, method);
    }
}
Carousel["__class"] = "framework.components.boostrap.Carousel";
Carousel["__interfaces"] = ["framework.components.api.Renderable"];



class CarouselItem extends JSContainer {
    /*private*/ img : JSContainer = new JSContainer("img", "img").addClass("d-block w-100");

    /*private*/ caption : JSContainer = new JSContainer("caption", "div").addClass("carousel-caption d-none d-md-block");

    /*private*/ title : JSContainer = new JSContainer("title", "h5");

    /*private*/ subtitle : JSContainer = new JSContainer("subtitle", "p");

    public constructor(name : string) {
        super(name, "div");
        this.addChild(this.img);
        this.addChild(this.caption);
        this.caption.addChild(this.title).addChild(this.subtitle);
        this.caption.setStyle("display", "none");
    }

    public setShowCaption(b : boolean) {
        this.caption.setStyle("display", b?null:"none");
    }

    public isShowCaption() : boolean {
        return this.caption.getStyle("display") !== "none";
    }

    public setTitle(str : string) {
        this.title.setHtml(str);
        this.setShowCaption(true);
    }

    public setSubtitle(str : string) {
        this.subtitle.setHtml(str);
        this.setShowCaption(true);
    }

    public setInterval(interval : number) {
        this.setAttribute("data-interval", interval.toString());
    }
}
CarouselItem["__class"] = "framework.components.boostrap.CarouselItem";
CarouselItem["__interfaces"] = ["framework.components.api.Renderable"];



class Constants {}
Constants["__class"] = "framework.components.boostrap.Constants";


namespace Constants {

    export enum Context {
        PRIMARY, SECONDARY, SUCCESS, DANGER, WARNING, INFO, LIGHT, DARK
    }

    /** @ignore */
    export class Context_$WRAPPER {
        value;

        constructor(protected _$ordinal : number, protected _$name : string, value) {
            if(this.value===undefined) this.value = null;
            this.value = value;
        }

        public getValue() : string {
            return this.value;
        }
        public name() : string { return this._$name; }
        public ordinal() : number { return this._$ordinal; }
    }
    Context["__class"] = "framework.components.boostrap.Constants.Context";
    Context["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];

    Context["_$wrappers"] = [new Context_$WRAPPER(0, "PRIMARY", "primary"), new Context_$WRAPPER(1, "SECONDARY", "secondary"), new Context_$WRAPPER(2, "SUCCESS", "success"), new Context_$WRAPPER(3, "DANGER", "danger"), new Context_$WRAPPER(4, "WARNING", "warning"), new Context_$WRAPPER(5, "INFO", "info"), new Context_$WRAPPER(6, "LIGHT", "light"), new Context_$WRAPPER(7, "DARK", "dark")];


    export enum Size {
        SMALL, LARGE, NORMAL
    }

    /** @ignore */
    export class Size_$WRAPPER {
        value;

        constructor(protected _$ordinal : number, protected _$name : string, value) {
            if(this.value===undefined) this.value = null;
            this.value = value;
        }

        public getValue() : string {
            return this.value;
        }
        public name() : string { return this._$name; }
        public ordinal() : number { return this._$ordinal; }
    }
    Size["__class"] = "framework.components.boostrap.Constants.Size";
    Size["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];

    Size["_$wrappers"] = [new Size_$WRAPPER(0, "SMALL", "sm"), new Size_$WRAPPER(1, "LARGE", "lg"), new Size_$WRAPPER(2, "NORMAL", "")];


    export enum JustifyContent {
        START, CENTER, END, AROUND, BETWEEN
    }

    /** @ignore */
    export class JustifyContent_$WRAPPER {
        value;

        constructor(protected _$ordinal : number, protected _$name : string, value) {
            if(this.value===undefined) this.value = null;
            this.value = value;
        }

        public getValue() : string {
            return this.value;
        }
        public name() : string { return this._$name; }
        public ordinal() : number { return this._$ordinal; }
    }
    JustifyContent["__class"] = "framework.components.boostrap.Constants.JustifyContent";
    JustifyContent["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];

    JustifyContent["_$wrappers"] = [new JustifyContent_$WRAPPER(0, "START", "start"), new JustifyContent_$WRAPPER(1, "CENTER", "center"), new JustifyContent_$WRAPPER(2, "END", "end"), new JustifyContent_$WRAPPER(3, "AROUND", "around"), new JustifyContent_$WRAPPER(4, "BETWEEN", "between")];


    export enum ScreenSize {
        SMALL, MEDIUM, LARGE, EXTRA_LARGE
    }

    /** @ignore */
    export class ScreenSize_$WRAPPER {
        value;

        constructor(protected _$ordinal : number, protected _$name : string, value) {
            if(this.value===undefined) this.value = null;
            this.value = value;
        }

        public getValue() : string {
            return this.value;
        }
        public name() : string { return this._$name; }
        public ordinal() : number { return this._$ordinal; }
    }
    ScreenSize["__class"] = "framework.components.boostrap.Constants.ScreenSize";
    ScreenSize["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];

    ScreenSize["_$wrappers"] = [new ScreenSize_$WRAPPER(0, "SMALL", "sm"), new ScreenSize_$WRAPPER(1, "MEDIUM", "md"), new ScreenSize_$WRAPPER(2, "LARGE", "lg"), new ScreenSize_$WRAPPER(3, "EXTRA_LARGE", "xl")];

}


class Dropdown extends JSContainer {
    /*private*/ button : Button = new Button("button", "button");

    /*private*/ btnSplit : Button = new Button("split", "button");

    /*private*/ menu : DropdownMenu = new DropdownMenu("menu");

    /*private*/ split : boolean = false;

    public constructor(name : string, tag : string) {
        super(name, tag);
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

    public getButton() : Button {
        return this.button;
    }

    public getMenu() : DropdownMenu {
        return this.menu;
    }

    public setSplit(b : boolean) : Dropdown {
        if(b) {
            this.btnSplit.setStyle("display", null);
        } else {
            this.btnSplit.setStyle("display", "none");
        }
        this.split = b;
        return this;
    }

    /**
     * 
     * @param {HTMLElement} parent
     */
    public render(parent : HTMLElement) {
        if(this.split) {
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
    public constructor(name : string) {
        super(name, "div");
        this.addClass("dropdown-menu");
        this.setAttribute("aria-labelledby", "dropdownMenuButton");
    }

    public addItem(name : string, text : string) : DropdownMenu.DropdownItem {
        let item : DropdownMenu.DropdownItem = new DropdownMenu.DropdownItem(name, text);
        this.addChild(item);
        return item;
    }
}
DropdownMenu["__class"] = "framework.components.boostrap.DropdownMenu";
DropdownMenu["__interfaces"] = ["framework.components.api.Renderable"];



namespace DropdownMenu {

    export class DropdownItem extends JSContainer {
        public constructor(name : string, text : string) {
            super(name, "a");
            this.setAttribute("href", "javascript:void(0)");
            this.addClass("dropdown-item");
            this.setHtml(text);
        }

        public setText(text : string) : DropdownMenu.DropdownItem {
            this.setHtml(text);
            return this;
        }
    }
    DropdownItem["__class"] = "framework.components.boostrap.DropdownMenu.DropdownItem";
    DropdownItem["__interfaces"] = ["framework.components.api.Renderable"];


}


class ListGroup extends JSContainer {
    public constructor(name : string, tag : string) {
        super(name, tag);
        this.addClass("list-group");
    }

    public setFlush(b : boolean) {
        if(b && !this.hasClass("list-group-flush")) {
            this.addClass("list-group-flush");
        } else if(!b && this.hasClass("list-group-flush")) {
            this.removeClass("list-group-flush");
        }
    }

    public isFlush() : boolean {
        return this.hasClass("list-group-flush");
    }

    public setHorizontal$boolean(b : boolean) {
        if(b && !this.hasClass("list-group-horizontal")) {
            this.addClass("list-group-horizontal");
        } else if(!b && this.hasClass("list-group-horizontal")) {
            this.removeClass("list-group-horizontal");
        }
    }

    public isHorizontal() : boolean {
        return this.hasClass("list-group-horizontal");
    }

    /*private*/ clearHorizontalCls() {
        this.removeClass("list-group-horizontal");
        {
            let array140 = /* Enum.values */function() { let result: number[] = []; for(let val in Constants.ScreenSize) { if(!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
            for(let index139=0; index139 < array140.length; index139++) {
                let size = array140[index139];
                {
                    this.removeClass("list-group-horizontal-" + Constants.ScreenSize["_$wrappers"][size].getValue());
                }
            }
        }
    }

    public setHorizontal$framework_components_boostrap_Constants_ScreenSize(screenSize : Constants.ScreenSize) {
        this.clearHorizontalCls();
        this.addClass("list-group-horizontal-" + Constants.ScreenSize["_$wrappers"][screenSize].getValue());
    }

    public setHorizontal(screenSize? : any) : any {
        if(((typeof screenSize === 'number') || screenSize === null)) {
            return <any>this.setHorizontal$framework_components_boostrap_Constants_ScreenSize(screenSize);
        } else if(((typeof screenSize === 'boolean') || screenSize === null)) {
            return <any>this.setHorizontal$boolean(screenSize);
        } else throw new Error('invalid overload');
    }

    public addItem(item : ListGroupItem) {
        this.addChild(item);
    }
}
ListGroup["__class"] = "framework.components.boostrap.ListGroup";
ListGroup["__interfaces"] = ["framework.components.api.Renderable"];



class Nav extends JSContainer {
    /*private*/ type : Nav.Type = Nav.Type.LINKS;

    /*private*/ alignment : Nav.Alignment = Nav.Alignment.HORIZONTAL;

    /*private*/ spacing : Nav.Spacing = Nav.Spacing.NONE;

    public constructor(name : string, tag : string) {
        super(name, tag);
        this.addClass("nav");
    }

    public setJustifyContent(justifyContent : Constants.JustifyContent) : Nav {
        {
            let array142 = /* Enum.values */function() { let result: number[] = []; for(let val in Constants.JustifyContent) { if(!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
            for(let index141=0; index141 < array142.length; index141++) {
                let js = array142[index141];
                {
                    this.removeClass("justify-content-" + Constants.JustifyContent["_$wrappers"][js].getValue());
                }
            }
        }
        this.addClass("justify-content-" + Constants.JustifyContent["_$wrappers"][justifyContent].getValue());
        return this;
    }

    public getType() : Nav.Type {
        return this.type;
    }

    public setType(type : Nav.Type) {
        this.type = type;
        {
            let array144 = /* Enum.values */function() { let result: number[] = []; for(let val in Nav.Type) { if(!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
            for(let index143=0; index143 < array144.length; index143++) {
                let t = array144[index143];
                {
                    if(Nav.Type["_$wrappers"][t].getValue() !== Nav.Type["_$wrappers"][type].getValue() && Nav.Type["_$wrappers"][t].getValue() !== Nav.Type["_$wrappers"][Nav.Type.LINKS].getValue()) this.removeClass(Nav.Type["_$wrappers"][t].getValue());
                }
            }
        }
        if(Nav.Type["_$wrappers"][type].getValue() !== Nav.Type["_$wrappers"][Nav.Type.LINKS].getValue() && !this.hasClass(Nav.Type["_$wrappers"][type].getValue())) {
            this.addClass(Nav.Type["_$wrappers"][type].getValue());
        }
    }

    public getAlignment() : Nav.Alignment {
        return this.alignment;
    }

    public setAlignment(alignment : Nav.Alignment) {
        this.alignment = alignment;
        if(Nav.Alignment["_$wrappers"][alignment].getValue() === Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue() && !this.hasClass(Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue())) {
            this.addClass(Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue());
        } else {
            if(this.hasClass(Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue())) {
                this.removeClass(Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue());
            }
        }
    }

    public getSpacing() : Nav.Spacing {
        return this.spacing;
    }

    public setSpacing(spacing : Nav.Spacing) {
        this.spacing = spacing;
        {
            let array146 = /* Enum.values */function() { let result: number[] = []; for(let val in Nav.Spacing) { if(!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
            for(let index145=0; index145 < array146.length; index145++) {
                let s = array146[index145];
                {
                    if(Nav.Spacing["_$wrappers"][s].getValue() !== Nav.Spacing["_$wrappers"][Nav.Spacing.NONE].getValue()) {
                        if(Nav.Spacing["_$wrappers"][s].getValue() !== Nav.Spacing["_$wrappers"][spacing].getValue() && this.hasClass(Nav.Spacing["_$wrappers"][s].getValue())) {
                            this.removeClass(Nav.Spacing["_$wrappers"][s].getValue());
                        }
                    }
                }
            }
        }
        if(Nav.Spacing["_$wrappers"][spacing].getValue() !== Nav.Spacing["_$wrappers"][Nav.Spacing.NONE].getValue() && !this.hasClass(Nav.Spacing["_$wrappers"][spacing].getValue())) {
            this.addClass(Nav.Spacing["_$wrappers"][spacing].getValue());
        }
    }
}
Nav["__class"] = "framework.components.boostrap.Nav";
Nav["__interfaces"] = ["framework.components.api.Renderable"];



namespace Nav {

    export enum Type {
        PILLS, TABS, LINKS
    }

    /** @ignore */
    export class Type_$WRAPPER {
        value;

        constructor(protected _$ordinal : number, protected _$name : string, value) {
            if(this.value===undefined) this.value = null;
            this.value = value;
        }

        public getValue() : string {
            return this.value;
        }
        public name() : string { return this._$name; }
        public ordinal() : number { return this._$ordinal; }
    }
    Type["__class"] = "framework.components.boostrap.Nav.Type";
    Type["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];

    Type["_$wrappers"] = [new Type_$WRAPPER(0, "PILLS", "nav-pills"), new Type_$WRAPPER(1, "TABS", "nav-tabs"), new Type_$WRAPPER(2, "LINKS", "nav-links")];


    export enum Alignment {
        VERTICAL, HORIZONTAL
    }

    /** @ignore */
    export class Alignment_$WRAPPER {
        value;

        constructor(protected _$ordinal : number, protected _$name : string, value) {
            if(this.value===undefined) this.value = null;
            this.value = value;
        }

        public getValue() : string {
            return this.value;
        }
        public name() : string { return this._$name; }
        public ordinal() : number { return this._$ordinal; }
    }
    Alignment["__class"] = "framework.components.boostrap.Nav.Alignment";
    Alignment["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];

    Alignment["_$wrappers"] = [new Alignment_$WRAPPER(0, "VERTICAL", "flex-column"), new Alignment_$WRAPPER(1, "HORIZONTAL", "")];


    export enum Spacing {
        FILL, JUSTIFIED, NONE
    }

    /** @ignore */
    export class Spacing_$WRAPPER {
        value;

        constructor(protected _$ordinal : number, protected _$name : string, value) {
            if(this.value===undefined) this.value = null;
            this.value = value;
        }

        public getValue() : string {
            return this.value;
        }
        public name() : string { return this._$name; }
        public ordinal() : number { return this._$ordinal; }
    }
    Spacing["__class"] = "framework.components.boostrap.Nav.Spacing";
    Spacing["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];

    Spacing["_$wrappers"] = [new Spacing_$WRAPPER(0, "FILL", "nav-fill"), new Spacing_$WRAPPER(1, "JUSTIFIED", "nav-justified"), new Spacing_$WRAPPER(2, "NONE", "")];

}


class NavItem extends JSContainer {
    public constructor(name : string, tag : string) {
        super(name, tag);
        this.addClass("nav-item");
    }
}
NavItem["__class"] = "framework.components.boostrap.NavItem";
NavItem["__interfaces"] = ["framework.components.api.Renderable"];



class Progress extends JSContainer {
    /*private*/ bar : JSContainer = new JSContainer("bar", "div").addClass("progress-bar");

    /*private*/ context : Constants.Context;

    /*private*/ min : number = 0;

    /*private*/ max : number = 100;

    /*private*/ value : number = 0;

    public constructor(name : string) {
        super(name, "div");
        if(this.context===undefined) this.context = null;
        this.addClass("progress");
        this.addChild(this.bar);
        this.bar.setAttribute("aria-valuemin", this.min.toString());
        this.bar.setAttribute("aria-valuemax", this.max.toString());
        this.bar.setAttribute("aria-valuenow", this.value.toString());
        this.bar.setAttribute("role", "progressbar");
    }

    public getContext() : Constants.Context {
        return this.context;
    }

    public setAnimated(b : boolean) {
        if(b) {
            if(!this.bar.hasClass("progress-bar-animated")) {
                this.bar.addClass("progress-bar-animated");
            }
        } else {
            if(this.bar.hasClass("progress-bar-animated")) {
                this.bar.removeClass("progress-bar-animated");
            }
        }
    }

    public isAnimated() : boolean {
        return this.bar.hasClass("progress-bar-animated");
    }

    public setStriped(b : boolean) {
        if(b) {
            if(!this.bar.hasClass("progress-bar-striped")) {
                this.bar.addClass("progress-bar-striped");
            }
        } else {
            if(this.bar.hasClass("progress-bar-striped")) {
                this.bar.removeClass("progress-bar-striped");
            }
        }
    }

    public isStriped() : boolean {
        return this.bar.hasClass("progress-bar-striped");
    }

    public setContext(context : Constants.Context) {
        this.context = context;
        {
            let array148 = /* Enum.values */function() { let result: number[] = []; for(let val in Constants.Context) { if(!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
            for(let index147=0; index147 < array148.length; index147++) {
                let ct = array148[index147];
                {
                    this.bar.removeClass("bg-" + Constants.Context["_$wrappers"][ct].getValue());
                }
            }
        }
        if(context != null) this.bar.addClass("bg-" + Constants.Context["_$wrappers"][context].getValue());
    }

    public getMin() : number {
        return this.min;
    }

    public setMin(min : number) {
        this.min = min;
        this.bar.setAttribute("aria-valuemin", min.toString());
    }

    public getMax() : number {
        return this.max;
    }

    public setMax(max : number) {
        this.max = max;
        this.bar.setAttribute("aria-valuemax", max.toString());
    }

    public getValue() : number {
        return this.value;
    }

    public setValue(value : number) {
        this.value = value;
        this.bar.setAttribute("aria-valuenow", value.toString());
        let OldRange : number = this.max - this.min;
        let NewRange : number = 100;
        let NewValue : number = ((((value - this.min) * NewRange) / OldRange|0)) + 0;
        this.bar.setStyle("width", NewValue + "%");
    }

    public getBar() : JSContainer {
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
    /*private*/ heading : JSContainer = new JSContainer("heading", "h4").addClass("alert-heading");

    /*private*/ body : JSContainer = new JSContainer("body", "div");

    /*private*/ __close : JSContainer = new JSContainer("close", "button").setAttribute("type", "button").addClass("close").setAttribute("data-dismiss", "alert").setAttribute("aria-label", "close");

    /*private*/ closing : boolean = false;

    public constructor(name : string) {
        super(name, "div");
        this.addClass("alert");
        this.setAttribute("role", "alert");
        this.addChild(this.heading.setStyle("display", "none"));
        this.addChild(this.body);
        this.addChild(this.__close.setStyle("display", "none").setHtml("<span aria-hidden=\"true\">&times;</span>"));
        this.addClass("fade");
        this.getNative().addEventListener("animationend", (e) => {
            if(this.closing) {
                let evt : CustomEvent = new CustomEvent("closed.bs.alert");
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
    public getBoostrapName() : string {
        return "alert";
    }

    public setHeading(heading : string) : Alert {
        if(heading != null && heading.length > 0) {
            this.heading.setStyle("display", null);
            this.heading.setHtml(heading);
        } else {
            this.heading.setStyle("display", "none");
        }
        return this;
    }

    public getHeading() : JSContainer {
        return this.heading;
    }

    public getBody() : JSContainer {
        return this.body;
    }

    public setDismissable(b : boolean) : Alert {
        if(b) {
            if(!this.hasClass("alert-dismissible")) {
                this.addClass("alert-dismissible");
            }
            this.__close.setStyle("display", null);
        } else {
            this.removeClass("alert-dismissible");
            this.__close.setStyle("display", "none");
        }
        return this;
    }

    public close(b : boolean) : Alert {
        if(b) {
            this.closing = false;
            this.addClass("show");
        } else {
            this.closing = true;
            let evt : CustomEvent = new CustomEvent("close.bs.alert");
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
    public constructor(name : string, tag : string) {
        super(name, tag);
    }

    /**
     * 
     * @return {string}
     */
    public getBoostrapName() : string {
        return "badge";
    }

    public setPill(b : boolean) : Badge {
        if(!b && this.hasClass("badge-pill")) {
            this.removeClass("badge-pill");
        } else {
            this.addClass("badge-pill");
        }
        return this;
    }
}
Badge["__class"] = "framework.components.boostrap.Badge";
Badge["__interfaces"] = ["framework.components.api.Renderable"];



class Button extends BaseBootstrap {
    /*private*/ outline : boolean = false;

    /*private*/ disabled : boolean = false;

    /*private*/ block : boolean = false;

    /*private*/ size : Constants.Size = Constants.Size.NORMAL;

    public constructor(name : string, tag : string) {
        super(name, tag);
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(tag, "a")) {
            this.setAttribute("role", "button");
            this.setAttribute("href", "javascript:void(0);");
        }
    }

    /**
     * 
     * @return {string}
     */
    public getBoostrapName() : string {
        if(this.outline) {
            return "btn-outline";
        } else {
            return "btn";
        }
    }

    public isOutline() : boolean {
        return this.outline;
    }

    public setOutline(outline : boolean) {
        this.outline = outline;
        this.refresh();
    }

    public setSize(size : Constants.Size) : Button {
        this.size = size;
        if(Constants.Size["_$wrappers"][size].getValue() === "sm") {
            if(this.hasClass("btn-lg")) {
                this.removeClass("btn-lg");
            }
            this.addClass("btn-sm");
        } else if(Constants.Size["_$wrappers"][size].getValue() === "lg") {
            if(this.hasClass("btn-sm")) {
                this.removeClass("btn-sm");
            }
            this.addClass("btn-lg");
        } else {
            if(this.hasClass("btn-sm")) {
                this.removeClass("btn-sm");
            }
            if(this.hasClass("btn-lg")) {
                this.removeClass("btn-lg");
            }
        }
        return this;
    }

    public getSize() : Constants.Size {
        return this.size;
    }

    public isDisabled() : boolean {
        return this.disabled;
    }

    public setDisabled(disabled : boolean) {
        this.disabled = disabled;
        if(disabled) {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.getTag(), "a")) {
                this.setAttribute("aria-disabled", "true");
                if(!this.hasClass("disabled")) this.addClass("disabled");
                this.setAttribute("tabindex", "-1");
            } else {
                this.setAttribute("disabled", "true");
            }
        } else {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.getTag(), "a")) {
                this.setAttribute("aria-disabled", null);
                if(this.hasClass("disabled")) this.removeClass("disabled");
                this.setAttribute("tabindex", null);
            } else {
                this.setAttribute("disabled", null);
            }
        }
    }

    public isBlock() : boolean {
        return this.block;
    }

    public setBlock(block : boolean) {
        this.block = block;
        if(block && !this.hasClass("btn-block")) {
            this.addClass("btn-block");
        } else {
            this.removeClass("btn-block");
        }
    }
}
Button["__class"] = "framework.components.boostrap.Button";
Button["__interfaces"] = ["framework.components.api.Renderable"];



class ListGroupItem extends BaseBootstrap {
    public constructor(name : string, tag : string) {
        super(name, tag);
    }

    /**
     * 
     * @return {string}
     */
    public getBoostrapName() : string {
        return "list-group-item";
    }

    public setActive(b : boolean) {
        if(b && !this.hasClass("active")) {
            this.addClass("active");
        } else if(!b && this.hasClass("active")) {
            this.removeClass("active");
        }
    }

    public isActive() : boolean {
        return this.hasClass("active");
    }

    public setDisabled(b : boolean) {
        if(b && !this.hasClass("disabled")) {
            this.addClass("disabled");
        } else if(!b && this.hasClass("disabled")) {
            this.removeClass("disabled");
        }
        this.setAttribute("aria-disabled", b?"true":"false");
    }

    public isDisabled() : boolean {
        return this.hasClass("disabled");
    }

    public setActionable(b : boolean) {
        if(b && !this.hasClass("list-group-item-action")) {
            this.addClass("list-group-item-action");
        } else if(!b && this.hasClass("list-group-item-action")) {
            this.removeClass("list-group-item-action");
        }
    }

    public isActionable() : boolean {
        return this.hasClass("list-group-item-action");
    }
}
ListGroupItem["__class"] = "framework.components.boostrap.ListGroupItem";
ListGroupItem["__interfaces"] = ["framework.components.api.Renderable"];





Boot.main(null);
