(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Alert"],{"2d42":function(e,t,n){"use strict";n.r(t);n("99af");var c=n("7a23"),o={class:"alert-container"},r={class:"top"},i={class:"token-container"},l={class:"token-info"},a={class:"icon-token-container"},s=["src"],d={class:"token-symbol"},u={class:"token-price"},b={class:"price-label"},m={class:"bottom"},f={class:"title"},p={class:"table-container"},O={class:"table-item header"},j={class:"token-info"},v={class:"icon-token-container"},h=["src"],g={class:"token-symbol"};function k(e,t,k,$,y,N){var V,E,P,w,A=Object(c["resolveComponent"])("van-image"),S=Object(c["resolveComponent"])("van-field"),D=Object(c["resolveComponent"])("van-button"),I=Object(c["resolveComponent"])("van-form"),B=Object(c["resolveComponent"])("van-icon");return Object(c["openBlock"])(),Object(c["createElementBlock"])("section",o,[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",i,[Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("div",a,[Object(c["createVNode"])(A,{round:"",width:"0.5rem",height:"0.5rem","icon-size":"0.5rem","lazy-load":"","show-loading":"",src:e.$f.formatIcon(N.tokenInfo),"error-icon":n("aecc")},null,8,["src","error-icon"]),null!==(V=N.tokenInfo)&&void 0!==V&&V.network||null!==(E=N.tokenInfo)&&void 0!==E&&E.chain?(Object(c["openBlock"])(),Object(c["createElementBlock"])("img",{key:0,class:"icon-svg icon-network",src:"".concat(e.$store.state.s3BaseUrl,"chain/").concat((null===(P=N.tokenInfo)||void 0===P?void 0:P.network)||(null===(w=N.tokenInfo)||void 0===w?void 0:w.chain),".png"),alt:"",srcset:""},null,8,s)):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("span",d,Object(c["toDisplayString"])(N.tokenInfo.symbol),1)]),Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("div",u," $ "+Object(c["toDisplayString"])(N.tokenPrice),1),Object(c["createElementVNode"])("div",b,Object(c["toDisplayString"])(e.$t("currentPrice")),1)])]),Object(c["createVNode"])(I,{onSubmit:N.addPriceAlert,"input-align":"right","error-message-align":"right"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(S,{modelValue:y.alertPrice,"onUpdate:modelValue":t[0]||(t[0]=function(e){return y.alertPrice=e}),modelModifiers:{number:!0},name:"alertPrice",label:e.$t("setPrice"),type:"number",placeholder:e.$t("plsEnterAlertPrice"),rules:[{required:!0,message:e.$t("plsEnterAlertPrice")},{validator:N.validator,message:e.$t("alertPrice2")}]},null,8,["modelValue","label","placeholder","rules"]),Object(c["createVNode"])(S,{label:e.$t("alertType"),"model-value":N.alertDirection,readonly:""},null,8,["label","model-value"]),Object(c["createVNode"])(S,{label:e.$t("alertFrequency"),"model-value":e.$t("alertOnce"),readonly:""},null,8,["label","model-value"]),Object(c["createVNode"])(D,{class:"submit-btn",block:"",type:"primary","native-type":"submit"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$t("createAlert")),1)]})),_:1})]})),_:1},8,["onSubmit"])]),Object(c["createElementVNode"])("div",m,[Object(c["createElementVNode"])("div",f,Object(c["toDisplayString"])(e.$t("alertSettingRecords")),1),Object(c["createElementVNode"])("ul",p,[Object(c["createElementVNode"])("li",O,[Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.$t("token")),1),Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.$t("type")),1),Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.$t("price")),1),Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.$t("operate")),1)]),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(y.priceAlertList,(function(t,o){return Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{class:Object(c["normalizeClass"])(["table-item",{is_notified:t.is_notified}]),key:o},[Object(c["createElementVNode"])("div",j,[Object(c["createElementVNode"])("div",v,[Object(c["createVNode"])(A,{round:"",width:"0.5rem",height:"0.5rem","icon-size":"0.5rem","lazy-load":"","show-loading":"",src:e.$f.formatIcon({chain:(null===t||void 0===t?void 0:t.chain)||"",address:null===t||void 0===t?void 0:t.token}),"error-icon":n("aecc")},null,8,["src","error-icon"]),null!==t&&void 0!==t&&t.network||null!==t&&void 0!==t&&t.chain?(Object(c["openBlock"])(),Object(c["createElementBlock"])("img",{key:0,class:"icon-svg icon-network",src:"".concat(e.$store.state.s3BaseUrl,"chain/").concat((null===t||void 0===t?void 0:t.network)||(null===t||void 0===t?void 0:t.chain),".png"),alt:"",srcset:""},null,8,h)):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("span",g,Object(c["toDisplayString"])(t.symbol),1)]),Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(t.current_price<=t.warning_price?e.$t("upTo"):e.$t("downTo")),1),Object(c["createElementVNode"])("span",null,"$ "+Object(c["toDisplayString"])(t.warning_price),1),Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(B,{class:"icon-delete-i",onClick:Object(c["withModifiers"])((function(e){return N.removePriceAlert(t)}),["stop"]),size:"0.4rem",name:"delete-o"},null,8,["onClick"])])],2)})),128))])])])}n("a9e3"),n("d3b7");var $=n("365c"),y={name:"Alert",data:function(){return{alertPrice:"",priceAlertList:[]}},computed:{tokenInfo:function(){return this.$store.state.tokenInfo},tokenPrice:function(){var e;return this.$f.formatNumShort(this.$f.formatNum(this.$f.formatNumber(this.$store.state.tokenPrice||(null===(e=this.tokenInfo)||void 0===e?void 0:e.current_price_usd))),10)},alertDirection:function(){return Number(this.tokenPrice)<=Number(this.alertPrice)?this.$t("upTo"):this.$t("downTo")}},activated:function(){this.getUserPriceAlert()},methods:{init:function(){this.getUserPriceAlert()},getUserPriceAlert:function(){var e=this;Object($["Yb"])().then((function(t){e.priceAlertList=t||[]}))},onSubmit:function(e){console.log("submit",e)},validator:function(e){return Math.abs((Number(this.tokenPrice)-Number(e))/Number(this.tokenPrice))>=.02},addPriceAlert:function(){var e,t=this;if(this.$f.verifyLogin()){var n=this.$toast.loading({forbidClick:!0,duration:0});Object($["g"])(this.tokenInfo.address,this.tokenInfo.chain,this.alertPrice,this.$store.state.tokenPrice||(null===(e=this.tokenInfo)||void 0===e?void 0:e.current_price_usd)).then((function(){t.getUserPriceAlert(),t.$notify({type:"success",message:t.$t("success")})})).catch((function(e){console.log(e),t.$notify({type:"danger",message:t.$t("fail")})})).finally((function(){n.clear()}))}},removePriceAlert:function(e){var t=this;this.$f.verifyLogin()&&this.$dialog.confirm({message:this.$t("confirmDelete"),confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("cancel")}).then((function(){var n=t.$toast.loading({forbidClick:!0,duration:0});Object($["xc"])(e.id).then((function(){t.getUserPriceAlert(),t.$notify({type:"success",message:t.$t("success")})})).catch((function(e){console.log(e),t.$notify({type:"danger",message:t.$t("fail")})})).finally((function(){n.clear()}))})).catch((function(){}))}}},N=(n("4caa"),n("6b0d")),V=n.n(N);const E=V()(y,[["render",k],["__scopeId","data-v-04bbcc47"]]);t["default"]=E},"327d":function(e,t,n){},"4caa":function(e,t,n){"use strict";n("327d")}}]);