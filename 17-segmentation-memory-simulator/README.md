# Project 17 – Segmentation Memory Simulator

## Objective
An interactive Operating Systems simulator that demonstrates memory segmentation and logical-to-physical address translation.

## Features
- Editable segment table with segment name, base and limit
- Logical address input using segment number and offset
- Address validation against segment limits
- Physical address calculation
- Segmentation fault demonstration
- Physical memory map
- Translation success and fault counters
- Example data and responsive dark mode

## Algorithm
1. Select the segment table entry using the segment number.
2. Read its Base and Limit.
3. Check whether Offset is non-negative and Offset < Limit.
4. If the check fails, report a segmentation fault.
5. If valid, calculate Physical Address = Base + Offset.
6. Display the translated physical address and update statistics.

## Key Formulas
- Logical Address = (Segment Number, Offset)
- Valid address condition: 0 ≤ Offset < Limit
- Physical Address = Base + Offset

## Technologies
HTML5, CSS3, JavaScript, Google Fonts CDN and Lucide Icons CDN.

## Folder Structure
17-segmentation-memory-simulator/
- index.html
- README.md
- css/style.css
- js/app.js

## Example
Segment S1 Data has Base = 300 and Limit = 80. For Offset = 30:
Physical Address = 300 + 30 = 330.

## Educational Use
The project helps students understand segment tables, base/limit registers, address translation and segmentation faults through direct interaction.
