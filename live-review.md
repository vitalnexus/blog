---
layout: default
title: Game Logs
permalink: /under-construction/
---

<div class="container">

  <div class="section-header" style="text-align: center; padding: 2rem 0 1rem;">
    <h1 class="section-title glitch" data-text="Under Construction">Under Construction</h1>
    <p class="section-subtitle">Launch sequence initializing...</p>
    <div class="section-divider" style="margin: 0.75rem auto;"></div>
  </div>

  <div class="gl-launchpad-wrap">
    <svg class="gl-launchpad-svg" viewBox="0 0 900 540" xmlns="http://www.w3.org/2000/svg" aria-label="Launch pad under construction">
      <defs>
        <radialGradient id="gl-sky-grad" cx="50%" cy="100%" r="90%">
          <stop offset="0%"  stop-color="#020e14"/>
          <stop offset="60%" stop-color="#010a0f"/>
          <stop offset="100%" stop-color="#000304"/>
        </radialGradient>
        <radialGradient id="gl-flood-l" cx="50%" cy="0%" r="100%">
          <stop offset="0%"  stop-color="#b0ffb0" stop-opacity=".18"/>
          <stop offset="100%" stop-color="#00FF41" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="gl-flood-r" cx="50%" cy="0%" r="100%">
          <stop offset="0%"  stop-color="#b0ffb0" stop-opacity=".18"/>
          <stop offset="100%" stop-color="#00FF41" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="gl-glow-engine" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stop-color="#00FF41" stop-opacity=".22"/>
          <stop offset="100%" stop-color="#00FF41" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="gl-rocket-body-grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%"  stop-color="#0d1e0d"/>
          <stop offset="40%" stop-color="#1a301a"/>
          <stop offset="65%" stop-color="#0f1f0f"/>
          <stop offset="100%" stop-color="#091409"/>
        </linearGradient>
        <linearGradient id="gl-tower-grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%"  stop-color="#0d1a0d"/>
          <stop offset="50%" stop-color="#132013"/>
          <stop offset="100%" stop-color="#0a150a"/>
        </linearGradient>
        <linearGradient id="gl-ground-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"  stop-color="#0d1a0d"/>
          <stop offset="100%" stop-color="#050f05"/>
        </linearGradient>
        <filter id="gl-blur-sm">
          <feGaussianBlur stdDeviation="2"/>
        </filter>
        <filter id="gl-blur-lg">
          <feGaussianBlur stdDeviation="6"/>
        </filter>
      </defs>

      <!-- â•â•â• GROUP 1: Sky background â•â•â• -->
      <g class="gl-g-sky">
        <rect width="900" height="540" fill="url(#gl-sky-grad)"/>
        <!-- Moon -->
        <circle cx="120" cy="55" r="22" fill="#0d1e0d" stroke="#00cc33" stroke-width="0.8" opacity=".6"/>
        <circle cx="128" cy="50" r="16" fill="#000" opacity=".7"/>
        <!-- Stars layer A -->
        <circle cx="38"  cy="22"  r="1.3" fill="#fff" opacity=".85"/>
        <circle cx="95"  cy="14"  r="0.9" fill="#fff" opacity=".60"/>
        <circle cx="162" cy="38"  r="1.1" fill="#fff" opacity=".75"/>
        <circle cx="230" cy="12"  r="1.4" fill="#fff" opacity=".90"/>
        <circle cx="285" cy="44"  r="0.8" fill="#fff" opacity=".55"/>
        <circle cx="340" cy="18"  r="1.2" fill="#fff" opacity=".80"/>
        <circle cx="410" cy="32"  r="0.7" fill="#fff" opacity=".50"/>
        <circle cx="470" cy="8"   r="1.0" fill="#fff" opacity=".70"/>
        <circle cx="540" cy="28"  r="1.3" fill="#fff" opacity=".85"/>
        <circle cx="602" cy="16"  r="0.9" fill="#fff" opacity=".65"/>
        <circle cx="665" cy="42"  r="1.1" fill="#fff" opacity=".80"/>
        <circle cx="730" cy="10"  r="0.8" fill="#fff" opacity=".55"/>
        <circle cx="792" cy="36"  r="1.4" fill="#fff" opacity=".90"/>
        <circle cx="858" cy="20"  r="1.0" fill="#fff" opacity=".70"/>
        <!-- Stars layer B -->
        <circle cx="55"  cy="68"  r="0.8" fill="#fff" opacity=".45"/>
        <circle cx="140" cy="80"  r="1.0" fill="#fff" opacity=".60"/>
        <circle cx="210" cy="62"  r="0.7" fill="#fff" opacity=".40"/>
        <circle cx="310" cy="75"  r="1.1" fill="#fff" opacity=".65"/>
        <circle cx="490" cy="55"  r="0.9" fill="#fff" opacity=".50"/>
        <circle cx="580" cy="70"  r="0.8" fill="#fff" opacity=".55"/>
        <circle cx="710" cy="58"  r="1.2" fill="#fff" opacity=".70"/>
        <circle cx="845" cy="72"  r="0.7" fill="#fff" opacity=".45"/>
        <!-- Distant nebula hint -->
        <ellipse cx="760" cy="35" rx="60" ry="18" fill="#001a00" opacity=".3" filter="url(#gl-blur-lg)"/>
      </g>

      <!-- â•â•â• GROUP 2: Horizon / distant geometry â•â•â• -->
      <g class="gl-g-horizon">
        <!-- Far-off launch control building -->
        <rect x="40"  y="390" width="110" height="55" fill="#0a140a" stroke="#0d1a0d" stroke-width="1"/>
        <rect x="50"  y="380" width="90"  height="14" fill="#0c180c" stroke="#0d1a0d" stroke-width="1"/>
        <!-- Windows in control building -->
        <rect x="55"  y="395" width="14" height="10" fill="#001a00" stroke="#00cc33" stroke-width="0.7" opacity=".7"/>
        <rect x="78"  y="395" width="14" height="10" fill="#001a00" stroke="#00cc33" stroke-width="0.7" opacity=".5"/>
        <rect x="101" y="395" width="14" height="10" fill="#00FF41" opacity=".15"/>
        <rect x="55"  y="413" width="14" height="10" fill="#001a00" stroke="#00cc33" stroke-width="0.7" opacity=".6"/>
        <rect x="78"  y="413" width="14" height="10" fill="#00FF41" opacity=".12"/>
        <rect x="101" y="413" width="14" height="10" fill="#001a00" stroke="#00cc33" stroke-width="0.7" opacity=".5"/>
        <!-- Antenna on control building -->
        <line x1="95"  y1="380" x2="95"  y2="356" stroke="#00cc33" stroke-width="1.2" opacity=".6"/>
        <line x1="85"  y1="364" x2="105" y2="364" stroke="#00cc33" stroke-width="1" opacity=".5"/>
        <!-- Access road markings -->
        <rect x="0" y="487" width="900" height="53" fill="#070f07"/>
        <line x1="0" y1="485" x2="900" y2="485" stroke="#0d1a0d" stroke-width="2"/>
        <!-- Dashed center road line -->
        <line x1="0"   y1="512" x2="60"  y2="512" stroke="#1a2f1a" stroke-width="2" stroke-dasharray="40,30"/>
        <line x1="130" y1="512" x2="220" y2="512" stroke="#1a2f1a" stroke-width="2" stroke-dasharray="40,30"/>
        <line x1="290" y1="512" x2="380" y2="512" stroke="#1a2f1a" stroke-width="2" stroke-dasharray="40,30"/>
        <line x1="450" y1="512" x2="560" y2="512" stroke="#1a2f1a" stroke-width="2" stroke-dasharray="40,30"/>
        <line x1="630" y1="512" x2="750" y2="512" stroke="#1a2f1a" stroke-width="2" stroke-dasharray="40,30"/>
        <line x1="820" y1="512" x2="900" y2="512" stroke="#1a2f1a" stroke-width="2" stroke-dasharray="40,30"/>
      </g>

      <!-- â•â•â• GROUP 3: Ground / launch complex concrete â•â•â• -->
      <g class="gl-g-ground">
        <!-- Main concrete apron -->
        <rect x="0" y="430" width="900" height="58" fill="url(#gl-ground-grad)"/>
        <rect x="0" y="428" width="900" height="3"  fill="#0d1a0d"/>
        <!-- Concrete expansion joints -->
        <line x1="160" y1="430" x2="160" y2="487" stroke="#0a150a" stroke-width="1.5"/>
        <line x1="330" y1="430" x2="330" y2="487" stroke="#0a150a" stroke-width="1.5"/>
        <line x1="500" y1="430" x2="500" y2="487" stroke="#0a150a" stroke-width="1.5"/>
        <line x1="660" y1="430" x2="660" y2="487" stroke="#0a150a" stroke-width="1.5"/>
        <line x1="820" y1="430" x2="820" y2="487" stroke="#0a150a" stroke-width="1.5"/>
        <!-- Launch complex elevated platform -->
        <rect x="260" y="400" width="380" height="32" fill="#0d1a0d" stroke="#132013" stroke-width="1.5"/>
        <!-- Bolted plate seams on platform -->
        <line x1="310" y1="400" x2="310" y2="432" stroke="#0a140a" stroke-width="1"/>
        <line x1="370" y1="400" x2="370" y2="432" stroke="#0a140a" stroke-width="1"/>
        <line x1="430" y1="400" x2="430" y2="432" stroke="#0a140a" stroke-width="1"/>
        <line x1="490" y1="400" x2="490" y2="432" stroke="#0a140a" stroke-width="1"/>
        <line x1="550" y1="400" x2="550" y2="432" stroke="#0a140a" stroke-width="1"/>
        <line x1="610" y1="400" x2="610" y2="432" stroke="#0a140a" stroke-width="1"/>
        <!-- Platform access stairs left -->
        <rect x="250" y="404" width="14" height="6"  fill="#0a140a" stroke="#0d1a0d" stroke-width="1"/>
        <rect x="248" y="410" width="16" height="6"  fill="#0a140a" stroke="#0d1a0d" stroke-width="1"/>
        <rect x="246" y="416" width="18" height="6"  fill="#0a140a" stroke="#0d1a0d" stroke-width="1"/>
        <rect x="244" y="422" width="20" height="6"  fill="#0a140a" stroke="#0d1a0d" stroke-width="1"/>
        <!-- Platform access stairs right -->
        <rect x="636" y="404" width="14" height="6"  fill="#0a140a" stroke="#0d1a0d" stroke-width="1"/>
        <rect x="636" y="410" width="16" height="6"  fill="#0a140a" stroke="#0d1a0d" stroke-width="1"/>
        <rect x="636" y="416" width="18" height="6"  fill="#0a140a" stroke="#0d1a0d" stroke-width="1"/>
        <rect x="636" y="422" width="20" height="6"  fill="#0a140a" stroke="#0d1a0d" stroke-width="1"/>
      </g>

      <!-- â•â•â• GROUP 4: Flame trench & blast deflector â•â•â• -->
      <g class="gl-g-trench">
        <!-- Flame trench channel -->
        <rect x="290" y="395" width="320" height="45" rx="2" fill="#070e07" stroke="#0d1a0d" stroke-width="1.5"/>
        <!-- Trench interior depth lines -->
        <rect x="300" y="400" width="300" height="34" fill="#050c05"/>
        <!-- Blast deflector wedge (V-shape) -->
        <polygon points="450,400 350,435 550,435" fill="#0a1a0a" stroke="#00cc33" stroke-width="1" opacity=".7"/>
        <!-- Deflector ribs -->
        <line x1="400" y1="415" x2="450" y2="402" stroke="#00cc33" stroke-width="0.8" opacity=".4"/>
        <line x1="420" y1="421" x2="450" y2="403" stroke="#00cc33" stroke-width="0.8" opacity=".4"/>
        <line x1="500" y1="415" x2="450" y2="402" stroke="#00cc33" stroke-width="0.8" opacity=".4"/>
        <line x1="480" y1="421" x2="450" y2="403" stroke="#00cc33" stroke-width="0.8" opacity=".4"/>
        <!-- Water deluge pipes into trench -->
        <line x1="305" y1="400" x2="305" y2="350" stroke="#0d2a0d" stroke-width="4" stroke-linecap="round"/>
        <circle cx="305" cy="348" r="5" fill="#0a200a" stroke="#00cc33" stroke-width="1" opacity=".6"/>
        <line x1="595" y1="400" x2="595" y2="350" stroke="#0d2a0d" stroke-width="4" stroke-linecap="round"/>
        <circle cx="595" cy="348" r="5" fill="#0a200a" stroke="#00cc33" stroke-width="1" opacity=".6"/>
        <!-- Caution stripes on trench edges -->
        <rect x="290" y="392" width="22" height="8" fill="#ffcc00" opacity=".55"/>
        <rect x="324" y="392" width="22" height="8" fill="#000"    opacity=".4"/>
        <rect x="358" y="392" width="22" height="8" fill="#ffcc00" opacity=".55"/>
        <rect x="392" y="392" width="22" height="8" fill="#000"    opacity=".4"/>
        <rect x="496" y="392" width="22" height="8" fill="#ffcc00" opacity=".55"/>
        <rect x="530" y="392" width="22" height="8" fill="#000"    opacity=".4"/>
        <rect x="564" y="392" width="22" height="8" fill="#ffcc00" opacity=".55"/>
      </g>

      <!-- â•â•â• GROUP 5: Launch mount / hold-downs â•â•â• -->
      <g class="gl-g-mount">
        <!-- Main launch mount structure -->
        <rect x="380" y="358" width="140" height="42" fill="#0d1e0d" stroke="#1a331a" stroke-width="2"/>
        <!-- Mount legs -->
        <rect x="390" y="358" width="12" height="42" fill="#0a160a" stroke="#0d1a0d" stroke-width="1"/>
        <rect x="420" y="358" width="12" height="42" fill="#0a160a" stroke="#0d1a0d" stroke-width="1"/>
        <rect x="468" y="358" width="12" height="42" fill="#0a160a" stroke="#0d1a0d" stroke-width="1"/>
        <rect x="498" y="358" width="12" height="42" fill="#0a160a" stroke="#0d1a0d" stroke-width="1"/>
        <!-- Flame hole / engine slot -->
        <ellipse cx="450" cy="360" rx="30" ry="8" fill="#030808" stroke="#00cc33" stroke-width="1" opacity=".7"/>
        <!-- Hold-down posts (4 corners) -->
        <rect x="404" y="340" width="8" height="20" fill="#0f1f0f" stroke="#00cc33" stroke-width="1" opacity=".8"/>
        <rect x="488" y="340" width="8" height="20" fill="#0f1f0f" stroke="#00cc33" stroke-width="1" opacity=".8"/>
        <!-- Hold-down clamp tops -->
        <rect x="401" y="336" width="14" height="6" rx="2" fill="#1a331a" stroke="#00FF41" stroke-width="1"/>
        <rect x="485" y="336" width="14" height="6" rx="2" fill="#1a331a" stroke="#00FF41" stroke-width="1"/>
        <!-- Umbilical mast stump on mount -->
        <rect x="498" y="310" width="10" height="50" fill="#0d1e0d" stroke="#00cc33" stroke-width="1"/>
      </g>

      <!-- â•â•â• GROUP 6: Fixed Service Structure (FSS) tower â•â•â• -->
      <g class="gl-g-tower">
        <!-- Tower main vertical columns (2 parallel) -->
        <rect x="524" y="70" width="10" height="338" fill="url(#gl-tower-grad)" stroke="#00cc33" stroke-width="1"/>
        <rect x="568" y="70" width="10" height="338" fill="url(#gl-tower-grad)" stroke="#00cc33" stroke-width="1"/>
        <!-- X-bracing pattern every 40px -->
        <line x1="524" y1="70"  x2="578" y2="110" stroke="#00cc33" stroke-width="1" opacity=".55"/>
        <line x1="524" y1="110" x2="578" y2="70"  stroke="#00cc33" stroke-width="1" opacity=".55"/>
        <line x1="524" y1="110" x2="578" y2="150" stroke="#00cc33" stroke-width="1" opacity=".55"/>
        <line x1="524" y1="150" x2="578" y2="110" stroke="#00cc33" stroke-width="1" opacity=".55"/>
        <line x1="524" y1="150" x2="578" y2="190" stroke="#00cc33" stroke-width="1" opacity=".55"/>
        <line x1="524" y1="190" x2="578" y2="150" stroke="#00cc33" stroke-width="1" opacity=".55"/>
        <line x1="524" y1="190" x2="578" y2="230" stroke="#00cc33" stroke-width="1" opacity=".55"/>
        <line x1="524" y1="230" x2="578" y2="190" stroke="#00cc33" stroke-width="1" opacity=".55"/>
        <line x1="524" y1="230" x2="578" y2="270" stroke="#00cc33" stroke-width="1" opacity=".55"/>
        <line x1="524" y1="270" x2="578" y2="230" stroke="#00cc33" stroke-width="1" opacity=".55"/>
        <line x1="524" y1="270" x2="578" y2="310" stroke="#00cc33" stroke-width="1" opacity=".55"/>
        <line x1="524" y1="310" x2="578" y2="270" stroke="#00cc33" stroke-width="1" opacity=".55"/>
        <line x1="524" y1="310" x2="578" y2="350" stroke="#00cc33" stroke-width="1" opacity=".55"/>
        <line x1="524" y1="350" x2="578" y2="310" stroke="#00cc33" stroke-width="1" opacity=".55"/>
        <!-- Horizontal floor plates -->
        <rect x="520" y="108" width="62" height="5" fill="#0f1f0f" stroke="#00cc33" stroke-width="0.7" opacity=".8"/>
        <rect x="520" y="148" width="62" height="5" fill="#0f1f0f" stroke="#00cc33" stroke-width="0.7" opacity=".8"/>
        <rect x="520" y="188" width="62" height="5" fill="#0f1f0f" stroke="#00cc33" stroke-width="0.7" opacity=".8"/>
        <rect x="520" y="228" width="62" height="5" fill="#0f1f0f" stroke="#00cc33" stroke-width="0.7" opacity=".8"/>
        <rect x="520" y="268" width="62" height="5" fill="#0f1f0f" stroke="#00cc33" stroke-width="0.7" opacity=".8"/>
        <rect x="520" y="308" width="62" height="5" fill="#0f1f0f" stroke="#00cc33" stroke-width="0.7" opacity=".8"/>
        <rect x="520" y="348" width="62" height="5" fill="#0f1f0f" stroke="#00cc33" stroke-width="0.7" opacity=".8"/>
        <!-- Tower top cap -->
        <rect x="518" y="65" width="66" height="10" fill="#1a331a" stroke="#00FF41" stroke-width="1.2"/>
        <!-- Top beacon light -->
        <circle cx="551" cy="60" r="5" fill="#ff4444" opacity=".8"/>
        <circle cx="551" cy="60" r="9" fill="#ff4444" opacity=".12" filter="url(#gl-blur-sm)"/>
      </g>

      <!-- â•â•â• GROUP 7: Water tower â•â•â• -->
      <g class="gl-g-watertower">
        <!-- Water tower cylinder -->
        <rect x="690" y="280" width="36" height="120" rx="4" fill="#0a160a" stroke="#0d1a0d" stroke-width="1.5"/>
        <ellipse cx="708" cy="280" rx="18" ry="6" fill="#0d200d" stroke="#00cc33" stroke-width="1" opacity=".7"/>
        <ellipse cx="708" cy="400" rx="18" ry="6" fill="#0a160a" stroke="#0d1a0d" stroke-width="1"/>
        <!-- Tank label -->
        <text x="708" y="343" font-family="monospace" font-size="7" fill="#00cc33" text-anchor="middle" opacity=".5">Hâ‚‚O</text>
        <!-- Down pipe -->
        <rect x="704" y="400" width="8" height="30" fill="#091409" stroke="#0d1a0d" stroke-width="1"/>
        <!-- Tower legs -->
        <line x1="692" y1="400" x2="682" y2="432" stroke="#0d1a0d" stroke-width="3"/>
        <line x1="724" y1="400" x2="734" y2="432" stroke="#0d1a0d" stroke-width="3"/>
        <line x1="692" y1="400" x2="692" y2="432" stroke="#0d1a0d" stroke-width="3"/>
        <line x1="724" y1="400" x2="724" y2="432" stroke="#0d1a0d" stroke-width="3"/>
        <!-- Cross brace -->
        <line x1="682" y1="418" x2="734" y2="418" stroke="#0d1a0d" stroke-width="1.5"/>
      </g>

      <!-- â•â•â• GROUP 8: Crane â•â•â• -->
      <g class="gl-g-crane">
        <!-- Crane mast -->
        <rect x="182" y="180" width="12" height="252" fill="#0d1a0d" stroke="#1a2f1a" stroke-width="1.5"/>
        <!-- Crane jib (horizontal boom) -->
        <rect x="192" y="182" width="200" height="8" fill="#0d1a0d" stroke="#1a2f1a" stroke-width="1.5"/>
        <!-- Crane counter-jib -->
        <rect x="100" y="182" width="84" height="8" fill="#0d1a0d" stroke="#1a2f1a" stroke-width="1.5"/>
        <!-- Counter weight -->
        <rect x="96"  y="180" width="26" height="18" fill="#0f1f0f" stroke="#1a2f1a" stroke-width="1.5"/>
        <!-- Jib support cables -->
        <line x1="188" y1="182" x2="272" y2="150" stroke="#1a2f1a" stroke-width="1.5"/>
        <line x1="392" y1="182" x2="272" y2="150" stroke="#1a2f1a" stroke-width="1.5"/>
        <line x1="188" y1="182" x2="140" y2="155" stroke="#1a2f1a" stroke-width="1.5"/>
        <!-- Crane trolley -->
        <rect x="296" y="184" width="20" height="12" fill="#0f1f0f" stroke="#00cc33" stroke-width="1"/>
        <!-- Crane hook cable -->
        <line x1="306" y1="196" x2="306" y2="248" stroke="#00cc33" stroke-width="1.2" stroke-dasharray="5,3" opacity=".6"/>
        <!-- Hook -->
        <path d="M299,248 Q299,258 306,258 Q313,258 313,248" fill="none" stroke="#00cc33" stroke-width="1.5" opacity=".7"/>
        <!-- Crane base A-frame -->
        <line x1="186" y1="432" x2="162" y2="432" stroke="#0d1a0d" stroke-width="6"/>
        <line x1="194" y1="432" x2="218" y2="432" stroke="#0d1a0d" stroke-width="6"/>
      </g>

      <!-- â•â•â• GROUP 9: Rocket â€” engine section â•â•â• -->
      <g class="gl-g-engine">
        <!-- Engine fairing / skirt -->
        <path d="M414,400 L420,358 L480,358 L486,400 Z" fill="#0d1e0d" stroke="#00FF41" stroke-width="1.5"/>
        <!-- Engine bells (3 visible from side) -->
        <ellipse cx="432" cy="400" rx="9" ry="5"  fill="#091409" stroke="#00cc33" stroke-width="1.2"/>
        <ellipse cx="450" cy="403" rx="10" ry="5" fill="#091409" stroke="#00cc33" stroke-width="1.2"/>
        <ellipse cx="468" cy="400" rx="9" ry="5"  fill="#091409" stroke="#00cc33" stroke-width="1.2"/>
        <!-- Nozzle extension marks -->
        <line x1="432" y1="396" x2="432" y2="404" stroke="#00FF41" stroke-width="0.8" opacity=".4"/>
        <line x1="450" y1="398" x2="450" y2="407" stroke="#00FF41" stroke-width="0.8" opacity=".4"/>
        <line x1="468" y1="396" x2="468" y2="404" stroke="#00FF41" stroke-width="0.8" opacity=".4"/>
        <!-- Fins (delta-style) -->
        <polygon points="414,400 392,430 414,385" fill="#0a160a" stroke="#00FF41" stroke-width="1.2"/>
        <polygon points="486,400 508,430 486,385" fill="#0a160a" stroke="#00FF41" stroke-width="1.2"/>
      </g>

      <!-- â•â•â• GROUP 10: Rocket â€” first stage body â•â•â• -->
      <g class="gl-g-stage1">
        <!-- First stage main tank -->
        <rect x="420" y="180" width="60" height="180" fill="url(#gl-rocket-body-grad)" stroke="#00FF41" stroke-width="1.5"/>
        <!-- LOX/RP-1 tank seam -->
        <line x1="420" y1="280" x2="480" y2="280" stroke="#00FF41" stroke-width="1" opacity=".35"/>
        <!-- Loading umbilical line on tank -->
        <rect x="480" y="230" width="18" height="4" fill="#0d1a0d" stroke="#00cc33" stroke-width="0.8" opacity=".6"/>
        <rect x="480" y="300" width="18" height="4" fill="#0d1a0d" stroke="#00cc33" stroke-width="0.8" opacity=".6"/>
        <!-- Grid fin stubs (4-sided, fold flat for ascent) -->
        <rect x="416" y="188" width="8"  height="18" rx="1" fill="#0a160a" stroke="#00cc33" stroke-width="1"/>
        <rect x="476" y="188" width="8"  height="18" rx="1" fill="#0a160a" stroke="#00cc33" stroke-width="1"/>
        <!-- Stage ID stripe -->
        <rect x="420" y="340" width="60" height="10" fill="#00FF41" opacity=".12"/>
        <text x="450" y="349" font-family="monospace" font-size="7" fill="#00FF41" text-anchor="middle" opacity=".55">S1</text>
      </g>

      <!-- â•â•â• GROUP 11: Rocket â€” interstage + second stage â•â•â• -->
      <g class="gl-g-stage2">
        <!-- Interstage ring -->
        <rect x="424" y="168" width="52" height="16" rx="2" fill="#0f1e0f" stroke="#00FF41" stroke-width="1.2"/>
        <line x1="424" y1="176" x2="476" y2="176" stroke="#00FF41" stroke-width="0.7" opacity=".4"/>
        <!-- Second stage body (narrower) -->
        <rect x="428" y="100" width="44" height="70" fill="url(#gl-rocket-body-grad)" stroke="#00FF41" stroke-width="1.5"/>
        <!-- Second stage thruster cluster -->
        <ellipse cx="450" cy="168" rx="14" ry="4" fill="#091409" stroke="#00cc33" stroke-width="1" opacity=".7"/>
        <!-- MVac engine bell -->
        <path d="M443,168 L440,178 L460,178 L457,168 Z" fill="#091409" stroke="#00cc33" stroke-width="1"/>
        <ellipse cx="450" cy="178" rx="10" ry="4" fill="#091409" stroke="#00cc33" stroke-width="1" opacity=".7"/>
        <!-- Upper umbilical -->
        <rect x="472" y="120" width="18" height="4" fill="#0d1a0d" stroke="#00cc33" stroke-width="0.8" opacity=".6"/>
      </g>

      <!-- â•â•â• GROUP 12: Rocket â€” fairing & nose â•â•â• -->
      <g class="gl-g-fairing">
        <!-- Payload fairing cylinder base -->
        <rect x="430" y="56" width="40" height="48" fill="url(#gl-rocket-body-grad)" stroke="#00FF41" stroke-width="1.5"/>
        <!-- Fairing separation line (half shells) -->
        <line x1="450" y1="56" x2="450" y2="104" stroke="#00FF41" stroke-width="0.8" opacity=".35" stroke-dasharray="4,3"/>
        <!-- Nose cone tip -->
        <path d="M430,56 Q430,20 450,10 Q470,20 470,56 Z" fill="url(#gl-rocket-body-grad)" stroke="#00FF41" stroke-width="1.5"/>
        <!-- Nose cap highlight -->
        <ellipse cx="450" cy="10" rx="4" ry="3" fill="#00FF41" opacity=".18"/>
        <!-- Fairing logo / window -->
        <circle cx="450" cy="78" r="8" fill="#050f05" stroke="#00FF41" stroke-width="1.2"/>
        <circle cx="450" cy="78" r="4" fill="#001a00" opacity=".8"/>
        <circle cx="448" cy="76" r="1.5" fill="#00FF41" opacity=".35"/>
      </g>

      <!-- â•â•â• GROUP 13: Service arms from tower â•â•â• -->
      <g class="gl-g-arms">
        <!-- Arm level 1 (LOX loading arm) -->
        <rect x="480" y="224" width="48" height="7" fill="#0d1e0d" stroke="#00cc33" stroke-width="1.2"/>
        <rect x="477" y="220" width="6"  height="15" fill="#0f1f0f" stroke="#00cc33" stroke-width="1"/>
        <!-- Arm level 2 (fuel arm) -->
        <rect x="480" y="290" width="48" height="7" fill="#0d1e0d" stroke="#00cc33" stroke-width="1.2"/>
        <rect x="477" y="286" width="6"  height="15" fill="#0f1f0f" stroke="#00cc33" stroke-width="1"/>
        <!-- Crew access arm (wider, higher) -->
        <rect x="480" y="145" width="52" height="9" fill="#0d1e0d" stroke="#00FF41" stroke-width="1.5"/>
        <rect x="477" y="141" width="9"  height="17" fill="#0f1f0f" stroke="#00FF41" stroke-width="1.2"/>
        <!-- Crew arm platform -->
        <rect x="474" y="140" width="8"  height="24" fill="#0a160a" stroke="#00cc33" stroke-width="1"/>
      </g>

      <!-- â•â•â• GROUP 14: Scaffolding around rocket â•â•â• -->
      <g class="gl-g-scaffold">
        <!-- Left scaffold mast -->
        <rect x="399" y="180" width="7" height="220" fill="#0a160a" stroke="#0d1a0d" stroke-width="1"/>
        <!-- Left platforms (horizontal tiers) -->
        <rect x="390" y="208" width="30" height="6" fill="#0a1a0a" stroke="#00cc33" stroke-width="0.8" opacity=".75"/>
        <rect x="390" y="248" width="30" height="6" fill="#0a1a0a" stroke="#00cc33" stroke-width="0.8" opacity=".75"/>
        <rect x="390" y="288" width="30" height="6" fill="#0a1a0a" stroke="#00cc33" stroke-width="0.8" opacity=".75"/>
        <rect x="390" y="328" width="30" height="6" fill="#0a1a0a" stroke="#00cc33" stroke-width="0.8" opacity=".75"/>
        <!-- Left handrails -->
        <line x1="390" y1="208" x2="390" y2="248" stroke="#00cc33" stroke-width="0.8" opacity=".4"/>
        <line x1="390" y1="248" x2="390" y2="288" stroke="#00cc33" stroke-width="0.8" opacity=".4"/>
        <!-- Right scaffold mast -->
        <rect x="494" y="180" width="7" height="220" fill="#0a160a" stroke="#0d1a0d" stroke-width="1"/>
        <!-- Right platforms -->
        <rect x="480" y="208" width="30" height="6" fill="#0a1a0a" stroke="#00cc33" stroke-width="0.8" opacity=".75"/>
        <rect x="480" y="248" width="30" height="6" fill="#0a1a0a" stroke="#00cc33" stroke-width="0.8" opacity=".75"/>
        <rect x="480" y="288" width="30" height="6" fill="#0a1a0a" stroke="#00cc33" stroke-width="0.8" opacity=".75"/>
        <rect x="480" y="328" width="30" height="6" fill="#0a1a0a" stroke="#00cc33" stroke-width="0.8" opacity=".75"/>
        <!-- Right handrails -->
        <line x1="510" y1="208" x2="510" y2="248" stroke="#00cc33" stroke-width="0.8" opacity=".4"/>
        <line x1="510" y1="248" x2="510" y2="288" stroke="#00cc33" stroke-width="0.8" opacity=".4"/>
        <!-- Cross-braces between masts and rocket -->
        <line x1="406" y1="214" x2="420" y2="218" stroke="#00cc33" stroke-width="0.7" opacity=".4"/>
        <line x1="406" y1="254" x2="420" y2="258" stroke="#00cc33" stroke-width="0.7" opacity=".4"/>
        <line x1="494" y1="214" x2="480" y2="218" stroke="#00cc33" stroke-width="0.7" opacity=".4"/>
        <line x1="494" y1="254" x2="480" y2="258" stroke="#00cc33" stroke-width="0.7" opacity=".4"/>
      </g>

      <!-- â•â•â• GROUP 15: Workers & caution signs â•â•â• -->
      <g class="gl-g-workers">
        <!-- Worker 1 on platform left -->
        <circle cx="397" cy="243" r="5"  fill="#0a140a" stroke="#00FF41" stroke-width="1"/>
        <ellipse cx="397" cy="237" rx="6" ry="3" fill="#ffcc00" opacity=".8"/>
        <rect x="393" y="248" width="8" height="10" rx="1" fill="#0a140a" stroke="#00FF41" stroke-width="0.8"/>
        <!-- Worker 2 on platform right -->
        <circle cx="503" cy="243" r="5"  fill="#0a140a" stroke="#00FF41" stroke-width="1"/>
        <ellipse cx="503" cy="237" rx="6" ry="3" fill="#ffcc00" opacity=".8"/>
        <rect x="499" y="248" width="8" height="10" rx="1" fill="#0a140a" stroke="#00FF41" stroke-width="0.8"/>
        <!-- Worker 3 on ground (near trench) -->
        <circle cx="358" cy="421" r="6"  fill="#0a140a" stroke="#00FF41" stroke-width="1.2"/>
        <ellipse cx="358" cy="414" rx="8" ry="3.5" fill="#ffcc00" opacity=".85"/>
        <rect x="353" y="427" width="10" height="14" rx="1" fill="#0a140a" stroke="#00FF41" stroke-width="0.8"/>
        <!-- Worker 4 ground (far right of mount) -->
        <circle cx="556" cy="421" r="6"  fill="#0a140a" stroke="#00FF41" stroke-width="1.2"/>
        <ellipse cx="556" cy="414" rx="8" ry="3.5" fill="#00cc33" opacity=".7"/>
        <rect x="551" y="427" width="10" height="14" rx="1" fill="#0a140a" stroke="#00FF41" stroke-width="0.8"/>
        <!-- Caution barriers left -->
        <rect x="330" y="430" width="50" height="6" rx="2" fill="#ffcc00" opacity=".6"/>
        <rect x="334" y="422" width="3"  height="8" fill="#ffcc00" opacity=".6"/>
        <rect x="375" y="422" width="3"  height="8" fill="#ffcc00" opacity=".6"/>
        <!-- Caution barriers right -->
        <rect x="518" y="430" width="50" height="6" rx="2" fill="#ffcc00" opacity=".6"/>
        <rect x="522" y="422" width="3"  height="8" fill="#ffcc00" opacity=".6"/>
        <rect x="563" y="422" width="3"  height="8" fill="#ffcc00" opacity=".6"/>
        <!-- Caution sign post -->
        <rect x="605" y="400" width="5" height="32" fill="#0d1a0d" stroke="#0d1a0d" stroke-width="1"/>
        <rect x="592" y="388" width="32" height="22" rx="3" fill="#111f11" stroke="#ffcc00" stroke-width="2"/>
        <text x="608" y="401" font-family="monospace" font-size="10" fill="#ffcc00" text-anchor="middle" font-weight="bold">âš </text>
        <text x="608" y="410" font-family="monospace" font-size="7"  fill="#ffcc00" text-anchor="middle">HAZARD</text>
        <!-- Ground equipment / toolbox -->
        <rect x="620" y="418" width="28" height="15" rx="2" fill="#0a160a" stroke="#00cc33" stroke-width="1"/>
        <line x1="620" y1="425" x2="648" y2="425" stroke="#00cc33" stroke-width="0.8" opacity=".5"/>
      </g>

      <!-- â•â•â• GROUP 16: Floodlight towers â•â•â• -->
      <g class="gl-g-lights">
        <!-- Floodlight tower left -->
        <rect x="198" y="310" width="6" height="122" fill="#0a160a" stroke="#0d1a0d" stroke-width="1"/>
        <rect x="190" y="304" width="22" height="8" fill="#0f1f0f" stroke="#00cc33" stroke-width="1" rx="2"/>
        <!-- 3 light heads -->
        <rect x="190" y="296" width="7" height="10" rx="1" fill="#0a1e0a" stroke="#00cc33" stroke-width="1"/>
        <rect x="198" y="294" width="7" height="10" rx="1" fill="#0a1e0a" stroke="#00cc33" stroke-width="1"/>
        <rect x="206" y="296" width="7" height="10" rx="1" fill="#0a1e0a" stroke="#00cc33" stroke-width="1"/>
        <!-- Light cone left -->
        <ellipse cx="201" cy="300" rx="80" ry="55" fill="url(#gl-flood-l)" opacity=".5"/>
        <!-- Floodlight tower right -->
        <rect x="756" y="310" width="6" height="122" fill="#0a160a" stroke="#0d1a0d" stroke-width="1"/>
        <rect x="748" y="304" width="22" height="8" fill="#0f1f0f" stroke="#00cc33" stroke-width="1" rx="2"/>
        <rect x="748" y="296" width="7" height="10" rx="1" fill="#0a1e0a" stroke="#00cc33" stroke-width="1"/>
        <rect x="756" y="294" width="7" height="10" rx="1" fill="#0a1e0a" stroke="#00cc33" stroke-width="1"/>
        <rect x="764" y="296" width="7" height="10" rx="1" fill="#0a1e0a" stroke="#00cc33" stroke-width="1"/>
        <!-- Light cone right -->
        <ellipse cx="759" cy="300" rx="80" ry="55" fill="url(#gl-flood-r)" opacity=".5"/>
      </g>

      <!-- â•â•â• GROUP 17: Glow, atmosphere & final labels â•â•â• -->
      <g class="gl-g-glow">
        <!-- FSS beacon pulse glow -->
        <circle cx="551" cy="60" r="18" fill="#ff4444" opacity=".08" filter="url(#gl-blur-lg)"/>
        <!-- Engine pad glow -->
        <ellipse cx="450" cy="405" rx="60" ry="12" fill="url(#gl-glow-engine)" opacity=".8"/>
        <!-- Rocket ambient light on tower -->
        <ellipse cx="520" cy="260" rx="30" ry="80" fill="#00FF41" opacity=".025" filter="url(#gl-blur-lg)"/>
        <!-- Rocket logo / mission patch -->
        <rect x="428" y="148" width="44" height="16" rx="3" fill="#0a1e0a" stroke="#00FF41" stroke-width="1"/>
        <text x="450" y="160" font-family="monospace" font-size="8" fill="#00FF41" text-anchor="middle" font-weight="bold" opacity=".8">GAME LOGS</text>
        <!-- Countdown clock on tower face -->
        <rect x="526" y="92" width="46" height="22" rx="2" fill="#050f05" stroke="#00cc33" stroke-width="1"/>
        <text x="549" y="100" font-family="monospace" font-size="7" fill="#00cc33" text-anchor="middle" opacity=".6">T-MINUS</text>
        <text x="549" y="112" font-family="monospace" font-size="9" fill="#00FF41" text-anchor="middle" font-weight="bold" opacity=".85">00:00:00</text>
      </g>

    </svg>
  </div>

  <!-- Scrolling ticker -->
  <div class="gl-ticker-wrap">
    <div class="gl-ticker-track">
      <span class="gl-ticker-text">Stay tuned for the launch of Game Logs, coming soon&nbsp;&nbsp;&nbsp;Â·&nbsp;&nbsp;&nbsp;Stay tuned for the launch of Game Logs, coming soon&nbsp;&nbsp;&nbsp;Â·&nbsp;&nbsp;&nbsp;Stay tuned for the launch of Game Logs, coming soon&nbsp;&nbsp;&nbsp;Â·&nbsp;&nbsp;&nbsp;</span>
    </div>
  </div>

