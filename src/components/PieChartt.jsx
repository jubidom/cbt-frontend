import { PieChart, Pie, Cell, Label, LabelList } from "recharts";

// Data with pre-calculated percentages
const data = [
  { name: "A", value: 40, percent: 40 },
  { name: "B", value: 30, percent: 30 },
  { name: "C", value: 20, percent: 20 },
  { name: "D", value: 10, percent: 10 },
];

// Data with original values and a function to calculate percentages for display
const dataWithCalculatedPercents = [
  { name: "A", value: 40 },
  { name: "B", value: 30 },
  { name: "C", value: 20 },
  { name: "D", value: 10 },
];

const total = dataWithCalculatedPercents.reduce(
  (sum, { value }) => sum + value,
  0
);

const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent }) => {
  const radius = outerRadius + 10;
  const x = cx + radius * Math.cos(-midAngle);
  const y = cy + radius * Math.sin(-midAngle);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={midAngle < Math.PI / 2 ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartt = ({ className }) => (
  <PieChart width={400} height={200}>
    {/* Option 1: Using a custom label function */}
    <Pie
      data={dataWithCalculatedPercents}
      dataKey="value"
      label={renderCustomizedLabel}
      cx="50%"
      cy="50%"
      outerRadius={100}
      className={className}
    >
      <Cell key="cell-0" fill="#8884d8" />
      <Cell key="cell-1" fill="#82ca9d" />
      <Cell key="cell-2" fill="#ffc658" />
    </Pie>
    <LabelList />

    {/* Option 2: Using pre-calculated percentages */}
    <Pie
      data={data}
      dataKey="value"
      innerRadius={70}
      outerRadius={100}
      cx="50%"
      cy="50%"
    >
      <LabelList
        dataKey="percent"
        position="inside"
        formatText={(value) => `${value}%`}
      />
    </Pie>
  </PieChart>
);

export default PieChartt;
