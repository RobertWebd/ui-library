import{a,j as e}from"./jsx-runtime-29545a09.js";import{P as c}from"./index-8d47fad6.js";import{r as n}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const s=({title:o,subTitle:t,theme:d})=>{const[M,m]=n.useState(!1),[p,N]=n.useState(!1),u=n.useRef(null),k=()=>{m(!0)},C=()=>{u.current.classList.add("animExit"),setTimeout(()=>m(!1),"200")},r=()=>{N(!p)};return a("div",{className:"wrapper",children:[e("button",{onClick:k,children:"Show Modal"}),e("div",{className:"modal_wrapper copyWrapper",children:a("div",{className:`modal ${d} copyModal`,children:[e("div",{className:"title copyModal",children:o}),e("div",{className:"subTitle copySubtitle",children:t}),e("button",{className:"copyBtn",children:"OPEN CHILD MODAL"})]})}),M&&e("div",{onClick:C,className:"modal_wrapper",children:a("div",{ref:u,onClick:i=>i.stopPropagation(),className:`modal ${d}`,children:[e("div",{className:"title",children:o}),e("div",{className:"subTitle",children:t}),e("button",{onClick:r,children:"OPEN CHILD MODAL"})]})}),p&&e("div",{onClick:r,className:"modal_wrapper modal_wrapperChild",children:a("div",{onClick:i=>i.stopPropagation(),className:`modal ${d} childModal`,children:[e("div",{className:"title",children:o}),e("div",{className:"subTitle",children:t}),e("button",{onClick:r,children:"CLOSE CHILD MODAL"})]})})]})};s.defaultProps={title:"Lorem ipsum",subTitle:"Lorem ipsum i td tam fot",theme:"dark"};s.propTypes={title:c.string,subTitle:c.string,theme:c.oneOf(["dark","bright"])};s.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{title:{defaultValue:{value:"'Lorem ipsum'",computed:!1},description:"",type:{name:"string"},required:!1},subTitle:{defaultValue:{value:"'Lorem ipsum i td tam fot'",computed:!1},description:"",type:{name:"string"},required:!1},theme:{defaultValue:{value:"'dark'",computed:!1},description:"",type:{name:"enum",value:[{value:"'dark'",computed:!1},{value:"'bright'",computed:!1}]},required:!1}}};const y={title:"Example/Modal",component:s,tags:["autodocs"]},l={args:{theme:"dark"}};var h,f,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    theme: 'dark'
  }
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const S=["Dark"];export{l as Dark,S as __namedExportsOrder,y as default};
