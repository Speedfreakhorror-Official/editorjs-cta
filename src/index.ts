// editorjs-cta: a call-to-action block for Editor.js (optional heading, button preview the host places).
import type { API, BlockTool, BlockToolConstructorOptions } from '@editorjs/editorjs';

export interface CtaData { heading?: string }
export interface CtaConfig { buttonLabel?: string }

/** Drops unknown keys and an empty heading. */
export function normalize(data: unknown): CtaData {
  const o = data && typeof data === 'object' ? (data as Record<string, unknown>) : {};
  const heading = typeof o.heading === 'string' ? o.heading.trim() : '';
  return heading ? { heading } : {};
}

export default class CtaTool implements BlockTool {
  private data: CtaData;
  constructor(private opts: BlockToolConstructorOptions<CtaData, CtaConfig>) {
    this.data = normalize(opts.data);
  }
  static get toolbox() {
    return { title: 'Call to action', icon: '<svg width="17" height="15" viewBox="0 0 17 15"><rect x="2" y="4" width="13" height="7" rx="3.5" fill="currentColor"/></svg>' };
  }
  static get isReadOnlySupported() { return true; }
  // `true` keeps the value as typed: a rule of `false` would HTML-escape it (& becomes &amp;) on every save
  static get sanitize() { return { heading: true }; }

  render(): HTMLElement {
    const root = document.createElement('div');
    root.className = 'ejs-cta';
    root.addEventListener('input', () => this.opts.block.dispatchChange());
    const heading = document.createElement('input');
    heading.className = 'ejs-cta-input';
    heading.type = 'text';
    heading.placeholder = 'Heading (optional)';
    heading.value = this.data.heading ?? '';
    heading.disabled = (this.opts.api as API).readOnly.isEnabled;
    heading.oninput = () => { this.data = normalize({ heading: heading.value }); };
    // the real button is drawn by the page that shows the block
    const button = document.createElement('div');
    button.className = 'ejs-cta-button';
    button.textContent = this.opts.config?.buttonLabel ?? 'Get started';
    root.append(heading, button);
    return root;
  }
  save(): CtaData { return this.data; }
  validate() { return true; }
}
