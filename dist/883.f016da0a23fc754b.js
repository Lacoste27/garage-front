"use strict";(self.webpackChunkdatta_able_free_angular_admin_template=self.webpackChunkdatta_able_free_angular_admin_template||[]).push([[883],{5883:(q,_,d)=>{d.r(_),d.d(_,{PaiementsModule:()=>I});var p=d(6895),s=d(8492),e=d(6270),t=d(4650),v=d(529),C=d(4932);let g=(()=>{class a{constructor(o,n){this.http=o,this.token=n,this.base_url="https://back-m1p10mean.onrender.com/paiements/"}getAll(){return this.http.get(this.base_url+"liste")}valider(o){const{nom:n,prenom:f,email:x}=this.token.GetUser();return this.http.post(this.base_url+"validation",{data:{valideur:{nom:n,prenom:f,email:x},paiement_id:o}})}}return a.\u0275fac=function(o){return new(o||a)(t.LFG(v.eN),t.LFG(C.B))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var Z=d(4631);const T=function(a){return["/paiements/etat/",a]};function A(a,l){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"date"),t.ALo(8,"date"),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"a",7),t._uU(13,"D\xe9tails"),t.qZA()()()),2&a){const o=l.$implicit;t.xp6(2),t.Oqu(o.client.nom),t.xp6(2),t.Oqu(o.voiture.numero),t.xp6(2),t.AsE(" ",t.lcZ(7,6,o.date_depot)," - ",t.xi3(8,8,o.date_depot,"shortTime")," "),t.xp6(4),t.Oqu(o.status),t.xp6(2),t.Q6J("routerLink",t.VKq(11,T,o._id))}}function b(a,l){1&a&&t._UZ(0,"span",8)}let U=(()=>{class a{constructor(o){this.paiementService=o,this.paiements=[],this.loading=!1}ngOnInit(){this.getAll()}getAll(){this.paiementService.getAll().subscribe({next:o=>{this.paiements=o.data.paiements}})}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(g))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-liste"]],standalone:!0,features:[t.jDz],decls:20,vars:3,consts:[[1,"row"],[1,"col-xl-12"],["cardTitle","Listes des r\xe9paration","blockClass","table-border-style",3,"options"],[1,"table-responsive"],[1,"table","table-striped","table-hover","table-responsive"],[4,"ngFor","ngForOf"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],[1,"label","theme-bg2","text-white","f-12","rounded-pill",3,"routerLink"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"app-card",2)(3,"div",3)(4,"table",4)(5,"thead")(6,"tr")(7,"th"),t._uU(8,"Client"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"V\xe9hicule"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Date de d\xe9p\xf4t"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Status"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Action"),t.qZA()()(),t.TgZ(17,"tbody"),t.YNc(18,A,14,13,"tr",5),t.qZA()(),t.YNc(19,b,1,0,"span",6),t.qZA()()()()),2&o&&(t.xp6(2),t.Q6J("options",!1),t.xp6(16),t.Q6J("ngForOf",n.paiements),t.xp6(1),t.Q6J("ngIf",n.loading))},dependencies:[p.ez,p.sg,p.O5,p.uU,e.m,Z.A,s.Bz,s.rH]}),a})();var r=d(8858),m=d(1195);function i(a,l){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"number"),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA()()),2&a){const o=l.$implicit;t.xp6(2),t.Oqu(o.cause),t.xp6(2),t.Oqu(o.solution),t.xp6(2),t.hij("",t.lcZ(7,4,o.prix)," Ar"),t.xp6(3),t.Oqu(o.etat)}}function c(a,l){1&a&&t._UZ(0,"span",17)}function u(a,l){1&a&&t._UZ(0,"span",17)}const y=[{path:"",children:[{path:"liste",component:U},{path:"etat/:id",component:(()=>{class a{constructor(o,n,f,x){this.reparationsService=o,this.paiementService=n,this.route=f,this.toast=x,this.loading=!1,this.total=0}ngOnInit(){this.etat()}etat(){this.loading=!0,this.route.params.subscribe(o=>{this.reparationsService.detailReparation(o.id).subscribe(n=>{1==n.success&&(this.loading=!1,this.reparation=n.data.reparation,this.setTotal())})})}setTotal(){this.reparation.reparation_faire.forEach(o=>{this.total+=Number(o.prix)})}valider(){this.loading=!0,this.paiementService.valider(this.reparation.paiement._id).subscribe({next:o=>{o.success&&(this.loading=!1,this.toast.ShowSuccess("Paiements",o.message.toString()))},error:o=>{this.loading=!1,this.toast.ShowError("Paiements",o.toString())}})}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(r.L),t.Y36(g),t.Y36(s.gz),t.Y36(m.k))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-etat"]],standalone:!0,features:[t.jDz],decls:128,vars:40,consts:[[1,"row"],[1,"col-lg-4","col-sm-12"],["cardTitle","Client","blockClass","table-border-style",3,"options"],[1,"container-info-vehicule"],[1,"label"],[1,"col-lg-3","col-sm-12"],["cardTitle","Voiture","blockClass","table-border-style",3,"options"],[1,"col-lg-5","col-sm-12"],["cardTitle","D\xe9tails","blockClass","table-border-style",3,"options"],[1,"col"],["cardTitle","Listes des r\xe9paration","blockClass","table-border-style",3,"options"],[1,"table-responsive"],[1,"table","table-striped","table-hover","table-responsive"],[4,"ngFor","ngForOf"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],["cardTitle","Paiements","blockClass","table-border-style",3,"options"],[1,"label","theme-bg2","text-white","f-12","rounded-pill",3,"click"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(o,n){1&o&&(t.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"app-card",2)(4,"div",3)(5,"p")(6,"span",4),t._uU(7,"Nom : "),t.qZA(),t.TgZ(8,"span"),t._uU(9),t.qZA()(),t._UZ(10,"hr"),t.TgZ(11,"p")(12,"span",4),t._uU(13,"Pr\xe9nom : "),t.qZA(),t.TgZ(14,"span"),t._uU(15),t.qZA()(),t._UZ(16,"hr"),t.TgZ(17,"p")(18,"span",4),t._uU(19,"Email : "),t.qZA(),t.TgZ(20,"span"),t._uU(21),t.qZA()()()()(),t.TgZ(22,"div",5)(23,"app-card",6)(24,"div",3)(25,"p")(26,"span",4),t._uU(27,"Num\xe9ro : "),t.qZA(),t.TgZ(28,"span"),t._uU(29),t.qZA()(),t._UZ(30,"hr"),t.TgZ(31,"p")(32,"span",4),t._uU(33,"Marque : "),t.qZA(),t.TgZ(34,"span"),t._uU(35),t.qZA()(),t._UZ(36,"hr"),t.TgZ(37,"p")(38,"span",4),t._uU(39,"Model : "),t.qZA(),t.TgZ(40,"span"),t._uU(41),t.qZA()()()()(),t.TgZ(42,"div",7)(43,"app-card",8)(44,"div",3)(45,"div",3)(46,"p")(47,"span",4),t._uU(48,"Date de d\xe9p\xf4t : "),t.qZA(),t.TgZ(49,"span"),t._uU(50),t.ALo(51,"date"),t.ALo(52,"date"),t.qZA()(),t.TgZ(53,"p")(54,"span",4),t._uU(55,"Date de sortie : "),t.qZA(),t.TgZ(56,"span"),t._uU(57),t.ALo(58,"date"),t.ALo(59,"date"),t.qZA()(),t.TgZ(60,"p")(61,"span",4),t._uU(62,"Montant total : "),t.qZA(),t.TgZ(63,"span"),t._uU(64),t.ALo(65,"number"),t.qZA()(),t.TgZ(66,"p")(67,"span",4),t._uU(68," \xc9tat des r\xe9parations : "),t.qZA(),t.TgZ(69,"span"),t._uU(70),t.qZA()()()()()()(),t.TgZ(71,"div",0)(72,"div",9)(73,"app-card",10)(74,"div",0)(75,"div",11)(76,"table",12)(77,"thead")(78,"tr")(79,"th"),t._uU(80,"Cause"),t.qZA(),t.TgZ(81,"th"),t._uU(82,"Solution"),t.qZA(),t.TgZ(83,"th"),t._uU(84,"Prix"),t.qZA(),t.TgZ(85,"th"),t._uU(86,"Etat"),t.qZA()()(),t.TgZ(87,"tbody"),t.YNc(88,i,10,6,"tr",13),t.qZA(),t.TgZ(89,"tfoot")(90,"tr"),t._UZ(91,"td"),t.TgZ(92,"td"),t._uU(93,"Total"),t.qZA(),t.TgZ(94,"td"),t._uU(95),t.ALo(96,"number"),t.qZA(),t._UZ(97,"td"),t.qZA()()()()(),t.YNc(98,c,1,0,"span",14),t.qZA()()(),t.TgZ(99,"div",0)(100,"div",9)(101,"app-card",15)(102,"div",0)(103,"div",11)(104,"table",12)(105,"thead")(106,"tr")(107,"th"),t._uU(108,"Date paiement"),t.qZA(),t.TgZ(109,"th"),t._uU(110,"Montant"),t.qZA(),t.TgZ(111,"th"),t._uU(112,"Mode"),t.qZA(),t.TgZ(113,"th"),t._uU(114,"Actions"),t.qZA()()(),t.TgZ(115,"tbody")(116,"tr")(117,"td"),t._uU(118),t.qZA(),t.TgZ(119,"td"),t._uU(120),t.ALo(121,"number"),t.qZA(),t.TgZ(122,"td"),t._uU(123),t.qZA(),t.TgZ(124,"td")(125,"button",16),t.NdJ("click",function(){return n.valider()}),t._uU(126," Valider "),t.YNc(127,u,1,0,"span",14),t.qZA()()()()()()()()()()()),2&o&&(t.xp6(3),t.Q6J("options",!1),t.xp6(6),t.hij("",n.reparation.client.nom," "),t.xp6(6),t.hij("",n.reparation.client.prenom," "),t.xp6(6),t.hij("",n.reparation.client.email," "),t.xp6(2),t.Q6J("options",!1),t.xp6(6),t.hij("",n.reparation.voiture.numero," "),t.xp6(6),t.hij("",n.reparation.voiture.marque," "),t.xp6(6),t.hij("",n.reparation.voiture.model," "),t.xp6(2),t.Q6J("options",!1),t.xp6(7),t.AsE("",t.lcZ(51,24,n.reparation.date_depot)," - ",t.xi3(52,26,n.reparation.date_depot,"shortTime")," "),t.xp6(7),t.AsE("",t.lcZ(58,29,n.reparation.date_sortie)," - ",t.xi3(59,31,n.reparation.date_sortie,"shortTime")," "),t.xp6(7),t.hij("",t.lcZ(65,34,n.total)," Ar"),t.xp6(6),t.hij("",n.reparation.status," "),t.xp6(3),t.Q6J("options",!0),t.xp6(15),t.Q6J("ngForOf",n.reparation.reparation_faire),t.xp6(7),t.hij("",t.lcZ(96,36,n.total)," Ar"),t.xp6(3),t.Q6J("ngIf",n.loading),t.xp6(3),t.Q6J("options",!0),t.xp6(17),t.Oqu(n.reparation.paiement.date),t.xp6(2),t.hij("",t.lcZ(121,38,n.reparation.paiement.recu)," Ar"),t.xp6(3),t.Oqu(n.reparation.paiement.mode),t.xp6(4),t.Q6J("ngIf",n.loading))},dependencies:[e.m,p.sg,p.O5,Z.A,p.JJ,p.uU,p.ez]}),a})()}],canActivate:[d(8332).L]}];let J=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[s.Bz.forChild(y),s.Bz]}),a})(),I=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[p.ez,J]}),a})()},4631:(q,_,d)=>{d.d(_,{A:()=>U});var p=d(2953),s=d(7340),e=d(4650),t=d(6895);function v(r,m){if(1&r&&(e.TgZ(0,"h5"),e._uU(1),e.qZA()),2&r){const i=e.oxw(2);e.xp6(1),e.Oqu(i.cardTitle)}}function C(r,m){if(1&r){const i=e.EpF();e.TgZ(0,"div",8)(1,"div",9)(2,"button",10),e._UZ(3,"i",11),e.qZA(),e.TgZ(4,"ul",12)(5,"li",13),e.NdJ("click",function(){e.CHM(i);const u=e.oxw(2),h=e.MAs(1);return e.KtG(u.fullCardToggle(h,"",!0))}),e.TgZ(6,"a",14)(7,"span"),e._UZ(8,"i",15),e._uU(9),e.qZA()()(),e.TgZ(10,"li",16),e.NdJ("click",function(u){e.CHM(i);const h=e.oxw(2);return e.KtG(h.collapsedCardToggle(u))}),e.TgZ(11,"a",14)(12,"span"),e._UZ(13,"i",15),e._uU(14),e.qZA(),e.TgZ(15,"span",17),e._UZ(16,"i",18),e.qZA()()(),e.TgZ(17,"li",19),e.NdJ("click",function(){e.CHM(i);const u=e.oxw(2);return e.KtG(u.cardRefresh())}),e.TgZ(18,"a",14),e._UZ(19,"i",20),e._uU(20," Reload"),e.qZA()(),e.TgZ(21,"li",21),e.NdJ("click",function(){e.CHM(i);const u=e.oxw(2);return e.KtG(u.cardRemoveAction())}),e.TgZ(22,"a",14),e._UZ(23,"i",22),e._uU(24," Remove"),e.qZA()()()()()}if(2&r){const i=e.oxw(2);e.xp6(8),e.Q6J("ngClass",i.fullIcon),e.xp6(1),e.hij(" ","full-card"===i.cardClass?"Restore":"Maximize",""),e.xp6(4),e.Q6J("ngClass",i.collapsedIcon),e.xp6(1),e.hij(" ","collapsed"===i.collapsedCard?"Expand":"Collapse"," ")}}function g(r,m){1&r&&e.Hsn(0,1,["*ngIf","customHeader"])}function Z(r,m){if(1&r&&(e.TgZ(0,"div",5),e.YNc(1,v,2,1,"h5",6),e.YNc(2,C,25,4,"div",7),e.YNc(3,g,1,0,"ng-content",6),e.qZA()),2&r){const i=e.oxw();e.Q6J("ngClass",i.headerClass),e.xp6(1),e.Q6J("ngIf",!i.customHeader),e.xp6(1),e.Q6J("ngIf",i.options&&!i.customHeader),e.xp6(1),e.Q6J("ngIf",i.customHeader)}}function T(r,m){1&r&&(e.TgZ(0,"div",23),e._UZ(1,"i",24),e.qZA())}const A=["*",[["",8,"app-card-header"]]],b=["*",".app-card-header"];let U=(()=>{class r{constructor(i){i.placement="bottom-right",this.customHeader=!1,this.options=!0,this.hidHeader=!1,this.cardTitle="Card Title",this.fullIcon="icon-maximize",this.isAnimating=!1,this.collapsedCard="expanded",this.collapsedIcon="icon-minus",this.loadCard=!1,this.cardRemove="open"}ngOnInit(){(!this.options||this.hidHeader||this.customHeader)&&(this.collapsedCard="false")}fullCardToggle(i,c,u){c="full-card"===this.cardClass?"zoomOut":"zoomIn",this.fullIcon="full-card"===this.cardClass?"icon-maximize":"icon-minimize",this.cardClass="full-card"===this.cardClass?this.cardClass:"full-card",u&&(this.animation=c),this.isAnimating=!0,setTimeout(()=>{this.cardClass="zoomOut"===c?"":this.cardClass,"full-card"===this.cardClass?document.querySelector("body").style.overflow="hidden":document.querySelector("body").removeAttribute("style")},500)}collapsedCardToggle(i){this.collapsedCard="collapsed"===this.collapsedCard?"expanded":"collapsed",this.collapsedIcon="collapsed"===this.collapsedCard?"icon-plus":"icon-minus"}cardRefresh(){this.loadCard=!0,this.cardClass="card-load",setTimeout(()=>{this.loadCard=!1,this.cardClass="expanded"},3e3)}cardRemoveAction(){this.cardRemove="closed"===this.cardRemove?"open":"closed"}}return r.\u0275fac=function(i){return new(i||r)(e.Y36(p.jL))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-card"]],inputs:{cardTitle:"cardTitle",cardClass:"cardClass",blockClass:"blockClass",headerClass:"headerClass",options:"options",hidHeader:"hidHeader",customHeader:"customHeader"},features:[e._Bn([p.jL])],ngContentSelectors:b,decls:7,vars:6,consts:[[1,"card",3,"ngClass"],["toAnimate",""],["class","card-header",3,"ngClass",4,"ngIf"],[1,"card-block",3,"ngClass"],["class","card-loader",4,"ngIf"],[1,"card-header",3,"ngClass"],[4,"ngIf"],["class","card-header-right",4,"ngIf"],[1,"card-header-right"],["ngbDropdown","",1,"btn-group","card-option","dropdown"],["type","button","ngbDropdownToggle","",1,"btn","dropdown-toggle","btn-icon"],[1,"feather","icon-more-horizontal"],["ngbDropdownMenu","",1,"list-unstyled","card-option","dropdown-menu","dropdown-menu-right"],[1,"dropdown-item","full-card",3,"click"],["href","javascript:"],[1,"feather",3,"ngClass"],[1,"dropdown-item","minimize-card",3,"click"],[2,"display","none"],[1,"feather","icon-plus"],[1,"dropdown-item","reload-card",3,"click"],[1,"feather","icon-refresh-cw"],[1,"dropdown-item","close-card",3,"click"],[1,"feather","icon-trash"],[1,"card-loader"],[1,"pct-loader1","anim-rotate"]],template:function(i,c){1&i&&(e.F$t(A),e.TgZ(0,"div",0,1),e.YNc(2,Z,4,4,"div",2),e.TgZ(3,"div")(4,"div",3),e.Hsn(5),e.qZA()(),e.YNc(6,T,2,0,"div",4),e.qZA()),2&i&&(e.Q6J("ngClass",c.cardClass)("@cardRemove",c.cardRemove),e.xp6(2),e.Q6J("ngIf",!c.hidHeader),e.xp6(1),e.Q6J("@collapsedCard",c.collapsedCard),e.xp6(1),e.Q6J("ngClass",c.blockClass),e.xp6(2),e.Q6J("ngIf",c.loadCard))},dependencies:[t.mk,t.O5,p.jt,p.iD,p.Vi],styles:[".card.full-card[_ngcontent-%COMP%]{position:fixed!important;top:0!important;left:0!important;z-index:99999;border-radius:0;width:100vw!important;height:100vh!important}"],data:{animation:[(0,s.X$)("collapsedCard",[(0,s.SB)("collapsed, void",(0,s.oB)({overflow:"hidden",height:"0px"})),(0,s.SB)("expanded",(0,s.oB)({overflow:"hidden",height:s.l3})),(0,s.eR)("collapsed <=> expanded",[(0,s.jt)("400ms ease-in-out")])]),(0,s.X$)("cardRemove",[(0,s.SB)("open",(0,s.oB)({opacity:1})),(0,s.SB)("closed",(0,s.oB)({opacity:0,display:"none"})),(0,s.eR)("open <=> closed",(0,s.jt)("400ms"))])]}}),r})()}}]);