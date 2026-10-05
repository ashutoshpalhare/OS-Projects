# Project 03 – SRTF CPU Scheduling Simulator

Interactive **Shortest Remaining Time First (SRTF)** preemptive CPU scheduling simulator built with HTML, CSS and JavaScript.

## Features
- Add/remove processes
- Arrival Time and Burst Time input
- Ready-made example
- Preemptive SRTF scheduling
- Dynamic Gantt chart with preemption segments
- CT, TAT, WT and RT
- Average performance metrics
- CPU utilization including idle periods
- Dark mode
- Responsive UI

## Algorithm
At every scheduling event, choose the arrived process with the smallest Remaining Time. A newly arrived process can preempt the currently running process when its remaining time is shorter. The simulation advances to the next arrival or completion event.

## Formulas
- CT = Completion Time
- TAT = CT − AT
- WT = TAT − BT
- RT = First Start Time − AT
- CPU Utilization = Total Busy Time / Total Elapsed Interval × 100

## Example
P1(AT=0,BT=8), P2(AT=1,BT=4), P3(AT=2,BT=2), P4(AT=3,BT=1)

## Run
Open `index.html` in a modern browser. No backend or build tool is required.

## Structure
~~~text
03-srtf-cpu-scheduling/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── app.js
~~~
