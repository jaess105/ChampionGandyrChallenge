goog.provide('champion_gandyr_challenge.core');
champion_gandyr_challenge.core.dev_setup = (function champion_gandyr_challenge$core$dev_setup(){
if(champion_gandyr_challenge.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
champion_gandyr_challenge.core.mount_root = (function champion_gandyr_challenge$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [champion_gandyr_challenge.views.main_panel], null),root_el);
});
champion_gandyr_challenge.core.init = (function champion_gandyr_challenge$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("champion-gandyr-challenge.events","initialize-db","champion-gandyr-challenge.events/initialize-db",-1548738724)], null));

champion_gandyr_challenge.core.dev_setup();

return champion_gandyr_challenge.core.mount_root();
});

//# sourceMappingURL=champion_gandyr_challenge.core.js.map
