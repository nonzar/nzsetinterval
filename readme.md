##简介
使用 `requestAnimationFrame` 通过判断 `date` 来模拟 `setInterval`.

##用法

###new NZSetinterval(callback,ms)
实例化并传入回调和间隔毫秒,即时启动倒数.

**parameters**:
- `callback`: 函数类型,作为回调.
- `ms`: 数值类型,单位毫秒,间隔多少毫秒执行回调.

**example**:
```javascript
new NZSettimeout(function () {
    //code
}, 1000);
```
---
###.stop
实例化赋值后,可调用属性 `stop` 停止倒数,即时生效.

**example**

```javascript
new NZSettimeout(function () {
    this.stop = true;
}, 1000);
```

---

##支持

现代浏览器