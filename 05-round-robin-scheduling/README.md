# Project 05 – Round Robin Scheduling Simulator

Interactive **Round Robin CPU Scheduling** simulator built with HTML, CSS and JavaScript.

## Features
- Configurable Time Quantum
- Add/remove processes
- Arrival Time and Burst Time
- Preemptive Round Robin scheduling
- Dynamic Gantt chart
- CT, TAT, WT and RT
- Average performance metrics
- CPU utilization and idle periods
- Example data
- Dark mode and responsive UI

## Algorithm
1. Sort processes by Arrival Time.
2. Add arrived processes to the Ready Queue.
3. Execute the first process for at most one Time Quantum.
4. Add newly arrived processes to the queue.
5. If the current process is unfinished, place it at the end of the queue.
6. Repeat until all processes complete.

## Formulas
- TAT = CT − AT
- WT = TAT − BT
- RT = First Start Time − AT
- CPU Utilization = Total Busy Time / Total Elapsed Interval × 100

## Example
P1(AT=0,BT=5), P2(AT=1,BT=4), P3(AT=2,BT=2), P4(AT=3,BT=6), Time Quantum = 2.

## Run
Open `index.html` in a modern browser.

## Structure
~~~text
05-round-robin-scheduling/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── app.js
~~~
