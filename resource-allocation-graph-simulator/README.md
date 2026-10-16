# Resource Allocation Graph Simulator

**Course:** TYBSc Computer Science · CS-302-MJ-T Operating Systems  
**Project:** 20 of 30 · **Stack:** HTML, CSS, JavaScript, SVG

## Overview
Create and inspect a directed Resource Allocation Graph (RAG) with process nodes, resource nodes, request edges and allocation edges.

## Features
- Select process and resource counts.
- Add request and allocation edges using compact text input.
- Automatically render a directed graph with SVG.
- Detect directed cycles and explain their relationship to deadlock.
- Load an acyclic example and clear the graph.

## Run
Open `index.html` in a modern browser. No build step is required.

## Input format
Request edges: `P0,R1; P1,R0` means process P0 requests resource R1.  
Allocation edges: `R1,P2; R0,P1` means resources are allocated to those processes.

## Concept
A request edge is process → resource. An allocation edge is resource → process. For a system with one instance of each resource type, a directed cycle indicates deadlock. If resource types have multiple instances, a cycle alone is not sufficient to prove deadlock.

## Learning outcomes
Understand graph-based resource allocation, directed cycles, request/allocation edges, and deadlock reasoning.

## Limitation
This visual model assumes one instance per resource type for its simple cycle interpretation; it is not connected to a live operating system.