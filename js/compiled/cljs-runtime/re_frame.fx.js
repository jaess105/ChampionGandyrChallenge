goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__22380 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22381 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22381);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___22587 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___22587)){
var new_db_22588 = temp__5804__auto___22587;
var fexpr__22389_22591 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__22389_22591.cljs$core$IFn$_invoke$arity$1 ? fexpr__22389_22591.cljs$core$IFn$_invoke$arity$1(new_db_22588) : fexpr__22389_22591.call(null,new_db_22588));
} else {
}

var seq__22390 = cljs.core.seq(effects_without_db);
var chunk__22391 = null;
var count__22392 = (0);
var i__22393 = (0);
while(true){
if((i__22393 < count__22392)){
var vec__22413 = chunk__22391.cljs$core$IIndexed$_nth$arity$2(null,i__22393);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22413,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22413,(1),null);
var temp__5802__auto___22597 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22597)){
var effect_fn_22598 = temp__5802__auto___22597;
(effect_fn_22598.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22598.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22598.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__22600 = seq__22390;
var G__22601 = chunk__22391;
var G__22602 = count__22392;
var G__22603 = (i__22393 + (1));
seq__22390 = G__22600;
chunk__22391 = G__22601;
count__22392 = G__22602;
i__22393 = G__22603;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22390);
if(temp__5804__auto__){
var seq__22390__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22390__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22390__$1);
var G__22604 = cljs.core.chunk_rest(seq__22390__$1);
var G__22605 = c__5568__auto__;
var G__22606 = cljs.core.count(c__5568__auto__);
var G__22607 = (0);
seq__22390 = G__22604;
chunk__22391 = G__22605;
count__22392 = G__22606;
i__22393 = G__22607;
continue;
} else {
var vec__22423 = cljs.core.first(seq__22390__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22423,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22423,(1),null);
var temp__5802__auto___22608 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22608)){
var effect_fn_22609 = temp__5802__auto___22608;
(effect_fn_22609.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22609.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22609.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__22610 = cljs.core.next(seq__22390__$1);
var G__22611 = null;
var G__22612 = (0);
var G__22613 = (0);
seq__22390 = G__22610;
chunk__22391 = G__22611;
count__22392 = G__22612;
i__22393 = G__22613;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__21442__auto___22614 = re_frame.interop.now();
var duration__21443__auto___22615 = (end__21442__auto___22614 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21443__auto___22615,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__21442__auto___22614);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22380);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___22616 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___22616)){
var new_db_22617 = temp__5804__auto___22616;
var fexpr__22432_22618 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__22432_22618.cljs$core$IFn$_invoke$arity$1 ? fexpr__22432_22618.cljs$core$IFn$_invoke$arity$1(new_db_22617) : fexpr__22432_22618.call(null,new_db_22617));
} else {
}

