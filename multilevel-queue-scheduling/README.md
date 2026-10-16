# Project 10 – Multilevel Queue Scheduling Simulator

An interactive web-based Operating Systems simulator for understanding **Multilevel Queue Scheduling**.

## Features
- Two fixed ready queues: Queue 1 (High Priority) and Queue 2 (Low Priority)
- Queue 1 has higher priority than Queue 2
- Configurable algorithm for each queue: FCFS or Round Robin
- Configurable Round Robin Time Quantum
- Arrival Time, Burst Time and queue assignment
- Interactive Gantt chart
- Completion Time (CT), Turnaround Time (TAT), Waiting Time (WT), Response Time (RT)
- Average WT, TAT, RT and CPU Utilization
- Example data, reset and add/remove process
- Responsive UI and dark mode

## Scheduling Model
Processes are permanently assigned to one of the two queues. Queue 1 is always served before Queue 2. Each queue can independently use FCFS or Round Robin.

## Technologies
HTML5, CSS3 and Vanilla JavaScript. Google Fonts is used through CDN.

## Run
Open `index.html` directly in a modern browser. No installation or build step is required.

## Learning Outcomes
Students can understand fixed multilevel queues, queue priority, FCFS/RR behavior, Gantt charts and scheduling metrics.

## Project Structure
```
10-multilevel-queue-scheduling/
├── index.html
├── README.md
├── css/style.css
└── js/app.js
```
