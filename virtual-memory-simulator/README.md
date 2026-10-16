# Project 15 – Virtual Memory Simulator

A browser-based Operating Systems learning tool demonstrating virtual-to-physical address translation using pages, frames and a page table.

## Features
- Configurable page size
- Configurable number of virtual pages
- Configurable physical frames
- Editable page table
- Virtual address translation
- Page number and offset calculation
- Physical frame lookup
- Physical address calculation
- Page-not-present / page fault indication
- Memory map table
- Example and Reset controls
- Responsive UI
- Dark mode

## Address Translation
For virtual address VA and page size S:

Page Number = floor(VA / S)  
Offset = VA mod S  
Physical Address = Frame Number × S + Offset

## Example
Page Size: 100  
Virtual Pages: 8  
Physical Frames: 4  
Example mapping: Page 0 → Frame 0, Page 1 → Frame 3, Page 2 → Frame 1, Page 3 → Frame 2, Page 4 → Frame 0, Page 5 → Frame 1, Page 6 → Frame 3, Page 7 → Frame 0.

## Technologies
HTML5, CSS3, JavaScript, Google Fonts CDN and Lucide Icons CDN.

## Project Structure
15-virtual-memory-simulator/
- index.html
- README.md
- css/style.css
- js/app.js

## Educational Objective
Students can understand virtual addresses, pages, offsets, page tables, physical frames and the basic address translation process.

## How to Run
Open index.html in a modern browser. No installation or backend is required.