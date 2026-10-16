# Project 02 – SJF CPU Scheduling Simulator

Interactive **Non-Preemptive Shortest Job First (SJF)** CPU scheduling simulator built with HTML, CSS and JavaScript.

## Features
- Add/remove processes
- Arrival Time and Burst Time input
- SJF non-preemptive scheduling
- Gantt chart
- CT, TAT, WT and RT
- Average metrics and CPU utilization
- Example data and dark mode
- Responsive browser UI

## Algorithm
At every CPU decision point, select the arrived process with the smallest Burst Time. If no process has arrived, advance the CPU time to the next Arrival Time. A selected process runs until completion.

## Formulas
CT = Start Time + Burst Time

TAT = CT − Arrival Time

WT = TAT − Burst Time

RT = Start Time − Arrival Time

## Example
P1(AT=0,BT=7), P2(AT=1,BT=4), P3(AT=2,BT=1), P4(AT=3,BT=4)

Execution order: **P1 → P3 → P2 → P4**

Average WT = **4.75**, Average TAT = **8.75**, Average RT = **4.75**, CPU Utilization = **100%**.

## Run
Open `index.html` in a modern browser. No backend or build tool is required.

## Structure
- index.html
- css/style.css
- js/app.js
- README.md
