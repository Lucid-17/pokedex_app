import './polyfills.server.mjs';
import{$ as Ie,A as re,B as be,C as a,D as l,E as A,F as B,G as h,H as m,I as oe,J as f,K as I,L as U,M as Ae,N as Me,O as Ee,P as R,Q as se,R as H,S as L,U as Fe,Z as we,a as me,aa as ae,b as ge,c as ye,ca as Se,d as P,da as xe,e as T,ea as ke,f as te,fa as Ne,g as d,ga as Oe,h as V,ha as Pe,i as ve,ia as Te,j as F,k as _e,l as c,la as je,m as p,n as Ce,o as y,p as v,pa as Ge,q as Ve,r as ie,s as w,sa as le,t as De,u,v as s,w as ne,x as D,y as j,z as G}from"./chunk-VNNRMXCV.mjs";import{a as g,b}from"./chunk-VVCT4QZE.mjs";var gt=[],Be=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=d({imports:[le.forRoot(gt),le]});let t=e;return t})();var ue={production:!1,pokemonApiBaseUrl:"https://pokeapi.co/api/v2/"};var Ue=(()=>{let e=class e{constructor(i){this.http=i}getPokemonData(i){return this.http.get(ue.pokemonApiBaseUrl+"pokemon/"+i,{})}getPokemonEntry(i){return this.http.get(ue.pokemonApiBaseUrl+"pokemon-species/"+i,{})}};e.\u0275fac=function(r){return new(r||e)(ve(Ne))},e.\u0275prov=te({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ze=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(s(ne),s(ie))},e.\u0275dir=p({type:e});let t=e;return t})(),vt=(()=>{let e=class e extends Ze{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=Ve(e)))(o||e)}})(),e.\u0275dir=p({type:e,features:[D]});let t=e;return t})(),Xe=new V("");var _t={provide:Xe,useExisting:T(()=>Y),multi:!0};function Ct(){let t=ae()?ae().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Vt=new V(""),Y=(()=>{let e=class e extends Ze{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ct())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(s(ne),s(ie),s(Vt,8))},e.\u0275dir=p({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&h("input",function(C){return o._handleInput(C.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(C){return o._compositionEnd(C.target.value)})},features:[R([_t]),D]});let t=e;return t})();var Ye=new V(""),Ke=new V("");function Je(t){return t!=null}function Qe(t){return Fe(t)?me(t):t}function et(t){let e={};return t.forEach(n=>{e=n!=null?g(g({},e),n):e}),Object.keys(e).length===0?null:e}function tt(t,e){return e.map(n=>n(t))}function Dt(t){return!t.validate}function it(t){return t.map(e=>Dt(e)?e:n=>e.validate(n))}function bt(t){if(!t)return null;let e=t.filter(Je);return e.length==0?null:function(n){return et(tt(n,e))}}function ce(t){return t!=null?bt(it(t)):null}function At(t){if(!t)return null;let e=t.filter(Je);return e.length==0?null:function(n){let i=tt(n,e).map(Qe);return ye(i).pipe(ge(et))}}function he(t){return t!=null?At(it(t)):null}function Re(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Mt(t){return t._rawValidators}function Et(t){return t._rawAsyncValidators}function de(t){return t?Array.isArray(t)?t:[t]:[]}function W(t,e){return Array.isArray(t)?t.includes(e):t===e}function He(t,e){let n=de(e);return de(t).forEach(r=>{W(n,r)||n.push(r)}),n}function Le(t,e){return de(e).filter(n=>!W(t,n))}var q=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ce(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=he(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},E=class extends q{get formDirective(){return null}get path(){return null}},O=class extends q{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},z=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Ft={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},bi=b(g({},Ft),{"[class.ng-submitted]":"isSubmitted"}),nt=(()=>{let e=class e extends z{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(O,2))},e.\u0275dir=p({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&re("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[D]});let t=e;return t})(),rt=(()=>{let e=class e extends z{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(E,10))},e.\u0275dir=p({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&re("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[D]});let t=e;return t})();var x="VALID",$="INVALID",M="PENDING",k="DISABLED";function ot(t){return(K(t)?t.validators:t)||null}function wt(t){return Array.isArray(t)?ce(t):t||null}function st(t,e){return(K(e)?e.asyncValidators:t)||null}function It(t){return Array.isArray(t)?he(t):t||null}function K(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function St(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new P(1e3,"");if(!i[n])throw new P(1001,"")}function xt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new P(1002,"")})}var Z=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===x}get invalid(){return this.status===$}get pending(){return this.status==M}get disabled(){return this.status===k}get enabled(){return this.status!==k}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(He(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(He(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Le(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Le(e,this._rawAsyncValidators))}hasValidator(e){return W(this._rawValidators,e)}hasAsyncValidator(e){return W(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=M,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=k,this.errors=null,this._forEachChild(i=>{i.disable(b(g({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(b(g({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=x,this._forEachChild(i=>{i.enable(b(g({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(b(g({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===x||this.status===M)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?k:x}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=M,this._hasOwnPendingAsyncValidator=!0;let n=Qe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new w,this.statusChanges=new w}_calculateStatus(){return this._allControlsDisabled()?k:this.errors?$:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(M)?M:this._anyControlsHaveStatus($)?$:x}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){K(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=wt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=It(this._rawAsyncValidators)}},X=class extends Z{constructor(e,n,i){super(ot(n),st(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){xt(this,!0,e),Object.keys(e).forEach(i=>{St(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var J=new V("CallSetDisabledState",{providedIn:"root",factory:()=>Q}),Q="always";function kt(t,e){return[...e.path,t]}function at(t,e,n=Q){lt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Ot(t,e),Tt(t,e),Pt(t,e),Nt(t,e)}function $e(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Nt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function lt(t,e){let n=Mt(t);e.validator!==null?t.setValidators(Re(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Et(t);e.asyncValidator!==null?t.setAsyncValidators(Re(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();$e(e._rawValidators,r),$e(e._rawAsyncValidators,r)}function Ot(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ut(t,e)})}function Pt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ut(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ut(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Tt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function jt(t,e){t==null,lt(t,e)}function Gt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Bt(t){return Object.getPrototypeOf(t.constructor)===vt}function Ut(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Rt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===Y?n=o:Bt(o)?i=o:r=o}),r||i||n||null}var Ht={provide:E,useExisting:T(()=>fe)},N=Promise.resolve(),fe=(()=>{let e=class e extends E{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new w,this.form=new X({},ce(i),he(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){N.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),at(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){N.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){N.then(()=>{let r=this._findContainer(i.path),o=new X({});jt(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){N.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){N.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,Ut(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(s(Ye,10),s(Ke,10),s(J,8))},e.\u0275dir=p({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&h("submit",function(C){return o.onSubmit(C)})("reset",function(){return o.onReset()})},inputs:{options:[F.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[R([Ht]),D]});let t=e;return t})();function We(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function qe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Lt=class extends Z{constructor(e=null,n,i){super(ot(n),st(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),K(n)&&(n.nonNullable||n.initialValueIsDefault)&&(qe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){We(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){We(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){qe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var $t={provide:O,useExisting:T(()=>pe)},ze=Promise.resolve(),pe=(()=>{let e=class e extends O{constructor(i,r,o,_,C,mt){super(),this._changeDetectorRef=C,this.callSetDisabledState=mt,this.control=new Lt,this._registered=!1,this.name="",this.update=new w,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Rt(this,_)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),Gt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){at(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){ze.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&Ie(r);ze.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?kt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(s(E,9),s(Ye,10),s(Ke,10),s(Xe,10),s(we,8),s(J,8))},e.\u0275dir=p({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[F.None,"disabled","isDisabled"],model:[F.None,"ngModel","model"],options:[F.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[R([$t]),D,Ce]});let t=e;return t})(),dt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=p({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Wt=new V("");var ct=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=d({});let t=e;return t})();var ht=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:J,useValue:i.callSetDisabledState??Q}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=d({imports:[ct]});let t=e;return t})(),ft=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Wt,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:J,useValue:i.callSetDisabledState??Q}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=d({imports:[ct]});let t=e;return t})();var zt=()=>[0,1,2,3,4],Zt=()=>[5,6,7,8,9];function Xt(t,e){if(t&1){let n=B();a(0,"button",33),h("click",function(){let r=y(n).$implicit,o=m(2);return v(o.populateSearch(r))}),f(1),l()}if(t&2){let n=e.$implicit;u(),U(" ",n," ")}}function Yt(t,e){if(t&1){let n=B();a(0,"button",34),h("click",function(){let r=y(n).$implicit,o=m(2);return v(o.populateSearch(r))}),f(1),l()}if(t&2){let n=e.$implicit;u(),U(" ",n," ")}}function Kt(t,e){if(t&1){let n=B();a(0,"div",2)(1,"div",3)(2,"div",4),A(3,"span",5)(4,"span",6)(5,"span",7)(6,"span",8)(7,"span",9),l(),a(8,"div",10),A(9,"img",11),l(),a(10,"div",12)(11,"div",13),f(12),l(),a(13,"div",14),f(14),H(15,"uppercase"),l()()(),a(16,"div",15)(17,"div",16)(18,"form",null,0)(20,"input",17),Ee("ngModelChange",function(r){y(n);let o=m();return Me(o.pokemonId,r)||(o.pokemonId=r),v(r)}),l()()(),a(21,"div",18),f(22),l(),a(23,"div",19),j(24,Xt,2,1,"button",20),l(),a(25,"div",21),j(26,Yt,2,1,"button",22),l(),a(27,"div",23)(28,"button",24),h("click",function(){y(n);let r=m();return v(r.up())}),f(29," \u2191 "),l(),a(30,"button",25),h("click",function(){y(n);let r=m();return v(r.down())}),f(31," \u2193 "),l()(),a(32,"div",26)(33,"form",27,0),h("submit",function(){y(n);let r=m();return v(r.onSubmit())}),A(35,"input",28),l(),a(36,"form",27,0),h("submit",function(){y(n);let r=m();return v(r.onRandom())}),A(38,"input",29),l()(),a(39,"div",30)(40,"div",31),f(41),H(42,"uppercase"),l(),a(43,"div",32),f(44),H(45,"uppercase"),l()()()()}if(t&2){let n=m();u(4),be(n.flash),u(5),oe("src",n.pokemonData.sprites.other["official-artwork"].front_default,De),oe("alt",n.pokemonId),u(3),U("No. ",n.pokemonData.id,""),u(2),I(L(15,12,n.pokemonData.name)),u(6),Ae("ngModel",n.pokemonId),u(2),I(n.entry),u(2),G("ngForOf",se(18,zt)),u(2),G("ngForOf",se(19,Zt)),u(15),I(L(42,14,n.pokemonData.types[0].type.name)),u(3),I(L(45,16,n.secondaryType))}}var ee=(()=>{let e=class e{constructor(i){this.dataService=i,this.pokemonId="",this.flash="background-color: #27a9fb;",this.entry="",this.secondaryType="",this.title="pokedex-app"}populateSearch(i){this.pokemonId+=`${i}`}ngOnInit(){this.onRandom()}onSubmit(){this.pokemonId&&(this.getPokemonInfo(this.pokemonId),this.getPokedexEntry(this.pokemonId),this.pokemonData.types.length>1&&(this.secondaryType=this.pokemonData?.types[1].type.name),this.pokemonId="")}onRandom(){this.pokemonId=Math.floor(Math.random()*1025)+1,this.getPokemonInfo(this.pokemonId),this.getPokedexEntry(this.pokemonId),this.pokemonId=""}up(){this.pokemonId=this.pokemonData.id+1,this.onSubmit()}down(){this.pokemonId=this.pokemonData.id-1,this.onSubmit()}getPokemonInfo(i){this.dataService.getPokemonData(i).subscribe({next:r=>{this.pokemonData=r,console.log(r),this.pokemonData.types.length>1?this.secondaryType=this.pokemonData.types[1].type.name:this.secondaryType=""}})}getPokedexEntry(i){this.dataService.getPokemonEntry(i).subscribe({next:r=>{if(this.pokemonEntry=r,console.log(r),this.pokemonEntry.flavor_text_entries[0].language.name!="en")for(let o=0;o<this.pokemonEntry.flavor_text_entries.length;o++)this.pokemonEntry.flavor_text_entries[o].language.name=="en"&&(this.entry=this.pokemonEntry.flavor_text_entries[o].flavor_text.normalize().replaceAll(`
`," ").replaceAll("\f"," "));else this.entry=this.pokemonEntry.flavor_text_entries[0].flavor_text.normalize().replaceAll(`
`," ").replaceAll("\f"," ")}})}};e.\u0275fac=function(r){return new(r||e)(s(Ue))},e.\u0275cmp=_e({type:e,selectors:[["app-root"]],decls:2,vars:1,consts:[["form","ngForm"],["class","container",4,"ngIf"],[1,"container"],[1,"left-data"],[1,"top-lights"],[1,"big-blue-back",2,"color","black"],["id","blue1",1,"big-blue-1"],[1,"big-blue-dark"],[1,"big-blue-2"],[1,"big-blue-white"],[1,"poke-pic"],[3,"src","alt"],[1,"pokemon-id"],[1,"pokemon-number"],[1,"pokemon-name"],[1,"right-data"],[1,"search-container"],["type","text","placeholder","Search For A Pok\xE9mon!","name","pokemon",3,"ngModelChange","ngModel"],["id","entry",1,"entry"],[1,"upper-number-buttons-container"],["class","upper-number-button",3,"click",4,"ngFor","ngForOf"],[1,"lower-number-buttons-container"],["class","lower-number-button",3,"click",4,"ngFor","ngForOf"],[1,"increment-buttons-container"],[1,"up",3,"click"],[1,"down",3,"click"],[1,"action-buttons-container"],[3,"submit"],["type","submit","value","Go!",1,"go"],["type","submit","value","Random!",1,"random"],[1,"type-container"],[1,"primary-type"],[1,"secondary-type"],[1,"upper-number-button",3,"click"],[1,"lower-number-button",3,"click"]],template:function(r,o){r&1&&(j(0,Kt,46,20,"div",1),A(1,"router-outlet")),r&2&&G("ngIf",o.pokemonData)},dependencies:[Se,xe,Ge,dt,Y,nt,rt,pe,fe,ke]});let t=e;return t})();var pt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e,bootstrap:[ee]}),e.\u0275inj=d({providers:[Te()],imports:[Pe,Be,Oe,ht]});let t=e;return t})();var Jt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e,bootstrap:[ee]}),e.\u0275inj=d({imports:[pt,je,ft]});let t=e;return t})();export{Jt as a};