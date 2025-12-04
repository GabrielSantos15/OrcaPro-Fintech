// Gráfico de Rosca
const ctxDoughnut = document.querySelector("#graficoDespesas").getContext("2d");
new Chart(ctxDoughnut, {
  type: "doughnut",
  data: {
    labels: ["Casa", "Alimentação", "Carro", "Outros"],
    datasets: [
      {
        data: [45.5, 27.3, 18.2, 9.1],
        backgroundColor: ["#3c166d", "#a31baf", "#c72fd4", "#c084fc"],
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  },
  options: {
    cutout: "50%",
    plugins: {
      legend: {
        position: "left",
        labels: { boxWidth: 80, usePointStyle: true, font: { size: 12 } },
      },
    },
  },
});

// Configuração do Gráfico de Linha
const ctxLine = document.getElementById("graficoMovimentacao").getContext("2d");
new Chart(ctxLine, {
  type: "line",
  data: {
    labels: ["Jan", "Fev", "Mar", "Jun", "Jul", "Agos", "Set", "Out", "Nov"],
    datasets: [
      {
        label: "Entradas",
        data: [1700, 1800, 1800, 1800, 1750, 1890, 1890, 1820, 1775],
        borderColor: "#06c54f", // Verde Bootstrap
        backgroundColor: "#06c54f",
        tension: 0, // Linhas retas
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: "Despesas",
        data: [1800, 1300, 2000, 1450, 1900, 1750, 1319, 1870, 1540],
        borderColor: "#e70f0f",
        backgroundColor: "#e70f0f",
        tension: 0,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "#f0f0f0" },
        ticks: { font: { size: 10 } },
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 10 } },
      },
    },
  },
});
