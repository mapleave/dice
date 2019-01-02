google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function dicedraw(){var data = google.visualization.arrayToDataTable([
['1', ],['2', ], ['3', ], ['4', ], ['5', ], ['6', ]
]);}
function dice(){
var count = document.getElementById("count").value
while (count > 0) {

count = count - 1;
}
var target=Math.floor((Math.random() * 100) + 1);;
    var dice_results = {1:"0",2:"0",3:"0",4:"0",5:"0",6:"0"};
    sum_1 = 0
    sum_2 = 0
    sum_3 = 0
    sum_4 = 0
    sum_5 = 0
    sum_6 = 0
        dice_result = random.randint(1,6)
        if dice_result == 1:
            sum_1 += 1
            dice_results[dice_result] = sum_1
        elif dice_result == 2:
            sum_2 += 1
            dice_results[dice_result] = sum_2
        elif dice_result == 3:
            sum_3 += 1
            dice_results[dice_result] = sum_3
        elif dice_result == 4:
            sum_4 += 1
            dice_results[dice_result] = sum_4
        elif dice_result == 5:
            sum_5 += 1
            dice_results[dice_result] = sum_5
        else:
            sum_6 += 1
            dice_results[dice_result] = sum_6
    for i in range(1,7):
        print('第{}次'.format(i),dice_results[i])
    print('出現1的次數:{:.2f}'.format(float(sum_1)/enter_number))
    print('出現2的次數:{:.2f}'.format(float(sum_2)/enter_number))
    print('出現3的次數:{:.2f}'.format(float(sum_3)/enter_number))
    print('出現4的次數:{:.2f}'.format(float(sum_4)/enter_number))
    print('出現5的次數:{:.2f}'.format(float(sum_5)/enter_number))
    print('出現6的次數:{:.2f}'.format(float(sum_6)/enter_number))
    
if(document.getElementById("number").value > target){alert("猜小一些");}
else if (document.getElementById("number").value < target){alert("猜大一些");}
alert("出現1的機率:" + dice_results[1] + " is " + person.age + " years old.");
}