# Project 11 – FIFO Page Replacement Simulator

A browser-based Operating Systems simulator for the First-In First-Out (FIFO) Page Replacement Algorithm.

## Features
- Custom reference string
- Configurable number of frames
- Frame-by-frame visualization
- Page HIT/FAULT indication
- Page fault and hit counts
- Fault-rate calculation
- Example and reset controls
- Responsive UI and dark mode
- HTML5, CSS3 and JavaScript only

## Algorithm
1. Start with empty memory frames.
2. Read each page in the reference string.
3. If the page is already present, record a HIT.
4. Otherwise record a PAGE FAULT.
5. If an empty frame exists, load the page.
6. Otherwise replace the page that entered memory first.
7. Continue until all references are processed.

## Formulas
Page Fault Rate = (Page Faults / Total References) × 100
Page Hit Rate = (Page Hits / Total References) × 100

## How to Run
Open index.html directly in a modern browser.

## Folder Structure
11-fifo-page-replacement/
- index.html
- README.md
- css/style.css
- js/app.js

## Academic Use
Suitable for TYBSc Computer Science CS-302-MJ-T Operating Systems practical demonstration, mini-project submission and viva.

## Institution
Trimurti Arts, Commerce and Science College
Department of Computer Science
