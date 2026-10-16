# SCAN & C-SCAN Disk Scheduling Simulator

**Course:** TYBSc Computer Science · CS-302-MJ-T Operating Systems  
**Project:** 23 of 30 · **Stack:** HTML, CSS, JavaScript

## Overview
Compares SCAN and Circular SCAN (C-SCAN) disk-head scheduling for a configurable request queue, starting head and direction.

## Features
- Configure requests, cylinder range, initial head and direction.
- View service path, total movement, average movement per request and movement-by-movement detail.
- Include boundary travel and C-SCAN wrap-around in total movement.
- Responsive layout and preset request queue.

## Run
Open `index.html` in a modern browser.

## Algorithms
- **SCAN:** Move in the selected direction, service requests along the way, reach the boundary when needed, and reverse.
- **C-SCAN:** Move in the selected direction, reach the boundary, wrap to the opposite boundary, and continue in the same direction.

For teaching consistency, this simulator counts boundary and wrap-around travel as head movement.

## Learning outcomes
Understand the elevator algorithm, circular scheduling, direction choice, and the effect of boundary/wrap movement on seek totals.

## Limitation
The model uses a simplified cylinder range and does not control a physical disk.