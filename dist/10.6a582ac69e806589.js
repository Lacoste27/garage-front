"use strict";(self.webpackChunkdatta_able_free_angular_admin_template=self.webpackChunkdatta_able_free_angular_admin_template||[]).push([[10],{9010:(j,m,i)=>{i.r(m),i.d(m,{ReparationsModule:()=>S});var o=i(6895),s=i(9569),p=(()=>{return(t=p||(p={})).deposer="Deposer",t.encours="En cours de r\xe9paration",t.fini="Sortie",p;var t})(),e=i(1571),l=i(8858),u=i(4631);const g=function(t){return["/reparations/details",t]};function A(t,r){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.ALo(7,"date"),e.ALo(8,"date"),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"a",7),e._uU(13,"D\xe9tails"),e.qZA()()()),2&t){const a=r.$implicit;e.xp6(2),e.Oqu(a.client.nom),e.xp6(2),e.Oqu(a.voiture.numero),e.xp6(2),e.AsE(" ",e.lcZ(7,6,a.date_depot)," - ",e.xi3(8,8,a.date_depot,"shortTime")," "),e.xp6(4),e.Oqu(a.status),e.xp6(2),e.Q6J("routerLink",e.VKq(11,g,a._id))}}function f(t,r){1&t&&e._UZ(0,"span",8)}let T=(()=>{class t{constructor(a){this.reparationService=a,this.loading=!1,this.reparations=[]}ngOnInit(){this.reparationService.listeReparation(p.deposer).subscribe(a=>{1==a.success&&(console.log(a),this.reparations=a.data.reparartions,this.loading=!1)})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(l.L))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-liste"]],decls:20,vars:3,consts:[[1,"row"],[1,"col-xl-12"],["cardTitle","Listes des r\xe9paration","blockClass","table-border-style",3,"options"],[1,"table-responsive"],[1,"table","table-striped","table-hover","table-responsive"],[4,"ngFor","ngForOf"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],[1,"label","theme-bg2","text-white","f-12","rounded-pill",3,"routerLink"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"app-card",2)(3,"div",3)(4,"table",4)(5,"thead")(6,"tr")(7,"th"),e._uU(8,"Client"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"V\xe9hicule"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Date de d\xe9p\xf4t"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Status"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Action"),e.qZA()()(),e.TgZ(17,"tbody"),e.YNc(18,A,14,13,"tr",5),e.qZA()(),e.YNc(19,f,1,0,"span",6),e.qZA()()()()),2&a&&(e.xp6(2),e.Q6J("options",!1),e.xp6(16),e.Q6J("ngForOf",n.reparations),e.xp6(1),e.Q6J("ngIf",n.loading))},dependencies:[o.sg,o.O5,s.rH,u.A,o.uU]}),t})();var _=i(6337),h=i(6270),v=i(4932),b=i(529);let U=(()=>{class t{constructor(a,n){this.token=a,this.http=n,this.base_url="https://back-m1p10mean.onrender.com/responsables/atelier/"}reception(a){const c={data:{reparateur:this.token.GetUser(),reparation_id:a}};return this.http.post(this.base_url+"reception",c)}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(v.B),e.LFG(b.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var q=i(1195);function x(t,r){1&t&&e._UZ(0,"span",14)}function C(t,r){if(1&t&&(e.TgZ(0,"div",15)(1,"app-card",16)(2,"div",4)(3,"div",4)(4,"p")(5,"span",5),e._uU(6,"Cause : "),e.qZA(),e.TgZ(7,"span"),e._uU(8),e.qZA()(),e.TgZ(9,"p")(10,"span",5),e._uU(11,"Solution : "),e.qZA(),e.TgZ(12,"span"),e._uU(13),e.qZA()(),e.TgZ(14,"p")(15,"span",5),e._uU(16,"Prix : "),e.qZA(),e.TgZ(17,"span"),e._uU(18),e.ALo(19,"currency"),e.qZA()(),e.TgZ(20,"p")(21,"span",5),e._uU(22,"Etat : "),e.qZA(),e.TgZ(23,"span"),e._uU(24),e.qZA()()()()()()),2&t){const a=r.$implicit,n=r.index;e.xp6(1),e.MGl("cardTitle","Num ",n+1,""),e.Q6J("options",!1),e.xp6(7),e.hij("",a.cause," "),e.xp6(5),e.hij("",a.solution," "),e.xp6(5),e.hij("",e.gM2(19,6,a.prix,"Ar ","symbol","4.2-2")," "),e.xp6(6),e.hij("",a.etat," ")}}let E=(()=>{class t{constructor(a,n,d,c,Z){this.route=a,this.router=n,this.reparationsService=d,this.atelierService=c,this.toast=Z,this.loading=!1,this.disable=!1}ngOnInit(){this.loading=!0,this.route.params.subscribe(a=>{this.id=a.id,this.reparationsService.detailReparation(this.id).subscribe(n=>{1==n.success&&(console.log(n.data),this.loading=!1,this.reparation=n.data.reparation)})})}receptionner(){this.loading=!0,this.atelierService.reception(this.reparation._id).subscribe({next:a=>{a.success&&(this.loading=!1,this.disable=!0,this.toast.ShowSuccess("Mise \xe0 jour",a.message.toString()))}})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(s.gz),e.Y36(s.F0),e.Y36(l.L),e.Y36(U),e.Y36(q.k))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-details"]],standalone:!0,features:[e.jDz],decls:98,vars:32,consts:[[1,"row"],[1,"col-xl-4"],[1,"col-xl-12"],["cardTitle","Client","blockClass","table-border-style",3,"options"],[1,"container-info-vehicule"],[1,"label"],["cardTitle","V\xe9hicule","blockClass","table-border-style",3,"options"],["cardTitle","R\xe9parateur","blockClass","table-border-style",3,"options"],["cardTitle","Paiement","blockClass","table-border-style",3,"options"],[1,"col-xl-8"],["cardTitle","R\xe9parations \xe0 effectuer","blockClass","table-border-style",3,"options"],[1,"btn","btn-success",3,"disabled","click"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],["class","col-xl-6",4,"ngFor","ngForOf"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],[1,"col-xl-6"],["blockClass","table-border-style",3,"cardTitle","options"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-card",3)(4,"div",4)(5,"p")(6,"span",5),e._uU(7,"Nom : "),e.qZA(),e.TgZ(8,"span"),e._uU(9),e.qZA()(),e._UZ(10,"hr"),e.TgZ(11,"p")(12,"span",5),e._uU(13,"Pr\xe9nom : "),e.qZA(),e.TgZ(14,"span"),e._uU(15),e.qZA()(),e._UZ(16,"hr"),e.TgZ(17,"p")(18,"span",5),e._uU(19,"Email : "),e.qZA(),e.TgZ(20,"span"),e._uU(21),e.qZA()()()()(),e.TgZ(22,"div",2)(23,"app-card",6)(24,"div",4)(25,"p")(26,"span",5),e._uU(27,"Num\xe9ro : "),e.qZA(),e.TgZ(28,"span"),e._uU(29),e.qZA()(),e._UZ(30,"hr"),e.TgZ(31,"p")(32,"span",5),e._uU(33,"Marque : "),e.qZA(),e.TgZ(34,"span"),e._uU(35),e.qZA()(),e._UZ(36,"hr"),e.TgZ(37,"p")(38,"span",5),e._uU(39,"Mod\xe8le : "),e.qZA(),e.TgZ(40,"span"),e._uU(41),e.qZA()()()()(),e.TgZ(42,"div",2)(43,"app-card",7)(44,"div",4)(45,"p")(46,"span",5),e._uU(47,"Nom : "),e.qZA(),e.TgZ(48,"span"),e._uU(49),e.qZA()(),e._UZ(50,"hr"),e.TgZ(51,"p")(52,"span",5),e._uU(53,"Pr\xe9nom : "),e.qZA(),e.TgZ(54,"span"),e._uU(55),e.qZA()(),e._UZ(56,"hr"),e.TgZ(57,"p")(58,"span",5),e._uU(59,"Email : "),e.qZA(),e.TgZ(60,"span"),e._uU(61),e.qZA()()()()(),e.TgZ(62,"div",2),e._UZ(63,"app-card",8),e.qZA()(),e.TgZ(64,"div",9)(65,"div",0)(66,"div",2)(67,"app-card",10)(68,"div",4)(69,"div",4)(70,"p")(71,"span",5),e._uU(72,"Date de d\xe9p\xf4t : "),e.qZA(),e.TgZ(73,"span"),e._uU(74),e.ALo(75,"date"),e.ALo(76,"date"),e.qZA()(),e.TgZ(77,"p")(78,"span",5),e._uU(79,"Date de sortie : "),e.qZA(),e.TgZ(80,"span"),e._uU(81),e.ALo(82,"date"),e.ALo(83,"date"),e.qZA()(),e.TgZ(84,"p")(85,"span",5),e._uU(86,"Montant total : "),e.qZA(),e._UZ(87,"span"),e.qZA(),e.TgZ(88,"p")(89,"span",5),e._uU(90," \xc9tat des r\xe9parations : "),e.qZA(),e.TgZ(91,"span"),e._uU(92),e.qZA()(),e.TgZ(93,"p")(94,"button",11),e.NdJ("click",function(){return n.receptionner()}),e._uU(95," Receptionner "),e.YNc(96,x,1,0,"span",12),e.qZA()()()()()(),e.YNc(97,C,25,11,"div",13),e.qZA()()()),2&a&&(e.xp6(3),e.Q6J("options",!1),e.xp6(6),e.hij("",n.reparation.client.nom," "),e.xp6(6),e.hij("",n.reparation.client.prenom," "),e.xp6(6),e.hij("",n.reparation.client.email," "),e.xp6(2),e.Q6J("options",!1),e.xp6(6),e.hij("",n.reparation.voiture.numero," "),e.xp6(6),e.hij("",n.reparation.voiture.marque," "),e.xp6(6),e.hij("",n.reparation.voiture.model," "),e.xp6(2),e.Q6J("options",!1),e.xp6(6),e.hij("",n.reparation.reparateur.nom," "),e.xp6(6),e.hij("",n.reparation.reparateur.prenom," "),e.xp6(6),e.hij("",n.reparation.reparateur.email," "),e.xp6(2),e.Q6J("options",!1),e.xp6(4),e.Q6J("options",!1),e.xp6(7),e.AsE("",e.lcZ(75,22,n.reparation.date_depot)," - ",e.xi3(76,24,n.reparation.date_depot,"shortTime")," "),e.xp6(7),e.AsE("",e.lcZ(82,27,n.reparation.date_sortie)," - ",e.xi3(83,29,n.reparation.date_sortie,"shortTime")," "),e.xp6(11),e.hij("",n.reparation.status," "),e.xp6(2),e.Q6J("disabled",n.disable),e.xp6(2),e.Q6J("ngIf",n.loading),e.xp6(1),e.Q6J("ngForOf",n.reparation.reparation_faire))},dependencies:[o.ez,o.sg,o.O5,o.H9,o.uU,h.m,u.A,_.d]}),t})();const R=function(t){return["/reparations/avancement",t]};function y(t,r){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.ALo(7,"date"),e.ALo(8,"date"),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"a",7),e._uU(13,"Avancement"),e.qZA()()()),2&t){const a=r.$implicit;e.xp6(2),e.Oqu(a.client.nom),e.xp6(2),e.Oqu(a.voiture.numero),e.xp6(2),e.AsE(" ",e.lcZ(7,6,a.date_depot)," - ",e.xi3(8,8,a.date_depot,"shortTime")," "),e.xp6(4),e.Oqu(a.status),e.xp6(2),e.Q6J("routerLink",e.VKq(11,R,a._id))}}function L(t,r){1&t&&e._UZ(0,"span",8)}const F=[{path:"",children:[{path:"deposer/liste",component:T},{path:"reparer/liste",component:(()=>{class t{constructor(a){this.reparationService=a,this.reparations=[],this.loading=!1}ngOnInit(){this.reparationService.listeReparation(p.encours).subscribe(a=>{1==a.success&&(console.log(a),this.reparations=a.data.reparartions,this.loading=!1)})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(l.L))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-reparer"]],standalone:!0,features:[e.jDz],decls:20,vars:3,consts:[[1,"row"],[1,"col-xl-12"],["cardTitle","Listes des r\xe9paration","blockClass","table-border-style",3,"options"],[1,"table-responsive"],[1,"table","table-striped","table-hover","table-responsive"],[4,"ngFor","ngForOf"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],[1,"label","theme-bg2","text-white","f-12","rounded-pill",3,"routerLink"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"app-card",2)(3,"div",3)(4,"table",4)(5,"thead")(6,"tr")(7,"th"),e._uU(8,"Client"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"V\xe9hicule"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Date de d\xe9p\xf4t"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Status"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Action"),e.qZA()()(),e.TgZ(17,"tbody"),e.YNc(18,y,14,13,"tr",5),e.qZA()(),e.YNc(19,L,1,0,"span",6),e.qZA()()()()),2&a&&(e.xp6(2),e.Q6J("options",!1),e.xp6(16),e.Q6J("ngForOf",n.reparations),e.xp6(1),e.Q6J("ngIf",n.loading))},dependencies:[h.m,o.sg,o.O5,u.A,o.uU,o.ez,s.Bz,s.rH]}),t})()},{path:"details/:id",component:E},{path:"avancement/:id",component:(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-avancements"]],decls:2,vars:0,template:function(a,n){1&a&&(e.TgZ(0,"p"),e._uU(1,"avancements works!"),e.qZA())}}),t})()}]}];let J=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(F),s.Bz]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,J]}),t})()}}]);