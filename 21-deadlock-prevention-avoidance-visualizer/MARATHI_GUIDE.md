# Deadlock Prevention and Avoidance — सोप्या मराठीत मार्गदर्शक

> उदाहरणांसह समजून घेण्यासाठी हा Guide वाचा.

## 1. मुख्य कल्पना
Deadlock म्हणजे Processes एकमेकांची वाट पाहत अडकणे. Prevention मध्ये deadlock होण्याची शक्यता निर्माण करणारी अट मोडली जाते; Avoidance मध्ये Resource देण्यापूर्वी स्थिती सुरक्षित राहील का तपासले जाते.

## 2. सोपे शब्द
Prevention = अडचण निर्माण होऊ न देणे; Avoidance = निर्णय घेण्यापूर्वी सुरक्षितता तपासणे; Safe State = सर्व Processes पूर्ण होऊ शकतील असा क्रम उपलब्ध असणे.

## 3. Simulator वापरा
दिलेल्या scenarios मध्ये Resource request स्वीकारल्यावर स्थिती सुरक्षित राहते का ते तपासा. वेगवेगळ्या उपायांमुळे काय फरक पडतो ते पाहा.

## 4. उदाहरण
एकाच वेळी सर्वांनी एक Resource पकडून दुसरा मागण्याऐवजी Resources ठरावीक क्रमाने मागण्याचा नियम deadlock ची शक्यता कमी करू शकतो.

## 5. गणना / नियम
Banker’s Algorithm सारखी पद्धत request नंतर safe sequence मिळते का तपासू शकते.

## 6. मर्यादा
Prevention व Avoidance एकच नाहीत; एक नियम/अट बदलते, दुसरी request चा सुरक्षित परिणाम तपासते.

## 7. स्वतः तपासा
- Head ने कोणत्या क्रमाने requests पूर्ण केल्या?
- एकाच input वर दुसऱ्या Algorithm चा निकाल कसा वेगळा आहे?
- कमी movement आणि न्याय्य सेवा यात फरक काय?

## 8. नोंद
हा learning simulator आहे. प्रत्यक्ष Disk/Storage hardware आणि Operating System मध्ये आणखी अनेक घटक परिणाम करतात.
