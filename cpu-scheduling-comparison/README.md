# Project 06 – CPU Scheduling Algorithm Comparison

Interactive web-based comparison tool for four CPU scheduling algorithms.

## Algorithms
- FCFS (First Come First Serve)
- SJF (Shortest Job First, Non-Preemptive)
- Priority Scheduling (Non-Preemptive)
- Round Robin (Preemptive)

## Features
- Same process dataset used across all algorithms
- Arrival Time, Burst Time and Priority inputs
- Configurable Round Robin Time Quantum
- Gantt charts for every algorithm
- Average Waiting, Turnaround and Response Time
- CPU Utilization
- Best-performance highlighting
- Detailed per-process metrics
- Example data, reset and add/remove process controls
- Responsive UI and dark mode
- No backend or build tools required

## Formulas
- Turnaround Time (TAT) = Completion Time (CT) − Arrival Time (AT)
- Waiting Time (WT) = TAT − Burst Time (BT)
- Response Time (RT) = First Start Time − Arrival Time (AT)
- CPU Utilization = Total Busy Time / Total Elapsed Time × 100

## Example
P1(AT=0,BT=7,Priority=2)
P2(AT=1,BT=4,Priority=1)
P3(AT=2,BT=1,Priority=4)
P4(AT=3,BT=4,Priority=3)

Round Robin Time Quantum = 2.

## Technologies
HTML5, CSS3 and JavaScript.

## Run
Open `index.html` in a modern web browser.

## Structure
~~~text
06-cpu-scheduling-comparison/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── app.js
~~~
