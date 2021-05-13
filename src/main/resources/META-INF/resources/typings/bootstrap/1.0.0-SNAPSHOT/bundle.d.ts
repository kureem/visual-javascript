declare abstract class BaseBootstrap extends JSContainer {
    context: Constants.Context;
    constructor(name: string, tag: string);
    setContext(context: Constants.Context): BaseBootstrap;
    refresh(): void;
    clearContexts(): BaseBootstrap;
    getContext(): Constants.Context;
    abstract getBoostrapName(): string;
}
declare class Breadcrumb extends JSContainer {
    constructor(name: string);
    addItem(name: string, label: string): Breadcrumb.BreadcrumbItem;
    activate(name: string): void;
}
declare namespace Breadcrumb {
    class BreadcrumbItem extends JSContainer {
        label_: string;
        active: boolean;
        constructor(name: string, label: string);
        setLabel(label: string): void;
        setActive(b: boolean): void;
        refresh(): void;
        isActive(): boolean;
    }
    namespace BreadcrumbItem {
        class BreadcrumbItem$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare class Broot {
    static main(args: string[]): void;
}
declare class ButtonGroup extends JSContainer {
    static SIZE_LARGE: string;
    static SIZE_SMALL: string;
    static SIZE_NORMAL: string;
    vertical: boolean;
    constructor(name: string);
    isVertical(): boolean;
    setVertical(vertical: boolean): void;
    setSize(size: string): ButtonGroup;
}
declare class Card extends JSContainer {
    header: JSContainer;
    content: JSContainer;
    footer: JSContainer;
    constructor(name: string);
    getUIHeader(): JSContainer;
    getUIContent(): JSContainer;
    getUIFooter(): JSContainer;
    addHeaderImage(img: JSContainer): Card;
}
declare class CardBody extends JSContainer {
    title: JSContainer;
    subtitle: JSContainer;
    text: JSContainer;
    foot: JSContainer;
    constructor(name: string);
    setTitle(title: string): CardBody;
    setSubtitle(subtitle: string): CardBody;
    setText(txt: string): CardBody;
    getUITitle(): JSContainer;
    getUISubtitle(): JSContainer;
    getUIText(): JSContainer;
    getUIFoot(): JSContainer;
    addCardLink(link: JSContainer): CardBody;
}
declare class CardFooter extends JSContainer {
    constructor(name: string);
}
declare class CardHeader extends JSContainer {
    constructor(name: string);
}
declare class Carousel extends JSContainer {
    inner: JSContainer;
    controlPrev: JSContainer;
    controlNext: JSContainer;
    constructor(name: string);
    decoratecontrol(control: JSContainer, dir: string): void;
    setShowControls(b: boolean): void;
    isShowControls(): boolean;
    setCrossFade(b: boolean): void;
    isCrossFade(): boolean;
    addItem(item: CarouselItem): void;
    setInterval(interval: number): void;
    setKeyboard(b: boolean): void;
    setPauseOnHover(b: boolean): void;
    setRideCarousel(b: boolean): void;
    setWrap(b: boolean): void;
    setTouch(b: boolean): void;
    cycle(): void;
    pause(): void;
    prev(): void;
    next(): void;
    dispose(): void;
    invoke(method: string): void;
}
declare class CarouselItem extends JSContainer {
    img: JSContainer;
    caption: JSContainer;
    title: JSContainer;
    subtitle: JSContainer;
    constructor(name: string);
    setShowCaption(b: boolean): void;
    isShowCaption(): boolean;
    setTitle(str: string): void;
    setSubtitle(str: string): void;
    setInterval(interval: number): void;
}
declare class Constants {
}
declare namespace Constants {
    enum Context {
        PRIMARY = 0,
        SECONDARY = 1,
        SUCCESS = 2,
        DANGER = 3,
        WARNING = 4,
        INFO = 5,
        LIGHT = 6,
        DARK = 7
    }
    /** @ignore */
    class Context_$WRAPPER {
        protected _$ordinal: number;
        protected _$name: string;
        value: any;
        constructor(_$ordinal: number, _$name: string, value: any);
        getValue(): string;
        name(): string;
        ordinal(): number;
        compareTo(other: any): number;
    }
    enum Size {
        SMALL = 0,
        LARGE = 1,
        NORMAL = 2
    }
    /** @ignore */
    class Size_$WRAPPER {
        protected _$ordinal: number;
        protected _$name: string;
        value: any;
        constructor(_$ordinal: number, _$name: string, value: any);
        getValue(): string;
        name(): string;
        ordinal(): number;
        compareTo(other: any): number;
    }
    enum JustifyContent {
        START = 0,
        CENTER = 1,
        END = 2,
        AROUND = 3,
        BETWEEN = 4
    }
    /** @ignore */
    class JustifyContent_$WRAPPER {
        protected _$ordinal: number;
        protected _$name: string;
        value: any;
        constructor(_$ordinal: number, _$name: string, value: any);
        getValue(): string;
        name(): string;
        ordinal(): number;
        compareTo(other: any): number;
    }
    enum ScreenSize {
        SMALL = 0,
        MEDIUM = 1,
        LARGE = 2,
        EXTRA_LARGE = 3
    }
    /** @ignore */
    class ScreenSize_$WRAPPER {
        protected _$ordinal: number;
        protected _$name: string;
        value: any;
        constructor(_$ordinal: number, _$name: string, value: any);
        getValue(): string;
        name(): string;
        ordinal(): number;
        compareTo(other: any): number;
    }
}
declare class Dropdown extends JSContainer {
    button: Button;
    btnSplit: Button;
    menu: DropdownMenu;
    split: boolean;
    constructor(name: string, tag: string);
    getButton(): Button;
    getMenu(): DropdownMenu;
    setSplit(b: boolean): Dropdown;
    /**
     *
     * @param {HTMLElement} parent
     */
    render(parent: HTMLElement): void;
}
declare class DropdownMenu extends JSContainer {
    constructor(name: string);
    addItem(name: string, text: string): DropdownMenu.DropdownItem;
}
declare namespace DropdownMenu {
    class DropdownItem extends JSContainer {
        constructor(name: string, text: string);
        setText(text: string): DropdownMenu.DropdownItem;
    }
}
declare class ListGroup extends JSContainer {
    constructor(name: string, tag: string);
    setFlush(b: boolean): void;
    isFlush(): boolean;
    setHorizontal$boolean(b: boolean): void;
    isHorizontal(): boolean;
    clearHorizontalCls(): void;
    setHorizontal$framework_components_boostrap_Constants_ScreenSize(screenSize: Constants.ScreenSize): void;
    setHorizontal(screenSize?: any): any;
    addItem(item: ListGroupItem): void;
}
declare class MyApp extends JSContainer {
    header: JSContainer;
    constructor(name: string);
}
declare namespace MyApp {
    class MyApp$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class Nav extends JSContainer {
    type: Nav.Type;
    alignment: Nav.Alignment;
    spacing: Nav.Spacing;
    constructor(name: string, tag: string);
    setJustifyContent(justifyContent: Constants.JustifyContent): Nav;
    getType(): Nav.Type;
    setType(type: Nav.Type): void;
    getAlignment(): Nav.Alignment;
    setAlignment(alignment: Nav.Alignment): void;
    getSpacing(): Nav.Spacing;
    setSpacing(spacing: Nav.Spacing): void;
}
declare namespace Nav {
    enum Type {
        PILLS = 0,
        TABS = 1,
        LINKS = 2
    }
    /** @ignore */
    class Type_$WRAPPER {
        protected _$ordinal: number;
        protected _$name: string;
        value: any;
        constructor(_$ordinal: number, _$name: string, value: any);
        getValue(): string;
        name(): string;
        ordinal(): number;
        compareTo(other: any): number;
    }
    enum Alignment {
        VERTICAL = 0,
        HORIZONTAL = 1
    }
    /** @ignore */
    class Alignment_$WRAPPER {
        protected _$ordinal: number;
        protected _$name: string;
        value: any;
        constructor(_$ordinal: number, _$name: string, value: any);
        getValue(): string;
        name(): string;
        ordinal(): number;
        compareTo(other: any): number;
    }
    enum Spacing {
        FILL = 0,
        JUSTIFIED = 1,
        NONE = 2
    }
    /** @ignore */
    class Spacing_$WRAPPER {
        protected _$ordinal: number;
        protected _$name: string;
        value: any;
        constructor(_$ordinal: number, _$name: string, value: any);
        getValue(): string;
        name(): string;
        ordinal(): number;
        compareTo(other: any): number;
    }
}
declare class NavItem extends JSContainer {
    constructor(name: string, tag: string);
}
declare class Progress extends JSContainer {
    bar: JSContainer;
    context: Constants.Context;
    min: number;
    max: number;
    value: number;
    constructor(name: string);
    getContext(): Constants.Context;
    setAnimated(b: boolean): void;
    isAnimated(): boolean;
    setStriped(b: boolean): void;
    isStriped(): boolean;
    setContext(context: Constants.Context): void;
    getMin(): number;
    setMin(min: number): void;
    getMax(): number;
    setMax(max: number): void;
    getValue(): number;
    setValue(value: number): void;
    getBar(): JSContainer;
}
/**
 * Bootstrap Alert implementation
 * @param {string} name
 * @class
 * @extends BaseBootstrap
 */
declare class Alert extends BaseBootstrap {
    heading: JSContainer;
    body: JSContainer;
    __close: JSContainer;
    closing: boolean;
    constructor(name: string);
    /**
     *
     * @return {string}
     */
    getBoostrapName(): string;
    setHeading(heading: string): Alert;
    getHeading(): JSContainer;
    getBody(): JSContainer;
    setDismissable(b: boolean): Alert;
    close(b: boolean): Alert;
}
declare class Badge extends BaseBootstrap {
    constructor(name: string, tag: string);
    /**
     *
     * @return {string}
     */
    getBoostrapName(): string;
    setPill(b: boolean): Badge;
}
declare class Button extends BaseBootstrap {
    outline: boolean;
    disabled: boolean;
    block: boolean;
    size: Constants.Size;
    constructor(name: string, tag: string);
    /**
     *
     * @return {string}
     */
    getBoostrapName(): string;
    isOutline(): boolean;
    setOutline(outline: boolean): void;
    setSize(size: Constants.Size): Button;
    getSize(): Constants.Size;
    isDisabled(): boolean;
    setDisabled(disabled: boolean): void;
    isBlock(): boolean;
    setBlock(block: boolean): void;
}
declare class ListGroupItem extends BaseBootstrap {
    constructor(name: string, tag: string);
    /**
     *
     * @return {string}
     */
    getBoostrapName(): string;
    setActive(b: boolean): void;
    isActive(): boolean;
    setDisabled(b: boolean): void;
    isDisabled(): boolean;
    setActionable(b: boolean): void;
    isActionable(): boolean;
}
