(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredients_BreadBottom__2iTof",BreadTop:"BurgerIngredients_BreadTop__2nwzn",Seeds1:"BurgerIngredients_Seeds1__2Fbvc",Seeds2:"BurgerIngredients_Seeds2__29UkM",Meat:"BurgerIngredients_Meat__xjT9N",Cheese:"BurgerIngredients_Cheese__o806t",Salad:"BurgerIngredients_Salad__3u-vf",Bacon:"BurgerIngredients_Bacon__2W7Jl"}},,,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2tPJP",Open:"SideDrawer_Open__15oj0",Close:"SideDrawer_Close__1o8cG",Logo:"SideDrawer_Logo__1oP4U"}},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__2L_-K",Logo:"Toolbar_Logo__1wv6S",DesktopOnly:"Toolbar_DesktopOnly__3M4h8",DrawerToggle:"Toolbar_DrawerToggle__2qbrC"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__5JNkW",Label:"BuildControl_Label__1aFR3",Less:"BuildControl_Less__29tBl",More:"BuildControl_More__1xU6R"}},function(e,t,n){e.exports={Input:"Input_Input__1OaMF",Label:"Input_Label__3P41r",InputElement:"Input_InputElement__2iHEA",Invalid:"Input_Invalid__39gaJ"}},,,,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__d4vN1",active:"NavigationItem_active__jkFfS"}},,,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__3-7FQ",OrderButton:"BuildControls_OrderButton__3nP6D",enable:"BuildControls_enable__M0lFc"}},function(e,t,n){e.exports={Button:"Button_Button__1UCRd",Success:"Button_Success__1E1dM",Danger:"Button_Danger__3-C9O"}},,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__kICZK"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3f5im"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__28PfP"}},function(e,t,n){e.exports={Content:"Layout_Content__3k1BO"}},function(e,t,n){e.exports={Burger:"Burger_Burger__DcHft"}},function(e,t,n){e.exports={Modal:"Modal_Modal__l0AHW"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1ah2z",load1:"Spinner_load1__qWP03"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3jEqq"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__1TSrV"}},function(e,t,n){e.exports={Auth:"Auth_Auth__1ZZo6"}},function(e,t,n){e.exports={Order:"Order_Order__38l5t"}},,,function(e,t,n){e.exports=n(88)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(24),i=n.n(o),c=(n(65),n(1)),l=n(2),u=n(4),s=n(3),d=n(7),p=function(e){return e.children},h=n(46),m=n.n(h),g=n(47),f=n.n(g),v=function(e){return a.a.createElement("div",{className:f.a.Logo},a.a.createElement("img",{src:m.a,alt:"MyBurger"}))},E=n(29),b=n.n(E),_=n(14),y=function(e){return a.a.createElement("li",{className:b.a.NavigationItem},a.a.createElement(_.b,{to:e.link,exact:e.exact,activeClassName:b.a.active},e.children))},C=n(48),S=n.n(C),k=function(e){return a.a.createElement("ul",{className:S.a.NavigationItems},a.a.createElement(y,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(y,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(y,{link:"/logout"},"Logout"):a.a.createElement(y,{link:"/auth"},"Authenticate"))},I=n(49),O=n.n(I),T=function(e){return e.show?a.a.createElement("div",{className:O.a.Backdrop,onClick:e.clicked}):null},A=n(19),N=n.n(A),j=function(e){var t=[N.a.SideDrawer,N.a.Close];return e.open&&(t=[N.a.SideDrawer,N.a.Open]),a.a.createElement(p,null,a.a.createElement(T,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:N.a.Logo},a.a.createElement(v,null)),a.a.createElement("nav",null,a.a.createElement(k,{isAuthenticated:e.isAuth}))))},D=n(21),w=n.n(D),B=function(e){return a.a.createElement("header",{className:w.a.Toolbar},a.a.createElement("div",{onClick:e.clicked,className:w.a.DrawerToggle},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)),a.a.createElement("div",{className:w.a.Logo},a.a.createElement(v,null)),a.a.createElement("nav",{className:w.a.DesktopOnly},a.a.createElement(k,{isAuthenticated:e.isAuth})))},R=n(50),H=n.n(R),L=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(p,null,a.a.createElement(B,{isAuth:this.props.isAuthenticated,clicked:this.sideDrawerHandler}),a.a.createElement(j,{isAuth:this.props.isAuthenticated,closed:this.sideDrawerHandler,open:this.state.showSideDrawer}),a.a.createElement("main",{className:H.a.Content},this.props.children))}}]),n}(r.Component),P=Object(d.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(L),U=n(8),x=n(59),F=n(51),M=n.n(F),G=n(13),W=n.n(G),V=function(e){var t=null;switch(e.type){case"bread-bottom":t=a.a.createElement("div",{className:W.a.BreadBottom});break;case"bread-top":t=a.a.createElement("div",{className:W.a.BreadTop},a.a.createElement("div",{className:W.a.Seeds1}),a.a.createElement("div",{className:W.a.Seeds2}));break;case"meat":t=a.a.createElement("div",{className:W.a.Meat});break;case"cheese":t=a.a.createElement("div",{className:W.a.Cheese});break;case"salad":t=a.a.createElement("div",{className:W.a.Salad});break;case"bacon":t=a.a.createElement("div",{className:W.a.Bacon});break;default:t=null}return t},q=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(x.a)(Array(e.ingredients[t])).map((function(e,n){return a.a.createElement(V,{type:t,key:t+n})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=a.a.createElement("p",null,"Please add ingredients!")),a.a.createElement("div",{className:M.a.Burger},a.a.createElement(V,{type:"bread-top"}),t,a.a.createElement(V,{type:"bread-bottom"}))},z=n(33),J=n.n(z),K=n(22),$=n.n(K),Y=function(e){return a.a.createElement("div",{className:$.a.BuildControl},a.a.createElement("div",{className:$.a.Label},e.label),a.a.createElement("button",{className:$.a.More,onClick:e.added},"+"),a.a.createElement("button",{className:$.a.Less,onClick:e.deleted,disabled:e.disabled},"-"))},X=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],Q=function(e){return a.a.createElement("div",{className:J.a.BuildControls},a.a.createElement("p",null,"Esimated Price of BURGER: $",a.a.createElement("strong",null,e.price.toFixed(2))),X.map((function(t){return a.a.createElement(Y,{label:t.label,added:function(){e.ingredientAdded(t.type)},deleted:function(){e.ingredientDeleted(t.type)},key:t.label,disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:J.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN-UP TO ORDER"))},Z=n(52),ee=n.n(Z),te=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return a.a.createElement(p,null,a.a.createElement(T,{show:this.props.show,clicked:this.props.modalCancel}),a.a.createElement("div",{className:ee.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),n}(r.Component),ne=n(34),re=n.n(ne),ae=function(e){return a.a.createElement("button",{disabled:e.disabled,onClick:e.clicked,className:[re.a.Button,re.a[e.btnType]].join(" ")},e.children)},oe=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return e.props.ingredients[t]?a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t,": ",e.props.ingredients[t])):null}));return a.a.createElement(p,null,a.a.createElement("h3",null,"Your Order!"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: $",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(ae,{btnType:"Danger",clicked:this.props.cancel},"CANCEL"),a.a.createElement(ae,{btnType:"Success",clicked:this.props.continue},"CONTINUE"))}}]),n}(r.Component),ie=n(26),ce=n.n(ie),le=ce.a.create({baseURL:"https://react-my-burger-e5fe1.firebaseio.com/"}),ue=n(53),se=n.n(ue),de=function(){return a.a.createElement("div",{className:se.a.Loader},"Loading...")},pe=function(e,t){return function(n){Object(u.a)(o,n);var r=Object(s.a)(o);function o(){var e;Object(c.a)(this,o);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=r.call.apply(r,[this].concat(n))).state={error:null},e.errorHandledHandler=function(){e.setState({error:null})},e}return Object(l.a)(o,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return a.a.createElement(p,null,a.a.createElement(te,{show:this.state.error,modalCancel:this.errorHandledHandler},this.state.error?this.state.error.message:null),a.a.createElement(e,this.props))}}]),o}(r.Component)},he=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),localStorage.removeItem("userID"),{type:"AUTH_LOGOUT"}},me=function(e){return function(t){setTimeout((function(){t(he())}),1e3*e)}},ge=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},fe=function(e){return{type:"SET_AUTH_REDIRECT_PATH",path:e}},ve=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={purchasing:!1},e.purchaseHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):(e.props.onSetAuthRedirect("/checkout"),e.props.history.push("/auth"))},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push({pathname:"/checkout"})},e.updatePurchaseState=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"render",value:function(){var e=null,t=Object(U.a)({},this.props.ings);for(var n in t)t[n]=t[n]<=0;var r=this.props.err?a.a.createElement("p",null,"Couldn't load ingredients! Please refresh."):a.a.createElement(de,null);return this.props.ings&&(r=a.a.createElement(p,null,a.a.createElement(q,{ingredients:this.props.ings}),a.a.createElement(Q,{price:this.props.totPrice,ingredientDeleted:this.props.onIngredientRemoved,ingredientAdded:this.props.onIngredientAdded,purchaseable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,disabled:t,isAuth:this.props.isAuthenticated})),e=a.a.createElement(oe,{continue:this.purchaseContinueHandler,price:this.props.totPrice,cancel:this.purchaseCancelHandler,ingredients:this.props.ings})),a.a.createElement(p,null,a.a.createElement(te,{show:this.state.purchasing,modalCancel:this.purchaseCancelHandler},e),r)}}]),n}(r.Component),Ee=Object(d.b)((function(e){return{ings:e.burgerBuilder.ingredients,totPrice:e.burgerBuilder.totalPrice,err:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(function(e){return{type:"ADD_INGREDIENT",ingredientName:e}}(t))},onIngredientRemoved:function(t){return e(function(e){return{type:"REMOVE_INGREDIENT",ingredientName:e}}(t))},onInitIngredients:function(){return e((function(e){le.get("/ingredients.json").then((function(t){e({type:"SET_INGREDIENTS",ingredients:t.data})})).catch((function(t){e({type:"FETCH_INGREDIENTS_FAILED"})}))}))},onInitPurchase:function(){return e({type:"PURCHASE_INIT"})},onSetAuthRedirect:function(t){return e(fe(t))}}}))(pe(ve,le)),be=n(5),_e=n(54),ye=n.n(_e),Ce=function(e){return a.a.createElement("div",{className:ye.a.CheckoutSummary},a.a.createElement("h1",null,"We hope it tastes good!"),a.a.createElement("div",{style:{width:"100%",margin:"auto"}},a.a.createElement(q,{ingredients:e.ingredients})),a.a.createElement(ae,{btnType:"Danger",clicked:e.purchaseCancel},"CANCEL"),a.a.createElement(ae,{btnType:"Success",clicked:e.purchaseContinue},"CONTINUE"))},Se=n(55),ke=n.n(Se),Ie=n(23),Oe=n.n(Ie),Te=function(e){var t=null,n=[Oe.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(Oe.a.Invalid),e.elementType){case"input":t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=a.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=a.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return a.a.createElement("div",{className:Oe.a.Input},a.a.createElement("label",{className:Oe.a.Label},e.label),t)},Ae=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={orderForm:{name:e.formFillerHelper("input","text","Your Name",""),street:e.formFillerHelper("input","text","Street",""),pinCode:e.formFillerHelper("input","text","PIN Code",""),country:e.formFillerHelper("input","text","Country",""),email:e.formFillerHelper("input","email","Your Email",""),delivery:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",valid:!0}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var n={};for(var r in e.state.orderForm)n[r]=e.state.orderForm[r].value;var a={ingredients:e.props.ings,totalPrice:e.props.totPrice,orderData:n,userId:e.props.userId};e.props.onOrderBurger(a,e.props.token)},e.inputChangedHandler=function(t,n){var r=Object(U.a)({},e.state.orderForm),a=Object(U.a)({},r[n]);a.value=t.target.value,a.valid=e.checkValidity(a.value,a.validation),a.touched=!0,r[n]=a;var o=!0;for(var i in r)o=r[i].valid&&o;e.setState({orderForm:r,formIsValid:o})},e}return Object(l.a)(n,[{key:"formFillerHelper",value:function(e,t,n,r){return{elementType:"".concat(e),elementConfig:{type:"".concat(t),placeholder:"".concat(n)},value:"".concat(r),validation:{required:!0},valid:!1,touched:!1,minLength:1}}},{key:"checkValidity",value:function(e,t){if(!t)return!0;var n=!1;return t.required&&(n=""!==e.trim()),t.minLength&&(n=e.length>=t.minLength),n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=a.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return a.a.createElement(Te,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,invalid:!t.config.valid,shouldValidate:t.config.validation,value:t.config.value,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),a.a.createElement(ae,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.isLoading&&(r=a.a.createElement(de,null)),a.a.createElement("div",{className:ke.a.ContactData},a.a.createElement("h4",null,"Enter your contact data"),r)}}]),n}(r.Component),Ne=Object(d.b)((function(e){return{ings:e.burgerBuilder.ingredients,totPrice:e.burgerBuilder.totalPrice,isLoading:e.orders.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,n){return e(function(e,t){return function(n){n({type:"PURCHASE_BURGER_START"}),le.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:"PURCHASE_BURGER_FAIL",error:e}}(e))}))}}(t,n))}}}))(pe(Ae,le)),je=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).purchaseCancelHandler=function(){e.props.history.goBack()},e.purchaseContinueHandler=function(){e.props.history.replace("/checkout/data-form")},e}return Object(l.a)(n,[{key:"render",value:function(){var e=a.a.createElement(be.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?a.a.createElement(be.a,{to:"/"}):null;e=a.a.createElement("div",null,t,a.a.createElement(Ce,{ingredients:this.props.ings,purchaseContinue:this.purchaseContinueHandler,purchaseCancel:this.purchaseCancelHandler}),a.a.createElement(be.b,{path:this.props.match.url+"/data-form",component:Ne}))}return e}}]),n}(r.Component),De=Object(d.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.orders.purchased}}))(je),we=n(15),Be=n(56),Re=n.n(Be),He=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1,minLength:1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignUp:!0},e.authModeChangeHandler=function(){e.setState((function(e){return{isSignUp:!e.isSignUp}}))},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignUp)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"formFillerHelper",value:function(e,t,n,r){return{elementType:"".concat(e),elementConfig:{type:"".concat(t),placeholder:"".concat(n)},value:"".concat(r),validation:{required:!0},valid:!1,touched:!1,minLength:1}}},{key:"checkValidity",value:function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},{key:"inputChangedHandler",value:function(e,t){var n=Object(U.a)(Object(U.a)({},this.state.controls),{},Object(we.a)({},t,Object(U.a)(Object(U.a)({},this.state.controls[t]),{},{value:e.target.value,valid:this.checkValidity(e.target.value,this.state.controls[t].validation),touched:!0})));this.setState({controls:n})}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var r=t.map((function(t){return a.a.createElement(Te,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,invalid:!t.config.valid,shouldValidate:t.config.validation,value:t.config.value,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}));this.props.loading&&(r=a.a.createElement(de,null));var o=null;this.props.error&&(o=a.a.createElement("p",null,this.props.error.message));var i=null;return this.props.isAuthenticated&&(i=a.a.createElement(be.a,{to:this.props.authRedirectPath})),a.a.createElement("div",{className:Re.a.Auth},i,a.a.createElement("form",{onSubmit:this.submitHandler},o,r,a.a.createElement(ae,{btnType:"Success"},"SUBMIT")),a.a.createElement(ae,{clicked:this.authModeChangeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignUp?"SIGN-IN":"SIGN-UP"))}}]),n}(r.Component),Le=Object(d.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,r){return e(function(e,t,n){return function(r){r({type:"AUTH_START"});var a={email:e,password:t,returnSecureToken:!0},o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBD_9XlSoQJMc3DKitAKDGG508_XhKm9Lw";n||(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBD_9XlSoQJMc3DKitAKDGG508_XhKm9Lw"),ce.a.post(o,a).then((function(e){var t=new Date((new Date).getTime()+1e4*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationTime",t),localStorage.setItem("userID",e.data.localId),r(ge(e.data.idToken,e.data.localId)),r(me(e.data.expiresIn))})).catch((function(e){console.log(e),r({type:"AUTH_FAIL",error:e.response.data.error})}))}}(t,n,r))},onSetAuthRedirectPath:function(){return e(fe("/"))}}}))(He),Pe=n(57),Ue=n.n(Pe),xe=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var r=t.map((function(e){return a.a.createElement("span",{key:e.name,style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"}},e.name,": (",e.amount,")")}));return a.a.createElement("div",{className:Ue.a.Order},a.a.createElement("p",null,"Ingredients: ",r),a.a.createElement("p",null,"Price: ",a.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))},Fe=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=a.a.createElement(de,null);return this.props.loading||(e=this.props.orders.map((function(e){return a.a.createElement(xe,{key:e.id,ingredients:e.ingredients,price:e.totalPrice})}))),a.a.createElement("div",null,e)}}]),n}(r.Component),Me=Object(d.b)((function(e){return{orders:e.orders.orders,loading:e.orders.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(t,n){return e(function(e,t){return function(n){n({type:"FETCH_ORDERS_START"});var r="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';le.get("/orders.json"+r).then((function(e){var t=[];for(var r in e.data)t.push(Object(U.a)(Object(U.a)({},e.data[r]),{},{id:r}));n({type:"FETCH_ORDERS_SUCCESS",orders:t})})).catch((function(e){n({type:"FETCH_ORDERS_FAILED",error:e})}))}}(t,n))}}}))(pe(Fe,le)),Ge=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(be.a,{to:"/"})}}]),n}(r.Component),We=Object(d.b)(null,(function(e){return{onLogout:function(){return e(he())}}}))(Ge),Ve=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(be.d,null,a.a.createElement(be.b,{path:"/auth",component:Le}),a.a.createElement(be.b,{path:"/",component:Ee}),a.a.createElement(be.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(be.d,null,a.a.createElement(be.b,{path:"/checkout",component:De}),a.a.createElement(be.b,{path:"/orders",component:Me}),a.a.createElement(be.b,{path:"/logout",component:We}),a.a.createElement(be.b,{path:"/auth",component:Le}),a.a.createElement(be.b,{path:"/",component:Ee}))),a.a.createElement("div",null,a.a.createElement(P,null,e))}}]),n}(r.Component),qe=Object(be.g)(Object(d.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationTime"));if(n<=new Date)e(he());else{var r=localStorage.getItem("userID");e(ge(t,r)),e(me((n.getTime()-(new Date).getTime())/1e3))}}else e(he())}))}}}))(Ve)),ze=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Je(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ke=function(e,t){return Object(U.a)(Object(U.a)({},e),t)},$e={ingredients:null,totalPrice:4,error:!1,building:!1},Ye={salad:.5,cheese:.4,meat:1.3,bacon:.7},Xe=function(e,t){var n=Object(we.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Ke(e.ingredients,n),totalPrice:e.totalPrice+Ye[t.ingredientName],building:!0};return Ke(e,r)},Qe=function(e,t){var n=Object(we.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Ke(e.ingredients,n),totalPrice:e.totalPrice+Ye[t.ingredientName],building:!0};return Ke(e,r)},Ze=function(e,t){return Ke(e,{ingredients:t.ingredients,totalPrice:4,error:!1,building:!1})},et=function(e,t){return Ke(e,{error:!0})},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return Xe(e,t);case"REMOVE_INGREDIENT":return Qe(e,t);case"SET_INGREDIENTS":return Ze(e,t);case"FETCH_INGREDIENTS_FAILED":return et(e);default:return e}},nt={orders:[],loading:!1,purchased:!1},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PURCHASE_INIT":return Ke(e,{purchased:!1});case"PURCHASE_BURGER_START":return Ke(e,{loading:!0});case"PURCHASE_BURGER_SUCCESS":var n=Ke(t.orderData,{id:t.orderId});return Ke(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)});case"PURCHASE_BURGER_FAIL":return Ke(e,{loading:!1});case"FETCH_ORDERS_START":return Ke(e,{loading:!0});case"FETCH_ORDERS_SUCCESS":return Ke(e,{orders:t.orders,loading:!1});case"FETCH_ORDERS_FAILED":return Ke(e,{loading:!1});default:return e}},at={token:null,error:null,loading:!1,userId:null,authRedirectPath:"/"},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return Ke(e,{loading:!0,error:null});case"AUTH_SUCCESS":return Ke(e,{token:t.idToken,userId:t.userId,loading:!1,error:null});case"AUTH_FAIL":return Ke(e,{loading:!1,error:t.error});case"AUTH_LOGOUT":return Ke(e,{token:null,userId:null});case"SET_AUTH_REDIRECT_PATH":return Ke(e,{authRedirectPath:t.path});default:return e}},it=n(16),ct=n(58),lt=it.d,ut=Object(it.c)({burgerBuilder:tt,orders:rt,auth:ot}),st=Object(it.e)(ut,lt(Object(it.a)(ct.a)));i.a.render(a.a.createElement(d.a,{store:st},a.a.createElement(a.a.StrictMode,null,a.a.createElement(_.a,null,a.a.createElement(qe,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ze?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Je(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Je(t,e)}))}}()}],[[60,1,2]]]);
//# sourceMappingURL=main.24fd2fd8.chunk.js.map