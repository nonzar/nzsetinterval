/*
 * setinterval
 * 间隔执行,利用raf&fn.bind实现,需要ie9+
 * @require {nz.settimeout.js} [NZSettimeout]
 * @para {cb} [function] 回调
 * @para {ms} [number] 间隔(毫秒)
 * 清除函数object.stop=true
 */

function NZSetinterval(cb, ms) {
    if (typeof(cb) != "function" || typeof(ms) != "number") {
        throw "NZSetinterval - auguments type is not right.";
    }
    this.stop = false;
    new NZSettimeout(function () {
        if (this.stop)return;
        cb.apply(this);
        if (!this.stop)new NZSettimeout(arguments.callee.bind(this), ms);
    }.bind(this), ms);
    return this;
}