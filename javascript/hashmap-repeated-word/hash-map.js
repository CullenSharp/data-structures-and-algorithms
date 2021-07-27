'use strict';

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insert(value) {
		if (!this.head) {
			this.head = new Node(value);
		}

		let current = this.head;
		let previous;
		while (current) {
			previous = current;
			current = current.next;
		}

		previous.next = new Node(value);
	}

	find(key) {
		let current = this.head;

		while (current) {
			if (current.value[key]) {
				return current.value;
			}

			current = current.next;
		}
	}
}

class HashTable {
	constructor(size) {
		this.size = size;
		this.buckets = new Array(size);
	}

	hash(key) {
		const sumOfCharCodes = key.split('').reduce((acc, curr) => {
			acc += curr.charCodeAt(0);
			return acc;
		}, 0);

		return ((sumOfCharCodes * 599) % this.size);
	}

	add(key, value) {
		const hash = this.hash(key);
		if (!this.buckets[hash]) {
			this.buckets[hash] = new LinkedList();
		}

		const entry = {[key]: value};
		this.buckets[hash].insert(entry);

		return entry;
	}

	contains(key) {
		const hash = this.hash(key);
		return Boolean(this.buckets[hash]);
	}

	get(key) {
		const hash = this.hash(key);
		if (this.buckets[hash]) {
			return this.buckets[hash].find(key);
		}
	}
}

module.exports = HashTable;
