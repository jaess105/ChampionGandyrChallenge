goog.provide('devtools.formatters.templating');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x17686_18363 = value;
(x17686_18363.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x17730_18371 = value;
(x17730_18371.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x17791_18379 = value;
(x17791_18379.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_(value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18399 = arguments.length;
var i__5770__auto___18401 = (0);
while(true){
if((i__5770__auto___18401 < len__5769__auto___18399)){
args__5775__auto__.push((arguments[i__5770__auto___18401]));

var G__18404 = (i__5770__auto___18401 + (1));
i__5770__auto___18401 = G__18404;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_([]);
var seq__17855_18414 = cljs.core.seq(items);
var chunk__17856_18415 = null;
var count__17857_18416 = (0);
var i__17858_18417 = (0);
while(true){
if((i__17858_18417 < count__17857_18416)){
var item_18422 = chunk__17856_18415.cljs$core$IIndexed$_nth$arity$2(null,i__17858_18417);
if((!((item_18422 == null)))){
if(cljs.core.coll_QMARK_(item_18422)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_18422)));
} else {
group.push(devtools.formatters.helpers.pref(item_18422));
}
} else {
}


var G__18438 = seq__17855_18414;
var G__18439 = chunk__17856_18415;
var G__18440 = count__17857_18416;
var G__18441 = (i__17858_18417 + (1));
seq__17855_18414 = G__18438;
chunk__17856_18415 = G__18439;
count__17857_18416 = G__18440;
i__17858_18417 = G__18441;
continue;
} else {
var temp__5804__auto___18442 = cljs.core.seq(seq__17855_18414);
if(temp__5804__auto___18442){
var seq__17855_18443__$1 = temp__5804__auto___18442;
if(cljs.core.chunked_seq_QMARK_(seq__17855_18443__$1)){
var c__5568__auto___18444 = cljs.core.chunk_first(seq__17855_18443__$1);
var G__18445 = cljs.core.chunk_rest(seq__17855_18443__$1);
var G__18446 = c__5568__auto___18444;
var G__18447 = cljs.core.count(c__5568__auto___18444);
var G__18448 = (0);
seq__17855_18414 = G__18445;
chunk__17856_18415 = G__18446;
count__17857_18416 = G__18447;
i__17858_18417 = G__18448;
continue;
} else {
var item_18450 = cljs.core.first(seq__17855_18443__$1);
if((!((item_18450 == null)))){
if(cljs.core.coll_QMARK_(item_18450)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_18450)));
} else {
group.push(devtools.formatters.helpers.pref(item_18450));
}
} else {
}


var G__18454 = cljs.core.next(seq__17855_18443__$1);
var G__18455 = null;
var G__18456 = (0);
var G__18457 = (0);
seq__17855_18414 = G__18454;
chunk__17856_18415 = G__18455;
count__17857_18416 = G__18456;
i__17858_18417 = G__18457;
continue;
}
} else {
}
}
break;
}

return group;
}));

(devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq17843){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17843));
}));

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18461 = arguments.length;
var i__5770__auto___18462 = (0);
while(true){
if((i__5770__auto___18462 < len__5769__auto___18461)){
args__5775__auto__.push((arguments[i__5770__auto___18462]));

var G__18463 = (i__5770__auto___18462 + (1));
i__5770__auto___18462 = G__18463;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref(tag);
var style__$1 = devtools.formatters.helpers.pref(style);
var template = devtools.formatters.templating.mark_as_template_BANG_([tag__$1,((cljs.core.empty_QMARK_(style__$1))?({}):({"style": style__$1}))]);
var seq__17906_18466 = cljs.core.seq(children);
var chunk__17907_18467 = null;
var count__17908_18468 = (0);
var i__17909_18469 = (0);
while(true){
if((i__17909_18469 < count__17908_18468)){
var child_18470 = chunk__17907_18467.cljs$core$IIndexed$_nth$arity$2(null,i__17909_18469);
if((!((child_18470 == null)))){
if(cljs.core.coll_QMARK_(child_18470)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_18470))));
} else {
var temp__5802__auto___18477 = devtools.formatters.helpers.pref(child_18470);
if(cljs.core.truth_(temp__5802__auto___18477)){
var child_value_18478 = temp__5802__auto___18477;
template.push(child_value_18478);
} else {
}
}
} else {
}


