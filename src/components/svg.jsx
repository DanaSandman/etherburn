import * as React from "react";

import firemove from '../assets/svg/firemove.svg';
const SVGComponent = (props) => (
  
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={300}
    height={500}
    viewBox="0 0 290 500"
    {...props}
  >
    <defs>
      <filter id="f1">
        <feImage
          result="p0"
          xlinkHref="https://upload.wikimedia.org/wikipedia/commons/b/bc/IKB_191.jpg"/> 
           <feImage
          result="p1"
          xlinkHref="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjkwJyBoZWlnaHQ9JzUwMCcgdmlld0JveD0nMCAwIDI5MCA1MDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGNpcmNsZSBjeD0nMTQxJyBjeT0nMTM2JyByPScxMjBweCcgZmlsbD0nI2MwMmFhYScvPjwvc3ZnPg=="
        />
         {/*
        <feImage
          result="p2"
          xlinkHref="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjkwJyBoZWlnaHQ9JzUwMCcgdmlld0JveD0nMCAwIDI5MCA1MDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGNpcmNsZSBjeD0nMjYwJyBjeT0nMzY1JyByPScxMjBweCcgZmlsbD0nIzM0Y2Q1MicvPjwvc3ZnPg=="
        />
        <feImage
          result="p3"
          xlinkHref="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjkwJyBoZWlnaHQ9JzUwMCcgdmlld0JveD0nMCAwIDI5MCA1MDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGNpcmNsZSBjeD0nMTYyJyBjeT0nMTcyJyByPScxMDBweCcgZmlsbD0nIzc1NmNjMicvPjwvc3ZnPg=="
        /> */}
        <feBlend mode="overlay" in="p0" in2="p1" />
        <feBlend mode="exclusion" in2="p2" />
        <feBlend mode="overlay" in2="p3" result="blendOut" />
        <feGaussianBlur in="blendOut" stdDeviation={42} />
      </filter>
      <clipPath id="corners">
        <rect width={290} height={500} rx={42} />
      </clipPath>
      <path
        id="text-path-a"
        d="M40 12 H250 A28 28 0 0 1 278 40 V460 A28 28 0 0 1 250 488 H40 A28 28 0 0 1 12 460 V40 A28 28 0 0 1 40 12 z"
      />
      <path id="minimap" d="M234 444C234 457.949 242.21 463 253 463" />
      <filter id="top-region-blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation={24} />
      </filter>
      <linearGradient id="grad-up" x1={1} x2={0} y1={1} y2={0}>
        <stop offset={0} stopColor="white" stopOpacity={1} />
        <stop offset={0.9} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="grad-down" x1={0} x2={1} y1={0} y2={1}>
        <stop offset={0} stopColor="white" stopOpacity={1} />
        <stop offset={0.9} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <mask id="fade-up" maskContentUnits="objectBoundingBox">
        <rect width={1} height={1} fill="url(#grad-up)" />
      </mask>
      <mask id="fade-down" maskContentUnits="objectBoundingBox">
        <rect width={1} height={1} fill="url(#grad-down)" />
      </mask>
      <mask id="none" maskContentUnits="objectBoundingBox">
        <rect width={1} height={1} fill="white" />
      </mask>
      <linearGradient id="grad-symbol">
        <stop offset={0.7} stopColor="white" stopOpacity={1} />
        <stop offset={0.95} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <mask id="fade-symbol" maskContentUnits="userSpaceOnUse">
        <rect width="290px" height="200px" fill="url(#grad-symbol)" />
      </mask>
    </defs>
    <g clipPath="url(#corners)">
      <rect fill="d533a9" x="0px" y="0px" width="290px" height="500px" />
      <rect
        style={{
          filter: "url(#f1)",
        }}
        x="0px"
        y="0px"
        width="290px"
        height="500px"
      />
      <g
        style={{
          filter: "url(#top-region-blur)",
          transform: "scale(1.5)",
          transformOrigin: "center top",
        }}
      >
        <rect fill="none" x="0px" y="0px" width="290px" height="500px" />
        <ellipse
          cx="50%"
          cy="0px"
          rx="180px"
          ry="120px"
          fill="#000"
          opacity={0.85}
        />
      </g>
      <react
        x={0}
        y={0}
        width={290}
        height={500}
        rx={42}
        ry={42}
        fill="rgba(0,0,0,0)"
        stroke="rgba(255,255,255,0.2)"
      />
    </g>
    <text textRendering="optimizeSpeed">
      <textPath
        startOffset="-100%"
        fill="white"
        fontFamily="'Courier New', monospace"
        fontSize="10px"
        xlinkHref="#text-path-a"
      >
        {
          '\n            "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2 \u2022 WETH "\n            '
        }
        <animate
          additive="sum"
          attributeName="startOffset"
          from="0%"
          to="100%"
          begin="0s"
          dur="30s"
          repeatCount="indefinite"
        />
      </textPath>
      <textPath
        startOffset="0%"
        fill="white"
        fontFamily="'Courier New', monospace"
        fontSize="10px"
        xlinkHref="#text-path-a"
      >
        {
          '\n            "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2 \u2022 WETH "\n            '
        }
        <animate
          additive="sum"
          attributeName="startOffset"
          from="0%"
          to="100%"
          begin="0s"
          dur="30s"
          repeatCount="indefinite"
        />
      </textPath>
      <textPath
        startOffset="50%"
        fill="white"
        fontFamily="'Courier New', monospace"
        fontSize="10px"
        xlinkHref="#text-path-a"
      >
        {
          '\n            "0xd533a949740bb3306d119cc777fa900ba034cd52 \u2022 CRV "\n            '
        }
        <animate
          additive="sum"
          attributeName="startOffset"
          from="0%"
          to="100%"
          begin="0s"
          dur="30s"
          repeatCount="indefinite"
        />
      </textPath>
      <textPath
        startOffset="-50%"
        fill="white"
        fontFamily="'Courier New', monospace"
        fontSize="10px"
        xlinkHref="#text-path-a"
      >
        {
          '\n            "0xd533a949740bb3306d119cc777fa900ba034cd52 \u2022 CRV "\n            '
        }
        <animate
          additive="sum"
          attributeName="startOffset"
          from="0%"
          to="100%"
          begin="0s"
          dur="30s"
          repeatCount="indefinite"
        />
      </textPath>
    </text>
    <g mask="url(#fade-symbol)">
      <rect fill="none" x="0px" y="0px" width="290px" height="200px" />
      <text
        y="70px"
        x="32px"
        fill="white"
        fontFamily="'Courier New', monospace"
        fontWeight={200}
        fontSize="36px"
      >
        {"CRV/WETH"}
      </text>
      <text
        y="115px"
        x="32px"
        fill="white"
        fontFamily="'Courier New', monospace"
        fontWeight={200}
        fontSize="36px"
      >
        {"1%"}
      </text>
    </g>
    <rect
      x={16}
      y={16}
      width={258}
      height={468}
      rx={26}
      ry={26}
      fill="rgba(0,0,0,0)"
      stroke="rgba(255,255,255,0.2)"
    />
    <g
      mask="url(#none)"
      style={{
        transform: "translate(105px,189px)",
        // transform: "skew(23deg, 55deg)",
        // transform:"rotate3d(1, 1, 1, 331deg)",
        // transition:"3s"
      }}
    >
   {/* <path fill="#e3e3e3" d="M75,80.53c1.09-11.23-0.67-21.99-7.36-34.73c-1.37,8.96-4.51,14.01-11.31,20.53c-2.97-17.65-12.67-34.14-21.9-49.42 c0.54,20.29-6.07,49.28-19.71,64.91c-1.67-8.15-0.47-12.35-1.55-20.57c-1.83,7.34-5.64,11.96-6.69,22.07 c-0.85,8.25,1.47,15.26,5.77,20.64c4.8,6,12.08,10.05,20.23,11.63C56.08,120.16,72.75,103.65,75,80.53L75,80.53z M59.64,117.53 c-4.74,3.09-9.29,4.64-14,5.15c-4.59,0.5-9.23,0.01-14.32-0.97c-9.56-1.85-18.16-6.68-23.91-13.87 c-18.06-22.57,2.36-46.03,3.81-71.92c6.31,7.7,6.95,12.2,8.09,22.31c0.12,1.07,0.22,2.14,0.3,3.21c2.61-6.6,4.57-13.56,5.93-20.43 c2.97-15,3.13-26.27,0.18-41.01c10.94,6.6,16.63,15.28,22.86,26.61c3.84,7,7.52,14.32,10.81,23.37c2.35-9.32,2.9-12.34,0.47-22.3 C88.44,45.72,90.75,97.2,59.64,117.53L59.64,117.53z"/> */}
   <object type="image/svg+xml" data={firemove}></object>

      {/* <rect x="-16px" y="-16px" width="180px" height="180px" fill="none" />
      <path
        d="M1 1C33 49 97 113 145 145"
        stroke="rgba(0,0,0,0.3)"
        strokeWidth="32px"
        fill="none"
        strokeLinecap="round"
      /> */}
    </g>
    <g
      mask="url(#none)"
      style={{
        transform: "translate(72px,189px)",
      }}
    >
      <rect x="-16px" y="-16px" width="180px" height="180px" fill="none" />
    </g>
    <g
      style={{
        transform: "translate(29px, 384px)",
      }}
    >
      <rect
        width="98px"
        height="26px"
        rx="8px"
        ry="8px"
        fill="rgba(0,0,0,0.6)"
      />
      <text
        x="12px"
        y="17px"
        fontFamily="'Courier New', monospace"
        fontSize="12px"
        fill="white"
      >
        <tspan fill="rgba(255,255,255,0.6)">{"ID: "}</tspan>
        {'\n            "102787"\n              '}
      </text>
    </g>
    <g
      style={{
        transform: "translate(29px, 414px)",
      }}
    >
      <rect
        width="133px"
        height="26px"
        rx="8px"
        ry="8px"
        fill="rgba(0,0,0,0.6)"
      />
      <text
        x="12px"
        y="17px"
        fontFamily="'Courier New', monospace"
        fontSize="12px"
        fill="white"
      >
        <tspan fill="rgba(255,255,255,0.6)">{"Min Tick: "}</tspan>
        {'\n            "73000"\n              '}
      </text>
    </g>
    <g
      style={{
        transform: "translate(29px, 444px)",
      }}
    >
      <rect
        width="133px"
        height="26px"
        rx="8px"
        ry="8px"
        fill="rgba(0,0,0,0.6)"
      />
      <text
        x="12px"
        y="17px"
        fontFamily="'Courier New', monospace"
        fontSize="12px"
        fill="white"
      >
        <tspan fill="rgba(255,255,255,0.6)">{"Max Tick: "}</tspan>
        {'\n            "74400"\n              '}
      </text>
    </g>
    <g
      style={{
        transform: "translate(226px, 433px)",
      }}
    >
      <rect
        width="36px"
        height="36px"
        rx="8px"
        ry="8px"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
      />
      <path
        strokeLinecap="round"
        d="M8 9C8.00004 22.9494 16.2099 28 27 28"
        fill="none"
        stroke="white"
      />
      <circle
        style={{
          transform: "translate3d(21px, 27px, 0px)",
        }}
        cx="0px"
        cy="0px"
        r="4px"
        fill="white"
      />
    </g>
  </svg>
);

