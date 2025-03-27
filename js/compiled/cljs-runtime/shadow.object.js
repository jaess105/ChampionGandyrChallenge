goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_23373 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.object._id[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.object._id["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_23373(this$);
}
});

var shadow$object$IObject$_type$dyn_23374 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.object._type[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.object._type["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_23374(this$);
}
});

var shadow$object$IObject$_data$dyn_23375 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.object._data[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.object._data["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_23375(this$);
}
});

var shadow$object$IObject$_update$dyn_23376 = (function (this$,update_fn){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.object._update[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__5394__auto__.call(null,this$,update_fn));
} else {
var m__5392__auto__ = (shadow.object._update["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__5392__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_23376(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_23377 = (function (this$,cause){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__5394__auto__.call(null,this$,cause));
} else {
var m__5392__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__5392__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_23377(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__22813 = arguments.length;
switch (G__22813) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__5045__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5804__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5804__auto__)){
var oid = temp__5804__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5804__auto__)){
var parent_id = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__23379 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__23379;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22874_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__22874_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__22908 = arguments.length;
switch (G__22908) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22923_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__22923_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__22938){
var map__22939 = p__22938;
var map__22939__$1 = cljs.core.__destructure_map(map__22939);
var oref = map__22939__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22939__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__22944 = arguments.length;
switch (G__22944) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22941_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__22941_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5802__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5802__auto__)){
var obj = temp__5802__auto__;
return obj;
} else {
var temp__5804__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var G__23382 = parent;
dom = G__23382;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23383 = arguments.length;
var i__5770__auto___23384 = (0);
while(true){
if((i__5770__auto___23384 < len__5769__auto___23383)){
args__5775__auto__.push((arguments[i__5770__auto___23384]));

var G__23385 = (i__5770__auto___23384 + (1));
i__5770__auto___23384 = G__23385;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5804__auto__)){
var reactions_to_trigger = temp__5804__auto__;
var seq__22998 = cljs.core.seq(reactions_to_trigger);
var chunk__22999 = null;
var count__23000 = (0);
var i__23001 = (0);
while(true){
if((i__23001 < count__23000)){
var rfn = chunk__22999.cljs$core$IIndexed$_nth$arity$2(null,i__23001);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__23386 = seq__22998;
var G__23387 = chunk__22999;
var G__23388 = count__23000;
var G__23389 = (i__23001 + (1));
seq__22998 = G__23386;
chunk__22999 = G__23387;
count__23000 = G__23388;
i__23001 = G__23389;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__22998);
if(temp__5804__auto____$1){
var seq__22998__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__22998__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22998__$1);
var G__23390 = cljs.core.chunk_rest(seq__22998__$1);
var G__23391 = c__5568__auto__;
var G__23392 = cljs.core.count(c__5568__auto__);
var G__23393 = (0);
seq__22998 = G__23390;
chunk__22999 = G__23391;
count__23000 = G__23392;
i__23001 = G__23393;
continue;
} else {
var rfn = cljs.core.first(seq__22998__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__23394 = cljs.core.next(seq__22998__$1);
var G__23395 = null;
var G__23396 = (0);
var G__23397 = (0);
seq__22998 = G__23394;
chunk__22999 = G__23395;
count__23000 = G__23396;
i__23001 = G__23397;
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
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq22969){
var G__22970 = cljs.core.first(seq22969);
var seq22969__$1 = cljs.core.next(seq22969);
var G__22971 = cljs.core.first(seq22969__$1);
var seq22969__$2 = cljs.core.next(seq22969__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22970,G__22971,seq22969__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__23022_23398 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__23023_23399 = null;
var count__23024_23400 = (0);
var i__23025_23401 = (0);
while(true){
if((i__23025_23401 < count__23024_23400)){
var child_23402 = chunk__23023_23399.cljs$core$IIndexed$_nth$arity$2(null,i__23025_23401);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_23402,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_23402,ev,notify_fn));


var G__23403 = seq__23022_23398;
var G__23404 = chunk__23023_23399;
var G__23405 = count__23024_23400;
var G__23406 = (i__23025_23401 + (1));
seq__23022_23398 = G__23403;
chunk__23023_23399 = G__23404;
count__23024_23400 = G__23405;
i__23025_23401 = G__23406;
continue;
} else {
var temp__5804__auto___23407 = cljs.core.seq(seq__23022_23398);
if(temp__5804__auto___23407){
var seq__23022_23408__$1 = temp__5804__auto___23407;
if(cljs.core.chunked_seq_QMARK_(seq__23022_23408__$1)){
var c__5568__auto___23409 = cljs.core.chunk_first(seq__23022_23408__$1);
var G__23410 = cljs.core.chunk_rest(seq__23022_23408__$1);
var G__23411 = c__5568__auto___23409;
var G__23412 = cljs.core.count(c__5568__auto___23409);
var G__23413 = (0);
seq__23022_23398 = G__23410;
chunk__23023_23399 = G__23411;
count__23024_23400 = G__23412;
i__23025_23401 = G__23413;
continue;
} else {
var child_23414 = cljs.core.first(seq__23022_23408__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_23414,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_23414,ev,notify_fn));


var G__23415 = cljs.core.next(seq__23022_23408__$1);
var G__23416 = null;
var G__23417 = (0);
var G__23418 = (0);
seq__23022_23398 = G__23415;
chunk__23023_23399 = G__23416;
count__23024_23400 = G__23417;
i__23025_23401 = G__23418;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23419 = arguments.length;
var i__5770__auto___23420 = (0);
while(true){
if((i__5770__auto___23420 < len__5769__auto___23419)){
args__5775__auto__.push((arguments[i__5770__auto___23420]));

var G__23421 = (i__5770__auto___23420 + (1));
i__5770__auto___23420 = G__23421;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq23029){
var G__23030 = cljs.core.first(seq23029);
var seq23029__$1 = cljs.core.next(seq23029);
var G__23031 = cljs.core.first(seq23029__$1);
var seq23029__$2 = cljs.core.next(seq23029__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23030,G__23031,seq23029__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23422 = arguments.length;
var i__5770__auto___23423 = (0);
while(true){
if((i__5770__auto___23423 < len__5769__auto___23422)){
args__5775__auto__.push((arguments[i__5770__auto___23423]));

var G__23424 = (i__5770__auto___23423 + (1));
i__5770__auto___23423 = G__23424;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__23425 = shadow.object.get_parent(current);
current = G__23425;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq23035){
var G__23036 = cljs.core.first(seq23035);
var seq23035__$1 = cljs.core.next(seq23035);
var G__23037 = cljs.core.first(seq23035__$1);
var seq23035__$2 = cljs.core.next(seq23035__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23036,G__23037,seq23035__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23426 = arguments.length;
var i__5770__auto___23427 = (0);
while(true){
if((i__5770__auto___23427 < len__5769__auto___23426)){
args__5775__auto__.push((arguments[i__5770__auto___23427]));

var G__23428 = (i__5770__auto___23427 + (1));
i__5770__auto___23427 = G__23428;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq23045){
var G__23046 = cljs.core.first(seq23045);
var seq23045__$1 = cljs.core.next(seq23045);
var G__23047 = cljs.core.first(seq23045__$1);
var seq23045__$2 = cljs.core.next(seq23045__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23046,G__23047,seq23045__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5802__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5802__auto__)){
var custom_remove = temp__5802__auto__;
var G__23067 = this$;
var G__23068 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__23067,G__23068) : custom_remove.call(null,G__23067,G__23068));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__23075 = arguments.length;
switch (G__23075) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__23127 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__23128 = null;
var count__23129 = (0);
var i__23130 = (0);
while(true){
if((i__23130 < count__23129)){
var vec__23200 = chunk__23128.cljs$core$IIndexed$_nth$arity$2(null,i__23130);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23200,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23200,(1),null);
var ev_def = vec__23200;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_23434__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__23127,chunk__23128,count__23129,i__23130,vec__23200,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__23127,chunk__23128,count__23129,i__23130,vec__23200,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__23127,chunk__23128,count__23129,i__23130,handler_23434__$1,vec__23200,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_23434__$1.cljs$core$IFn$_invoke$arity$3 ? handler_23434__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_23434__$1.call(null,oref,e,el));
});})(seq__23127,chunk__23128,count__23129,i__23130,handler_23434__$1,vec__23200,ev,handler,ev_def))
);


var G__23435 = seq__23127;
var G__23436 = chunk__23128;
var G__23437 = count__23129;
var G__23438 = (i__23130 + (1));
seq__23127 = G__23435;
chunk__23128 = G__23436;
count__23129 = G__23437;
i__23130 = G__23438;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23127);
if(temp__5804__auto__){
var seq__23127__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23127__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23127__$1);
var G__23439 = cljs.core.chunk_rest(seq__23127__$1);
var G__23440 = c__5568__auto__;
var G__23441 = cljs.core.count(c__5568__auto__);
var G__23442 = (0);
seq__23127 = G__23439;
chunk__23128 = G__23440;
count__23129 = G__23441;
i__23130 = G__23442;
continue;
} else {
var vec__23238 = cljs.core.first(seq__23127__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23238,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23238,(1),null);
var ev_def = vec__23238;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_23443__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__23127,chunk__23128,count__23129,i__23130,vec__23238,ev,handler,ev_def,seq__23127__$1,temp__5804__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__23127,chunk__23128,count__23129,i__23130,vec__23238,ev,handler,ev_def,seq__23127__$1,temp__5804__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__23127,chunk__23128,count__23129,i__23130,handler_23443__$1,vec__23238,ev,handler,ev_def,seq__23127__$1,temp__5804__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_23443__$1.cljs$core$IFn$_invoke$arity$3 ? handler_23443__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_23443__$1.call(null,oref,e,el));
});})(seq__23127,chunk__23128,count__23129,i__23130,handler_23443__$1,vec__23238,ev,handler,ev_def,seq__23127__$1,temp__5804__auto__))
);


