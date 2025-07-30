const maintenanceTasks = [
  {
    name: "Oil Change",
    engine: "Both",
    interval: "Every 5,000 miles or 6 months",
    tools: ["14mm socket", "Oil filter wrench", "Torque wrench", "Drain pan", "Funnel"],
    parts: [
      "Toyota Oil Filter 90915-YZZF2",
      "0W-20 Full Synthetic – 5.5 qt (i-Force), 4.8 qt (i-Force Max)"
    ],
    torqueSpecs: ["Oil drain bolt: 30 ft-lbs"],
  },
  {
    name: "Tire Rotation",
    engine: "Both",
    interval: "Every 5,000 miles",
    tools: ["21mm socket", "Torque wrench", "Jack + jack stands or lift"],
    parts: [],
    torqueSpecs: ["Lug nuts: 85 ft-lbs"],
  },
  {
    name: "Engine Air Filter Replacement",
    engine: "Both",
    interval: "Every 15,000–30,000 miles",
    tools: ["None (clips on air box)"],
    parts: ["Toyota Air Filter 17801-77060"],
    torqueSpecs: [],
  },
  {
    name: "Cabin Air Filter Replacement",
    engine: "Both",
    interval: "Every 12,000–15,000 miles",
    tools: ["None (behind glovebox)"],
    parts: ["Toyota Cabin Filter 87139-YZZ20"],
    torqueSpecs: [],
  },
  {
    name: "Transfer Case Fluid Replacement",
    engine: "Both",
    interval: "Every 30,000–60,000 miles",
    tools: ["10mm hex socket", "Torque wrench", "Fluid pump", "Drain pan"],
    parts: ["Toyota Transfer Case Fluid (75W-85 or equivalent, 1.5 qt)"],
    torqueSpecs: [
      "Fill & drain plugs: 27 ft-lbs"
    ],
  },
  {
    name: "Front Differential Fluid Replacement",
    engine: "Both",
    interval: "Every 30,000–60,000 miles",
    tools: ["10mm hex socket", "Torque wrench", "Fluid pump", "Drain pan"],
    parts: ["75W-85 Gear Oil, approx. 1.3 qt"],
    torqueSpecs: [
      "Fill & drain plugs: 27 ft-lbs"
    ],
  },
  {
    name: "Rear Differential Fluid Replacement",
    engine: "Both",
    interval: "Every 30,000–60,000 miles",
    tools: ["24mm socket", "Torque wrench", "Fluid pump", "Drain pan"],
    parts: ["75W-85 Gear Oil, approx. 2.5 qt"],
    torqueSpecs: [
      "Fill & drain plugs: 36 ft-lbs"
    ],
  },
  {
    name: "Brake Fluid Flush",
    engine: "Both",
    interval: "Every 2–3 years",
    tools: ["10mm wrench", "Brake bleeder kit", "Catch bottle", "Assistant (optional)"],
    parts: ["DOT 3 Brake Fluid (1 qt)"],
    torqueSpecs: ["Bleeder screws: Hand tight (~6 ft-lbs)"],
  },
  {
    name: "Spark Plug Replacement",
    engine: "2.4L i-Force",
    interval: "Every 100,000 miles",
    tools: ["10mm socket", "Spark plug socket (14mm or 5/8”)", "Torque wrench"],
    parts: ["Toyota Iridium Plugs 90919-01253 (x4)"],
    torqueSpecs: ["Spark plugs: 15 ft-lbs"],
  },
  {
    name: "Spark Plug Replacement (Hybrid)",
    engine: "i-Force Max",
    interval: "Every 120,000 miles",
    tools: ["10mm socket", "Spark plug socket", "Torque wrench"],
    parts: ["Toyota Iridium Plugs 90919-01289 (x4)"],
    torqueSpecs: ["Spark plugs: 15 ft-lbs"],
  },
  {
    name: "Coolant Replacement",
    engine: "Both",
    interval: "Every 100,000 miles or 10 years, then every 50,000 miles",
    tools: ["Drain pan", "Phillips screwdriver", "Funnel"],
    parts: ["Toyota Super Long Life Coolant (Pink) – Approx. 10 qt"],
    torqueSpecs: [],
  },
];
