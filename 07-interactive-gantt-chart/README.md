# Project 07 – Interactive Gantt Chart Visualizer

Interactive web-based Gantt chart visualizer for Operating Systems CPU scheduling concepts.

## Features
- Add and remove execution segments
- Process name, Start Time and End Time inputs
- Automatic duration calculation
- Interactive zoom control
- CPU busy and idle visualization
- Timeline scale
- Total, busy and idle time
- CPU utilization
- Validation for invalid and overlapping segments
- Example data and reset
- Print-friendly chart
- Responsive UI and dark mode

## Concept
A Gantt chart is a timeline used in Operating Systems to show when each process gets CPU service. The width of each block represents its execution duration.

## Formula
CPU Utilization = Total Busy Time / Total Elapsed Time × 100

## Example
P1: 0–4  
P2: 4–7  
P3: 7–9  
Idle: 9–11  
P4: 11–16  
P1: 16–19

## Technologies
HTML5, CSS3 and JavaScript.

## Run
Open `index.html` in a modern browser.

## Structure
~~~text
07-interactive-gantt-chart/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── app.js
~~~
