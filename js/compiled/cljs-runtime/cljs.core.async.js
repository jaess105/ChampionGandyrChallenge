goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16061 = (function (f,blockable,meta16062){
this.f = f;
this.blockable = blockable;
this.meta16062 = meta16062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16063,meta16062__$1){
var self__ = this;
var _16063__$1 = this;
return (new cljs.core.async.t_cljs$core$async16061(self__.f,self__.blockable,meta16062__$1));
}));

(cljs.core.async.t_cljs$core$async16061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16063){
var self__ = this;
var _16063__$1 = this;
return self__.meta16062;
}));

(cljs.core.async.t_cljs$core$async16061.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async16061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async16061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16062","meta16062",778416924,null)], null);
}));

(cljs.core.async.t_cljs$core$async16061.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16061");

(cljs.core.async.t_cljs$core$async16061.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16061");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16061.
 */
cljs.core.async.__GT_t_cljs$core$async16061 = (function cljs$core$async$__GT_t_cljs$core$async16061(f,blockable,meta16062){
return (new cljs.core.async.t_cljs$core$async16061(f,blockable,meta16062));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16046 = arguments.length;
switch (G__16046) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async16061(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__16107 = arguments.length;
switch (G__16107) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__16120 = arguments.length;
switch (G__16120) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__16136 = arguments.length;
switch (G__16136) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_20828 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20828) : fn1.call(null,val_20828));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20828) : fn1.call(null,val_20828));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16157 = arguments.length;
switch (G__16157) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___20832 = n;
var x_20834 = (0);
while(true){
if((x_20834 < n__5636__auto___20832)){
(a[x_20834] = x_20834);

var G__20836 = (x_20834 + (1));
x_20834 = G__20836;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16195 = (function (flag,meta16196){
this.flag = flag;
this.meta16196 = meta16196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16197,meta16196__$1){
var self__ = this;
var _16197__$1 = this;
return (new cljs.core.async.t_cljs$core$async16195(self__.flag,meta16196__$1));
}));

(cljs.core.async.t_cljs$core$async16195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16197){
var self__ = this;
var _16197__$1 = this;
return self__.meta16196;
}));

(cljs.core.async.t_cljs$core$async16195.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16195.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async16195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16196","meta16196",-1254203241,null)], null);
}));

(cljs.core.async.t_cljs$core$async16195.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16195");

(cljs.core.async.t_cljs$core$async16195.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16195");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16195.
 */
cljs.core.async.__GT_t_cljs$core$async16195 = (function cljs$core$async$__GT_t_cljs$core$async16195(flag,meta16196){
return (new cljs.core.async.t_cljs$core$async16195(flag,meta16196));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async16195(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16201 = (function (flag,cb,meta16202){
this.flag = flag;
this.cb = cb;
this.meta16202 = meta16202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16203,meta16202__$1){
var self__ = this;
var _16203__$1 = this;
return (new cljs.core.async.t_cljs$core$async16201(self__.flag,self__.cb,meta16202__$1));
}));

(cljs.core.async.t_cljs$core$async16201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16203){
var self__ = this;
var _16203__$1 = this;
return self__.meta16202;
}));

(cljs.core.async.t_cljs$core$async16201.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16201.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16201.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16201.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async16201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16202","meta16202",805522480,null)], null);
}));

