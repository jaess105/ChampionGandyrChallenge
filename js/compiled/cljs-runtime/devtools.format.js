goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_12569 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._header[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5394__auto__.call(null,value));
} else {
var m__5392__auto__ = (devtools.format._header["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5392__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_12569(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_12587 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._has_body[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5394__auto__.call(null,value));
} else {
var m__5392__auto__ = (devtools.format._has_body["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5392__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_12587(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_12598 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._body[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5394__auto__.call(null,value));
} else {
var m__5392__auto__ = (devtools.format._body["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5392__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_12598(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12198 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12198["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12199 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12199["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12200 = temp__5802__auto____$2;
return (o12200["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12207 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12207["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12208 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12208["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12209 = temp__5802__auto____$2;
return (o12209["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12216 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12216["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12217 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12217["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12218 = temp__5802__auto____$2;
return (o12218["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12220 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12220["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12221 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12221["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12222 = temp__5802__auto____$2;
return (o12222["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12228 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12228["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12229 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12229["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12230 = temp__5802__auto____$2;
return (o12230["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12233 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12233["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12234 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12234["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12235 = temp__5802__auto____$2;
return (o12235["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12239 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12239["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12240 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12240["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12241 = temp__5802__auto____$2;
return (o12241["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12665 = arguments.length;
var i__5770__auto___12666 = (0);
while(true){
if((i__5770__auto___12666 < len__5769__auto___12665)){
args__5775__auto__.push((arguments[i__5770__auto___12666]));

var G__12669 = (i__5770__auto___12666 + (1));
i__5770__auto___12666 = G__12669;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq12256){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12256));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12680 = arguments.length;
var i__5770__auto___12681 = (0);
while(true){
if((i__5770__auto___12681 < len__5769__auto___12680)){
args__5775__auto__.push((arguments[i__5770__auto___12681]));

var G__12683 = (i__5770__auto___12681 + (1));
i__5770__auto___12681 = G__12683;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq12266){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12266));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12693 = arguments.length;
var i__5770__auto___12694 = (0);
while(true){
if((i__5770__auto___12694 < len__5769__auto___12693)){
args__5775__auto__.push((arguments[i__5770__auto___12694]));

var G__12699 = (i__5770__auto___12694 + (1));
i__5770__auto___12694 = G__12699;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq12283){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12283));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12705 = arguments.length;
var i__5770__auto___12707 = (0);
while(true){
if((i__5770__auto___12707 < len__5769__auto___12705)){
args__5775__auto__.push((arguments[i__5770__auto___12707]));

var G__12711 = (i__5770__auto___12707 + (1));
i__5770__auto___12707 = G__12711;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq12308){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12308));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12717 = arguments.length;
var i__5770__auto___12718 = (0);
while(true){
if((i__5770__auto___12718 < len__5769__auto___12717)){
args__5775__auto__.push((arguments[i__5770__auto___12718]));

var G__12721 = (i__5770__auto___12718 + (1));
i__5770__auto___12718 = G__12721;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq12326){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12326));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12736 = arguments.length;
var i__5770__auto___12737 = (0);
while(true){
if((i__5770__auto___12737 < len__5769__auto___12736)){
args__5775__auto__.push((arguments[i__5770__auto___12737]));

var G__12745 = (i__5770__auto___12737 + (1));
i__5770__auto___12737 = G__12745;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq12357){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12357));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12758 = arguments.length;
var i__5770__auto___12759 = (0);
while(true){
if((i__5770__auto___12759 < len__5769__auto___12758)){
args__5775__auto__.push((arguments[i__5770__auto___12759]));

var G__12760 = (i__5770__auto___12759 + (1));
i__5770__auto___12759 = G__12760;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq12385){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12385));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12766 = arguments.length;
var i__5770__auto___12767 = (0);
while(true){
if((i__5770__auto___12767 < len__5769__auto___12766)){
args__5775__auto__.push((arguments[i__5770__auto___12767]));

var G__12770 = (i__5770__auto___12767 + (1));
i__5770__auto___12767 = G__12770;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__12449){
var vec__12451 = p__12449;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12451,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__12413_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__12413_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq12428){
var G__12429 = cljs.core.first(seq12428);
var seq12428__$1 = cljs.core.next(seq12428);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12429,seq12428__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__12473 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__12474 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__12475 = (function (){var G__12476 = new cljs.core.Keyword(null,"li","li",723558921);
var G__12477 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__12478 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__12476,G__12477,G__12478) : devtools.format.make_template_fn.call(null,G__12476,G__12477,G__12478));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__12473,G__12474,G__12475) : devtools.format.make_template_fn.call(null,G__12473,G__12474,G__12475));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12788 = arguments.length;
var i__5770__auto___12789 = (0);
while(true){
if((i__5770__auto___12789 < len__5769__auto___12788)){
args__5775__auto__.push((arguments[i__5770__auto___12789]));

var G__12796 = (i__5770__auto___12789 + (1));
i__5770__auto___12789 = G__12796;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq12482){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12482));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12800 = arguments.length;
var i__5770__auto___12801 = (0);
while(true){
if((i__5770__auto___12801 < len__5769__auto___12800)){
args__5775__auto__.push((arguments[i__5770__auto___12801]));

var G__12803 = (i__5770__auto___12801 + (1));
i__5770__auto___12801 = G__12803;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq12516){
var G__12517 = cljs.core.first(seq12516);
var seq12516__$1 = cljs.core.next(seq12516);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12517,seq12516__$1);
}));


//# sourceMappingURL=devtools.format.js.map