var G__23444 = cljs.core.next(seq__23127__$1);
var G__23445 = null;
var G__23446 = (0);
var G__23447 = (0);
seq__23127 = G__23444;
chunk__23128 = G__23445;
count__23129 = G__23446;
i__23130 = G__23447;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__23244){
var vec__23246 = p__23244;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23246,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23246,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = event;
if(cljs.core.truth_(and__5043__auto__)){
return handler;
} else {
return and__5043__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23448 = arguments.length;
var i__5770__auto___23449 = (0);
while(true){
if((i__5770__auto___23449 < len__5769__auto___23448)){
args__5775__auto__.push((arguments[i__5770__auto___23449]));

var G__23450 = (i__5770__auto___23449 + (1));
i__5770__auto___23449 = G__23450;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e23252){if((e23252 instanceof Object)){
var e = e23252;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e23252;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq23250){
var G__23251 = cljs.core.first(seq23250);
var seq23250__$1 = cljs.core.next(seq23250);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23251,seq23250__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__23254 = arguments.length;
switch (G__23254) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__23255 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__23255) : shadow.dom.build.call(null,G__23255));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k23257,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__23261 = k23257;
var G__23261__$1 = (((G__23261 instanceof cljs.core.Keyword))?G__23261.fqn:null);
switch (G__23261__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23257,else__5346__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__23262){
var vec__23263 = p__23262;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23263,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23263,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.object.Watch{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23256){
var self__ = this;
var G__23256__$1 = this;
return (new cljs.core.RecordIter((0),G__23256__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23258,other23259){
var self__ = this;
var this23258__$1 = this;
return (((!((other23259 == null)))) && ((((this23258__$1.constructor === other23259.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23258__$1.key,other23259.key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23258__$1.handler,other23259.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23258__$1.__extmap,other23259.__extmap)))))))));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k23257){
var self__ = this;
var this__5350__auto____$1 = this;
var G__23266 = k23257;
var G__23266__$1 = (((G__23266 instanceof cljs.core.Keyword))?G__23266.fqn:null);
switch (G__23266__$1) {
case "key":
case "handler":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k23257);

}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__23256){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__23267 = cljs.core.keyword_identical_QMARK_;
var expr__23268 = k__5352__auto__;
if(cljs.core.truth_((pred__23267.cljs$core$IFn$_invoke$arity$2 ? pred__23267.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__23268) : pred__23267.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__23268)))){
return (new shadow.object.Watch(G__23256,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23267.cljs$core$IFn$_invoke$arity$2 ? pred__23267.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__23268) : pred__23267.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__23268)))){
return (new shadow.object.Watch(self__.key,G__23256,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__23256),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__23256){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__23256,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__23260){
var extmap__5385__auto__ = (function (){var G__23270 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23260,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__23260)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23270);
} else {
return G__23270;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__23260),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__23260),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__23271_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__23271_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__23272 = cljs.core.seq(self__.watches);
var chunk__23273 = null;
var count__23274 = (0);
var i__23275 = (0);
while(true){
if((i__23275 < count__23274)){
var map__23278 = chunk__23273.cljs$core$IIndexed$_nth$arity$2(null,i__23275);
var map__23278__$1 = cljs.core.__destructure_map(map__23278);
var watch = map__23278__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23278__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23278__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__23462 = seq__23272;
var G__23463 = chunk__23273;
var G__23464 = count__23274;
var G__23465 = (i__23275 + (1));
seq__23272 = G__23462;
chunk__23273 = G__23463;
count__23274 = G__23464;
i__23275 = G__23465;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23272);
if(temp__5804__auto__){
var seq__23272__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23272__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23272__$1);
var G__23467 = cljs.core.chunk_rest(seq__23272__$1);
var G__23468 = c__5568__auto__;
var G__23469 = cljs.core.count(c__5568__auto__);
var G__23470 = (0);
seq__23272 = G__23467;
chunk__23273 = G__23468;
count__23274 = G__23469;
i__23275 = G__23470;
continue;
} else {
var map__23279 = cljs.core.first(seq__23272__$1);
var map__23279__$1 = cljs.core.__destructure_map(map__23279);
var watch = map__23279__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23279__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23279__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__23471 = cljs.core.next(seq__23272__$1);
var G__23472 = null;
var G__23473 = (0);
var G__23474 = (0);
seq__23272 = G__23471;
chunk__23273 = G__23472;
count__23274 = G__23473;
i__23275 = G__23474;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__23280_23475 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__23281_23476 = null;
var count__23282_23477 = (0);
var i__23283_23478 = (0);
while(true){
if((i__23283_23478 < count__23282_23477)){
var child_23479 = chunk__23281_23476.cljs$core$IIndexed$_nth$arity$2(null,i__23283_23478);
shadow.object._destroy_BANG_(child_23479,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__23481 = seq__23280_23475;
var G__23482 = chunk__23281_23476;
var G__23483 = count__23282_23477;
var G__23484 = (i__23283_23478 + (1));
seq__23280_23475 = G__23481;
chunk__23281_23476 = G__23482;
count__23282_23477 = G__23483;
i__23283_23478 = G__23484;
continue;
} else {
var temp__5804__auto___23488 = cljs.core.seq(seq__23280_23475);
if(temp__5804__auto___23488){
var seq__23280_23489__$1 = temp__5804__auto___23488;
if(cljs.core.chunked_seq_QMARK_(seq__23280_23489__$1)){
var c__5568__auto___23490 = cljs.core.chunk_first(seq__23280_23489__$1);
var G__23491 = cljs.core.chunk_rest(seq__23280_23489__$1);
var G__23492 = c__5568__auto___23490;
var G__23493 = cljs.core.count(c__5568__auto___23490);
var G__23494 = (0);
seq__23280_23475 = G__23491;
chunk__23281_23476 = G__23492;
count__23282_23477 = G__23493;
i__23283_23478 = G__23494;
continue;
} else {
var child_23495 = cljs.core.first(seq__23280_23489__$1);
shadow.object._destroy_BANG_(child_23495,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__23496 = cljs.core.next(seq__23280_23489__$1);
var G__23497 = null;
var G__23498 = (0);
var G__23499 = (0);
seq__23280_23475 = G__23496;
chunk__23281_23476 = G__23497;
count__23282_23477 = G__23498;
i__23283_23478 = G__23499;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_23500 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_23500 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_23500);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__23285 = arguments.length;
switch (G__23285) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__23287 = arguments.length;
switch (G__23287) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23503 = arguments.length;
var i__5770__auto___23504 = (0);
while(true){
if((i__5770__auto___23504 < len__5769__auto___23503)){
args__5775__auto__.push((arguments[i__5770__auto___23504]));

var G__23505 = (i__5770__auto___23504 + (1));
i__5770__auto___23504 = G__23505;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_23506 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5802__auto___23507 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5802__auto___23507)){
var dom_23508 = temp__5802__auto___23507;
shadow.dom.set_data(dom_23508,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_23508,dom_events_23506);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_23508], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_23508], 0));
} else {
var temp__5804__auto___23509 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5804__auto___23509)){
var dom_fn_23510 = temp__5804__auto___23509;
var dom_23511 = (function (){var G__23292 = (dom_fn_23510.cljs$core$IFn$_invoke$arity$2 ? dom_fn_23510.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_23510.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__23292) : shadow.dom.build.call(null,G__23292));
})();
shadow.dom.set_data(dom_23511,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_23511], 0));

