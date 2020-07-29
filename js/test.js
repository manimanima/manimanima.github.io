// 繰り返し
var count = 0;
while(count < 3){
    count = count + 1;
    count++;
//    alert("while分のテストです.今" + count  + "回目のループです. ");
}

// 繰り返し (for)
for(var i = 0; i < 3; i++){
//    alert("for分のテストです.今" + count  + "回目のループです. ");
}

// 繰り返し(for分と配列を組み合わせた応用例)
var player_hand = ["グー", "チョキ", "パー", "hogehoge"];
for(var i = 0; i < player_hand.length; i++){
//    alert(player_hand[i]);
//}


var judge = -1;
if(judge > 0){
//    alert("judgeは正の数です.");
}　else if (judge < 0){
//    alert("judgeは負の数です.");
}　else if (judge == 0){
//    alert("judgeは0です.");
} else {
//    alert("judgeは数字ではありません.");
}


function hello(language) {
    
    var message = "";
    
    if(language == 1) {
        message = "こんにちは";
    } else if (language == 2){
        message = "Hello";
    } else if (language == 3){
        message = "你好";
    } else if (language == 4){
        message = "안녕하세요";
    }

    alert(message);    
}