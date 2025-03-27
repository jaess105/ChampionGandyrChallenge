goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20129){
var map__20131 = p__20129;
var map__20131__$1 = cljs.core.__destructure_map(map__20131);
var m = map__20131__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20131__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20131__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20146_20673 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20147_20674 = null;
var count__20148_20675 = (0);
var i__20149_20676 = (0);
while(true){
if((i__20149_20676 < count__20148_20675)){
var f_20680 = chunk__20147_20674.cljs$core$IIndexed$_nth$arity$2(null,i__20149_20676);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20680], 0));


var G__20681 = seq__20146_20673;
var G__20682 = chunk__20147_20674;
var G__20683 = count__20148_20675;
var G__20684 = (i__20149_20676 + (1));
seq__20146_20673 = G__20681;
chunk__20147_20674 = G__20682;
count__20148_20675 = G__20683;
i__20149_20676 = G__20684;
continue;
} else {
var temp__5804__auto___20685 = cljs.core.seq(seq__20146_20673);
if(temp__5804__auto___20685){
var seq__20146_20686__$1 = temp__5804__auto___20685;
if(cljs.core.chunked_seq_QMARK_(seq__20146_20686__$1)){
var c__5568__auto___20687 = cljs.core.chunk_first(seq__20146_20686__$1);
var G__20688 = cljs.core.chunk_rest(seq__20146_20686__$1);
var G__20689 = c__5568__auto___20687;
var G__20690 = cljs.core.count(c__5568__auto___20687);
var G__20691 = (0);
seq__20146_20673 = G__20688;
chunk__20147_20674 = G__20689;
count__20148_20675 = G__20690;
i__20149_20676 = G__20691;
continue;
} else {
var f_20692 = cljs.core.first(seq__20146_20686__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20692], 0));


var G__20693 = cljs.core.next(seq__20146_20686__$1);
var G__20694 = null;
var G__20695 = (0);
var G__20696 = (0);
seq__20146_20673 = G__20693;
chunk__20147_20674 = G__20694;
count__20148_20675 = G__20695;
i__20149_20676 = G__20696;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20699 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20699], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20699)))?cljs.core.second(arglists_20699):arglists_20699)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20179_20704 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20181_20705 = null;
var count__20182_20706 = (0);
var i__20183_20707 = (0);
while(true){
if((i__20183_20707 < count__20182_20706)){
var vec__20203_20709 = chunk__20181_20705.cljs$core$IIndexed$_nth$arity$2(null,i__20183_20707);
var name_20710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20203_20709,(0),null);
var map__20206_20711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20203_20709,(1),null);
var map__20206_20712__$1 = cljs.core.__destructure_map(map__20206_20711);
var doc_20713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20206_20712__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20206_20712__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20710], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20714], 0));

if(cljs.core.truth_(doc_20713)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20713], 0));
} else {
}


var G__20716 = seq__20179_20704;
var G__20717 = chunk__20181_20705;
var G__20718 = count__20182_20706;
var G__20719 = (i__20183_20707 + (1));
seq__20179_20704 = G__20716;
chunk__20181_20705 = G__20717;
count__20182_20706 = G__20718;
i__20183_20707 = G__20719;
continue;
} else {
var temp__5804__auto___20720 = cljs.core.seq(seq__20179_20704);
if(temp__5804__auto___20720){
var seq__20179_20721__$1 = temp__5804__auto___20720;
if(cljs.core.chunked_seq_QMARK_(seq__20179_20721__$1)){
var c__5568__auto___20722 = cljs.core.chunk_first(seq__20179_20721__$1);
var G__20723 = cljs.core.chunk_rest(seq__20179_20721__$1);
var G__20724 = c__5568__auto___20722;
var G__20725 = cljs.core.count(c__5568__auto___20722);
var G__20726 = (0);
seq__20179_20704 = G__20723;
chunk__20181_20705 = G__20724;
count__20182_20706 = G__20725;
i__20183_20707 = G__20726;
continue;
} else {
var vec__20240_20728 = cljs.core.first(seq__20179_20721__$1);
var name_20729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20240_20728,(0),null);
var map__20243_20730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20240_20728,(1),null);
var map__20243_20731__$1 = cljs.core.__destructure_map(map__20243_20730);
var doc_20732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243_20731__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20243_20731__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20729], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20733], 0));

if(cljs.core.truth_(doc_20732)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20732], 0));
} else {
}


var G__20734 = cljs.core.next(seq__20179_20721__$1);
var G__20735 = null;
var G__20736 = (0);
var G__20737 = (0);
seq__20179_20704 = G__20734;
chunk__20181_20705 = G__20735;
count__20182_20706 = G__20736;
i__20183_20707 = G__20737;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20264 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20265 = null;
var count__20266 = (0);
var i__20267 = (0);
while(true){
if((i__20267 < count__20266)){
var role = chunk__20265.cljs$core$IIndexed$_nth$arity$2(null,i__20267);
var temp__5804__auto___20746__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20746__$1)){
var spec_20747 = temp__5804__auto___20746__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20747)], 0));
} else {
}


