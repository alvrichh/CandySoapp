// Gráfico de Línea
let ctxL = document.getElementById("lineChart");
let myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
        datasets: [{
            label: "Ventas Mensuales",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(105, 0, 132, .2)',
            ],
            borderColor: [
                'rgba(200, 99, 132, .7)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true
    }
});

// Gráfico de Donut para Productos
let ctxPD = document.getElementById("productDonutChart");
let productDonutChart = new Chart(ctxPD, {
    type: 'doughnut',
    data: {
        labels: ["Lavanda", "Rosa Mosqueta", "Aloe Vera", "Coco", "Árbol de Té"],
        datasets: [{
            data: [25, 20, 18, 15, 22],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)'
            ]
        }]
    }
});

// Gráfico de Barras
let ctxB = document.getElementById("barChart");
let myBarChart = new Chart(ctxB, {
    type: 'bar',
    data: {
        labels: ["Lavanda", "Rosa Mosqueta", "Aloe Vera", "Coco", "Árbol de Té"],
        datasets: [{
            label: 'Calificaciones de Clientes',
            data: [4.5, 4.2, 4.8, 4.0, 4.6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
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

// Gráfico de Radar para Calificaciones de Productos
let ctxRR = document.getElementById("ratingRadarChart");
let ratingRadarChart = new Chart(ctxRR, {
    type: 'radar',
    data: {
        labels: ["Lavanda", "Rosa Mosqueta", "Aloe Vera", "Coco", "Árbol de Té"],
        datasets: [{
            label: 'Calificaciones de Productos',
            data: [3.4, 4.5, 5, 3, 2.8],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true
    }
});