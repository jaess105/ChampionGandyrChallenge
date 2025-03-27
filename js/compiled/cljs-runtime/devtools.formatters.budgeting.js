goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__11932__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__11932__auto__["add"]).call(o__11932__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__11932__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__11932__auto__["delete"]).call(o__11932__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__11932__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__11932__auto__["has"]).call(o__11932__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__19905 = data;
var target__11957__auto__ = G__19905;
if(cljs.core.truth_(target__11957__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19905)].join(''),"\n","target__11957__auto__"].join('')));
}

(target__11957__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__19905;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_19985 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_19985);
} else {
var seq__19922_19987 = cljs.core.seq(json_ml);
var chunk__19925_19988 = null;
var count__19926_19989 = (0);
var i__19927_19990 = (0);
while(true){
if((i__19927_19990 < count__19926_19989)){
var item_19993 = chunk__19925_19988.cljs$core$IIndexed$_nth$arity$2(null,i__19927_19990);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_19993,new_depth_budget_19985) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_19993,new_depth_budget_19985));


var G__19995 = seq__19922_19987;
var G__19996 = chunk__19925_19988;
var G__19997 = count__19926_19989;
var G__19998 = (i__19927_19990 + (1));
seq__19922_19987 = G__19995;
chunk__19925_19988 = G__19996;
count__19926_19989 = G__19997;
i__19927_19990 = G__19998;
continue;
} else {
var temp__5804__auto___19999 = cljs.core.seq(seq__19922_19987);
if(temp__5804__auto___19999){
var seq__19922_20001__$1 = temp__5804__auto___19999;
if(cljs.core.chunked_seq_QMARK_(seq__19922_20001__$1)){
var c__5568__auto___20002 = cljs.core.chunk_first(seq__19922_20001__$1);
var G__20003 = cljs.core.chunk_rest(seq__19922_20001__$1);
var G__20004 = c__5568__auto___20002;
var G__20005 = cljs.core.count(c__5568__auto___20002);
var G__20006 = (0);
seq__19922_19987 = G__20003;
chunk__19925_19988 = G__20004;
count__19926_19989 = G__20005;
i__19927_19990 = G__20006;
continue;
} else {
var item_20008 = cljs.core.first(seq__19922_20001__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_20008,new_depth_budget_19985) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_20008,new_depth_budget_19985));


var G__20010 = cljs.core.next(seq__19922_20001__$1);
var G__20011 = null;
var G__20012 = (0);
var G__20013 = (0);
seq__19922_19987 = G__20010;
chunk__19925_19988 = G__20011;
count__19926_19989 = G__20012;
i__19927_19990 = G__20013;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5802__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5802__auto__)){
var initial_hierarchy_depth_budget = temp__5802__auto__;
var remaining_depth_budget = (function (){var or__5045__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