</div>

<style>
/* â”€â”€ Wrapper â”€â”€ */
.gl-launchpad-wrap {
  max-width: 840px;
  margin: 1.5rem auto 2rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 40px rgba(0,255,65,0.09), 0 0 90px rgba(0,255,65,0.04);
}
.gl-launchpad-svg { width: 100%; height: auto; display: block; }
[data-theme='light'] .gl-launchpad-wrap {
  border-color: rgba(100,100,100,0.3);
  box-shadow: 0 4px 20px rgba(0,0,0,0.14);
}

/* â”€â”€ All build groups start invisible â”€â”€ */
.gl-g-sky, .gl-g-horizon, .gl-g-ground,
.gl-g-trench, .gl-g-mount, .gl-g-tower,
.gl-g-watertower, .gl-g-crane,
.gl-g-engine, .gl-g-stage1, .gl-g-stage2, .gl-g-fairing,
.gl-g-arms, .gl-g-scaffold, .gl-g-workers,
.gl-g-lights, .gl-g-glow {
  opacity: 0;
}

/* â”€â”€ Animation durations â€” all 20 s, each with unique keyframes â”€â”€ */
.gl-g-sky        { animation: gl-sky        20s linear infinite; }
.gl-g-horizon    { animation: gl-horizon    20s linear infinite; }
.gl-g-ground     { animation: gl-ground     20s linear infinite; }
.gl-g-trench     { animation: gl-trench     20s linear infinite; }
.gl-g-mount      { animation: gl-mount      20s linear infinite; }
.gl-g-tower      { animation: gl-tower      20s linear infinite; }
.gl-g-watertower { animation: gl-watertower 20s linear infinite; }
.gl-g-crane      { animation: gl-crane      20s linear infinite; }
.gl-g-engine     { animation: gl-engine     20s linear infinite; }
.gl-g-stage1     { animation: gl-stage1     20s linear infinite; }
.gl-g-stage2     { animation: gl-stage2     20s linear infinite; }
.gl-g-fairing    { animation: gl-fairing    20s linear infinite; }
.gl-g-arms       { animation: gl-arms       20s linear infinite; }
.gl-g-scaffold   { animation: gl-scaffold   20s linear infinite; }
.gl-g-workers    { animation: gl-workers    20s linear infinite; }
.gl-g-lights     { animation: gl-lights     20s linear infinite; }
.gl-g-glow       { animation: gl-glow       20s linear infinite; }

