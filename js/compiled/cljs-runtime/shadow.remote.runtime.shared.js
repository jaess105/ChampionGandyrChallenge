goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__15084){
var map__15085 = p__15084;
var map__15085__$1 = cljs.core.__destructure_map(map__15085);
var runtime = map__15085__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15085__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_15389 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_15389)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__15095 = runtime;
var G__15096 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_15389);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__15095,G__15096) : shadow.remote.runtime.shared.process.call(null,G__15095,G__15096));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__15102,res){
var map__15105 = p__15102;
var map__15105__$1 = cljs.core.__destructure_map(map__15105);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15105__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15105__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__15108 = res;
var G__15108__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15108,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__15108);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15108__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__15108__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__15130 = arguments.length;
switch (G__15130) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__15139,msg,handlers,timeout_after_ms){
var map__15140 = p__15139;
var map__15140__$1 = cljs.core.__destructure_map(map__15140);
var runtime = map__15140__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15140__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15414 = arguments.length;
var i__5770__auto___15415 = (0);
while(true){
if((i__5770__auto___15415 < len__5769__auto___15414)){
args__5775__auto__.push((arguments[i__5770__auto___15415]));

var G__15416 = (i__5770__auto___15415 + (1));
i__5770__auto___15415 = G__15416;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__15158,ev,args){
var map__15161 = p__15158;
var map__15161__$1 = cljs.core.__destructure_map(map__15161);
var runtime = map__15161__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15161__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__15165 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__15168 = null;
var count__15169 = (0);
var i__15170 = (0);
while(true){
if((i__15170 < count__15169)){
var ext = chunk__15168.cljs$core$IIndexed$_nth$arity$2(null,i__15170);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15422 = seq__15165;
var G__15423 = chunk__15168;
var G__15424 = count__15169;
var G__15425 = (i__15170 + (1));
seq__15165 = G__15422;
chunk__15168 = G__15423;
count__15169 = G__15424;
i__15170 = G__15425;
continue;
} else {
var G__15428 = seq__15165;
var G__15429 = chunk__15168;
var G__15430 = count__15169;
var G__15431 = (i__15170 + (1));
seq__15165 = G__15428;
chunk__15168 = G__15429;
count__15169 = G__15430;
i__15170 = G__15431;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15165);
if(temp__5804__auto__){
var seq__15165__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15165__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15165__$1);
var G__15432 = cljs.core.chunk_rest(seq__15165__$1);
var G__15433 = c__5568__auto__;
var G__15434 = cljs.core.count(c__5568__auto__);
var G__15435 = (0);
seq__15165 = G__15432;
chunk__15168 = G__15433;
count__15169 = G__15434;
i__15170 = G__15435;
continue;
} else {
var ext = cljs.core.first(seq__15165__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15436 = cljs.core.next(seq__15165__$1);
var G__15437 = null;
var G__15438 = (0);
var G__15439 = (0);
seq__15165 = G__15436;
chunk__15168 = G__15437;
count__15169 = G__15438;
i__15170 = G__15439;
continue;
} else {
var G__15441 = cljs.core.next(seq__15165__$1);
var G__15442 = null;
var G__15443 = (0);
var G__15444 = (0);
seq__15165 = G__15441;
chunk__15168 = G__15442;
count__15169 = G__15443;
i__15170 = G__15444;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq15147){
var G__15148 = cljs.core.first(seq15147);
var seq15147__$1 = cljs.core.next(seq15147);
var G__15149 = cljs.core.first(seq15147__$1);
var seq15147__$2 = cljs.core.next(seq15147__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15148,G__15149,seq15147__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__15210,p__15211){
var map__15213 = p__15210;
var map__15213__$1 = cljs.core.__destructure_map(map__15213);
var runtime = map__15213__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15213__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15214 = p__15211;
var map__15214__$1 = cljs.core.__destructure_map(map__15214);
var msg = map__15214__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15214__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__15220 = cljs.core.deref(state_ref);
var map__15220__$1 = cljs.core.__destructure_map(map__15220);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15220__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15220__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__15223,msg){
var map__15224 = p__15223;
var map__15224__$1 = cljs.core.__destructure_map(map__15224);
var runtime = map__15224__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15224__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__15233,key,p__15234){
var map__15235 = p__15233;
var map__15235__$1 = cljs.core.__destructure_map(map__15235);
var state = map__15235__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15235__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__15236 = p__15234;
var map__15236__$1 = cljs.core.__destructure_map(map__15236);
var spec = map__15236__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15236__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__15253,key,spec){
var map__15255 = p__15253;
var map__15255__$1 = cljs.core.__destructure_map(map__15255);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15255__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__15257_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__15257_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__15258_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__15258_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__15259_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__15259_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__15260_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__15260_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__15261_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__15261_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__15279,key){
var map__15280 = p__15279;
var map__15280__$1 = cljs.core.__destructure_map(map__15280);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15280__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__15283,msg){
var map__15284 = p__15283;
var map__15284__$1 = cljs.core.__destructure_map(map__15284);
var runtime = map__15284__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15284__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__15303,p__15304){
var map__15305 = p__15303;
var map__15305__$1 = cljs.core.__destructure_map(map__15305);
var runtime = map__15305__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15305__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15307 = p__15304;
var map__15307__$1 = cljs.core.__destructure_map(map__15307);
var msg = map__15307__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15307__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15307__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__15325 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__15327 = null;
var count__15328 = (0);
var i__15329 = (0);
while(true){
if((i__15329 < count__15328)){
var map__15353 = chunk__15327.cljs$core$IIndexed$_nth$arity$2(null,i__15329);
var map__15353__$1 = cljs.core.__destructure_map(map__15353);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15353__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15527 = seq__15325;
var G__15528 = chunk__15327;
var G__15529 = count__15328;
var G__15530 = (i__15329 + (1));
seq__15325 = G__15527;
chunk__15327 = G__15528;
count__15328 = G__15529;
i__15329 = G__15530;
continue;
} else {
var G__15532 = seq__15325;
var G__15533 = chunk__15327;
var G__15534 = count__15328;
var G__15535 = (i__15329 + (1));
seq__15325 = G__15532;
chunk__15327 = G__15533;
count__15328 = G__15534;
i__15329 = G__15535;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15325);
if(temp__5804__auto__){
var seq__15325__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15325__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15325__$1);
var G__15539 = cljs.core.chunk_rest(seq__15325__$1);
var G__15540 = c__5568__auto__;
var G__15541 = cljs.core.count(c__5568__auto__);
var G__15542 = (0);
seq__15325 = G__15539;
chunk__15327 = G__15540;
count__15328 = G__15541;
i__15329 = G__15542;
continue;
} else {
var map__15357 = cljs.core.first(seq__15325__$1);
var map__15357__$1 = cljs.core.__destructure_map(map__15357);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15357__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15548 = cljs.core.next(seq__15325__$1);
var G__15549 = null;
var G__15550 = (0);
var G__15551 = (0);
seq__15325 = G__15548;
chunk__15327 = G__15549;
count__15328 = G__15550;
i__15329 = G__15551;
continue;
} else {
var G__15552 = cljs.core.next(seq__15325__$1);
var G__15553 = null;
var G__15554 = (0);
var G__15555 = (0);
seq__15325 = G__15552;
chunk__15327 = G__15553;
count__15328 = G__15554;
i__15329 = G__15555;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
