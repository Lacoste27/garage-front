"use strict";(self.webpackChunkdatta_able_free_angular_admin_template=self.webpackChunkdatta_able_free_angular_admin_template||[]).push([[592],{4631:(T,p,i)=>{i.d(p,{A:()=>v});var l=i(9061),t=i(7340),e=i(1571),r=i(6895);function _(o,s){if(1&o&&(e.TgZ(0,"h5"),e._uU(1),e.qZA()),2&o){const a=e.oxw(2);e.xp6(1),e.Oqu(a.cardTitle)}}function m(o,s){if(1&o){const a=e.EpF();e.TgZ(0,"div",8)(1,"div",9)(2,"button",10),e._UZ(3,"i",11),e.qZA(),e.TgZ(4,"ul",12)(5,"li",13),e.NdJ("click",function(){e.CHM(a);const n=e.oxw(2),c=e.MAs(1);return e.KtG(n.fullCardToggle(c,"",!0))}),e.TgZ(6,"a",14)(7,"span"),e._UZ(8,"i",15),e._uU(9),e.qZA()()(),e.TgZ(10,"li",16),e.NdJ("click",function(n){e.CHM(a);const c=e.oxw(2);return e.KtG(c.collapsedCardToggle(n))}),e.TgZ(11,"a",14)(12,"span"),e._UZ(13,"i",15),e._uU(14),e.qZA(),e.TgZ(15,"span",17),e._UZ(16,"i",18),e.qZA()()(),e.TgZ(17,"li",19),e.NdJ("click",function(){e.CHM(a);const n=e.oxw(2);return e.KtG(n.cardRefresh())}),e.TgZ(18,"a",14),e._UZ(19,"i",20),e._uU(20," Reload"),e.qZA()(),e.TgZ(21,"li",21),e.NdJ("click",function(){e.CHM(a);const n=e.oxw(2);return e.KtG(n.cardRemoveAction())}),e.TgZ(22,"a",14),e._UZ(23,"i",22),e._uU(24," Remove"),e.qZA()()()()()}if(2&o){const a=e.oxw(2);e.xp6(8),e.Q6J("ngClass",a.fullIcon),e.xp6(1),e.hij(" ","full-card"===a.cardClass?"Restore":"Maximize",""),e.xp6(4),e.Q6J("ngClass",a.collapsedIcon),e.xp6(1),e.hij(" ","collapsed"===a.collapsedCard?"Expand":"Collapse"," ")}}function C(o,s){1&o&&e.Hsn(0,1,["*ngIf","customHeader"])}function h(o,s){if(1&o&&(e.TgZ(0,"div",5),e.YNc(1,_,2,1,"h5",6),e.YNc(2,m,25,4,"div",7),e.YNc(3,C,1,0,"ng-content",6),e.qZA()),2&o){const a=e.oxw();e.Q6J("ngClass",a.headerClass),e.xp6(1),e.Q6J("ngIf",!a.customHeader),e.xp6(1),e.Q6J("ngIf",a.options&&!a.customHeader),e.xp6(1),e.Q6J("ngIf",a.customHeader)}}function u(o,s){1&o&&(e.TgZ(0,"div",23),e._UZ(1,"i",24),e.qZA())}const g=["*",[["",8,"app-card-header"]]],f=["*",".app-card-header"];let v=(()=>{class o{constructor(a){a.placement="bottom-right",this.customHeader=!1,this.options=!0,this.hidHeader=!1,this.cardTitle="Card Title",this.fullIcon="icon-maximize",this.isAnimating=!1,this.collapsedCard="expanded",this.collapsedIcon="icon-minus",this.loadCard=!1,this.cardRemove="open"}ngOnInit(){(!this.options||this.hidHeader||this.customHeader)&&(this.collapsedCard="false")}fullCardToggle(a,d,n){d="full-card"===this.cardClass?"zoomOut":"zoomIn",this.fullIcon="full-card"===this.cardClass?"icon-maximize":"icon-minimize",this.cardClass="full-card"===this.cardClass?this.cardClass:"full-card",n&&(this.animation=d),this.isAnimating=!0,setTimeout(()=>{this.cardClass="zoomOut"===d?"":this.cardClass,"full-card"===this.cardClass?document.querySelector("body").style.overflow="hidden":document.querySelector("body").removeAttribute("style")},500)}collapsedCardToggle(a){this.collapsedCard="collapsed"===this.collapsedCard?"expanded":"collapsed",this.collapsedIcon="collapsed"===this.collapsedCard?"icon-plus":"icon-minus"}cardRefresh(){this.loadCard=!0,this.cardClass="card-load",setTimeout(()=>{this.loadCard=!1,this.cardClass="expanded"},3e3)}cardRemoveAction(){this.cardRemove="closed"===this.cardRemove?"open":"closed"}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(l.jL))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-card"]],inputs:{cardTitle:"cardTitle",cardClass:"cardClass",blockClass:"blockClass",headerClass:"headerClass",options:"options",hidHeader:"hidHeader",customHeader:"customHeader"},features:[e._Bn([l.jL])],ngContentSelectors:f,decls:7,vars:6,consts:[[1,"card",3,"ngClass"],["toAnimate",""],["class","card-header",3,"ngClass",4,"ngIf"],[1,"card-block",3,"ngClass"],["class","card-loader",4,"ngIf"],[1,"card-header",3,"ngClass"],[4,"ngIf"],["class","card-header-right",4,"ngIf"],[1,"card-header-right"],["ngbDropdown","",1,"btn-group","card-option","dropdown"],["type","button","ngbDropdownToggle","",1,"btn","dropdown-toggle","btn-icon"],[1,"feather","icon-more-horizontal"],["ngbDropdownMenu","",1,"list-unstyled","card-option","dropdown-menu","dropdown-menu-right"],[1,"dropdown-item","full-card",3,"click"],["href","javascript:"],[1,"feather",3,"ngClass"],[1,"dropdown-item","minimize-card",3,"click"],[2,"display","none"],[1,"feather","icon-plus"],[1,"dropdown-item","reload-card",3,"click"],[1,"feather","icon-refresh-cw"],[1,"dropdown-item","close-card",3,"click"],[1,"feather","icon-trash"],[1,"card-loader"],[1,"pct-loader1","anim-rotate"]],template:function(a,d){1&a&&(e.F$t(g),e.TgZ(0,"div",0,1),e.YNc(2,h,4,4,"div",2),e.TgZ(3,"div")(4,"div",3),e.Hsn(5),e.qZA()(),e.YNc(6,u,2,0,"div",4),e.qZA()),2&a&&(e.Q6J("ngClass",d.cardClass)("@cardRemove",d.cardRemove),e.xp6(2),e.Q6J("ngIf",!d.hidHeader),e.xp6(1),e.Q6J("@collapsedCard",d.collapsedCard),e.xp6(1),e.Q6J("ngClass",d.blockClass),e.xp6(2),e.Q6J("ngIf",d.loadCard))},dependencies:[r.mk,r.O5,l.jt,l.iD,l.Vi],styles:[".card.full-card[_ngcontent-%COMP%]{position:fixed!important;top:0!important;left:0!important;z-index:99999;border-radius:0;width:100vw!important;height:100vh!important}"],data:{animation:[(0,t.X$)("collapsedCard",[(0,t.SB)("collapsed, void",(0,t.oB)({overflow:"hidden",height:"0px"})),(0,t.SB)("expanded",(0,t.oB)({overflow:"hidden",height:t.l3})),(0,t.eR)("collapsed <=> expanded",[(0,t.jt)("400ms ease-in-out")])]),(0,t.X$)("cardRemove",[(0,t.SB)("open",(0,t.oB)({opacity:1})),(0,t.SB)("closed",(0,t.oB)({opacity:0,display:"none"})),(0,t.eR)("open <=> closed",(0,t.jt)("400ms"))])]}}),o})()}}]);