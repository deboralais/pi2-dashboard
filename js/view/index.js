const abrirSidebar = () => {
  const aside = document.querySelector("aside");

  // Verifica se a barra lateral está atualmente visível ou oculta
  if (aside.style.display === 'none' || aside.style.display === '') {
    // Se estiver oculta, torna-a visível
    aside.style.display = "block";
    console.log("block");
  } else {
    // Se estiver visível, oculta-a
    aside.style.display = "none";
    console.log('none');
  }
};

// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [10, 8, 6, 4, 2],
      name: "Dependencias"
    }
  ],
  chart: {
    type: "bar",
    background: "transparent",
    toolbar: {
      show: false
    }
  },
  colors: ["#2962ff", "#d50000", "#2e7d32", "#ff6d00", "#583cb3"],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%"
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 1
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true
      }
    },
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  legend: {
    labels: {
      colors: "#f5f7ff"
    },
    show: true,
    position: "top"
  },
  stroke: {
    colors: ["transparent"],
    show: true,
    width: 2
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark"
  },
  xaxis: {
    categories: ["cat1", "cat2", "cat3", "cat4", "cat5"],
    title: {
      style: {
        color: "#FFFFFF"
      }
    },
    axisBorder: {
      show: true,
      color: "#55596e"
    },
    axisTicks: {
      show: true,
      color: "#55596e"
    },
    labels: {
      style: {
        colors: "#f5f7ff"
      }
    }
  },
  yaxis: {
    title: {
      text: "Count",
      style: {
        color: "#f5f7ff"
      }
    },
    axisBorder: {
      color: "#55596e",
      show: true
    },
    axisTicks: {
      color: "#55596e",
      show: true
    },
    labels: {
      style: {
        colors: "#f5f7ff"
      }
    }
  }
};

const barChart = new ApexCharts(
  document.querySelector("#bar-chart"),
  barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: "Purchase Orders",
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: "Sales Orders",
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ],
  chart: {
    type: "area",
    background: "transparent",
    height: 350,
    stacked: false,
    toolbar: {
      show: false
    }
  },
  colors: ["#00ab57", "#d50000"],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  dataLabels: {
    enabled: false
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: "vertical"
    },
    type: "gradient"
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true
      }
    },
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  legend: {
    labels: {
      colors: "#f5f7ff"
    },
    show: true,
    position: "top"
  },
  markers: {
    size: 6,
    strokeColors: "#1b2635",
    strokeWidth: 3
  },
  stroke: {
    curve: "smooth"
  },
  xaxis: {
    axisBorder: {
      color: "#55596e",
      show: true
    },
    axisTicks: {
      color: "#55596e",
      show: true
    },
    labels: {
      offsetY: 5,
      style: {
        colors: "#f5f7ff"
      }
    }
  },
  yaxis: [
    {
      title: {
        text: "Purchase Orders",
        style: {
          color: "#f5f7ff"
        }
      },
      labels: {
        style: {
          colors: ["#f5f7ff"]
        }
      }
    },
    {
      opposite: true,
      title: {
        text: "Sales Orders",
        style: {
          color: "#f5f7ff"
        }
      },
      labels: {
        style: {
          colors: ["#f5f7ff"]
        }
      }
    }
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark"
  }
};

/* const areaChart = new ApexCharts(
  document.querySelector("#area-chart"),
  areaChartOptions
);
areaChart.render(); */


var optionDonut = {
  chart: {
      type: 'donut',
      width: '100%',
      height: 400
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      customScale: 0.8,
      donut: {
        size: '75%',
      },
      offsetY: 20,
    },
    stroke: {
      colors: undefined
    }
  },
  colors: ["#2962ff", "#d50000", "#2e7d32", "#ff6d00", "#583cb3"],
  title: {
    text: 'Department Sales',
    style: {
      fontSize: '19px',
      color: "#FFFFFF"
    }
  },
  series: [21, 23, 19, 14, 6],
  labels: ['Clothing', 'Food Products', 'Electronics', 'Kitchen Utility', 'Gardening'],
  legend: {
    labels: {
      colors: "#FFFFFF"
    },
    position: 'left',
    offsetY: 80
  }
}

var donut = new ApexCharts(
  document.querySelector("#donut"),
  optionDonut
)
donut.render();