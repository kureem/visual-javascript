/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace boostrap {
    export abstract class BaseBootstrap extends JSContainer {
        /*private*/ context: boostrap.Constants.Context;

        public constructor(name: string, tag: string) {
            super(name, tag);
            if (this.context === undefined) { this.context = null; }
            this.addClass(this.getBoostrapName());
        }

        public setContext(context: boostrap.Constants.Context): BaseBootstrap {
            this.context = context;
            this.clearContexts();
            if (context != null)this.addClass(this.getBoostrapName() + "-" + boostrap.Constants.Context["_$wrappers"][context].getValue());
            return this;
        }

        public refresh() {
            this.setContext(this.context);
        }

        clearContexts(): BaseBootstrap {
            {
                let array198 = /* Enum.values */function() { let result: boostrap.Constants.Context[] = []; for(let val in boostrap.Constants.Context) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index197=0; index197 < array198.length; index197++) {
                    let context = array198[index197];
                    {
                        this.removeClass(this.getBoostrapName() + "-" + boostrap.Constants.Context["_$wrappers"][context].getValue());
                    }
                }
            }
            return this;
        }

        public getContext(): boostrap.Constants.Context {
            return this.context;
        }

        public abstract getBoostrapName(): string;
    }
    BaseBootstrap["__class"] = "framework.components.boostrap.BaseBootstrap";
    BaseBootstrap["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace boostrap {
    export class Breadcrumb extends JSContainer {
        public constructor(name: string) {
            super(name, "ol");
            this.addClass("breadcrumb");
        }

        public addItem(name: string, label: string): Breadcrumb.BreadcrumbItem {
            const item: Breadcrumb.BreadcrumbItem = new Breadcrumb.BreadcrumbItem(name, label);
            this.addChild(item);
            return item;
        }

        public activate(name: string) {
            {
                let array200 = this.getChildren();
                for(let index199=0; index199 < array200.length; index199++) {
                    let r = array200[index199];
                    {
                        const item: Breadcrumb.BreadcrumbItem = <Breadcrumb.BreadcrumbItem><any>r;
                        if (item.getName() === name){
                            if (!item.isActive()){
                                item.setActive(true);
                                const evt: CustomEvent = new CustomEvent("activate");
                                evt["item"] = item;
                                evt["source"] = this;
                                this.fireListener("activate", evt);
                            }
                        } else {
                            if (item.isActive()){
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



    export namespace Breadcrumb {

        export class BreadcrumbItem extends JSContainer {
            label_: string;

            active: boolean;

            public constructor(name: string, label: string) {
                super(name, "li");
                if (this.label_ === undefined) { this.label_ = null; }
                this.active = false;
                this.addClass("breadcrumb-item");
                this.setLabel(label);
                this.addEventListener(new BreadcrumbItem.BreadcrumbItem$0(this), "click");
            }

            public setLabel(label: string) {
                this.label_ = label;
                this.refresh();
            }

            public setActive(b: boolean) {
                this.active = b;
                this.refresh();
            }

            public refresh() {
                if (this.active){
                    if (this.hasClass("active"))this.removeClass("active");
                    this.setHtml("<a href=\"#\">" + this.label_ + "</a>");
                } else {
                    this.setHtml(this.label_);
                    if (!this.hasClass("active")){
                        this.addClass("active");
                    }
                }
            }

            public isActive(): boolean {
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
                public performAction(source: api.Renderable, evt: Event) {
                    (<boostrap.Breadcrumb><any>source.getParent()).activate(source.getName());
                }

                constructor(__parent: any) {
                    this.__parent = __parent;
                }
            }
            BreadcrumbItem$0["__interfaces"] = ["framework.components.api.EventListener"];


        }

    }

}
namespace boostrap {
    export class Broot {
        public static main(args: string[]) {
            const app: boostrap.MyApp = new boostrap.MyApp("sdfs");
            app.render();
        }
    }
    Broot["__class"] = "framework.components.boostrap.Broot";

}
namespace boostrap {
    export class ButtonGroup extends JSContainer {
        public static SIZE_LARGE: string = "lg";

        public static SIZE_SMALL: string = "sm";

        public static SIZE_NORMAL: string = "";

        /*private*/ vertical: boolean;

        public constructor(name: string) {
            super(name, "div");
            this.vertical = false;
            this.addClass("btn-group");
        }

        public isVertical(): boolean {
            return this.vertical;
        }

        public setVertical(vertical: boolean) {
            if (vertical && !this.hasClass("btn-group-vertical")){
                this.addClass("btn-group-vertical");
                if (this.hasClass("btn-group")){
                    this.removeClass("btn-group");
                }
            } else {
                this.removeClass("btn-group-vertical");
                if (!this.hasClass("btn-group")){
                    this.addClass("btn-group");
                }
            }
            this.vertical = vertical;
        }

        public setSize(size: string): ButtonGroup {
            if (size === "sm"){
                if (this.hasClass("btn-group-lg")){
                    this.removeClass("btn-group-lg");
                }
                this.addClass("btn-group-sm");
            } else if (size === "lg"){
                if (this.hasClass("btn-group-sm")){
                    this.removeClass("btn-group-sm");
                }
                this.addClass("btn-group-lg");
            } else {
                if (this.hasClass("btn-group-sm")){
                    this.removeClass("btn-group-sm");
                }
                if (this.hasClass("btn-group-lg")){
                    this.removeClass("btn-group-lg");
                }
            }
            return this;
        }
    }
    ButtonGroup["__class"] = "framework.components.boostrap.ButtonGroup";
    ButtonGroup["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace boostrap {
    export class Card extends JSContainer {
        /*private*/ header: JSContainer;

        /*private*/ content: JSContainer;

        /*private*/ footer: JSContainer;

        public constructor(name: string) {
            super(name, "div");
            this.header = new JSContainer("head", "div");
            this.content = new JSContainer("content", "div");
            this.footer = new JSContainer("footer", "div");
            this.addClass("card");
            this.addChild(this.header);
            this.addChild(this.content);
            this.addChild(this.footer);
        }

        public getUIHeader(): JSContainer {
            return this.header;
        }

        public getUIContent(): JSContainer {
            return this.content;
        }

        public getUIFooter(): JSContainer {
            return this.footer;
        }

        public addHeaderImage(img: JSContainer): Card {
            this.header.addChild(img);
            img.addClass("card-img-top");
            return this;
        }
    }
    Card["__class"] = "framework.components.boostrap.Card";
    Card["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace boostrap {
    export class CardBody extends JSContainer {
        /*private*/ title: JSContainer;

        /*private*/ subtitle: JSContainer;

        /*private*/ text: JSContainer;

        /*private*/ foot: JSContainer;

        public constructor(name: string) {
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

        public setTitle(title: string): CardBody {
            this.title.setHtml(title);
            return this;
        }

        public setSubtitle(subtitle: string): CardBody {
            this.subtitle.setHtml(subtitle);
            return this;
        }

        public setText(txt: string): CardBody {
            this.text.setHtml(txt);
            return this;
        }

        public getUITitle(): JSContainer {
            return this.title;
        }

        public getUISubtitle(): JSContainer {
            return this.subtitle;
        }

        public getUIText(): JSContainer {
            return this.text;
        }

        public getUIFoot(): JSContainer {
            return this.foot;
        }

        public addCardLink(link: JSContainer): CardBody {
            link.addClass("card-link");
            this.foot.addChild(link);
            return this;
        }
    }
    CardBody["__class"] = "framework.components.boostrap.CardBody";
    CardBody["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace boostrap {
    export class CardFooter extends JSContainer {
        public constructor(name: string) {
            super(name, "div");
            this.addClass("card-footer text-muted");
        }
    }
    CardFooter["__class"] = "framework.components.boostrap.CardFooter";
    CardFooter["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace boostrap {
    export class CardHeader extends JSContainer {
        public constructor(name: string) {
            super(name, "div");
            this.addClass("card-header");
        }
    }
    CardHeader["__class"] = "framework.components.boostrap.CardHeader";
    CardHeader["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace boostrap {
    export class Carousel extends JSContainer {
        /*private*/ inner: JSContainer;

        /*private*/ controlPrev: JSContainer;

        /*private*/ controlNext: JSContainer;

        public constructor(name: string) {
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

        /*private*/ decoratecontrol(control: JSContainer, dir: string) {
            control.addClass("carousel-control-" + dir);
            control.setAttribute("href", "#" + this.getId()).setAttribute("role", "button").setAttribute("data-slide", dir);
            control.addChild(new JSContainer("span").addClass("carousel-control-" + dir + "-icon").setAttribute("aria-hidden", "true"));
            control.addChild(new JSContainer("span").addClass("sr-only").setHtml(dir));
        }

        public setShowControls(b: boolean) {
            this.controlPrev.setStyle("display", b ? null : "none");
            this.controlNext.setStyle("display", b ? null : "none");
        }

        public isShowControls(): boolean {
            return this.controlPrev.getStyle("display") !== "none";
        }

        public setCrossFade(b: boolean) {
            if (b && !this.hasClass("carousel-fade")){
                this.addClass("carousel-fade");
            } else if (!b && this.hasClass("carousel-fade")){
                this.removeClass("carousel-fade");
            }
        }

        public isCrossFade(): boolean {
            return this.hasClass("carousel-fade");
        }

        public addItem(item: boostrap.CarouselItem) {
            this.inner.addChild(item);
        }

        public setInterval(interval: number) {
            this.setAttribute("data-interval", interval.toString());
        }

        public setKeyboard(b: boolean) {
            this.setAttribute("keyboard", b ? "true" : "false");
        }

        public setPauseOnHover(b: boolean) {
            if (b){
                this.setAttribute("data-pause", "hover");
            } else {
                this.setAttribute("data-pause", null);
            }
        }

        public setRideCarousel(b: boolean) {
            if (b){
                this.setAttribute("data-ride", "carousel");
            } else {
                this.setAttribute("data-ride", null);
            }
        }

        public setWrap(b: boolean) {
            this.setAttribute("wrap", b ? "true" : "false");
        }

        public setTouch(b: boolean) {
            this.setAttribute("touch", b ? "true" : "false");
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

        /*private*/ invoke(method: string) {
            const el: HTMLElement = this.getNative();
            const fn: Function = <Function>el["carousel"];
            fn.call(el, method);
        }
    }
    Carousel["__class"] = "framework.components.boostrap.Carousel";
    Carousel["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace boostrap {
    export class CarouselItem extends JSContainer {
        /*private*/ img: JSContainer;

        /*private*/ caption: JSContainer;

        /*private*/ title: JSContainer;

        /*private*/ subtitle: JSContainer;

        public constructor(name: string) {
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

        public setShowCaption(b: boolean) {
            this.caption.setStyle("display", b ? null : "none");
        }

        public isShowCaption(): boolean {
            return this.caption.getStyle("display") !== "none";
        }

        public setTitle(str: string) {
            this.title.setHtml(str);
            this.setShowCaption(true);
        }

        public setSubtitle(str: string) {
            this.subtitle.setHtml(str);
            this.setShowCaption(true);
        }

        public setInterval(interval: number) {
            this.setAttribute("data-interval", interval.toString());
        }
    }
    CarouselItem["__class"] = "framework.components.boostrap.CarouselItem";
    CarouselItem["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace boostrap {
    export class Constants {    }
    Constants["__class"] = "framework.components.boostrap.Constants";


    export namespace Constants {

        export enum Context {
            PRIMARY, SECONDARY, SUCCESS, DANGER, WARNING, INFO, LIGHT, DARK, BODY, WHITE, TRANSPARENT
        }

        /** @ignore */
        export class Context_$WRAPPER {
            value;

            constructor(protected _$ordinal: number, protected _$name: string, value) {
                if (this.value === undefined) { this.value = null; }
                this.value = value;
            }

            public getValue(): string {
                return this.value;
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        Context["__class"] = "framework.components.boostrap.Constants.Context";
        Context["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        Context["_$wrappers"] = {0: new Context_$WRAPPER(0, "PRIMARY", "primary"), 1: new Context_$WRAPPER(1, "SECONDARY", "secondary"), 2: new Context_$WRAPPER(2, "SUCCESS", "success"), 3: new Context_$WRAPPER(3, "DANGER", "danger"), 4: new Context_$WRAPPER(4, "WARNING", "warning"), 5: new Context_$WRAPPER(5, "INFO", "info"), 6: new Context_$WRAPPER(6, "LIGHT", "light"), 7: new Context_$WRAPPER(7, "DARK", "dark"), 8: new Context_$WRAPPER(8, "BODY", "body"), 9: new Context_$WRAPPER(9, "WHITE", "white"), 10: new Context_$WRAPPER(10, "TRANSPARENT", "transparent")};


        export enum Size {
            SMALL, MEDIUM, LARGE, EXTRA_LARGE, NORMAL
        }

        /** @ignore */
        export class Size_$WRAPPER {
            value;

            constructor(protected _$ordinal: number, protected _$name: string, value) {
                if (this.value === undefined) { this.value = null; }
                this.value = value;
            }

            public getValue(): string {
                return this.value;
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        Size["__class"] = "framework.components.boostrap.Constants.Size";
        Size["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        Size["_$wrappers"] = {0: new Size_$WRAPPER(0, "SMALL", "sm"), 1: new Size_$WRAPPER(1, "MEDIUM", "md"), 2: new Size_$WRAPPER(2, "LARGE", "lg"), 3: new Size_$WRAPPER(3, "EXTRA_LARGE", "xl"), 4: new Size_$WRAPPER(4, "NORMAL", "")};


        export enum JustifyContent {
            START, CENTER, END, AROUND, EVENLY, BETWEEN
        }

        /** @ignore */
        export class JustifyContent_$WRAPPER {
            value;

            constructor(protected _$ordinal: number, protected _$name: string, value) {
                if (this.value === undefined) { this.value = null; }
                this.value = value;
            }

            public getValue(): string {
                return this.value;
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        JustifyContent["__class"] = "framework.components.boostrap.Constants.JustifyContent";
        JustifyContent["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        JustifyContent["_$wrappers"] = {0: new JustifyContent_$WRAPPER(0, "START", "start"), 1: new JustifyContent_$WRAPPER(1, "CENTER", "center"), 2: new JustifyContent_$WRAPPER(2, "END", "end"), 3: new JustifyContent_$WRAPPER(3, "AROUND", "around"), 4: new JustifyContent_$WRAPPER(4, "EVENLY", "evenly"), 5: new JustifyContent_$WRAPPER(5, "BETWEEN", "between")};


        export enum ScreenSize {
            NORMAL, SMALL, MEDIUM, LARGE, EXTRA_LARGE, EXTRA_EXTRA_LARGE
        }

        /** @ignore */
        export class ScreenSize_$WRAPPER {
            value;

            constructor(protected _$ordinal: number, protected _$name: string, value) {
                if (this.value === undefined) { this.value = null; }
                this.value = value;
            }

            public getValue(): string {
                return this.value;
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        ScreenSize["__class"] = "framework.components.boostrap.Constants.ScreenSize";
        ScreenSize["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        ScreenSize["_$wrappers"] = {0: new ScreenSize_$WRAPPER(0, "NORMAL", ""), 1: new ScreenSize_$WRAPPER(1, "SMALL", "sm"), 2: new ScreenSize_$WRAPPER(2, "MEDIUM", "md"), 3: new ScreenSize_$WRAPPER(3, "LARGE", "lg"), 4: new ScreenSize_$WRAPPER(4, "EXTRA_LARGE", "xl"), 5: new ScreenSize_$WRAPPER(5, "EXTRA_EXTRA_LARGE", "xxl")};

    }

}
namespace boostrap {
    export class Dropdown extends JSContainer {
        /*private*/ button: boostrap.Button;

        /*private*/ btnSplit: boostrap.Button;

        /*private*/ menu: boostrap.DropdownMenu;

        /*private*/ split: boolean;

        public constructor(name: string, tag: string) {
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

        public getButton(): boostrap.Button {
            return this.button;
        }

        public getMenu(): boostrap.DropdownMenu {
            return this.menu;
        }

        public setSplit(b: boolean): Dropdown {
            if (b){
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
        public render(parent: HTMLElement) {
            if (this.split){
                this.btnSplit.setSize(this.button.getSize());
                this.btnSplit.setContext(this.button.getContext());
                this.btnSplit.setDisabled(this.button.isDisabled());
            }
            super.render(parent);
        }
    }
    Dropdown["__class"] = "framework.components.boostrap.Dropdown";
    Dropdown["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace boostrap {
    export class DropdownMenu extends JSContainer {
        public constructor(name: string) {
            super(name, "div");
            this.addClass("dropdown-menu");
            this.setAttribute("aria-labelledby", "dropdownMenuButton");
        }

        public addItem(name: string, text: string): DropdownMenu.DropdownItem {
            const item: DropdownMenu.DropdownItem = new DropdownMenu.DropdownItem(name, text);
            this.addChild(item);
            return item;
        }
    }
    DropdownMenu["__class"] = "framework.components.boostrap.DropdownMenu";
    DropdownMenu["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace DropdownMenu {

        export class DropdownItem extends JSContainer {
            public constructor(name: string, text: string) {
                super(name, "a");
                this.setAttribute("href", "javascript:void(0)");
                this.addClass("dropdown-item");
                this.setHtml(text);
            }

            public setText(text: string): DropdownMenu.DropdownItem {
                this.setHtml(text);
                return this;
            }
        }
        DropdownItem["__class"] = "framework.components.boostrap.DropdownMenu.DropdownItem";
        DropdownItem["__interfaces"] = ["framework.components.api.Renderable"];


    }

}
namespace boostrap {
    export class ListGroup extends JSContainer {
        public constructor(name: string, tag: string) {
            super(name, tag);
            this.addClass("list-group");
        }

        public setFlush(b: boolean) {
            if (b && !this.hasClass("list-group-flush")){
                this.addClass("list-group-flush");
            } else if (!b && this.hasClass("list-group-flush")){
                this.removeClass("list-group-flush");
            }
        }

        public isFlush(): boolean {
            return this.hasClass("list-group-flush");
        }

        public setHorizontal$boolean(b: boolean) {
            if (b && !this.hasClass("list-group-horizontal")){
                this.addClass("list-group-horizontal");
            } else if (!b && this.hasClass("list-group-horizontal")){
                this.removeClass("list-group-horizontal");
            }
        }

        public isHorizontal(): boolean {
            return this.hasClass("list-group-horizontal");
        }

        /*private*/ clearHorizontalCls() {
            this.removeClass("list-group-horizontal");
            {
                let array202 = /* Enum.values */function() { let result: boostrap.Constants.ScreenSize[] = []; for(let val in boostrap.Constants.ScreenSize) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index201=0; index201 < array202.length; index201++) {
                    let size = array202[index201];
                    {
                        this.removeClass("list-group-horizontal-" + boostrap.Constants.ScreenSize["_$wrappers"][size].getValue());
                    }
                }
            }
        }

        public setHorizontal$framework_components_boostrap_Constants_ScreenSize(screenSize: boostrap.Constants.ScreenSize) {
            this.clearHorizontalCls();
            this.addClass("list-group-horizontal-" + boostrap.Constants.ScreenSize["_$wrappers"][screenSize].getValue());
        }

        public setHorizontal(screenSize?: any) {
            if (((typeof screenSize === 'number') || screenSize === null)) {
                return <any>this.setHorizontal$framework_components_boostrap_Constants_ScreenSize(screenSize);
            } else if (((typeof screenSize === 'boolean') || screenSize === null)) {
                return <any>this.setHorizontal$boolean(screenSize);
            } else throw new Error('invalid overload');
        }

        public addItem(item: boostrap.ListGroupItem) {
            this.addChild(item);
        }
    }
    ListGroup["__class"] = "framework.components.boostrap.ListGroup";
    ListGroup["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace boostrap {
    export class Modal extends JSContainer {
        /*private*/ dialog: JSContainer;

        /*private*/ content: JSContainer;

        /*private*/ header: JSContainer;

        /*private*/ body: JSContainer;

        /*private*/ footer: JSContainer;

        /*private*/ title: JSContainer;

        /*private*/ btnClose: JSContainer;

        public constructor(name: string) {
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

        public getDialog(): JSContainer {
            return this.dialog;
        }

        public getContent(): JSContainer {
            return this.content;
        }

        public getHeader(): JSContainer {
            return this.header;
        }

        public getBody(): JSContainer {
            return this.body;
        }

        public getFooter(): JSContainer {
            return this.footer;
        }

        public getTitle(): JSContainer {
            return this.title;
        }

        public getBtnClose(): JSContainer {
            return this.btnClose;
        }

        public setScrollable(b: boolean): Modal {
            if (b && !this.dialog.hasClass("modal-dialog-scrollable")){
                this.dialog.addClass("modal-dialog-scrollable");
            } else if (!b && this.dialog.hasClass("modal-dialog-scrollable")){
                this.dialog.removeClass("modal-dialog-scrollable");
            }
            return this;
        }

        public setStaticBackdrop(b: boolean): Modal {
            if (b && this.getAttribute("data-bs-backdrop") !== "static"){
                this.setAttribute("data-bs-backdrop", "static");
                this.setAttribute("data-bs-keyboad", "false");
            } else if (!b && this.getAttribute("data-bs-backdrop") === "static"){
                this.setAttribute("data-bs-backdrop", null);
                this.setAttribute("data-bs-keyboad", null);
            }
            return this;
        }

        public setCentered(b: boolean): Modal {
            if (b && !this.dialog.hasClass("modal-dialog-centered")){
                this.dialog.addClass("modal-dialog-centered");
            } else if (!b && this.dialog.hasClass("modal-dialog-centered")){
                this.dialog.removeClass("modal-dialog-centered");
            }
            return this;
        }

        public setFade(b: boolean): Modal {
            if (b && !this.hasClass("fade")){
                this.addClass("fade");
            } else if (!b && this.hasClass("fade")){
                this.removeClass("fade");
            }
            return this;
        }

        public setSize(size: boostrap.Constants.Size): Modal {
            if (size === boostrap.Constants.Size.NORMAL){
                {
                    let array204 = /* Enum.values */function() { let result: boostrap.Constants.Size[] = []; for(let val in boostrap.Constants.Size) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                    for(let index203=0; index203 < array204.length; index203++) {
                        let si = array204[index203];
                        {
                            if (this.dialog.hasClass("modal-" + boostrap.Constants.Size["_$wrappers"][si].getValue())){
                                this.dialog.removeClass("modal-" + boostrap.Constants.Size["_$wrappers"][si].getValue());
                            }
                        }
                    }
                }
            } else {
                {
                    let array206 = /* Enum.values */function() { let result: boostrap.Constants.Size[] = []; for(let val in boostrap.Constants.Size) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                    for(let index205=0; index205 < array206.length; index205++) {
                        let si = array206[index205];
                        {
                            if ((si === size) && !this.dialog.hasClass("modal-" + boostrap.Constants.Size["_$wrappers"][si].getValue())){
                                this.dialog.addClass("modal-" + boostrap.Constants.Size["_$wrappers"][si].getValue());
                            } else if ((si !== size) && this.dialog.hasClass("modal-" + boostrap.Constants.Size["_$wrappers"][si].getValue())){
                                this.dialog.addClass("modal-" + boostrap.Constants.Size["_$wrappers"][si].getValue());
                            }
                        }
                    }
                }
            }
            return this;
        }

        public setFullScreen$boolean(b: boolean): Modal {
            return this.setFullScreen$boolean$framework_components_boostrap_Constants_ScreenSize(b, boostrap.Constants.ScreenSize.NORMAL);
        }

        public setFullScreen$boolean$framework_components_boostrap_Constants_ScreenSize(b: boolean, size: boostrap.Constants.ScreenSize): Modal {
            if (size === boostrap.Constants.ScreenSize.NORMAL){
                if (b && !this.dialog.hasClass("modal-fullscreen")){
                    this.dialog.addClass("modal-fullscreen");
                } else if (!b && this.dialog.hasClass("modal-fullscreen")){
                    this.dialog.removeClass("modal-fullscreen");
                }
                {
                    let array208 = /* Enum.values */function() { let result: boostrap.Constants.ScreenSize[] = []; for(let val in boostrap.Constants.ScreenSize) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                    for(let index207=0; index207 < array208.length; index207++) {
                        let s = array208[index207];
                        {
                            if (s !== boostrap.Constants.ScreenSize.NORMAL){
                                this.dialog.removeClass("modal-fullscreen-" + boostrap.Constants.ScreenSize["_$wrappers"][s].getValue() + "-down");
                            }
                        }
                    }
                }
            } else {
                if (b){
                    {
                        let array210 = /* Enum.values */function() { let result: boostrap.Constants.ScreenSize[] = []; for(let val in boostrap.Constants.ScreenSize) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                        for(let index209=0; index209 < array210.length; index209++) {
                            let s = array210[index209];
                            {
                                if (s === size){
                                    if (!this.dialog.hasClass("modal-fullscreen-" + boostrap.Constants.ScreenSize["_$wrappers"][s].getValue() + "-down")){
                                        this.dialog.addClass("modal-fullscreen-" + boostrap.Constants.ScreenSize["_$wrappers"][s].getValue() + "-down");
                                    }
                                } else {
                                    if (this.dialog.hasClass("modal-fullscreen-" + boostrap.Constants.ScreenSize["_$wrappers"][s].getValue() + "-down")){
                                        this.dialog.removeClass("modal-fullscreen-" + boostrap.Constants.ScreenSize["_$wrappers"][s].getValue() + "-down");
                                    }
                                }
                            }
                        }
                    }
                } else {
                    {
                        let array212 = /* Enum.values */function() { let result: boostrap.Constants.ScreenSize[] = []; for(let val in boostrap.Constants.ScreenSize) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                        for(let index211=0; index211 < array212.length; index211++) {
                            let s = array212[index211];
                            {
                                if (s !== boostrap.Constants.ScreenSize.NORMAL){
                                    this.dialog.removeClass("modal-fullscreen-" + boostrap.Constants.ScreenSize["_$wrappers"][s].getValue() + "-down");
                                }
                            }
                        }
                    }
                }
            }
            return this;
        }

        public setFullScreen(b?: any, size?: any): any {
            if (((typeof b === 'boolean') || b === null) && ((typeof size === 'number') || size === null)) {
                return <any>this.setFullScreen$boolean$framework_components_boostrap_Constants_ScreenSize(b, size);
            } else if (((typeof b === 'boolean') || b === null) && size === undefined) {
                return <any>this.setFullScreen$boolean(b);
            } else throw new Error('invalid overload');
        }

        public show(): Modal {
            this.addClass("show");
            return this;
        }

        public toggle(): Modal {
            if (this.hasClass("show")){
                this.removeClass("show");
            } else {
                this.addClass("show");
            }
            return this;
        }

        public hide(): Modal {
            this.removeClass("show");
            return this;
        }

        public close(): Modal {
            this.hide();
            return this;
        }
    }
    Modal["__class"] = "framework.components.boostrap.Modal";
    Modal["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace boostrap {
    export class MyApp extends JSContainer {
        /*private*/ header: JSContainer;

        public constructor(name: string) {
            super(name, "div");
            this.header = new JSContainer("other", "h1");
            this.addClass("myapp");
            this.setStyle("width", "100%").setStyle("height", "100vh");
            const div: JSContainer = new JSContainer("root", "div");
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



    export namespace MyApp {

        export class MyApp$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.header.setHtml("I have been clicked");
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        MyApp$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace boostrap {
    export class Nav extends JSContainer {
        /*private*/ type: Nav.Type;

        /*private*/ alignment: Nav.Alignment;

        /*private*/ spacing: Nav.Spacing;

        public constructor(name: string, tag: string) {
            super(name, tag);
            this.type = Nav.Type.LINKS;
            this.alignment = Nav.Alignment.HORIZONTAL;
            this.spacing = Nav.Spacing.NONE;
            this.addClass("nav");
        }

        public setJustifyContent(justifyContent: boostrap.Constants.JustifyContent): Nav {
            {
                let array214 = /* Enum.values */function() { let result: boostrap.Constants.JustifyContent[] = []; for(let val in boostrap.Constants.JustifyContent) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index213=0; index213 < array214.length; index213++) {
                    let js = array214[index213];
                    {
                        this.removeClass("justify-content-" + boostrap.Constants.JustifyContent["_$wrappers"][js].getValue());
                    }
                }
            }
            this.addClass("justify-content-" + boostrap.Constants.JustifyContent["_$wrappers"][justifyContent].getValue());
            return this;
        }

        public getType(): Nav.Type {
            return this.type;
        }

        public setType(type: Nav.Type) {
            this.type = type;
            {
                let array216 = /* Enum.values */function() { let result: boostrap.Nav.Type[] = []; for(let val in boostrap.Nav.Type) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index215=0; index215 < array216.length; index215++) {
                    let t = array216[index215];
                    {
                        if (boostrap.Nav.Type["_$wrappers"][t].getValue() !== boostrap.Nav.Type["_$wrappers"][type].getValue() && boostrap.Nav.Type["_$wrappers"][t].getValue() !== boostrap.Nav.Type["_$wrappers"][Nav.Type.LINKS].getValue())this.removeClass(boostrap.Nav.Type["_$wrappers"][t].getValue());
                    }
                }
            }
            if (boostrap.Nav.Type["_$wrappers"][type].getValue() !== boostrap.Nav.Type["_$wrappers"][Nav.Type.LINKS].getValue() && !this.hasClass(boostrap.Nav.Type["_$wrappers"][type].getValue())){
                this.addClass(boostrap.Nav.Type["_$wrappers"][type].getValue());
            }
        }

        public getAlignment(): Nav.Alignment {
            return this.alignment;
        }

        public setAlignment(alignment: Nav.Alignment) {
            this.alignment = alignment;
            if (boostrap.Nav.Alignment["_$wrappers"][alignment].getValue() === boostrap.Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue() && !this.hasClass(boostrap.Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue())){
                this.addClass(boostrap.Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue());
            } else {
                if (this.hasClass(boostrap.Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue())){
                    this.removeClass(boostrap.Nav.Alignment["_$wrappers"][Nav.Alignment.VERTICAL].getValue());
                }
            }
        }

        public getSpacing(): Nav.Spacing {
            return this.spacing;
        }

        public setSpacing(spacing: Nav.Spacing) {
            this.spacing = spacing;
            {
                let array218 = /* Enum.values */function() { let result: boostrap.Nav.Spacing[] = []; for(let val in boostrap.Nav.Spacing) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index217=0; index217 < array218.length; index217++) {
                    let s = array218[index217];
                    {
                        if (boostrap.Nav.Spacing["_$wrappers"][s].getValue() !== boostrap.Nav.Spacing["_$wrappers"][Nav.Spacing.NONE].getValue()){
                            if (boostrap.Nav.Spacing["_$wrappers"][s].getValue() !== boostrap.Nav.Spacing["_$wrappers"][spacing].getValue() && this.hasClass(boostrap.Nav.Spacing["_$wrappers"][s].getValue())){
                                this.removeClass(boostrap.Nav.Spacing["_$wrappers"][s].getValue());
                            }
                        }
                    }
                }
            }
            if (boostrap.Nav.Spacing["_$wrappers"][spacing].getValue() !== boostrap.Nav.Spacing["_$wrappers"][Nav.Spacing.NONE].getValue() && !this.hasClass(boostrap.Nav.Spacing["_$wrappers"][spacing].getValue())){
                this.addClass(boostrap.Nav.Spacing["_$wrappers"][spacing].getValue());
            }
        }
    }
    Nav["__class"] = "framework.components.boostrap.Nav";
    Nav["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace Nav {

        export enum Type {
            PILLS, TABS, LINKS
        }

        /** @ignore */
        export class Type_$WRAPPER {
            value;

            constructor(protected _$ordinal: number, protected _$name: string, value) {
                if (this.value === undefined) { this.value = null; }
                this.value = value;
            }

            public getValue(): string {
                return this.value;
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        Type["__class"] = "framework.components.boostrap.Nav.Type";
        Type["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        Type["_$wrappers"] = {0: new Type_$WRAPPER(0, "PILLS", "nav-pills"), 1: new Type_$WRAPPER(1, "TABS", "nav-tabs"), 2: new Type_$WRAPPER(2, "LINKS", "nav-links")};


        export enum Alignment {
            VERTICAL, HORIZONTAL
        }

        /** @ignore */
        export class Alignment_$WRAPPER {
            value;

            constructor(protected _$ordinal: number, protected _$name: string, value) {
                if (this.value === undefined) { this.value = null; }
                this.value = value;
            }

            public getValue(): string {
                return this.value;
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        Alignment["__class"] = "framework.components.boostrap.Nav.Alignment";
        Alignment["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        Alignment["_$wrappers"] = {0: new Alignment_$WRAPPER(0, "VERTICAL", "flex-column"), 1: new Alignment_$WRAPPER(1, "HORIZONTAL", "")};


        export enum Spacing {
            FILL, JUSTIFIED, NONE
        }

        /** @ignore */
        export class Spacing_$WRAPPER {
            value;

            constructor(protected _$ordinal: number, protected _$name: string, value) {
                if (this.value === undefined) { this.value = null; }
                this.value = value;
            }

            public getValue(): string {
                return this.value;
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        Spacing["__class"] = "framework.components.boostrap.Nav.Spacing";
        Spacing["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        Spacing["_$wrappers"] = {0: new Spacing_$WRAPPER(0, "FILL", "nav-fill"), 1: new Spacing_$WRAPPER(1, "JUSTIFIED", "nav-justified"), 2: new Spacing_$WRAPPER(2, "NONE", "")};

    }

}
namespace boostrap {
    export class NavBar extends JSContainer {
        /*private*/ container: JSContainer;

        /*private*/ brand: JSContainer;

        /*private*/ toggler: input.JSButton;

        /*private*/ collapse: JSContainer;

        public constructor(name: string) {
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

        public setBackground(ctx: boostrap.Constants.Context): NavBar {
            return this.applyContext(this, ctx, "bg");
        }

        applyContext(ctn: JSContainer, ctx: boostrap.Constants.Context, prefix: string): NavBar {
            {
                let array220 = /* Enum.values */function() { let result: boostrap.Constants.Context[] = []; for(let val in boostrap.Constants.Context) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index219=0; index219 < array220.length; index219++) {
                    let ct = array220[index219];
                    {
                        if (ct === ctx){
                            if (!ctn.hasClass(prefix + "-" + boostrap.Constants.Context["_$wrappers"][ct].getValue())){
                                ctn.addClass(prefix + "-" + boostrap.Constants.Context["_$wrappers"][ct].getValue());
                            }
                        } else {
                            if (ctn.hasClass(prefix + "-" + boostrap.Constants.Context["_$wrappers"][ct].getValue())){
                                ctn.removeClass(prefix + "-" + boostrap.Constants.Context["_$wrappers"][ct].getValue());
                            }
                        }
                    }
                }
            }
            return this;
        }

        public setForground(ctx: boostrap.Constants.Context): NavBar {
            return this.applyContext(this, ctx, "navbar");
        }

        public setExpandSize(size: boostrap.Constants.Size): NavBar {
            {
                let array222 = /* Enum.values */function() { let result: boostrap.Constants.Size[] = []; for(let val in boostrap.Constants.Size) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index221=0; index221 < array222.length; index221++) {
                    let si = array222[index221];
                    {
                        if (si === size){
                            if ((size !== boostrap.Constants.Size.NORMAL) && !this.hasClass("navbar-expand-" + boostrap.Constants.Size["_$wrappers"][si].getValue())){
                                this.addClass("navbar-expand-" + boostrap.Constants.Size["_$wrappers"][si].getValue());
                            }
                        } else {
                            if ((size !== boostrap.Constants.Size.NORMAL) && this.hasClass("navbar-expand-" + boostrap.Constants.Size["_$wrappers"][si].getValue())){
                                this.removeClass("navbar-expand-" + boostrap.Constants.Size["_$wrappers"][si].getValue());
                            }
                        }
                    }
                }
            }
            return this;
        }

        public getContainer(): JSContainer {
            return this.container;
        }

        public getBrand(): JSContainer {
            return this.brand;
        }

        public getToggler(): input.JSButton {
            return this.toggler;
        }

        public getCollapse(): JSContainer {
            return this.collapse;
        }

        public setPlacement(plc: NavBar.Placement): NavBar {
            if (plc !== NavBar.Placement.DEFAULT){
                {
                    let array224 = /* Enum.values */function() { let result: boostrap.NavBar.Placement[] = []; for(let val in boostrap.NavBar.Placement) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                    for(let index223=0; index223 < array224.length; index223++) {
                        let pl = array224[index223];
                        {
                            if ((pl === plc) && !this.hasClass(boostrap.NavBar.Placement["_$wrappers"][pl].getValue())){
                                this.addClass(boostrap.NavBar.Placement["_$wrappers"][pl].getValue());
                            } else if ((pl !== plc) && this.hasClass(boostrap.NavBar.Placement["_$wrappers"][pl].getValue())){
                                this.removeClass(boostrap.NavBar.Placement["_$wrappers"][pl].getValue());
                            }
                        }
                    }
                }
            } else {
                {
                    let array226 = /* Enum.values */function() { let result: boostrap.NavBar.Placement[] = []; for(let val in boostrap.NavBar.Placement) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                    for(let index225=0; index225 < array226.length; index225++) {
                        let pl = array226[index225];
                        {
                            if (pl !== NavBar.Placement.DEFAULT)this.removeClass(boostrap.NavBar.Placement["_$wrappers"][pl].getValue());
                        }
                    }
                }
            }
            return this;
        }
    }
    NavBar["__class"] = "framework.components.boostrap.NavBar";
    NavBar["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace NavBar {

        export enum Placement {
            FIXED_TOP, FIXED_BOTTOM, DEFAULT, STICKY_TOP
        }

        /** @ignore */
        export class Placement_$WRAPPER {
            value;

            constructor(protected _$ordinal: number, protected _$name: string, value) {
                if (this.value === undefined) { this.value = null; }
                this.value = value;
            }

            public getValue(): string {
                return this.value;
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        Placement["__class"] = "framework.components.boostrap.NavBar.Placement";
        Placement["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        Placement["_$wrappers"] = {0: new Placement_$WRAPPER(0, "FIXED_TOP", "fixed-top"), 1: new Placement_$WRAPPER(1, "FIXED_BOTTOM", "fixed-bottom"), 2: new Placement_$WRAPPER(2, "DEFAULT", ""), 3: new Placement_$WRAPPER(3, "STICKY_TOP", "sticky-top")};

    }

}
namespace boostrap {
    export class NavItem extends JSContainer {
        public constructor(name: string, tag: string) {
            super(name, tag);
            this.addClass("nav-item");
        }
    }
    NavItem["__class"] = "framework.components.boostrap.NavItem";
    NavItem["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace boostrap {
    export class PageItem extends JSContainer {
        public constructor(name: string) {
            super(name, "li");
            this.addClass("page-item");
        }

        public setDisabled(b: boolean): PageItem {
            if (b && !this.hasClass("disabled")){
                this.addClass("disabled");
            } else if (!b && this.hasClass("disabled")){
                this.removeClass("disabled");
            }
            return this;
        }

        public setActive(b: boolean): PageItem {
            if (b && !this.hasClass("active")){
                this.addClass("active");
            } else if (!b && this.hasClass("active")){
                this.removeClass("active");
            }
            return this;
        }
    }
    PageItem["__class"] = "framework.components.boostrap.PageItem";
    PageItem["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace boostrap {
    export class Pagination extends JSContainer {
        public constructor(name: string) {
            super(name, "ul");
            this.addClass("pagination");
        }

        public addPageItem(pi: boostrap.PageItem): Pagination {
            this.addChild(pi);
            return this;
        }

        public setSize(size: boostrap.Constants.Size): Pagination {
            {
                let array228 = /* Enum.values */function() { let result: boostrap.Constants.Size[] = []; for(let val in boostrap.Constants.Size) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index227=0; index227 < array228.length; index227++) {
                    let si = array228[index227];
                    {
                        if (si === size){
                            if ((size !== boostrap.Constants.Size.NORMAL) && !this.hasClass("pagination-" + boostrap.Constants.Size["_$wrappers"][si].getValue())){
                                this.addClass("pagination-" + boostrap.Constants.Size["_$wrappers"][si].getValue());
                            }
                        } else {
                            if ((size !== boostrap.Constants.Size.NORMAL) && this.hasClass("pagination-" + boostrap.Constants.Size["_$wrappers"][si].getValue())){
                                this.removeClass("pagination-" + boostrap.Constants.Size["_$wrappers"][si].getValue());
                            }
                        }
                    }
                }
            }
            return this;
        }

        public setJustifyContent(justifyContent: boostrap.Constants.JustifyContent): Pagination {
            {
                let array230 = /* Enum.values */function() { let result: boostrap.Constants.JustifyContent[] = []; for(let val in boostrap.Constants.JustifyContent) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index229=0; index229 < array230.length; index229++) {
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
    Pagination["__class"] = "framework.components.boostrap.Pagination";
    Pagination["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace boostrap {
    export class Progress extends JSContainer {
        /*private*/ bar: JSContainer;

        /*private*/ context: boostrap.Constants.Context;

        /*private*/ min: number;

        /*private*/ max: number;

        /*private*/ value: number;

        public constructor(name: string) {
            super(name, "div");
            this.bar = new JSContainer("bar", "div").addClass("progress-bar");
            if (this.context === undefined) { this.context = null; }
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

        public getContext(): boostrap.Constants.Context {
            return this.context;
        }

        public setAnimated(b: boolean) {
            if (b){
                if (!this.bar.hasClass("progress-bar-animated")){
                    this.bar.addClass("progress-bar-animated");
                }
            } else {
                if (this.bar.hasClass("progress-bar-animated")){
                    this.bar.removeClass("progress-bar-animated");
                }
            }
        }

        public isAnimated(): boolean {
            return this.bar.hasClass("progress-bar-animated");
        }

        public setStriped(b: boolean) {
            if (b){
                if (!this.bar.hasClass("progress-bar-striped")){
                    this.bar.addClass("progress-bar-striped");
                }
            } else {
                if (this.bar.hasClass("progress-bar-striped")){
                    this.bar.removeClass("progress-bar-striped");
                }
            }
        }

        public isStriped(): boolean {
            return this.bar.hasClass("progress-bar-striped");
        }

        public setContext(context: boostrap.Constants.Context) {
            this.context = context;
            {
                let array232 = /* Enum.values */function() { let result: boostrap.Constants.Context[] = []; for(let val in boostrap.Constants.Context) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index231=0; index231 < array232.length; index231++) {
                    let ct = array232[index231];
                    {
                        this.bar.removeClass("bg-" + boostrap.Constants.Context["_$wrappers"][ct].getValue());
                    }
                }
            }
            if (context != null)this.bar.addClass("bg-" + boostrap.Constants.Context["_$wrappers"][context].getValue());
        }

        public getMin(): number {
            return this.min;
        }

        public setMin(min: number) {
            this.min = min;
            this.bar.setAttribute("aria-valuemin", min.toString());
        }

        public getMax(): number {
            return this.max;
        }

        public setMax(max: number) {
            this.max = max;
            this.bar.setAttribute("aria-valuemax", max.toString());
        }

        public getValue(): number {
            return this.value;
        }

        public setValue(value: number) {
            this.value = value;
            this.bar.setAttribute("aria-valuenow", value.toString());
            const OldRange: number = this.max - this.min;
            const NewRange: number = 100;
            const NewValue: number = ((((value - this.min) * NewRange) / OldRange|0)) + 0;
            this.bar.setStyle("width", NewValue + "%");
        }

        public getBar(): JSContainer {
            return this.bar;
        }
    }
    Progress["__class"] = "framework.components.boostrap.Progress";
    Progress["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace boostrap.utils {
    export class FlexUtil {
        public static setJustifyContent(justifyContent: boostrap.Constants.JustifyContent, r: api.Renderable) {
            {
                let array234 = /* Enum.values */function() { let result: boostrap.Constants.JustifyContent[] = []; for(let val in boostrap.Constants.JustifyContent) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index233=0; index233 < array234.length; index233++) {
                    let js = array234[index233];
                    {
                        r.removeClass("justify-content-" + boostrap.Constants.JustifyContent["_$wrappers"][js].getValue());
                    }
                }
            }
            r.addClass("justify-content-" + boostrap.Constants.JustifyContent["_$wrappers"][justifyContent].getValue());
        }
    }
    FlexUtil["__class"] = "framework.components.boostrap.utils.FlexUtil";

}
namespace boostrap {
    /**
     * Bootstrap Alert implementation
     * @param {string} name
     * @class
     * @extends boostrap.BaseBootstrap
     */
    export class Alert extends boostrap.BaseBootstrap {
        /*private*/ heading: JSContainer;

        /*private*/ body: JSContainer;

        /*private*/ __close: JSContainer;

        /*private*/ closing: boolean;

        public constructor(name: string) {
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
                if (this.closing){
                    const evt: CustomEvent = new CustomEvent("closed.bs.alert");
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
        public getBoostrapName(): string {
            return "alert";
        }

        public setHeading(heading: string): Alert {
            if (heading != null && heading.length > 0){
                this.heading.setStyle("display", null);
                this.heading.setHtml(heading);
            } else {
                this.heading.setStyle("display", "none");
            }
            return this;
        }

        public getHeading(): JSContainer {
            return this.heading;
        }

        public getBody(): JSContainer {
            return this.body;
        }

        public setDismissable(b: boolean): Alert {
            if (b){
                if (!this.hasClass("alert-dismissible")){
                    this.addClass("alert-dismissible");
                }
                this.__close.setStyle("display", null);
            } else {
                this.removeClass("alert-dismissible");
                this.__close.setStyle("display", "none");
            }
            return this;
        }

        public close(b: boolean): Alert {
            if (b){
                this.closing = false;
                this.addClass("show");
            } else {
                this.closing = true;
                const evt: CustomEvent = new CustomEvent("close.bs.alert");
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


}
namespace boostrap {
    export class Badge extends boostrap.BaseBootstrap {
        public constructor(name: string, tag: string) {
            super(name, tag);
        }

        /**
         * 
         * @return {string}
         */
        public getBoostrapName(): string {
            return "badge";
        }

        public setPill(b: boolean): Badge {
            if (!b && this.hasClass("badge-pill")){
                this.removeClass("badge-pill");
            } else {
                this.addClass("badge-pill");
            }
            return this;
        }
    }
    Badge["__class"] = "framework.components.boostrap.Badge";
    Badge["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace boostrap {
    export class Button extends boostrap.BaseBootstrap {
        /*private*/ outline: boolean;

        /*private*/ disabled: boolean;

        /*private*/ block: boolean;

        /*private*/ size: boostrap.Constants.Size;

        public constructor(name: string, tag: string) {
            super(name, tag);
            this.outline = false;
            this.disabled = false;
            this.block = false;
            this.size = boostrap.Constants.Size.NORMAL;
            if (/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null ? o2 : o2.toUpperCase()))(tag, "a")){
                this.setAttribute("role", "button");
                this.setAttribute("href", "javascript:void(0);");
            }
        }

        /**
         * 
         * @return {string}
         */
        public getBoostrapName(): string {
            if (this.outline){
                return "btn-outline";
            } else {
                return "btn";
            }
        }

        public isOutline(): boolean {
            return this.outline;
        }

        public setOutline(outline: boolean) {
            this.outline = outline;
            this.refresh();
        }

        public setSize(size: boostrap.Constants.Size): Button {
            this.size = size;
            if (boostrap.Constants.Size["_$wrappers"][size].getValue() === "sm"){
                if (this.hasClass("btn-lg")){
                    this.removeClass("btn-lg");
                }
                this.addClass("btn-sm");
            } else if (boostrap.Constants.Size["_$wrappers"][size].getValue() === "lg"){
                if (this.hasClass("btn-sm")){
                    this.removeClass("btn-sm");
                }
                this.addClass("btn-lg");
            } else {
                if (this.hasClass("btn-sm")){
                    this.removeClass("btn-sm");
                }
                if (this.hasClass("btn-lg")){
                    this.removeClass("btn-lg");
                }
            }
            return this;
        }

        public getSize(): boostrap.Constants.Size {
            return this.size;
        }

        public isDisabled(): boolean {
            return this.disabled;
        }

        public setDisabled(disabled: boolean) {
            this.disabled = disabled;
            if (disabled){
                if (/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null ? o2 : o2.toUpperCase()))(this.getTag(), "a")){
                    this.setAttribute("aria-disabled", "true");
                    if (!this.hasClass("disabled"))this.addClass("disabled");
                    this.setAttribute("tabindex", "-1");
                } else {
                    this.setAttribute("disabled", "true");
                }
            } else {
                if (/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null ? o2 : o2.toUpperCase()))(this.getTag(), "a")){
                    this.setAttribute("aria-disabled", null);
                    if (this.hasClass("disabled"))this.removeClass("disabled");
                    this.setAttribute("tabindex", null);
                } else {
                    this.setAttribute("disabled", null);
                }
            }
        }

        public isBlock(): boolean {
            return this.block;
        }

        public setBlock(block: boolean) {
            this.block = block;
            if (block && !this.hasClass("btn-block")){
                this.addClass("btn-block");
            } else {
                this.removeClass("btn-block");
            }
        }
    }
    Button["__class"] = "framework.components.boostrap.Button";
    Button["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace boostrap {
    export class ListGroupItem extends boostrap.BaseBootstrap {
        public constructor(name: string, tag: string) {
            super(name, tag);
        }

        /**
         * 
         * @return {string}
         */
        public getBoostrapName(): string {
            return "list-group-item";
        }

        public setActive(b: boolean) {
            if (b && !this.hasClass("active")){
                this.addClass("active");
            } else if (!b && this.hasClass("active")){
                this.removeClass("active");
            }
        }

        public isActive(): boolean {
            return this.hasClass("active");
        }

        public setDisabled(b: boolean) {
            if (b && !this.hasClass("disabled")){
                this.addClass("disabled");
            } else if (!b && this.hasClass("disabled")){
                this.removeClass("disabled");
            }
            this.setAttribute("aria-disabled", b ? "true" : "false");
        }

        public isDisabled(): boolean {
            return this.hasClass("disabled");
        }

        public setActionable(b: boolean) {
            if (b && !this.hasClass("list-group-item-action")){
                this.addClass("list-group-item-action");
            } else if (!b && this.hasClass("list-group-item-action")){
                this.removeClass("list-group-item-action");
            }
        }

        public isActionable(): boolean {
            return this.hasClass("list-group-item-action");
        }
    }
    ListGroupItem["__class"] = "framework.components.boostrap.ListGroupItem";
    ListGroupItem["__interfaces"] = ["framework.components.api.Renderable"];


}


boostrap.Broot.main(null);
