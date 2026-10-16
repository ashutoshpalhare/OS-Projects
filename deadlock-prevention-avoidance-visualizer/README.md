# Deadlock Prevention & Avoidance Visualizer

**Course:** TYBSc Computer Science · CS-302-MJ-T Operating Systems  
**Project:** 21 of 30 · **Stack:** HTML, CSS, JavaScript

## Overview
An educational tool for exploring the four Coffman conditions, prevention strategies, and safe-state checking with the Banker's algorithm.

## Features
- Interactive explanations of mutual exclusion, hold-and-wait, no preemption, and circular wait.
- Editable Available, Allocation and Max matrices.
- Calculates Need = Max − Allocation.
- Finds a safe sequence using the Banker's safety algorithm.
- Tests a process resource request against Need and Available, then evaluates whether granting it preserves safety.

## Run
Open `index.html` in a modern browser. No build step or server is required.

## Matrix input
Separate values with commas and rows with semicolons. For example:
`0,1,0; 2,0,0; 3,0,2`

The Available vector length must match the resource columns in Allocation and Max. Allocation and Max must have the same process-row count.

## Core concepts
- **Prevention:** design the system to break at least one Coffman condition.
- **Avoidance:** inspect the potential future state before granting a resource request.
- **Safe state:** there exists an order in which every process can finish with available resources plus resources released by completed processes.

## Learning outcomes
Compare prevention and avoidance, calculate the Need matrix, trace a safe sequence, and decide whether a hypothetical resource request can be safely granted.

## Limitations
This is a classroom model based on declared maximum demands. It does not control real OS resource allocation.