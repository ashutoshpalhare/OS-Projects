# File Allocation Simulator

**Course:** TYBSc Computer Science · CS-302-MJ-T Operating Systems  
**Project:** 26 of 30 · **Stack:** HTML, CSS, JavaScript

## Overview
Simulate contiguous, linked and indexed file allocation on a small virtual disk.

## Features
- Configure total disk blocks and file names/sizes.
- Choose an allocation method.
- Visualize block usage and file ownership.
- View allocation table, used/free block totals, and failures.
- Indexed allocation reserves one extra block per file for its index.

## Run
Open `index.html` in a modern browser.

## Input format
Enter one file per line: `filename, block-count`, for example `notes.txt, 4`.

## Methods
- **Contiguous:** requires a consecutive run of free blocks.
- **Linked:** assigns free blocks and conceptually links them in file order.
- **Indexed:** assigns an index block plus data blocks.

## Learning outcomes
Compare space allocation, direct/sequential access implications, pointer/index overhead, and fragmentation.

## Limitation
This model uses a simplified virtual disk and does not create files on the host computer.