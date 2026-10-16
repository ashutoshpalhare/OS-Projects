# Project 18 – Banker's Algorithm Simulator

## Objective
An interactive Operating Systems simulator for understanding deadlock avoidance using Banker's Algorithm.

## Features
- Editable Allocation and Maximum matrices
- Configurable processes and resource types
- Available resource vector
- Need matrix calculation
- Safe-state detection
- Safe sequence visualization
- Work vector execution table
- Resource request safety test
- Example data, responsive UI and dark mode

## Algorithm
1. Calculate Need = Maximum - Allocation.
2. Set Work = Available and Finish = false for every process.
3. Find an unfinished process whose Need is less than or equal to Work.
4. Assume that process completes and add its Allocation to Work.
5. Mark the process finished and continue.
6. If all processes finish, the state is safe; otherwise it is unsafe.

## Resource Request Algorithm
1. Check Request <= Need.
2. Check Request <= Available.
3. Temporarily allocate the request.
4. Run the safety algorithm on the resulting state.
5. Grant the request only if the resulting state remains safe.

## Key Formula
Need[i][j] = Max[i][j] - Allocation[i][j]

## Technologies
HTML5, CSS3, JavaScript, Google Fonts CDN and Lucide Icons CDN.

## Folder Structure
18-bankers-algorithm-simulator/
- index.html
- README.md
- css/style.css
- js/app.js

## Example
The default example is the standard five-process, three-resource demonstration:
Allocation = [[0,1,0],[2,0,0],[3,0,2],[2,1,1],[0,0,2]]
Maximum = [[7,5,3],[3,2,2],[9,0,2],[4,2,2],[5,3,3]]
Available = [3,3,2]

A typical safe sequence is P1 → P3 → P4 → P0 → P2.

## Educational Use
The project demonstrates safe and unsafe states, safe sequences, Need calculation and resource-request validation in an interactive browser-based environment.