export default SVGComponent;


// export function Svg() {
//     return (
//         <div>
//             <h2>svg commponent</h2>
        
//             <svg width="290" height="500" rx="20" ry="20" viewBox="0 0 290 500" fill="#ff00ae">
//             {/* // style="stroke: #e3e3e3;
//             //         stroke-width 10;
//             //        stroke-opacity: 0.5;
//             // "> */}
//                 {/* <defs>
//                     <filter>
//                     <feBlend mode="overlay" in="p0" in2="p1"></feBlend>
//                     <feGaussianBlur in="blendOut" stdDeviation="42"></feGaussianBlur>
//                     </filter>
//                 </defs> */}
//                 {/* <clipPath> */}
//                 {/* <rect width="290" height="500" rx="42"  fill="#ff00ae"></rect> */}
//                 {/* </clipPath> */}
//                 {/* <path id="minimap" d="M234 444C234 457.949 242.21 463 253 463"  fill="#98fb98">
//                 </path> */}
//             {/* <mask id="fade-down" maskContentUnits="objectBoundingBox">
//               <rect width="1" height="1" fill="url(#grad-down)"></rect>
//             </mask> */}
//             <g>
//             <rect x="0px" y="0px" rx="10" ry="10" width="290px" height="500px" fill-opacity="0.8"></rect>
//             <ellipse  cx="50%" cy="0px" rx="132" ry="120px" fill="#98fb98" fill-opacity="0.8"></ellipse>
//             </g>
         
