# LOOK & C-LOOK Disk Scheduling Simulator

**Course:** TYBSc Computer Science · CS-302-MJ-T Operating Systems  
**Project:** 24 of 30 · **Stack:** HTML, CSS, JavaScript

## Overview
Compare LOOK and Circular LOOK (C-LOOK) scheduling using a configurable queue, head position and direction.

## Features
- Editable request queue and initial head position.
- Select upward or downward initial direction.
- View head path, total seek movement, average movement per request and each movement.
- Compare LOOK and C-LOOK results in a responsive UI.

## Run
Open `index.html` in a modern browser.

## Algorithms
- **LOOK:** Service requests in the current direction up to the furthest pending request, then reverse to service requests on the other side.
- **C-LOOK:** Service requests in one direction to the furthest pending request, jump to the opposite-side extreme request, and continue in the same direction.

The C-LOOK jump between request extremes is counted in the total head movement. The physical disk boundaries are not included unless requests exist at those cylinders.

## Learning outcomes
Distinguish LOOK from SCAN and C-LOOK from C-SCAN, understand direction-based service ordering, and calculate total seek movement.

## Limitation
This is a classroom simulation and does not control a real disk.