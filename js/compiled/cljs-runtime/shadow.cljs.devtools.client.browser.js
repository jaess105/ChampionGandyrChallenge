goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24106 = arguments.length;
var i__5770__auto___24107 = (0);
while(true){
if((i__5770__auto___24107 < len__5769__auto___24106)){
args__5775__auto__.push((arguments[i__5770__auto___24107]));

var G__24108 = (i__5770__auto___24107 + (1));
i__5770__auto___24107 = G__24108;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq23824){
var G__23825 = cljs.core.first(seq23824);
var seq23824__$1 = cljs.core.next(seq23824);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23825,seq23824__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__23828 = cljs.core.seq(sources);
var chunk__23829 = null;
var count__23830 = (0);
var i__23831 = (0);
while(true){
if((i__23831 < count__23830)){
var map__23836 = chunk__23829.cljs$core$IIndexed$_nth$arity$2(null,i__23831);
var map__23836__$1 = cljs.core.__destructure_map(map__23836);
var src = map__23836__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23836__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23836__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23836__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23836__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e23837){var e_24109 = e23837;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24109);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24109.message)].join('')));
}

var G__24110 = seq__23828;
var G__24111 = chunk__23829;
var G__24112 = count__23830;
var G__24113 = (i__23831 + (1));
seq__23828 = G__24110;
chunk__23829 = G__24111;
count__23830 = G__24112;
i__23831 = G__24113;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23828);
if(temp__5804__auto__){
var seq__23828__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23828__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23828__$1);
var G__24114 = cljs.core.chunk_rest(seq__23828__$1);
var G__24115 = c__5568__auto__;
var G__24116 = cljs.core.count(c__5568__auto__);
var G__24117 = (0);
seq__23828 = G__24114;
chunk__23829 = G__24115;
count__23830 = G__24116;
i__23831 = G__24117;
continue;
} else {
var map__23839 = cljs.core.first(seq__23828__$1);
var map__23839__$1 = cljs.core.__destructure_map(map__23839);
var src = map__23839__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23839__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23839__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23839__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23839__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e23841){var e_24118 = e23841;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_24118);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_24118.message)].join('')));
}

var G__24119 = cljs.core.next(seq__23828__$1);
var G__24120 = null;
var G__24121 = (0);
var G__24122 = (0);
seq__23828 = G__24119;
chunk__23829 = G__24120;
count__23830 = G__24121;
i__23831 = G__24122;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__23842 = cljs.core.seq(js_requires);
var chunk__23843 = null;
var count__23844 = (0);
var i__23845 = (0);
while(true){
if((i__23845 < count__23844)){
var js_ns = chunk__23843.cljs$core$IIndexed$_nth$arity$2(null,i__23845);
var require_str_24123 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24123);


var G__24124 = seq__23842;
var G__24125 = chunk__23843;
var G__24126 = count__23844;
var G__24127 = (i__23845 + (1));
seq__23842 = G__24124;
chunk__23843 = G__24125;
count__23844 = G__24126;
i__23845 = G__24127;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23842);
if(temp__5804__auto__){
var seq__23842__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23842__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23842__$1);
var G__24128 = cljs.core.chunk_rest(seq__23842__$1);
var G__24129 = c__5568__auto__;
var G__24130 = cljs.core.count(c__5568__auto__);
var G__24131 = (0);
seq__23842 = G__24128;
chunk__23843 = G__24129;
count__23844 = G__24130;
i__23845 = G__24131;
continue;
} else {
var js_ns = cljs.core.first(seq__23842__$1);
var require_str_24132 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_24132);


