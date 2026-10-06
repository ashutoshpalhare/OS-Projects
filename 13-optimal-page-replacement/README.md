# Project 13 – Optimal Page Replacement Simulator

A browser-based Operating Systems project demonstrating the Optimal (OPT/MIN) Page Replacement Algorithm using HTML, CSS and JavaScript.

## Features
- Custom page reference string
- Configurable number of frames
- Step-by-step frame visualization
- HIT and PAGE FAULT identification
- Fault and hit counts
- Fault rate and hit rate
- Replacement decision log
- Explains why a page was selected as the victim
- Load Example and Reset controls
- Responsive interface
- Dark mode
- No backend or build tools required

## Algorithm
For each referenced page:
1. If the page is already in a frame, record a HIT.
2. If an empty frame exists, load the page and record a FAULT.
3. Otherwise, inspect future references.
4. Find the resident page whose next use is farthest in the future.
5. If a resident page will never be used again, replace it immediately.
6. Continue until the reference string is complete.

## Example
Reference String: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2

Frames: 3

## Technologies
- HTML5
- CSS3
- JavaScript
- Google Fonts CDN
- Lucide Icons CDN

## Project Structure
13-optimal-page-replacement/
- index.html
- README.md
- css/style.css
- js/app.js

## Educational Objective
This project helps students understand page replacement, page faults, hits, and the theoretical minimum page-fault strategy used to evaluate other algorithms such as FIFO and LRU.

## How to Run
Open index.html in a modern web browser. No installation or server is required.

## Note
The Optimal algorithm assumes knowledge of future page references. Therefore, it is not normally implementable as a practical online operating-system policy; it is mainly used for theoretical study and benchmarking.