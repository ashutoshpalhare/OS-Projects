# FCFS & SSTF Disk Scheduling Simulator

**Course:** TYBSc Computer Science · CS-302-MJ-T Operating Systems  
**Project:** 22 of 30 · **Stack:** HTML, CSS, JavaScript

## Overview
Compares FCFS (First-Come, First-Served) and SSTF (Shortest Seek Time First) using a user-defined disk request queue.

## Features
- Edit the request queue, initial head position, and maximum cylinder.
- View service order, per-movement seek distance, total seek distance, and average seek distance.
- Compare algorithms and calculate the difference in total movement.
- Responsive interface with a preset example.

## Run
Open `index.html` in a modern browser. No build step or server is required.

## Algorithm
- **FCFS:** Service requests in the order received.
- **SSTF:** Repeatedly service the pending request with the smallest absolute distance from the current head position.

Seek distance for a movement is `|next cylinder − current cylinder|`. Total seek distance is the sum of all movements.

## Learning outcomes
Understand disk-head movement, request ordering, seek distance, and the trade-off that SSTF may cause starvation for distant requests.

## Limitation
This is a simulation, not a controller for a physical disk.