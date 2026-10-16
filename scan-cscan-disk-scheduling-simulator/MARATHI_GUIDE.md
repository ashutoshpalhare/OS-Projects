# SCAN आणि C-SCAN Disk Scheduling — सोप्या मराठीत मार्गदर्शक

> उदाहरणांसह समजून घेण्यासाठी हा Guide वाचा.

## 1. मुख्य कल्पना
SCAN मध्ये Disk Head लिफ्टसारखा एका दिशेने जातो, वाटेतल्या requests पूर्ण करतो आणि मग दिशा बदलतो. C-SCAN मध्ये एका दिशेने सेवा देऊन शेवटी सुरुवातीच्या बाजूला परत येतो.

## 2. सोपे शब्द
Cylinder म्हणजे Disk वरील track position. Direction म्हणजे head कोणत्या दिशेने हलतो. C-SCAN च्या wrap-around प्रवासाची मोजणी simulator च्या नियमांनुसार समजून घ्या.

## 3. Simulator वापरा
Disk range, head position, requests आणि दिशा द्या. SCAN व C-SCAN चालवा आणि सेवा मिळण्याचा क्रम व movement तुलना करा.

## 4. उदाहरण
Head 40 वरून उजवीकडे जात असेल, तर उजवीकडील requests आधी येऊ शकतात; SCAN नंतर डावीकडे परत फिरतो.

## 5. गणना / नियम
Total Head Movement = head ने केलेल्या सर्व हालचालींच्या अंतरांची बेरीज.

## 6. मर्यादा
Head कोणत्या दिशेने सुरू होतो आणि Disk ची शेवटची सीमा काय आहे यावर निकाल बदलतो.

## 7. स्वतः तपासा
- Head ने कोणत्या क्रमाने requests पूर्ण केल्या?
- एकाच input वर दुसऱ्या Algorithm चा निकाल कसा वेगळा आहे?
- कमी movement आणि न्याय्य सेवा यात फरक काय?

## 8. नोंद
हा learning simulator आहे. प्रत्यक्ष Disk/Storage hardware आणि Operating System मध्ये आणखी अनेक घटक परिणाम करतात.
