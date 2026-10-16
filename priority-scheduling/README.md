# Project 04 – Priority Scheduling Simulator

Interactive **Non-Preemptive Priority CPU Scheduling** simulator built with HTML, CSS and JavaScript.

## Features
- Add/remove processes
- Arrival Time, Burst Time and Priority input
- Lower priority number = higher priority
- Non-Preemptive Priority scheduling
- Gantt chart with CPU Idle periods
- CT, TAT, WT and RT
- Average metrics
- CPU utilization
- Example data
- Dark mode and responsive UI

## Algorithm
1. Find all processes that have arrived.
2. Select the available process with the smallest Priority Number.
3. If no process is available, move CPU time to the next Arrival Time.
4. Execute the selected process completely.
5. Calculate CT, TAT, WT and RT.
6. Repeat until all processes finish.

Tie-breaking: same priority → earlier Arrival Time → original input order.

## Formulas
CT = Start Time + BT  
TAT = CT − AT  
WT = TAT − BT  
RT = Start Time − AT  
CPU Utilization = Total Busy Time / Total Elapsed Interval × 100

## Example
P1(AT=0,BT=7,Priority=2), P2(AT=1,BT=4,Priority=1), P3(AT=2,BT=2,Priority=4), P4(AT=3,BT=1,Priority=3).

Execution order: **P1 → P2 → P4 → P3**

## Run
Open `index.html` in a modern browser.

## Structure
~~~text
04-priority-scheduling/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── app.js
~~~
