import React from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

function MovementGraph ()
{
    const windBootValues = [3,4,5,6,7,8,9,10];
    let movementSpd = 0;

    function calcMovementReq (windBootValues, maxAmp)
    {
        movementSpd = (maxAmp / (windBootValues / 100)).toFixed(1);
        return movementSpd;
    }

    function CustomTooltip({ active, payload, label }) {
		if (active && payload && payload.length) {
			return (
				<div style={{ backgroundColor: "#2a2a40", padding: "8px", borderRadius: "5px", textAlign: "center" }}>
				<p style={{ margin: "2", fontWeight: "bold" }}>{label}% Unique Line</p>
                <p style={{ margin: "0", color: payload[1].color }}>Abyss Movement: {payload[1].value}%</p>
                <p style={{ margin: "0", color: payload[0].color }}>Chaos Movement: {payload[0].value}%</p>
				</div>
			);
		}
		return null;
    }

    const data = windBootValues.map((wb) => ({
        windBoot: wb,
        max30: calcMovementReq(wb, 30),
        max40: calcMovementReq(wb, 40),
    }));


    return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="windBoot" label={{ value: "Unique Line %", position: "insideBottom", offset: -10 }} />
        <YAxis label={{ value: "Movement Speed %", angle: -90, position: "insideLeft", dy: 75}} />
        <Tooltip content={<CustomTooltip/>} />
        <Legend verticalAlign="top" height={36} />

        {/* Line for 30% max amp */}
        <Line type="monotone" dataKey="max30" stroke="#06d6a0" strokeWidth={2} name="Chaos Wind Boot" />

        {/* Line for 40% max amp */}
        <Line type="monotone" dataKey="max40" stroke="#ffd166" strokeWidth={2} name="Abyss Wind Boot" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default MovementGraph;

