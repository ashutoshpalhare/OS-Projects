# Project 08 – Process State Transition Simulator

Interactive Operating Systems simulator demonstrating the standard five-state process model.

## States
- New
- Ready
- Running
- Waiting / Blocked
- Terminated

## Features
- Create multiple processes
- Interactive process state transitions
- Valid transition controls
- Visual state diagram
- Current process and current state display
- State-wise process counts
- Transition history table
- Automatic demonstration mode
- Responsive UI and dark mode

## Valid Transitions
1. New → Ready
2. Ready → Running
3. Running → Waiting
4. Waiting → Ready
5. Running → Ready (Preemption)
6. Running → Terminated

## Technologies
HTML5, CSS3 and JavaScript.

## Run
Open `index.html` in a modern browser.

## Structure
~~~text
08-process-state-transition-simulator/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── app.js
~~~