//             {/* <react x="0" y="0" width="290" height="500" rx="42" ry="42" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.2)"></react> */}
        

//         <text text-rendering="optimizeSpeed">
//                     <textPath startOffset="-100%" fill="white" font-family="'Courier New', monospace" font-size="10px" >
//                     "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2 • WETH "
//                     <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s" repeatCount="indefinite">
//                     </animate>
//                     </textPath>

//                     <textPath startOffset="0%" fill="white" font-family="'Courier New', monospace" font-size="10px" >
//                     "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2 • WETH "
//                     <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s" repeatCount="indefinite">
//                     </animate>
//                     </textPath>

//                     <textPath startOffset="50%" fill="white" font-family="'Courier New', monospace" font-size="10px" >
//                     "0xd533a949740bb3306d119cc777fa900ba034cd52 • CRV "
//                     <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s" repeatCount="indefinite">
//                     </animate>
//                     </textPath>

//                     <textPath startOffset="-50%" fill="white" font-family="'Courier New', monospace" font-size="10px" >
//                     "0xd533a949740bb3306d119cc777fa900ba034cd52 • CRV "
//                     <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s" repeatCount="indefinite">
//                     </animate>
//                     </textPath>
//             </text>





//             {/* <g clip-path="url(#corners)">
//             <rect fill="d533a9" x="0px" y="0px" width="290px" height="500px"></rect>
//             <rect style="filter: url(#f1)" x="0px" y="0px" width="290px" height="500px"></rect>
//             <g style="filter:url(#top-region-blur); transform:scale(1.5); transform-origin:center top;">
//             <rect fill="none" x="0px" y="0px" width="290px" height="500px"></rect>
//             <ellipse cx="50%" cy="0px" rx="180px" ry="120px" fill="#000" opacity="0.85"></ellipse>
//             </g>
//             <react x="0" y="0" width="290" height="500" rx="42" ry="42" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.2)"></react>
//           </g> */}
//             </svg>


