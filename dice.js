function getRandom(min,max){
			return Math.floor(Math.random()*(max-min+1))+min;
		}
		function dice1(){
			var answer=document.getElementById("answer").value;
			if (parseInt(answer)==answer&&parseInt(answer)>=0){
				var diceTimeOne=0;
				var diceTimeTwo=0;
				var diceTimeThree=0;
				var diceTimeFour=0;
				var diceTimeFive=0;
				var diceTimeSix=0;
				for(i=0;i<answer;i++){
					diceTime=getRandom(1,6)
					if (diceTime==1){
						diceTimeOne=parseInt(diceTimeOne)+1
					}
					if (diceTime==2){
						diceTimeTwo=parseInt(diceTimeTwo)+1
					}
					if (diceTime==3){
						diceTimeThree=parseInt(diceTimeThree)+1
					}
					if (diceTime==4){
						diceTimeFour=parseInt(diceTimeFour)+1
					}
					if (diceTime==5){
						diceTimeFive=parseInt(diceTimeFive)+1
					}
					if (diceTime==6){
						diceTimeSix=parseInt(diceTimeSix)+1
					}
					var x=i+1;
					alert("第"+x+"次擲骰子:"+diceTime+"\n"+"目前機率: "+"\n"+"1點機率:"+(diceTimeOne/x)+"\n"+"2點機率:"+(diceTimeTwo/x)+"\n"+"3點機率:"+(diceTimeThree/x)+"\n"+"4點機率:"+(diceTimeFour/x)+"\n"+"5點機率"+(diceTimeFive/x)+"\n"+"6點機率:"+(diceTimeSix/x));
				}
			}
			else{
				alert("你他媽是文盲還是來亂的?"+"\n"+"最好是可以擲"+answer+"次骰子!");
			}
			if (parseInt(answer)==answer&&parseInt(answer)>=0){
			google.charts.load('current', {'packages':['corechart']});
			google.charts.setOnLoadCallback(drawChart);
		}
			function drawChart(){
				var data = google.visualization.arrayToDataTable([
			['點數', '出現機率'],
			['1', (diceTimeOne/x)], ['2', (diceTimeTwo/x)], ['3', (diceTimeThree/x)],
			['4', (diceTimeFour/x)], ['5', (diceTimeFive/x)], ['6', (diceTimeSix/x)],
			]);
			var options = {
			title: '各點出現機率',
			};
			var chart = new google.visualization.PieChart(document.getElementById('piechart'));
			chart.draw(data, options);
			}
		}
		function dice2(){
			var answer=document.getElementById("answer").value;
			if (parseInt(answer)==answer&&parseInt(answer)>=0){
				var diceTimeOne=0;
				var diceTimeTwo=0;
				var diceTimeThree=0;
				var diceTimeFour=0;
				var diceTimeFive=0;
				var diceTimeSix=0;
				for(i=0;i<answer;i++){
					diceTime=getRandom(1,6)
					if (diceTime==1){
						diceTimeOne=parseInt(diceTimeOne)+1
					}
					if (diceTime==2){
						diceTimeTwo=parseInt(diceTimeTwo)+1
					}
					if (diceTime==3){
						diceTimeThree=parseInt(diceTimeThree)+1
					}
					if (diceTime==4){
						diceTimeFour=parseInt(diceTimeFour)+1
					}
					if (diceTime==5){
						diceTimeFive=parseInt(diceTimeFive)+1
					}
					if (diceTime==6){
						diceTimeSix=parseInt(diceTimeSix)+1
					}
					var x=i+1;
				}
			}
			else{
				alert("你他媽是文盲還是來亂的?"+"\n"+"最好是可以擲"+answer+"次骰子!");
			}
			if (parseInt(answer)==answer&&parseInt(answer)>=0){
			alert("總共擲"+x+"次骰子"+"\n"+"各點機率: "+"\n"+"1點機率:"+(diceTimeOne/x)+"\n"+"2點機率:"+(diceTimeTwo/x)+"\n"+"3點機率:"+(diceTimeThree/x)+"\n"+"4點機率:"+(diceTimeFour/x)+"\n"+"5點機率"+(diceTimeFive/x)+"\n"+"6點機率:"+(diceTimeSix/x));
			}
			if (parseInt(answer)==answer&&parseInt(answer)>=0){
			google.charts.load('current', {'packages':['corechart']});
			google.charts.setOnLoadCallback(drawChart);
			}
			function drawChart(){
				var data = google.visualization.arrayToDataTable([
			['點數', '出現機率'],
			['1', (diceTimeOne/x)], ['2', (diceTimeTwo/x)], ['3', (diceTimeThree/x)],
			['4', (diceTimeFour/x)], ['5', (diceTimeFive/x)], ['6', (diceTimeSix/x)],
			]);
			var options = {
			title: '各點出現機率',
			};
			var chart = new google.visualization.PieChart(document.getElementById('piechart'));
			chart.draw(data, options);
			}
		}
