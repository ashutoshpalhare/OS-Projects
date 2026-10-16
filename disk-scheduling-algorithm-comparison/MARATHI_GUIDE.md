# Disk Scheduling Algorithm Comparison — सोप्या मराठीत मार्गदर्शक

> उदाहरणांसह समजून घेण्यासाठी हा Guide वाचा.

## 1. मुख्य कल्पना
हा Project Disk head वेगवेगळ्या scheduling पद्धतींनी किती अंतर चालतो हे तुलना करतो. कमी head movement म्हणजे काही परिस्थितीत कमी शोध वेळ.

## 2. सोपे शब्द
FCFS, SSTF, SCAN, C-SCAN, LOOK आणि C-LOOK requests चा क्रम वेगवेगळ्या प्रकारे ठरवतात.

## 3. Simulator वापरा
सर्व algorithms साठी एकच request list, head position आणि disk range ठेवा. Total Movement आणि request order तुलना करा.

## 4. उदाहरण
एका input वर SSTF चे movement 70 आणि FCFS चे 120 असेल, तर त्या input साठी SSTF कमी प्रवास करतो.

## 5. गणना / नियम
Total Movement = head ने केलेल्या प्रत्येक टप्प्याच्या अंतरांची बेरीज.

## 6. मर्यादा
कमी movement हाच एकमेव निकष नाही; fairness आणि requests किती वेळ थांबतात हेही महत्त्वाचे आहे.

## 7. स्वतः तपासा
- Head ने कोणत्या क्रमाने requests पूर्ण केल्या?
- एकाच input वर दुसऱ्या Algorithm चा निकाल कसा वेगळा आहे?
- कमी movement आणि न्याय्य सेवा यात फरक काय?

## 8. नोंद
हा learning simulator आहे. प्रत्यक्ष Disk/Storage hardware आणि Operating System मध्ये आणखी अनेक घटक परिणाम करतात.
