"use strict";(self.webpackChunkdatta_able_free_angular_admin_template=self.webpackChunkdatta_able_free_angular_admin_template||[]).push([[592],{3301:(f,h,i)=>{i.d(h,{f:()=>u});var d=i(529),a=i(1571),e=i(9569),p=i(3941);let u=(()=>{class l{constructor(r,c,C){this.http=r,this.router=c,this.authService=C,this.base_url="https://back-m1p10mean.onrender.com/users/",this.headers=(new d.WM).set("Content-Type","application/json")}listVoitures(){let r=this.base_url+"voitures";return this.headers.set("Authorization","Bearer "+localStorage.getItem("access_token")),this.http.get(r,{headers:this.headers})}ajouterVoiture(r){let c=this.base_url+"voitures";return this.headers.set("Authorization","Bearer "+localStorage.getItem("access_token")),this.http.post(c,r,{headers:this.headers})}deposerVoiture(r){let c=this.base_url+r+"/depot";return this.headers.set("Authorization","Bearer "+localStorage.getItem("access_token")),this.http.get(c,{headers:this.headers})}listReparations(){let r=this.base_url+"reparations";return this.headers.set("Authorization","Bearer "+localStorage.getItem("access_token")),this.http.get(r,{headers:this.headers})}}return l.\u0275fac=function(r){return new(r||l)(a.LFG(d.eN),a.LFG(e.F0),a.LFG(p.g))},l.\u0275prov=a.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},4631:(f,h,i)=>{i.d(h,{A:()=>T});var d=i(9061),a=i(7340),e=i(1571),p=i(6895);function u(o,_){if(1&o&&(e.TgZ(0,"h5"),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Oqu(t.cardTitle)}}function l(o,_){if(1&o){const t=e.EpF();e.TgZ(0,"div",8)(1,"div",9)(2,"button",10),e._UZ(3,"i",11),e.qZA(),e.TgZ(4,"ul",12)(5,"li",13),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2),g=e.MAs(1);return e.KtG(n.fullCardToggle(g,"",!0))}),e.TgZ(6,"a",14)(7,"span"),e._UZ(8,"i",15),e._uU(9),e.qZA()()(),e.TgZ(10,"li",16),e.NdJ("click",function(n){e.CHM(t);const g=e.oxw(2);return e.KtG(g.collapsedCardToggle(n))}),e.TgZ(11,"a",14)(12,"span"),e._UZ(13,"i",15),e._uU(14),e.qZA(),e.TgZ(15,"span",17),e._UZ(16,"i",18),e.qZA()()(),e.TgZ(17,"li",19),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.cardRefresh())}),e.TgZ(18,"a",14),e._UZ(19,"i",20),e._uU(20," Reload"),e.qZA()(),e.TgZ(21,"li",21),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.cardRemoveAction())}),e.TgZ(22,"a",14),e._UZ(23,"i",22),e._uU(24," Remove"),e.qZA()()()()()}if(2&o){const t=e.oxw(2);e.xp6(8),e.Q6J("ngClass",t.fullIcon),e.xp6(1),e.hij(" ","full-card"===t.cardClass?"Restore":"Maximize",""),e.xp6(4),e.Q6J("ngClass",t.collapsedIcon),e.xp6(1),e.hij(" ","collapsed"===t.collapsedCard?"Expand":"Collapse"," ")}}function m(o,_){1&o&&e.Hsn(0,1,["*ngIf","customHeader"])}function r(o,_){if(1&o&&(e.TgZ(0,"div",5),e.YNc(1,u,2,1,"h5",6),e.YNc(2,l,25,4,"div",7),e.YNc(3,m,1,0,"ng-content",6),e.qZA()),2&o){const t=e.oxw();e.Q6J("ngClass",t.headerClass),e.xp6(1),e.Q6J("ngIf",!t.customHeader),e.xp6(1),e.Q6J("ngIf",t.options&&!t.customHeader),e.xp6(1),e.Q6J("ngIf",t.customHeader)}}function c(o,_){1&o&&(e.TgZ(0,"div",23),e._UZ(1,"i",24),e.qZA())}const C=["*",[["",8,"app-card-header"]]],v=["*",".app-card-header"];let T=(()=>{class o{constructor(t){t.placement="bottom-right",this.customHeader=!1,this.options=!0,this.hidHeader=!1,this.cardTitle="Card Title",this.fullIcon="icon-maximize",this.isAnimating=!1,this.collapsedCard="expanded",this.collapsedIcon="icon-minus",this.loadCard=!1,this.cardRemove="open"}ngOnInit(){(!this.options||this.hidHeader||this.customHeader)&&(this.collapsedCard="false")}fullCardToggle(t,s,n){s="full-card"===this.cardClass?"zoomOut":"zoomIn",this.fullIcon="full-card"===this.cardClass?"icon-maximize":"icon-minimize",this.cardClass="full-card"===this.cardClass?this.cardClass:"full-card",n&&(this.animation=s),this.isAnimating=!0,setTimeout(()=>{this.cardClass="zoomOut"===s?"":this.cardClass,"full-card"===this.cardClass?document.querySelector("body").style.overflow="hidden":document.querySelector("body").removeAttribute("style")},500)}collapsedCardToggle(t){this.collapsedCard="collapsed"===this.collapsedCard?"expanded":"collapsed",this.collapsedIcon="collapsed"===this.collapsedCard?"icon-plus":"icon-minus"}cardRefresh(){this.loadCard=!0,this.cardClass="card-load",setTimeout(()=>{this.loadCard=!1,this.cardClass="expanded"},3e3)}cardRemoveAction(){this.cardRemove="closed"===this.cardRemove?"open":"closed"}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.jL))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-card"]],inputs:{cardTitle:"cardTitle",cardClass:"cardClass",blockClass:"blockClass",headerClass:"headerClass",options:"options",hidHeader:"hidHeader",customHeader:"customHeader"},features:[e._Bn([d.jL])],ngContentSelectors:v,decls:7,vars:6,consts:[[1,"card",3,"ngClass"],["toAnimate",""],["class","card-header",3,"ngClass",4,"ngIf"],[1,"card-block",3,"ngClass"],["class","card-loader",4,"ngIf"],[1,"card-header",3,"ngClass"],[4,"ngIf"],["class","card-header-right",4,"ngIf"],[1,"card-header-right"],["ngbDropdown","",1,"btn-group","card-option","dropdown"],["type","button","ngbDropdownToggle","",1,"btn","dropdown-toggle","btn-icon"],[1,"feather","icon-more-horizontal"],["ngbDropdownMenu","",1,"list-unstyled","card-option","dropdown-menu","dropdown-menu-right"],[1,"dropdown-item","full-card",3,"click"],["href","javascript:"],[1,"feather",3,"ngClass"],[1,"dropdown-item","minimize-card",3,"click"],[2,"display","none"],[1,"feather","icon-plus"],[1,"dropdown-item","reload-card",3,"click"],[1,"feather","icon-refresh-cw"],[1,"dropdown-item","close-card",3,"click"],[1,"feather","icon-trash"],[1,"card-loader"],[1,"pct-loader1","anim-rotate"]],template:function(t,s){1&t&&(e.F$t(C),e.TgZ(0,"div",0,1),e.YNc(2,r,4,4,"div",2),e.TgZ(3,"div")(4,"div",3),e.Hsn(5),e.qZA()(),e.YNc(6,c,2,0,"div",4),e.qZA()),2&t&&(e.Q6J("ngClass",s.cardClass)("@cardRemove",s.cardRemove),e.xp6(2),e.Q6J("ngIf",!s.hidHeader),e.xp6(1),e.Q6J("@collapsedCard",s.collapsedCard),e.xp6(1),e.Q6J("ngClass",s.blockClass),e.xp6(2),e.Q6J("ngIf",s.loadCard))},dependencies:[p.mk,p.O5,d.jt,d.iD,d.Vi],styles:[".card.full-card[_ngcontent-%COMP%]{position:fixed!important;top:0!important;left:0!important;z-index:99999;border-radius:0;width:100vw!important;height:100vh!important}"],data:{animation:[(0,a.X$)("collapsedCard",[(0,a.SB)("collapsed, void",(0,a.oB)({overflow:"hidden",height:"0px"})),(0,a.SB)("expanded",(0,a.oB)({overflow:"hidden",height:a.l3})),(0,a.eR)("collapsed <=> expanded",[(0,a.jt)("400ms ease-in-out")])]),(0,a.X$)("cardRemove",[(0,a.SB)("open",(0,a.oB)({opacity:1})),(0,a.SB)("closed",(0,a.oB)({opacity:0,display:"none"})),(0,a.eR)("open <=> closed",(0,a.jt)("400ms"))])]}}),o})()}}]);