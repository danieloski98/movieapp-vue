import { defineStore } from 'pinia'

export const useCounter = defineStore('counter', {
    state: () => {
        return { count: 1 };
    },
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }
    }
})