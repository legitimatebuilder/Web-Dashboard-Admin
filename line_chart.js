const ctx = document.getElementById('line-chart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Earnings in $',
            data: [2050, 1900, 2100, 1800, 2800, 2000, 2500, 2600, 2450, 1950, 2300, 2900],
            backgroundColor: [
                // 'rgba(85,85,85,1)'
                'rgb(41,155,99)'
            ],
            borderColor: [
                'rgb(41,155,99)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});