goog.provide('champion_gandyr_challenge.views');
champion_gandyr_challenge.views.position_label = (function champion_gandyr_challenge$views$position_label(n){
var suffixes = new cljs.core.PersistentArrayMap(null, 3, [(1),"st",(2),"nd",(3),"rd"], null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(suffixes,n,"th"))].join('');
});
champion_gandyr_challenge.views.position_style = (function champion_gandyr_challenge$views$position_style(index){
var G__21208 = index;
switch (G__21208) {
case (0):
return "bg-yellow-950 border-4 border-yellow-400 text-yellow-200";

break;
case (1):
return "bg-gray-800 border-4 border-gray-300 text-gray-200";

break;
case (2):
return "bg-orange-950 border-4 border-orange-500 text-orange-200";

break;
default:
return "bg-gray-800 border border-gray-700 text-white";

}
});
champion_gandyr_challenge.views.scoreboard_entry = (function champion_gandyr_challenge$views$scoreboard_entry(entry,index){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-col sm:flex-row items-center sm:justify-between w-full px-4 py-3 rounded-lg my-2 shadow-md ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(champion_gandyr_challenge.views.position_style(index))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full sm:w-16 text-center font-bold text-lg"], null),champion_gandyr_challenge.views.position_label((index + (1)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 text-lg text-center sm:text-left"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entry)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full sm:w-40 text-center sm:text-right"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(entry))], null)], null);
});
champion_gandyr_challenge.views.scoreboard = (function champion_gandyr_challenge$views$scoreboard(){
var entries = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score-board","score-board",1873229680)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full max-w-3xl mx-auto mt-6 px-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl sm:text-3xl font-bold text-white text-center mb-4"], null),"\uD83C\uDFC6 Champion Gandyr Challenge"], null),((cljs.core.empty_QMARK_(entries))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-400 text-center"], null),"No scores yet."], null):cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,entry){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [champion_gandyr_challenge.views.scoreboard_entry,entry,idx], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entry)], null));
}),entries)))], null);
});
champion_gandyr_challenge.views.main_panel = (function champion_gandyr_challenge$views$main_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 sm:p-6"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [champion_gandyr_challenge.views.scoreboard], null)], null);
});

//# sourceMappingURL=champion_gandyr_challenge.views.js.map