var G__24133 = cljs.core.next(seq__23842__$1);
var G__24134 = null;
var G__24135 = (0);
var G__24136 = (0);
seq__23842 = G__24133;
chunk__23843 = G__24134;
count__23844 = G__24135;
i__23845 = G__24136;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__23847){
var map__23848 = p__23847;
var map__23848__$1 = cljs.core.__destructure_map(map__23848);
var msg = map__23848__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23848__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23848__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23849(s__23850){
return (new cljs.core.LazySeq(null,(function (){
var s__23850__$1 = s__23850;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23850__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__23855 = cljs.core.first(xs__6360__auto__);
var map__23855__$1 = cljs.core.__destructure_map(map__23855);
var src = map__23855__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23855__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23855__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__23850__$1,map__23855,map__23855__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23848,map__23848__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23849_$_iter__23851(s__23852){
return (new cljs.core.LazySeq(null,((function (s__23850__$1,map__23855,map__23855__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23848,map__23848__$1,msg,info,reload_info){
return (function (){
var s__23852__$1 = s__23852;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__23852__$1);
if(temp__5804__auto____$1){
var s__23852__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23852__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__23852__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__23854 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__23853 = (0);
while(true){
if((i__23853 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__23853);
cljs.core.chunk_append(b__23854,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__24137 = (i__23853 + (1));
i__23853 = G__24137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23854),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23849_$_iter__23851(cljs.core.chunk_rest(s__23852__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23854),null);
}
} else {
var warning = cljs.core.first(s__23852__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23849_$_iter__23851(cljs.core.rest(s__23852__$2)));
}
} else {
return null;
}
break;
}
});})(s__23850__$1,map__23855,map__23855__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23848,map__23848__$1,msg,info,reload_info))
,null,null));
});})(s__23850__$1,map__23855,map__23855__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__23848,map__23848__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23849(cljs.core.rest(s__23850__$1)));
} else {
var G__24138 = cljs.core.rest(s__23850__$1);
s__23850__$1 = G__24138;
continue;
}
} else {
var G__24139 = cljs.core.rest(s__23850__$1);
s__23850__$1 = G__24139;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__23856_24140 = cljs.core.seq(warnings);
var chunk__23857_24141 = null;
var count__23858_24142 = (0);
var i__23859_24143 = (0);
while(true){
if((i__23859_24143 < count__23858_24142)){
var map__23862_24144 = chunk__23857_24141.cljs$core$IIndexed$_nth$arity$2(null,i__23859_24143);
var map__23862_24145__$1 = cljs.core.__destructure_map(map__23862_24144);
var w_24146 = map__23862_24145__$1;
var msg_24147__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23862_24145__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23862_24145__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23862_24145__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23862_24145__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24150)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24148),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24149),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24147__$1)].join(''));


var G__24151 = seq__23856_24140;
var G__24152 = chunk__23857_24141;
var G__24153 = count__23858_24142;
var G__24154 = (i__23859_24143 + (1));
seq__23856_24140 = G__24151;
chunk__23857_24141 = G__24152;
count__23858_24142 = G__24153;
i__23859_24143 = G__24154;
continue;
} else {
var temp__5804__auto___24155 = cljs.core.seq(seq__23856_24140);
if(temp__5804__auto___24155){
var seq__23856_24156__$1 = temp__5804__auto___24155;
if(cljs.core.chunked_seq_QMARK_(seq__23856_24156__$1)){
var c__5568__auto___24157 = cljs.core.chunk_first(seq__23856_24156__$1);
var G__24158 = cljs.core.chunk_rest(seq__23856_24156__$1);
var G__24159 = c__5568__auto___24157;
var G__24160 = cljs.core.count(c__5568__auto___24157);
var G__24161 = (0);
seq__23856_24140 = G__24158;
chunk__23857_24141 = G__24159;
count__23858_24142 = G__24160;
i__23859_24143 = G__24161;
continue;
} else {
var map__23863_24162 = cljs.core.first(seq__23856_24156__$1);
var map__23863_24163__$1 = cljs.core.__destructure_map(map__23863_24162);
var w_24164 = map__23863_24163__$1;
var msg_24165__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23863_24163__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_24166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23863_24163__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_24167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23863_24163__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_24168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23863_24163__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_24168)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_24166),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_24167),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_24165__$1)].join(''));


