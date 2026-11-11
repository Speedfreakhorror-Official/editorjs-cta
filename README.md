# editorjs-cta

A call-to-action block for Editor.js: an optional heading above a button the host places.

## Install

```
npm i github:Speedfreakhorror-Official/editorjs-cta
```

Import the tool and its stylesheet:

```ts
import CtaTool from 'editorjs-cta';
import 'editorjs-cta/style.css';
```

## Usage

```ts
new EditorJS({ tools: { cta: { class: CtaTool, config: { buttonLabel: 'Get started' } } } });
```

The stylesheet reads these CSS variables, with light and dark defaults on `:root`; override them on any parent element:
`--ejs-ink`, `--ejs-muted`, `--ejs-line`, `--ejs-surface`, `--ejs-accent`, `--ejs-danger`.

## Data

```json
{ "heading": "Optional" }
```

`buttonLabel` is the label shown on the (non-editable) button preview.

The module also exports a pure `normalize(data)` that fills defaults and drops unknown top-level keys.

## Credits

Built as part of [PrintCut](https://printcut.app), a browser studio for designing laser-cut boxes, puzzles, keychains and signs from templates. Made and owned by [ibrahim-jaber.com](https://ibrahim-jaber.com).
