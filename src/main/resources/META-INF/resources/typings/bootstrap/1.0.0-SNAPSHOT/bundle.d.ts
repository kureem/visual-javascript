declare abstract class BaseBootstrap extends JSContainer {
    context: Constants.Context;
    constructor(name: string, tag: string);
    setContext(context: Constants.Context): BaseBootstrap;
    refresh(): void;
    clearContexts(): BaseBootstrap;
    getContext(): Constants.Context;
    abstract getBoostrapName(): string;
}
declare class Boot {
    static main(args: string[]): void;
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
        DARK = 7,
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
    }
    enum Size {
        SMALL = 0,
        LARGE = 1,
        NORMAL = 2,
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
    }
    enum JustifyContent {
        START = 0,
        CENTER = 1,
        END = 2,
        AROUND = 3,
        BETWEEN = 4,
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
        LINKS = 2,
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
    }
    enum Alignment {
        VERTICAL = 0,
        HORIZONTAL = 1,
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
    }
    enum Spacing {
        FILL = 0,
        JUSTIFIED = 1,
        NONE = 2,
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