var seq__22433 = cljs.core.seq(effects_without_db);
var chunk__22434 = null;
var count__22435 = (0);
var i__22436 = (0);
while(true){
if((i__22436 < count__22435)){
var vec__22455 = chunk__22434.cljs$core$IIndexed$_nth$arity$2(null,i__22436);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22455,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22455,(1),null);
var temp__5802__auto___22619 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22619)){
var effect_fn_22620 = temp__5802__auto___22619;
(effect_fn_22620.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22620.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22620.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__22621 = seq__22433;
var G__22622 = chunk__22434;
var G__22623 = count__22435;
var G__22624 = (i__22436 + (1));
seq__22433 = G__22621;
chunk__22434 = G__22622;
count__22435 = G__22623;
i__22436 = G__22624;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22433);
if(temp__5804__auto__){
var seq__22433__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22433__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22433__$1);
var G__22625 = cljs.core.chunk_rest(seq__22433__$1);
var G__22626 = c__5568__auto__;
var G__22627 = cljs.core.count(c__5568__auto__);
var G__22628 = (0);
seq__22433 = G__22625;
chunk__22434 = G__22626;
count__22435 = G__22627;
i__22436 = G__22628;
continue;
} else {
var vec__22459 = cljs.core.first(seq__22433__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22459,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22459,(1),null);
var temp__5802__auto___22629 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22629)){
var effect_fn_22630 = temp__5802__auto___22629;
(effect_fn_22630.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22630.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22630.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__22633 = cljs.core.next(seq__22433__$1);
var G__22634 = null;
var G__22635 = (0);
var G__22636 = (0);
seq__22433 = G__22633;
chunk__22434 = G__22634;
count__22435 = G__22635;
i__22436 = G__22636;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__22485){
var map__22486 = p__22485;
var map__22486__$1 = cljs.core.__destructure_map(map__22486);
var effect = map__22486__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22486__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22486__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__22491 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__22493 = null;
var count__22494 = (0);
var i__22495 = (0);
while(true){
if((i__22495 < count__22494)){
var effect = chunk__22493.cljs$core$IIndexed$_nth$arity$2(null,i__22495);
re_frame.fx.dispatch_later(effect);


var G__22641 = seq__22491;
var G__22642 = chunk__22493;
var G__22643 = count__22494;
var G__22644 = (i__22495 + (1));
seq__22491 = G__22641;
chunk__22493 = G__22642;
count__22494 = G__22643;
i__22495 = G__22644;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22491);
if(temp__5804__auto__){
var seq__22491__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22491__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22491__$1);
var G__22646 = cljs.core.chunk_rest(seq__22491__$1);
var G__22647 = c__5568__auto__;
var G__22648 = cljs.core.count(c__5568__auto__);
var G__22649 = (0);
seq__22491 = G__22646;
chunk__22493 = G__22647;
count__22494 = G__22648;
i__22495 = G__22649;
continue;
} else {
var effect = cljs.core.first(seq__22491__$1);
re_frame.fx.dispatch_later(effect);


var G__22652 = cljs.core.next(seq__22491__$1);
var G__22653 = null;
var G__22654 = (0);
var G__22655 = (0);
seq__22491 = G__22652;
chunk__22493 = G__22653;
count__22494 = G__22654;
i__22495 = G__22655;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__22500 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__22501 = null;
var count__22502 = (0);
var i__22503 = (0);
while(true){
if((i__22503 < count__22502)){
var vec__22520 = chunk__22501.cljs$core$IIndexed$_nth$arity$2(null,i__22503);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22520,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22520,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___22657 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22657)){
var effect_fn_22658 = temp__5802__auto___22657;
(effect_fn_22658.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22658.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22658.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__22660 = seq__22500;
var G__22661 = chunk__22501;
var G__22662 = count__22502;
var G__22663 = (i__22503 + (1));
seq__22500 = G__22660;
chunk__22501 = G__22661;
count__22502 = G__22662;
i__22503 = G__22663;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22500);
if(temp__5804__auto__){
var seq__22500__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22500__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22500__$1);
var G__22665 = cljs.core.chunk_rest(seq__22500__$1);
var G__22666 = c__5568__auto__;
var G__22667 = cljs.core.count(c__5568__auto__);
var G__22668 = (0);
seq__22500 = G__22665;
chunk__22501 = G__22666;
count__22502 = G__22667;
i__22503 = G__22668;
continue;
} else {
var vec__22533 = cljs.core.first(seq__22500__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22533,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22533,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___22669 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___22669)){
var effect_fn_22670 = temp__5802__auto___22669;
(effect_fn_22670.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22670.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22670.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__22671 = cljs.core.next(seq__22500__$1);
var G__22672 = null;
var G__22673 = (0);
var G__22674 = (0);
seq__22500 = G__22671;
chunk__22501 = G__22672;
count__22502 = G__22673;
i__22503 = G__22674;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__22540 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__22541 = null;
var count__22542 = (0);
var i__22543 = (0);
while(true){
if((i__22543 < count__22542)){
var event = chunk__22541.cljs$core$IIndexed$_nth$arity$2(null,i__22543);
re_frame.router.dispatch(event);


var G__22675 = seq__22540;
var G__22676 = chunk__22541;
var G__22677 = count__22542;
var G__22678 = (i__22543 + (1));
seq__22540 = G__22675;
chunk__22541 = G__22676;
count__22542 = G__22677;
i__22543 = G__22678;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22540);
if(temp__5804__auto__){
var seq__22540__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22540__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22540__$1);
var G__22679 = cljs.core.chunk_rest(seq__22540__$1);
var G__22680 = c__5568__auto__;
var G__22681 = cljs.core.count(c__5568__auto__);
var G__22682 = (0);
seq__22540 = G__22679;
chunk__22541 = G__22680;
count__22542 = G__22681;
i__22543 = G__22682;
continue;
} else {
var event = cljs.core.first(seq__22540__$1);
re_frame.router.dispatch(event);


var G__22686 = cljs.core.next(seq__22540__$1);
var G__22687 = null;
var G__22688 = (0);
var G__22689 = (0);
seq__22540 = G__22686;
chunk__22541 = G__22687;
count__22542 = G__22688;
i__22543 = G__22689;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__22562 = cljs.core.seq(value);
var chunk__22563 = null;
var count__22564 = (0);
var i__22565 = (0);
while(true){
if((i__22565 < count__22564)){
var event = chunk__22563.cljs$core$IIndexed$_nth$arity$2(null,i__22565);
clear_event(event);


var G__22693 = seq__22562;
var G__22694 = chunk__22563;
var G__22695 = count__22564;
var G__22696 = (i__22565 + (1));
seq__22562 = G__22693;
chunk__22563 = G__22694;
count__22564 = G__22695;
i__22565 = G__22696;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22562);
if(temp__5804__auto__){
var seq__22562__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22562__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22562__$1);
var G__22698 = cljs.core.chunk_rest(seq__22562__$1);
var G__22699 = c__5568__auto__;
var G__22700 = cljs.core.count(c__5568__auto__);
var G__22701 = (0);
seq__22562 = G__22698;
chunk__22563 = G__22699;
count__22564 = G__22700;
i__22565 = G__22701;
continue;
} else {
var event = cljs.core.first(seq__22562__$1);
clear_event(event);


var G__22702 = cljs.core.next(seq__22562__$1);
var G__22703 = null;
var G__22704 = (0);
var G__22705 = (0);
seq__22562 = G__22702;
chunk__22563 = G__22703;
count__22564 = G__22704;
i__22565 = G__22705;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__22575 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22576 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22576);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__21442__auto___22708 = re_frame.interop.now();
var duration__21443__auto___22709 = (end__21442__auto___22708 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21443__auto___22709,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__21442__auto___22708);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22575);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
