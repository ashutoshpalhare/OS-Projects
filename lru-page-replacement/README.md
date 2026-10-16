# Project 12 – LRU Page Replacement Simulator

Browser-based simulator for the Least Recently Used (LRU) Page Replacement Algorithm.

## Features
- Custom page reference string
- Configurable memory frames
- Step-by-step frame visualization
- Page HIT and PAGE FAULT indication
- Page fault, hit and fault-rate statistics
- Example and reset controls
- Responsive UI and dark mode
- HTML5, CSS3 and JavaScript only

## Algorithm
1. Start with empty frames.
2. Read each referenced page.
3. If the page exists in memory, record a HIT and update its recent-use time.
4. If absent, record a PAGE FAULT.
5. Use an empty frame when available.
6. Otherwise replace the page whose last use was farthest in the past.
7. Continue until the reference string is complete.

## Formulas
Page Fault Rate = (Page Faults / Total References) × 100
Page Hit Rate = (Page Hits / Total References) × 100

## How to Run
Open index.html in any modern browser.

## Folder Structure
12-lru-page-replacement/
- index.html
- README.md
- css/style.css
- js/app.js

## Academic Use
Suitable for TYBSc Computer Science CS-302-MJ-T Operating Systems practical demonstration, project submission and viva.

## Institution
Trimurti Arts, Commerce and Science College
Department of Computer Science