var G__24169 = cljs.core.next(seq__23856_24156__$1);
var G__24170 = null;
var G__24171 = (0);
var G__24172 = (0);
seq__23856_24140 = G__24169;
chunk__23857_24141 = G__24170;
count__23858_24142 = G__24171;
i__23859_24143 = G__24172;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__23846_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__23846_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__23864){
var map__23865 = p__23864;
var map__23865__$1 = cljs.core.__destructure_map(map__23865);
var msg = map__23865__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23865__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23865__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__23866 = cljs.core.seq(updates);
var chunk__23868 = null;
var count__23869 = (0);
var i__23870 = (0);
while(true){
if((i__23870 < count__23869)){
var path = chunk__23868.cljs$core$IIndexed$_nth$arity$2(null,i__23870);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23980_24173 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23984_24174 = null;
var count__23985_24175 = (0);
var i__23986_24176 = (0);
while(true){
if((i__23986_24176 < count__23985_24175)){
var node_24177 = chunk__23984_24174.cljs$core$IIndexed$_nth$arity$2(null,i__23986_24176);
if(cljs.core.not(node_24177.shadow$old)){
var path_match_24178 = shadow.cljs.devtools.client.browser.match_paths(node_24177.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24178)){
var new_link_24179 = (function (){var G__24012 = node_24177.cloneNode(true);
G__24012.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24178),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24012;
})();
(node_24177.shadow$old = true);

(new_link_24179.onload = ((function (seq__23980_24173,chunk__23984_24174,count__23985_24175,i__23986_24176,seq__23866,chunk__23868,count__23869,i__23870,new_link_24179,path_match_24178,node_24177,path,map__23865,map__23865__$1,msg,updates,reload_info){
return (function (e){
var seq__24013_24180 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24015_24181 = null;
var count__24016_24182 = (0);
var i__24017_24183 = (0);
while(true){
if((i__24017_24183 < count__24016_24182)){
var map__24021_24184 = chunk__24015_24181.cljs$core$IIndexed$_nth$arity$2(null,i__24017_24183);
var map__24021_24185__$1 = cljs.core.__destructure_map(map__24021_24184);
var task_24186 = map__24021_24185__$1;
var fn_str_24187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24021_24185__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24021_24185__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24189 = goog.getObjectByName(fn_str_24187,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24188)].join(''));

(fn_obj_24189.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24189.cljs$core$IFn$_invoke$arity$2(path,new_link_24179) : fn_obj_24189.call(null,path,new_link_24179));


var G__24190 = seq__24013_24180;
var G__24191 = chunk__24015_24181;
var G__24192 = count__24016_24182;
var G__24193 = (i__24017_24183 + (1));
seq__24013_24180 = G__24190;
chunk__24015_24181 = G__24191;
count__24016_24182 = G__24192;
i__24017_24183 = G__24193;
continue;
} else {
var temp__5804__auto___24194 = cljs.core.seq(seq__24013_24180);
if(temp__5804__auto___24194){
var seq__24013_24195__$1 = temp__5804__auto___24194;
if(cljs.core.chunked_seq_QMARK_(seq__24013_24195__$1)){
var c__5568__auto___24196 = cljs.core.chunk_first(seq__24013_24195__$1);
var G__24197 = cljs.core.chunk_rest(seq__24013_24195__$1);
var G__24198 = c__5568__auto___24196;
var G__24199 = cljs.core.count(c__5568__auto___24196);
var G__24200 = (0);
seq__24013_24180 = G__24197;
chunk__24015_24181 = G__24198;
count__24016_24182 = G__24199;
i__24017_24183 = G__24200;
continue;
} else {
var map__24022_24201 = cljs.core.first(seq__24013_24195__$1);
var map__24022_24202__$1 = cljs.core.__destructure_map(map__24022_24201);
var task_24203 = map__24022_24202__$1;
var fn_str_24204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24022_24202__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24022_24202__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24206 = goog.getObjectByName(fn_str_24204,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24205)].join(''));

(fn_obj_24206.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24206.cljs$core$IFn$_invoke$arity$2(path,new_link_24179) : fn_obj_24206.call(null,path,new_link_24179));


var G__24207 = cljs.core.next(seq__24013_24195__$1);
var G__24208 = null;
var G__24209 = (0);
var G__24210 = (0);
seq__24013_24180 = G__24207;
chunk__24015_24181 = G__24208;
count__24016_24182 = G__24209;
i__24017_24183 = G__24210;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24177);
});})(seq__23980_24173,chunk__23984_24174,count__23985_24175,i__23986_24176,seq__23866,chunk__23868,count__23869,i__23870,new_link_24179,path_match_24178,node_24177,path,map__23865,map__23865__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24178], 0));

goog.dom.insertSiblingAfter(new_link_24179,node_24177);


var G__24211 = seq__23980_24173;
var G__24212 = chunk__23984_24174;
var G__24213 = count__23985_24175;
var G__24214 = (i__23986_24176 + (1));
seq__23980_24173 = G__24211;
chunk__23984_24174 = G__24212;
count__23985_24175 = G__24213;
i__23986_24176 = G__24214;
continue;
} else {
var G__24215 = seq__23980_24173;
var G__24216 = chunk__23984_24174;
var G__24217 = count__23985_24175;
var G__24218 = (i__23986_24176 + (1));
seq__23980_24173 = G__24215;
chunk__23984_24174 = G__24216;
count__23985_24175 = G__24217;
i__23986_24176 = G__24218;
continue;
}
} else {
var G__24219 = seq__23980_24173;
var G__24220 = chunk__23984_24174;
var G__24221 = count__23985_24175;
var G__24222 = (i__23986_24176 + (1));
seq__23980_24173 = G__24219;
chunk__23984_24174 = G__24220;
count__23985_24175 = G__24221;
i__23986_24176 = G__24222;
continue;
}
} else {
var temp__5804__auto___24223 = cljs.core.seq(seq__23980_24173);
if(temp__5804__auto___24223){
var seq__23980_24224__$1 = temp__5804__auto___24223;
if(cljs.core.chunked_seq_QMARK_(seq__23980_24224__$1)){
var c__5568__auto___24225 = cljs.core.chunk_first(seq__23980_24224__$1);
var G__24226 = cljs.core.chunk_rest(seq__23980_24224__$1);
var G__24227 = c__5568__auto___24225;
var G__24228 = cljs.core.count(c__5568__auto___24225);
var G__24229 = (0);
seq__23980_24173 = G__24226;
chunk__23984_24174 = G__24227;
count__23985_24175 = G__24228;
i__23986_24176 = G__24229;
continue;
} else {
var node_24230 = cljs.core.first(seq__23980_24224__$1);
if(cljs.core.not(node_24230.shadow$old)){
var path_match_24231 = shadow.cljs.devtools.client.browser.match_paths(node_24230.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24231)){
var new_link_24232 = (function (){var G__24023 = node_24230.cloneNode(true);
G__24023.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24231),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24023;
})();
(node_24230.shadow$old = true);

(new_link_24232.onload = ((function (seq__23980_24173,chunk__23984_24174,count__23985_24175,i__23986_24176,seq__23866,chunk__23868,count__23869,i__23870,new_link_24232,path_match_24231,node_24230,seq__23980_24224__$1,temp__5804__auto___24223,path,map__23865,map__23865__$1,msg,updates,reload_info){
return (function (e){
var seq__24024_24233 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24026_24234 = null;
var count__24027_24235 = (0);
var i__24028_24236 = (0);
while(true){
if((i__24028_24236 < count__24027_24235)){
var map__24032_24237 = chunk__24026_24234.cljs$core$IIndexed$_nth$arity$2(null,i__24028_24236);
var map__24032_24238__$1 = cljs.core.__destructure_map(map__24032_24237);
var task_24239 = map__24032_24238__$1;
var fn_str_24240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24032_24238__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24032_24238__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24242 = goog.getObjectByName(fn_str_24240,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24241)].join(''));

(fn_obj_24242.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24242.cljs$core$IFn$_invoke$arity$2(path,new_link_24232) : fn_obj_24242.call(null,path,new_link_24232));


var G__24243 = seq__24024_24233;
var G__24244 = chunk__24026_24234;
var G__24245 = count__24027_24235;
var G__24246 = (i__24028_24236 + (1));
seq__24024_24233 = G__24243;
chunk__24026_24234 = G__24244;
count__24027_24235 = G__24245;
i__24028_24236 = G__24246;
continue;
} else {
var temp__5804__auto___24247__$1 = cljs.core.seq(seq__24024_24233);
if(temp__5804__auto___24247__$1){
var seq__24024_24248__$1 = temp__5804__auto___24247__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24024_24248__$1)){
var c__5568__auto___24249 = cljs.core.chunk_first(seq__24024_24248__$1);
var G__24250 = cljs.core.chunk_rest(seq__24024_24248__$1);
var G__24251 = c__5568__auto___24249;
var G__24252 = cljs.core.count(c__5568__auto___24249);
var G__24253 = (0);
seq__24024_24233 = G__24250;
chunk__24026_24234 = G__24251;
count__24027_24235 = G__24252;
i__24028_24236 = G__24253;
continue;
} else {
var map__24033_24254 = cljs.core.first(seq__24024_24248__$1);
var map__24033_24255__$1 = cljs.core.__destructure_map(map__24033_24254);
var task_24256 = map__24033_24255__$1;
var fn_str_24257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24033_24255__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24033_24255__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24259 = goog.getObjectByName(fn_str_24257,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24258)].join(''));

(fn_obj_24259.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24259.cljs$core$IFn$_invoke$arity$2(path,new_link_24232) : fn_obj_24259.call(null,path,new_link_24232));


var G__24260 = cljs.core.next(seq__24024_24248__$1);
var G__24261 = null;
var G__24262 = (0);
var G__24263 = (0);
seq__24024_24233 = G__24260;
chunk__24026_24234 = G__24261;
count__24027_24235 = G__24262;
i__24028_24236 = G__24263;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24230);
});})(seq__23980_24173,chunk__23984_24174,count__23985_24175,i__23986_24176,seq__23866,chunk__23868,count__23869,i__23870,new_link_24232,path_match_24231,node_24230,seq__23980_24224__$1,temp__5804__auto___24223,path,map__23865,map__23865__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24231], 0));

goog.dom.insertSiblingAfter(new_link_24232,node_24230);


var G__24264 = cljs.core.next(seq__23980_24224__$1);
var G__24265 = null;
var G__24266 = (0);
var G__24267 = (0);
seq__23980_24173 = G__24264;
chunk__23984_24174 = G__24265;
count__23985_24175 = G__24266;
i__23986_24176 = G__24267;
continue;
} else {
var G__24268 = cljs.core.next(seq__23980_24224__$1);
var G__24269 = null;
var G__24270 = (0);
var G__24271 = (0);
seq__23980_24173 = G__24268;
chunk__23984_24174 = G__24269;
count__23985_24175 = G__24270;
i__23986_24176 = G__24271;
continue;
}
} else {
var G__24272 = cljs.core.next(seq__23980_24224__$1);
var G__24273 = null;
var G__24274 = (0);
var G__24275 = (0);
seq__23980_24173 = G__24272;
chunk__23984_24174 = G__24273;
count__23985_24175 = G__24274;
i__23986_24176 = G__24275;
continue;
}
}
} else {
}
}
break;
}


