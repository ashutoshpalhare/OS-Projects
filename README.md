# Operating Systems Projects

A collection of **30 standalone, browser-based Operating Systems simulations** built for learning core OS concepts through interactive examples. Each project lives in its own folder, so you can open, study, or share a single simulator without needing a central dashboard or build step.

> **Scope:** These are educational simulations—not replacements for the behaviour or complexity of a real operating system.

## Project catalogue

### CPU scheduling
| Project | What it demonstrates |
|---|---|
| [FCFS CPU Scheduling](./fcfs-cpu-scheduling/) | First-Come, First-Served scheduling |
| [SJF CPU Scheduling](./sjf-cpu-scheduling/) | Shortest Job First scheduling |
| [SRTF CPU Scheduling](./srtf-cpu-scheduling/) | Shortest Remaining Time First |
| [Round Robin Scheduling](./round-robin-scheduling/) | Time-quantum based scheduling |
| [Priority Scheduling](./priority-scheduling/) | Priority-based process scheduling |
| [Multilevel Queue Scheduling](./multilevel-queue-scheduling/) | Scheduling across multiple queues |
| [CPU Scheduling Comparison](./cpu-scheduling-comparison/) | Compare scheduling strategies |
| [Interactive Gantt Chart](./interactive-gantt-chart/) | Build and inspect execution timelines |
| [Process Queue Simulator](./process-queue-simulator/) | Process queue behaviour |
| [Process State Transition Simulator](./process-state-transition-simulator/) | Process lifecycle and state transitions |

### Deadlocks and synchronization
| Project | What it demonstrates |
|---|---|
| [Banker's Algorithm Simulator](./bankers-algorithm-simulator/) | Safe-state detection and resource requests |
| [Deadlock Detection Simulator](./deadlock-detection-simulator/) | Detecting deadlock conditions |
| [Deadlock Prevention & Avoidance Visualizer](./deadlock-prevention-avoidance-visualizer/) | Deadlock handling strategies |
| [Resource Allocation Graph Simulator](./resource-allocation-graph-simulator/) | Process-resource relationships |
| [Dining Philosophers Simulator](./dining-philosophers-simulator/) | Synchronization and shared-resource contention |
| [Producer-Consumer Simulator](./producer-consumer-problem-simulator/) | Bounded-buffer synchronization |

### Memory management
| Project | What it demonstrates |
|---|---|
| [FIFO Page Replacement](./fifo-page-replacement/) | FIFO page replacement |
| [LRU Page Replacement](./lru-page-replacement/) | Least Recently Used page replacement |
| [Optimal Page Replacement](./optimal-page-replacement/) | Optimal page replacement |
| [Page Replacement Comparison](./page-replacement-comparison/) | Compare page-replacement strategies |
| [Memory Allocation Simulator](./memory-allocation-simulator/) | Memory allocation strategies |
| [Segmentation Memory Simulator](./segmentation-memory-simulator/) | Segmentation and logical memory |
| [Virtual Memory Simulator](./virtual-memory-simulator/) | Virtual-memory concepts |

### Disk and file management
| Project | What it demonstrates |
|---|---|
| [Disk Scheduling Comparison](./disk-scheduling-algorithm-comparison/) | Compare disk scheduling algorithms |
| [FCFS & SSTF Disk Scheduling](./fcfs-sstf-disk-scheduling-simulator/) | FCFS and SSTF disk scheduling |
| [LOOK & C-LOOK Disk Scheduling](./look-clook-disk-scheduling-simulator/) | LOOK and C-LOOK disk scheduling |
| [SCAN & C-SCAN Disk Scheduling](./scan-cscan-disk-scheduling-simulator/) | SCAN and C-SCAN disk scheduling |
| [File Allocation Simulator](./file-allocation-simulator/) | File allocation methods |
| [File Allocation Comparison Tool](./file-allocation-comparison-tool/) | Compare file allocation methods |

### Linux learning
| Project | What it demonstrates |
|---|---|
| [Linux Command Simulator & Learning Tool](./linux-command-simulator-learning-tool/) | Learn common Linux commands in a browser-based environment |

## Run a project

1. Open the folder of the simulator you want to use.
2. Open that folder's `index.html` in a modern browser.
3. Keep the folder structure intact so local CSS, JavaScript, and assets continue to load.
4. Some projects load fonts, icons, or libraries from CDNs and therefore need an internet connection for those resources.

No package manager, compilation, backend, or build command is required for the standalone browser projects.

## What each project contains

Most projects include the following files:

- `index.html` — interface and educational content
- `css/style.css` — project-specific styling
- `js/app.js` — simulator logic
- `README.md` — project overview, features, and concepts
- `MARATHI_GUIDE.md` — beginner-friendly explanation in Marathi
- `assets/site.css` and `assets/site.js` — locally copied visual enhancements

Check the individual folder's README for its exact implementation and limitations.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Optional CDN-hosted libraries, icons, and fonts where used

## Educational notes

- Results are based on the assumptions and simplified models implemented by each simulator.
- Use the included explanations to connect the visual output to the underlying OS concept.
- For assignments or exams, verify algorithm assumptions and calculations against your course material.
- The Marathi guide is intended as a learning aid; the project README and source code provide additional context.

## Maintainer

Created and maintained by [Ashutosh Palhare](https://github.com/ashutoshpalhare).

---

If you find an issue, include the project folder name, the steps to reproduce it, and the expected versus actual result so it can be investigated efficiently.
