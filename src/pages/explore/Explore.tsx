import style from "./Explore.module.scss";
import React, { Fragment, useState } from "react";

import MapExplorer from "./components/MapExplorer";
import ReactTooltip from "react-tooltip";

const Explore = () => {
	const [tooltip, updateTooltip] = useState<string>("");

	const [selectedLocation, updateLocation] = useState<string>("Ha Noi");

	return (
		<Fragment>
			<section className={style.explore}>
				<div className={style.header}>
					<h1>Khám phá</h1>
					<p>
						Cùng Uniify tìm hiểu và khám phá những trường Đại học
						tại Việt Nam
					</p>
				</div>
				<section className={style.explorer}>
					<div className={style.map}>
						<MapExplorer
							setTooltip={updateTooltip}
							setSelectedLocation={updateLocation}
						/>
						<ReactTooltip>{tooltip}</ReactTooltip>
					</div>
					<div className={style.info}>
						<h1>{selectedLocation}</h1>
					</div>
				</section>
			</section>
		</Fragment>
	);
};

export default Explore;