shadow.object.bind_dom_events(oref,dom_23511,dom_events_23506);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_23511], 0));
} else {
}
}

var temp__5804__auto___23512 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5804__auto___23512)){
var watches_23513 = temp__5804__auto___23512;
var seq__23293_23514 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_23513));
var chunk__23294_23515 = null;
var count__23295_23516 = (0);
var i__23296_23517 = (0);
while(true){
if((i__23296_23517 < count__23295_23516)){
var vec__23303_23518 = chunk__23294_23515.cljs$core$IIndexed$_nth$arity$2(null,i__23296_23517);
var attr_23519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23303_23518,(0),null);
var handler_23520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23303_23518,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_23519,((function (seq__23293_23514,chunk__23294_23515,count__23295_23516,i__23296_23517,vec__23303_23518,attr_23519,handler_23520,watches_23513,temp__5804__auto___23512,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_23520.cljs$core$IFn$_invoke$arity$3 ? handler_23520.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_23520.call(null,oref,old,new$));
});})(seq__23293_23514,chunk__23294_23515,count__23295_23516,i__23296_23517,vec__23303_23518,attr_23519,handler_23520,watches_23513,temp__5804__auto___23512,oid,parent,result_chan,odef,obj,oref))
);


var G__23521 = seq__23293_23514;
var G__23522 = chunk__23294_23515;
var G__23523 = count__23295_23516;
var G__23524 = (i__23296_23517 + (1));
seq__23293_23514 = G__23521;
chunk__23294_23515 = G__23522;
count__23295_23516 = G__23523;
i__23296_23517 = G__23524;
continue;
} else {
var temp__5804__auto___23525__$1 = cljs.core.seq(seq__23293_23514);
if(temp__5804__auto___23525__$1){
var seq__23293_23526__$1 = temp__5804__auto___23525__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23293_23526__$1)){
var c__5568__auto___23527 = cljs.core.chunk_first(seq__23293_23526__$1);
var G__23528 = cljs.core.chunk_rest(seq__23293_23526__$1);
var G__23529 = c__5568__auto___23527;
var G__23530 = cljs.core.count(c__5568__auto___23527);
var G__23531 = (0);
seq__23293_23514 = G__23528;
chunk__23294_23515 = G__23529;
count__23295_23516 = G__23530;
i__23296_23517 = G__23531;
continue;
} else {
var vec__23306_23532 = cljs.core.first(seq__23293_23526__$1);
var attr_23533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23306_23532,(0),null);
var handler_23534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23306_23532,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_23533,((function (seq__23293_23514,chunk__23294_23515,count__23295_23516,i__23296_23517,vec__23306_23532,attr_23533,handler_23534,seq__23293_23526__$1,temp__5804__auto___23525__$1,watches_23513,temp__5804__auto___23512,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_23534.cljs$core$IFn$_invoke$arity$3 ? handler_23534.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_23534.call(null,oref,old,new$));
});})(seq__23293_23514,chunk__23294_23515,count__23295_23516,i__23296_23517,vec__23306_23532,attr_23533,handler_23534,seq__23293_23526__$1,temp__5804__auto___23525__$1,watches_23513,temp__5804__auto___23512,oid,parent,result_chan,odef,obj,oref))
);


