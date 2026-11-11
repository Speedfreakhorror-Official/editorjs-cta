// src/index.ts
function normalize(data) {
  const o = data && typeof data === "object" ? data : {};
  const heading = typeof o.heading === "string" ? o.heading.trim() : "";
  return heading ? { heading } : {};
}

class CtaTool {
  opts;
  data;
  constructor(opts) {
    this.opts = opts;
    this.data = normalize(opts.data);
  }
  static get toolbox() {
    return { title: "Call to action", icon: '<svg width="17" height="15" viewBox="0 0 17 15"><rect x="2" y="4" width="13" height="7" rx="3.5" fill="currentColor"/></svg>' };
  }
  static get isReadOnlySupported() {
    return true;
  }
  static get sanitize() {
    return { heading: true };
  }
  render() {
    const root = document.createElement("div");
    root.className = "ejs-cta";
    root.addEventListener("input", () => this.opts.block.dispatchChange());
    const heading = document.createElement("input");
    heading.className = "ejs-cta-input";
    heading.type = "text";
    heading.placeholder = "Heading (optional)";
    heading.value = this.data.heading ?? "";
    heading.disabled = this.opts.api.readOnly.isEnabled;
    heading.oninput = () => {
      this.data = normalize({ heading: heading.value });
    };
    const button = document.createElement("div");
    button.className = "ejs-cta-button";
    button.textContent = this.opts.config?.buttonLabel ?? "Get started";
    root.append(heading, button);
    return root;
  }
  save() {
    return this.data;
  }
  validate() {
    return true;
  }
}
export {
  CtaTool as default,
  normalize
};
