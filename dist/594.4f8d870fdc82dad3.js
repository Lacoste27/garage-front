"use strict";(self.webpackChunkdatta_able_free_angular_admin_template=self.webpackChunkdatta_able_free_angular_admin_template||[]).push([[594],{4594:(C,m,o)=>{o.r(m),o.d(m,{default:()=>I});var d=o(6895),p=o(9569),t=o(433),_=o(6270),e=o(1571),l=o(3941),f=o(4932),g=o(3078),h=o(1195);function c(r,s){1&r&&(e.TgZ(0,"div")(1,"div",21),e._uU(2," Veuillez pr\xe9ciser votre email "),e.qZA()())}function v(r,s){1&r&&(e.TgZ(0,"div")(1,"div",22),e._uU(2," Veuillez pr\xe9ciser votre prenom "),e.qZA()())}function E(r,s){1&r&&(e.TgZ(0,"div")(1,"div",22),e._uU(2," Veuillez pr\xe9ciser votre email "),e.qZA()())}function Z(r,s){1&r&&(e.TgZ(0,"div")(1,"div",22),e._uU(2," Veuillez pr\xe9ciser votre mot de pass "),e.qZA()())}function A(r,s){1&r&&e._UZ(0,"span",23)}const T=function(){return["/auth/client/signin"]};let I=(()=>{class r{constructor(i,n,u,a,U,S){this.authService=i,this.formBuilder=n,this.router=u,this.token=a,this.navigation=U,this.toast=S,this.loading=!1,this.erreur=!1,this.submitted=!1,this.form=new t.cw({nom:new t.NI(""),prenom:new t.NI(""),email:new t.NI(""),password:new t.NI("")})}get f(){return this.form.controls}ngOnInit(){this.form=this.formBuilder.group({nom:["",t.kI.required],prenom:["",t.kI.required],email:["",t.kI.required],password:["",t.kI.required]})}onSubmit(){this.loading=!0,this.submitted=!0;const i=this.form.value;this.form.invalid?this.loading=!1:this.authService.signUp({nom:i.nom,prenom:i.prenom,email:i.email,password:i.password}).subscribe({next:u=>{const a=u;a.success?(this.toast.ShowSuccess("Inscription !",a.message.toString()),this.token.SetToken(a.data.token),this.navigation.set(),this.router.navigateByUrl("/dashboard"),this.loading=!1):a.error&&(this.loading=!1,this.toast.ShowError("Erreur !",a.message.toString()))},error:u=>{this.loading=!1,this.toast.ShowError("Erreur","Une erreur s'est produite")}})}}return r.\u0275fac=function(i){return new(i||r)(e.Y36(l.g),e.Y36(t.qu),e.Y36(p.F0),e.Y36(f.B),e.Y36(g.D),e.Y36(h.k))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-auth-signup"]],standalone:!0,features:[e.jDz],decls:33,vars:8,consts:[[1,"auth-wrapper"],[1,"auth-content"],[1,"auth-bg"],[1,"r"],[1,"r","s"],[1,"card"],[3,"formGroup","ngSubmit"],[1,"card-body","text-center"],[1,"mb-4"],[1,"feather","icon-user-plus","auth-icon"],[1,"input-group","mb-3"],["type","text","formControlName","nom","placeholder","Nom",1,"form-control"],[4,"ngIf"],["type","text","formControlName","prenom","placeholder","Prenom",1,"form-control"],[1,"input-group","mb-4"],["type","email","formControlName","email","placeholder","Email",1,"form-control"],["type","password","placeholder","Mot de passe","formControlName","password",1,"form-control"],[1,"btn","btn-primary","shadow-2","mb-4"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],[1,"mb-0","text-muted"],[3,"routerLink"],[1,"offset-3",2,"padding-left","8px","font-size","12px","color","red"],[1,"offset-3",2,"padding-left","12px","padding-top","10px","font-size","12px","color","red"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"span",3)(4,"span",4)(5,"span",4)(6,"span",3),e.qZA(),e.TgZ(7,"div",5)(8,"form",6),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(9,"div",7)(10,"div",8),e._UZ(11,"i",9),e.qZA(),e.TgZ(12,"h3",8),e._uU(13,"Inscription"),e.qZA(),e.TgZ(14,"div",10),e._UZ(15,"input",11),e.qZA(),e.YNc(16,c,3,0,"div",12),e.TgZ(17,"div",10),e._UZ(18,"input",13),e.qZA(),e.YNc(19,v,3,0,"div",12),e.TgZ(20,"div",14),e._UZ(21,"input",15),e.qZA(),e.YNc(22,E,3,0,"div",12),e.TgZ(23,"div",14),e._UZ(24,"input",16),e.qZA(),e.YNc(25,Z,3,0,"div",12),e.TgZ(26,"button",17),e._uU(27," S'inscrire "),e.YNc(28,A,1,0,"span",18),e.qZA(),e.TgZ(29,"p",19),e._uU(30," Vous avez d\xe9j\xe0 une compte ? "),e.TgZ(31,"a",20),e._uU(32," Se connecter"),e.qZA()()()()()()()),2&i&&(e.xp6(8),e.Q6J("formGroup",n.form),e.xp6(8),e.Q6J("ngIf",n.submitted&&n.f.nom.errors),e.xp6(3),e.Q6J("ngIf",n.submitted&&n.f.prenom.errors),e.xp6(3),e.Q6J("ngIf",n.submitted&&n.f.email.errors),e.xp6(3),e.Q6J("ngIf",n.submitted&&n.f.password.errors),e.xp6(3),e.Q6J("ngIf",n.loading),e.xp6(3),e.Q6J("routerLink",e.DdM(7,T)))},dependencies:[d.ez,d.O5,p.Bz,p.rH,_.m,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u]}),r})()}}]);