//           {/* <svg  width="290" height="500" viewBox="0 0 290 500">
//           <defs>
//             <filter id="f1">
//               <feImage result="p0" xlink:href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjkwJyBoZWlnaHQ9JzUwMCcgdmlld0JveD0nMCAwIDI5MCA1MDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzI5MHB4JyBoZWlnaHQ9JzUwMHB4JyBmaWxsPScjZDUzM2E5Jy8+PC9zdmc+">
//               </feImage>
//               <feImage result="p1" xlink:href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjkwJyBoZWlnaHQ9JzUwMCcgdmlld0JveD0nMCAwIDI5MCA1MDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGNpcmNsZSBjeD0nMTQxJyBjeT0nMTM2JyByPScxMjBweCcgZmlsbD0nI2MwMmFhYScvPjwvc3ZnPg==">
//               </feImage>
//               <feImage result="p2" xlink:href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjkwJyBoZWlnaHQ9JzUwMCcgdmlld0JveD0nMCAwIDI5MCA1MDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGNpcmNsZSBjeD0nMjYwJyBjeT0nMzY1JyByPScxMjBweCcgZmlsbD0nIzM0Y2Q1MicvPjwvc3ZnPg=="/>
//               <feImage result="p3" xlink:href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjkwJyBoZWlnaHQ9JzUwMCcgdmlld0JveD0nMCAwIDI5MCA1MDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGNpcmNsZSBjeD0nMTYyJyBjeT0nMTcyJyByPScxMDBweCcgZmlsbD0nIzc1NmNjMicvPjwvc3ZnPg==">
//               </feImage>
//               <feBlend mode="overlay" in="p0" in2="p1"></feBlend>
//               <feBlend mode="exclusion" in2="p2"></feBlend>
//               <feBlend mode="overlay" in2="p3" result="blendOut"></feBlend>
//               <feGaussianBlur in="blendOut" stdDeviation="42"></feGaussianBlur>
//             </filter>
//             <clipPath id="corners">
//             <rect width="290" height="500" rx="42"></rect>
//             </clipPath>
//             <path id="text-path-a" d="M40 12 H250 A28 28 0 0 1 278 40 V460 A28 28 0 0 1 250 488 H40 A28 28 0 0 1 12 460 V40 A28 28 0 0 1 40 12 z">
//             </path>
//             <path id="minimap" d="M234 444C234 457.949 242.21 463 253 463">
//             </path>
//             <filter id="top-region-blur">
//             <feGaussianBlur in="SourceGraphic" stdDeviation="24"></feGaussianBlur>
//             </filter>
//             <linearGradient id="grad-up" x1="1" x2="0" y1="1" y2="0">
//               <stop offset="0.0" stop-color="white" stop-opacity="1"></stop>
//               <stop offset=".9" stop-color="white" stop-opacity="0"></stop>
//             </linearGradient>
//             <linearGradient id="grad-down" x1="0" x2="1" y1="0" y2="1">
//               <stop offset="0.0" stop-color="white" stop-opacity="1"></stop>
//               <stop offset="0.9" stop-color="white" stop-opacity="0"></stop>
//             </linearGradient>
//             <mask id="fade-up" maskContentUnits="objectBoundingBox">
//               <rect width="1" height="1" fill="url(#grad-up)"></rect>
//             </mask>
//             <mask id="fade-down" maskContentUnits="objectBoundingBox">
//               <rect width="1" height="1" fill="url(#grad-down)"></rect>
//             </mask>
//             <mask id="none" maskContentUnits="objectBoundingBox">
//               <rect width="1" height="1" fill="white"></rect>
//             </mask>
//             <linearGradient id="grad-symbol">
//                 <stop offset="0.7" stop-color="white" stop-opacity="1"></stop>
//                 <stop offset=".95" stop-color="white" stop-opacity="0"></stop>
//             </linearGradient>
//             <mask id="fade-symbol" maskContentUnits="userSpaceOnUse">
//               <rect width="290px" height="200px" fill="url(#grad-symbol)"></rect>
//             </mask>
//           </defs>
//           <g clip-path="url(#corners)">
//             <rect fill="d533a9" x="0px" y="0px" width="290px" height="500px"></rect>
//             <rect style="filter: url(#f1)" x="0px" y="0px" width="290px" height="500px"></rect>
//             <g style="filter:url(#top-region-blur); transform:scale(1.5); transform-origin:center top;">
//             <rect fill="none" x="0px" y="0px" width="290px" height="500px"></rect>
//             <ellipse cx="50%" cy="0px" rx="180px" ry="120px" fill="#000" opacity="0.85"></ellipse>
//             </g>
//            "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2 • WETH "
//           <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s" repeatCount="indefinite">
//           </animate>
//             </textPath>
//             <textPath startOffset="0%" fill="white" font-family="'Courier New', monospace" font-size="10px" xlink:href="#text-path-a">
//           "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2 • WETH "
//           <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s" repeatCount="indefinite">
//           </animate>
//             </textPath>
//             <textPath startOffset="50%" fill="white" font-family="'Courier New', monospace" font-size="10px" xlink:href="#text-path-a">
//           "0xd533a949740bb3306d119cc777fa900ba034cd52 • CRV "
//           <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s" repeatCount="indefinite">
//           </animate>
//             </textPath>
//             <textPath startOffset="-50%" fill="white" font-family="'Courier New', monospace" font-size="10px" xlink:href="#text-path-a">
//           "0xd533a949740bb3306d119cc777fa900ba034cd52 • CRV "
//           <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s" repeatCount="indefinite">
//           </animate>
//             </textPath>
//           </text>   <react x="0" y="0" width="290" height="500" rx="42" ry="42" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.2)"></react>
//           </g>
//           <text text-rendering="optimizeSpeed">
//             <textPath startOffset="-100%" fill="white" font-family="'Courier New', monospace" font-size="10px" xlink:href="#text-path-a">
        
