/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface StickMan {
    }
}
declare global {
    interface HTMLStickManElement extends Components.StickMan, HTMLStencilElement {
    }
    var HTMLStickManElement: {
        prototype: HTMLStickManElement;
        new (): HTMLStickManElement;
    };
    interface HTMLElementTagNameMap {
        "stick-man": HTMLStickManElement;
    }
}
declare namespace LocalJSX {
    interface StickMan {
    }
    interface IntrinsicElements {
        "stick-man": StickMan;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "stick-man": LocalJSX.StickMan & JSXBase.HTMLAttributes<HTMLStickManElement>;
        }
    }
}