# Widget Style Guide

_Standards for interactive MathBox widgets across the Linear Algebra course._

---

## Technology Stack

- **MathBox.js** (v2.3.1) — WebGL math visualization
- **Three.js** (v0.137.0) — 3D rendering engine
- **Vanilla CSS** — No frameworks, keeps things simple

### CDN Links

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mathbox@2.3.1/build/mathbox.css">
<script src="https://cdn.jsdelivr.net/npm/three@0.137.0/build/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.137.0/examples/js/controls/OrbitControls.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mathbox@2.3.1/build/bundle/mathbox.js"></script>
```

---

## Color Palette

| Element | Color | Hex |
|---------|-------|-----|
| Background | Dark navy | `#1a1a2e` |
| Sidebar | Darker navy | `#12121c` |
| Grid lines | Dark gray | `#444` |
| Axes | White | `#ffffff` |
| Axis labels | White | `#ffffff` |
| **Vector 1 (v₁)** | Red/pink | `#e94560` |
| **Vector 2 (v₂)** | Blue | `#4d80e4` |
| **Sum / Result** | Teal/green | `#16c79a` |
| Ghost vectors | Same as parent, 40% opacity | `opacity: 0.4` |
| Text (general) | Light gray/white | `#eee` |
| Muted text | Gray | `#aaa` |

---

## Layout

### Sidebar + Graph Layout (Recommended)

```
┌─────────────┬──────────────────────────┐
│             │                          │
│  Controls   │                          │
│  & Labels   │        MathBox           │
│             │         Graph            │
│  (260px)    │        (flex: 1)         │
│             │                          │
└─────────────┴──────────────────────────┘
```

- **Sidebar width:** 260px
- **Container height:** 500px (fits in iframe without scrollbar)
- **Sidebar background:** `#12121c`
- **Graph background:** `#1a1a2e`

### CSS Structure

```css
.container {
  display: flex;
  width: 100%;
  height: 500px;
}

.sidebar {
  width: 260px;
  min-width: 260px;
  background: #12121c;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

#mathbox {
  flex: 1;
  height: 100%;
}
```

---

## Typography

- **Font family:** `'Segoe UI', sans-serif`
- **Monospace (values):** `monospace`
- **Vector displays:** 16px
- **Slider labels:** 14px
- **Axis labels:** 16px (in MathBox)

---

## UI Components

### Vector Section Card

```css
.vector-section {
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
  padding: 12px;
}
```

### Vector Badge

```css
.vector-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
}
```

### Column Vector Display

```css
.col-vector {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border-left: 2px solid currentColor;
  border-right: 2px solid currentColor;
  padding: 2px 10px;
  border-radius: 3px;
}
.col-vector span {
  line-height: 1.4;
  font-family: monospace;
}
```

### Slider Row

```css
.slider-row {
  display: flex;
  align-items: center;
  margin: 8px 0;
  gap: 10px;
}
.slider-row label {
  width: 25px;
  font-size: 14px;
  color: #aaa;
}
.slider-row input[type="range"] {
  flex: 1;
}
.slider-row .value {
  width: 40px;
  text-align: right;
  font-size: 14px;
  font-family: monospace;
}
```

---

## MathBox Settings

### Initialization

```javascript
const mathbox = MathBox.mathBox({
  element: document.getElementById('mathbox'),
  plugins: ['core', 'controls', 'cursor'],
  controls: {
    klass: THREE.OrbitControls,
  },
  camera: {
    fov: 45,
  },
});

mathbox.three.renderer.setClearColor(new THREE.Color('#1a1a2e'), 1.0);

mathbox.camera({
  proxy: true,
  position: [0, 0, 6],  // Adjust for 2D vs 3D
});
```

### 2D Cartesian View

```javascript
const view = mathbox.cartesian({
  range: [[-4, 4], [-4, 4], [-1, 1]],
  scale: [2, 2, 1],
});
```

### Grid

```javascript
view.grid({
  axes: [1, 2],
  width: 1,
  color: '#444',
  depth: 0.5,
});
```

### Axes

```javascript
view.axis({ axis: 1, width: 3, color: '#ffffff' });
view.axis({ axis: 2, width: 3, color: '#ffffff' });
```

### Axis Labels

```javascript
view.array({
  id: 'xlabels',
  width: 6,
  channels: 3,
  data: [[-3, -0.5, 0], [-2, -0.5, 0], [-1, -0.5, 0], [1, -0.5, 0], [2, -0.5, 0], [3, -0.5, 0]],
});
view.text({
  data: ['-3', '-2', '-1', '1', '2', '3'],
});
view.label({
  points: '#xlabels',
  color: '#ffffff',
  background: '#1a1a2e',
  size: 16,
  depth: 0.5,
});
```

### Vectors

```javascript
// Define points
view.array({
  id: 'v1points',
  width: 2,
  channels: 3,
  data: [[0, 0, 0], [x, y, 0]],  // 3D coords required
});

// Draw line
view.line({
  points: '#v1points',
  color: '#e94560',
  width: 8,
});

// Tip marker
view.array({
  id: 'v1tip',
  width: 1,
  channels: 3,
  data: [[x, y, 0]],
});
view.point({
  points: '#v1tip',
  color: '#e94560',
  size: 20,
});
```

### Updating Data

```javascript
mathbox.select('#v1points').set('data', [[0, 0, 0], [newX, newY, 0]]);
```

---

## Embedding in Articles

Use absolute URLs in iframes:

```html
<iframe 
  src="https://ilundholm.github.io/linear_algebra_KA/widgets/widget-name.html" 
  width="100%" 
  height="550" 
  style="border: none; border-radius: 8px;">
</iframe>
```

---

## File Organization

```
widgets/
├── vector-addition.html      ✅ Complete
├── linear-combination.html   (future)
├── transformation-grid.html  (future)
└── ...
```

---

## Checklist for New Widgets

- [ ] Uses standard color palette
- [ ] Sidebar layout (controls left, graph right)
- [ ] Container height 500px
- [ ] Column vector notation for displays
- [ ] White axes with labeled integers
- [ ] Dark grid (#444)
- [ ] Slider values update in real-time
- [ ] No overlays covering the graph
- [ ] Works in iframe embed

---

_Last updated: 2026-02-06_
