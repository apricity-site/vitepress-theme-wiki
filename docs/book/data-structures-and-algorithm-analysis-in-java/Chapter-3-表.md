# ###表、栈和队列

## ADT

1. MyArrayList将保持**基础数组**，**数组的容量**，以及存储在MyArrayList中的**当前项数**。
2. MyArrayList将提供一种机制以**改变基础数组的容量**。通过获得一个 新数组，将老数组拷
贝到新数组中来改变数组的容量，**允许虚拟机回收老数组**。
3. 提供迭代器及以下实现

```java
public interface MyList<E> extends Iterable<E> {
    // 重置数组
    public void clear();
    // 获取元素个数
    public int size();
    // 是否为空
    public boolean isEmpty();
    // 获取指定元素数组
    public E get(int index);
    // 设置指定位置元素
    public E set(int index, E e);
    // 添加元素 （能够动态扩容）
    public boolean add(E e);
    // 指定位置添加元素
    public boolean add(int index, E e);
    // 移除元素
    public E remove(int index);
}
```

## ArrayList实现

### ADT实现

```java
package com.apricity.booknote.data.structure.algorithm.analysis.list;

import java.util.Iterator;

public class MyArrayList<E> implements MyList<E> {

    private static final int DEFAULT_CAPACITY = 10;
    private int size;
    private E[] items;


    MyArrayList(){
        clear();
    }

    @SuppressWarnings("unchecked")
    MyArrayList(int capacity){
        items = (E[])new Object[capacity];
        ensureCapacity(capacity);
    }

    @Override
    @SuppressWarnings("unchecked")
    public void clear() {
        items = (E[])new Object[DEFAULT_CAPACITY];
        ensureCapacity(DEFAULT_CAPACITY);
    }

    @Override
    public int size() {
        return size;
    }

    @Override
    public boolean isEmpty() {
        return size == 0;
    }

    @Override
    public E get(int index) {
        if ( index < size ){
            return items[index];
        }
        return null;
    }

    @Override
    public E set(int index, E e) {
        E origin = null;
        if (index < size) {
            origin = items[index];
            items[index] = e;
        }
        return origin;
    }

    @Override
    public boolean add(E e) {
        if (size == items.length) {
            ensureCapacity(size * 2);
        }
        items[size++] = e;
        return add(size,  e);
    }

    @Override
    public boolean add(int index, E e) {
        if (index > size) {
            throw new IndexOutOfBoundsException("index: " + index + ", Size: " + size);
        }
        if (size == items.length) {
            ensureCapacity(size * 2);
        }
        for (int i = size; i > size- index; i--) {
            items[i] = items[i-1];
        }
        items[index] = e;
        size ++;
        return true;
    }

    @Override
    public E remove(int index) {
        E remove = null;
        if (index < 0 || index >= size) {
            throw new IllegalArgumentException("index");
        }
        for (int i = index; i < size; i++) {
            items[i] = items[i + 1];
        }
        size --;
        if (size <= DEFAULT_CAPACITY){
            ensureCapacity(DEFAULT_CAPACITY);
        }
        return remove;
    }

    @Override
    public Iterator<E> iterator() {
        // TODO
        return null;
    }

    @SuppressWarnings("unchecked")
    public void ensureCapacity(int capacity) {
        if (capacity <= size) {
            throw new IllegalArgumentException("expert capcacity: "+capacity+", size: " + size);
        }
        E[] oldItems = items;
        items = (E[]) new Object[capacity];
        for (int i = 0; i < oldItems.length; i++) {
            items[i] = oldItems[i];
        }
    }
}

```



### 迭代器实现

```java
    @Override
    public Iterator<E> iterator() {
        return new ArrayListIterator();
    }

    private class ArrayListIterator implements Iterator<E> {

        private int cursor;

        @Override
        public boolean hasNext() {
            return cursor < size;
        }

        @Override
        public E next() {
            return MyArrayList.this.items[cursor++];
        }

        @Override
        public void remove() {
            MyArrayList.this.remove(cursor);
        }
    }
```

* 🤔：为什么迭代器remove会避免IndexOutOfBoundsException
* 🤔：有static的嵌套类和内部类有什么不同？嵌套类可以访问外部类的静态成员和静态私有成员
* 🤔：内部类访问外部类的方法

## LinkedList实现

### ADT实现

