# File Allocation Comparison Tool

**Course:** TYBSc Computer Science · CS-302-MJ-T Operating Systems  
**Project:** 27 of 30 · **Stack:** HTML, CSS, JavaScript

## Overview
Compare contiguous, linked and indexed file allocation under a common virtual disk setup and optional pre-existing reserved blocks.

## Features
- Configure disk capacity, file sizes and a fragmentation pattern.
- Simulate allocation success for each method.
- Compare number of files allocated, blocks used, and simplified metadata overhead.
- Includes a concept table covering fragmentation and access patterns.

## Run
Open `index.html` in a modern browser.

## Input format
One file per line: `filename, block-count`.

## Interpretation
Contiguous allocation requires a consecutive free run. Linked allocation can use scattered free blocks but conceptually needs pointers. Indexed allocation reserves an index block per file. The metadata measure is a simplified teaching metric, not a real filesystem byte count.

## Learning outcomes
Compare file allocation trade-offs and explain why the same disk layout can produce different allocation outcomes.

## Limitation
This is a virtualized classroom demonstration; it does not access or modify host files.