declare namespace boostrap {
    abstract class AbstractBootstrap extends JSContainer {
        context: boostrap.Constants.Context;
        constructor(name: string, tag: string);
        setContext(context: boostrap.Constants.Context): AbstractBootstrap;
        refresh(): void;
        clearContexts(): AbstractBootstrap;
        getContext(): boostrap.Constants.Context;
        abstract getBoostrapName(): string;
    }
}
declare namespace boostrap {
    class Breadcrumb extends JSContainer {
        constructor(name: string);
        addItem(name: string, label: string): Breadcrumb.BreadcrumbItem;
        activate(name: string): void;
    }
    namespace Breadcrumb {
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
}
declare namespace boostrap {
    enum Breakpoint {
        EXTRA_SMALL = 0,
        SMALL = 1,
        MEDIUM = 2,
        LARGE = 3,
        EXTRA_LARGE = 4,
        EXTRA_EXTRA_LARGE = 5
    }
    /** @ignore */
    class Breakpoint_$WRAPPER {
        protected _$ordinal: number;
        protected _$name: string;
        value: any;
        constructor(_$ordinal: number, _$name: string, value: any);
        name(): string;
        ordinal(): number;
        compareTo(other: any): number;
    }
}
declare namespace boostrap {
    class Broot {
        static main(args: string[]): void;
    }
}
declare namespace boostrap {
    class ButtonGroup extends JSContainer {
        static SIZE_LARGE: string;
        static SIZE_SMALL: string;
        static SIZE_NORMAL: string;
        vertical: boolean;
        constructor(name: string);
        isVertical(): boolean;
        setVertical(vertical: boolean): void;
        setSize(size: string): ButtonGroup;
    }
}
declare namespace boostrap {
    class Card extends JSContainer {
        header: JSContainer;
        content: JSContainer;
        footer: JSContainer;
        constructor(name: string);
        getUIHeader(): JSContainer;
        getUIContent(): JSContainer;
        getUIFooter(): JSContainer;
        addHeaderImage(img: JSContainer): Card;
    }
}
declare namespace boostrap {
    class CardBody extends JSContainer {
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
}
declare namespace boostrap {
    class CardFooter extends JSContainer {
        constructor(name: string);
    }
}
declare namespace boostrap {
    class CardHeader extends JSContainer {
        constructor(name: string);
    }
}
declare namespace boostrap {
    class Carousel extends JSContainer {
        inner: JSContainer;
        controlPrev: JSContainer;
        controlNext: JSContainer;
        constructor(name: string);
        decoratecontrol(control: JSContainer, dir: string): void;
        setShowControls(b: boolean): void;
        isShowControls(): boolean;
        setCrossFade(b: boolean): void;
        isCrossFade(): boolean;
        addItem(item: boostrap.CarouselItem): void;
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
}
declare namespace boostrap {
    class CarouselItem extends JSContainer {
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
}
declare namespace boostrap {
    class Constants {
    }
    namespace Constants {
        enum Context {
            PRIMARY = 0,
            SECONDARY = 1,
            SUCCESS = 2,
            DANGER = 3,
            WARNING = 4,
            INFO = 5,
            LIGHT = 6,
            DARK = 7,
            BODY = 8,
            WHITE = 9,
            TRANSPARENT = 10
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
            MEDIUM = 1,
            LARGE = 2,
            EXTRA_LARGE = 3,
            NORMAL = 4
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
            EVENLY = 4,
            BETWEEN = 5
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
            NORMAL = 0,
            SMALL = 1,
            MEDIUM = 2,
            LARGE = 3,
            EXTRA_LARGE = 4,
            EXTRA_EXTRA_LARGE = 5
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
}
declare namespace boostrap {
    class Container extends JSContainer {
        constructor(name: string, tag: string);
        setBreakpoint(breakpoint: boostrap.Breakpoint): Container;
        setFluid(b: boolean): Container;
        reset(): Container;
        clearCls(): void;
    }
}
declare namespace boostrap {
    class Dropdown extends JSContainer {
        button: boostrap.Button;
        btnSplit: boostrap.Button;
        menu: boostrap.DropdownMenu;
        split: boolean;
        constructor(name: string, tag: string);
        getButton(): boostrap.Button;
        getMenu(): boostrap.DropdownMenu;
        setSplit(b: boolean): Dropdown;
        /**
         *
         * @param {HTMLElement} parent
         */
        render(parent: HTMLElement): void;
    }
}
declare namespace boostrap {
    class DropdownMenu extends JSContainer {
        constructor(name: string);
        addItem(name: string, text: string): DropdownMenu.DropdownItem;
    }
    namespace DropdownMenu {
        class DropdownItem extends JSContainer {
            constructor(name: string, text: string);
            setText(text: string): DropdownMenu.DropdownItem;
        }
    }
}
declare namespace boostrap {
    class ListGroup extends JSContainer {
        constructor(name: string, tag: string);
        setFlush(b: boolean): void;
        isFlush(): boolean;
        setHorizontal$boolean(b: boolean): void;
        isHorizontal(): boolean;
        clearHorizontalCls(): void;
        setHorizontal$framework_components_boostrap_Constants_ScreenSize(screenSize: boostrap.Constants.ScreenSize): void;
        setHorizontal(screenSize?: any): any;
        addItem(item: boostrap.ListGroupItem): void;
    }
}
declare namespace boostrap {
    class Modal extends JSContainer {
        dialog: JSContainer;
        content: JSContainer;
        header: JSContainer;
        body: JSContainer;
        footer: JSContainer;
        title: JSContainer;
        btnClose: JSContainer;
        constructor(name: string);
        getDialog(): JSContainer;
        getContent(): JSContainer;
        getHeader(): JSContainer;
        getBody(): JSContainer;
        getFooter(): JSContainer;
        getTitle(): JSContainer;
        getBtnClose(): JSContainer;
        setScrollable(b: boolean): Modal;
        setStaticBackdrop(b: boolean): Modal;
        setCentered(b: boolean): Modal;
        setFade(b: boolean): Modal;
        setSize(size: boostrap.Constants.Size): Modal;
        setFullScreen$boolean(b: boolean): Modal;
        setFullScreen$boolean$framework_components_boostrap_Constants_ScreenSize(b: boolean, size: boostrap.Constants.ScreenSize): Modal;
        setFullScreen(b?: any, size?: any): any;
        show(): Modal;
        toggle(): Modal;
        hide(): Modal;
        close(): Modal;
    }
}
declare namespace boostrap {
    class MyApp extends JSContainer {
        header: JSContainer;
        constructor(name: string);
    }
    namespace MyApp {
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
}
declare namespace boostrap {
    class Nav extends JSContainer {
        type: Nav.Type;
        alignment: Nav.Alignment;
        spacing: Nav.Spacing;
        constructor(name: string, tag: string);
        setJustifyContent(justifyContent: boostrap.Constants.JustifyContent): Nav;
        getType(): Nav.Type;
        setType(type: Nav.Type): void;
        getAlignment(): Nav.Alignment;
        setAlignment(alignment: Nav.Alignment): void;
        getSpacing(): Nav.Spacing;
        setSpacing(spacing: Nav.Spacing): void;
    }
    namespace Nav {
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
}
declare namespace boostrap {
    class NavBar extends JSContainer {
        container: JSContainer;
        brand: JSContainer;
        toggler: input.JSButton;
        collapse: JSContainer;
        constructor(name: string);
        setBackground(ctx: boostrap.Constants.Context): NavBar;
        applyContext(ctn: JSContainer, ctx: boostrap.Constants.Context, prefix: string): NavBar;
        setForground(ctx: boostrap.Constants.Context): NavBar;
        setExpandSize(size: boostrap.Constants.Size): NavBar;
        getContainer(): JSContainer;
        getBrand(): JSContainer;
        getToggler(): input.JSButton;
        getCollapse(): JSContainer;
        setPlacement(plc: NavBar.Placement): NavBar;
    }
    namespace NavBar {
        enum Placement {
            FIXED_TOP = 0,
            FIXED_BOTTOM = 1,
            DEFAULT = 2,
            STICKY_TOP = 3
        }
        /** @ignore */
        class Placement_$WRAPPER {
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
}
declare namespace boostrap {
    class NavItem extends JSContainer {
        constructor(name: string, tag: string);
    }
}
declare namespace boostrap {
    class PageItem extends JSContainer {
        constructor(name: string);
        setDisabled(b: boolean): PageItem;
        setActive(b: boolean): PageItem;
    }
}
declare namespace boostrap {
    class Pagination extends JSContainer {
        constructor(name: string);
        addPageItem(pi: boostrap.PageItem): Pagination;
        setSize(size: boostrap.Constants.Size): Pagination;
        setJustifyContent(justifyContent: boostrap.Constants.JustifyContent): Pagination;
    }
}
declare namespace boostrap {
    class Progress extends JSContainer {
        bar: JSContainer;
        context: boostrap.Constants.Context;
        min: number;
        max: number;
        value: number;
        constructor(name: string);
        getContext(): boostrap.Constants.Context;
        setAnimated(b: boolean): void;
        isAnimated(): boolean;
        setStriped(b: boolean): void;
        isStriped(): boolean;
        setContext(context: boostrap.Constants.Context): void;
        getMin(): number;
        setMin(min: number): void;
        getMax(): number;
        setMax(max: number): void;
        getValue(): number;
        setValue(value: number): void;
        getBar(): JSContainer;
    }
}
declare namespace boostrap.utils {
    class FlexUtil {
        static setJustifyContent(justifyContent: boostrap.Constants.JustifyContent, r: api.Renderable): void;
    }
}
declare namespace boostrap {
    /**
     * Bootstrap Alert implementation
     * @param {string} name
     * @class
     * @extends boostrap.AbstractBootstrap
     */
    class Alert extends boostrap.AbstractBootstrap {
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
}
declare namespace boostrap {
    class Badge extends boostrap.AbstractBootstrap {
        constructor(name: string, tag: string);
        /**
         *
         * @return {string}
         */
        getBoostrapName(): string;
        setPill(b: boolean): Badge;
    }
}
declare namespace boostrap {
    class Button extends boostrap.AbstractBootstrap {
        outline: boolean;
        disabled: boolean;
        block: boolean;
        size: boostrap.Constants.Size;
        constructor(name: string, tag: string);
        /**
         *
         * @return {string}
         */
        getBoostrapName(): string;
        isOutline(): boolean;
        setOutline(outline: boolean): void;
        setSize(size: boostrap.Constants.Size): Button;
        getSize(): boostrap.Constants.Size;
        isDisabled(): boolean;
        setDisabled(disabled: boolean): void;
        isBlock(): boolean;
        setBlock(block: boolean): void;
    }
}
declare namespace boostrap {
    class ListGroupItem extends boostrap.AbstractBootstrap {
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
}
