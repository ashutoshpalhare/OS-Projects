# Disk Scheduling Algorithm Comparison Tool

**Course:** TYBSc Computer Science · CS-302-MJ-T Operating Systems  
**Project:** 25 of 30 · **Stack:** HTML, CSS, JavaScript

## Overview
Compare six disk scheduling algorithms using the same request queue: FCFS, SSTF, SCAN, C-SCAN, LOOK and C-LOOK.

## Features
- Configure request queue, initial head, cylinder limit and direction.
- Compare total seek distance, average movement per request and service paths.
- Sort algorithms by seek total and visualize relative totals.
- Includes input validation and responsive UI.

## Run
Open `index.html` in a modern browser.

## Metric
Each movement contributes `|next cylinder − current cylinder|`. Boundary travel is included in SCAN/C-SCAN; circular wrap travel is included in C-SCAN/C-LOOK. The lowest total is best for the specific input, but does not mean the algorithm is universally best.

## Learning outcomes
Compare scheduling strategies, understand head movement metrics, and discuss fairness and starvation.

## Limitation
This is a classroom simulation, not a real disk controller.