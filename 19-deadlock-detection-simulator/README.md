# Deadlock Detection Simulator

**Course:** TYBSc Computer Science · CS-302-MJ-T Operating Systems  
**Project:** 19 of 30 · **Stack:** HTML, CSS, JavaScript

## Overview
An interactive educational tool that checks whether a system is deadlocked using the Allocation matrix, Request matrix and Available resource vector.

## Features
- Editable resource vector and matrices.
- Implements the deadlock-detection Work/Finish procedure.
- Displays process completion state, blocked processes, each work-vector update and final result.
- Includes a no-deadlock sample and responsive interface.

## Run
Open `index.html` in a modern browser. No build step or server is required. Google Fonts and Lucide are optional CDN enhancements.

## Input format
- Vector: `0, 1, 2`
- Matrix rows: `1,0,0; 0,1,0; 0,0,1`
- Allocation and Request must have the same number of process rows and resource columns matching Available.

## Algorithm
1. Set Work = Available.
2. Mark processes with zero allocation as finishable.
3. Find an unfinished process whose Request is less than or equal to Work.
4. Assume it finishes, release its Allocation into Work, and mark it finished.
5. Repeat while progress is possible. Any remaining unfinished process is reported as deadlocked.

## Learning outcomes
Understand resource allocation, outstanding requests, work-vector updates, and how deadlock detection differs from deadlock avoidance.

## Limitations
This is a deterministic classroom simulation; it does not inspect operating-system processes or real hardware resources.