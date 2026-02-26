export function MicroStory() {
  return (
    <div className="micro-story surface-card relative overflow-hidden rounded-[2rem] p-4 md:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(63,90,74,0.12),transparent_48%),radial-gradient(circle_at_86%_16%,rgba(196,177,143,0.18),transparent_44%),linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.94))]" />

      <svg
        viewBox="0 0 640 420"
        aria-hidden="true"
        className="micro-story-svg relative z-10 block h-auto w-full overflow-hidden"
      >
        <defs>
          <linearGradient id="soilGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(172,124,64,0.28)" />
            <stop offset="100%" stopColor="rgba(196,145,84,0.18)" />
          </linearGradient>
          <linearGradient id="stoneGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(18,18,18,0.12)" />
            <stop offset="100%" stopColor="rgba(18,18,18,0.05)" />
          </linearGradient>
          <linearGradient id="accentGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(63,90,74,0.36)" />
            <stop offset="100%" stopColor="rgba(63,90,74,0.14)" />
          </linearGradient>
        </defs>

        <rect x="18" y="18" width="604" height="384" rx="32" fill="rgba(255,255,255,0.72)" />
        <rect x="18" y="18" width="604" height="384" rx="32" fill="none" stroke="rgba(18,18,18,0.08)" />

        <g className="story-orbit">
          <circle cx="520" cy="104" r="58" fill="rgba(196,177,143,0.16)" />
          <circle cx="120" cy="88" r="42" fill="rgba(63,90,74,0.08)" />
        </g>

        <g className="story-stage stage-grow">
          <path
            d="M68 304C148 258 210 270 278 230C336 196 396 196 510 146"
            fill="none"
            stroke="rgba(172,124,64,0.28)"
            strokeWidth="3"
          />
          <path
            d="M80 334C170 292 228 302 306 268C370 240 430 238 546 190"
            fill="none"
            stroke="rgba(172,124,64,0.2)"
            strokeWidth="3"
          />
          <path d="M74 356H566" stroke="rgba(18,18,18,0.08)" strokeWidth="2" />
          <path
            d="M70 356C158 330 252 332 338 310C420 288 494 286 570 258V356H70Z"
            fill="url(#soilGrad)"
          />

          <g className="wheat wheat-a">
            <path
              d="M182 350C176 314 178 284 196 254"
              fill="none"
              stroke="rgba(90,111,97,0.56)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M196 292C218 288 232 272 236 252"
              fill="none"
              stroke="rgba(90,111,97,0.48)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M194 314C173 308 162 294 158 278"
              fill="none"
              stroke="rgba(90,111,97,0.42)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>

          <g className="wheat wheat-b">
            <path
              d="M276 350C270 322 272 296 290 264"
              fill="none"
              stroke="rgba(90,111,97,0.56)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M290 300C313 292 326 276 330 258"
              fill="none"
              stroke="rgba(90,111,97,0.48)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M288 320C269 312 258 300 252 284"
              fill="none"
              stroke="rgba(90,111,97,0.42)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>

          <g className="wheat wheat-c">
            <path
              d="M382 350C378 324 380 300 396 272"
              fill="none"
              stroke="rgba(90,111,97,0.56)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M396 306C418 298 434 280 438 262"
              fill="none"
              stroke="rgba(90,111,97,0.48)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M394 324C375 318 364 306 358 292"
              fill="none"
              stroke="rgba(90,111,97,0.42)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>

          <g className="sun-rise">
            <circle cx="500" cy="120" r="28" fill="rgba(196,145,84,0.28)" />
            <path d="M500 72V54M530 84L544 70M542 114H560M470 84L456 70" stroke="rgba(196,145,84,0.4)" strokeWidth="3" strokeLinecap="round" />
          </g>
        </g>

        <g className="story-stage stage-mill">
          <circle cx="320" cy="220" r="102" fill="rgba(255,255,255,0.72)" stroke="rgba(18,18,18,0.1)" strokeWidth="2" />
          <circle cx="320" cy="220" r="74" fill="url(#stoneGrad)" className="mill-rotate" />
          <circle cx="320" cy="220" r="38" fill="rgba(255,255,255,0.72)" stroke="rgba(18,18,18,0.08)" />
          <path
            d="M320 146C356 170 386 202 394 238C376 272 350 294 320 304C286 292 258 270 244 238C252 202 282 170 320 146Z"
            fill="none"
            stroke="rgba(18,18,18,0.08)"
            strokeWidth="2"
            className="mill-rotate inverse"
          />
          <path d="M136 180C202 182 228 174 252 160" fill="none" stroke="rgba(172,124,64,0.32)" strokeWidth="3" />
          <path d="M128 218C196 220 226 210 250 194" fill="none" stroke="rgba(172,124,64,0.2)" strokeWidth="3" />
          <g className="grain-pulse">
            <circle cx="240" cy="172" r="5" fill="rgba(196,145,84,0.34)" />
            <circle cx="224" cy="178" r="4" fill="rgba(196,145,84,0.28)" />
            <circle cx="212" cy="186" r="3" fill="rgba(196,145,84,0.24)" />
          </g>
          <path d="M386 124L438 104" stroke="rgba(18,18,18,0.12)" strokeWidth="5" strokeLinecap="round" />
          <circle cx="446" cy="100" r="10" fill="rgba(63,90,74,0.42)" />
          <path d="M440 258C474 252 498 258 520 274" fill="none" stroke="rgba(63,90,74,0.18)" strokeWidth="3" />
          <path d="M432 284C474 280 508 286 538 306" fill="none" stroke="rgba(63,90,74,0.12)" strokeWidth="3" />
        </g>

        <g className="story-stage stage-kitchen">
          <rect x="92" y="126" width="456" height="192" rx="24" fill="rgba(255,255,255,0.62)" stroke="rgba(18,18,18,0.08)" />
          <g className="kitchen-grid">
            <rect x="122" y="156" width="108" height="46" rx="14" fill="rgba(255,255,255,0.9)" stroke="rgba(18,18,18,0.1)" />
            <rect x="244" y="156" width="132" height="46" rx="14" fill="rgba(255,255,255,0.9)" stroke="rgba(18,18,18,0.1)" />
            <rect x="390" y="156" width="128" height="46" rx="14" fill="rgba(255,255,255,0.9)" stroke="rgba(18,18,18,0.1)" />
            <rect x="122" y="218" width="156" height="46" rx="14" fill="rgba(255,255,255,0.9)" stroke="rgba(18,18,18,0.1)" />
            <rect x="292" y="218" width="110" height="46" rx="14" fill="rgba(255,255,255,0.9)" stroke="rgba(18,18,18,0.1)" />
            <rect x="416" y="218" width="102" height="46" rx="14" fill="rgba(255,255,255,0.9)" stroke="rgba(18,18,18,0.1)" />
          </g>
          <g className="kitchen-scan">
            <rect x="118" y="150" width="406" height="8" rx="4" fill="url(#accentGrad)" />
          </g>
          <g className="kitchen-points">
            <circle cx="146" cy="179" r="7" fill="rgba(63,90,74,0.28)" />
            <circle cx="321" cy="241" r="7" fill="rgba(63,90,74,0.22)" />
            <circle cx="462" cy="179" r="7" fill="rgba(196,145,84,0.28)" />
          </g>
          <path d="M108 330H534" stroke="rgba(18,18,18,0.08)" strokeWidth="2" />
        </g>

        <g className="story-caption">
          <rect x="44" y="40" width="188" height="34" rx="17" fill="rgba(255,255,255,0.78)" stroke="rgba(18,18,18,0.08)" />
          <text x="62" y="61" fill="rgba(18,18,18,0.72)" fontSize="14" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.08em">
            PRODUCT STORY LOOP
          </text>
        </g>

        <g className="story-dots">
          <circle className="dot dot-1" cx="292" cy="374" r="4.5" fill="rgba(18,18,18,0.22)" />
          <circle className="dot dot-2" cx="320" cy="374" r="4.5" fill="rgba(18,18,18,0.22)" />
          <circle className="dot dot-3" cx="348" cy="374" r="4.5" fill="rgba(18,18,18,0.22)" />
        </g>
      </svg>
    </div>
  );
}
