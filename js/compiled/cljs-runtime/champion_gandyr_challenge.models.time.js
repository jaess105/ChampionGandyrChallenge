goog.provide('champion_gandyr_challenge.models.time');

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
champion_gandyr_challenge.models.time.Time = (function (hour,minute,seconds,__meta,__extmap,__hash){
this.hour = hour;
this.minute = minute;
this.seconds = seconds;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(champion_gandyr_challenge.models.time.Time.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.hour),"h ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.minute),"m ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.seconds),"s"].join('');
}));

(champion_gandyr_challenge.models.time.Time.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(champion_gandyr_challenge.models.time.Time.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k21183,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__21187 = k21183;
var G__21187__$1 = (((G__21187 instanceof cljs.core.Keyword))?G__21187.fqn:null);
switch (G__21187__$1) {
case "hour":
return self__.hour;

break;
case "minute":
return self__.minute;

break;
case "seconds":
return self__.seconds;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21183,else__5346__auto__);

}
}));

(champion_gandyr_challenge.models.time.Time.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__21188){
var vec__21189 = p__21188;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21189,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21189,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(champion_gandyr_challenge.models.time.Time.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#champion-gandyr-challenge.models.time.Time{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hour","hour",-555989214),self__.hour],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minute","minute",-642875969),self__.minute],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null))], null),self__.__extmap));
}));

(champion_gandyr_challenge.models.time.Time.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21182){
var self__ = this;
var G__21182__$1 = this;
return (new cljs.core.RecordIter((0),G__21182__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"minute","minute",-642875969),new cljs.core.Keyword(null,"seconds","seconds",-445266194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(champion_gandyr_challenge.models.time.Time.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(champion_gandyr_challenge.models.time.Time.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new champion_gandyr_challenge.models.time.Time(self__.hour,self__.minute,self__.seconds,self__.__meta,self__.__extmap,self__.__hash));
}));

(champion_gandyr_challenge.models.time.Time.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(champion_gandyr_challenge.models.time.Time.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-215312408 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(champion_gandyr_challenge.models.time.Time.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21184,other21185){
var self__ = this;
var this21184__$1 = this;
return (((!((other21185 == null)))) && ((((this21184__$1.constructor === other21185.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21184__$1.hour,other21185.hour)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21184__$1.minute,other21185.minute)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21184__$1.seconds,other21185.seconds)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21184__$1.__extmap,other21185.__extmap)))))))))));
}));

(champion_gandyr_challenge.models.time.Time.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hour","hour",-555989214),null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),null,new cljs.core.Keyword(null,"minute","minute",-642875969),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new champion_gandyr_challenge.models.time.Time(self__.hour,self__.minute,self__.seconds,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(champion_gandyr_challenge.models.time.Time.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k21183){
var self__ = this;
var this__5350__auto____$1 = this;
var G__21192 = k21183;
var G__21192__$1 = (((G__21192 instanceof cljs.core.Keyword))?G__21192.fqn:null);
switch (G__21192__$1) {
case "hour":
case "minute":
case "seconds":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k21183);

}
}));

(champion_gandyr_challenge.models.time.Time.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__21182){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__21193 = cljs.core.keyword_identical_QMARK_;
var expr__21194 = k__5352__auto__;
if(cljs.core.truth_((pred__21193.cljs$core$IFn$_invoke$arity$2 ? pred__21193.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hour","hour",-555989214),expr__21194) : pred__21193.call(null,new cljs.core.Keyword(null,"hour","hour",-555989214),expr__21194)))){
return (new champion_gandyr_challenge.models.time.Time(G__21182,self__.minute,self__.seconds,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21193.cljs$core$IFn$_invoke$arity$2 ? pred__21193.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"minute","minute",-642875969),expr__21194) : pred__21193.call(null,new cljs.core.Keyword(null,"minute","minute",-642875969),expr__21194)))){
return (new champion_gandyr_challenge.models.time.Time(self__.hour,G__21182,self__.seconds,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21193.cljs$core$IFn$_invoke$arity$2 ? pred__21193.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seconds","seconds",-445266194),expr__21194) : pred__21193.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),expr__21194)))){
return (new champion_gandyr_challenge.models.time.Time(self__.hour,self__.minute,G__21182,self__.__meta,self__.__extmap,null));
} else {
return (new champion_gandyr_challenge.models.time.Time(self__.hour,self__.minute,self__.seconds,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__21182),null));
}
}
}
}));

(champion_gandyr_challenge.models.time.Time.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hour","hour",-555989214),self__.hour,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"minute","minute",-642875969),self__.minute,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds,null))], null),self__.__extmap));
}));

(champion_gandyr_challenge.models.time.Time.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__21182){
var self__ = this;
var this__5342__auto____$1 = this;
return (new champion_gandyr_challenge.models.time.Time(self__.hour,self__.minute,self__.seconds,G__21182,self__.__extmap,self__.__hash));
}));

(champion_gandyr_challenge.models.time.Time.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(champion_gandyr_challenge.models.time.Time.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hour","hour",1084542313,null),new cljs.core.Symbol(null,"minute","minute",997655558,null),new cljs.core.Symbol(null,"seconds","seconds",1195265333,null)], null);
}));

(champion_gandyr_challenge.models.time.Time.cljs$lang$type = true);

(champion_gandyr_challenge.models.time.Time.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"champion-gandyr-challenge.models.time/Time",null,(1),null));
}));

(champion_gandyr_challenge.models.time.Time.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"champion-gandyr-challenge.models.time/Time");
}));

/**
 * Positional factory function for champion-gandyr-challenge.models.time/Time.
 */
champion_gandyr_challenge.models.time.__GT_Time = (function champion_gandyr_challenge$models$time$__GT_Time(hour,minute,seconds){
return (new champion_gandyr_challenge.models.time.Time(hour,minute,seconds,null,null,null));
});

/**
 * Factory function for champion-gandyr-challenge.models.time/Time, taking a map of keywords to field values.
 */
champion_gandyr_challenge.models.time.map__GT_Time = (function champion_gandyr_challenge$models$time$map__GT_Time(G__21186){
var extmap__5385__auto__ = (function (){var G__21196 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21186,new cljs.core.Keyword(null,"hour","hour",-555989214),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"minute","minute",-642875969),new cljs.core.Keyword(null,"seconds","seconds",-445266194)], 0));
if(cljs.core.record_QMARK_(G__21186)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21196);
} else {
return G__21196;
}
})();
return (new champion_gandyr_challenge.models.time.Time(new cljs.core.Keyword(null,"hour","hour",-555989214).cljs$core$IFn$_invoke$arity$1(G__21186),new cljs.core.Keyword(null,"minute","minute",-642875969).cljs$core$IFn$_invoke$arity$1(G__21186),new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(G__21186),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

champion_gandyr_challenge.models.time.to_seconds = (function champion_gandyr_challenge$models$time$to_seconds(p__21197){
var map__21198 = p__21197;
var map__21198__$1 = cljs.core.__destructure_map(map__21198);
var hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
return (((hour * (3600)) + (minute * (60))) + seconds);
});

//# sourceMappingURL=champion_gandyr_challenge.models.time.js.map