var G__23535 = cljs.core.next(seq__23293_23526__$1);
var G__23536 = null;
var G__23537 = (0);
var G__23538 = (0);
seq__23293_23514 = G__23535;
chunk__23294_23515 = G__23536;
count__23295_23516 = G__23537;
i__23296_23517 = G__23538;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq23289){
var G__23290 = cljs.core.first(seq23289);
var seq23289__$1 = cljs.core.next(seq23289);
var G__23291 = cljs.core.first(seq23289__$1);
var seq23289__$2 = cljs.core.next(seq23289__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23290,G__23291,seq23289__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__23311 = arguments.length;
switch (G__23311) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__23309_SHARP_){
var G__23312 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__23309_SHARP_) : node_gen.call(null,p1__23309_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__23312) : shadow.dom.build.call(null,G__23312));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__23313_23544 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__23314_23545 = null;
var count__23315_23546 = (0);
var i__23316_23547 = (0);
while(true){
if((i__23316_23547 < count__23315_23546)){
var obj_23548 = chunk__23314_23545.cljs$core$IIndexed$_nth$arity$2(null,i__23316_23547);
var obj_23549__$1 = shadow.object.get_from_dom(obj_23548);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_23549__$1);


var G__23550 = seq__23313_23544;
var G__23551 = chunk__23314_23545;
var G__23552 = count__23315_23546;
var G__23553 = (i__23316_23547 + (1));
seq__23313_23544 = G__23550;
chunk__23314_23545 = G__23551;
count__23315_23546 = G__23552;
i__23316_23547 = G__23553;
continue;
} else {
var temp__5804__auto___23554 = cljs.core.seq(seq__23313_23544);
if(temp__5804__auto___23554){
var seq__23313_23555__$1 = temp__5804__auto___23554;
if(cljs.core.chunked_seq_QMARK_(seq__23313_23555__$1)){
var c__5568__auto___23556 = cljs.core.chunk_first(seq__23313_23555__$1);
var G__23557 = cljs.core.chunk_rest(seq__23313_23555__$1);
var G__23558 = c__5568__auto___23556;
var G__23559 = cljs.core.count(c__5568__auto___23556);
var G__23560 = (0);
seq__23313_23544 = G__23557;
chunk__23314_23545 = G__23558;
count__23315_23546 = G__23559;
i__23316_23547 = G__23560;
continue;
} else {
var obj_23561 = cljs.core.first(seq__23313_23555__$1);
var obj_23562__$1 = shadow.object.get_from_dom(obj_23561);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_23562__$1);


var G__23563 = cljs.core.next(seq__23313_23555__$1);
var G__23564 = null;
var G__23565 = (0);
var G__23566 = (0);
seq__23313_23544 = G__23563;
chunk__23314_23545 = G__23564;
count__23315_23546 = G__23565;
i__23316_23547 = G__23566;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__23319 = arguments.length;
switch (G__23319) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__23317_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__23317_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__23320){
var vec__23321 = p__23320;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23321,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23321,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__23324_23568 = cljs.core.seq((function (){var G__23329 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__23329) : coll_transform.call(null,G__23329));
})());
var chunk__23325_23569 = null;
var count__23326_23570 = (0);
var i__23327_23571 = (0);
while(true){
if((i__23327_23571 < count__23326_23570)){
var item_23572 = chunk__23325_23569.cljs$core$IIndexed$_nth$arity$2(null,i__23327_23571);
shadow.object.dom_enter(coll_dom,make_item_fn(item_23572));


var G__23573 = seq__23324_23568;
var G__23574 = chunk__23325_23569;
var G__23575 = count__23326_23570;
var G__23576 = (i__23327_23571 + (1));
seq__23324_23568 = G__23573;
chunk__23325_23569 = G__23574;
count__23326_23570 = G__23575;
i__23327_23571 = G__23576;
continue;
} else {
var temp__5804__auto___23577 = cljs.core.seq(seq__23324_23568);
if(temp__5804__auto___23577){
var seq__23324_23578__$1 = temp__5804__auto___23577;
if(cljs.core.chunked_seq_QMARK_(seq__23324_23578__$1)){
var c__5568__auto___23580 = cljs.core.chunk_first(seq__23324_23578__$1);
var G__23581 = cljs.core.chunk_rest(seq__23324_23578__$1);
var G__23582 = c__5568__auto___23580;
var G__23583 = cljs.core.count(c__5568__auto___23580);
var G__23584 = (0);
seq__23324_23568 = G__23581;
chunk__23325_23569 = G__23582;
count__23326_23570 = G__23583;
i__23327_23571 = G__23584;
continue;
} else {
var item_23585 = cljs.core.first(seq__23324_23578__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_23585));


var G__23586 = cljs.core.next(seq__23324_23578__$1);
var G__23587 = null;
var G__23588 = (0);
var G__23589 = (0);
seq__23324_23568 = G__23586;
chunk__23325_23569 = G__23587;
count__23326_23570 = G__23588;
i__23327_23571 = G__23589;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__5133__auto__ = count_new;
var y__5134__auto__ = count_children;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var n__5636__auto___23590 = count_children__$1;
var idx_23591 = (0);
while(true){
if((idx_23591 < n__5636__auto___23590)){
var cn_23592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_23591);
var cc_23593 = shadow.object.get_from_dom(cn_23592);
var ckey_23594 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_23593);
var cval_23595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_23593,item_key);
var vec__23330_23596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_23591);
var nkey_23597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23330_23596,(0),null);
var nval_23598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23330_23596,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_23594,nkey_23597)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_23595,nval_23598)))){
} else {
var new_obj_23599 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_23597,nval_23598], null));
shadow.dom.replace_node(cn_23592,new_obj_23599);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_23593);

