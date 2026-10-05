# Project 09 – Process Queue Simulator

Interactive Operating Systems simulator for understanding process queues and movement between them.

## Queues
- Job Queue
- Ready Queue
- CPU / Running
- Waiting / I/O
- Terminated

## Features
- Create processes dynamically
- Select any visible process
- Move processes through valid queue transitions
- Visual queue cards with process counts
- Transition history
- Example data
- Responsive UI and dark mode
- HTML, CSS and JavaScript only

## Valid Queue Movement
- Job Queue → Ready Queue
- Ready Queue → CPU / Running
- Running → Waiting / I/O
- Waiting / I/O → Ready Queue
- Running → Ready Queue (Preemption)
- Running → Terminated

## Run
Open `index.html` in a modern browser.

## Structure
~~~text
09-process-queue-simulator/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── app.js
~~~