var G__18479 = seq__17906_18466;
var G__18480 = chunk__17907_18467;
var G__18481 = count__17908_18468;
var G__18482 = (i__17909_18469 + (1));
seq__17906_18466 = G__18479;
chunk__17907_18467 = G__18480;
count__17908_18468 = G__18481;
i__17909_18469 = G__18482;
continue;
} else {
var temp__5804__auto___18483 = cljs.core.seq(seq__17906_18466);
if(temp__5804__auto___18483){
var seq__17906_18484__$1 = temp__5804__auto___18483;
if(cljs.core.chunked_seq_QMARK_(seq__17906_18484__$1)){
var c__5568__auto___18485 = cljs.core.chunk_first(seq__17906_18484__$1);
var G__18487 = cljs.core.chunk_rest(seq__17906_18484__$1);
var G__18488 = c__5568__auto___18485;
var G__18489 = cljs.core.count(c__5568__auto___18485);
var G__18490 = (0);
seq__17906_18466 = G__18487;
chunk__17907_18467 = G__18488;
count__17908_18468 = G__18489;
i__17909_18469 = G__18490;
continue;
} else {
var child_18492 = cljs.core.first(seq__17906_18484__$1);
if((!((child_18492 == null)))){
if(cljs.core.coll_QMARK_(child_18492)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_18492))));
} else {
var temp__5802__auto___18494 = devtools.formatters.helpers.pref(child_18492);
if(cljs.core.truth_(temp__5802__auto___18494)){
var child_value_18496 = temp__5802__auto___18494;
template.push(child_value_18496);
} else {
}
}
} else {
}


var G__18499 = cljs.core.next(seq__17906_18484__$1);
var G__18500 = null;
var G__18501 = (0);
var G__18502 = (0);
seq__17906_18466 = G__18499;
chunk__17907_18467 = G__18500;
count__17908_18468 = G__18501;
i__17909_18469 = G__18502;
continue;
}
} else {
}
}
break;
}

return template;
}));

(devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq17891){
var G__17892 = cljs.core.first(seq17891);
var seq17891__$1 = cljs.core.next(seq17891);
var G__17893 = cljs.core.first(seq17891__$1);
var seq17891__$2 = cljs.core.next(seq17891__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17892,G__17893,seq17891__$2);
}));

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18506 = arguments.length;
var i__5770__auto___18507 = (0);
while(true){
if((i__5770__auto___18507 < len__5769__auto___18506)){
args__5775__auto__.push((arguments[i__5770__auto___18507]));

var G__18508 = (i__5770__auto___18507 + (1));
i__5770__auto___18507 = G__18508;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_((template["concat"]).apply(template,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.into_array,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,templates)))));
}));

(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq17955){
var G__17956 = cljs.core.first(seq17955);
var seq17955__$1 = cljs.core.next(seq17955);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17956,seq17955__$1);
}));

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18516 = arguments.length;
var i__5770__auto___18517 = (0);
while(true){
if((i__5770__auto___18517 < len__5769__auto___18516)){
args__5775__auto__.push((arguments[i__5770__auto___18517]));

var G__18519 = (i__5770__auto___18517 + (1));
i__5770__auto___18517 = G__18519;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
}));

(devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq17994){
var G__17995 = cljs.core.first(seq17994);
var seq17994__$1 = cljs.core.next(seq17994);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17995,seq17994__$1);
}));

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__18059 = arguments.length;
switch (G__18059) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2(object,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3(object,header,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4(object,header,body,(0));
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_((function (){var obj18136 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__5045__auto__ = start_index;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()});
return obj18136;
})());
}));

(devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4);

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18555 = arguments.length;
var i__5770__auto___18556 = (0);
while(true){
if((i__5770__auto___18556 < len__5769__auto___18555)){
args__5775__auto__.push((arguments[i__5770__auto___18556]));

var G__18558 = (i__5770__auto___18556 + (1));
i__5770__auto___18556 = G__18558;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__18252){
var vec__18253 = p__18252;
var state_override_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18253,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_(state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nil-label","nil-label",-587789203)], 0));
} else {
var sub_state = (((!((state_override_fn == null))))?(function (){var G__18262 = devtools.formatters.state.get_current_state();
return (state_override_fn.cljs$core$IFn$_invoke$arity$1 ? state_override_fn.cljs$core$IFn$_invoke$arity$1(G__18262) : state_override_fn.call(null,G__18262));
})():devtools.formatters.state.get_current_state());
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["object",({"object": object, "config": sub_state})], 0));
}
}));

(devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq18244){
var G__18245 = cljs.core.first(seq18244);
var seq18244__$1 = cljs.core.next(seq18244);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18245,seq18244__$1);
}));

devtools.formatters.templating.make_annotation = (function devtools$formatters$templating$make_annotation(data,markups){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(devtools.formatters.templating.make_group,"annotation",cljs.core.clj__GT_js(data),markups);
});
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__18276 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__18277 = (1);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__18277);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([markup], 0));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__18276);
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_(v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk(f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",devtools.formatters.templating.add_stack_separators(devtools.formatters.templating.pprint_render_calls(devtools.formatters.templating.replace_fns_with_markers(cljs.core.reverse(stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",devtools.formatters.templating.pprint_render_path(devtools.formatters.templating._STAR_current_render_path_STAR_),"\n","Render stack:\n",devtools.formatters.templating.pprint_render_stack(devtools.formatters.templating._STAR_current_render_stack_STAR_)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_(markup)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__18303 = name;
switch (G__18303) {
case "surrogate":
var obj = cljs.core.first(args);
var converted_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest(args));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_surrogate,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first(args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_(obj))?(devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1 ? devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1(obj) : devtools.formatters.templating.render_json_ml_STAR_.call(null,obj)):obj);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_reference,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest(args)));

break;
case "annotation":
var data = cljs.core.first(args);
var converted_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest(args));
return devtools.formatters.templating.make_annotation(data,converted_args);

break;
default:
return devtools.formatters.templating.assert_markup_error(["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_(v)) || (((cljs.core.array_QMARK_(v)) || (typeof v === 'string'))))){
return cljs.core.empty_QMARK_(v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__18325 = tag;
var html_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18325,(0),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18325,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_(markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__18331 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__18332 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first(markup));
(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__18332);

try{var tag = devtools.formatters.helpers.pref(cljs.core.first(markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special(tag,cljs.core.rest(markup));
} else {
if(cljs.core.sequential_QMARK_(tag)){
return devtools.formatters.templating.render_subtree(tag,cljs.core.rest(markup));
} else {
return devtools.formatters.templating.assert_markup_error(["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview(markup)),":"].join(''));

}
}
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__18331);
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__18339 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__18340 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__18341 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__18342 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__18341);

(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__18342);

try{return devtools.formatters.templating.render_json_ml_STAR_(markup);
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__18340);

(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__18339);
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),"initial value: ",devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_value], 0))].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_(value)){
var G__18635 = initial_value;
var G__18636 = (value.cljs$core$IFn$_invoke$arity$0 ? value.cljs$core$IFn$_invoke$arity$0() : value.call(null));
initial_value = G__18635;
value = G__18636;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__18640 = initial_value;
var G__18641 = devtools.formatters.helpers.pref(value);
initial_value = G__18640;
value = G__18641;
continue;
} else {
if(cljs.core.sequential_QMARK_(value)){
var G__18643 = initial_value;
var G__18644 = devtools.formatters.templating.render_json_ml(value);
initial_value = G__18643;
value = G__18644;
continue;
} else {
if(devtools.formatters.templating.template_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_(value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_(value,value);
});

//# sourceMappingURL=devtools.formatters.templating.js.map
