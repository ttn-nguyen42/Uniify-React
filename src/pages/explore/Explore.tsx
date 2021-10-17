import style from "./Explore.module.scss";
import { Fragment, useState, useEffect } from "react";

import MapExplorer from "./components/map_explorer/MapExplorer";
import InfoExplorer from "./components/info_explorer/InfoExplorer";
import GlobalExplorer from "./components/global_explorer/GlobalExplorer";

import ReactTooltip from "react-tooltip";

import { useSelector } from "react-redux";
import { RootState } from "../../util/state/store/globalStore";

const Explore = () => {
	const explorerSelector = useSelector((state: RootState) => state.explorer);
	const { namePunctuation, location } = explorerSelector;

	useEffect(() => {
		console.log(location);
	}, [location]);

	const [tooltip, updateTooltip] = useState<string>("");

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
						<MapExplorer setTooltip={updateTooltip} />
						<ReactTooltip>{tooltip}</ReactTooltip>
					</div>
					<div className={style.info}>
						<section className={style["info-header"]}>
							<h2>Tại {namePunctuation}</h2>
							<p>
								Các trường Đại học tổ chức giảng dạy tại{" "}
								{namePunctuation}
							</p>
						</section>
                        <InfoExplorer />
					</div>
				</section>
                <GlobalExplorer />
			</section>
		</Fragment>
	);
};

export default Explore;
