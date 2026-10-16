# FCFS CPU Scheduling — सोप्या मराठीत मार्गदर्शक

> हा Guide अगदी सुरुवातीपासून शिकणाऱ्या विद्यार्थ्यांसाठी आहे. इंग्रजी Technical Words मुद्दाम तसेच ठेवले आहेत.

## 1. हा Project काय शिकवतो?
FCFS म्हणजे First Come First Serve. जशी रांगेत आधी आलेल्या विद्यार्थ्याला आधी संधी मिळते, तसाच आधी आलेला Process CPU आधी वापरतो.

## 2. सोप्या शब्दांत महत्त्वाच्या गोष्टी
Arrival Time (AT) = Process कधी तयार झाला; Burst Time (BT) = CPU ला लागणारा वेळ. Process सुरू झाल्यावर तो पूर्ण होईपर्यंत CPU त्याच्याकडे राहतो.

## 3. Simulator कसा वापरायचा?
1. Process ची AT आणि BT भरा. 2. Run FCFS दाबा. 3. Gantt Chart मध्ये क्रम पहा. 4. Waiting Time आणि Turnaround Time वाचा.

## 4. छोटं उदाहरण
P1: AT=0, BT=4; P2: AT=1, BT=3. P1 आधी चालेल (0–4), मग P2 (4–7). P2 चा Waiting Time=4−1=3.

## 5. लक्षात ठेवण्याची सूत्रे
WT = CT−AT−BT; TAT = CT−AT; CT = Start Time+BT.

## 6. या पद्धतीची मर्यादा
लांब Process आधी आल्यास लहान Process ला जास्त वाट पाहावी लागू शकते. याला Convoy Effect म्हणतात.

## 7. स्वतःला विचारून पाहा
- हा Algorithm कोणता Process आधी निवडतो?
- Input बदलल्यावर परिणाम का बदलतो?
- Gantt Chart मध्ये कोणता Process किती वेळ चालला हे कसे समजते?

## 8. महत्त्वाची नोंद
हा शैक्षणिक Simulator आहे. तो Operating System च्या कल्पना समजावण्यासाठी बनवला आहे; खऱ्या Computer मधील OS चे सर्व तपशील तो दाखवत नाही.
