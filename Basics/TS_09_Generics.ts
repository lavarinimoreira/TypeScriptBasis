/** A FIFO (First In First Out) collection */
class Queue<T> {
    data = [];
    push(item: T) { this.data.push(item); }
    pop(): T { return this.data.shift(); }
}