```java
public class MyLinkedList<E> implements MyList<E> {

    private Node<E> header;
    private Node<E> tail;
    private int size;

    @Override
    public void clear() {
        size = 0;
        header = new Node<E>(null);
    }

    @Override
    public int size() {
        return size;
    }

    @Override
    public boolean isEmpty() {
        return size == 0;
    }

    @Override
    public E get(int index) {
        return getNode(index).getData();
    }

    @Override
    public E set(int index, E e) {
        Node<E> node = getNode(index);
        E oldData = node.getData();
        node.setData(e);
        return oldData;
    }

    @Override
    public boolean add(E e) {
        tail.next = new Node<E>(tail, e, null);
        tail = tail.next;
        size ++;
        return true;
    }

    @Override
    public boolean add(int index, E e) {
        Node<E> node = getNode(index);
        new Node<>(node.prev, e, node);
        size ++;
        return true;
    }

    @Override
    public E remove(int index) {
        Node<E> node = getNode(index);
        node.prev.next = node.next;
        size --;
        return node.getData();
    }

    private void remove(Node<E> node) {
        node.prev.next = node.next;
        size --;
    }

    public Node<E> getNode(int index) {
        if (index >= size || size == 0) {
            throw new ArrayIndexOutOfBoundsException("index: "+index+",size: "+size);
        }
        if (index < size/2) {
            Node<E> target = header;
            while (index > 0) {
                target = target.next;
                index --;
            }
            return target.next;
        }else {
            Node<E> target = tail;
            while ((size - index -1) > 0) {
                target = target.prev;
                index --;
            }
            return target;
        }
    }


    private static class Node<E> {
        private Node<E> prev;
        private E data;
        private Node<E> next;

        public Node() {
            this(null, null, null);
        }

        public Node(E data) {
            this(null, data, null);
        }

        public Node(Node<E> prev, E data, Node<E> next) {
            this.prev = prev;
            this.data = data;
            this.next = next;
        }

        public Node<E> getPrev() {
            return prev;
        }

        public void setPrev(Node<E> prev) {
            this.prev = prev;
        }

        public E getData() {
            return data;
        }

        public void setData(E data) {
            this.data = data;
        }

        public Node<E> getNext() {
            return next;
        }

        public void setNext(Node<E> next) {
            this.next = next;
        }
    }

    @Override
    public Iterator<E> iterator() {
        return new LinkedListIterator();
    }

    private class LinkedListIterator implements Iterator<E> {

        private Node<E> cursor = MyLinkedList.this.header.next;

        @Override
        public boolean hasNext() {
            return cursor != MyLinkedList.this.tail;
        }

        @Override
        public E next() {
            E data =  cursor.getData();
            cursor = cursor.next;
            return data;
        }

        @Override
        public void remove() {
            MyLinkedList.this.remove(cursor);
        }
    }
}
```

* 🤔： `getNode` 中为了提升效率，分别从头部/尾部查找节点

## 栈

### 基础

概念：只能在表尾做插入/删除(`push/pop`)操作

特点：后进先出表。后进入的元素先出栈。

### 应用

#### 平衡符号

**平衡符号**用于检查程序语法错误，每一个右括号( }、]、）)必然对应其相应的左括号(eg: [()] 合法；[(])不合法)

算法描述：

* 新建空栈，读取字符串
* 如果字符是一个左括号则进栈
* 如果字符是一个右括号，空栈报错，非空栈出栈的字符不是匹配的左括号报错
* 字符串读取完毕，栈非空报错

算法分析：

时间复杂度为O(N)



#### 前缀表达式

前缀表达式又称为波兰式，前缀表达式的运算符位于操作数之前，例如：`(3+4)*5-6`对应的波兰式是`-*+3456`

前缀表达式算法：

* **从右到左**扫描表达式(`-*+3456`)，遇到数字时，将数字压入堆栈
* 遇到运算符时，弹出栈顶的两个数，进行运算
* **注意顺序为**：栈顶元素  操作符 次顶元素
* 并将结果入栈；重复上述过程直到表达式最右端
* 最后运算得出的值即为最终结果

#### 中缀表达式

- 就是常见的运算表达式
- 人最熟悉中缀表达式，但计算机最难处理中缀表达式，所以往往将中缀表达式改为后缀表达式
- 例如`(3+4)*5-6`就是一个中缀表达式

#### 后缀表达式

- **从左往右**扫描表达式，遇到数字时，将数字压入堆栈
- 遇到运算符时，弹出栈顶的两个数，计算
- **注意顺序**：次顶元素 操作符 栈顶元素
- 并将结果入栈，重复上述过程直到表达式最右端
- 最后结果即为计算结果

https://www.cnblogs.com/chensongxian/p/7059802.html
