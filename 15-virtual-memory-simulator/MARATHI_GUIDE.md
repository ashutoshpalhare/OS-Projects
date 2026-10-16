# Virtual Memory Simulator — सोप्या मराठीत मार्गदर्शक

> 15 वर्षांच्या विद्यार्थ्यालाही समजेल अशा भाषेत.

## 1. हा Project काय शिकवतो?
Virtual Memory मुळे Program ला RAM पेक्षा मोठी memory उपलब्ध असल्यासारखे काम करता येते. गरजेनुसार काही Pages RAM मध्ये आणि काही storage वर असू शकतात.

## 2. सोपे शब्द
Virtual Address म्हणजे Program वापरत असलेला पत्ता; Physical Address म्हणजे RAM मधील प्रत्यक्ष पत्ता; Page Table दोघांमधील mapping ठेवते.

## 3. वापरण्याची पद्धत
Virtual address किंवा Page number द्या, Page Table/Frames मध्ये mapping शोधा आणि Page Fault किंवा address translation परिणाम पहा.

## 4. उदाहरण
Page Table मध्ये Page 2 साठी Frame 5 लिहिले असेल, तर Page 2 चा डेटा RAM मधील Frame 5 मध्ये आहे.

## 5. लक्षात ठेवण्यासारखे
Page Number आणि Offset मिळून Virtual Address बनतो; नेमकी गणना Simulator च्या inputs वर अवलंबून असते.

## 6. मर्यादा
Virtual Memory म्हणजे अतिरिक्त RAM तयार करणे नव्हे; storage वापरल्यास RAM पेक्षा खूप धीमे होऊ शकते.

## 7. स्वतः तपासा
- Frames ची संख्या बदलल्यावर काय होते?
- कोणता Page बाहेर काढला गेला आणि का?
- दोन Algorithms चा निकाल वेगळा का असू शकतो?

## 8. लक्षात ठेवा
हा प्रात्यक्षिकासाठीचा Simulator आहे. स्क्रीनवरील परिणाम समजून घेणे हा उद्देश आहे.