var G__24276 = seq__23866;
var G__24277 = chunk__23868;
var G__24278 = count__23869;
var G__24279 = (i__23870 + (1));
seq__23866 = G__24276;
chunk__23868 = G__24277;
count__23869 = G__24278;
i__23870 = G__24279;
continue;
} else {
var G__24280 = seq__23866;
var G__24281 = chunk__23868;
var G__24282 = count__23869;
var G__24283 = (i__23870 + (1));
seq__23866 = G__24280;
chunk__23868 = G__24281;
count__23869 = G__24282;
i__23870 = G__24283;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23866);
if(temp__5804__auto__){
var seq__23866__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23866__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23866__$1);
var G__24284 = cljs.core.chunk_rest(seq__23866__$1);
var G__24285 = c__5568__auto__;
var G__24286 = cljs.core.count(c__5568__auto__);
var G__24287 = (0);
seq__23866 = G__24284;
chunk__23868 = G__24285;
count__23869 = G__24286;
i__23870 = G__24287;
continue;
} else {
var path = cljs.core.first(seq__23866__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__24034_24288 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__24038_24289 = null;
var count__24039_24290 = (0);
var i__24040_24291 = (0);
while(true){
if((i__24040_24291 < count__24039_24290)){
var node_24292 = chunk__24038_24289.cljs$core$IIndexed$_nth$arity$2(null,i__24040_24291);
if(cljs.core.not(node_24292.shadow$old)){
var path_match_24293 = shadow.cljs.devtools.client.browser.match_paths(node_24292.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24293)){
var new_link_24294 = (function (){var G__24066 = node_24292.cloneNode(true);
G__24066.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24293),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24066;
})();
(node_24292.shadow$old = true);

(new_link_24294.onload = ((function (seq__24034_24288,chunk__24038_24289,count__24039_24290,i__24040_24291,seq__23866,chunk__23868,count__23869,i__23870,new_link_24294,path_match_24293,node_24292,path,seq__23866__$1,temp__5804__auto__,map__23865,map__23865__$1,msg,updates,reload_info){
return (function (e){
var seq__24067_24295 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24069_24296 = null;
var count__24070_24297 = (0);
var i__24071_24298 = (0);
while(true){
if((i__24071_24298 < count__24070_24297)){
var map__24075_24299 = chunk__24069_24296.cljs$core$IIndexed$_nth$arity$2(null,i__24071_24298);
var map__24075_24300__$1 = cljs.core.__destructure_map(map__24075_24299);
var task_24301 = map__24075_24300__$1;
var fn_str_24302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24075_24300__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24075_24300__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24304 = goog.getObjectByName(fn_str_24302,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24303)].join(''));

(fn_obj_24304.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24304.cljs$core$IFn$_invoke$arity$2(path,new_link_24294) : fn_obj_24304.call(null,path,new_link_24294));


var G__24305 = seq__24067_24295;
var G__24306 = chunk__24069_24296;
var G__24307 = count__24070_24297;
var G__24308 = (i__24071_24298 + (1));
seq__24067_24295 = G__24305;
chunk__24069_24296 = G__24306;
count__24070_24297 = G__24307;
i__24071_24298 = G__24308;
continue;
} else {
var temp__5804__auto___24309__$1 = cljs.core.seq(seq__24067_24295);
if(temp__5804__auto___24309__$1){
var seq__24067_24310__$1 = temp__5804__auto___24309__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24067_24310__$1)){
var c__5568__auto___24311 = cljs.core.chunk_first(seq__24067_24310__$1);
var G__24312 = cljs.core.chunk_rest(seq__24067_24310__$1);
var G__24313 = c__5568__auto___24311;
var G__24314 = cljs.core.count(c__5568__auto___24311);
var G__24315 = (0);
seq__24067_24295 = G__24312;
chunk__24069_24296 = G__24313;
count__24070_24297 = G__24314;
i__24071_24298 = G__24315;
continue;
} else {
var map__24076_24316 = cljs.core.first(seq__24067_24310__$1);
var map__24076_24317__$1 = cljs.core.__destructure_map(map__24076_24316);
var task_24318 = map__24076_24317__$1;
var fn_str_24319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24076_24317__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24076_24317__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24321 = goog.getObjectByName(fn_str_24319,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24320)].join(''));

(fn_obj_24321.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24321.cljs$core$IFn$_invoke$arity$2(path,new_link_24294) : fn_obj_24321.call(null,path,new_link_24294));


var G__24322 = cljs.core.next(seq__24067_24310__$1);
var G__24323 = null;
var G__24324 = (0);
var G__24325 = (0);
seq__24067_24295 = G__24322;
chunk__24069_24296 = G__24323;
count__24070_24297 = G__24324;
i__24071_24298 = G__24325;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24292);
});})(seq__24034_24288,chunk__24038_24289,count__24039_24290,i__24040_24291,seq__23866,chunk__23868,count__23869,i__23870,new_link_24294,path_match_24293,node_24292,path,seq__23866__$1,temp__5804__auto__,map__23865,map__23865__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24293], 0));

goog.dom.insertSiblingAfter(new_link_24294,node_24292);


var G__24326 = seq__24034_24288;
var G__24327 = chunk__24038_24289;
var G__24328 = count__24039_24290;
var G__24329 = (i__24040_24291 + (1));
seq__24034_24288 = G__24326;
chunk__24038_24289 = G__24327;
count__24039_24290 = G__24328;
i__24040_24291 = G__24329;
continue;
} else {
var G__24330 = seq__24034_24288;
var G__24331 = chunk__24038_24289;
var G__24332 = count__24039_24290;
var G__24333 = (i__24040_24291 + (1));
seq__24034_24288 = G__24330;
chunk__24038_24289 = G__24331;
count__24039_24290 = G__24332;
i__24040_24291 = G__24333;
continue;
}
} else {
var G__24334 = seq__24034_24288;
var G__24335 = chunk__24038_24289;
var G__24336 = count__24039_24290;
var G__24337 = (i__24040_24291 + (1));
seq__24034_24288 = G__24334;
chunk__24038_24289 = G__24335;
count__24039_24290 = G__24336;
i__24040_24291 = G__24337;
continue;
}
} else {
var temp__5804__auto___24338__$1 = cljs.core.seq(seq__24034_24288);
if(temp__5804__auto___24338__$1){
var seq__24034_24339__$1 = temp__5804__auto___24338__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24034_24339__$1)){
var c__5568__auto___24340 = cljs.core.chunk_first(seq__24034_24339__$1);
var G__24341 = cljs.core.chunk_rest(seq__24034_24339__$1);
var G__24342 = c__5568__auto___24340;
var G__24343 = cljs.core.count(c__5568__auto___24340);
var G__24344 = (0);
seq__24034_24288 = G__24341;
chunk__24038_24289 = G__24342;
count__24039_24290 = G__24343;
i__24040_24291 = G__24344;
continue;
} else {
var node_24345 = cljs.core.first(seq__24034_24339__$1);
if(cljs.core.not(node_24345.shadow$old)){
var path_match_24346 = shadow.cljs.devtools.client.browser.match_paths(node_24345.getAttribute("href"),path);
if(cljs.core.truth_(path_match_24346)){
var new_link_24347 = (function (){var G__24077 = node_24345.cloneNode(true);
G__24077.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_24346),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__24077;
})();
(node_24345.shadow$old = true);

(new_link_24347.onload = ((function (seq__24034_24288,chunk__24038_24289,count__24039_24290,i__24040_24291,seq__23866,chunk__23868,count__23869,i__23870,new_link_24347,path_match_24346,node_24345,seq__24034_24339__$1,temp__5804__auto___24338__$1,path,seq__23866__$1,temp__5804__auto__,map__23865,map__23865__$1,msg,updates,reload_info){
return (function (e){
var seq__24078_24348 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__24080_24349 = null;
var count__24081_24350 = (0);
var i__24082_24351 = (0);
while(true){
if((i__24082_24351 < count__24081_24350)){
var map__24086_24352 = chunk__24080_24349.cljs$core$IIndexed$_nth$arity$2(null,i__24082_24351);
var map__24086_24353__$1 = cljs.core.__destructure_map(map__24086_24352);
var task_24354 = map__24086_24353__$1;
var fn_str_24355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24086_24353__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24086_24353__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24357 = goog.getObjectByName(fn_str_24355,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24356)].join(''));

(fn_obj_24357.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24357.cljs$core$IFn$_invoke$arity$2(path,new_link_24347) : fn_obj_24357.call(null,path,new_link_24347));


var G__24358 = seq__24078_24348;
var G__24359 = chunk__24080_24349;
var G__24360 = count__24081_24350;
var G__24361 = (i__24082_24351 + (1));
seq__24078_24348 = G__24358;
chunk__24080_24349 = G__24359;
count__24081_24350 = G__24360;
i__24082_24351 = G__24361;
continue;
} else {
var temp__5804__auto___24362__$2 = cljs.core.seq(seq__24078_24348);
if(temp__5804__auto___24362__$2){
var seq__24078_24363__$1 = temp__5804__auto___24362__$2;
if(cljs.core.chunked_seq_QMARK_(seq__24078_24363__$1)){
var c__5568__auto___24364 = cljs.core.chunk_first(seq__24078_24363__$1);
var G__24365 = cljs.core.chunk_rest(seq__24078_24363__$1);
var G__24366 = c__5568__auto___24364;
var G__24367 = cljs.core.count(c__5568__auto___24364);
var G__24368 = (0);
seq__24078_24348 = G__24365;
chunk__24080_24349 = G__24366;
count__24081_24350 = G__24367;
i__24082_24351 = G__24368;
continue;
} else {
var map__24087_24369 = cljs.core.first(seq__24078_24363__$1);
var map__24087_24370__$1 = cljs.core.__destructure_map(map__24087_24369);
var task_24371 = map__24087_24370__$1;
var fn_str_24372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24087_24370__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_24373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24087_24370__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_24374 = goog.getObjectByName(fn_str_24372,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_24373)].join(''));

(fn_obj_24374.cljs$core$IFn$_invoke$arity$2 ? fn_obj_24374.cljs$core$IFn$_invoke$arity$2(path,new_link_24347) : fn_obj_24374.call(null,path,new_link_24347));


var G__24375 = cljs.core.next(seq__24078_24363__$1);
var G__24376 = null;
var G__24377 = (0);
var G__24378 = (0);
seq__24078_24348 = G__24375;
chunk__24080_24349 = G__24376;
count__24081_24350 = G__24377;
i__24082_24351 = G__24378;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_24345);
});})(seq__24034_24288,chunk__24038_24289,count__24039_24290,i__24040_24291,seq__23866,chunk__23868,count__23869,i__23870,new_link_24347,path_match_24346,node_24345,seq__24034_24339__$1,temp__5804__auto___24338__$1,path,seq__23866__$1,temp__5804__auto__,map__23865,map__23865__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_24346], 0));

goog.dom.insertSiblingAfter(new_link_24347,node_24345);


var G__24379 = cljs.core.next(seq__24034_24339__$1);
var G__24380 = null;
var G__24381 = (0);
var G__24382 = (0);
seq__24034_24288 = G__24379;
chunk__24038_24289 = G__24380;
count__24039_24290 = G__24381;
i__24040_24291 = G__24382;
continue;
} else {
var G__24383 = cljs.core.next(seq__24034_24339__$1);
var G__24384 = null;
var G__24385 = (0);
var G__24386 = (0);
seq__24034_24288 = G__24383;
chunk__24038_24289 = G__24384;
count__24039_24290 = G__24385;
i__24040_24291 = G__24386;
continue;
}
} else {
var G__24387 = cljs.core.next(seq__24034_24339__$1);
var G__24388 = null;
var G__24389 = (0);
var G__24390 = (0);
seq__24034_24288 = G__24387;
chunk__24038_24289 = G__24388;
count__24039_24290 = G__24389;
i__24040_24291 = G__24390;
continue;
}
}
} else {
}
}
break;
}


