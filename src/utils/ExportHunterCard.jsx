import { weaponLineGroups } from '../data/weaponLines';
import { exportShortName } from '../data/exportShortName';
import { pvpNoPercent } from '../data/pvpLines';
import getImageUrl from '../utils/getImageUrl';

function ExportHunterCard({ saveGearData = {}, selectedClass }) {
	const gearOrder = ['Weapon', 'Chestplate', 'Glove', 'Boot', 'Helmet', 'Necklace', 'Ring', 'Belt'];
	const groupOrder = Object.keys(weaponLineGroups);
	const getShortName = (name) => exportShortName[name] || name;

	/* ---------- Collect Total Stats ---------- */
	const totalStats = {};

	Object.values(saveGearData).forEach((gear) => {
		if (!gear) return;

		// Normal lines
		gear.lines?.forEach((line) => {
			if (line.line && line.value) {
				totalStats[line.line] = (totalStats[line.line] || 0) + Number(line.value);
			}
		});

		// Rune line
		if (gear.runeEffect && gear.runeValue) {
			totalStats[gear.runeEffect] = (totalStats[gear.runeEffect] || 0) + Number(gear.runeValue);
		}

		// Special line
		if (gear.specialLine && gear.specialLineValue) {
			totalStats[gear.specialLine] = (totalStats[gear.specialLine] || 0) + Number(gear.specialLineValue);
		}

		// Unique line
		if (gear.uniqueLine && gear.uniqueLineValue) {
			totalStats[gear.uniqueLine] = (totalStats[gear.uniqueLine] || 0) + Number(gear.uniqueLineValue);
		}
	});

	/* ---------- Map lines to groups ---------- */
	const lineToGroup = {};
	Object.entries(weaponLineGroups).forEach(([group, lines]) => {
		lines.forEach(line => {
			lineToGroup[line] = group;
		});
	});

	const statsByGroup = {
		Maxable: [],
		Offense: [],
		Defense: [],
		Utility: [],
		Misc: [],
		Special: [],
	};

	Object.entries(totalStats).forEach(([line, value]) => {
		const group = lineToGroup[line];
		const displayValue = pvpNoPercent.includes(line) ? value : `${value}%`;

		statsByGroup[group].push({
			key: line,
			label: getShortName(line),
			value: displayValue
		});
	});

	/* ---------- Render ---------- */
	function getExportGearImage(slot, selectedClass) {
		const gear = saveGearData[slot];
		let fileName = "";

		if (gear) {
			const { type = "", wbSubType = "", vwbSubType = "", uniqueSubType = "", pvpWeaponSubType = "", pvpHelmetSubType = "" } = gear;

			// Weapon logic
			if (slot === "Weapon") {
				if (type === 'wb' || type === 'twb') {
					fileName = `${type}${wbSubType}${slot}${selectedClass || ""}.png`;
				} else if (type === 'vwb') {
					fileName = `${type}${vwbSubType}${slot}${selectedClass || ""}.png`;
				} else if (['2v2', 'champion', 'challenger'].includes(type)) {
					fileName = `${type}${pvpWeaponSubType}${slot}${selectedClass || ""}.png`;
				} else if (type) {
					fileName = `${type}${slot}${selectedClass || ""}.png`;
				}
			} else {
				// Non-weapon
				if (type === "chaos unique" || type === "abyss unique") {
					fileName = `${type}${uniqueSubType}${slot}.png`;
				} else if (['2v2', 'champion', 'challenger'].includes(type) && slot === "Helmet") {
					fileName = `${type}${pvpHelmetSubType}${slot}.png`;
				} else if (type) {
					fileName = `${type}${slot}.png`;
				}
			}
		} else {
			// No gear fallback
			fileName = slot === "Weapon"
				? `${slot}${selectedClass || ""}.png`
				: `${slot}.png`;
		}

		return getImageUrl(fileName);
	}

	return (
		<div className="export-container">
			{/* ---------- Gear Display ---------- */}
			<div className="export-gear-container">
				{gearOrder.map((slot) => {
					const gear = saveGearData[slot];
					const imgUrl = getExportGearImage(slot, selectedClass);

					return (
						<div key={slot} className="export-gear-card">
							<img src={imgUrl} alt={slot} />

							<ul>
								{/* Rune line */}
								{gear?.runeEffect && gear?.runeValue && (
									<li style={{ marginBottom: "15px" }}>
										{getShortName(gear.runeEffect)} {gear.runeValue}%
									</li>
								)}

								{/* Special line */}
								{gear?.specialLine && gear?.specialLineValue && (
									<li style={{ marginBottom: "15px", color: "#FF3FFB" }}>
										{getShortName(gear.specialLine)} {gear.specialLineValue}%
									</li>
								)}

								{/* Unique line */}
								{gear?.uniqueLine && gear?.uniqueLineValue && (
									<li style={{ marginBottom: "15px", color: "#f4d6b4ff" }}>
										{getShortName(gear.uniqueLine)} {gear.uniqueLineValue}%
									</li>
								)}

								{/* Normal lines */}
								{gear?.lines?.map((line, idx) => {
									const noPercent = pvpNoPercent.includes(line.line);
									const displayValue = noPercent ? line.value : `${line.value}%`;

									return (
										<li key={idx} style={{ color: "#7bc4ffff" }}>
											{getShortName(line.line)}: {displayValue}
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div>

			{/* ---------- Total Stats ---------- */}
			<div className="export-stats-container">
				<h2 className="export-stats-heading">Total Stats</h2>

				{groupOrder.map((groupName) => {
					const statsList = statsByGroup[groupName];
					if (!statsList.length) return null;

					const order = weaponLineGroups[groupName];
					const sortedStats = [...statsList].sort((a, b) => {
						const aIdx = order.indexOf(a.key);
						const bIdx = order.indexOf(b.key);
						return (aIdx === -1 ? Infinity : aIdx) - (bIdx === -1 ? Infinity : bIdx);
					});

					return (
						<div className="export-stats-group" key={groupName}>
							<h3 className="export-stats-group-heading">{groupName}</h3>
							<div className="export-stats-list">
								{sortedStats.map((stat) => (
									<span className="export-stats-item" key={stat.key}>
										{stat.label}: {stat.value}
									</span>
								))}
							</div>
						</div>
					);
				})}
			</div>

			{/* ---------- Footer ---------- */}
			<div className="export-footer">
				<h3>Create at <strong>thegoddess-ehthelper.netlify.app</strong></h3>
			</div>
		</div>
	);
}

export default ExportHunterCard;