//           <g mask="url(#fade-symbol)">
//             <rect fill="none" x="0px" y="0px" width="290px" height="200px"></rect>
//             <text y="70px" x="32px" fill="white" font-family="'Courier New', monospace" font-weight="200" font-size="36px">CRV/WETH</text>
//             <text y="115px" x="32px" fill="white" font-family="'Courier New', monospace" font-weight="200" font-size="36px">1%</text>
//           </g>
//           <rect x="16" y="16" width="258" height="468" rx="26" ry="26" fill="rgba(0,0,0,0)" stroke="rgba(255,255,255,0.2)"></rect>
//           <g mask="url(#none)" style="transform:translate(72px,189px)">
//             <rect x="-16px" y="-16px" width="180px" height="180px" fill="none"></rect>
//             <path d="M1 1C33 49 97 113 145 145" stroke="rgba(0,0,0,0.3)" stroke-width="32px" fill="none" stroke-linecap="round"></path>
//           </g>
//           <g mask="url(#none)" style="transform:translate(72px,189px)">
//             <rect x="-16px" y="-16px" width="180px" height="180px" fill="none"></rect>
//             <path d="M1 1C33 49 97 113 145 145" stroke="rgba(255,255,255,1)" fill="none" stroke-linecap="round"></path>
//           </g>
//           <circle cx="73px" cy="190px" r="4px" fill="white"></circle>
//           <circle cx="217px" cy="334px" r="4px" fill="white"></circle>
//           <g style="transform:translate(29px, 384px)">
//             <rect width="98px" height="26px" rx="8px" ry="8px" fill="rgba(0,0,0,0.6)"></rect>
//             <text x="12px" y="17px" font-family="'Courier New', monospace" font-size="12px" fill="white">
//           <tspan fill="rgba(255,255,255,0.6)">ID: </tspan>
//           "102787"
//             </text>
//           </g>
//           <g style="transform:translate(29px, 414px)">
//             <rect width="133px" height="26px" rx="8px" ry="8px" fill="rgba(0,0,0,0.6)"></rect>
//             <text x="12px" y="17px" font-family="'Courier New', monospace" font-size="12px" fill="white">
//           <tspan fill="rgba(255,255,255,0.6)">Min Tick: </tspan>
//           "73000"
//             </text>
//           </g>
//           <g style="transform:translate(29px, 444px)">
//             <rect width="133px" height="26px" rx="8px" ry="8px" fill="rgba(0,0,0,0.6)"></rect>
//             <text x="12px" y="17px" font-family="'Courier New', monospace" font-size="12px" fill="white">
//           <tspan fill="rgba(255,255,255,0.6)">Max Tick: </tspan>
//           "74400"
//             </text>
//           </g>
//           <g style="transform:translate(226px, 433px)">
//             <rect width="36px" height="36px" rx="8px" ry="8px" fill="none" stroke="rgba(255,255,255,0.2)"></rect>
//             <path stroke-linecap="round" d="M8 9C8.00004 22.9494 16.2099 28 27 28" fill="none" stroke="white"></path>
//             <circle style="transform:translate3d(21px, 27px, 0px)" cx="0px" cy="0px" r="4px" fill="white"></circle>
//           </g>
//         </svg> */}
//         </div>
//     )
// }