(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[4],{1075:function(e,t,n){"use strict";n.r(t);var r,i,a,o,c,s,l,u,d,p,f,b,j=n(1),h=n(8),m=n(2),x=n.n(m),O=n(6),v=n(16),g=n(15),y=n(292),L=n(0),w=function(e,t,n){return Object(O.d)(r||(r=Object(h.a)(["\n  width: 100%;\n  height: 20px;\n  clip-path: url(",");\n\n  background: ",";\n\n  & svg {\n    display: block;\n  }\n"])),t,(function(){return e.isDark?(null===n||void 0===n?void 0:n.dark)||(null===n||void 0===n?void 0:n.light)||e.colors.background:(null===n||void 0===n?void 0:n.light)||e.colors.background}))},C=Object(O.e)(g.g)(i||(i=Object(h.a)(["\n  ","\n  transform: ",";\n"])),(function(e){var t=e.theme,n=e.clipPath,r=e.clipFill;return w(t,n,r)}),(function(e){return"#bottomConcaveCurve"===e.clipPath?"translate(0, -13px)":"translate(0, 1px)"})),F=Object(O.e)(g.g)(a||(a=Object(h.a)(["\n  ","\n  transform: ",";\n"])),(function(e){var t=e.theme,n=e.clipPath,r=e.clipFill;return w(t,n,r)}),(function(e){return"#bottomConvexCurve"===e.clipPath?"translate(0, -13px)":"translate(0, -1px)"})),k=function(e){var t=e.clipFill;return Object(L.jsx)(F,{clipFill:t,clipPath:"#topConvexCurve",children:Object(L.jsx)("svg",{width:"0",height:"0",children:Object(L.jsx)("defs",{children:Object(L.jsx)("clipPath",{id:"topConvexCurve",clipPathUnits:"objectBoundingBox",children:Object(L.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z"})})})})})},V=function(e){var t=e.clipFill;return Object(L.jsx)(F,{clipFill:t,clipPath:"#bottomConvexCurve",children:Object(L.jsx)("svg",{width:"0",height:"0",children:Object(L.jsx)("defs",{children:Object(L.jsx)("clipPath",{id:"bottomConvexCurve",clipPathUnits:"objectBoundingBox",children:Object(L.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},P=function(e){var t=e.clipFill;return Object(L.jsx)(C,{clipFill:t,clipPath:"#topConcaveCurve",children:Object(L.jsx)("svg",{width:"0",height:"0",children:Object(L.jsx)("defs",{children:Object(L.jsx)("clipPath",{id:"topConcaveCurve",clipPathUnits:"objectBoundingBox",children:Object(L.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},R=function(e){var t=e.clipFill;return Object(L.jsx)(C,{clipFill:t,clipPath:"#bottomConcaveCurve",children:Object(L.jsx)("svg",{width:"0",height:"0",children:Object(L.jsx)("defs",{children:Object(L.jsx)("clipPath",{id:"bottomConcaveCurve",clipPathUnits:"objectBoundingBox",children:Object(L.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z"})})})})})},A=O.e.div(o||(o=Object(h.a)(["\n  background: ",";\n  z-index: ",";\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"])),(function(e){var t=e.theme,n=e.dividerFill;return t.isDark?(null===n||void 0===n?void 0:n.dark)||(null===n||void 0===n?void 0:n.light)||"none":(null===n||void 0===n?void 0:n.light)||(null===n||void 0===n?void 0:n.dark)||"none"}),(function(e){return e.index})),S=O.e.div(c||(c=Object(h.a)(["\n  z-index: ",";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])),(function(e){return e.index+1})),D=function(e){var t=e.index,n=e.dividerPosition,r=e.dividerComponent,i=e.concave,a=e.clipFill,o=e.dividerFill,c="top"===n&&!i,s="bottom"===n&&!i,l="top"===n&&i,u="bottom"===n&&i;return Object(L.jsxs)(A,{index:t,dividerFill:o,children:[r&&Object(L.jsx)(S,{index:t,children:r}),Object(L.jsxs)(L.Fragment,{children:[l&&Object(L.jsx)(P,{clipFill:a}),u&&Object(L.jsx)(R,{clipFill:a})]}),Object(L.jsxs)(L.Fragment,{children:[c&&Object(L.jsx)(k,{clipFill:a}),s&&Object(L.jsx)(V,{clipFill:a})]})]})},E=["children","background","index","dividerComponent","dividerPosition","hasCurvedDivider","concaveDivider","clipFill","dividerFill","containerProps","innerProps"],B=Object(O.e)(g.x)(s||(s=Object(h.a)(["\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  z-index: ",";\n  background: ",";\n  padding: ",";\n"])),(function(e){return e.index-1}),(function(e){var t=e.background,n=e.theme;return t||n.colors.background}),(function(e){return(0,e.getPadding)()})),M=Object(O.e)(y.a)(l||(l=Object(h.a)(["\n  min-height: auto;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  "," {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n\n  "," {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),T=function(e){var t=e.children,n=e.background,r=e.index,i=void 0===r?1:r,a=e.dividerComponent,o=e.dividerPosition,c=void 0===o?"bottom":o,s=e.hasCurvedDivider,l=void 0===s||s,u=e.concaveDivider,d=void 0!==u&&u,p=e.clipFill,f=e.dividerFill,b=e.containerProps,h=e.innerProps,m=Object(v.a)(e,E);return Object(L.jsxs)(g.g,Object(j.a)(Object(j.a)({},b),{},{children:[l&&"top"===c&&Object(L.jsx)(D,{index:i,concave:d,dividerPosition:c,dividerComponent:a,clipFill:p,dividerFill:f}),Object(L.jsx)(B,Object(j.a)(Object(j.a)({background:n,index:i,getPadding:function(){return l?"bottom"===c?"48px 0 14px":"top"===c?"14px 0 48px":"48px 0":"48px 0"}},m),{},{children:Object(L.jsx)(M,Object(j.a)(Object(j.a)({},h),{},{children:t}))})),l&&"bottom"===c&&Object(L.jsx)(D,{index:i,concave:d,dividerPosition:c,dividerComponent:a,clipFill:p,dividerFill:f})]}))},U=n(185),I=n(293),z=n(83),_=n(52),H=n(290),N=function(e){return Object(L.jsxs)(g.W,Object(j.a)(Object(j.a)({viewBox:"0 0 1660 339"},e),{},{children:[Object(L.jsx)("path",{d:"M804 167.023C520.5 167.023 267.5 290.522 0 304.5V339H1660V0.5C1358.83 0.5 1104 167.023 804 167.023Z",fill:"url(#paint0_linear_light)"}),Object(L.jsx)("defs",{children:Object(L.jsxs)("linearGradient",{id:"paint0_linear_light",x1:"830",y1:"84",x2:"830",y2:"339",gradientUnits:"userSpaceOnUse",children:[Object(L.jsx)("stop",{stopColor:"white",stopOpacity:"0.48"}),Object(L.jsx)("stop",{offset:"0.566389",stopColor:"white",stopOpacity:"0.35"}),Object(L.jsx)("stop",{offset:"1",stopColor:"white"})]})})]}))},G=function(e){return Object(L.jsxs)(g.W,Object(j.a)(Object(j.a)({viewBox:"0 0 1660 339"},e),{},{children:[Object(L.jsx)("path",{d:"M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z",fill:"url(#paint0_linear_dark)"}),Object(L.jsx)("defs",{children:Object(L.jsxs)("linearGradient",{id:"paint0_linear_dark",x1:"830",y1:"83.5",x2:"830",y2:"338.5",gradientUnits:"userSpaceOnUse",children:[Object(L.jsx)("stop",{stopColor:"#08060B",stopOpacity:"0.2"}),Object(L.jsx)("stop",{offset:"0.545554",stopColor:"#08060B",stopOpacity:"0.5"}),Object(L.jsx)("stop",{offset:"1",stopColor:"#08060B"})]})})]}))},q=function(e,t){return Object(O.f)(u||(u=Object(h.a)(["\n  from {\n    transform: translate(0,  0px);\n  }\n  50% {\n    transform: translate(",", ",");\n  }\n  to {\n    transform: translate(0, 0px);\n  }  \n"])),e,t)},Y=Object(O.e)(g.g)(d||(d=Object(h.a)(["\n  position: relative;\n  max-height: ",";\n\n  & :nth-child(2) {\n    animation: "," 3s ease-in-out infinite;\n    animation-delay: 1s;\n  }\n\n  & :nth-child(3) {\n    animation: "," 3s ease-in-out infinite;\n    animation-delay: 0.66s;\n  }\n\n  & :nth-child(4) {\n    animation: "," 3s ease-in-out infinite;\n    animation-delay: 0.33s;\n  }\n\n  & :nth-child(5) {\n    animation: "," 3s ease-in-out infinite;\n    animation-delay: 0s;\n  }\n"])),(function(e){return e.maxHeight}),q("3px","15px"),q("5px","10px"),q("6px","5px"),q("4px","12px")),Q=O.e.img(p||(p=Object(h.a)(["\n  max-height: ",";\n  visibility: hidden;\n"])),(function(e){return e.maxHeight})),Z=Object(O.e)(g.g)(f||(f=Object(h.a)(["\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  img {\n    max-height: 100%;\n    width: auto;\n  }\n"])));!function(e){e.MD="1.5x",e.LG="2x"}(b||(b={}));var W,J,$,X,K,ee,te,ne,re,ie,ae,oe,ce,se,le,ue=function(e,t,n){return"".concat(e).concat(t).concat(n?"@".concat(n,".png"):".png")},de=function(e,t){return"".concat(ue(e,t)," 512w, \n  ").concat(ue(e,t,b.MD)," 768w, \n  ").concat(ue(e,t,b.LG)," 1024w,")},pe=function(e){var t=e.path,n=e.attributes,r=e.maxHeight,i=void 0===r?"512px":r;return Object(L.jsxs)(Y,{maxHeight:i,children:[Object(L.jsx)(Q,{src:ue(t,n[0].src),maxHeight:i,srcSet:de(t,n[0].src)}),n.map((function(e){return Object(L.jsx)(Z,{children:Object(L.jsx)("img",{src:ue(t,e.src),srcSet:de(t,e.src),alt:e.alt})},e.src)}))]})},fe=function(){return Object(O.f)(J||(J=Object(h.a)(["\n  from {\n    opacity: 0.9;\n  }\n  50% {\n    opacity: 0.1;\n  }\n  to {\n    opacity: 0.9;\n  }  \n"])))},be=O.e.div($||($=Object(h.a)(["\n  z-index: -1;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0px;\n  left: 0px;\n"]))),je=O.e.div(X||(X=Object(h.a)(["\n  position: absolute;\n  width: 100%;\n  bottom: -3px;\n"]))),he=O.e.div(K||(K=Object(h.a)(["\n  width: 100%;\n  animation: "," 3.5s ease-in-out infinite;\n"])),(function(){return Object(O.f)(W||(W=Object(h.a)(["\n  from {\n    transform: translate(0,  0px);\n  }\n  50% {\n    transform: translate(-5px, -5px);\n  }\n  to {\n    transform: translate(0, 0px);\n  }  \n"])))})),me=O.e.div(ee||(ee=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  & :nth-child(2) {\n    animation: "," 2s ease-in-out infinite;\n    animation-delay: 1s;\n  }\n\n  & :nth-child(3) {\n    animation: "," 5s ease-in-out infinite;\n    animation-delay: 0.66s;\n  }\n\n  & :nth-child(4) {\n    animation: "," 2.5s ease-in-out infinite;\n    animation-delay: 0.33s;\n  }\n"])),fe,fe,fe),xe="/images/home/lunar-bunny/",Oe="bunny",ve={path:"/images/home/lunar-bunny/",attributes:[{src:"star-l",alt:"3D Star"},{src:"star-r",alt:"3D Star"},{src:"star-top-r",alt:"3D Star"}]},ge=function(){var e=Object(_.b)().t,t=Object(z.c)().account,n=Object(U.a)().theme;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(be,{children:Object(L.jsx)(je,{children:n.isDark?Object(L.jsx)(G,{width:"100%"}):Object(L.jsx)(N,{width:"100%"})})}),Object(L.jsxs)(g.x,{position:"relative",flexDirection:["column-reverse",null,null,"row"],alignItems:["flex-end",null,null,"center"],justifyContent:"center",mt:["50px",null,0],id:"homepage-hero",children:[Object(L.jsxs)(g.x,{flex:"1",flexDirection:"column",children:[Object(L.jsx)(g.z,{scale:"xxl",color:"secondary",mb:"24px",children:"\xa1Vamos a la luna se\xf1orita!"}),Object(L.jsx)(g.z,{scale:"md",mb:"24px",children:"Earn MARIACHIS in the most drunkard CRONOS platform! Margaritas for ladies, Tequila shots for gentlemen!"}),Object(L.jsxs)(g.x,{children:[!t&&Object(L.jsx)(H.a,{mr:"8px"}),Object(L.jsx)(g.F,{href:"https://app.cronaswap.org/swap?outputCurrency=0x7AC0bCFC21e2bd0C42f3CF0996518e10747EAE44",children:Object(L.jsx)(g.h,{variant:t?"primary":"secondary",children:"Buy MARIACHIS"})})]})]}),Object(L.jsxs)(g.x,{height:["192px",null,null,"100%"],width:["192px",null,null,"100%"],flex:[null,null,null,"1"],mb:["24px",null,null,"0"],position:"relative",children:[Object(L.jsx)(he,{children:Object(L.jsx)("img",{src:"".concat(xe).concat(Oe,".png"),srcSet:de(xe,Oe),alt:e("Lunar bunny")})}),Object(L.jsx)(me,{children:Object(L.jsx)(pe,Object(j.a)({},ve))})]})]})]})},ye={headingText:"MARIACHIs are here \xa1Ay! \xa1Ay! \xa1Ay!",bodyText:"MARIACHI token has a unique automatic buyback mechanism that increase its price floor constantly, \xa1A HUEVO!",reverse:!1,primaryButton:{to:"https://app.cronaswap.org/swap?outputCurrency=0x7AC0bCFC21e2bd0C42f3CF0996518e10747EAE44",text:"Buy MARIACHI",external:!0},secondaryButton:{to:"https://docs.pancakeswap.finance/tokenomics/cake",text:"Learn",external:!0},images:{path:"/images/home/cake/",attributes:[{src:"coin",alt:"Mariachi token"}]}},Le=n(95),we=["text","firstColor","mb"],Ce=function(e){var t,n=e.text,r=e.firstColor,i=e.mb,a=void 0===i?"24px":i,o=Object(v.a)(e,we),c=Object(U.a)().theme,s=n.split(" "),l=s[0],u=s.slice(1).join(" "),d=null!==(t=c.colors[r])&&void 0!==t?t:c.colors.secondary;return Object(L.jsxs)(g.z,Object(j.a)(Object(j.a)({scale:"xl",mb:a},o),{},{children:[Object(L.jsxs)("span",{style:{color:d},children:[l," "]}),u]}))},Fe=function(e){var t=Object(_.b)().t,n=e.headingText,r=e.bodyText,i=e.reverse,a=e.primaryButton,o=e.images,c=t(n),s=t(r);return Object(L.jsx)(g.x,{flexDirection:"column",children:Object(L.jsxs)(g.x,{flexDirection:["column-reverse",null,null,i?"row-reverse":"row"],alignItems:["flex-end",null,null,"center"],justifyContent:"center",children:[Object(L.jsxs)(g.x,{flexDirection:"column",flex:"1",ml:[null,null,null,i&&"64px"],mr:[null,null,null,!i&&"64px"],alignSelf:["flex-start",null,null,"center"],children:[Object(L.jsx)(Ce,{text:c}),Object(L.jsx)(g.Y,{color:"textSubtle",mb:"24px",children:s}),Object(L.jsx)(g.x,{children:Object(L.jsx)(g.h,{mr:"16px",children:a.external?Object(L.jsx)(g.E,{external:!0,href:a.to,children:Object(L.jsx)(g.Y,{color:"card",bold:!0,fontSize:"16px",children:t(a.text)})}):Object(L.jsx)(Le.a,{to:a.to,children:Object(L.jsx)(g.Y,{color:"card",bold:!0,fontSize:"16px",children:t(a.text)})})})})]}),Object(L.jsx)(g.x,{height:["192px",null,null,"100%"],width:["192px",null,null,"100%"],flex:[null,null,null,"1"],mb:["24px",null,null,"0"],children:Object(L.jsx)(pe,Object(j.a)({},o))})]})})},ke=function(e){return Object(L.jsxs)(g.W,Object(j.a)(Object(j.a)({viewBox:"0 0 1956 1956"},e),{},{children:[Object(L.jsx)("g",{filter:"url(#filter0_f)",children:Object(L.jsx)("path",{d:"M978 20L987.526 796.229L1078.14 25.248L1006.47 798.221L1177.18 40.9346L1025.11 802.182L1274.04 66.8879L1043.23 808.07L1367.65 102.823L1060.64 815.819L1457 148.348L1077.14 825.345L1541.1 202.962L1092.55 836.544L1619.03 266.067L1106.71 849.292L1689.93 336.973L1119.46 863.451L1753.04 414.902L1130.65 878.865L1807.65 499L1140.18 895.365L1853.18 588.346L1147.93 912.77L1889.11 681.962L1153.82 930.89L1915.07 778.821L1157.78 949.526L1930.75 877.862L1159.77 968.474L1936 978L1159.77 987.526L1930.75 1078.14L1157.78 1006.47L1915.07 1177.18L1153.82 1025.11L1889.11 1274.04L1147.93 1043.23L1853.18 1367.65L1140.18 1060.64L1807.65 1457L1130.65 1077.14L1753.04 1541.1L1119.46 1092.55L1689.93 1619.03L1106.71 1106.71L1619.03 1689.93L1092.55 1119.46L1541.1 1753.04L1077.14 1130.65L1457 1807.65L1060.64 1140.18L1367.65 1853.18L1043.23 1147.93L1274.04 1889.11L1025.11 1153.82L1177.18 1915.07L1006.47 1157.78L1078.14 1930.75L987.526 1159.77L978 1936L968.474 1159.77L877.862 1930.75L949.526 1157.78L778.821 1915.07L930.89 1153.82L681.962 1889.11L912.77 1147.93L588.346 1853.18L895.365 1140.18L499 1807.65L878.865 1130.65L414.902 1753.04L863.451 1119.46L336.973 1689.93L849.292 1106.71L266.067 1619.03L836.544 1092.55L202.962 1541.1L825.345 1077.14L148.348 1457L815.819 1060.64L102.823 1367.65L808.07 1043.23L66.8879 1274.04L802.182 1025.11L40.9346 1177.18L798.221 1006.47L25.248 1078.14L796.229 987.526L20 978L796.229 968.474L25.248 877.862L798.221 949.526L40.9346 778.821L802.182 930.89L66.8879 681.962L808.07 912.77L102.823 588.346L815.819 895.365L148.348 499L825.345 878.865L202.962 414.902L836.544 863.451L266.067 336.973L849.292 849.292L336.973 266.067L863.451 836.544L414.902 202.962L878.865 825.345L499 148.348L895.365 815.819L588.346 102.823L912.77 808.07L681.962 66.8879L930.89 802.182L778.821 40.9346L949.526 798.221L877.862 25.248L968.474 796.229L978 20Z",fill:"url(#paint0_radial)",fillOpacity:"0.1"})}),Object(L.jsxs)("defs",{children:[Object(L.jsxs)("filter",{id:"filter0_f",x:"0",y:"0",width:"1956",height:"1956",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[Object(L.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),Object(L.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),Object(L.jsx)("feGaussianBlur",{stdDeviation:"10",result:"effect1_foregroundBlur"})]}),Object(L.jsxs)("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(978 978) rotate(90) scale(958)",children:[Object(L.jsx)("stop",{offset:"0.114547",stopColor:"white",stopOpacity:"0"}),Object(L.jsx)("stop",{offset:"0.374975",stopColor:"white"}),Object(L.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})]})]}))},Ve=O.e.div(te||(te=Object(h.a)(["\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n"]))),Pe=Object(O.e)(ke)(ne||(ne=Object(h.a)(["\n  height: 350%;\n  width: 350%;\n\n  "," {\n    height: 400%;\n    width: 400%;\n  }\n"])),(function(e){return e.theme.mediaQueries.xl})),Re=Object(O.e)(g.x)(re||(re=Object(h.a)(["\n  z-index: 1;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n"]))),Ae=Object(O.e)(y.a)(ie||(ie=Object(h.a)(["\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  visibility: hidden;\n\n  "," {\n    visibility: visible;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),Se=Object(O.e)(g.x)(ae||(ae=Object(h.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n"]))),De=Object(O.e)(g.x)(oe||(oe=Object(h.a)(["\n  position: absolute;\n  right: 0;\n  bottom: 0;\n"]))),Ee={path:"/images/home/flying-pancakes/",attributes:[{src:"1-bottom",alt:"Pancake flying on the bottom"},{src:"1-left",alt:"Pancake flying on the left"},{src:"1-top",alt:"Pancake flying on the top"}]},Be={path:"/images/home/flying-pancakes/",attributes:[{src:"2-bottom",alt:"Pancake flying on the bottom"},{src:"2-top",alt:"Pancake flying on the top"},{src:"2-right",alt:"Pancake flying on the right"}]},Me=function(){var e=Object(z.c)().account;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(Ve,{children:Object(L.jsx)(g.x,{alignItems:"center",justifyContent:"center",width:"100%",height:"100%",children:Object(L.jsx)(Pe,{})})}),Object(L.jsxs)(Ae,{children:[Object(L.jsx)(Se,{children:Object(L.jsx)(pe,Object(j.a)(Object(j.a)({},Ee),{},{maxHeight:"256px"}))}),Object(L.jsx)(De,{children:Object(L.jsx)(pe,Object(j.a)(Object(j.a)({},Be),{},{maxHeight:"256px"}))})]}),Object(L.jsxs)(Re,{children:[Object(L.jsx)(g.z,{mb:"24px",scale:"xl",color:"white",children:"Join the pachanga"}),Object(L.jsx)(g.Y,{textAlign:"center",color:"white",children:"Connect your crypto wallet to start using the app in seconds."}),Object(L.jsx)(g.Y,{mb:"24px",bold:!0,color:"white",children:"No registration needed."}),!e&&Object(L.jsx)(H.a,{mt:"24px"})]})]})},Te=n(4),Ue=n.n(Te),Ie=n(27),ze=n(20),_e=n(14),He=n.n(_e),Ne=n(323),Ge=n(209),qe=(n(279),n(87),function(){var e=Object(Ie.a)(Ue.a.mark((function e(t){var n;return Ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.mariachiPerBlock();case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",new He.a(0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),Ye=n(48),Qe=n(234),Ze=n(883),We=n(889),Je=n(136),$e=n(194),Xe=Object(O.e)(g.x)(ce||(ce=Object(h.a)(["\n  flex-direction: column;\n  ","\n"])),(function(e){var t=e.noMobileBorder,n=e.theme;return t?"".concat(n.mediaQueries.md," {\n           padding: 0 16px;\n           border-left: 1px ").concat(n.colors.inputSecondary," solid;\n         }\n       "):"border-left: 1px ".concat(n.colors.inputSecondary," solid;\n         padding: 0 8px;\n         ").concat(n.mediaQueries.sm," {\n           padding: 0 16px;\n         }\n       ")})),Ke=O.e.div(se||(se=Object(h.a)(["\n  display: grid;\n  grid-gap: 16px 8px;\n  margin-top: 24px;\n  grid-template-columns: repeat(2, auto);\n\n  "," {\n    grid-gap: 16px;\n  }\n\n  "," {\n    grid-gap: 32px;\n    grid-template-columns: repeat(4, auto);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),et=function(){var e=Object(_.b)().t,t=function(){var e=Object(Qe.a)().slowRefresh,t=Object(m.useState)(),n=Object(ze.a)(t,2),r=n[0],i=n[1];return Object(m.useEffect)((function(){function e(){return(e=Object(Ie.a)(Ue.a.mark((function e(){var t,n;return Ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(Ge.a)(Ne,Object(Ye.c)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,i(new He.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),r}(),n=Object(Ze.e)(function(e){var t=Object(m.useState)(new He.a(0)),n=Object(ze.a)(t,2),r=n[0],i=n[1],a=Object(z.c)(),o=a.account,c=a.library,s=Object(Qe.a)().slowRefresh;return Object(m.useEffect)((function(){o&&c&&function(){var e=Object(Ie.a)(Ue.a.mark((function e(){return Ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(new He.a(0));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[o,c,e,s]),r}(Object(Ye.c)())),r=Object($e.d)(),i=t?Object(Ze.e)(t)-n:0,a=Object(Je.f)(),o=new He.a(a).times(i),c=Object(Ze.b)(o.toNumber()),s=x.a.useState(0),l=Object(ze.a)(s,2),u=l[0],d=l[1];return x.a.useEffect((function(){(function(){var e=Object(Ie.a)(Ue.a.mark((function e(){var t;return Ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,qe(r);case 2:t=e.sent,t=new He.a(t._hex).div(new He.a(10).pow(18)),d(parseFloat(t.toString()));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,u]),Object(L.jsxs)(Ke,{children:[Object(L.jsxs)(g.x,{flexDirection:"column",children:[Object(L.jsx)(g.Y,{color:"textSubtle",children:e("Total supply")}),i?Object(L.jsx)(We.a,{decimals:0,lineHeight:"1.1",fontSize:"24px",bold:!0,value:i}):Object(L.jsx)(g.U,{height:24,width:126,my:"4px"})]}),Object(L.jsxs)(Xe,{children:[Object(L.jsx)(g.Y,{color:"textSubtle",children:e("Burned to date")}),n>=0?Object(L.jsx)(We.a,{decimals:0,lineHeight:"1.1",fontSize:"24px",bold:!0,value:n}):Object(L.jsx)(g.U,{height:24,width:126,my:"4px"})]}),Object(L.jsxs)(Xe,{noMobileBorder:!0,children:[Object(L.jsx)(g.Y,{color:"textSubtle",children:e("Market cap")}),(null===o||void 0===o?void 0:o.gt(0))&&c?Object(L.jsx)(g.z,{scale:"lg",children:e("$%marketCap%",{marketCap:c})}):Object(L.jsx)(g.U,{height:24,width:126,my:"4px"})]}),Object(L.jsxs)(Xe,{children:[Object(L.jsx)(g.Y,{color:"textSubtle",children:e("Current emissions")}),Object(L.jsx)(g.z,{scale:"lg",children:e("%cakeEmissions%/block",{cakeEmissions:u})})]})]})},tt=Object(O.e)(T)(le||(le=Object(h.a)(["\n  padding-top: 16px;\n\n  "," {\n    padding-top: 48px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md}));t.default=function(){var e=Object(U.a)().theme;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(I.a,{}),Object(L.jsx)(tt,{innerProps:{style:{margin:"0",width:"100%"}},background:e.isDark?"radial-gradient(103.12% 50% at 50% 50%, #21193A 0%, #191326 100%)":"linear-gradient(139.73deg, #FDCB54 0%, #F3EFFF 100%)",index:2,hasCurvedDivider:!1,children:Object(L.jsx)(ge,{})}),Object(L.jsxs)(T,{innerProps:{style:{margin:"0",width:"100%"}},background:e.isDark?"linear-gradient(180deg, #09070C 22%, #201335 100%)":"linear-gradient(180deg, #ffffff 50%, #C1C13C 100%)",index:2,hasCurvedDivider:!1,children:[Object(L.jsx)(Fe,Object(j.a)({},ye)),Object(L.jsx)(et,{})]}),Object(L.jsx)(T,{innerProps:{style:{margin:"0",width:"100%",maxWidth:"968px"}},background:"linear-gradient(180deg, #C1C13C 0%, #F67632 100%)",index:2,hasCurvedDivider:!1,children:Object(L.jsx)(Me,{})})]})}},883:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));n(20);var r=n(14),i=n.n(r),a=n(110),o=n(172),c=n(150),s=n(70),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return new i.a(e).dividedBy(s.b.pow(t))},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return l(e,t).toNumber()},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=arguments.length>2?arguments[2]:void 0;return l(e,t).toFixed(n)},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r={minimumFractionDigits:t,maximumFractionDigits:n};return e.toLocaleString(void 0,r)},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:18,r=e.mod(a.a.BigNumber.from(10).pow(n-t));return Object(o.formatUnits)(e.sub(r),n)},b=function(e){var t=Object(c.c)();return new Intl.NumberFormat(t,{notation:"compact",compactDisplay:"long",maximumSignificantDigits:2}).format(e)}},889:function(e,t,n){"use strict";var r=n(1),i=n(16),a=n(2),o=n(898),c=n.n(o),s=n(15),l=n(0),u=["value","color","decimals","isDisabled","unit","prefix","onClick"];t.a=function(e){var t=e.value,n=e.color,o=void 0===n?"text":n,d=e.decimals,p=void 0===d?3:d,f=e.isDisabled,b=void 0!==f&&f,j=e.unit,h=e.prefix,m=e.onClick,x=Object(i.a)(e,u),O=Object(a.useRef)(0);return Object(a.useEffect)((function(){O.current=t}),[t]),Object(l.jsx)(s.Y,Object(r.a)(Object(r.a)({color:b?"textDisabled":o,onClick:m},x),{},{children:Object(l.jsx)(c.a,{start:O.current,end:t,prefix:h,suffix:j,decimals:p,duration:1,separator:","})}))}},898:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(29),i=n(2),a=n(899),o=n(900);function c(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=c(r),l=c(i),u=c(a),d=c(o);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?O(e):t}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var i=m(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return v(this,n)}}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(s){c=!0,i=s}finally{try{o||null==n.return||n.return()}finally{if(c)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w=function(e,t){var n=t.decimal,r=t.decimals,i=t.duration,a=t.easingFn,o=t.end,c=t.formattingFn,s=t.prefix,l=t.separator,u=t.start,p=t.suffix,f=t.useEasing;return new d.default(e,u,o,r,i,{decimal:n,easingFn:a,formattingFn:c,separator:l,prefix:s,suffix:p,useEasing:f,useGrouping:!!l})},C=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(a,e);var t,n,r,i=g(a);function a(){var e;b(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(O(e=i.call.apply(i,[this].concat(n))),"checkProps",(function(t){var n=e.props,r=n.start,i=n.suffix,a=n.prefix,o=n.redraw,c=n.duration,s=n.separator,l=n.decimals,u=n.decimal,d=n.className;return c!==t.duration||r!==t.start||i!==t.suffix||a!==t.prefix||s!==t.separator||l!==t.decimals||u!==t.decimal||d!==t.className||o})),h(O(e),"createInstance",(function(){return"function"===typeof e.props.children&&u.default(e.containerRef.current&&(e.containerRef.current instanceof HTMLElement||e.containerRef.current instanceof SVGTextElement||e.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),w(e.containerRef.current,e.props)})),h(O(e),"pauseResume",(function(){var t=O(e),n=t.reset,r=t.restart,i=t.update,a=e.props.onPauseResume;e.instance.pauseResume(),a({reset:n,start:r,update:i})})),h(O(e),"reset",(function(){var t=O(e),n=t.pauseResume,r=t.restart,i=t.update,a=e.props.onReset;e.instance.reset(),a({pauseResume:n,start:r,update:i})})),h(O(e),"restart",(function(){e.reset(),e.start()})),h(O(e),"start",(function(){var t=O(e),n=t.pauseResume,r=t.reset,i=t.restart,a=t.update,o=e.props,c=o.delay,s=o.onEnd,l=o.onStart,u=function(){return e.instance.start((function(){return s({pauseResume:n,reset:r,start:i,update:a})}))};c>0?e.timeoutId=setTimeout(u,1e3*c):u(),l({pauseResume:n,reset:r,update:a})})),h(O(e),"update",(function(t){var n=O(e),r=n.pauseResume,i=n.reset,a=n.restart,o=e.props.onUpdate;e.instance.update(t),o({pauseResume:r,reset:i,start:a})})),h(O(e),"containerRef",l.default.createRef()),e}return t=a,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.end;return this.checkProps(e)||t!==e.end}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,r=t.preserveValue;this.checkProps(e)&&(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(r||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,i=this.containerRef,a=this.pauseResume,o=this.reset,c=this.restart,s=this.update;return"function"===typeof t?t({countUpRef:i,pauseResume:a,reset:o,start:c,update:s}):l.default.createElement("span",{className:n,ref:i,style:r})}}])&&j(t.prototype,n),r&&j(t,r),a}(i.Component);h(C,"propTypes",{decimal:s.default.string,decimals:s.default.number,delay:s.default.number,easingFn:s.default.func,end:s.default.number.isRequired,formattingFn:s.default.func,onEnd:s.default.func,onStart:s.default.func,prefix:s.default.string,redraw:s.default.bool,separator:s.default.string,start:s.default.number,startOnMount:s.default.bool,suffix:s.default.string,style:s.default.object,useEasing:s.default.bool,preserveValue:s.default.bool}),h(C,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var F={innerHTML:null};t.default=C,t.useCountUp=function(e){var t=f(f({},C.defaultProps),e),n=t.start,r=t.formattingFn,a=y(i.useState("function"===typeof r?r(n):n),2),o=a[0],c=a[1],s=i.useRef(null),l=i.useRef(null),u=function(){var e=s.current;if(null!==e)return e;var n=function(){var e=w(F,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);c(e)},e}();return s.current=n,n},d=function(){var e=t.onReset;u().reset(),e({pauseResume:b,start:p,update:j})},p=function e(){var n=t.onStart,r=t.onEnd;u().reset(),u().start((function(){r({pauseResume:b,reset:d,start:e,update:j})})),n({pauseResume:b,reset:d,update:j})},b=function(){var e=t.onPauseResume;u().pauseResume(),e({reset:d,start:p,update:j})},j=function(e){var n=t.onUpdate;u().update(e),n({pauseResume:b,reset:d,start:p})};return i.useEffect((function(){var e=t.delay,n=t.onStart,r=t.onEnd;return t.startOnMount&&(l.current=setTimeout((function(){n({pauseResume:b,reset:d,update:j}),u().start((function(){clearTimeout(l.current),r({pauseResume:b,reset:d,start:p,update:j})}))}),1e3*e)),function(){clearTimeout(l.current),d()}}),[]),{countUp:o,start:p,pauseResume:b,reset:d,update:j}}},899:function(e,t,n){"use strict";var r=function(){};e.exports=r},900:function(e,t,n){var r,i;void 0===(i="function"===typeof(r=function(e,t,n){return function(e,t,n,r,i,a){function o(e){var t,n,r,i,a,o,c=e<0;if(e=Math.abs(e).toFixed(l.decimals),n=(t=(e+="").split("."))[0],r=t.length>1?l.options.decimal+t[1]:"",l.options.useGrouping){for(i="",a=0,o=n.length;a<o;++a)0!==a&&a%3===0&&(i=l.options.separator+i),i=n[o-a-1]+i;n=i}return l.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return l.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return l.options.numerals[+e]}))),(c?"-":"")+l.options.prefix+n+r+l.options.suffix}function c(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t}function s(e){return"number"==typeof e&&!isNaN(e)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:c,formattingFn:o,prefix:"",suffix:"",numerals:[]},a&&"object"==typeof a)for(var u in l.options)a.hasOwnProperty(u)&&null!==a[u]&&(l.options[u]=a[u]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var d=0,p=["webkit","moz","ms","o"],f=0;f<p.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[p[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[p[f]+"CancelAnimationFrame"]||window[p[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-d)),i=window.setTimeout((function(){e(n+r)}),r);return d=n+r,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof e?document.getElementById(e):e,l.d?(l.startVal=Number(t),l.endVal=Number(n),s(l.startVal)&&s(l.endVal)?(l.decimals=Math.max(0,r||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(e){var t=l.options.formattingFn(e);"INPUT"===l.d.tagName?this.d.value=t:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=t:this.d.innerHTML=t},l.count=function(e){l.startTime||(l.startTime=e),l.timestamp=e;var t=e-l.startTime;l.remaining=l.duration-t,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(t,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(t,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(t/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(t/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),t<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(e){l.initialize()&&(l.callback=e,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(e){if(l.initialize()){if(!s(e=Number(e)))return void(l.error="[CountUp] update() - new endVal is not a number: "+e);l.error="",e!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=e,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)}})?r.call(t,n,t,e):r)||(e.exports=i)}}]);
//# sourceMappingURL=4.ded0cdb0.chunk.js.map