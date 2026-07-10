window.BLOCK_SNIPPETS = {
  airport: {
    name: "Airport Pad",
    tags: ["airport", "escape", "travel"],
    html: `<div style="width: 170px; height: 170px; overflow: hidden; background: #2f3a3f;">
  <svg
    width="170"
    height="170"
    viewBox="0 0 170 170"
    xmlns="http://www.w3.org/2000/svg"
    style="display:block;width:100%;height:100%;"
  >
    <!-- ground -->
    <rect width="170" height="170" fill="#3f4b4f" />

    <!-- grass / outer land -->
    <rect x="0" y="0" width="170" height="170" fill="#43593f" />

    <!-- airport concrete area -->
    <rect x="14" y="18" width="142" height="134" rx="3" fill="#6b7375" />

    <!-- taxiways -->
    <rect x="32" y="76" width="106" height="18" fill="#50585a" />
    <rect x="76" y="34" width="18" height="104" fill="#50585a" />
    <rect x="94" y="44" width="42" height="14" fill="#50585a" />
    <rect x="34" y="112" width="42" height="14" fill="#50585a" />

    <!-- main runway -->
    <g transform="rotate(-24 85 85)">
      <rect x="20" y="70" width="130" height="30" rx="2" fill="#252b2e" />
      <rect x="24" y="83" width="12" height="4" fill="#e8e8d8" />
      <rect x="44" y="83" width="12" height="4" fill="#e8e8d8" />
      <rect x="64" y="83" width="12" height="4" fill="#e8e8d8" />
      <rect x="84" y="83" width="12" height="4" fill="#e8e8d8" />
      <rect x="104" y="83" width="12" height="4" fill="#e8e8d8" />
      <rect x="124" y="83" width="12" height="4" fill="#e8e8d8" />
      <rect x="22" y="73" width="126" height="2" fill="#bfc5b8" opacity="0.6" />
      <rect x="22" y="95" width="126" height="2" fill="#bfc5b8" opacity="0.6" />
    </g>

    <!-- terminal building -->
    <rect x="22" y="24" width="42" height="28" rx="2" fill="#9ca4a6" />
    <rect x="27" y="29" width="32" height="6" fill="#34414a" />
    <rect x="27" y="39" width="8" height="8" fill="#34414a" />
    <rect x="39" y="39" width="8" height="8" fill="#34414a" />
    <rect x="51" y="39" width="8" height="8" fill="#34414a" />

    <!-- hangars -->
    <rect x="112" y="110" width="32" height="24" rx="2" fill="#8c9496" />
    <path d="M112 110 Q128 96 144 110 Z" fill="#b6bec0" />
    <rect x="28" y="126" width="26" height="18" rx="2" fill="#8c9496" />
    <path d="M28 126 Q41 114 54 126 Z" fill="#b6bec0" />

    <!-- small airplanes -->
    <g transform="translate(107 70) rotate(28)">
      <rect x="-2" y="-12" width="4" height="24" rx="2" fill="#e7ecef" />
      <rect x="-14" y="-2" width="28" height="4" rx="1" fill="#e7ecef" />
      <rect x="-7" y="8" width="14" height="3" rx="1" fill="#e7ecef" />
      <circle cx="0" cy="-13" r="2" fill="#d34949" />
    </g>

    <g transform="translate(55 103) rotate(-62) scale(.75)">
      <rect x="-2" y="-12" width="4" height="24" rx="2" fill="#e7ecef" />
      <rect x="-14" y="-2" width="28" height="4" rx="1" fill="#e7ecef" />
      <rect x="-7" y="8" width="14" height="3" rx="1" fill="#e7ecef" />
      <circle cx="0" cy="-13" r="2" fill="#d34949" />
    </g>

    <!-- roads / parking -->
    <rect x="14" y="55" width="48" height="12" fill="#2f3436" />
    <rect x="22" y="58" width="8" height="2" fill="#e2d36a" />
    <rect x="38" y="58" width="8" height="2" fill="#e2d36a" />
    <rect x="18" y="68" width="38" height="22" fill="#596164" />
    <rect x="22" y="72" width="5" height="12" fill="#d9d9d9" />
    <rect x="31" y="72" width="5" height="12" fill="#d9d9d9" />
    <rect x="40" y="72" width="5" height="12" fill="#d9d9d9" />

    <!-- tower -->
    <circle cx="139" cy="35" r="9" fill="#c1c7c9" />
    <circle cx="139" cy="35" r="5" fill="#39474f" />
    <rect x="135" y="42" width="8" height="16" fill="#8e9698" />

    <!-- tile grid / pixel-game feel -->
    <path d="M0 0H170M0 34H170M0 68H170M0 102H170M0 136H170M34 0V170M68 0V170M102 0V170M136 0V170"
      stroke="#000" stroke-opacity="0.08" stroke-width="1" />

    <!-- subtle top-down vignette -->
    <rect width="170" height="170" fill="none" stroke="#1c2022" stroke-width="4" />
  </svg>
</div>`,

    // Canvas/AI version for index.html:
    landmark: {
      style: "custom",
      walk: true,
      ground: "asphalt",
      inner: "#0ea5e9",
      color: "white",
      glyph: [
        { s: "rect", x: 12, y: 12, w: 76, h: 76, c: "#e2e8f0", w2: 6 },
        { s: "line", x1: 25, y1: 50, x2: 75, y2: 50, c: "#e2e8f0", w2: 8 },
        { s: "line", x1: 50, y1: 25, x2: 50, y2: 75, c: "#e2e8f0", w2: 8 },
      ],
    },
  },
};
