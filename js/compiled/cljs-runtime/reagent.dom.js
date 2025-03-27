goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__19534 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__19535 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__19535);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__19539 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__19540 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__19540);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__19539);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__19534);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__19577 = arguments.length;
switch (G__19577) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__19597 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19597,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19597,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__19609_19651 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__19610_19652 = null;
var count__19611_19653 = (0);
var i__19612_19654 = (0);
while(true){
if((i__19612_19654 < count__19611_19653)){
var vec__19629_19655 = chunk__19610_19652.cljs$core$IIndexed$_nth$arity$2(null,i__19612_19654);
var container_19656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19629_19655,(0),null);
var comp_19657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19629_19655,(1),null);
reagent.dom.re_render_component(comp_19657,container_19656);


var G__19658 = seq__19609_19651;
var G__19659 = chunk__19610_19652;
var G__19660 = count__19611_19653;
var G__19661 = (i__19612_19654 + (1));
seq__19609_19651 = G__19658;
chunk__19610_19652 = G__19659;
count__19611_19653 = G__19660;
i__19612_19654 = G__19661;
continue;
} else {
var temp__5804__auto___19662 = cljs.core.seq(seq__19609_19651);
if(temp__5804__auto___19662){
var seq__19609_19663__$1 = temp__5804__auto___19662;
if(cljs.core.chunked_seq_QMARK_(seq__19609_19663__$1)){
var c__5568__auto___19664 = cljs.core.chunk_first(seq__19609_19663__$1);
var G__19665 = cljs.core.chunk_rest(seq__19609_19663__$1);
var G__19666 = c__5568__auto___19664;
var G__19667 = cljs.core.count(c__5568__auto___19664);
var G__19668 = (0);
seq__19609_19651 = G__19665;
chunk__19610_19652 = G__19666;
count__19611_19653 = G__19667;
i__19612_19654 = G__19668;
continue;
} else {
var vec__19639_19669 = cljs.core.first(seq__19609_19663__$1);
var container_19670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19639_19669,(0),null);
var comp_19671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19639_19669,(1),null);
reagent.dom.re_render_component(comp_19671,container_19670);


var G__19675 = cljs.core.next(seq__19609_19663__$1);
var G__19676 = null;
var G__19677 = (0);
var G__19678 = (0);
seq__19609_19651 = G__19675;
chunk__19610_19652 = G__19676;
count__19611_19653 = G__19677;
i__19612_19654 = G__19678;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
