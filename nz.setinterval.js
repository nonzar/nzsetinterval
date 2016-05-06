/*
 * setinterval
 * 间隔执行,利用raf&fn.bind实现,需要ie9+
 * @para {cb} [function] 回调
 * @para {ms} [number] 间隔(毫秒)
 * 清除函数object.stop=true
 */

function NZSetinterval(cb, ms) {
    if (typeof(cb) != "function" || typeof(ms) != "number") {
        throw "NZSetinterval - auguments type is not right.";
    }
    this.__endtime = +new Date() + ms;
    this.stop = false;
    window.requestAnimationFrame((function () {
        if (this.stop)return;
        if (+new Date() >= this.__endtime) {
            this.__endtime = +new Date() + ms;
            cb.apply(this)
        }
        if (!this.stop)window.requestAnimationFrame(arguments.callee.bind(this));
    }).bind(this));
    return this;
}