shadow.object.notify_tree_BANG_(new_obj_23599,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__23604 = (idx_23591 + (1));
idx_23591 = G__23604;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__23333_23605 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__23334_23606 = null;
var count__23335_23607 = (0);
var i__23336_23608 = (0);
while(true){
if((i__23336_23608 < count__23335_23607)){
var item_23609 = chunk__23334_23606.cljs$core$IIndexed$_nth$arity$2(null,i__23336_23608);
shadow.object.dom_enter(coll_dom,make_item_fn(item_23609));


var G__23610 = seq__23333_23605;
var G__23611 = chunk__23334_23606;
var G__23612 = count__23335_23607;
var G__23613 = (i__23336_23608 + (1));
seq__23333_23605 = G__23610;
chunk__23334_23606 = G__23611;
count__23335_23607 = G__23612;
i__23336_23608 = G__23613;
continue;
} else {
var temp__5804__auto___23614 = cljs.core.seq(seq__23333_23605);
if(temp__5804__auto___23614){
var seq__23333_23615__$1 = temp__5804__auto___23614;
if(cljs.core.chunked_seq_QMARK_(seq__23333_23615__$1)){
var c__5568__auto___23616 = cljs.core.chunk_first(seq__23333_23615__$1);
var G__23617 = cljs.core.chunk_rest(seq__23333_23615__$1);
var G__23618 = c__5568__auto___23616;
var G__23619 = cljs.core.count(c__5568__auto___23616);
var G__23620 = (0);
seq__23333_23605 = G__23617;
chunk__23334_23606 = G__23618;
count__23335_23607 = G__23619;
i__23336_23608 = G__23620;
continue;
} else {
var item_23621 = cljs.core.first(seq__23333_23615__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_23621));


var G__23622 = cljs.core.next(seq__23333_23615__$1);
var G__23623 = null;
var G__23624 = (0);
var G__23625 = (0);
seq__23333_23605 = G__23622;
chunk__23334_23606 = G__23623;
count__23335_23607 = G__23624;
i__23336_23608 = G__23625;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__5043__auto__ = key;
if(cljs.core.truth_(and__5043__auto__)){
return path;
} else {
return and__5043__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__23337 = "inspect!";
var G__23338 = shadow.object._id(oref);
var G__23339 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__23340 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__23337,G__23338,G__23339,G__23340) : shadow.object.info.call(null,G__23337,G__23338,G__23339,G__23340));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__23341_23630 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__23342_23631 = null;
var count__23343_23632 = (0);
var i__23344_23633 = (0);
while(true){
if((i__23344_23633 < count__23343_23632)){
var vec__23359_23634 = chunk__23342_23631.cljs$core$IIndexed$_nth$arity$2(null,i__23344_23633);
var id_23635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23359_23634,(0),null);
var oref_23636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23359_23634,(1),null);
var G__23362_23637 = "dump";
var G__23363_23638 = id_23635;
var G__23364_23639 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_23636)], 0));
var G__23365_23640 = cljs.core.deref(shadow.object._data(oref_23636));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__23362_23637,G__23363_23638,G__23364_23639,G__23365_23640) : shadow.object.info.call(null,G__23362_23637,G__23363_23638,G__23364_23639,G__23365_23640));