/*
  Each keyframe: fade in over ~2%, hold until 90%, then fade out 90%â†’100%.
  Appear time per group (% of 20s):
    sky=0%, horizon=4%, ground=8%, trench=13%, mount=17%,
    tower=21%, watertower=25%, crane=28%,
    engine=33%, stage1=38%, stage2=44%, fairing=50%,
    arms=55%, scaffold=60%, workers=65%, lights=70%, glow=76%
*/
@keyframes gl-sky        { 0%{opacity:0}  2%{opacity:1} 88%{opacity:1} 97%{opacity:0} 100%{opacity:0} }
@keyframes gl-horizon    { 0%,4%{opacity:0}   6%{opacity:1} 88%{opacity:1} 97%{opacity:0} 100%{opacity:0} }
@keyframes gl-ground     { 0%,8%{opacity:0}  10%{opacity:1} 88%{opacity:1} 97%{opacity:0} 100%{opacity:0} }
@keyframes gl-trench     { 0%,13%{opacity:0} 15%{opacity:1} 88%{opacity:1} 97%{opacity:0} 100%{opacity:0} }
@keyframes gl-mount      { 0%,17%{opacity:0} 19%{opacity:1} 88%{opacity:1} 97%{opacity:0} 100%{opacity:0} }
@keyframes gl-tower      { 0%,21%{opacity:0} 24%{opacity:1} 88%{opacity:1} 97%{opacity:0} 100%{opacity:0} }
@keyframes gl-watertower { 0%,25%{opacity:0} 27%{opacity:1} 88%{opacity:1} 97%{opacity:0} 100%{opacity:0} }
@keyframes gl-crane      { 0%,28%{opacity:0} 31%{opacity:1} 88%{opacity:1} 97%{opacity:0} 100%{opacity:0} }
@keyframes gl-engine     { 0%,33%{opacity:0} 36%{opacity:1} 88%{opacity:1} 97%{opacity:0} 100%{opacity:0} }
@keyframes gl-stage1     { 0%,38%{opacity:0} 41%{opacity:1} 88%{opacity:1} 97%{opacity:0} 100%{opacity:0} }
@keyframes gl-stage2     { 0%,44%{opacity:0} 47%{opacity:1} 88%{opacity:1} 97%{opacity:0} 100%{opacity:0} }
@keyframes gl-fairing    { 0%,50%{opacity:0} 53%{opacity:1} 88%{opacity:1} 97%{opacity:0} 100%{opacity:0} }
@keyframes gl-arms       { 0%,55%{opacity:0} 58%{opacity:1} 88%{opacity:1} 97%{opacity:0} 100%{opacity:0} }
@keyframes gl-scaffold   { 0%,60%{opacity:0} 63%{opacity:1} 88%{opacity:1} 97%{opacity:0} 100%{opacity:0} }
@keyframes gl-workers    { 0%,65%{opacity:0} 68%{opacity:1} 88%{opacity:1} 97%{opacity:0} 100%{opacity:0} }
@keyframes gl-lights     { 0%,70%{opacity:0} 73%{opacity:1} 88%{opacity:1} 97%{opacity:0} 100%{opacity:0} }
@keyframes gl-glow       { 0%,76%{opacity:0} 79%{opacity:1} 88%{opacity:1} 97%{opacity:0} 100%{opacity:0} }

/* â”€â”€ Ticker â”€â”€ */
.gl-ticker-wrap {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.6rem 0;
  margin: 0 auto 2.5rem;
  max-width: 840px;
  background: var(--panel);
}
.gl-ticker-track {
  display: inline-block;
  white-space: nowrap;
  animation: gl-ticker-scroll 22s linear infinite;
}
.gl-ticker-text {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--green);
  text-shadow: 0 0 10px var(--green-glow);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
[data-theme='light'] .gl-ticker-text { color: #111111; text-shadow: none; }
@keyframes gl-ticker-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}
</style>
