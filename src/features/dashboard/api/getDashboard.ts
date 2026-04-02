export const getDashboardData = async () => {
  return {
    stats: [
      { title: "Users", value: 86 },
      { title: "Revenue", value: "$13400" },
      { title: "Orders", value: 12 },
      { title: "Growth", value: "+18%" },
    ],
    admins: [
      {
        name: "Patrick Bateman",
        email: "PatrickBateman@gmail.com",
        status: "online",
      },
      {
        name: "Dexter Morgan",
        email: "DexterMorgan@gmail.com",
        status: "offline",
      },
    ],
    chart: [
      { name: "1d", value: 6 },
      { name: "10d", value: 20 },
      { name: "20d", value: 7 },
      { name: "30d", value: 36 },
    ],
    activity: [
      { id: 1, text: "User joined" },
      { id: 2, text: "Dexter online" },
    ],
  };
};
