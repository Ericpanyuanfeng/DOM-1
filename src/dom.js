window.dom = {

    //  增
    create(string) { // 新建标签和里面的内容
        const container = document.createElement("template"); // template 是可以包含任何 HTML 标签的标签
        container.innerHTML = string.trim(); // trim() 是用于去除字符串头尾的空格
        return container.content.firstChild;
    },
    after(node1, node2) { // 将 node2 插入到 node1 的后面
        node1.parentNode.insertBefore(node2, node1.nextSibling);
    },
    before(node1, node2) { // 将 node2 插入到 node1 的前面
        node1.parentNode.insertBefore(node2, node1)
    },
    append(parent, node) { // 在 parent 里面添加 node
        parent.appendChild(node)
    },
    wrap(node, parent) { // 在父级和子级中间插入一级
        dom.before(node, parent)
        dom.append(parent, node)
    },

    // 删
    remove(node) { // 移除一个节点
        node.parentNode.removeChild(node)
        return node
    },
    empty(node) { // 移除一个节点下的所有子节点
        const array = []
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
            return array
        }
    },

    // 改
    attr(node, name, value) {
        if (arguments.length === 3) { // 如果参数有三个，就是改
            node.setAttribute(name, value)
        } else if (arguments.length === 2) { // 如果参数有两个，就是查（这就是重载）
            return node.getAttribute(name)
        }
    },
    text(node, string) {
        if (arguments.length === 2) {
            if ('innerText' in node) { // 如果 node 里面有 innerText，就执行
                node.innerText = string
            } else {
                node.textContent = string; //否则就执行 textContent （这就是适配）
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                node.innerText = string
            } else {
                node.textContent = string;
            }
        }
    },
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value // 如果 style 的值是变量，那需要用[]把变量包起来
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof Object) {
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },

    // 查
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    siblings(node) {
        return Array.from(node.parentNode.children).filter(n => n !== node)
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    index(node) {
        const list = dom.children(node, parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }
};