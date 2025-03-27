goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__21516){
var map__21517 = p__21516;
var map__21517__$1 = cljs.core.__destructure_map(map__21517);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21517__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21517__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21517__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21517__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__21534_21637 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__21535_21638 = null;
var count__21536_21639 = (0);
var i__21537_21640 = (0);
while(true){
if((i__21537_21640 < count__21536_21639)){
var vec__21570_21643 = chunk__21535_21638.cljs$core$IIndexed$_nth$arity$2(null,i__21537_21640);
var k_21644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21570_21643,(0),null);
var cb_21645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21570_21643,(1),null);
try{var G__21580_21646 = cljs.core.deref(re_frame.trace.traces);
(cb_21645.cljs$core$IFn$_invoke$arity$1 ? cb_21645.cljs$core$IFn$_invoke$arity$1(G__21580_21646) : cb_21645.call(null,G__21580_21646));
}catch (e21577){var e_21648 = e21577;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21644,"while storing",cljs.core.deref(re_frame.trace.traces),e_21648], 0));
}

var G__21653 = seq__21534_21637;
var G__21655 = chunk__21535_21638;
var G__21656 = count__21536_21639;
var G__21657 = (i__21537_21640 + (1));
seq__21534_21637 = G__21653;
chunk__21535_21638 = G__21655;
count__21536_21639 = G__21656;
i__21537_21640 = G__21657;
continue;
} else {
var temp__5804__auto___21658 = cljs.core.seq(seq__21534_21637);
if(temp__5804__auto___21658){
var seq__21534_21659__$1 = temp__5804__auto___21658;
if(cljs.core.chunked_seq_QMARK_(seq__21534_21659__$1)){
var c__5568__auto___21661 = cljs.core.chunk_first(seq__21534_21659__$1);
var G__21662 = cljs.core.chunk_rest(seq__21534_21659__$1);
var G__21663 = c__5568__auto___21661;
var G__21664 = cljs.core.count(c__5568__auto___21661);
var G__21665 = (0);
seq__21534_21637 = G__21662;
chunk__21535_21638 = G__21663;
count__21536_21639 = G__21664;
i__21537_21640 = G__21665;
continue;
} else {
var vec__21583_21666 = cljs.core.first(seq__21534_21659__$1);
var k_21667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21583_21666,(0),null);
var cb_21668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21583_21666,(1),null);
try{var G__21589_21674 = cljs.core.deref(re_frame.trace.traces);
(cb_21668.cljs$core$IFn$_invoke$arity$1 ? cb_21668.cljs$core$IFn$_invoke$arity$1(G__21589_21674) : cb_21668.call(null,G__21589_21674));
}catch (e21588){var e_21676 = e21588;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_21667,"while storing",cljs.core.deref(re_frame.trace.traces),e_21676], 0));
}

var G__21678 = cljs.core.next(seq__21534_21659__$1);
var G__21679 = null;
var G__21680 = (0);
var G__21681 = (0);
seq__21534_21637 = G__21678;
chunk__21535_21638 = G__21679;
count__21536_21639 = G__21680;
i__21537_21640 = G__21681;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
