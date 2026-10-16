# Project 01 – FCFS CPU Scheduling Simulator

Interactive browser-based simulator for the First Come First Serve (FCFS) CPU scheduling algorithm.

## Objective
To demonstrate FCFS scheduling practically and calculate process execution metrics using HTML, CSS and JavaScript.

## Technologies
- HTML5
- CSS3
- Vanilla JavaScript
- Lucide Icons CDN
- Google Fonts CDN

## Features
- Add and remove processes
- Arrival Time and Burst Time input
- Ready-made example
- FCFS scheduling calculation
- Interactive Gantt chart
- Completion, Turnaround, Waiting and Response Time
- Average performance metrics
- CPU utilization
- Light/Dark theme
- Print-friendly results
- Responsive UI

## FCFS Logic
1. Sort processes by Arrival Time.
2. Set Start Time to the greater of current CPU time and Arrival Time.
3. Execute the process completely.
4. Calculate CT, TAT, WT and RT.
5. Display the execution order and performance metrics.

## Formulas
- Completion Time: CT = Start Time + Burst Time
- Turnaround Time: TAT = CT − Arrival Time
- Waiting Time: WT = TAT − Burst Time
- Response Time: RT = Start Time − Arrival Time
- CPU Utilization: Total Burst Time / Total elapsed CPU interval × 100

## Example
| Process | AT | BT |
|---|---:|---:|
| P1 | 0 | 5 |
| P2 | 1 | 3 |
| P3 | 2 | 8 |
| P4 | 3 | 6 |

Expected averages:
- Average Waiting Time: 5.75
- Average Turnaround Time: 11.25
- Average Response Time: 5.75
- CPU Utilization: 100%

## Run
Open index.html in a modern web browser. No server or build tool is required.

## Project Structure
~~~text
01-fcfs-cpu-scheduling/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── app.js
~~~

## Learning Outcomes
Students can understand FCFS scheduling, calculate scheduling metrics, interpret a Gantt chart, and connect OS theory with a working web model.

## Limitations
FCFS is non-preemptive and can cause the convoy effect when a long process waits behind shorter processes.

## Future Scope
Possible extensions include process priority, multiple scheduling algorithms, context-switch overhead, and algorithm comparison.
