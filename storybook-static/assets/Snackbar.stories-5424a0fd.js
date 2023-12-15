import{j as e,a as m}from"./jsx-runtime-29545a09.js";import{P as a}from"./index-8d47fad6.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const p={error:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",warning:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",information:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",success:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"},d={error:"an error",warning:"a warning",information:"an information",success:"a success"};const s=({variant:o,message:r,position:c,slideDirection:u})=>e("div",{className:`testArea ${c}`,children:e("div",{className:`toastWrapper ${o} ${u}`,children:m("div",{className:"toast",children:[e("svg",{className:"icon",viewBox:"0 0 24 24",children:e("path",{d:p[`${o}`]})}),e("div",{className:"text",children:r?`${r}`:`This is ${d[`${o}`]} message`}),e("div",{className:"closeBtn",children:e("svg",{className:"closeBtnIcon",viewBox:"0 0 24 24",children:e("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})})})]})})});s.defaultProps={variant:"warning",message:"",position:"top-left",slideDirection:"left"};s.propTypes={variant:a.oneOf(["error","warning","information","success"]),message:a.string,position:a.oneOf(["top-left","top-center","top-right","bottom-right","bottom-center","bottom-left"]),slideDirection:a.oneOf(["left","right","up","down"])};s.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{variant:{defaultValue:{value:"'warning'",computed:!1},description:"",type:{name:"enum",value:[{value:"'error'",computed:!1},{value:"'warning'",computed:!1},{value:"'information'",computed:!1},{value:"'success'",computed:!1}]},required:!1},message:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},position:{defaultValue:{value:"'top-left'",computed:!1},description:"",type:{name:"enum",value:[{value:"'top-left'",computed:!1},{value:"'top-center'",computed:!1},{value:"'top-right'",computed:!1},{value:"'bottom-right'",computed:!1},{value:"'bottom-center'",computed:!1},{value:"'bottom-left'",computed:!1}]},required:!1},slideDirection:{defaultValue:{value:"'left'",computed:!1},description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1},{value:"'up'",computed:!1},{value:"'down'",computed:!1}]},required:!1}}};const L={title:"Example/Snackbar",component:s,tags:["autodocs"]},t={args:{size:"m"}};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'm'
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const b=["Dark"];export{t as Dark,b as __namedExportsOrder,L as default};