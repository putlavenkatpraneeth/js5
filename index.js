

var fruits=['Apple','Banana','Orange'];
console.log(fruits.join( ));//Apple,Banana,Orange

var numbers=[1,2,3,4,5];
console.log(numbers.join("-"));//1_2_3_4_5

var chars=['H','e','l','l','o'];
console.log(chars.join(""));//Hello

var text='JavaScript is awesome';
console.log(text.slice(0,10));//JavaScript

var text='Frontend Development ';
console.log(text.slice(-12,-1));//Development

var sentence='I love learning JavaScript!';
console.log(sentence.slice(7,15));//learning

var date='2024-10-21';
console.log(date.split("-"));//[ '2024', '10', '21' ]

var text='I love JavaScript programming';
text1=text.split(" ");
text2=text1.slice(0,2);
console.log(text2);//[ 'I', 'love' ]

let url='https://www.example.com/path/page.html';
console.log(url.split("/"));//[ 'https:', '', 'www.example.com', 'path', 'page.html' ]