(cljs.core.async.t_cljs$core$async16201.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16201");

(cljs.core.async.t_cljs$core$async16201.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16201");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16201.
 */
cljs.core.async.__GT_t_cljs$core$async16201 = (function cljs$core$async$__GT_t_cljs$core$async16201(flag,cb,meta16202){
return (new cljs.core.async.t_cljs$core$async16201(flag,cb,meta16202));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async16201(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16211_SHARP_){
var G__16233 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16211_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16233) : fret.call(null,G__16233));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16212_SHARP_){
var G__16237 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16212_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16237) : fret.call(null,G__16237));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20850 = (i + (1));
i = G__20850;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20855 = arguments.length;
var i__5770__auto___20856 = (0);
while(true){
if((i__5770__auto___20856 < len__5769__auto___20855)){
args__5775__auto__.push((arguments[i__5770__auto___20856]));

var G__20857 = (i__5770__auto___20856 + (1));
i__5770__auto___20856 = G__20857;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16253){
var map__16254 = p__16253;
var map__16254__$1 = cljs.core.__destructure_map(map__16254);
var opts = map__16254__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16242){
var G__16243 = cljs.core.first(seq16242);
var seq16242__$1 = cljs.core.next(seq16242);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16243,seq16242__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__16281 = arguments.length;
switch (G__16281) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15931__auto___20865 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_16339){
var state_val_16346 = (state_16339[(1)]);
if((state_val_16346 === (7))){
var inst_16330 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
var statearr_16369_20871 = state_16339__$1;
(statearr_16369_20871[(2)] = inst_16330);

(statearr_16369_20871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (1))){
var state_16339__$1 = state_16339;
var statearr_16373_20872 = state_16339__$1;
(statearr_16373_20872[(2)] = null);

(statearr_16373_20872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (4))){
var inst_16304 = (state_16339[(7)]);
var inst_16304__$1 = (state_16339[(2)]);
var inst_16306 = (inst_16304__$1 == null);
var state_16339__$1 = (function (){var statearr_16383 = state_16339;
(statearr_16383[(7)] = inst_16304__$1);

return statearr_16383;
})();
if(cljs.core.truth_(inst_16306)){
var statearr_16386_20873 = state_16339__$1;
(statearr_16386_20873[(1)] = (5));

} else {
var statearr_16387_20874 = state_16339__$1;
(statearr_16387_20874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (13))){
var state_16339__$1 = state_16339;
var statearr_16398_20875 = state_16339__$1;
(statearr_16398_20875[(2)] = null);

(statearr_16398_20875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (6))){
var inst_16304 = (state_16339[(7)]);
var state_16339__$1 = state_16339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16339__$1,(11),to,inst_16304);
} else {
if((state_val_16346 === (3))){
var inst_16334 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16339__$1,inst_16334);
} else {
if((state_val_16346 === (12))){
var state_16339__$1 = state_16339;
var statearr_16416_20878 = state_16339__$1;
(statearr_16416_20878[(2)] = null);

(statearr_16416_20878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (2))){
var state_16339__$1 = state_16339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16339__$1,(4),from);
} else {
if((state_val_16346 === (11))){
var inst_16322 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
if(cljs.core.truth_(inst_16322)){
var statearr_16423_20879 = state_16339__$1;
(statearr_16423_20879[(1)] = (12));

} else {
var statearr_16425_20880 = state_16339__$1;
(statearr_16425_20880[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (9))){
var state_16339__$1 = state_16339;
var statearr_16431_20881 = state_16339__$1;
(statearr_16431_20881[(2)] = null);

(statearr_16431_20881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (5))){
var state_16339__$1 = state_16339;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16437_20884 = state_16339__$1;
(statearr_16437_20884[(1)] = (8));

} else {
var statearr_16438_20885 = state_16339__$1;
(statearr_16438_20885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (14))){
var inst_16328 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
var statearr_16440_20886 = state_16339__$1;
(statearr_16440_20886[(2)] = inst_16328);

(statearr_16440_20886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (10))){
var inst_16319 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
var statearr_16447_20889 = state_16339__$1;
(statearr_16447_20889[(2)] = inst_16319);

(statearr_16447_20889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (8))){
var inst_16315 = cljs.core.async.close_BANG_(to);
var state_16339__$1 = state_16339;
var statearr_16451_20890 = state_16339__$1;
(statearr_16451_20890[(2)] = inst_16315);

(statearr_16451_20890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14883__auto__ = null;
var cljs$core$async$state_machine__14883__auto____0 = (function (){
var statearr_16458 = [null,null,null,null,null,null,null,null];
(statearr_16458[(0)] = cljs$core$async$state_machine__14883__auto__);

(statearr_16458[(1)] = (1));

return statearr_16458;
});
var cljs$core$async$state_machine__14883__auto____1 = (function (state_16339){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_16339);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e16462){var ex__14886__auto__ = e16462;
var statearr_16463_20891 = state_16339;
(statearr_16463_20891[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_16339[(4)]))){
var statearr_16467_20893 = state_16339;
(statearr_16467_20893[(1)] = cljs.core.first((state_16339[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20894 = state_16339;
state_16339 = G__20894;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$state_machine__14883__auto__ = function(state_16339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14883__auto____1.call(this,state_16339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14883__auto____0;
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14883__auto____1;
return cljs$core$async$state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_16483 = f__15932__auto__();
(statearr_16483[(6)] = c__15931__auto___20865);

return statearr_16483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__16507){
var vec__16510 = p__16507;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16510,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16510,(1),null);
var job = vec__16510;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15931__auto___20901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_16522){
var state_val_16523 = (state_16522[(1)]);
if((state_val_16523 === (1))){
var state_16522__$1 = state_16522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16522__$1,(2),res,v);
} else {
if((state_val_16523 === (2))){
var inst_16518 = (state_16522[(2)]);
var inst_16519 = cljs.core.async.close_BANG_(res);
var state_16522__$1 = (function (){var statearr_16537 = state_16522;
(statearr_16537[(7)] = inst_16518);

return statearr_16537;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16522__$1,inst_16519);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____0 = (function (){
var statearr_16544 = [null,null,null,null,null,null,null,null];
(statearr_16544[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__);

(statearr_16544[(1)] = (1));

return statearr_16544;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____1 = (function (state_16522){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_16522);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e16547){var ex__14886__auto__ = e16547;
var statearr_16548_20903 = state_16522;
(statearr_16548_20903[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_16522[(4)]))){
var statearr_16552_20904 = state_16522;
(statearr_16552_20904[(1)] = cljs.core.first((state_16522[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20907 = state_16522;
state_16522 = G__20907;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__ = function(state_16522){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____1.call(this,state_16522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_16563 = f__15932__auto__();
(statearr_16563[(6)] = c__15931__auto___20901);

return statearr_16563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16566){
var vec__16568 = p__16566;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16568,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16568,(1),null);
var job = vec__16568;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___20911 = n;
var __20912 = (0);
while(true){
if((__20912 < n__5636__auto___20911)){
var G__16579_20913 = type;
var G__16579_20914__$1 = (((G__16579_20913 instanceof cljs.core.Keyword))?G__16579_20913.fqn:null);
switch (G__16579_20914__$1) {
case "compute":
var c__15931__auto___20916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20912,c__15931__auto___20916,G__16579_20913,G__16579_20914__$1,n__5636__auto___20911,jobs,results,process__$1,async){
return (function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = ((function (__20912,c__15931__auto___20916,G__16579_20913,G__16579_20914__$1,n__5636__auto___20911,jobs,results,process__$1,async){
return (function (state_16598){
var state_val_16599 = (state_16598[(1)]);
if((state_val_16599 === (1))){
var state_16598__$1 = state_16598;
var statearr_16601_20918 = state_16598__$1;
(statearr_16601_20918[(2)] = null);

(statearr_16601_20918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16599 === (2))){
var state_16598__$1 = state_16598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16598__$1,(4),jobs);
} else {
if((state_val_16599 === (3))){
var inst_16595 = (state_16598[(2)]);
var state_16598__$1 = state_16598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16598__$1,inst_16595);
} else {
if((state_val_16599 === (4))){
var inst_16584 = (state_16598[(2)]);
var inst_16586 = process__$1(inst_16584);
var state_16598__$1 = state_16598;
if(cljs.core.truth_(inst_16586)){
var statearr_16609_20923 = state_16598__$1;
(statearr_16609_20923[(1)] = (5));

} else {
var statearr_16611_20924 = state_16598__$1;
(statearr_16611_20924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16599 === (5))){
var state_16598__$1 = state_16598;
var statearr_16615_20925 = state_16598__$1;
(statearr_16615_20925[(2)] = null);

(statearr_16615_20925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16599 === (6))){
var state_16598__$1 = state_16598;
var statearr_16616_20926 = state_16598__$1;
(statearr_16616_20926[(2)] = null);

(statearr_16616_20926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16599 === (7))){
var inst_16593 = (state_16598[(2)]);
var state_16598__$1 = state_16598;
var statearr_16618_20927 = state_16598__$1;
(statearr_16618_20927[(2)] = inst_16593);

(statearr_16618_20927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20912,c__15931__auto___20916,G__16579_20913,G__16579_20914__$1,n__5636__auto___20911,jobs,results,process__$1,async))
;
return ((function (__20912,switch__14882__auto__,c__15931__auto___20916,G__16579_20913,G__16579_20914__$1,n__5636__auto___20911,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____0 = (function (){
var statearr_16627 = [null,null,null,null,null,null,null];
(statearr_16627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__);

(statearr_16627[(1)] = (1));

return statearr_16627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____1 = (function (state_16598){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_16598);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e16629){var ex__14886__auto__ = e16629;
var statearr_16632_20928 = state_16598;
(statearr_16632_20928[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_16598[(4)]))){
var statearr_16633_20929 = state_16598;
(statearr_16633_20929[(1)] = cljs.core.first((state_16598[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20930 = state_16598;
state_16598 = G__20930;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__ = function(state_16598){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____1.call(this,state_16598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__;
})()
;})(__20912,switch__14882__auto__,c__15931__auto___20916,G__16579_20913,G__16579_20914__$1,n__5636__auto___20911,jobs,results,process__$1,async))
})();
var state__15933__auto__ = (function (){var statearr_16643 = f__15932__auto__();
(statearr_16643[(6)] = c__15931__auto___20916);

return statearr_16643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
});})(__20912,c__15931__auto___20916,G__16579_20913,G__16579_20914__$1,n__5636__auto___20911,jobs,results,process__$1,async))
);


break;
case "async":
var c__15931__auto___20931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20912,c__15931__auto___20931,G__16579_20913,G__16579_20914__$1,n__5636__auto___20911,jobs,results,process__$1,async){
return (function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = ((function (__20912,c__15931__auto___20931,G__16579_20913,G__16579_20914__$1,n__5636__auto___20911,jobs,results,process__$1,async){
return (function (state_16664){
var state_val_16665 = (state_16664[(1)]);
if((state_val_16665 === (1))){
var state_16664__$1 = state_16664;
var statearr_16675_20935 = state_16664__$1;
(statearr_16675_20935[(2)] = null);

(statearr_16675_20935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (2))){
var state_16664__$1 = state_16664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16664__$1,(4),jobs);
} else {
if((state_val_16665 === (3))){
var inst_16662 = (state_16664[(2)]);
var state_16664__$1 = state_16664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16664__$1,inst_16662);
} else {
if((state_val_16665 === (4))){
var inst_16651 = (state_16664[(2)]);
var inst_16654 = async(inst_16651);
var state_16664__$1 = state_16664;
if(cljs.core.truth_(inst_16654)){
var statearr_16684_20937 = state_16664__$1;
(statearr_16684_20937[(1)] = (5));

} else {
var statearr_16688_20938 = state_16664__$1;
(statearr_16688_20938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (5))){
var state_16664__$1 = state_16664;
var statearr_16690_20939 = state_16664__$1;
(statearr_16690_20939[(2)] = null);

(statearr_16690_20939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (6))){
var state_16664__$1 = state_16664;
var statearr_16694_20940 = state_16664__$1;
(statearr_16694_20940[(2)] = null);

(statearr_16694_20940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (7))){
var inst_16660 = (state_16664[(2)]);
var state_16664__$1 = state_16664;
var statearr_16698_20943 = state_16664__$1;
(statearr_16698_20943[(2)] = inst_16660);

(statearr_16698_20943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20912,c__15931__auto___20931,G__16579_20913,G__16579_20914__$1,n__5636__auto___20911,jobs,results,process__$1,async))
;
return ((function (__20912,switch__14882__auto__,c__15931__auto___20931,G__16579_20913,G__16579_20914__$1,n__5636__auto___20911,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____0 = (function (){
var statearr_16700 = [null,null,null,null,null,null,null];
(statearr_16700[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__);

(statearr_16700[(1)] = (1));

return statearr_16700;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____1 = (function (state_16664){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_16664);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e16701){var ex__14886__auto__ = e16701;
var statearr_16704_20944 = state_16664;
(statearr_16704_20944[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_16664[(4)]))){
var statearr_16706_20945 = state_16664;
(statearr_16706_20945[(1)] = cljs.core.first((state_16664[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20949 = state_16664;
state_16664 = G__20949;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__ = function(state_16664){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____1.call(this,state_16664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__;
})()
;})(__20912,switch__14882__auto__,c__15931__auto___20931,G__16579_20913,G__16579_20914__$1,n__5636__auto___20911,jobs,results,process__$1,async))
})();
var state__15933__auto__ = (function (){var statearr_16708 = f__15932__auto__();
(statearr_16708[(6)] = c__15931__auto___20931);

return statearr_16708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
});})(__20912,c__15931__auto___20931,G__16579_20913,G__16579_20914__$1,n__5636__auto___20911,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16579_20914__$1)].join('')));

}

var G__20950 = (__20912 + (1));
__20912 = G__20950;
continue;
} else {
}
break;
}

var c__15931__auto___20951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_16748){
var state_val_16749 = (state_16748[(1)]);
if((state_val_16749 === (7))){
var inst_16733 = (state_16748[(2)]);
var state_16748__$1 = state_16748;
var statearr_16755_20952 = state_16748__$1;
(statearr_16755_20952[(2)] = inst_16733);

(statearr_16755_20952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (1))){
var state_16748__$1 = state_16748;
var statearr_16760_20953 = state_16748__$1;
(statearr_16760_20953[(2)] = null);

(statearr_16760_20953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (4))){
var inst_16715 = (state_16748[(7)]);
var inst_16715__$1 = (state_16748[(2)]);
var inst_16716 = (inst_16715__$1 == null);
var state_16748__$1 = (function (){var statearr_16772 = state_16748;
(statearr_16772[(7)] = inst_16715__$1);

return statearr_16772;
})();
if(cljs.core.truth_(inst_16716)){
var statearr_16773_20954 = state_16748__$1;
(statearr_16773_20954[(1)] = (5));

} else {
var statearr_16774_20955 = state_16748__$1;
(statearr_16774_20955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (6))){
var inst_16715 = (state_16748[(7)]);
var inst_16720 = (state_16748[(8)]);
var inst_16720__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16724 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16725 = [inst_16715,inst_16720__$1];
var inst_16726 = (new cljs.core.PersistentVector(null,2,(5),inst_16724,inst_16725,null));
var state_16748__$1 = (function (){var statearr_16779 = state_16748;
(statearr_16779[(8)] = inst_16720__$1);

return statearr_16779;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16748__$1,(8),jobs,inst_16726);
} else {
if((state_val_16749 === (3))){
var inst_16735 = (state_16748[(2)]);
var state_16748__$1 = state_16748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16748__$1,inst_16735);
} else {
if((state_val_16749 === (2))){
var state_16748__$1 = state_16748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16748__$1,(4),from);
} else {
if((state_val_16749 === (9))){
var inst_16730 = (state_16748[(2)]);
var state_16748__$1 = (function (){var statearr_16781 = state_16748;
(statearr_16781[(9)] = inst_16730);

return statearr_16781;
})();
var statearr_16786_20956 = state_16748__$1;
(statearr_16786_20956[(2)] = null);

(statearr_16786_20956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (5))){
var inst_16718 = cljs.core.async.close_BANG_(jobs);
var state_16748__$1 = state_16748;
var statearr_16793_20957 = state_16748__$1;
(statearr_16793_20957[(2)] = inst_16718);

(statearr_16793_20957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (8))){
var inst_16720 = (state_16748[(8)]);
var inst_16728 = (state_16748[(2)]);
var state_16748__$1 = (function (){var statearr_16797 = state_16748;
(statearr_16797[(10)] = inst_16728);

return statearr_16797;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16748__$1,(9),results,inst_16720);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____0 = (function (){
var statearr_16799 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16799[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__);

(statearr_16799[(1)] = (1));

return statearr_16799;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____1 = (function (state_16748){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_16748);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e16808){var ex__14886__auto__ = e16808;
var statearr_16816_20958 = state_16748;
(statearr_16816_20958[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_16748[(4)]))){
var statearr_16818_20959 = state_16748;
(statearr_16818_20959[(1)] = cljs.core.first((state_16748[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20960 = state_16748;
state_16748 = G__20960;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__ = function(state_16748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____1.call(this,state_16748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_16822 = f__15932__auto__();
(statearr_16822[(6)] = c__15931__auto___20951);

return statearr_16822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));


var c__15931__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_16897){
var state_val_16898 = (state_16897[(1)]);
if((state_val_16898 === (7))){
var inst_16890 = (state_16897[(2)]);
var state_16897__$1 = state_16897;
var statearr_16907_20962 = state_16897__$1;
(statearr_16907_20962[(2)] = inst_16890);

(statearr_16907_20962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (20))){
var state_16897__$1 = state_16897;
var statearr_16909_20965 = state_16897__$1;
(statearr_16909_20965[(2)] = null);

(statearr_16909_20965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (1))){
var state_16897__$1 = state_16897;
var statearr_16913_20966 = state_16897__$1;
(statearr_16913_20966[(2)] = null);

(statearr_16913_20966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (4))){
var inst_16843 = (state_16897[(7)]);
var inst_16843__$1 = (state_16897[(2)]);
var inst_16847 = (inst_16843__$1 == null);
var state_16897__$1 = (function (){var statearr_16928 = state_16897;
(statearr_16928[(7)] = inst_16843__$1);

return statearr_16928;
})();
if(cljs.core.truth_(inst_16847)){
var statearr_16930_20971 = state_16897__$1;
(statearr_16930_20971[(1)] = (5));

} else {
var statearr_16931_20972 = state_16897__$1;
(statearr_16931_20972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (15))){
var inst_16864 = (state_16897[(8)]);
var state_16897__$1 = state_16897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16897__$1,(18),to,inst_16864);
} else {
if((state_val_16898 === (21))){
var inst_16884 = (state_16897[(2)]);
var state_16897__$1 = state_16897;
var statearr_16935_20975 = state_16897__$1;
(statearr_16935_20975[(2)] = inst_16884);

(statearr_16935_20975[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (13))){
var inst_16886 = (state_16897[(2)]);
var state_16897__$1 = (function (){var statearr_16938 = state_16897;
(statearr_16938[(9)] = inst_16886);

return statearr_16938;
})();
var statearr_16939_20976 = state_16897__$1;
(statearr_16939_20976[(2)] = null);

(statearr_16939_20976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (6))){
var inst_16843 = (state_16897[(7)]);
var state_16897__$1 = state_16897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16897__$1,(11),inst_16843);
} else {
if((state_val_16898 === (17))){
var inst_16878 = (state_16897[(2)]);
var state_16897__$1 = state_16897;
if(cljs.core.truth_(inst_16878)){
var statearr_16949_20978 = state_16897__$1;
(statearr_16949_20978[(1)] = (19));

} else {
var statearr_16950_20979 = state_16897__$1;
(statearr_16950_20979[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (3))){
var inst_16892 = (state_16897[(2)]);
var state_16897__$1 = state_16897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16897__$1,inst_16892);
} else {
if((state_val_16898 === (12))){
var inst_16857 = (state_16897[(10)]);
var state_16897__$1 = state_16897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16897__$1,(14),inst_16857);
} else {
if((state_val_16898 === (2))){
var state_16897__$1 = state_16897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16897__$1,(4),results);
} else {
if((state_val_16898 === (19))){
var state_16897__$1 = state_16897;
var statearr_16955_20981 = state_16897__$1;
(statearr_16955_20981[(2)] = null);

(statearr_16955_20981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (11))){
var inst_16857 = (state_16897[(2)]);
var state_16897__$1 = (function (){var statearr_16960 = state_16897;
(statearr_16960[(10)] = inst_16857);

return statearr_16960;
})();
var statearr_16962_20985 = state_16897__$1;
(statearr_16962_20985[(2)] = null);

(statearr_16962_20985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (9))){
var state_16897__$1 = state_16897;
var statearr_16966_20986 = state_16897__$1;
(statearr_16966_20986[(2)] = null);

(statearr_16966_20986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (5))){
var state_16897__$1 = state_16897;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16974_20988 = state_16897__$1;
(statearr_16974_20988[(1)] = (8));

} else {
var statearr_16979_20989 = state_16897__$1;
(statearr_16979_20989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (14))){
var inst_16864 = (state_16897[(8)]);
var inst_16869 = (state_16897[(11)]);
var inst_16864__$1 = (state_16897[(2)]);
var inst_16868 = (inst_16864__$1 == null);
var inst_16869__$1 = cljs.core.not(inst_16868);
var state_16897__$1 = (function (){var statearr_16990 = state_16897;
(statearr_16990[(8)] = inst_16864__$1);

(statearr_16990[(11)] = inst_16869__$1);

return statearr_16990;
})();
if(inst_16869__$1){
var statearr_16994_20993 = state_16897__$1;
(statearr_16994_20993[(1)] = (15));

} else {
var statearr_16995_20995 = state_16897__$1;
(statearr_16995_20995[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (16))){
var inst_16869 = (state_16897[(11)]);
var state_16897__$1 = state_16897;
var statearr_16996_21000 = state_16897__$1;
(statearr_16996_21000[(2)] = inst_16869);

(statearr_16996_21000[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (10))){
var inst_16854 = (state_16897[(2)]);
var state_16897__$1 = state_16897;
var statearr_17001_21001 = state_16897__$1;
(statearr_17001_21001[(2)] = inst_16854);

(statearr_17001_21001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (18))){
var inst_16872 = (state_16897[(2)]);
var state_16897__$1 = state_16897;
var statearr_17005_21002 = state_16897__$1;
(statearr_17005_21002[(2)] = inst_16872);

(statearr_17005_21002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (8))){
var inst_16851 = cljs.core.async.close_BANG_(to);
var state_16897__$1 = state_16897;
var statearr_17015_21003 = state_16897__$1;
(statearr_17015_21003[(2)] = inst_16851);

(statearr_17015_21003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____0 = (function (){
var statearr_17028 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17028[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__);

(statearr_17028[(1)] = (1));

return statearr_17028;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____1 = (function (state_16897){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_16897);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e17037){var ex__14886__auto__ = e17037;
var statearr_17038_21007 = state_16897;
(statearr_17038_21007[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_16897[(4)]))){
var statearr_17039_21008 = state_16897;
(statearr_17039_21008[(1)] = cljs.core.first((state_16897[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21012 = state_16897;
state_16897 = G__21012;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__ = function(state_16897){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____1.call(this,state_16897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_17042 = f__15932__auto__();
(statearr_17042[(6)] = c__15931__auto__);

return statearr_17042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));

return c__15931__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17066 = arguments.length;
switch (G__17066) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__17097 = arguments.length;
switch (G__17097) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__17120 = arguments.length;
switch (G__17120) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15931__auto___21027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_17164){
var state_val_17165 = (state_17164[(1)]);
if((state_val_17165 === (7))){
var inst_17158 = (state_17164[(2)]);
var state_17164__$1 = state_17164;
var statearr_17171_21033 = state_17164__$1;
(statearr_17171_21033[(2)] = inst_17158);

(statearr_17171_21033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (1))){
var state_17164__$1 = state_17164;
var statearr_17174_21036 = state_17164__$1;
(statearr_17174_21036[(2)] = null);

(statearr_17174_21036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (4))){
var inst_17139 = (state_17164[(7)]);
var inst_17139__$1 = (state_17164[(2)]);
var inst_17140 = (inst_17139__$1 == null);
var state_17164__$1 = (function (){var statearr_17179 = state_17164;
(statearr_17179[(7)] = inst_17139__$1);

return statearr_17179;
})();
if(cljs.core.truth_(inst_17140)){
var statearr_17183_21037 = state_17164__$1;
(statearr_17183_21037[(1)] = (5));

} else {
var statearr_17184_21038 = state_17164__$1;
(statearr_17184_21038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (13))){
var state_17164__$1 = state_17164;
var statearr_17187_21040 = state_17164__$1;
(statearr_17187_21040[(2)] = null);

(statearr_17187_21040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (6))){
var inst_17139 = (state_17164[(7)]);
var inst_17145 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17139) : p.call(null,inst_17139));
var state_17164__$1 = state_17164;
if(cljs.core.truth_(inst_17145)){
var statearr_17194_21043 = state_17164__$1;
(statearr_17194_21043[(1)] = (9));

} else {
var statearr_17196_21045 = state_17164__$1;
(statearr_17196_21045[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (3))){
var inst_17160 = (state_17164[(2)]);
var state_17164__$1 = state_17164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17164__$1,inst_17160);
} else {
if((state_val_17165 === (12))){
var state_17164__$1 = state_17164;
var statearr_17199_21047 = state_17164__$1;
(statearr_17199_21047[(2)] = null);

(statearr_17199_21047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (2))){
var state_17164__$1 = state_17164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17164__$1,(4),ch);
} else {
if((state_val_17165 === (11))){
var inst_17139 = (state_17164[(7)]);
var inst_17149 = (state_17164[(2)]);
var state_17164__$1 = state_17164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17164__$1,(8),inst_17149,inst_17139);
} else {
if((state_val_17165 === (9))){
var state_17164__$1 = state_17164;
var statearr_17201_21049 = state_17164__$1;
(statearr_17201_21049[(2)] = tc);

(statearr_17201_21049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (5))){
var inst_17142 = cljs.core.async.close_BANG_(tc);
var inst_17143 = cljs.core.async.close_BANG_(fc);
var state_17164__$1 = (function (){var statearr_17207 = state_17164;
(statearr_17207[(8)] = inst_17142);

return statearr_17207;
})();
var statearr_17208_21052 = state_17164__$1;
(statearr_17208_21052[(2)] = inst_17143);

(statearr_17208_21052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (14))){
var inst_17156 = (state_17164[(2)]);
var state_17164__$1 = state_17164;
var statearr_17211_21055 = state_17164__$1;
(statearr_17211_21055[(2)] = inst_17156);

(statearr_17211_21055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (10))){
var state_17164__$1 = state_17164;
var statearr_17216_21056 = state_17164__$1;
(statearr_17216_21056[(2)] = fc);

(statearr_17216_21056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (8))){
var inst_17151 = (state_17164[(2)]);
var state_17164__$1 = state_17164;
if(cljs.core.truth_(inst_17151)){
var statearr_17217_21057 = state_17164__$1;
(statearr_17217_21057[(1)] = (12));

} else {
var statearr_17220_21058 = state_17164__$1;
(statearr_17220_21058[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14883__auto__ = null;
var cljs$core$async$state_machine__14883__auto____0 = (function (){
var statearr_17224 = [null,null,null,null,null,null,null,null,null];
(statearr_17224[(0)] = cljs$core$async$state_machine__14883__auto__);

(statearr_17224[(1)] = (1));

return statearr_17224;
});
var cljs$core$async$state_machine__14883__auto____1 = (function (state_17164){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_17164);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e17229){var ex__14886__auto__ = e17229;
var statearr_17232_21062 = state_17164;
(statearr_17232_21062[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_17164[(4)]))){
var statearr_17234_21065 = state_17164;
(statearr_17234_21065[(1)] = cljs.core.first((state_17164[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21066 = state_17164;
state_17164 = G__21066;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$state_machine__14883__auto__ = function(state_17164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14883__auto____1.call(this,state_17164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14883__auto____0;
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14883__auto____1;
return cljs$core$async$state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_17241 = f__15932__auto__();
(statearr_17241[(6)] = c__15931__auto___21027);

return statearr_17241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15931__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_17275){
var state_val_17276 = (state_17275[(1)]);
if((state_val_17276 === (7))){
var inst_17270 = (state_17275[(2)]);
var state_17275__$1 = state_17275;
var statearr_17279_21070 = state_17275__$1;
(statearr_17279_21070[(2)] = inst_17270);

(statearr_17279_21070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (1))){
var inst_17251 = init;
var inst_17252 = inst_17251;
var state_17275__$1 = (function (){var statearr_17280 = state_17275;
(statearr_17280[(7)] = inst_17252);

return statearr_17280;
})();
var statearr_17281_21073 = state_17275__$1;
(statearr_17281_21073[(2)] = null);

(statearr_17281_21073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (4))){
var inst_17255 = (state_17275[(8)]);
var inst_17255__$1 = (state_17275[(2)]);
var inst_17256 = (inst_17255__$1 == null);
var state_17275__$1 = (function (){var statearr_17284 = state_17275;
(statearr_17284[(8)] = inst_17255__$1);

return statearr_17284;
})();
if(cljs.core.truth_(inst_17256)){
var statearr_17286_21074 = state_17275__$1;
(statearr_17286_21074[(1)] = (5));

} else {
var statearr_17288_21075 = state_17275__$1;
(statearr_17288_21075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (6))){
var inst_17260 = (state_17275[(9)]);
var inst_17255 = (state_17275[(8)]);
var inst_17252 = (state_17275[(7)]);
var inst_17260__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17252,inst_17255) : f.call(null,inst_17252,inst_17255));
var inst_17261 = cljs.core.reduced_QMARK_(inst_17260__$1);
var state_17275__$1 = (function (){var statearr_17289 = state_17275;
(statearr_17289[(9)] = inst_17260__$1);

return statearr_17289;
})();
if(inst_17261){
var statearr_17290_21077 = state_17275__$1;
(statearr_17290_21077[(1)] = (8));

} else {
var statearr_17292_21079 = state_17275__$1;
(statearr_17292_21079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (3))){
var inst_17272 = (state_17275[(2)]);
var state_17275__$1 = state_17275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17275__$1,inst_17272);
} else {
if((state_val_17276 === (2))){
var state_17275__$1 = state_17275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17275__$1,(4),ch);
} else {
if((state_val_17276 === (9))){
var inst_17260 = (state_17275[(9)]);
var inst_17252 = inst_17260;
var state_17275__$1 = (function (){var statearr_17295 = state_17275;
(statearr_17295[(7)] = inst_17252);

return statearr_17295;
})();
var statearr_17296_21083 = state_17275__$1;
(statearr_17296_21083[(2)] = null);

(statearr_17296_21083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (5))){
var inst_17252 = (state_17275[(7)]);
var state_17275__$1 = state_17275;
var statearr_17299_21084 = state_17275__$1;
(statearr_17299_21084[(2)] = inst_17252);

(statearr_17299_21084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (10))){
var inst_17268 = (state_17275[(2)]);
var state_17275__$1 = state_17275;
var statearr_17300_21085 = state_17275__$1;
(statearr_17300_21085[(2)] = inst_17268);

(statearr_17300_21085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (8))){
var inst_17260 = (state_17275[(9)]);
var inst_17264 = cljs.core.deref(inst_17260);
var state_17275__$1 = state_17275;
var statearr_17302_21086 = state_17275__$1;
(statearr_17302_21086[(2)] = inst_17264);

(statearr_17302_21086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14883__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14883__auto____0 = (function (){
var statearr_17305 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17305[(0)] = cljs$core$async$reduce_$_state_machine__14883__auto__);

(statearr_17305[(1)] = (1));

return statearr_17305;
});
var cljs$core$async$reduce_$_state_machine__14883__auto____1 = (function (state_17275){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_17275);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e17310){var ex__14886__auto__ = e17310;
var statearr_17311_21090 = state_17275;
(statearr_17311_21090[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_17275[(4)]))){
var statearr_17315_21091 = state_17275;
(statearr_17315_21091[(1)] = cljs.core.first((state_17275[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21094 = state_17275;
state_17275 = G__21094;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14883__auto__ = function(state_17275){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14883__auto____1.call(this,state_17275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14883__auto____0;
cljs$core$async$reduce_$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14883__auto____1;
return cljs$core$async$reduce_$_state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_17318 = f__15932__auto__();
(statearr_17318[(6)] = c__15931__auto__);

return statearr_17318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));

return c__15931__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15931__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_17331){
var state_val_17332 = (state_17331[(1)]);
if((state_val_17332 === (1))){
var inst_17326 = cljs.core.async.reduce(f__$1,init,ch);
var state_17331__$1 = state_17331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17331__$1,(2),inst_17326);
} else {
if((state_val_17332 === (2))){
var inst_17328 = (state_17331[(2)]);
var inst_17329 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17328) : f__$1.call(null,inst_17328));
var state_17331__$1 = state_17331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17331__$1,inst_17329);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14883__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14883__auto____0 = (function (){
var statearr_17339 = [null,null,null,null,null,null,null];
(statearr_17339[(0)] = cljs$core$async$transduce_$_state_machine__14883__auto__);

(statearr_17339[(1)] = (1));

return statearr_17339;
});
var cljs$core$async$transduce_$_state_machine__14883__auto____1 = (function (state_17331){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_17331);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e17342){var ex__14886__auto__ = e17342;
var statearr_17343_21098 = state_17331;
(statearr_17343_21098[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_17331[(4)]))){
var statearr_17344_21099 = state_17331;
(statearr_17344_21099[(1)] = cljs.core.first((state_17331[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21102 = state_17331;
state_17331 = G__21102;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14883__auto__ = function(state_17331){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14883__auto____1.call(this,state_17331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14883__auto____0;
cljs$core$async$transduce_$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14883__auto____1;
return cljs$core$async$transduce_$_state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_17350 = f__15932__auto__();
(statearr_17350[(6)] = c__15931__auto__);

return statearr_17350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));

return c__15931__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17364 = arguments.length;
switch (G__17364) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15931__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_17431){
var state_val_17432 = (state_17431[(1)]);
if((state_val_17432 === (7))){
var inst_17400 = (state_17431[(2)]);
var state_17431__$1 = state_17431;
var statearr_17447_21107 = state_17431__$1;
(statearr_17447_21107[(2)] = inst_17400);

(statearr_17447_21107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17432 === (1))){
var inst_17382 = cljs.core.seq(coll);
var inst_17390 = inst_17382;
var state_17431__$1 = (function (){var statearr_17457 = state_17431;
(statearr_17457[(7)] = inst_17390);

return statearr_17457;
})();
var statearr_17466_21110 = state_17431__$1;
(statearr_17466_21110[(2)] = null);

(statearr_17466_21110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17432 === (4))){
var inst_17390 = (state_17431[(7)]);
var inst_17397 = cljs.core.first(inst_17390);
var state_17431__$1 = state_17431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17431__$1,(7),ch,inst_17397);
} else {
if((state_val_17432 === (13))){
var inst_17425 = (state_17431[(2)]);
var state_17431__$1 = state_17431;
var statearr_17468_21111 = state_17431__$1;
(statearr_17468_21111[(2)] = inst_17425);

(statearr_17468_21111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17432 === (6))){
var inst_17404 = (state_17431[(2)]);
var state_17431__$1 = state_17431;
if(cljs.core.truth_(inst_17404)){
var statearr_17474_21112 = state_17431__$1;
(statearr_17474_21112[(1)] = (8));

} else {
var statearr_17475_21113 = state_17431__$1;
(statearr_17475_21113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17432 === (3))){
var inst_17429 = (state_17431[(2)]);
var state_17431__$1 = state_17431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17431__$1,inst_17429);
} else {
if((state_val_17432 === (12))){
var state_17431__$1 = state_17431;
var statearr_17477_21115 = state_17431__$1;
(statearr_17477_21115[(2)] = null);

(statearr_17477_21115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17432 === (2))){
var inst_17390 = (state_17431[(7)]);
var state_17431__$1 = state_17431;
if(cljs.core.truth_(inst_17390)){
var statearr_17491_21116 = state_17431__$1;
(statearr_17491_21116[(1)] = (4));

} else {
var statearr_17494_21117 = state_17431__$1;
(statearr_17494_21117[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17432 === (11))){
var inst_17421 = cljs.core.async.close_BANG_(ch);
var state_17431__$1 = state_17431;
var statearr_17501_21120 = state_17431__$1;
(statearr_17501_21120[(2)] = inst_17421);

(statearr_17501_21120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17432 === (9))){
var state_17431__$1 = state_17431;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17506_21122 = state_17431__$1;
(statearr_17506_21122[(1)] = (11));

} else {
var statearr_17512_21124 = state_17431__$1;
(statearr_17512_21124[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17432 === (5))){
var inst_17390 = (state_17431[(7)]);
var state_17431__$1 = state_17431;
var statearr_17521_21125 = state_17431__$1;
(statearr_17521_21125[(2)] = inst_17390);

(statearr_17521_21125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17432 === (10))){
var inst_17427 = (state_17431[(2)]);
var state_17431__$1 = state_17431;
var statearr_17522_21126 = state_17431__$1;
(statearr_17522_21126[(2)] = inst_17427);

(statearr_17522_21126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17432 === (8))){
var inst_17390 = (state_17431[(7)]);
var inst_17415 = cljs.core.next(inst_17390);
var inst_17390__$1 = inst_17415;
var state_17431__$1 = (function (){var statearr_17526 = state_17431;
(statearr_17526[(7)] = inst_17390__$1);

return statearr_17526;
})();
var statearr_17527_21127 = state_17431__$1;
(statearr_17527_21127[(2)] = null);

(statearr_17527_21127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14883__auto__ = null;
var cljs$core$async$state_machine__14883__auto____0 = (function (){
var statearr_17533 = [null,null,null,null,null,null,null,null];
(statearr_17533[(0)] = cljs$core$async$state_machine__14883__auto__);

(statearr_17533[(1)] = (1));

return statearr_17533;
});
var cljs$core$async$state_machine__14883__auto____1 = (function (state_17431){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_17431);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e17534){var ex__14886__auto__ = e17534;
var statearr_17535_21129 = state_17431;
(statearr_17535_21129[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_17431[(4)]))){
var statearr_17537_21131 = state_17431;
(statearr_17537_21131[(1)] = cljs.core.first((state_17431[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21133 = state_17431;
state_17431 = G__21133;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$state_machine__14883__auto__ = function(state_17431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14883__auto____1.call(this,state_17431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14883__auto____0;
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14883__auto____1;
return cljs$core$async$state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_17545 = f__15932__auto__();
(statearr_17545[(6)] = c__15931__auto__);

return statearr_17545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));

return c__15931__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17571 = arguments.length;
switch (G__17571) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_21137 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_21137(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_21142 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_21142(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_21143 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_21143(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_21146 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_21146(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17636 = (function (ch,cs,meta17637){
this.ch = ch;
this.cs = cs;
this.meta17637 = meta17637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17638,meta17637__$1){
var self__ = this;
var _17638__$1 = this;
return (new cljs.core.async.t_cljs$core$async17636(self__.ch,self__.cs,meta17637__$1));
}));

(cljs.core.async.t_cljs$core$async17636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17638){
var self__ = this;
var _17638__$1 = this;
return self__.meta17637;
}));

(cljs.core.async.t_cljs$core$async17636.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17636.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17636.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17636.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17636.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17636.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17637","meta17637",837824364,null)], null);
}));

(cljs.core.async.t_cljs$core$async17636.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17636");

(cljs.core.async.t_cljs$core$async17636.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17636");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17636.
 */
cljs.core.async.__GT_t_cljs$core$async17636 = (function cljs$core$async$__GT_t_cljs$core$async17636(ch,cs,meta17637){
return (new cljs.core.async.t_cljs$core$async17636(ch,cs,meta17637));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async17636(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15931__auto___21148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_17833){
var state_val_17834 = (state_17833[(1)]);
if((state_val_17834 === (7))){
var inst_17822 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
var statearr_17844_21149 = state_17833__$1;
(statearr_17844_21149[(2)] = inst_17822);

(statearr_17844_21149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (20))){
var inst_17700 = (state_17833[(7)]);
var inst_17713 = cljs.core.first(inst_17700);
var inst_17715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17713,(0),null);
var inst_17719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17713,(1),null);
var state_17833__$1 = (function (){var statearr_17850 = state_17833;
(statearr_17850[(8)] = inst_17715);

return statearr_17850;
})();
if(cljs.core.truth_(inst_17719)){
var statearr_17852_21150 = state_17833__$1;
(statearr_17852_21150[(1)] = (22));

} else {
var statearr_17853_21151 = state_17833__$1;
(statearr_17853_21151[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (27))){
var inst_17764 = (state_17833[(9)]);
var inst_17666 = (state_17833[(10)]);
var inst_17754 = (state_17833[(11)]);
var inst_17756 = (state_17833[(12)]);
var inst_17764__$1 = cljs.core._nth(inst_17754,inst_17756);
var inst_17765 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17764__$1,inst_17666,done);
var state_17833__$1 = (function (){var statearr_17860 = state_17833;
(statearr_17860[(9)] = inst_17764__$1);

return statearr_17860;
})();
if(cljs.core.truth_(inst_17765)){
var statearr_17861_21155 = state_17833__$1;
(statearr_17861_21155[(1)] = (30));

} else {
var statearr_17862_21156 = state_17833__$1;
(statearr_17862_21156[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (1))){
var state_17833__$1 = state_17833;
var statearr_17866_21157 = state_17833__$1;
(statearr_17866_21157[(2)] = null);

(statearr_17866_21157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (24))){
var inst_17700 = (state_17833[(7)]);
var inst_17724 = (state_17833[(2)]);
var inst_17726 = cljs.core.next(inst_17700);
var inst_17675 = inst_17726;
var inst_17676 = null;
var inst_17677 = (0);
var inst_17678 = (0);
var state_17833__$1 = (function (){var statearr_17867 = state_17833;
(statearr_17867[(13)] = inst_17678);

(statearr_17867[(14)] = inst_17675);

(statearr_17867[(15)] = inst_17676);

(statearr_17867[(16)] = inst_17677);

(statearr_17867[(17)] = inst_17724);

return statearr_17867;
})();
var statearr_17868_21159 = state_17833__$1;
(statearr_17868_21159[(2)] = null);

(statearr_17868_21159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (39))){
var state_17833__$1 = state_17833;
var statearr_17872_21160 = state_17833__$1;
(statearr_17872_21160[(2)] = null);

(statearr_17872_21160[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (4))){
var inst_17666 = (state_17833[(10)]);
var inst_17666__$1 = (state_17833[(2)]);
var inst_17667 = (inst_17666__$1 == null);
var state_17833__$1 = (function (){var statearr_17875 = state_17833;
(statearr_17875[(10)] = inst_17666__$1);

return statearr_17875;
})();
if(cljs.core.truth_(inst_17667)){
var statearr_17876_21161 = state_17833__$1;
(statearr_17876_21161[(1)] = (5));

} else {
var statearr_17877_21163 = state_17833__$1;
(statearr_17877_21163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (15))){
var inst_17678 = (state_17833[(13)]);
var inst_17675 = (state_17833[(14)]);
var inst_17676 = (state_17833[(15)]);
var inst_17677 = (state_17833[(16)]);
var inst_17696 = (state_17833[(2)]);
var inst_17697 = (inst_17678 + (1));
var tmp17869 = inst_17675;
var tmp17870 = inst_17676;
var tmp17871 = inst_17677;
var inst_17675__$1 = tmp17869;
var inst_17676__$1 = tmp17870;
var inst_17677__$1 = tmp17871;
var inst_17678__$1 = inst_17697;
var state_17833__$1 = (function (){var statearr_17881 = state_17833;
(statearr_17881[(13)] = inst_17678__$1);

(statearr_17881[(18)] = inst_17696);

(statearr_17881[(14)] = inst_17675__$1);

(statearr_17881[(15)] = inst_17676__$1);

(statearr_17881[(16)] = inst_17677__$1);

return statearr_17881;
})();
var statearr_17885_21166 = state_17833__$1;
(statearr_17885_21166[(2)] = null);

(statearr_17885_21166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (21))){
var inst_17729 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
var statearr_17890_21169 = state_17833__$1;
(statearr_17890_21169[(2)] = inst_17729);

(statearr_17890_21169[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (31))){
var inst_17764 = (state_17833[(9)]);
var inst_17768 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17764);
var state_17833__$1 = state_17833;
var statearr_17894_21171 = state_17833__$1;
(statearr_17894_21171[(2)] = inst_17768);

(statearr_17894_21171[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (32))){
var inst_17755 = (state_17833[(19)]);
var inst_17754 = (state_17833[(11)]);
var inst_17756 = (state_17833[(12)]);
var inst_17753 = (state_17833[(20)]);
var inst_17770 = (state_17833[(2)]);
var inst_17774 = (inst_17756 + (1));
var tmp17886 = inst_17755;
var tmp17887 = inst_17754;
var tmp17888 = inst_17753;
var inst_17753__$1 = tmp17888;
var inst_17754__$1 = tmp17887;
var inst_17755__$1 = tmp17886;
var inst_17756__$1 = inst_17774;
var state_17833__$1 = (function (){var statearr_17896 = state_17833;
(statearr_17896[(19)] = inst_17755__$1);

(statearr_17896[(21)] = inst_17770);

(statearr_17896[(11)] = inst_17754__$1);

(statearr_17896[(12)] = inst_17756__$1);

(statearr_17896[(20)] = inst_17753__$1);

return statearr_17896;
})();
var statearr_17897_21174 = state_17833__$1;
(statearr_17897_21174[(2)] = null);

(statearr_17897_21174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (40))){
var inst_17793 = (state_17833[(22)]);
var inst_17798 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17793);
var state_17833__$1 = state_17833;
var statearr_17898_21175 = state_17833__$1;
(statearr_17898_21175[(2)] = inst_17798);

(statearr_17898_21175[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (33))){
var inst_17777 = (state_17833[(23)]);
var inst_17780 = cljs.core.chunked_seq_QMARK_(inst_17777);
var state_17833__$1 = state_17833;
if(inst_17780){
var statearr_17899_21177 = state_17833__$1;
(statearr_17899_21177[(1)] = (36));

} else {
var statearr_17901_21178 = state_17833__$1;
(statearr_17901_21178[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (13))){
var inst_17689 = (state_17833[(24)]);
var inst_17693 = cljs.core.async.close_BANG_(inst_17689);
var state_17833__$1 = state_17833;
var statearr_17911_21183 = state_17833__$1;
(statearr_17911_21183[(2)] = inst_17693);

(statearr_17911_21183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (22))){
var inst_17715 = (state_17833[(8)]);
var inst_17721 = cljs.core.async.close_BANG_(inst_17715);
var state_17833__$1 = state_17833;
var statearr_17915_21184 = state_17833__$1;
(statearr_17915_21184[(2)] = inst_17721);

(statearr_17915_21184[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (36))){
var inst_17777 = (state_17833[(23)]);
var inst_17785 = cljs.core.chunk_first(inst_17777);
var inst_17786 = cljs.core.chunk_rest(inst_17777);
var inst_17787 = cljs.core.count(inst_17785);
var inst_17753 = inst_17786;
var inst_17754 = inst_17785;
var inst_17755 = inst_17787;
var inst_17756 = (0);
var state_17833__$1 = (function (){var statearr_17917 = state_17833;
(statearr_17917[(19)] = inst_17755);

(statearr_17917[(11)] = inst_17754);

(statearr_17917[(12)] = inst_17756);

(statearr_17917[(20)] = inst_17753);

return statearr_17917;
})();
var statearr_17918_21185 = state_17833__$1;
(statearr_17918_21185[(2)] = null);

(statearr_17918_21185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (41))){
var inst_17777 = (state_17833[(23)]);
var inst_17800 = (state_17833[(2)]);
var inst_17801 = cljs.core.next(inst_17777);
var inst_17753 = inst_17801;
var inst_17754 = null;
var inst_17755 = (0);
var inst_17756 = (0);
var state_17833__$1 = (function (){var statearr_17922 = state_17833;
(statearr_17922[(25)] = inst_17800);

(statearr_17922[(19)] = inst_17755);

(statearr_17922[(11)] = inst_17754);

(statearr_17922[(12)] = inst_17756);

(statearr_17922[(20)] = inst_17753);

return statearr_17922;
})();
var statearr_17926_21189 = state_17833__$1;
(statearr_17926_21189[(2)] = null);

(statearr_17926_21189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (43))){
var state_17833__$1 = state_17833;
var statearr_17929_21190 = state_17833__$1;
(statearr_17929_21190[(2)] = null);

(statearr_17929_21190[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (29))){
var inst_17809 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
var statearr_17934_21191 = state_17833__$1;
(statearr_17934_21191[(2)] = inst_17809);

(statearr_17934_21191[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (44))){
var inst_17819 = (state_17833[(2)]);
var state_17833__$1 = (function (){var statearr_17936 = state_17833;
(statearr_17936[(26)] = inst_17819);

return statearr_17936;
})();
var statearr_17937_21192 = state_17833__$1;
(statearr_17937_21192[(2)] = null);

(statearr_17937_21192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (6))){
var inst_17745 = (state_17833[(27)]);
var inst_17744 = cljs.core.deref(cs);
var inst_17745__$1 = cljs.core.keys(inst_17744);
var inst_17746 = cljs.core.count(inst_17745__$1);
var inst_17747 = cljs.core.reset_BANG_(dctr,inst_17746);
var inst_17752 = cljs.core.seq(inst_17745__$1);
var inst_17753 = inst_17752;
var inst_17754 = null;
var inst_17755 = (0);
var inst_17756 = (0);
var state_17833__$1 = (function (){var statearr_17938 = state_17833;
(statearr_17938[(28)] = inst_17747);

(statearr_17938[(19)] = inst_17755);

(statearr_17938[(27)] = inst_17745__$1);

(statearr_17938[(11)] = inst_17754);

(statearr_17938[(12)] = inst_17756);

(statearr_17938[(20)] = inst_17753);

return statearr_17938;
})();
var statearr_17945_21193 = state_17833__$1;
(statearr_17945_21193[(2)] = null);

(statearr_17945_21193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (28))){
var inst_17777 = (state_17833[(23)]);
var inst_17753 = (state_17833[(20)]);
var inst_17777__$1 = cljs.core.seq(inst_17753);
var state_17833__$1 = (function (){var statearr_17950 = state_17833;
(statearr_17950[(23)] = inst_17777__$1);

return statearr_17950;
})();
if(inst_17777__$1){
var statearr_17951_21195 = state_17833__$1;
(statearr_17951_21195[(1)] = (33));

} else {
var statearr_17952_21196 = state_17833__$1;
(statearr_17952_21196[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (25))){
var inst_17755 = (state_17833[(19)]);
var inst_17756 = (state_17833[(12)]);
var inst_17760 = (inst_17756 < inst_17755);
var inst_17761 = inst_17760;
var state_17833__$1 = state_17833;
if(cljs.core.truth_(inst_17761)){
var statearr_17953_21199 = state_17833__$1;
(statearr_17953_21199[(1)] = (27));

} else {
var statearr_17954_21200 = state_17833__$1;
(statearr_17954_21200[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (34))){
var state_17833__$1 = state_17833;
var statearr_17958_21202 = state_17833__$1;
(statearr_17958_21202[(2)] = null);

(statearr_17958_21202[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (17))){
var state_17833__$1 = state_17833;
var statearr_17968_21203 = state_17833__$1;
(statearr_17968_21203[(2)] = null);

(statearr_17968_21203[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (3))){
var inst_17824 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17833__$1,inst_17824);
} else {
if((state_val_17834 === (12))){
var inst_17737 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
var statearr_17986_21204 = state_17833__$1;
(statearr_17986_21204[(2)] = inst_17737);

(statearr_17986_21204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (2))){
var state_17833__$1 = state_17833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17833__$1,(4),ch);
} else {
if((state_val_17834 === (23))){
var state_17833__$1 = state_17833;
var statearr_17993_21205 = state_17833__$1;
(statearr_17993_21205[(2)] = null);

(statearr_17993_21205[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (35))){
var inst_17807 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
var statearr_17997_21208 = state_17833__$1;
(statearr_17997_21208[(2)] = inst_17807);

(statearr_17997_21208[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (19))){
var inst_17700 = (state_17833[(7)]);
var inst_17705 = cljs.core.chunk_first(inst_17700);
var inst_17706 = cljs.core.chunk_rest(inst_17700);
var inst_17707 = cljs.core.count(inst_17705);
var inst_17675 = inst_17706;
var inst_17676 = inst_17705;
var inst_17677 = inst_17707;
var inst_17678 = (0);
var state_17833__$1 = (function (){var statearr_18013 = state_17833;
(statearr_18013[(13)] = inst_17678);

(statearr_18013[(14)] = inst_17675);

(statearr_18013[(15)] = inst_17676);

(statearr_18013[(16)] = inst_17677);

return statearr_18013;
})();
var statearr_18027_21209 = state_17833__$1;
(statearr_18027_21209[(2)] = null);

(statearr_18027_21209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (11))){
var inst_17675 = (state_17833[(14)]);
var inst_17700 = (state_17833[(7)]);
var inst_17700__$1 = cljs.core.seq(inst_17675);
var state_17833__$1 = (function (){var statearr_18043 = state_17833;
(statearr_18043[(7)] = inst_17700__$1);

return statearr_18043;
})();
if(inst_17700__$1){
var statearr_18044_21210 = state_17833__$1;
(statearr_18044_21210[(1)] = (16));

} else {
var statearr_18045_21211 = state_17833__$1;
(statearr_18045_21211[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (9))){
var inst_17739 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
var statearr_18046_21212 = state_17833__$1;
(statearr_18046_21212[(2)] = inst_17739);

(statearr_18046_21212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (5))){
var inst_17673 = cljs.core.deref(cs);
var inst_17674 = cljs.core.seq(inst_17673);
var inst_17675 = inst_17674;
var inst_17676 = null;
var inst_17677 = (0);
var inst_17678 = (0);
var state_17833__$1 = (function (){var statearr_18058 = state_17833;
(statearr_18058[(13)] = inst_17678);

(statearr_18058[(14)] = inst_17675);

(statearr_18058[(15)] = inst_17676);

(statearr_18058[(16)] = inst_17677);

return statearr_18058;
})();
var statearr_18071_21213 = state_17833__$1;
(statearr_18071_21213[(2)] = null);

(statearr_18071_21213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (14))){
var state_17833__$1 = state_17833;
var statearr_18088_21214 = state_17833__$1;
(statearr_18088_21214[(2)] = null);

(statearr_18088_21214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (45))){
var inst_17816 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
var statearr_18107_21215 = state_17833__$1;
(statearr_18107_21215[(2)] = inst_17816);

(statearr_18107_21215[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (26))){
var inst_17745 = (state_17833[(27)]);
var inst_17811 = (state_17833[(2)]);
var inst_17813 = cljs.core.seq(inst_17745);
var state_17833__$1 = (function (){var statearr_18117 = state_17833;
(statearr_18117[(29)] = inst_17811);

return statearr_18117;
})();
if(inst_17813){
var statearr_18128_21216 = state_17833__$1;
(statearr_18128_21216[(1)] = (42));

} else {
var statearr_18130_21217 = state_17833__$1;
(statearr_18130_21217[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (16))){
var inst_17700 = (state_17833[(7)]);
var inst_17703 = cljs.core.chunked_seq_QMARK_(inst_17700);
var state_17833__$1 = state_17833;
if(inst_17703){
var statearr_18132_21218 = state_17833__$1;
(statearr_18132_21218[(1)] = (19));

} else {
var statearr_18133_21219 = state_17833__$1;
(statearr_18133_21219[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (38))){
var inst_17804 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
var statearr_18134_21220 = state_17833__$1;
(statearr_18134_21220[(2)] = inst_17804);

(statearr_18134_21220[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (30))){
var state_17833__$1 = state_17833;
var statearr_18141_21221 = state_17833__$1;
(statearr_18141_21221[(2)] = null);

(statearr_18141_21221[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (10))){
var inst_17678 = (state_17833[(13)]);
var inst_17676 = (state_17833[(15)]);
var inst_17687 = cljs.core._nth(inst_17676,inst_17678);
var inst_17689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17687,(0),null);
var inst_17691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17687,(1),null);
var state_17833__$1 = (function (){var statearr_18162 = state_17833;
(statearr_18162[(24)] = inst_17689);

return statearr_18162;
})();
if(cljs.core.truth_(inst_17691)){
var statearr_18163_21222 = state_17833__$1;
(statearr_18163_21222[(1)] = (13));

} else {
var statearr_18168_21224 = state_17833__$1;
(statearr_18168_21224[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (18))){
var inst_17734 = (state_17833[(2)]);
var state_17833__$1 = state_17833;
var statearr_18176_21229 = state_17833__$1;
(statearr_18176_21229[(2)] = inst_17734);

(statearr_18176_21229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (42))){
var state_17833__$1 = state_17833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17833__$1,(45),dchan);
} else {
if((state_val_17834 === (37))){
var inst_17777 = (state_17833[(23)]);
var inst_17793 = (state_17833[(22)]);
var inst_17666 = (state_17833[(10)]);
var inst_17793__$1 = cljs.core.first(inst_17777);
var inst_17795 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17793__$1,inst_17666,done);
var state_17833__$1 = (function (){var statearr_18196 = state_17833;
(statearr_18196[(22)] = inst_17793__$1);

return statearr_18196;
})();
if(cljs.core.truth_(inst_17795)){
var statearr_18201_21234 = state_17833__$1;
(statearr_18201_21234[(1)] = (39));

} else {
var statearr_18202_21235 = state_17833__$1;
(statearr_18202_21235[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17834 === (8))){
var inst_17678 = (state_17833[(13)]);
var inst_17677 = (state_17833[(16)]);
var inst_17680 = (inst_17678 < inst_17677);
var inst_17681 = inst_17680;
var state_17833__$1 = state_17833;
if(cljs.core.truth_(inst_17681)){
var statearr_18203_21236 = state_17833__$1;
(statearr_18203_21236[(1)] = (10));

} else {
var statearr_18213_21237 = state_17833__$1;
(statearr_18213_21237[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14883__auto__ = null;
var cljs$core$async$mult_$_state_machine__14883__auto____0 = (function (){
var statearr_18233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18233[(0)] = cljs$core$async$mult_$_state_machine__14883__auto__);

(statearr_18233[(1)] = (1));

return statearr_18233;
});
var cljs$core$async$mult_$_state_machine__14883__auto____1 = (function (state_17833){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_17833);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e18235){var ex__14886__auto__ = e18235;
var statearr_18236_21239 = state_17833;
(statearr_18236_21239[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_17833[(4)]))){
var statearr_18239_21240 = state_17833;
(statearr_18239_21240[(1)] = cljs.core.first((state_17833[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21241 = state_17833;
state_17833 = G__21241;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14883__auto__ = function(state_17833){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14883__auto____1.call(this,state_17833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14883__auto____0;
cljs$core$async$mult_$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14883__auto____1;
return cljs$core$async$mult_$_state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_18241 = f__15932__auto__();
(statearr_18241[(6)] = c__15931__auto___21148);

return statearr_18241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18248 = arguments.length;
switch (G__18248) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_21243 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_21243(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_21245 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_21245(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_21247 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_21247(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_21248 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_21248(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_21249 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_21249(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21250 = arguments.length;
var i__5770__auto___21251 = (0);
while(true){
if((i__5770__auto___21251 < len__5769__auto___21250)){
args__5775__auto__.push((arguments[i__5770__auto___21251]));

var G__21252 = (i__5770__auto___21251 + (1));
i__5770__auto___21251 = G__21252;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18299){
var map__18300 = p__18299;
var map__18300__$1 = cljs.core.__destructure_map(map__18300);
var opts = map__18300__$1;
var statearr_18302_21255 = state;
(statearr_18302_21255[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18304_21256 = state;
(statearr_18304_21256[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18308_21258 = state;
(statearr_18308_21258[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18293){
var G__18294 = cljs.core.first(seq18293);
var seq18293__$1 = cljs.core.next(seq18293);
var G__18295 = cljs.core.first(seq18293__$1);
var seq18293__$2 = cljs.core.next(seq18293__$1);
var G__18296 = cljs.core.first(seq18293__$2);
var seq18293__$3 = cljs.core.next(seq18293__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18294,G__18295,G__18296,seq18293__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18333 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18334){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18334 = meta18334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18335,meta18334__$1){
var self__ = this;
var _18335__$1 = this;
return (new cljs.core.async.t_cljs$core$async18333(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18334__$1));
}));

(cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18335){
var self__ = this;
var _18335__$1 = this;
return self__.meta18334;
}));

(cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18334","meta18334",-513147657,null)], null);
}));

(cljs.core.async.t_cljs$core$async18333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18333");

(cljs.core.async.t_cljs$core$async18333.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18333.
 */
cljs.core.async.__GT_t_cljs$core$async18333 = (function cljs$core$async$__GT_t_cljs$core$async18333(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18334){
return (new cljs.core.async.t_cljs$core$async18333(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18334));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async18333(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15931__auto___21268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_18451){
var state_val_18452 = (state_18451[(1)]);
if((state_val_18452 === (7))){
var inst_18384 = (state_18451[(2)]);
var state_18451__$1 = state_18451;
if(cljs.core.truth_(inst_18384)){
var statearr_18464_21271 = state_18451__$1;
(statearr_18464_21271[(1)] = (8));

} else {
var statearr_18465_21276 = state_18451__$1;
(statearr_18465_21276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (20))){
var inst_18374 = (state_18451[(7)]);
var state_18451__$1 = state_18451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18451__$1,(23),out,inst_18374);
} else {
if((state_val_18452 === (1))){
var inst_18355 = calc_state();
var inst_18356 = cljs.core.__destructure_map(inst_18355);
var inst_18357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18356,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18356,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18356,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18360 = inst_18355;
var state_18451__$1 = (function (){var statearr_18491 = state_18451;
(statearr_18491[(8)] = inst_18358);

(statearr_18491[(9)] = inst_18359);

(statearr_18491[(10)] = inst_18360);

(statearr_18491[(11)] = inst_18357);

return statearr_18491;
})();
var statearr_18493_21279 = state_18451__$1;
(statearr_18493_21279[(2)] = null);

(statearr_18493_21279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (24))){
var inst_18364 = (state_18451[(12)]);
var inst_18360 = inst_18364;
var state_18451__$1 = (function (){var statearr_18503 = state_18451;
(statearr_18503[(10)] = inst_18360);

return statearr_18503;
})();
var statearr_18505_21280 = state_18451__$1;
(statearr_18505_21280[(2)] = null);

(statearr_18505_21280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (4))){
var inst_18374 = (state_18451[(7)]);
var inst_18378 = (state_18451[(13)]);
var inst_18373 = (state_18451[(2)]);
var inst_18374__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18373,(0),null);
var inst_18375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18373,(1),null);
var inst_18378__$1 = (inst_18374__$1 == null);
var state_18451__$1 = (function (){var statearr_18509 = state_18451;
(statearr_18509[(14)] = inst_18375);

(statearr_18509[(7)] = inst_18374__$1);

(statearr_18509[(13)] = inst_18378__$1);

return statearr_18509;
})();
if(cljs.core.truth_(inst_18378__$1)){
var statearr_18510_21282 = state_18451__$1;
(statearr_18510_21282[(1)] = (5));

} else {
var statearr_18511_21283 = state_18451__$1;
(statearr_18511_21283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (15))){
var inst_18365 = (state_18451[(15)]);
var inst_18405 = (state_18451[(16)]);
var inst_18405__$1 = cljs.core.empty_QMARK_(inst_18365);
var state_18451__$1 = (function (){var statearr_18523 = state_18451;
(statearr_18523[(16)] = inst_18405__$1);

return statearr_18523;
})();
if(inst_18405__$1){
var statearr_18526_21286 = state_18451__$1;
(statearr_18526_21286[(1)] = (17));

} else {
var statearr_18529_21287 = state_18451__$1;
(statearr_18529_21287[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (21))){
var inst_18364 = (state_18451[(12)]);
var inst_18360 = inst_18364;
var state_18451__$1 = (function (){var statearr_18533 = state_18451;
(statearr_18533[(10)] = inst_18360);

return statearr_18533;
})();
var statearr_18534_21290 = state_18451__$1;
(statearr_18534_21290[(2)] = null);

(statearr_18534_21290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (13))){
var inst_18392 = (state_18451[(2)]);
var inst_18394 = calc_state();
var inst_18360 = inst_18394;
var state_18451__$1 = (function (){var statearr_18535 = state_18451;
(statearr_18535[(10)] = inst_18360);

(statearr_18535[(17)] = inst_18392);

return statearr_18535;
})();
var statearr_18536_21291 = state_18451__$1;
(statearr_18536_21291[(2)] = null);

(statearr_18536_21291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (22))){
var inst_18431 = (state_18451[(2)]);
var state_18451__$1 = state_18451;
var statearr_18537_21292 = state_18451__$1;
(statearr_18537_21292[(2)] = inst_18431);

(statearr_18537_21292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (6))){
var inst_18375 = (state_18451[(14)]);
var inst_18382 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18375,change);
var state_18451__$1 = state_18451;
var statearr_18548_21294 = state_18451__$1;
(statearr_18548_21294[(2)] = inst_18382);

(statearr_18548_21294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (25))){
var state_18451__$1 = state_18451;
var statearr_18550_21296 = state_18451__$1;
(statearr_18550_21296[(2)] = null);

(statearr_18550_21296[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (17))){
var inst_18375 = (state_18451[(14)]);
var inst_18366 = (state_18451[(18)]);
var inst_18407 = (inst_18366.cljs$core$IFn$_invoke$arity$1 ? inst_18366.cljs$core$IFn$_invoke$arity$1(inst_18375) : inst_18366.call(null,inst_18375));
var inst_18408 = cljs.core.not(inst_18407);
var state_18451__$1 = state_18451;
var statearr_18562_21297 = state_18451__$1;
(statearr_18562_21297[(2)] = inst_18408);

(statearr_18562_21297[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (3))){
var inst_18436 = (state_18451[(2)]);
var state_18451__$1 = state_18451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18451__$1,inst_18436);
} else {
if((state_val_18452 === (12))){
var state_18451__$1 = state_18451;
var statearr_18577_21299 = state_18451__$1;
(statearr_18577_21299[(2)] = null);

(statearr_18577_21299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (2))){
var inst_18364 = (state_18451[(12)]);
var inst_18360 = (state_18451[(10)]);
var inst_18364__$1 = cljs.core.__destructure_map(inst_18360);
var inst_18365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18364__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18364__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18364__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18451__$1 = (function (){var statearr_18586 = state_18451;
(statearr_18586[(12)] = inst_18364__$1);

(statearr_18586[(15)] = inst_18365);

(statearr_18586[(18)] = inst_18366);

return statearr_18586;
})();
return cljs.core.async.ioc_alts_BANG_(state_18451__$1,(4),inst_18367);
} else {
if((state_val_18452 === (23))){
var inst_18421 = (state_18451[(2)]);
var state_18451__$1 = state_18451;
if(cljs.core.truth_(inst_18421)){
var statearr_18587_21300 = state_18451__$1;
(statearr_18587_21300[(1)] = (24));

} else {
var statearr_18588_21301 = state_18451__$1;
(statearr_18588_21301[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (19))){
var inst_18411 = (state_18451[(2)]);
var state_18451__$1 = state_18451;
var statearr_18591_21302 = state_18451__$1;
(statearr_18591_21302[(2)] = inst_18411);

(statearr_18591_21302[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (11))){
var inst_18375 = (state_18451[(14)]);
var inst_18389 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18375);
var state_18451__$1 = state_18451;
var statearr_18601_21305 = state_18451__$1;
(statearr_18601_21305[(2)] = inst_18389);

(statearr_18601_21305[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (9))){
var inst_18365 = (state_18451[(15)]);
var inst_18400 = (state_18451[(19)]);
var inst_18375 = (state_18451[(14)]);
var inst_18400__$1 = (inst_18365.cljs$core$IFn$_invoke$arity$1 ? inst_18365.cljs$core$IFn$_invoke$arity$1(inst_18375) : inst_18365.call(null,inst_18375));
var state_18451__$1 = (function (){var statearr_18608 = state_18451;
(statearr_18608[(19)] = inst_18400__$1);

return statearr_18608;
})();
if(cljs.core.truth_(inst_18400__$1)){
var statearr_18609_21308 = state_18451__$1;
(statearr_18609_21308[(1)] = (14));

} else {
var statearr_18610_21309 = state_18451__$1;
(statearr_18610_21309[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (5))){
var inst_18378 = (state_18451[(13)]);
var state_18451__$1 = state_18451;
var statearr_18611_21310 = state_18451__$1;
(statearr_18611_21310[(2)] = inst_18378);

(statearr_18611_21310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (14))){
var inst_18400 = (state_18451[(19)]);
var state_18451__$1 = state_18451;
var statearr_18612_21311 = state_18451__$1;
(statearr_18612_21311[(2)] = inst_18400);

(statearr_18612_21311[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (26))){
var inst_18427 = (state_18451[(2)]);
var state_18451__$1 = state_18451;
var statearr_18613_21312 = state_18451__$1;
(statearr_18613_21312[(2)] = inst_18427);

(statearr_18613_21312[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (16))){
var inst_18413 = (state_18451[(2)]);
var state_18451__$1 = state_18451;
if(cljs.core.truth_(inst_18413)){
var statearr_18621_21313 = state_18451__$1;
(statearr_18621_21313[(1)] = (20));

} else {
var statearr_18626_21314 = state_18451__$1;
(statearr_18626_21314[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (10))){
var inst_18433 = (state_18451[(2)]);
var state_18451__$1 = state_18451;
var statearr_18630_21315 = state_18451__$1;
(statearr_18630_21315[(2)] = inst_18433);

(statearr_18630_21315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (18))){
var inst_18405 = (state_18451[(16)]);
var state_18451__$1 = state_18451;
var statearr_18642_21317 = state_18451__$1;
(statearr_18642_21317[(2)] = inst_18405);

(statearr_18642_21317[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18452 === (8))){
var inst_18374 = (state_18451[(7)]);
var inst_18386 = (inst_18374 == null);
var state_18451__$1 = state_18451;
if(cljs.core.truth_(inst_18386)){
var statearr_18649_21322 = state_18451__$1;
(statearr_18649_21322[(1)] = (11));

} else {
var statearr_18652_21323 = state_18451__$1;
(statearr_18652_21323[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14883__auto__ = null;
var cljs$core$async$mix_$_state_machine__14883__auto____0 = (function (){
var statearr_18654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18654[(0)] = cljs$core$async$mix_$_state_machine__14883__auto__);

(statearr_18654[(1)] = (1));

return statearr_18654;
});
var cljs$core$async$mix_$_state_machine__14883__auto____1 = (function (state_18451){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_18451);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e18658){var ex__14886__auto__ = e18658;
var statearr_18660_21327 = state_18451;
(statearr_18660_21327[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_18451[(4)]))){
var statearr_18662_21328 = state_18451;
(statearr_18662_21328[(1)] = cljs.core.first((state_18451[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21332 = state_18451;
state_18451 = G__21332;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14883__auto__ = function(state_18451){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14883__auto____1.call(this,state_18451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14883__auto____0;
cljs$core$async$mix_$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14883__auto____1;
return cljs$core$async$mix_$_state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_18667 = f__15932__auto__();
(statearr_18667[(6)] = c__15931__auto___21268);

return statearr_18667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_21338 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_21338(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_21343 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_21343(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_21347 = (function() {
var G__21348 = null;
var G__21348__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__21348__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__21348 = function(p,v){
switch(arguments.length){
case 1:
return G__21348__1.call(this,p);
case 2:
return G__21348__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21348.cljs$core$IFn$_invoke$arity$1 = G__21348__1;
G__21348.cljs$core$IFn$_invoke$arity$2 = G__21348__2;
return G__21348;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18732 = arguments.length;
switch (G__18732) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21347(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21347(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18772 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18773){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18773 = meta18773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18774,meta18773__$1){
var self__ = this;
var _18774__$1 = this;
return (new cljs.core.async.t_cljs$core$async18772(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18773__$1));
}));

(cljs.core.async.t_cljs$core$async18772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18774){
var self__ = this;
var _18774__$1 = this;
return self__.meta18773;
}));

(cljs.core.async.t_cljs$core$async18772.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18772.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18772.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18772.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18772.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18772.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18772.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18772.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18773","meta18773",1116933071,null)], null);
}));

(cljs.core.async.t_cljs$core$async18772.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18772.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18772");

(cljs.core.async.t_cljs$core$async18772.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18772");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18772.
 */
cljs.core.async.__GT_t_cljs$core$async18772 = (function cljs$core$async$__GT_t_cljs$core$async18772(ch,topic_fn,buf_fn,mults,ensure_mult,meta18773){
return (new cljs.core.async.t_cljs$core$async18772(ch,topic_fn,buf_fn,mults,ensure_mult,meta18773));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18754 = arguments.length;
switch (G__18754) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18747_SHARP_){
if(cljs.core.truth_((p1__18747_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18747_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18747_SHARP_.call(null,topic)))){
return p1__18747_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18747_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18772(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15931__auto___21359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_18886){
var state_val_18897 = (state_18886[(1)]);
if((state_val_18897 === (7))){
var inst_18880 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18908_21360 = state_18886__$1;
(statearr_18908_21360[(2)] = inst_18880);

(statearr_18908_21360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (20))){
var state_18886__$1 = state_18886;
var statearr_18909_21361 = state_18886__$1;
(statearr_18909_21361[(2)] = null);

(statearr_18909_21361[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (1))){
var state_18886__$1 = state_18886;
var statearr_18916_21362 = state_18886__$1;
(statearr_18916_21362[(2)] = null);

(statearr_18916_21362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (24))){
var inst_18863 = (state_18886[(7)]);
var inst_18872 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18863);
var state_18886__$1 = state_18886;
var statearr_18917_21363 = state_18886__$1;
(statearr_18917_21363[(2)] = inst_18872);

(statearr_18917_21363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (4))){
var inst_18813 = (state_18886[(8)]);
var inst_18813__$1 = (state_18886[(2)]);
var inst_18814 = (inst_18813__$1 == null);
var state_18886__$1 = (function (){var statearr_18919 = state_18886;
(statearr_18919[(8)] = inst_18813__$1);

return statearr_18919;
})();
if(cljs.core.truth_(inst_18814)){
var statearr_18921_21365 = state_18886__$1;
(statearr_18921_21365[(1)] = (5));

} else {
var statearr_18922_21366 = state_18886__$1;
(statearr_18922_21366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (15))){
var inst_18857 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18923_21367 = state_18886__$1;
(statearr_18923_21367[(2)] = inst_18857);

(statearr_18923_21367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (21))){
var inst_18877 = (state_18886[(2)]);
var state_18886__$1 = (function (){var statearr_18924 = state_18886;
(statearr_18924[(9)] = inst_18877);

return statearr_18924;
})();
var statearr_18925_21368 = state_18886__$1;
(statearr_18925_21368[(2)] = null);

(statearr_18925_21368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (13))){
var inst_18839 = (state_18886[(10)]);
var inst_18841 = cljs.core.chunked_seq_QMARK_(inst_18839);
var state_18886__$1 = state_18886;
if(inst_18841){
var statearr_18926_21369 = state_18886__$1;
(statearr_18926_21369[(1)] = (16));

} else {
var statearr_18927_21371 = state_18886__$1;
(statearr_18927_21371[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (22))){
var inst_18869 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
if(cljs.core.truth_(inst_18869)){
var statearr_18928_21372 = state_18886__$1;
(statearr_18928_21372[(1)] = (23));

} else {
var statearr_18930_21373 = state_18886__$1;
(statearr_18930_21373[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (6))){
var inst_18865 = (state_18886[(11)]);
var inst_18813 = (state_18886[(8)]);
var inst_18863 = (state_18886[(7)]);
var inst_18863__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18813) : topic_fn.call(null,inst_18813));
var inst_18864 = cljs.core.deref(mults);
var inst_18865__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18864,inst_18863__$1);
var state_18886__$1 = (function (){var statearr_18931 = state_18886;
(statearr_18931[(11)] = inst_18865__$1);

(statearr_18931[(7)] = inst_18863__$1);

return statearr_18931;
})();
if(cljs.core.truth_(inst_18865__$1)){
var statearr_18932_21377 = state_18886__$1;
(statearr_18932_21377[(1)] = (19));

} else {
var statearr_18933_21378 = state_18886__$1;
(statearr_18933_21378[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (25))){
var inst_18874 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18936_21379 = state_18886__$1;
(statearr_18936_21379[(2)] = inst_18874);

(statearr_18936_21379[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (17))){
var inst_18839 = (state_18886[(10)]);
var inst_18848 = cljs.core.first(inst_18839);
var inst_18849 = cljs.core.async.muxch_STAR_(inst_18848);
var inst_18850 = cljs.core.async.close_BANG_(inst_18849);
var inst_18851 = cljs.core.next(inst_18839);
var inst_18823 = inst_18851;
var inst_18824 = null;
var inst_18825 = (0);
var inst_18826 = (0);
var state_18886__$1 = (function (){var statearr_18937 = state_18886;
(statearr_18937[(12)] = inst_18824);

(statearr_18937[(13)] = inst_18823);

(statearr_18937[(14)] = inst_18850);

(statearr_18937[(15)] = inst_18826);

(statearr_18937[(16)] = inst_18825);

return statearr_18937;
})();
var statearr_18938_21382 = state_18886__$1;
(statearr_18938_21382[(2)] = null);

(statearr_18938_21382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (3))){
var inst_18882 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18886__$1,inst_18882);
} else {
if((state_val_18897 === (12))){
var inst_18859 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18939_21384 = state_18886__$1;
(statearr_18939_21384[(2)] = inst_18859);

(statearr_18939_21384[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (2))){
var state_18886__$1 = state_18886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18886__$1,(4),ch);
} else {
if((state_val_18897 === (23))){
var state_18886__$1 = state_18886;
var statearr_18942_21385 = state_18886__$1;
(statearr_18942_21385[(2)] = null);

(statearr_18942_21385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (19))){
var inst_18865 = (state_18886[(11)]);
var inst_18813 = (state_18886[(8)]);
var inst_18867 = cljs.core.async.muxch_STAR_(inst_18865);
var state_18886__$1 = state_18886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18886__$1,(22),inst_18867,inst_18813);
} else {
if((state_val_18897 === (11))){
var inst_18839 = (state_18886[(10)]);
var inst_18823 = (state_18886[(13)]);
var inst_18839__$1 = cljs.core.seq(inst_18823);
var state_18886__$1 = (function (){var statearr_18947 = state_18886;
(statearr_18947[(10)] = inst_18839__$1);

return statearr_18947;
})();
if(inst_18839__$1){
var statearr_18952_21387 = state_18886__$1;
(statearr_18952_21387[(1)] = (13));

} else {
var statearr_18954_21388 = state_18886__$1;
(statearr_18954_21388[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (9))){
var inst_18861 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18958_21389 = state_18886__$1;
(statearr_18958_21389[(2)] = inst_18861);

(statearr_18958_21389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (5))){
var inst_18820 = cljs.core.deref(mults);
var inst_18821 = cljs.core.vals(inst_18820);
var inst_18822 = cljs.core.seq(inst_18821);
var inst_18823 = inst_18822;
var inst_18824 = null;
var inst_18825 = (0);
var inst_18826 = (0);
var state_18886__$1 = (function (){var statearr_18960 = state_18886;
(statearr_18960[(12)] = inst_18824);

(statearr_18960[(13)] = inst_18823);

(statearr_18960[(15)] = inst_18826);

(statearr_18960[(16)] = inst_18825);

return statearr_18960;
})();
var statearr_18961_21390 = state_18886__$1;
(statearr_18961_21390[(2)] = null);

(statearr_18961_21390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (14))){
var state_18886__$1 = state_18886;
var statearr_18965_21391 = state_18886__$1;
(statearr_18965_21391[(2)] = null);

(statearr_18965_21391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (16))){
var inst_18839 = (state_18886[(10)]);
var inst_18843 = cljs.core.chunk_first(inst_18839);
var inst_18844 = cljs.core.chunk_rest(inst_18839);
var inst_18845 = cljs.core.count(inst_18843);
var inst_18823 = inst_18844;
var inst_18824 = inst_18843;
var inst_18825 = inst_18845;
var inst_18826 = (0);
var state_18886__$1 = (function (){var statearr_18967 = state_18886;
(statearr_18967[(12)] = inst_18824);

(statearr_18967[(13)] = inst_18823);

(statearr_18967[(15)] = inst_18826);

(statearr_18967[(16)] = inst_18825);

return statearr_18967;
})();
var statearr_18968_21393 = state_18886__$1;
(statearr_18968_21393[(2)] = null);

(statearr_18968_21393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (10))){
var inst_18824 = (state_18886[(12)]);
var inst_18823 = (state_18886[(13)]);
var inst_18826 = (state_18886[(15)]);
var inst_18825 = (state_18886[(16)]);
var inst_18831 = cljs.core._nth(inst_18824,inst_18826);
var inst_18833 = cljs.core.async.muxch_STAR_(inst_18831);
var inst_18834 = cljs.core.async.close_BANG_(inst_18833);
var inst_18836 = (inst_18826 + (1));
var tmp18962 = inst_18824;
var tmp18963 = inst_18823;
var tmp18964 = inst_18825;
var inst_18823__$1 = tmp18963;
var inst_18824__$1 = tmp18962;
var inst_18825__$1 = tmp18964;
var inst_18826__$1 = inst_18836;
var state_18886__$1 = (function (){var statearr_18970 = state_18886;
(statearr_18970[(17)] = inst_18834);

(statearr_18970[(12)] = inst_18824__$1);

(statearr_18970[(13)] = inst_18823__$1);

(statearr_18970[(15)] = inst_18826__$1);

(statearr_18970[(16)] = inst_18825__$1);

return statearr_18970;
})();
var statearr_18978_21395 = state_18886__$1;
(statearr_18978_21395[(2)] = null);

(statearr_18978_21395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (18))){
var inst_18854 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18979_21396 = state_18886__$1;
(statearr_18979_21396[(2)] = inst_18854);

(statearr_18979_21396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (8))){
var inst_18826 = (state_18886[(15)]);
var inst_18825 = (state_18886[(16)]);
var inst_18828 = (inst_18826 < inst_18825);
var inst_18829 = inst_18828;
var state_18886__$1 = state_18886;
if(cljs.core.truth_(inst_18829)){
var statearr_18981_21399 = state_18886__$1;
(statearr_18981_21399[(1)] = (10));

} else {
var statearr_18982_21400 = state_18886__$1;
(statearr_18982_21400[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14883__auto__ = null;
var cljs$core$async$state_machine__14883__auto____0 = (function (){
var statearr_18983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18983[(0)] = cljs$core$async$state_machine__14883__auto__);

(statearr_18983[(1)] = (1));

return statearr_18983;
});
var cljs$core$async$state_machine__14883__auto____1 = (function (state_18886){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_18886);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e18993){var ex__14886__auto__ = e18993;
var statearr_18994_21403 = state_18886;
(statearr_18994_21403[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_18886[(4)]))){
var statearr_18995_21404 = state_18886;
(statearr_18995_21404[(1)] = cljs.core.first((state_18886[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21405 = state_18886;
state_18886 = G__21405;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$state_machine__14883__auto__ = function(state_18886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14883__auto____1.call(this,state_18886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14883__auto____0;
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14883__auto____1;
return cljs$core$async$state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_19000 = f__15932__auto__();
(statearr_19000[(6)] = c__15931__auto___21359);

return statearr_19000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19012 = arguments.length;
switch (G__19012) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19023 = arguments.length;
switch (G__19023) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19032 = arguments.length;
switch (G__19032) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15931__auto___21420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_19088){
var state_val_19089 = (state_19088[(1)]);
if((state_val_19089 === (7))){
var state_19088__$1 = state_19088;
var statearr_19094_21421 = state_19088__$1;
(statearr_19094_21421[(2)] = null);

(statearr_19094_21421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (1))){
var state_19088__$1 = state_19088;
var statearr_19095_21422 = state_19088__$1;
(statearr_19095_21422[(2)] = null);

(statearr_19095_21422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (4))){
var inst_19039 = (state_19088[(7)]);
var inst_19041 = (state_19088[(8)]);
var inst_19043 = (inst_19041 < inst_19039);
var state_19088__$1 = state_19088;
if(cljs.core.truth_(inst_19043)){
var statearr_19099_21428 = state_19088__$1;
(statearr_19099_21428[(1)] = (6));

} else {
var statearr_19100_21429 = state_19088__$1;
(statearr_19100_21429[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (15))){
var inst_19074 = (state_19088[(9)]);
var inst_19079 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19074);
var state_19088__$1 = state_19088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19088__$1,(17),out,inst_19079);
} else {
if((state_val_19089 === (13))){
var inst_19074 = (state_19088[(9)]);
var inst_19074__$1 = (state_19088[(2)]);
var inst_19075 = cljs.core.some(cljs.core.nil_QMARK_,inst_19074__$1);
var state_19088__$1 = (function (){var statearr_19104 = state_19088;
(statearr_19104[(9)] = inst_19074__$1);

return statearr_19104;
})();
if(cljs.core.truth_(inst_19075)){
var statearr_19106_21433 = state_19088__$1;
(statearr_19106_21433[(1)] = (14));

} else {
var statearr_19111_21434 = state_19088__$1;
(statearr_19111_21434[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (6))){
var state_19088__$1 = state_19088;
var statearr_19114_21435 = state_19088__$1;
(statearr_19114_21435[(2)] = null);

(statearr_19114_21435[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (17))){
var inst_19081 = (state_19088[(2)]);
var state_19088__$1 = (function (){var statearr_19137 = state_19088;
(statearr_19137[(10)] = inst_19081);

return statearr_19137;
})();
var statearr_19138_21436 = state_19088__$1;
(statearr_19138_21436[(2)] = null);

(statearr_19138_21436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (3))){
var inst_19086 = (state_19088[(2)]);
var state_19088__$1 = state_19088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19088__$1,inst_19086);
} else {
if((state_val_19089 === (12))){
var _ = (function (){var statearr_19150 = state_19088;
(statearr_19150[(4)] = cljs.core.rest((state_19088[(4)])));

return statearr_19150;
})();
var state_19088__$1 = state_19088;
var ex19136 = (state_19088__$1[(2)]);
var statearr_19153_21437 = state_19088__$1;
(statearr_19153_21437[(5)] = ex19136);


if((ex19136 instanceof Object)){
var statearr_19157_21438 = state_19088__$1;
(statearr_19157_21438[(1)] = (11));

(statearr_19157_21438[(5)] = null);

} else {
throw ex19136;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (2))){
var inst_19038 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19039 = cnt;
var inst_19041 = (0);
var state_19088__$1 = (function (){var statearr_19168 = state_19088;
(statearr_19168[(7)] = inst_19039);

(statearr_19168[(11)] = inst_19038);

(statearr_19168[(8)] = inst_19041);

return statearr_19168;
})();
var statearr_19173_21439 = state_19088__$1;
(statearr_19173_21439[(2)] = null);

(statearr_19173_21439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (11))){
var inst_19052 = (state_19088[(2)]);
var inst_19053 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19088__$1 = (function (){var statearr_19175 = state_19088;
(statearr_19175[(12)] = inst_19052);

return statearr_19175;
})();
var statearr_19176_21441 = state_19088__$1;
(statearr_19176_21441[(2)] = inst_19053);

(statearr_19176_21441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (9))){
var inst_19041 = (state_19088[(8)]);
var _ = (function (){var statearr_19177 = state_19088;
(statearr_19177[(4)] = cljs.core.cons((12),(state_19088[(4)])));

return statearr_19177;
})();
var inst_19059 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19041) : chs__$1.call(null,inst_19041));
var inst_19060 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19041) : done.call(null,inst_19041));
var inst_19061 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19059,inst_19060);
var ___$1 = (function (){var statearr_19178 = state_19088;
(statearr_19178[(4)] = cljs.core.rest((state_19088[(4)])));

return statearr_19178;
})();
var state_19088__$1 = state_19088;
var statearr_19189_21444 = state_19088__$1;
(statearr_19189_21444[(2)] = inst_19061);

(statearr_19189_21444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (5))){
var inst_19071 = (state_19088[(2)]);
var state_19088__$1 = (function (){var statearr_19195 = state_19088;
(statearr_19195[(13)] = inst_19071);

return statearr_19195;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19088__$1,(13),dchan);
} else {
if((state_val_19089 === (14))){
var inst_19077 = cljs.core.async.close_BANG_(out);
var state_19088__$1 = state_19088;
var statearr_19206_21446 = state_19088__$1;
(statearr_19206_21446[(2)] = inst_19077);

(statearr_19206_21446[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (16))){
var inst_19084 = (state_19088[(2)]);
var state_19088__$1 = state_19088;
var statearr_19211_21447 = state_19088__$1;
(statearr_19211_21447[(2)] = inst_19084);

(statearr_19211_21447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (10))){
var inst_19041 = (state_19088[(8)]);
var inst_19064 = (state_19088[(2)]);
var inst_19065 = (inst_19041 + (1));
var inst_19041__$1 = inst_19065;
var state_19088__$1 = (function (){var statearr_19220 = state_19088;
(statearr_19220[(8)] = inst_19041__$1);

(statearr_19220[(14)] = inst_19064);

return statearr_19220;
})();
var statearr_19222_21448 = state_19088__$1;
(statearr_19222_21448[(2)] = null);

(statearr_19222_21448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (8))){
var inst_19069 = (state_19088[(2)]);
var state_19088__$1 = state_19088;
var statearr_19228_21449 = state_19088__$1;
(statearr_19228_21449[(2)] = inst_19069);

(statearr_19228_21449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14883__auto__ = null;
var cljs$core$async$state_machine__14883__auto____0 = (function (){
var statearr_19233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19233[(0)] = cljs$core$async$state_machine__14883__auto__);

(statearr_19233[(1)] = (1));

return statearr_19233;
});
var cljs$core$async$state_machine__14883__auto____1 = (function (state_19088){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_19088);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e19236){var ex__14886__auto__ = e19236;
var statearr_19246_21451 = state_19088;
(statearr_19246_21451[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_19088[(4)]))){
var statearr_19250_21452 = state_19088;
(statearr_19250_21452[(1)] = cljs.core.first((state_19088[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21453 = state_19088;
state_19088 = G__21453;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$state_machine__14883__auto__ = function(state_19088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14883__auto____1.call(this,state_19088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14883__auto____0;
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14883__auto____1;
return cljs$core$async$state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_19255 = f__15932__auto__();
(statearr_19255[(6)] = c__15931__auto___21420);

return statearr_19255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19272 = arguments.length;
switch (G__19272) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15931__auto___21459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_19341){
var state_val_19345 = (state_19341[(1)]);
if((state_val_19345 === (7))){
var inst_19303 = (state_19341[(7)]);
var inst_19306 = (state_19341[(8)]);
var inst_19303__$1 = (state_19341[(2)]);
var inst_19306__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19303__$1,(0),null);
var inst_19307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19303__$1,(1),null);
var inst_19309 = (inst_19306__$1 == null);
var state_19341__$1 = (function (){var statearr_19368 = state_19341;
(statearr_19368[(7)] = inst_19303__$1);

(statearr_19368[(9)] = inst_19307);

(statearr_19368[(8)] = inst_19306__$1);

return statearr_19368;
})();
if(cljs.core.truth_(inst_19309)){
var statearr_19375_21462 = state_19341__$1;
(statearr_19375_21462[(1)] = (8));

} else {
var statearr_19377_21463 = state_19341__$1;
(statearr_19377_21463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (1))){
var inst_19287 = cljs.core.vec(chs);
var inst_19289 = inst_19287;
var state_19341__$1 = (function (){var statearr_19382 = state_19341;
(statearr_19382[(10)] = inst_19289);

return statearr_19382;
})();
var statearr_19384_21464 = state_19341__$1;
(statearr_19384_21464[(2)] = null);

(statearr_19384_21464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (4))){
var inst_19289 = (state_19341[(10)]);
var state_19341__$1 = state_19341;
return cljs.core.async.ioc_alts_BANG_(state_19341__$1,(7),inst_19289);
} else {
if((state_val_19345 === (6))){
var inst_19328 = (state_19341[(2)]);
var state_19341__$1 = state_19341;
var statearr_19401_21466 = state_19341__$1;
(statearr_19401_21466[(2)] = inst_19328);

(statearr_19401_21466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (3))){
var inst_19330 = (state_19341[(2)]);
var state_19341__$1 = state_19341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19341__$1,inst_19330);
} else {
if((state_val_19345 === (2))){
var inst_19289 = (state_19341[(10)]);
var inst_19294 = cljs.core.count(inst_19289);
var inst_19295 = (inst_19294 > (0));
var state_19341__$1 = state_19341;
if(cljs.core.truth_(inst_19295)){
var statearr_19420_21467 = state_19341__$1;
(statearr_19420_21467[(1)] = (4));

} else {
var statearr_19423_21468 = state_19341__$1;
(statearr_19423_21468[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (11))){
var inst_19289 = (state_19341[(10)]);
var inst_19321 = (state_19341[(2)]);
var tmp19406 = inst_19289;
var inst_19289__$1 = tmp19406;
var state_19341__$1 = (function (){var statearr_19430 = state_19341;
(statearr_19430[(11)] = inst_19321);

(statearr_19430[(10)] = inst_19289__$1);

return statearr_19430;
})();
var statearr_19435_21469 = state_19341__$1;
(statearr_19435_21469[(2)] = null);

(statearr_19435_21469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (9))){
var inst_19306 = (state_19341[(8)]);
var state_19341__$1 = state_19341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19341__$1,(11),out,inst_19306);
} else {
if((state_val_19345 === (5))){
var inst_19326 = cljs.core.async.close_BANG_(out);
var state_19341__$1 = state_19341;
var statearr_19453_21472 = state_19341__$1;
(statearr_19453_21472[(2)] = inst_19326);

(statearr_19453_21472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (10))){
var inst_19324 = (state_19341[(2)]);
var state_19341__$1 = state_19341;
var statearr_19460_21475 = state_19341__$1;
(statearr_19460_21475[(2)] = inst_19324);

(statearr_19460_21475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19345 === (8))){
var inst_19303 = (state_19341[(7)]);
var inst_19289 = (state_19341[(10)]);
var inst_19307 = (state_19341[(9)]);
var inst_19306 = (state_19341[(8)]);
var inst_19314 = (function (){var cs = inst_19289;
var vec__19299 = inst_19303;
var v = inst_19306;
var c = inst_19307;
return (function (p1__19262_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19262_SHARP_);
});
})();
var inst_19317 = cljs.core.filterv(inst_19314,inst_19289);
var inst_19289__$1 = inst_19317;
var state_19341__$1 = (function (){var statearr_19476 = state_19341;
(statearr_19476[(10)] = inst_19289__$1);

return statearr_19476;
})();
var statearr_19477_21476 = state_19341__$1;
(statearr_19477_21476[(2)] = null);

(statearr_19477_21476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14883__auto__ = null;
var cljs$core$async$state_machine__14883__auto____0 = (function (){
var statearr_19487 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19487[(0)] = cljs$core$async$state_machine__14883__auto__);

(statearr_19487[(1)] = (1));

return statearr_19487;
});
var cljs$core$async$state_machine__14883__auto____1 = (function (state_19341){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_19341);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e19499){var ex__14886__auto__ = e19499;
var statearr_19500_21478 = state_19341;
(statearr_19500_21478[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_19341[(4)]))){
var statearr_19505_21479 = state_19341;
(statearr_19505_21479[(1)] = cljs.core.first((state_19341[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21480 = state_19341;
state_19341 = G__21480;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$state_machine__14883__auto__ = function(state_19341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14883__auto____1.call(this,state_19341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14883__auto____0;
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14883__auto____1;
return cljs$core$async$state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_19507 = f__15932__auto__();
(statearr_19507[(6)] = c__15931__auto___21459);

return statearr_19507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19533 = arguments.length;
switch (G__19533) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15931__auto___21486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_19566){
var state_val_19567 = (state_19566[(1)]);
if((state_val_19567 === (7))){
var inst_19547 = (state_19566[(7)]);
var inst_19547__$1 = (state_19566[(2)]);
var inst_19548 = (inst_19547__$1 == null);
var inst_19549 = cljs.core.not(inst_19548);
var state_19566__$1 = (function (){var statearr_19578 = state_19566;
(statearr_19578[(7)] = inst_19547__$1);

return statearr_19578;
})();
if(inst_19549){
var statearr_19583_21487 = state_19566__$1;
(statearr_19583_21487[(1)] = (8));

} else {
var statearr_19588_21488 = state_19566__$1;
(statearr_19588_21488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19567 === (1))){
var inst_19542 = (0);
var state_19566__$1 = (function (){var statearr_19593 = state_19566;
(statearr_19593[(8)] = inst_19542);

return statearr_19593;
})();
var statearr_19595_21489 = state_19566__$1;
(statearr_19595_21489[(2)] = null);

(statearr_19595_21489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19567 === (4))){
var state_19566__$1 = state_19566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19566__$1,(7),ch);
} else {
if((state_val_19567 === (6))){
var inst_19560 = (state_19566[(2)]);
var state_19566__$1 = state_19566;
var statearr_19600_21490 = state_19566__$1;
(statearr_19600_21490[(2)] = inst_19560);

(statearr_19600_21490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19567 === (3))){
var inst_19562 = (state_19566[(2)]);
var inst_19563 = cljs.core.async.close_BANG_(out);
var state_19566__$1 = (function (){var statearr_19601 = state_19566;
(statearr_19601[(9)] = inst_19562);

return statearr_19601;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19566__$1,inst_19563);
} else {
if((state_val_19567 === (2))){
var inst_19542 = (state_19566[(8)]);
var inst_19544 = (inst_19542 < n);
var state_19566__$1 = state_19566;
if(cljs.core.truth_(inst_19544)){
var statearr_19602_21491 = state_19566__$1;
(statearr_19602_21491[(1)] = (4));

} else {
var statearr_19603_21492 = state_19566__$1;
(statearr_19603_21492[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19567 === (11))){
var inst_19542 = (state_19566[(8)]);
var inst_19552 = (state_19566[(2)]);
var inst_19553 = (inst_19542 + (1));
var inst_19542__$1 = inst_19553;
var state_19566__$1 = (function (){var statearr_19604 = state_19566;
(statearr_19604[(8)] = inst_19542__$1);

(statearr_19604[(10)] = inst_19552);

return statearr_19604;
})();
var statearr_19605_21493 = state_19566__$1;
(statearr_19605_21493[(2)] = null);

(statearr_19605_21493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19567 === (9))){
var state_19566__$1 = state_19566;
var statearr_19606_21494 = state_19566__$1;
(statearr_19606_21494[(2)] = null);

(statearr_19606_21494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19567 === (5))){
var state_19566__$1 = state_19566;
var statearr_19608_21495 = state_19566__$1;
(statearr_19608_21495[(2)] = null);

(statearr_19608_21495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19567 === (10))){
var inst_19557 = (state_19566[(2)]);
var state_19566__$1 = state_19566;
var statearr_19614_21496 = state_19566__$1;
(statearr_19614_21496[(2)] = inst_19557);

(statearr_19614_21496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19567 === (8))){
var inst_19547 = (state_19566[(7)]);
var state_19566__$1 = state_19566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19566__$1,(11),out,inst_19547);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14883__auto__ = null;
var cljs$core$async$state_machine__14883__auto____0 = (function (){
var statearr_19621 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19621[(0)] = cljs$core$async$state_machine__14883__auto__);

(statearr_19621[(1)] = (1));

return statearr_19621;
});
var cljs$core$async$state_machine__14883__auto____1 = (function (state_19566){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_19566);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e19622){var ex__14886__auto__ = e19622;
var statearr_19626_21500 = state_19566;
(statearr_19626_21500[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_19566[(4)]))){
var statearr_19627_21501 = state_19566;
(statearr_19627_21501[(1)] = cljs.core.first((state_19566[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21502 = state_19566;
state_19566 = G__21502;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$state_machine__14883__auto__ = function(state_19566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14883__auto____1.call(this,state_19566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14883__auto____0;
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14883__auto____1;
return cljs$core$async$state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_19633 = f__15932__auto__();
(statearr_19633[(6)] = c__15931__auto___21486);

return statearr_19633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19647 = (function (f,ch,meta19643,_,fn1,meta19648){
this.f = f;
this.ch = ch;
this.meta19643 = meta19643;
this._ = _;
this.fn1 = fn1;
this.meta19648 = meta19648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19649,meta19648__$1){
var self__ = this;
var _19649__$1 = this;
return (new cljs.core.async.t_cljs$core$async19647(self__.f,self__.ch,self__.meta19643,self__._,self__.fn1,meta19648__$1));
}));

(cljs.core.async.t_cljs$core$async19647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19649){
var self__ = this;
var _19649__$1 = this;
return self__.meta19648;
}));

(cljs.core.async.t_cljs$core$async19647.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19647.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19647.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19647.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19638_SHARP_){
var G__19682 = (((p1__19638_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19638_SHARP_) : self__.f.call(null,p1__19638_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19682) : f1.call(null,G__19682));
});
}));

(cljs.core.async.t_cljs$core$async19647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19643","meta19643",-1321683333,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19642","cljs.core.async/t_cljs$core$async19642",1007321867,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19648","meta19648",-1911063398,null)], null);
}));

(cljs.core.async.t_cljs$core$async19647.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19647");

(cljs.core.async.t_cljs$core$async19647.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19647");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19647.
 */
cljs.core.async.__GT_t_cljs$core$async19647 = (function cljs$core$async$__GT_t_cljs$core$async19647(f,ch,meta19643,_,fn1,meta19648){
return (new cljs.core.async.t_cljs$core$async19647(f,ch,meta19643,_,fn1,meta19648));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19642 = (function (f,ch,meta19643){
this.f = f;
this.ch = ch;
this.meta19643 = meta19643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19644,meta19643__$1){
var self__ = this;
var _19644__$1 = this;
return (new cljs.core.async.t_cljs$core$async19642(self__.f,self__.ch,meta19643__$1));
}));

(cljs.core.async.t_cljs$core$async19642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19644){
var self__ = this;
var _19644__$1 = this;
return self__.meta19643;
}));

(cljs.core.async.t_cljs$core$async19642.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19642.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19642.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19642.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19642.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async19647(self__.f,self__.ch,self__.meta19643,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19690 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19690) : self__.f.call(null,G__19690));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19642.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19642.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19643","meta19643",-1321683333,null)], null);
}));

(cljs.core.async.t_cljs$core$async19642.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19642");

(cljs.core.async.t_cljs$core$async19642.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19642");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19642.
 */
cljs.core.async.__GT_t_cljs$core$async19642 = (function cljs$core$async$__GT_t_cljs$core$async19642(f,ch,meta19643){
return (new cljs.core.async.t_cljs$core$async19642(f,ch,meta19643));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19642(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19699 = (function (f,ch,meta19700){
this.f = f;
this.ch = ch;
this.meta19700 = meta19700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19701,meta19700__$1){
var self__ = this;
var _19701__$1 = this;
return (new cljs.core.async.t_cljs$core$async19699(self__.f,self__.ch,meta19700__$1));
}));

(cljs.core.async.t_cljs$core$async19699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19701){
var self__ = this;
var _19701__$1 = this;
return self__.meta19700;
}));

(cljs.core.async.t_cljs$core$async19699.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19699.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19699.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19699.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19699.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19699.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19699.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19700","meta19700",269520673,null)], null);
}));

(cljs.core.async.t_cljs$core$async19699.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19699.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19699");

(cljs.core.async.t_cljs$core$async19699.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19699");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19699.
 */
cljs.core.async.__GT_t_cljs$core$async19699 = (function cljs$core$async$__GT_t_cljs$core$async19699(f,ch,meta19700){
return (new cljs.core.async.t_cljs$core$async19699(f,ch,meta19700));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19699(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19715 = (function (p,ch,meta19716){
this.p = p;
this.ch = ch;
this.meta19716 = meta19716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19717,meta19716__$1){
var self__ = this;
var _19717__$1 = this;
return (new cljs.core.async.t_cljs$core$async19715(self__.p,self__.ch,meta19716__$1));
}));

(cljs.core.async.t_cljs$core$async19715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19717){
var self__ = this;
var _19717__$1 = this;
return self__.meta19716;
}));

(cljs.core.async.t_cljs$core$async19715.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19715.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19715.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19715.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19715.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19715.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19715.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19716","meta19716",307446965,null)], null);
}));

(cljs.core.async.t_cljs$core$async19715.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19715");

(cljs.core.async.t_cljs$core$async19715.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19715");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19715.
 */
cljs.core.async.__GT_t_cljs$core$async19715 = (function cljs$core$async$__GT_t_cljs$core$async19715(p,ch,meta19716){
return (new cljs.core.async.t_cljs$core$async19715(p,ch,meta19716));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async19715(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19735 = arguments.length;
switch (G__19735) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15931__auto___21519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_19756){
var state_val_19758 = (state_19756[(1)]);
if((state_val_19758 === (7))){
var inst_19752 = (state_19756[(2)]);
var state_19756__$1 = state_19756;
var statearr_19760_21520 = state_19756__$1;
(statearr_19760_21520[(2)] = inst_19752);

(statearr_19760_21520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (1))){
var state_19756__$1 = state_19756;
var statearr_19761_21521 = state_19756__$1;
(statearr_19761_21521[(2)] = null);

(statearr_19761_21521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (4))){
var inst_19738 = (state_19756[(7)]);
var inst_19738__$1 = (state_19756[(2)]);
var inst_19739 = (inst_19738__$1 == null);
var state_19756__$1 = (function (){var statearr_19762 = state_19756;
(statearr_19762[(7)] = inst_19738__$1);

return statearr_19762;
})();
if(cljs.core.truth_(inst_19739)){
var statearr_19763_21522 = state_19756__$1;
(statearr_19763_21522[(1)] = (5));

} else {
var statearr_19764_21523 = state_19756__$1;
(statearr_19764_21523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (6))){
var inst_19738 = (state_19756[(7)]);
var inst_19743 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19738) : p.call(null,inst_19738));
var state_19756__$1 = state_19756;
if(cljs.core.truth_(inst_19743)){
var statearr_19767_21526 = state_19756__$1;
(statearr_19767_21526[(1)] = (8));

} else {
var statearr_19768_21527 = state_19756__$1;
(statearr_19768_21527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (3))){
var inst_19754 = (state_19756[(2)]);
var state_19756__$1 = state_19756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19756__$1,inst_19754);
} else {
if((state_val_19758 === (2))){
var state_19756__$1 = state_19756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19756__$1,(4),ch);
} else {
if((state_val_19758 === (11))){
var inst_19746 = (state_19756[(2)]);
var state_19756__$1 = state_19756;
var statearr_19769_21529 = state_19756__$1;
(statearr_19769_21529[(2)] = inst_19746);

(statearr_19769_21529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (9))){
var state_19756__$1 = state_19756;
var statearr_19770_21530 = state_19756__$1;
(statearr_19770_21530[(2)] = null);

(statearr_19770_21530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (5))){
var inst_19741 = cljs.core.async.close_BANG_(out);
var state_19756__$1 = state_19756;
var statearr_19775_21531 = state_19756__$1;
(statearr_19775_21531[(2)] = inst_19741);

(statearr_19775_21531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (10))){
var inst_19749 = (state_19756[(2)]);
var state_19756__$1 = (function (){var statearr_19776 = state_19756;
(statearr_19776[(8)] = inst_19749);

return statearr_19776;
})();
var statearr_19777_21538 = state_19756__$1;
(statearr_19777_21538[(2)] = null);

(statearr_19777_21538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19758 === (8))){
var inst_19738 = (state_19756[(7)]);
var state_19756__$1 = state_19756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19756__$1,(11),out,inst_19738);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14883__auto__ = null;
var cljs$core$async$state_machine__14883__auto____0 = (function (){
var statearr_19784 = [null,null,null,null,null,null,null,null,null];
(statearr_19784[(0)] = cljs$core$async$state_machine__14883__auto__);

(statearr_19784[(1)] = (1));

return statearr_19784;
});
var cljs$core$async$state_machine__14883__auto____1 = (function (state_19756){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_19756);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e19785){var ex__14886__auto__ = e19785;
var statearr_19786_21545 = state_19756;
(statearr_19786_21545[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_19756[(4)]))){
var statearr_19787_21546 = state_19756;
(statearr_19787_21546[(1)] = cljs.core.first((state_19756[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21550 = state_19756;
state_19756 = G__21550;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$state_machine__14883__auto__ = function(state_19756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14883__auto____1.call(this,state_19756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14883__auto____0;
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14883__auto____1;
return cljs$core$async$state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_19788 = f__15932__auto__();
(statearr_19788[(6)] = c__15931__auto___21519);

return statearr_19788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19790 = arguments.length;
switch (G__19790) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15931__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_19885){
var state_val_19886 = (state_19885[(1)]);
if((state_val_19886 === (7))){
var inst_19881 = (state_19885[(2)]);
var state_19885__$1 = state_19885;
var statearr_19890_21560 = state_19885__$1;
(statearr_19890_21560[(2)] = inst_19881);

(statearr_19890_21560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (20))){
var inst_19840 = (state_19885[(7)]);
var inst_19859 = (state_19885[(2)]);
var inst_19860 = cljs.core.next(inst_19840);
var inst_19820 = inst_19860;
var inst_19821 = null;
var inst_19822 = (0);
var inst_19823 = (0);
var state_19885__$1 = (function (){var statearr_19896 = state_19885;
(statearr_19896[(8)] = inst_19822);

(statearr_19896[(9)] = inst_19820);

(statearr_19896[(10)] = inst_19859);

(statearr_19896[(11)] = inst_19821);

(statearr_19896[(12)] = inst_19823);

return statearr_19896;
})();
var statearr_19898_21567 = state_19885__$1;
(statearr_19898_21567[(2)] = null);

(statearr_19898_21567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (1))){
var state_19885__$1 = state_19885;
var statearr_19904_21568 = state_19885__$1;
(statearr_19904_21568[(2)] = null);

(statearr_19904_21568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (4))){
var inst_19805 = (state_19885[(13)]);
var inst_19805__$1 = (state_19885[(2)]);
var inst_19807 = (inst_19805__$1 == null);
var state_19885__$1 = (function (){var statearr_19907 = state_19885;
(statearr_19907[(13)] = inst_19805__$1);

return statearr_19907;
})();
if(cljs.core.truth_(inst_19807)){
var statearr_19910_21573 = state_19885__$1;
(statearr_19910_21573[(1)] = (5));

} else {
var statearr_19912_21574 = state_19885__$1;
(statearr_19912_21574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (15))){
var state_19885__$1 = state_19885;
var statearr_19916_21576 = state_19885__$1;
(statearr_19916_21576[(2)] = null);

(statearr_19916_21576[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (21))){
var state_19885__$1 = state_19885;
var statearr_19917_21578 = state_19885__$1;
(statearr_19917_21578[(2)] = null);

(statearr_19917_21578[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (13))){
var inst_19822 = (state_19885[(8)]);
var inst_19820 = (state_19885[(9)]);
var inst_19821 = (state_19885[(11)]);
var inst_19823 = (state_19885[(12)]);
var inst_19835 = (state_19885[(2)]);
var inst_19837 = (inst_19823 + (1));
var tmp19913 = inst_19822;
var tmp19914 = inst_19820;
var tmp19915 = inst_19821;
var inst_19820__$1 = tmp19914;
var inst_19821__$1 = tmp19915;
var inst_19822__$1 = tmp19913;
var inst_19823__$1 = inst_19837;
var state_19885__$1 = (function (){var statearr_19928 = state_19885;
(statearr_19928[(8)] = inst_19822__$1);

(statearr_19928[(9)] = inst_19820__$1);

(statearr_19928[(14)] = inst_19835);

(statearr_19928[(11)] = inst_19821__$1);

(statearr_19928[(12)] = inst_19823__$1);

return statearr_19928;
})();
var statearr_19930_21581 = state_19885__$1;
(statearr_19930_21581[(2)] = null);

(statearr_19930_21581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (22))){
var state_19885__$1 = state_19885;
var statearr_19931_21582 = state_19885__$1;
(statearr_19931_21582[(2)] = null);

(statearr_19931_21582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (6))){
var inst_19805 = (state_19885[(13)]);
var inst_19818 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19805) : f.call(null,inst_19805));
var inst_19819 = cljs.core.seq(inst_19818);
var inst_19820 = inst_19819;
var inst_19821 = null;
var inst_19822 = (0);
var inst_19823 = (0);
var state_19885__$1 = (function (){var statearr_19935 = state_19885;
(statearr_19935[(8)] = inst_19822);

(statearr_19935[(9)] = inst_19820);

(statearr_19935[(11)] = inst_19821);

(statearr_19935[(12)] = inst_19823);

return statearr_19935;
})();
var statearr_19938_21587 = state_19885__$1;
(statearr_19938_21587[(2)] = null);

(statearr_19938_21587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (17))){
var inst_19840 = (state_19885[(7)]);
var inst_19849 = cljs.core.chunk_first(inst_19840);
var inst_19850 = cljs.core.chunk_rest(inst_19840);
var inst_19851 = cljs.core.count(inst_19849);
var inst_19820 = inst_19850;
var inst_19821 = inst_19849;
var inst_19822 = inst_19851;
var inst_19823 = (0);
var state_19885__$1 = (function (){var statearr_19944 = state_19885;
(statearr_19944[(8)] = inst_19822);

(statearr_19944[(9)] = inst_19820);

(statearr_19944[(11)] = inst_19821);

(statearr_19944[(12)] = inst_19823);

return statearr_19944;
})();
var statearr_19945_21590 = state_19885__$1;
(statearr_19945_21590[(2)] = null);

(statearr_19945_21590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (3))){
var inst_19883 = (state_19885[(2)]);
var state_19885__$1 = state_19885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19885__$1,inst_19883);
} else {
if((state_val_19886 === (12))){
var inst_19870 = (state_19885[(2)]);
var state_19885__$1 = state_19885;
var statearr_19952_21591 = state_19885__$1;
(statearr_19952_21591[(2)] = inst_19870);

(statearr_19952_21591[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (2))){
var state_19885__$1 = state_19885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19885__$1,(4),in$);
} else {
if((state_val_19886 === (23))){
var inst_19879 = (state_19885[(2)]);
var state_19885__$1 = state_19885;
var statearr_19962_21593 = state_19885__$1;
(statearr_19962_21593[(2)] = inst_19879);

(statearr_19962_21593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (19))){
var inst_19863 = (state_19885[(2)]);
var state_19885__$1 = state_19885;
var statearr_19963_21595 = state_19885__$1;
(statearr_19963_21595[(2)] = inst_19863);

(statearr_19963_21595[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (11))){
var inst_19820 = (state_19885[(9)]);
var inst_19840 = (state_19885[(7)]);
var inst_19840__$1 = cljs.core.seq(inst_19820);
var state_19885__$1 = (function (){var statearr_19965 = state_19885;
(statearr_19965[(7)] = inst_19840__$1);

return statearr_19965;
})();
if(inst_19840__$1){
var statearr_19966_21598 = state_19885__$1;
(statearr_19966_21598[(1)] = (14));

} else {
var statearr_19967_21600 = state_19885__$1;
(statearr_19967_21600[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (9))){
var inst_19872 = (state_19885[(2)]);
var inst_19873 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19885__$1 = (function (){var statearr_19971 = state_19885;
(statearr_19971[(15)] = inst_19872);

return statearr_19971;
})();
if(cljs.core.truth_(inst_19873)){
var statearr_19973_21604 = state_19885__$1;
(statearr_19973_21604[(1)] = (21));

} else {
var statearr_19974_21605 = state_19885__$1;
(statearr_19974_21605[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (5))){
var inst_19811 = cljs.core.async.close_BANG_(out);
var state_19885__$1 = state_19885;
var statearr_19977_21606 = state_19885__$1;
(statearr_19977_21606[(2)] = inst_19811);

(statearr_19977_21606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (14))){
var inst_19840 = (state_19885[(7)]);
var inst_19845 = cljs.core.chunked_seq_QMARK_(inst_19840);
var state_19885__$1 = state_19885;
if(inst_19845){
var statearr_19979_21608 = state_19885__$1;
(statearr_19979_21608[(1)] = (17));

} else {
var statearr_19981_21609 = state_19885__$1;
(statearr_19981_21609[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (16))){
var inst_19867 = (state_19885[(2)]);
var state_19885__$1 = state_19885;
var statearr_19982_21613 = state_19885__$1;
(statearr_19982_21613[(2)] = inst_19867);

(statearr_19982_21613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (10))){
var inst_19821 = (state_19885[(11)]);
var inst_19823 = (state_19885[(12)]);
var inst_19833 = cljs.core._nth(inst_19821,inst_19823);
var state_19885__$1 = state_19885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19885__$1,(13),out,inst_19833);
} else {
if((state_val_19886 === (18))){
var inst_19840 = (state_19885[(7)]);
var inst_19857 = cljs.core.first(inst_19840);
var state_19885__$1 = state_19885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19885__$1,(20),out,inst_19857);
} else {
if((state_val_19886 === (8))){
var inst_19822 = (state_19885[(8)]);
var inst_19823 = (state_19885[(12)]);
var inst_19826 = (inst_19823 < inst_19822);
var inst_19828 = inst_19826;
var state_19885__$1 = state_19885;
if(cljs.core.truth_(inst_19828)){
var statearr_19984_21616 = state_19885__$1;
(statearr_19984_21616[(1)] = (10));

} else {
var statearr_19986_21619 = state_19885__$1;
(statearr_19986_21619[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14883__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14883__auto____0 = (function (){
var statearr_20007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20007[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14883__auto__);

(statearr_20007[(1)] = (1));

return statearr_20007;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14883__auto____1 = (function (state_19885){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_19885);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e20014){var ex__14886__auto__ = e20014;
var statearr_20017_21620 = state_19885;
(statearr_20017_21620[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_19885[(4)]))){
var statearr_20019_21623 = state_19885;
(statearr_20019_21623[(1)] = cljs.core.first((state_19885[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21624 = state_19885;
state_19885 = G__21624;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14883__auto__ = function(state_19885){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14883__auto____1.call(this,state_19885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14883__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14883__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_20024 = f__15932__auto__();
(statearr_20024[(6)] = c__15931__auto__);

return statearr_20024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));

return c__15931__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20036 = arguments.length;
switch (G__20036) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20054 = arguments.length;
switch (G__20054) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20077 = arguments.length;
switch (G__20077) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15931__auto___21630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_20112){
var state_val_20114 = (state_20112[(1)]);
if((state_val_20114 === (7))){
var inst_20104 = (state_20112[(2)]);
var state_20112__$1 = state_20112;
var statearr_20119_21631 = state_20112__$1;
(statearr_20119_21631[(2)] = inst_20104);

(statearr_20119_21631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20114 === (1))){
var inst_20083 = null;
var state_20112__$1 = (function (){var statearr_20120 = state_20112;
(statearr_20120[(7)] = inst_20083);

return statearr_20120;
})();
var statearr_20122_21632 = state_20112__$1;
(statearr_20122_21632[(2)] = null);

(statearr_20122_21632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20114 === (4))){
var inst_20086 = (state_20112[(8)]);
var inst_20086__$1 = (state_20112[(2)]);
var inst_20088 = (inst_20086__$1 == null);
var inst_20089 = cljs.core.not(inst_20088);
var state_20112__$1 = (function (){var statearr_20133 = state_20112;
(statearr_20133[(8)] = inst_20086__$1);

return statearr_20133;
})();
if(inst_20089){
var statearr_20136_21633 = state_20112__$1;
(statearr_20136_21633[(1)] = (5));

} else {
var statearr_20137_21634 = state_20112__$1;
(statearr_20137_21634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20114 === (6))){
var state_20112__$1 = state_20112;
var statearr_20140_21635 = state_20112__$1;
(statearr_20140_21635[(2)] = null);

(statearr_20140_21635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20114 === (3))){
var inst_20106 = (state_20112[(2)]);
var inst_20108 = cljs.core.async.close_BANG_(out);
var state_20112__$1 = (function (){var statearr_20144 = state_20112;
(statearr_20144[(9)] = inst_20106);

return statearr_20144;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20112__$1,inst_20108);
} else {
if((state_val_20114 === (2))){
var state_20112__$1 = state_20112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20112__$1,(4),ch);
} else {
if((state_val_20114 === (11))){
var inst_20086 = (state_20112[(8)]);
var inst_20098 = (state_20112[(2)]);
var inst_20083 = inst_20086;
var state_20112__$1 = (function (){var statearr_20152 = state_20112;
(statearr_20152[(7)] = inst_20083);

(statearr_20152[(10)] = inst_20098);

return statearr_20152;
})();
var statearr_20154_21642 = state_20112__$1;
(statearr_20154_21642[(2)] = null);

(statearr_20154_21642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20114 === (9))){
var inst_20086 = (state_20112[(8)]);
var state_20112__$1 = state_20112;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20112__$1,(11),out,inst_20086);
} else {
if((state_val_20114 === (5))){
var inst_20083 = (state_20112[(7)]);
var inst_20086 = (state_20112[(8)]);
var inst_20093 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20086,inst_20083);
var state_20112__$1 = state_20112;
if(inst_20093){
var statearr_20159_21647 = state_20112__$1;
(statearr_20159_21647[(1)] = (8));

} else {
var statearr_20161_21649 = state_20112__$1;
(statearr_20161_21649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20114 === (10))){
var inst_20101 = (state_20112[(2)]);
var state_20112__$1 = state_20112;
var statearr_20163_21654 = state_20112__$1;
(statearr_20163_21654[(2)] = inst_20101);

(statearr_20163_21654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20114 === (8))){
var inst_20083 = (state_20112[(7)]);
var tmp20158 = inst_20083;
var inst_20083__$1 = tmp20158;
var state_20112__$1 = (function (){var statearr_20165 = state_20112;
(statearr_20165[(7)] = inst_20083__$1);

return statearr_20165;
})();
var statearr_20166_21660 = state_20112__$1;
(statearr_20166_21660[(2)] = null);

(statearr_20166_21660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14883__auto__ = null;
var cljs$core$async$state_machine__14883__auto____0 = (function (){
var statearr_20169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20169[(0)] = cljs$core$async$state_machine__14883__auto__);

(statearr_20169[(1)] = (1));

return statearr_20169;
});
var cljs$core$async$state_machine__14883__auto____1 = (function (state_20112){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_20112);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e20170){var ex__14886__auto__ = e20170;
var statearr_20172_21675 = state_20112;
(statearr_20172_21675[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_20112[(4)]))){
var statearr_20174_21677 = state_20112;
(statearr_20174_21677[(1)] = cljs.core.first((state_20112[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21682 = state_20112;
state_20112 = G__21682;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$state_machine__14883__auto__ = function(state_20112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14883__auto____1.call(this,state_20112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14883__auto____0;
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14883__auto____1;
return cljs$core$async$state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_20180 = f__15932__auto__();
(statearr_20180[(6)] = c__15931__auto___21630);

return statearr_20180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20191 = arguments.length;
switch (G__20191) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15931__auto___21687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_20259){
var state_val_20260 = (state_20259[(1)]);
if((state_val_20260 === (7))){
var inst_20253 = (state_20259[(2)]);
var state_20259__$1 = state_20259;
var statearr_20268_21688 = state_20259__$1;
(statearr_20268_21688[(2)] = inst_20253);

(statearr_20268_21688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20260 === (1))){
var inst_20208 = (new Array(n));
var inst_20210 = inst_20208;
var inst_20211 = (0);
var state_20259__$1 = (function (){var statearr_20269 = state_20259;
(statearr_20269[(7)] = inst_20211);

(statearr_20269[(8)] = inst_20210);

return statearr_20269;
})();
var statearr_20273_21690 = state_20259__$1;
(statearr_20273_21690[(2)] = null);

(statearr_20273_21690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20260 === (4))){
var inst_20214 = (state_20259[(9)]);
var inst_20214__$1 = (state_20259[(2)]);
var inst_20216 = (inst_20214__$1 == null);
var inst_20217 = cljs.core.not(inst_20216);
var state_20259__$1 = (function (){var statearr_20275 = state_20259;
(statearr_20275[(9)] = inst_20214__$1);

return statearr_20275;
})();
if(inst_20217){
var statearr_20276_21691 = state_20259__$1;
(statearr_20276_21691[(1)] = (5));

} else {
var statearr_20277_21692 = state_20259__$1;
(statearr_20277_21692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20260 === (15))){
var inst_20246 = (state_20259[(2)]);
var state_20259__$1 = state_20259;
var statearr_20279_21693 = state_20259__$1;
(statearr_20279_21693[(2)] = inst_20246);

(statearr_20279_21693[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20260 === (13))){
var state_20259__$1 = state_20259;
var statearr_20282_21694 = state_20259__$1;
(statearr_20282_21694[(2)] = null);

(statearr_20282_21694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20260 === (6))){
var inst_20211 = (state_20259[(7)]);
var inst_20238 = (inst_20211 > (0));
var state_20259__$1 = state_20259;
if(cljs.core.truth_(inst_20238)){
var statearr_20285_21696 = state_20259__$1;
(statearr_20285_21696[(1)] = (12));

} else {
var statearr_20286_21697 = state_20259__$1;
(statearr_20286_21697[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20260 === (3))){
var inst_20255 = (state_20259[(2)]);
var state_20259__$1 = state_20259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20259__$1,inst_20255);
} else {
if((state_val_20260 === (12))){
var inst_20210 = (state_20259[(8)]);
var inst_20244 = cljs.core.vec(inst_20210);
var state_20259__$1 = state_20259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20259__$1,(15),out,inst_20244);
} else {
if((state_val_20260 === (2))){
var state_20259__$1 = state_20259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20259__$1,(4),ch);
} else {
if((state_val_20260 === (11))){
var inst_20229 = (state_20259[(2)]);
var inst_20230 = (new Array(n));
var inst_20210 = inst_20230;
var inst_20211 = (0);
var state_20259__$1 = (function (){var statearr_20293 = state_20259;
(statearr_20293[(7)] = inst_20211);

(statearr_20293[(10)] = inst_20229);

(statearr_20293[(8)] = inst_20210);

return statearr_20293;
})();
var statearr_20294_21700 = state_20259__$1;
(statearr_20294_21700[(2)] = null);

(statearr_20294_21700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20260 === (9))){
var inst_20210 = (state_20259[(8)]);
var inst_20227 = cljs.core.vec(inst_20210);
var state_20259__$1 = state_20259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20259__$1,(11),out,inst_20227);
} else {
if((state_val_20260 === (5))){
var inst_20211 = (state_20259[(7)]);
var inst_20222 = (state_20259[(11)]);
var inst_20210 = (state_20259[(8)]);
var inst_20214 = (state_20259[(9)]);
var inst_20220 = (inst_20210[inst_20211] = inst_20214);
var inst_20222__$1 = (inst_20211 + (1));
var inst_20223 = (inst_20222__$1 < n);
var state_20259__$1 = (function (){var statearr_20299 = state_20259;
(statearr_20299[(12)] = inst_20220);

(statearr_20299[(11)] = inst_20222__$1);

return statearr_20299;
})();
if(cljs.core.truth_(inst_20223)){
var statearr_20300_21701 = state_20259__$1;
(statearr_20300_21701[(1)] = (8));

} else {
var statearr_20301_21702 = state_20259__$1;
(statearr_20301_21702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20260 === (14))){
var inst_20249 = (state_20259[(2)]);
var inst_20251 = cljs.core.async.close_BANG_(out);
var state_20259__$1 = (function (){var statearr_20304 = state_20259;
(statearr_20304[(13)] = inst_20249);

return statearr_20304;
})();
var statearr_20305_21703 = state_20259__$1;
(statearr_20305_21703[(2)] = inst_20251);

(statearr_20305_21703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20260 === (10))){
var inst_20234 = (state_20259[(2)]);
var state_20259__$1 = state_20259;
var statearr_20307_21704 = state_20259__$1;
(statearr_20307_21704[(2)] = inst_20234);

(statearr_20307_21704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20260 === (8))){
var inst_20222 = (state_20259[(11)]);
var inst_20210 = (state_20259[(8)]);
var tmp20302 = inst_20210;
var inst_20210__$1 = tmp20302;
var inst_20211 = inst_20222;
var state_20259__$1 = (function (){var statearr_20309 = state_20259;
(statearr_20309[(7)] = inst_20211);

(statearr_20309[(8)] = inst_20210__$1);

return statearr_20309;
})();
var statearr_20310_21705 = state_20259__$1;
(statearr_20310_21705[(2)] = null);

(statearr_20310_21705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14883__auto__ = null;
var cljs$core$async$state_machine__14883__auto____0 = (function (){
var statearr_20312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20312[(0)] = cljs$core$async$state_machine__14883__auto__);

(statearr_20312[(1)] = (1));

return statearr_20312;
});
var cljs$core$async$state_machine__14883__auto____1 = (function (state_20259){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_20259);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e20313){var ex__14886__auto__ = e20313;
var statearr_20314_21708 = state_20259;
(statearr_20314_21708[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_20259[(4)]))){
var statearr_20315_21709 = state_20259;
(statearr_20315_21709[(1)] = cljs.core.first((state_20259[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21710 = state_20259;
state_20259 = G__21710;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$state_machine__14883__auto__ = function(state_20259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14883__auto____1.call(this,state_20259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14883__auto____0;
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14883__auto____1;
return cljs$core$async$state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_20318 = f__15932__auto__();
(statearr_20318[(6)] = c__15931__auto___21687);

return statearr_20318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20343 = arguments.length;
switch (G__20343) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15931__auto___21712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15932__auto__ = (function (){var switch__14882__auto__ = (function (state_20455){
var state_val_20457 = (state_20455[(1)]);
if((state_val_20457 === (7))){
var inst_20445 = (state_20455[(2)]);
var state_20455__$1 = state_20455;
var statearr_20477_21715 = state_20455__$1;
(statearr_20477_21715[(2)] = inst_20445);

(statearr_20477_21715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20457 === (1))){
var inst_20371 = [];
var inst_20373 = inst_20371;
var inst_20374 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20455__$1 = (function (){var statearr_20490 = state_20455;
(statearr_20490[(7)] = inst_20373);

(statearr_20490[(8)] = inst_20374);

return statearr_20490;
})();
var statearr_20491_21718 = state_20455__$1;
(statearr_20491_21718[(2)] = null);

(statearr_20491_21718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20457 === (4))){
var inst_20377 = (state_20455[(9)]);
var inst_20377__$1 = (state_20455[(2)]);
var inst_20378 = (inst_20377__$1 == null);
var inst_20383 = cljs.core.not(inst_20378);
var state_20455__$1 = (function (){var statearr_20497 = state_20455;
(statearr_20497[(9)] = inst_20377__$1);

return statearr_20497;
})();
if(inst_20383){
var statearr_20498_21720 = state_20455__$1;
(statearr_20498_21720[(1)] = (5));

} else {
var statearr_20500_21721 = state_20455__$1;
(statearr_20500_21721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20457 === (15))){
var inst_20373 = (state_20455[(7)]);
var inst_20433 = cljs.core.vec(inst_20373);
var state_20455__$1 = state_20455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20455__$1,(18),out,inst_20433);
} else {
if((state_val_20457 === (13))){
var inst_20427 = (state_20455[(2)]);
var state_20455__$1 = state_20455;
var statearr_20501_21722 = state_20455__$1;
(statearr_20501_21722[(2)] = inst_20427);

(statearr_20501_21722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20457 === (6))){
var inst_20373 = (state_20455[(7)]);
var inst_20430 = inst_20373.length;
var inst_20431 = (inst_20430 > (0));
var state_20455__$1 = state_20455;
if(cljs.core.truth_(inst_20431)){
var statearr_20503_21725 = state_20455__$1;
(statearr_20503_21725[(1)] = (15));

} else {
var statearr_20505_21726 = state_20455__$1;
(statearr_20505_21726[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20457 === (17))){
var inst_20442 = (state_20455[(2)]);
var inst_20443 = cljs.core.async.close_BANG_(out);
var state_20455__$1 = (function (){var statearr_20508 = state_20455;
(statearr_20508[(10)] = inst_20442);

return statearr_20508;
})();
var statearr_20510_21732 = state_20455__$1;
(statearr_20510_21732[(2)] = inst_20443);

(statearr_20510_21732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20457 === (3))){
var inst_20447 = (state_20455[(2)]);
var state_20455__$1 = state_20455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20455__$1,inst_20447);
} else {
if((state_val_20457 === (12))){
var inst_20373 = (state_20455[(7)]);
var inst_20419 = cljs.core.vec(inst_20373);
var state_20455__$1 = state_20455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20455__$1,(14),out,inst_20419);
} else {
if((state_val_20457 === (2))){
var state_20455__$1 = state_20455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20455__$1,(4),ch);
} else {
if((state_val_20457 === (11))){
var inst_20390 = (state_20455[(11)]);
var inst_20377 = (state_20455[(9)]);
var inst_20373 = (state_20455[(7)]);
var inst_20415 = inst_20373.push(inst_20377);
var tmp20515 = inst_20373;
var inst_20373__$1 = tmp20515;
var inst_20374 = inst_20390;
var state_20455__$1 = (function (){var statearr_20521 = state_20455;
(statearr_20521[(7)] = inst_20373__$1);

(statearr_20521[(8)] = inst_20374);

(statearr_20521[(12)] = inst_20415);

return statearr_20521;
})();
var statearr_20522_21740 = state_20455__$1;
(statearr_20522_21740[(2)] = null);

(statearr_20522_21740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20457 === (9))){
var inst_20374 = (state_20455[(8)]);
var inst_20411 = cljs.core.keyword_identical_QMARK_(inst_20374,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20455__$1 = state_20455;
var statearr_20524_21746 = state_20455__$1;
(statearr_20524_21746[(2)] = inst_20411);

(statearr_20524_21746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20457 === (5))){
var inst_20390 = (state_20455[(11)]);
var inst_20398 = (state_20455[(13)]);
var inst_20377 = (state_20455[(9)]);
var inst_20374 = (state_20455[(8)]);
var inst_20390__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20377) : f.call(null,inst_20377));
var inst_20398__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20390__$1,inst_20374);
var state_20455__$1 = (function (){var statearr_20530 = state_20455;
(statearr_20530[(11)] = inst_20390__$1);

(statearr_20530[(13)] = inst_20398__$1);

return statearr_20530;
})();
if(inst_20398__$1){
var statearr_20531_21750 = state_20455__$1;
(statearr_20531_21750[(1)] = (8));

} else {
var statearr_20533_21751 = state_20455__$1;
(statearr_20533_21751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20457 === (14))){
var inst_20390 = (state_20455[(11)]);
var inst_20377 = (state_20455[(9)]);
var inst_20421 = (state_20455[(2)]);
var inst_20422 = [];
var inst_20423 = inst_20422.push(inst_20377);
var inst_20373 = inst_20422;
var inst_20374 = inst_20390;
var state_20455__$1 = (function (){var statearr_20546 = state_20455;
(statearr_20546[(14)] = inst_20423);

(statearr_20546[(7)] = inst_20373);

(statearr_20546[(8)] = inst_20374);

(statearr_20546[(15)] = inst_20421);

return statearr_20546;
})();
var statearr_20547_21764 = state_20455__$1;
(statearr_20547_21764[(2)] = null);

(statearr_20547_21764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20457 === (16))){
var state_20455__$1 = state_20455;
var statearr_20554_21765 = state_20455__$1;
(statearr_20554_21765[(2)] = null);

(statearr_20554_21765[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20457 === (10))){
var inst_20413 = (state_20455[(2)]);
var state_20455__$1 = state_20455;
if(cljs.core.truth_(inst_20413)){
var statearr_20558_21767 = state_20455__$1;
(statearr_20558_21767[(1)] = (11));

} else {
var statearr_20559_21768 = state_20455__$1;
(statearr_20559_21768[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20457 === (18))){
var inst_20435 = (state_20455[(2)]);
var state_20455__$1 = state_20455;
var statearr_20564_21777 = state_20455__$1;
(statearr_20564_21777[(2)] = inst_20435);

(statearr_20564_21777[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20457 === (8))){
var inst_20398 = (state_20455[(13)]);
var state_20455__$1 = state_20455;
var statearr_20575_21785 = state_20455__$1;
(statearr_20575_21785[(2)] = inst_20398);

(statearr_20575_21785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14883__auto__ = null;
var cljs$core$async$state_machine__14883__auto____0 = (function (){
var statearr_20593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20593[(0)] = cljs$core$async$state_machine__14883__auto__);

(statearr_20593[(1)] = (1));

return statearr_20593;
});
var cljs$core$async$state_machine__14883__auto____1 = (function (state_20455){
while(true){
var ret_value__14884__auto__ = (function (){try{while(true){
var result__14885__auto__ = switch__14882__auto__(state_20455);
if(cljs.core.keyword_identical_QMARK_(result__14885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14885__auto__;
}
break;
}
}catch (e20611){var ex__14886__auto__ = e20611;
var statearr_20612_21790 = state_20455;
(statearr_20612_21790[(2)] = ex__14886__auto__);


if(cljs.core.seq((state_20455[(4)]))){
var statearr_20623_21794 = state_20455;
(statearr_20623_21794[(1)] = cljs.core.first((state_20455[(4)])));

} else {
throw ex__14886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21795 = state_20455;
state_20455 = G__21795;
continue;
} else {
return ret_value__14884__auto__;
}
break;
}
});
cljs$core$async$state_machine__14883__auto__ = function(state_20455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14883__auto____1.call(this,state_20455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14883__auto____0;
cljs$core$async$state_machine__14883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14883__auto____1;
return cljs$core$async$state_machine__14883__auto__;
})()
})();
var state__15933__auto__ = (function (){var statearr_20629 = f__15932__auto__();
(statearr_20629[(6)] = c__15931__auto___21712);

return statearr_20629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15933__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