var G__24391 = cljs.core.next(seq__23866__$1);
var G__24392 = null;
var G__24393 = (0);
var G__24394 = (0);
seq__23866 = G__24391;
chunk__23868 = G__24392;
count__23869 = G__24393;
i__23870 = G__24394;
continue;
} else {
var G__24395 = cljs.core.next(seq__23866__$1);
var G__24396 = null;
var G__24397 = (0);
var G__24398 = (0);
seq__23866 = G__24395;
chunk__23868 = G__24396;
count__23869 = G__24397;
i__23870 = G__24398;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__24088){
var map__24089 = p__24088;
var map__24089__$1 = cljs.core.__destructure_map(map__24089);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24089__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__24090,done,error){
var map__24091 = p__24090;
var map__24091__$1 = cljs.core.__destructure_map(map__24091);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24091__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__24092,done,error){
var map__24093 = p__24092;
var map__24093__$1 = cljs.core.__destructure_map(map__24093);
var msg = map__24093__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24093__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24093__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24093__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__24094){
var map__24095 = p__24094;
var map__24095__$1 = cljs.core.__destructure_map(map__24095);
var src = map__24095__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24095__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__24096 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24096) : done.call(null,G__24096));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__24097){
var map__24098 = p__24097;
var map__24098__$1 = cljs.core.__destructure_map(map__24098);
var msg__$1 = map__24098__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24098__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e24099){var ex = e24099;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__24100){
var map__24101 = p__24100;
var map__24101__$1 = cljs.core.__destructure_map(map__24101);
var env = map__24101__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24101__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__24102){
var map__24103 = p__24102;
var map__24103__$1 = cljs.core.__destructure_map(map__24103);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24103__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24103__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__24104){
var map__24105 = p__24104;
var map__24105__$1 = cljs.core.__destructure_map(map__24105);
var svc = map__24105__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24105__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
