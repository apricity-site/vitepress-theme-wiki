# 表、栈和队列

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

