 // 增
 const div1 = dom.create("<div id='create'><span>div1</span></div>")
 console.log(div1)

 const a2_5 = dom.create("<span id='a2_5'></span>")
 dom.after(a2, a2_5); // 需要先创建再添加

 const b0_5 = dom.create("<span id='b0_5'></span>")
 dom.before(b1, b0_5)

 const append1 = dom.create("<div id='append1'></div>")
 dom.append(append, append1)

 const w0 = dom.create("<div id='w0'></div>")
 dom.wrap(w1, w0) // 将 w0 作为 w1 的父级，作为 wrap 的子级，加在 wrap 和 w1 中间

 // 删
 dom.remove(r1)

 dom.remove(empty)

 // 改
 dom.attr(attr1, 'title', 'Hi,nice to see you!')

 dom.text(text, '你好，很高兴见到你')

 dom.html(html, '<div>我是 div</div>')

 dom.style(style, 'border', '1px solid red')

 dom.class.add(test, 'red')

 const fn = () => console.log('点击了')
 dom.on(test, 'click', fn)
 dom.on(test2, 'click', fn)
 dom.off(test2, 'click', fn)

 const testDiv2 = dom.find('#test2')
 console.log(testDiv2);

 const p = dom.parent(son1)
 console.log(p)

 console.log(dom.children(p1))

 console.log(dom.siblings(son1))

 console.log(dom.next(son2))

 console.log(dom.previous(son2))