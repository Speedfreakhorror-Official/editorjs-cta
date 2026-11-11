import type { BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs';
export interface CtaData {
    heading?: string;
}
export interface CtaConfig {
    buttonLabel?: string;
}
/** Drops unknown keys and an empty heading. */
export declare function normalize(data: unknown): CtaData;
export default class CtaTool implements BlockTool {
    private opts;
    private data;
    constructor(opts: BlockToolConstructorOptions<CtaData, CtaConfig>);
    static get toolbox(): {
        title: string;
        icon: string;
    };
    static get isReadOnlySupported(): boolean;
    static get sanitize(): {
        heading: boolean;
    };
    render(): HTMLElement;
    save(): CtaData;
    validate(): boolean;
}
