export type SingleNode<T> = {
    value: T;
    next: SingleNode<T> | null;
}

export class LinkedList<T> {
    private head: SingleNode<T> | null = null;
    private size: number = 0;

    push(value: T){
        let lastEl  = this.head
        while (lastEl?.next) {
            lastEl = lastEl?.next
        }

        lastEl?.next;
    }

    pop() {

    }

}