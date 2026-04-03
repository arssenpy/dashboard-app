export const getUsersStats = async () => {
  return {
    stats: [
      { title: "Total users:", value: 86 },
      { title: "Admins:", value: 2 },
      { title: "Today users:", value: 12 },
      { title: "Income", value: "+1000" },
    ],
    chart: [
      { name: "1d", value: 20 },
      { name: "10d", value: 42 },
      { name: "20d", value: 66 },
      { name: "30d", value: 68 },
    ],
  };
};