var G__23641 = seq__23341_23630;
var G__23642 = chunk__23342_23631;
var G__23643 = count__23343_23632;
var G__23644 = (i__23344_23633 + (1));
seq__23341_23630 = G__23641;
chunk__23342_23631 = G__23642;
count__23343_23632 = G__23643;
i__23344_23633 = G__23644;
continue;
} else {
var temp__5804__auto___23645 = cljs.core.seq(seq__23341_23630);
if(temp__5804__auto___23645){
var seq__23341_23646__$1 = temp__5804__auto___23645;
if(cljs.core.chunked_seq_QMARK_(seq__23341_23646__$1)){
var c__5568__auto___23647 = cljs.core.chunk_first(seq__23341_23646__$1);
var G__23648 = cljs.core.chunk_rest(seq__23341_23646__$1);
var G__23649 = c__5568__auto___23647;
var G__23650 = cljs.core.count(c__5568__auto___23647);
var G__23651 = (0);
seq__23341_23630 = G__23648;
chunk__23342_23631 = G__23649;
count__23343_23632 = G__23650;
i__23344_23633 = G__23651;
continue;
} else {
var vec__23366_23652 = cljs.core.first(seq__23341_23646__$1);
var id_23653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23366_23652,(0),null);
var oref_23654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23366_23652,(1),null);
var G__23369_23655 = "dump";
var G__23370_23656 = id_23653;
var G__23371_23657 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_23654)], 0));
var G__23372_23658 = cljs.core.deref(shadow.object._data(oref_23654));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__23369_23655,G__23370_23656,G__23371_23657,G__23372_23658) : shadow.object.info.call(null,G__23369_23655,G__23370_23656,G__23371_23657,G__23372_23658));


var G__23659 = cljs.core.next(seq__23341_23646__$1);
var G__23660 = null;
var G__23661 = (0);
var G__23662 = (0);
seq__23341_23630 = G__23659;
chunk__23342_23631 = G__23660;
count__23343_23632 = G__23661;
i__23344_23633 = G__23662;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
