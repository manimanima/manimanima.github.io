// htmlからグラフを取得する要素(Canvas)を取得する
var ctx = document.getElementById('bar').getContext('2d');

var barChart = new Chart(ctx, {
   type: 'bar', 
    data: {
        labels: ['Red', 'Blue', 'Green', 'hogehoge', 'hogehoge2'],
        datasets: [
            {
                type: 'bar',
                label: 'hogehoge',
                data: [21, 31, 53, 5, 100, 50],
                backgroundColor: [
                    'rgba(255, 99, 132, 0, 2)',
                    'rgba(54, 162, 235, 0, 2)',
                    'rgba(255, 206, 192, 0, 2)',
                    'rgba(30, 1, 25, 0, 2)',
                    'rgba(25, 206, 30, 0, 2)',
                    'rgba(250, 20, 100, 0, 2)',
                ]
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});