var G__20748 = seq__20264;
var G__20749 = chunk__20265;
var G__20750 = count__20266;
var G__20751 = (i__20267 + (1));
seq__20264 = G__20748;
chunk__20265 = G__20749;
count__20266 = G__20750;
i__20267 = G__20751;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20264);
if(temp__5804__auto____$1){
var seq__20264__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20264__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20264__$1);
var G__20752 = cljs.core.chunk_rest(seq__20264__$1);
var G__20753 = c__5568__auto__;
var G__20754 = cljs.core.count(c__5568__auto__);
var G__20755 = (0);
seq__20264 = G__20752;
chunk__20265 = G__20753;
count__20266 = G__20754;
i__20267 = G__20755;
continue;
} else {
var role = cljs.core.first(seq__20264__$1);
var temp__5804__auto___20756__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20756__$2)){
var spec_20757 = temp__5804__auto___20756__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20757)], 0));
} else {
}


var G__20758 = cljs.core.next(seq__20264__$1);
var G__20759 = null;
var G__20760 = (0);
var G__20761 = (0);
seq__20264 = G__20758;
chunk__20265 = G__20759;
count__20266 = G__20760;
i__20267 = G__20761;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20763 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20764 = cljs.core.ex_cause(t);
via = G__20763;
t = G__20764;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20344 = datafied_throwable;
var map__20344__$1 = cljs.core.__destructure_map(map__20344);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20344__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20344__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20344__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20349 = cljs.core.last(via);
var map__20349__$1 = cljs.core.__destructure_map(map__20349);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20349__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20349__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20349__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20350 = data;
var map__20350__$1 = cljs.core.__destructure_map(map__20350);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20350__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20350__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20350__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20351 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20351__$1 = cljs.core.__destructure_map(map__20351);
var top_data = map__20351__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20351__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20355 = phase;
var G__20355__$1 = (((G__20355 instanceof cljs.core.Keyword))?G__20355.fqn:null);
switch (G__20355__$1) {
case "read-source":
var map__20363 = data;
var map__20363__$1 = cljs.core.__destructure_map(map__20363);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20363__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20363__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20372 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20372__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20372,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20372);
var G__20372__$2 = (cljs.core.truth_((function (){var fexpr__20385 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20385.cljs$core$IFn$_invoke$arity$1 ? fexpr__20385.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20385.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20372__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20372__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20372__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20372__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20399 = top_data;
var G__20399__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20399,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20399);
var G__20399__$2 = (cljs.core.truth_((function (){var fexpr__20418 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20418.cljs$core$IFn$_invoke$arity$1 ? fexpr__20418.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20418.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20399__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20399__$1);
var G__20399__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20399__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20399__$2);
var G__20399__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20399__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20399__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20399__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20399__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20452 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20452,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20452,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20452,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20452,(3),null);
var G__20458 = top_data;
var G__20458__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20458,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20458);
var G__20458__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20458__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20458__$1);
var G__20458__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20458__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20458__$2);
var G__20458__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20458__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20458__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20458__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20458__$4;
}

break;
case "execution":
var vec__20483 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20483,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20483,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20483,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20483,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20340_SHARP_){
var or__5045__auto__ = (p1__20340_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20492 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20492.cljs$core$IFn$_invoke$arity$1 ? fexpr__20492.cljs$core$IFn$_invoke$arity$1(p1__20340_SHARP_) : fexpr__20492.call(null,p1__20340_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20499 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20499__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20499,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20499);
var G__20499__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20499__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20499__$1);
var G__20499__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20499__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20499__$2);
var G__20499__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20499__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20499__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20499__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20499__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20355__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20519){
var map__20520 = p__20519;
var map__20520__$1 = cljs.core.__destructure_map(map__20520);
var triage_data = map__20520__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20534 = phase;
var G__20534__$1 = (((G__20534 instanceof cljs.core.Keyword))?G__20534.fqn:null);
switch (G__20534__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20540 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20541 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20542 = loc;
var G__20543 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20548_20797 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20549_20798 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20550_20799 = true;
var _STAR_print_fn_STAR__temp_val__20551_20800 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20550_20799);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20551_20800);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20514_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20514_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20549_20798);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20548_20797);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20540,G__20541,G__20542,G__20543) : format.call(null,G__20540,G__20541,G__20542,G__20543));

break;
case "macroexpansion":
var G__20569 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20570 = cause_type;
var G__20571 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20572 = loc;
var G__20573 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20569,G__20570,G__20571,G__20572,G__20573) : format.call(null,G__20569,G__20570,G__20571,G__20572,G__20573));

break;
case "compile-syntax-check":
var G__20576 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20577 = cause_type;
var G__20578 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20579 = loc;
var G__20580 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20576,G__20577,G__20578,G__20579,G__20580) : format.call(null,G__20576,G__20577,G__20578,G__20579,G__20580));

break;
case "compilation":
var G__20585 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20586 = cause_type;
var G__20587 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20588 = loc;
var G__20589 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20585,G__20586,G__20587,G__20588,G__20589) : format.call(null,G__20585,G__20586,G__20587,G__20588,G__20589));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20601 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20602 = symbol;
var G__20603 = loc;
var G__20604 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20614_20812 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20615_20813 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20616_20814 = true;
var _STAR_print_fn_STAR__temp_val__20617_20815 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20616_20814);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20617_20815);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20517_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20517_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20615_20813);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20614_20812);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20601,G__20602,G__20603,G__20604) : format.call(null,G__20601,G__20602,G__20603,G__20604));
} else {
var G__20632 = "Execution error%s at %s(%s).\n%s\n";
var G__20633 = cause_type;
var G__20634 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20635 = loc;
var G__20636 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20632,G__20633,G__20634,G__20635,G__20636) : format.call(null,G__20632,G__20633,G__20634,G__20635,G__20636));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20534__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
