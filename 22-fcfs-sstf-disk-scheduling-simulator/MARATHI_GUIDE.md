# FCFS आणि SSTF Disk Scheduling — सोप्या मराठीत मार्गदर्शक

> उदाहरणांसह समजून घेण्यासाठी हा Guide वाचा.

## 1. मुख्य कल्पना
Hard Disk वर वेगवेगळ्या ठिकाणी डेटा असतो. Disk head ला त्या ठिकाणी जावे लागते. Scheduling algorithm head कोणत्या request कडे आधी जाईल हे ठरवतो.

## 2. सोपे शब्द
FCFS = आलेल्या क्रमाने requests; SSTF = सध्याच्या head position पासून सर्वात जवळची request आधी.

## 3. Simulator वापरा
Initial head position आणि request queue भरा. FCFS व SSTF चालवा आणि head चा प्रवास व एकूण movement तुलना करा.

## 4. उदाहरण
Head 50 वर आहे आणि requests 10, 55, 90 आहेत. SSTF मध्ये 55 हे सर्वात जवळ असल्याने आधी निवडले जाऊ शकते.

## 5. गणना / नियम
Head Movement = पुढील cylinder number आणि सध्याचा cylinder number यांतील absolute difference; Total Movement = सर्व अंतरांची बेरीज.

## 6. मर्यादा
SSTF मध्ये दूरच्या requests ला खूप वाट पाहावी लागू शकते.

## 7. स्वतः तपासा
- Head ने कोणत्या क्रमाने requests पूर्ण केल्या?
- एकाच input वर दुसऱ्या Algorithm चा निकाल कसा वेगळा आहे?
- कमी movement आणि न्याय्य सेवा यात फरक काय?

## 8. नोंद
हा learning simulator आहे. प्रत्यक्ष Disk/Storage hardware आणि Operating System मध्ये आणखी अनेक घटक परिणाम करतात.
