goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_22745 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_22745(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_22749 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_22749(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__21617 = coll;
var G__21618 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__21617,G__21618) : shadow.dom.lazy_native_coll_seq.call(null,G__21617,G__21618));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__21689 = arguments.length;
switch (G__21689) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__21699 = arguments.length;
switch (G__21699) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__21707 = arguments.length;
switch (G__21707) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__21719 = arguments.length;
switch (G__21719) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__21735 = arguments.length;
switch (G__21735) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__21780 = arguments.length;
switch (G__21780) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e21800){if((e21800 instanceof Object)){
var e = e21800;
return console.log("didnt support attachEvent",el,e);
} else {
throw e21800;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__21816 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__21817 = null;
var count__21818 = (0);
var i__21819 = (0);
while(true){
if((i__21819 < count__21818)){
var el = chunk__21817.cljs$core$IIndexed$_nth$arity$2(null,i__21819);
var handler_22774__$1 = ((function (seq__21816,chunk__21817,count__21818,i__21819,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__21816,chunk__21817,count__21818,i__21819,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_22774__$1);


var G__22775 = seq__21816;
var G__22776 = chunk__21817;
var G__22777 = count__21818;
var G__22778 = (i__21819 + (1));
seq__21816 = G__22775;
chunk__21817 = G__22776;
count__21818 = G__22777;
i__21819 = G__22778;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21816);
if(temp__5804__auto__){
var seq__21816__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21816__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21816__$1);
var G__22779 = cljs.core.chunk_rest(seq__21816__$1);
var G__22780 = c__5568__auto__;
var G__22781 = cljs.core.count(c__5568__auto__);
var G__22782 = (0);
seq__21816 = G__22779;
chunk__21817 = G__22780;
count__21818 = G__22781;
i__21819 = G__22782;
continue;
} else {
var el = cljs.core.first(seq__21816__$1);
var handler_22783__$1 = ((function (seq__21816,chunk__21817,count__21818,i__21819,el,seq__21816__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__21816,chunk__21817,count__21818,i__21819,el,seq__21816__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_22783__$1);


var G__22784 = cljs.core.next(seq__21816__$1);
var G__22785 = null;
var G__22786 = (0);
var G__22787 = (0);
seq__21816 = G__22784;
chunk__21817 = G__22785;
count__21818 = G__22786;
i__21819 = G__22787;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__21841 = arguments.length;
switch (G__21841) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__21853 = cljs.core.seq(events);
var chunk__21854 = null;
var count__21855 = (0);
var i__21856 = (0);
while(true){
if((i__21856 < count__21855)){
var vec__21867 = chunk__21854.cljs$core$IIndexed$_nth$arity$2(null,i__21856);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21867,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21867,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__22789 = seq__21853;
var G__22790 = chunk__21854;
var G__22791 = count__21855;
var G__22792 = (i__21856 + (1));
seq__21853 = G__22789;
chunk__21854 = G__22790;
count__21855 = G__22791;
i__21856 = G__22792;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21853);
if(temp__5804__auto__){
var seq__21853__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21853__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21853__$1);
var G__22796 = cljs.core.chunk_rest(seq__21853__$1);
var G__22797 = c__5568__auto__;
var G__22798 = cljs.core.count(c__5568__auto__);
var G__22799 = (0);
seq__21853 = G__22796;
chunk__21854 = G__22797;
count__21855 = G__22798;
i__21856 = G__22799;
continue;
} else {
var vec__21874 = cljs.core.first(seq__21853__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21874,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21874,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__22800 = cljs.core.next(seq__21853__$1);
var G__22801 = null;
var G__22802 = (0);
var G__22803 = (0);
seq__21853 = G__22800;
chunk__21854 = G__22801;
count__21855 = G__22802;
i__21856 = G__22803;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__21880 = cljs.core.seq(styles);
var chunk__21881 = null;
var count__21882 = (0);
var i__21883 = (0);
while(true){
if((i__21883 < count__21882)){
var vec__21892 = chunk__21881.cljs$core$IIndexed$_nth$arity$2(null,i__21883);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21892,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21892,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__22804 = seq__21880;
var G__22805 = chunk__21881;
var G__22806 = count__21882;
var G__22807 = (i__21883 + (1));
seq__21880 = G__22804;
chunk__21881 = G__22805;
count__21882 = G__22806;
i__21883 = G__22807;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21880);
if(temp__5804__auto__){
var seq__21880__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21880__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21880__$1);
var G__22809 = cljs.core.chunk_rest(seq__21880__$1);
var G__22810 = c__5568__auto__;
var G__22811 = cljs.core.count(c__5568__auto__);
var G__22812 = (0);
seq__21880 = G__22809;
chunk__21881 = G__22810;
count__21882 = G__22811;
i__21883 = G__22812;
continue;
} else {
var vec__21899 = cljs.core.first(seq__21880__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21899,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21899,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__22814 = cljs.core.next(seq__21880__$1);
var G__22815 = null;
var G__22816 = (0);
var G__22817 = (0);
seq__21880 = G__22814;
chunk__21881 = G__22815;
count__21882 = G__22816;
i__21883 = G__22817;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__21910_22818 = key;
var G__21910_22819__$1 = (((G__21910_22818 instanceof cljs.core.Keyword))?G__21910_22818.fqn:null);
switch (G__21910_22819__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_22822 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_22822,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_22822,"aria-");
}
})())){
el.setAttribute(ks_22822,value);
} else {
(el[ks_22822] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__21937){
var map__21938 = p__21937;
var map__21938__$1 = cljs.core.__destructure_map(map__21938);
var props = map__21938__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21938__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__21942 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21942,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21942,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21942,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__21954 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__21954,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__21954;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__21957 = arguments.length;
switch (G__21957) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__21970){
var vec__21971 = p__21970;
var seq__21972 = cljs.core.seq(vec__21971);
var first__21973 = cljs.core.first(seq__21972);
var seq__21972__$1 = cljs.core.next(seq__21972);
var nn = first__21973;
var first__21973__$1 = cljs.core.first(seq__21972__$1);
var seq__21972__$2 = cljs.core.next(seq__21972__$1);
var np = first__21973__$1;
var nc = seq__21972__$2;
var node = vec__21971;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21977 = nn;
var G__21978 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__21977,G__21978) : create_fn.call(null,G__21977,G__21978));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21985 = nn;
var G__21986 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__21985,G__21986) : create_fn.call(null,G__21985,G__21986));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__21991 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21991,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21991,(1),null);
var seq__22002_22834 = cljs.core.seq(node_children);
var chunk__22003_22835 = null;
var count__22004_22836 = (0);
var i__22005_22837 = (0);
while(true){
if((i__22005_22837 < count__22004_22836)){
var child_struct_22838 = chunk__22003_22835.cljs$core$IIndexed$_nth$arity$2(null,i__22005_22837);
var children_22839 = shadow.dom.dom_node(child_struct_22838);
if(cljs.core.seq_QMARK_(children_22839)){
var seq__22066_22841 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_22839));
var chunk__22068_22842 = null;
var count__22069_22843 = (0);
var i__22070_22844 = (0);
while(true){
if((i__22070_22844 < count__22069_22843)){
var child_22845 = chunk__22068_22842.cljs$core$IIndexed$_nth$arity$2(null,i__22070_22844);
if(cljs.core.truth_(child_22845)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_22845);


var G__22846 = seq__22066_22841;
var G__22847 = chunk__22068_22842;
var G__22848 = count__22069_22843;
var G__22849 = (i__22070_22844 + (1));
seq__22066_22841 = G__22846;
chunk__22068_22842 = G__22847;
count__22069_22843 = G__22848;
i__22070_22844 = G__22849;
continue;
} else {
var G__22850 = seq__22066_22841;
var G__22851 = chunk__22068_22842;
var G__22852 = count__22069_22843;
var G__22853 = (i__22070_22844 + (1));
seq__22066_22841 = G__22850;
chunk__22068_22842 = G__22851;
count__22069_22843 = G__22852;
i__22070_22844 = G__22853;
continue;
}
} else {
var temp__5804__auto___22854 = cljs.core.seq(seq__22066_22841);
if(temp__5804__auto___22854){
var seq__22066_22855__$1 = temp__5804__auto___22854;
if(cljs.core.chunked_seq_QMARK_(seq__22066_22855__$1)){
var c__5568__auto___22856 = cljs.core.chunk_first(seq__22066_22855__$1);
var G__22857 = cljs.core.chunk_rest(seq__22066_22855__$1);
var G__22858 = c__5568__auto___22856;
var G__22859 = cljs.core.count(c__5568__auto___22856);
var G__22860 = (0);
seq__22066_22841 = G__22857;
chunk__22068_22842 = G__22858;
count__22069_22843 = G__22859;
i__22070_22844 = G__22860;
continue;
} else {
var child_22861 = cljs.core.first(seq__22066_22855__$1);
if(cljs.core.truth_(child_22861)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_22861);


var G__22862 = cljs.core.next(seq__22066_22855__$1);
var G__22863 = null;
var G__22864 = (0);
var G__22865 = (0);
seq__22066_22841 = G__22862;
chunk__22068_22842 = G__22863;
count__22069_22843 = G__22864;
i__22070_22844 = G__22865;
continue;
} else {
var G__22866 = cljs.core.next(seq__22066_22855__$1);
var G__22867 = null;
var G__22868 = (0);
var G__22869 = (0);
seq__22066_22841 = G__22866;
chunk__22068_22842 = G__22867;
count__22069_22843 = G__22868;
i__22070_22844 = G__22869;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_22839);
}


var G__22870 = seq__22002_22834;
var G__22871 = chunk__22003_22835;
var G__22872 = count__22004_22836;
var G__22873 = (i__22005_22837 + (1));
seq__22002_22834 = G__22870;
chunk__22003_22835 = G__22871;
count__22004_22836 = G__22872;
i__22005_22837 = G__22873;
continue;
} else {
var temp__5804__auto___22875 = cljs.core.seq(seq__22002_22834);
if(temp__5804__auto___22875){
var seq__22002_22877__$1 = temp__5804__auto___22875;
if(cljs.core.chunked_seq_QMARK_(seq__22002_22877__$1)){
var c__5568__auto___22878 = cljs.core.chunk_first(seq__22002_22877__$1);
var G__22879 = cljs.core.chunk_rest(seq__22002_22877__$1);
var G__22880 = c__5568__auto___22878;
var G__22881 = cljs.core.count(c__5568__auto___22878);
var G__22882 = (0);
seq__22002_22834 = G__22879;
chunk__22003_22835 = G__22880;
count__22004_22836 = G__22881;
i__22005_22837 = G__22882;
continue;
} else {
var child_struct_22884 = cljs.core.first(seq__22002_22877__$1);
var children_22885 = shadow.dom.dom_node(child_struct_22884);
if(cljs.core.seq_QMARK_(children_22885)){
var seq__22092_22886 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_22885));
var chunk__22094_22887 = null;
var count__22095_22888 = (0);
var i__22096_22889 = (0);
while(true){
if((i__22096_22889 < count__22095_22888)){
var child_22890 = chunk__22094_22887.cljs$core$IIndexed$_nth$arity$2(null,i__22096_22889);
if(cljs.core.truth_(child_22890)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_22890);


var G__22891 = seq__22092_22886;
var G__22892 = chunk__22094_22887;
var G__22893 = count__22095_22888;
var G__22894 = (i__22096_22889 + (1));
seq__22092_22886 = G__22891;
chunk__22094_22887 = G__22892;
count__22095_22888 = G__22893;
i__22096_22889 = G__22894;
continue;
} else {
var G__22895 = seq__22092_22886;
var G__22896 = chunk__22094_22887;
var G__22897 = count__22095_22888;
var G__22898 = (i__22096_22889 + (1));
seq__22092_22886 = G__22895;
chunk__22094_22887 = G__22896;
count__22095_22888 = G__22897;
i__22096_22889 = G__22898;
continue;
}
} else {
var temp__5804__auto___22899__$1 = cljs.core.seq(seq__22092_22886);
if(temp__5804__auto___22899__$1){
var seq__22092_22900__$1 = temp__5804__auto___22899__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22092_22900__$1)){
var c__5568__auto___22901 = cljs.core.chunk_first(seq__22092_22900__$1);
var G__22903 = cljs.core.chunk_rest(seq__22092_22900__$1);
var G__22904 = c__5568__auto___22901;
var G__22905 = cljs.core.count(c__5568__auto___22901);
var G__22906 = (0);
seq__22092_22886 = G__22903;
chunk__22094_22887 = G__22904;
count__22095_22888 = G__22905;
i__22096_22889 = G__22906;
continue;
} else {
var child_22907 = cljs.core.first(seq__22092_22900__$1);
if(cljs.core.truth_(child_22907)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_22907);


var G__22909 = cljs.core.next(seq__22092_22900__$1);
var G__22910 = null;
var G__22911 = (0);
var G__22912 = (0);
seq__22092_22886 = G__22909;
chunk__22094_22887 = G__22910;
count__22095_22888 = G__22911;
i__22096_22889 = G__22912;
continue;
} else {
var G__22913 = cljs.core.next(seq__22092_22900__$1);
var G__22914 = null;
var G__22915 = (0);
var G__22916 = (0);
seq__22092_22886 = G__22913;
chunk__22094_22887 = G__22914;
count__22095_22888 = G__22915;
i__22096_22889 = G__22916;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_22885);
}


var G__22917 = cljs.core.next(seq__22002_22877__$1);
var G__22918 = null;
var G__22919 = (0);
var G__22920 = (0);
seq__22002_22834 = G__22917;
chunk__22003_22835 = G__22918;
count__22004_22836 = G__22919;
i__22005_22837 = G__22920;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__22148 = cljs.core.seq(node);
var chunk__22149 = null;
var count__22150 = (0);
var i__22151 = (0);
while(true){
if((i__22151 < count__22150)){
var n = chunk__22149.cljs$core$IIndexed$_nth$arity$2(null,i__22151);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__22924 = seq__22148;
var G__22925 = chunk__22149;
var G__22926 = count__22150;
var G__22927 = (i__22151 + (1));
seq__22148 = G__22924;
chunk__22149 = G__22925;
count__22150 = G__22926;
i__22151 = G__22927;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22148);
if(temp__5804__auto__){
var seq__22148__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22148__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22148__$1);
var G__22928 = cljs.core.chunk_rest(seq__22148__$1);
var G__22929 = c__5568__auto__;
var G__22930 = cljs.core.count(c__5568__auto__);
var G__22931 = (0);
seq__22148 = G__22928;
chunk__22149 = G__22929;
count__22150 = G__22930;
i__22151 = G__22931;
continue;
} else {
var n = cljs.core.first(seq__22148__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__22932 = cljs.core.next(seq__22148__$1);
var G__22933 = null;
var G__22934 = (0);
var G__22935 = (0);
seq__22148 = G__22932;
chunk__22149 = G__22933;
count__22150 = G__22934;
i__22151 = G__22935;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__22180 = arguments.length;
switch (G__22180) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__22196 = arguments.length;
switch (G__22196) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__22228 = arguments.length;
switch (G__22228) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22950 = arguments.length;
var i__5770__auto___22951 = (0);
while(true){
if((i__5770__auto___22951 < len__5769__auto___22950)){
args__5775__auto__.push((arguments[i__5770__auto___22951]));

var G__22952 = (i__5770__auto___22951 + (1));
i__5770__auto___22951 = G__22952;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__22250_22953 = cljs.core.seq(nodes);
var chunk__22251_22954 = null;
var count__22252_22955 = (0);
var i__22253_22956 = (0);
while(true){
if((i__22253_22956 < count__22252_22955)){
var node_22957 = chunk__22251_22954.cljs$core$IIndexed$_nth$arity$2(null,i__22253_22956);
fragment.appendChild(shadow.dom._to_dom(node_22957));


var G__22958 = seq__22250_22953;
var G__22959 = chunk__22251_22954;
var G__22960 = count__22252_22955;
var G__22961 = (i__22253_22956 + (1));
seq__22250_22953 = G__22958;
chunk__22251_22954 = G__22959;
count__22252_22955 = G__22960;
i__22253_22956 = G__22961;
continue;
} else {
var temp__5804__auto___22962 = cljs.core.seq(seq__22250_22953);
if(temp__5804__auto___22962){
var seq__22250_22963__$1 = temp__5804__auto___22962;
if(cljs.core.chunked_seq_QMARK_(seq__22250_22963__$1)){
var c__5568__auto___22964 = cljs.core.chunk_first(seq__22250_22963__$1);
var G__22965 = cljs.core.chunk_rest(seq__22250_22963__$1);
var G__22966 = c__5568__auto___22964;
var G__22967 = cljs.core.count(c__5568__auto___22964);
var G__22968 = (0);
seq__22250_22953 = G__22965;
chunk__22251_22954 = G__22966;
count__22252_22955 = G__22967;
i__22253_22956 = G__22968;
continue;
} else {
var node_22972 = cljs.core.first(seq__22250_22963__$1);
fragment.appendChild(shadow.dom._to_dom(node_22972));


var G__22973 = cljs.core.next(seq__22250_22963__$1);
var G__22974 = null;
var G__22975 = (0);
var G__22976 = (0);
seq__22250_22953 = G__22973;
chunk__22251_22954 = G__22974;
count__22252_22955 = G__22975;
i__22253_22956 = G__22976;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq22248){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22248));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__22279_22977 = cljs.core.seq(scripts);
var chunk__22280_22978 = null;
var count__22281_22979 = (0);
var i__22282_22980 = (0);
while(true){
if((i__22282_22980 < count__22281_22979)){
var vec__22295_22981 = chunk__22280_22978.cljs$core$IIndexed$_nth$arity$2(null,i__22282_22980);
var script_tag_22982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22295_22981,(0),null);
var script_body_22983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22295_22981,(1),null);
eval(script_body_22983);


var G__22984 = seq__22279_22977;
var G__22985 = chunk__22280_22978;
var G__22986 = count__22281_22979;
var G__22987 = (i__22282_22980 + (1));
seq__22279_22977 = G__22984;
chunk__22280_22978 = G__22985;
count__22281_22979 = G__22986;
i__22282_22980 = G__22987;
continue;
} else {
var temp__5804__auto___22988 = cljs.core.seq(seq__22279_22977);
if(temp__5804__auto___22988){
var seq__22279_22989__$1 = temp__5804__auto___22988;
if(cljs.core.chunked_seq_QMARK_(seq__22279_22989__$1)){
var c__5568__auto___22990 = cljs.core.chunk_first(seq__22279_22989__$1);
var G__22991 = cljs.core.chunk_rest(seq__22279_22989__$1);
var G__22992 = c__5568__auto___22990;
var G__22993 = cljs.core.count(c__5568__auto___22990);
var G__22994 = (0);
seq__22279_22977 = G__22991;
chunk__22280_22978 = G__22992;
count__22281_22979 = G__22993;
i__22282_22980 = G__22994;
continue;
} else {
var vec__22298_22995 = cljs.core.first(seq__22279_22989__$1);
var script_tag_22996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22298_22995,(0),null);
var script_body_22997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22298_22995,(1),null);
eval(script_body_22997);


var G__23002 = cljs.core.next(seq__22279_22989__$1);
var G__23003 = null;
var G__23004 = (0);
var G__23005 = (0);
seq__22279_22977 = G__23002;
chunk__22280_22978 = G__23003;
count__22281_22979 = G__23004;
i__22282_22980 = G__23005;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__22304){
var vec__22305 = p__22304;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22305,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22305,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__22323 = arguments.length;
switch (G__22323) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__22332 = cljs.core.seq(style_keys);
var chunk__22333 = null;
var count__22334 = (0);
var i__22335 = (0);
while(true){
if((i__22335 < count__22334)){
var it = chunk__22333.cljs$core$IIndexed$_nth$arity$2(null,i__22335);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__23009 = seq__22332;
var G__23010 = chunk__22333;
var G__23011 = count__22334;
var G__23012 = (i__22335 + (1));
seq__22332 = G__23009;
chunk__22333 = G__23010;
count__22334 = G__23011;
i__22335 = G__23012;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22332);
if(temp__5804__auto__){
var seq__22332__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22332__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22332__$1);
var G__23013 = cljs.core.chunk_rest(seq__22332__$1);
var G__23014 = c__5568__auto__;
var G__23015 = cljs.core.count(c__5568__auto__);
var G__23016 = (0);
seq__22332 = G__23013;
chunk__22333 = G__23014;
count__22334 = G__23015;
i__22335 = G__23016;
continue;
} else {
var it = cljs.core.first(seq__22332__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__23017 = cljs.core.next(seq__22332__$1);
var G__23018 = null;
var G__23019 = (0);
var G__23020 = (0);
seq__22332 = G__23017;
chunk__22333 = G__23018;
count__22334 = G__23019;
i__22335 = G__23020;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k22337,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__22343 = k22337;
var G__22343__$1 = (((G__22343 instanceof cljs.core.Keyword))?G__22343.fqn:null);
switch (G__22343__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22337,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__22348){
var vec__22349 = p__22348;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22349,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22349,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22336){
var self__ = this;
var G__22336__$1 = this;
return (new cljs.core.RecordIter((0),G__22336__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22338,other22339){
var self__ = this;
var this22338__$1 = this;
return (((!((other22339 == null)))) && ((((this22338__$1.constructor === other22339.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22338__$1.x,other22339.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22338__$1.y,other22339.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22338__$1.__extmap,other22339.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k22337){
var self__ = this;
var this__5350__auto____$1 = this;
var G__22357 = k22337;
var G__22357__$1 = (((G__22357 instanceof cljs.core.Keyword))?G__22357.fqn:null);
switch (G__22357__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k22337);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__22336){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__22359 = cljs.core.keyword_identical_QMARK_;
var expr__22360 = k__5352__auto__;
if(cljs.core.truth_((pred__22359.cljs$core$IFn$_invoke$arity$2 ? pred__22359.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__22360) : pred__22359.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__22360)))){
return (new shadow.dom.Coordinate(G__22336,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22359.cljs$core$IFn$_invoke$arity$2 ? pred__22359.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__22360) : pred__22359.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__22360)))){
return (new shadow.dom.Coordinate(self__.x,G__22336,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__22336),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__22336){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__22336,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__22341){
var extmap__5385__auto__ = (function (){var G__22365 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22341,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__22341)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22365);
} else {
return G__22365;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__22341),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__22341),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k22369,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__22379 = k22369;
var G__22379__$1 = (((G__22379 instanceof cljs.core.Keyword))?G__22379.fqn:null);
switch (G__22379__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22369,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__22383){
var vec__22384 = p__22383;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22384,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22384,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22368){
var self__ = this;
var G__22368__$1 = this;
return (new cljs.core.RecordIter((0),G__22368__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22370,other22371){
var self__ = this;
var this22370__$1 = this;
return (((!((other22371 == null)))) && ((((this22370__$1.constructor === other22371.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22370__$1.w,other22371.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22370__$1.h,other22371.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22370__$1.__extmap,other22371.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k22369){
var self__ = this;
var this__5350__auto____$1 = this;
var G__22418 = k22369;
var G__22418__$1 = (((G__22418 instanceof cljs.core.Keyword))?G__22418.fqn:null);
switch (G__22418__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k22369);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__22368){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__22420 = cljs.core.keyword_identical_QMARK_;
var expr__22421 = k__5352__auto__;
if(cljs.core.truth_((pred__22420.cljs$core$IFn$_invoke$arity$2 ? pred__22420.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__22421) : pred__22420.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__22421)))){
return (new shadow.dom.Size(G__22368,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22420.cljs$core$IFn$_invoke$arity$2 ? pred__22420.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__22421) : pred__22420.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__22421)))){
return (new shadow.dom.Size(self__.w,G__22368,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__22368),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__22368){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__22368,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__22372){
var extmap__5385__auto__ = (function (){var G__22438 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22372,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__22372)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22438);
} else {
return G__22438;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__22372),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__22372),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__23059 = (i + (1));
var G__23060 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__23059;
ret = G__23060;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22470){
var vec__22471 = p__22470;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22471,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22471,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__22484 = arguments.length;
switch (G__22484) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__23069 = ps;
var G__23070 = (i + (1));
el__$1 = G__23069;
i = G__23070;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__22510 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22510,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__22513_23100 = cljs.core.seq(props);
var chunk__22514_23101 = null;
var count__22515_23102 = (0);
var i__22516_23103 = (0);
while(true){
if((i__22516_23103 < count__22515_23102)){
var vec__22530_23104 = chunk__22514_23101.cljs$core$IIndexed$_nth$arity$2(null,i__22516_23103);
var k_23105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22530_23104,(0),null);
var v_23106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22530_23104,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_23105);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_23105),v_23106);


var G__23110 = seq__22513_23100;
var G__23111 = chunk__22514_23101;
var G__23112 = count__22515_23102;
var G__23113 = (i__22516_23103 + (1));
seq__22513_23100 = G__23110;
chunk__22514_23101 = G__23111;
count__22515_23102 = G__23112;
i__22516_23103 = G__23113;
continue;
} else {
var temp__5804__auto___23114 = cljs.core.seq(seq__22513_23100);
if(temp__5804__auto___23114){
var seq__22513_23115__$1 = temp__5804__auto___23114;
if(cljs.core.chunked_seq_QMARK_(seq__22513_23115__$1)){
var c__5568__auto___23116 = cljs.core.chunk_first(seq__22513_23115__$1);
var G__23117 = cljs.core.chunk_rest(seq__22513_23115__$1);
var G__23118 = c__5568__auto___23116;
var G__23119 = cljs.core.count(c__5568__auto___23116);
var G__23120 = (0);
seq__22513_23100 = G__23117;
chunk__22514_23101 = G__23118;
count__22515_23102 = G__23119;
i__22516_23103 = G__23120;
continue;
} else {
var vec__22536_23123 = cljs.core.first(seq__22513_23115__$1);
var k_23124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22536_23123,(0),null);
var v_23125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22536_23123,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_23124);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_23124),v_23125);


var G__23131 = cljs.core.next(seq__22513_23115__$1);
var G__23132 = null;
var G__23133 = (0);
var G__23134 = (0);
seq__22513_23100 = G__23131;
chunk__22514_23101 = G__23132;
count__22515_23102 = G__23133;
i__22516_23103 = G__23134;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__22545 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22545,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22545,(1),null);
var seq__22548_23138 = cljs.core.seq(node_children);
var chunk__22550_23139 = null;
var count__22551_23140 = (0);
var i__22552_23141 = (0);
while(true){
if((i__22552_23141 < count__22551_23140)){
var child_struct_23142 = chunk__22550_23139.cljs$core$IIndexed$_nth$arity$2(null,i__22552_23141);
if((!((child_struct_23142 == null)))){
if(typeof child_struct_23142 === 'string'){
var text_23143 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_23143),child_struct_23142].join(''));
} else {
var children_23144 = shadow.dom.svg_node(child_struct_23142);
if(cljs.core.seq_QMARK_(children_23144)){
var seq__22577_23145 = cljs.core.seq(children_23144);
var chunk__22579_23146 = null;
var count__22580_23147 = (0);
var i__22581_23148 = (0);
while(true){
if((i__22581_23148 < count__22580_23147)){
var child_23149 = chunk__22579_23146.cljs$core$IIndexed$_nth$arity$2(null,i__22581_23148);
if(cljs.core.truth_(child_23149)){
node.appendChild(child_23149);


var G__23150 = seq__22577_23145;
var G__23151 = chunk__22579_23146;
var G__23152 = count__22580_23147;
var G__23153 = (i__22581_23148 + (1));
seq__22577_23145 = G__23150;
chunk__22579_23146 = G__23151;
count__22580_23147 = G__23152;
i__22581_23148 = G__23153;
continue;
} else {
var G__23154 = seq__22577_23145;
var G__23155 = chunk__22579_23146;
var G__23156 = count__22580_23147;
var G__23157 = (i__22581_23148 + (1));
seq__22577_23145 = G__23154;
chunk__22579_23146 = G__23155;
count__22580_23147 = G__23156;
i__22581_23148 = G__23157;
continue;
}
} else {
var temp__5804__auto___23158 = cljs.core.seq(seq__22577_23145);
if(temp__5804__auto___23158){
var seq__22577_23162__$1 = temp__5804__auto___23158;
if(cljs.core.chunked_seq_QMARK_(seq__22577_23162__$1)){
var c__5568__auto___23163 = cljs.core.chunk_first(seq__22577_23162__$1);
var G__23164 = cljs.core.chunk_rest(seq__22577_23162__$1);
var G__23165 = c__5568__auto___23163;
var G__23166 = cljs.core.count(c__5568__auto___23163);
var G__23167 = (0);
seq__22577_23145 = G__23164;
chunk__22579_23146 = G__23165;
count__22580_23147 = G__23166;
i__22581_23148 = G__23167;
continue;
} else {
var child_23168 = cljs.core.first(seq__22577_23162__$1);
if(cljs.core.truth_(child_23168)){
node.appendChild(child_23168);


var G__23169 = cljs.core.next(seq__22577_23162__$1);
var G__23170 = null;
var G__23171 = (0);
var G__23172 = (0);
seq__22577_23145 = G__23169;
chunk__22579_23146 = G__23170;
count__22580_23147 = G__23171;
i__22581_23148 = G__23172;
continue;
} else {
var G__23173 = cljs.core.next(seq__22577_23162__$1);
var G__23174 = null;
var G__23175 = (0);
var G__23176 = (0);
seq__22577_23145 = G__23173;
chunk__22579_23146 = G__23174;
count__22580_23147 = G__23175;
i__22581_23148 = G__23176;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_23144);
}
}


var G__23177 = seq__22548_23138;
var G__23178 = chunk__22550_23139;
var G__23179 = count__22551_23140;
var G__23180 = (i__22552_23141 + (1));
seq__22548_23138 = G__23177;
chunk__22550_23139 = G__23178;
count__22551_23140 = G__23179;
i__22552_23141 = G__23180;
continue;
} else {
var G__23181 = seq__22548_23138;
var G__23182 = chunk__22550_23139;
var G__23183 = count__22551_23140;
var G__23184 = (i__22552_23141 + (1));
seq__22548_23138 = G__23181;
chunk__22550_23139 = G__23182;
count__22551_23140 = G__23183;
i__22552_23141 = G__23184;
continue;
}
} else {
var temp__5804__auto___23185 = cljs.core.seq(seq__22548_23138);
if(temp__5804__auto___23185){
var seq__22548_23186__$1 = temp__5804__auto___23185;
if(cljs.core.chunked_seq_QMARK_(seq__22548_23186__$1)){
var c__5568__auto___23187 = cljs.core.chunk_first(seq__22548_23186__$1);
var G__23188 = cljs.core.chunk_rest(seq__22548_23186__$1);
var G__23189 = c__5568__auto___23187;
var G__23190 = cljs.core.count(c__5568__auto___23187);
var G__23191 = (0);
seq__22548_23138 = G__23188;
chunk__22550_23139 = G__23189;
count__22551_23140 = G__23190;
i__22552_23141 = G__23191;
continue;
} else {
var child_struct_23192 = cljs.core.first(seq__22548_23186__$1);
if((!((child_struct_23192 == null)))){
if(typeof child_struct_23192 === 'string'){
var text_23193 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_23193),child_struct_23192].join(''));
} else {
var children_23194 = shadow.dom.svg_node(child_struct_23192);
if(cljs.core.seq_QMARK_(children_23194)){
var seq__22589_23195 = cljs.core.seq(children_23194);
var chunk__22592_23196 = null;
var count__22593_23197 = (0);
var i__22594_23198 = (0);
while(true){
if((i__22594_23198 < count__22593_23197)){
var child_23199 = chunk__22592_23196.cljs$core$IIndexed$_nth$arity$2(null,i__22594_23198);
if(cljs.core.truth_(child_23199)){
node.appendChild(child_23199);


var G__23203 = seq__22589_23195;
var G__23204 = chunk__22592_23196;
var G__23205 = count__22593_23197;
var G__23206 = (i__22594_23198 + (1));
seq__22589_23195 = G__23203;
chunk__22592_23196 = G__23204;
count__22593_23197 = G__23205;
i__22594_23198 = G__23206;
continue;
} else {
var G__23207 = seq__22589_23195;
var G__23208 = chunk__22592_23196;
var G__23209 = count__22593_23197;
var G__23210 = (i__22594_23198 + (1));
seq__22589_23195 = G__23207;
chunk__22592_23196 = G__23208;
count__22593_23197 = G__23209;
i__22594_23198 = G__23210;
continue;
}
} else {
var temp__5804__auto___23211__$1 = cljs.core.seq(seq__22589_23195);
if(temp__5804__auto___23211__$1){
var seq__22589_23212__$1 = temp__5804__auto___23211__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22589_23212__$1)){
var c__5568__auto___23213 = cljs.core.chunk_first(seq__22589_23212__$1);
var G__23214 = cljs.core.chunk_rest(seq__22589_23212__$1);
var G__23215 = c__5568__auto___23213;
var G__23216 = cljs.core.count(c__5568__auto___23213);
var G__23217 = (0);
seq__22589_23195 = G__23214;
chunk__22592_23196 = G__23215;
count__22593_23197 = G__23216;
i__22594_23198 = G__23217;
continue;
} else {
var child_23218 = cljs.core.first(seq__22589_23212__$1);
if(cljs.core.truth_(child_23218)){
node.appendChild(child_23218);


var G__23219 = cljs.core.next(seq__22589_23212__$1);
var G__23220 = null;
var G__23221 = (0);
var G__23222 = (0);
seq__22589_23195 = G__23219;
chunk__22592_23196 = G__23220;
count__22593_23197 = G__23221;
i__22594_23198 = G__23222;
continue;
} else {
var G__23223 = cljs.core.next(seq__22589_23212__$1);
var G__23224 = null;
var G__23225 = (0);
var G__23226 = (0);
seq__22589_23195 = G__23223;
chunk__22592_23196 = G__23224;
count__22593_23197 = G__23225;
i__22594_23198 = G__23226;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_23194);
}
}


var G__23227 = cljs.core.next(seq__22548_23186__$1);
var G__23228 = null;
var G__23229 = (0);
var G__23230 = (0);
seq__22548_23138 = G__23227;
chunk__22550_23139 = G__23228;
count__22551_23140 = G__23229;
i__22552_23141 = G__23230;
continue;
} else {
var G__23231 = cljs.core.next(seq__22548_23186__$1);
var G__23232 = null;
var G__23233 = (0);
var G__23234 = (0);
seq__22548_23138 = G__23231;
chunk__22550_23139 = G__23232;
count__22551_23140 = G__23233;
i__22552_23141 = G__23234;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23235 = arguments.length;
var i__5770__auto___23236 = (0);
while(true){
if((i__5770__auto___23236 < len__5769__auto___23235)){
args__5775__auto__.push((arguments[i__5770__auto___23236]));

var G__23237 = (i__5770__auto___23236 + (1));
i__5770__auto___23236 = G__23237;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq22650){
var G__22656 = cljs.core.first(seq22650);
var seq22650__$1 = cljs.core.next(seq22650);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22656,seq22650__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__22690 = arguments.length;
switch (G__22690) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__15931__auto___23242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_22722){
var state_val_22723 = (state_22722[(1)]);
if((state_val_22723 === (1))){
var state_22722__$1 = state_22722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22722__$1,(2),once_or_cleanup);
} else {
if((state_val_22723 === (2))){
var inst_22719 = (state_22722[(2)]);
var inst_22720 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_22722__$1 = (function (){var statearr_22726 = state_22722;
(statearr_22726[(7)] = inst_22719);

return statearr_22726;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22722__$1,inst_22720);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__14883__auto__ = null;
var shadow$dom$state_machine__14883__auto____0 = (function (){
var statearr_22730 = [null,null,null,null,null,null,null,null];
(statearr_22730[(0)] = shadow$dom$state_machine__14883__auto__);

(statearr_22730[(1)] = (1));

return statearr_22730;
});
var shadow$dom$state_machine__14883__auto____1 = (function (state_22722){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_22722);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e22731){var ex__14886__auto__ = e22731;
var statearr_22732_23243 = state_22722;
(statearr_22732_23243[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_22722[(4)]))){
var statearr_22733_23245 = state_22722;
(statearr_22733_23245[(1)] = cljs.core.first((state_22722[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23249 = state_22722;
state_22722 = G__23249;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
shadow$dom$state_machine__14883__auto__ = function(state_22722){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__14883__auto____0.call(this);
case 1:
return shadow$dom$state_machine__14883__auto____1.call(this,state_22722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__14883__auto____0;
shadow$dom$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__14883__auto____1;
return shadow$dom$state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_22734 = f__15932__auto__();
(statearr_22734[(6)] = c__15931__auto___23242);

return statearr_22734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
