# Hash Table

July 23, 2021

## Getting Started

1. Install dependencies with `npm i` or `yarn i`
1. Run tests with `npm test`

## Overview

Implement a hash table class with some basic methods:

`add`

Takes: key [string], value [any]

Behavior: Hashes the key and uses it to create an index in the list. Create a linked list at that index if it doesn't exist, or add a node to the tail if it does.

`contains`

Takes: key [string]

Behavior: Hashes the key and returns a boolean if there is a bucket associated with that key

`get`

Takes: key [string]

Behavior: Hashes the key and checks against the table. If a corresponding bucket is found, try to return data based on the request

`hash`

Takes: key [string]

Behavior: Hashes the key and returns its index in the table.
