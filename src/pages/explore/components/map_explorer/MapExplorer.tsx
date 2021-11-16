import VietnamGeodata from "../../../../assets/geodata/geodata.json";

import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
} from "react-simple-maps";

import { MapExplorerProps } from "../../../../util/types/Interface";

import { useDispatch } from "react-redux";
import {
    updateLocation,
    updateName,
} from "../../../../util/state/slice/explorerSlice";
import { slugifyCategory } from "../../../../util/ultility/UtilityFunctions";

const MapExplorer: React.FC<MapExplorerProps> = (props) => {
    const { setTooltip } = props;

    const explorerDispatch = useDispatch();

    const handleClick = (geographyData: any) => () => {
        explorerDispatch(
            updateLocation(slugifyCategory(geographyData.VARNAME_1))
        );
        explorerDispatch(updateName(geographyData.NAME_1));
    };

    const handleMouseEnter = (geographyData: any) => () => {
        const { TYPE_1, NAME_1 } = geographyData;
        setTooltip(`${TYPE_1} ${NAME_1}, Việt Nam`);
    };

    const handleMouseLeave = (geographyData: any) => () => {
        setTooltip("");
    };

    return (
        <ComposableMap
            data-tip=""
            projectionConfig={{ scale: 2370 }}
            projection={"geoMercator"}
            width={355}
            height={700}
            style={{
                width: "100%",
                height: "auto",
            }}
        >
            <ZoomableGroup center={[105.85, 16.3]} minZoom={1} maxZoom={2}>
                <Geographies geography={VietnamGeodata}>
                    {({ geographies }) => {
                        return geographies.map(
                            (geography, index) =>
                                geography !== "ATA" && (
                                    <Geography
                                        key={index}
                                        geography={geography}
                                        onMouseEnter={handleMouseEnter(
                                            geography.properties
                                        )}
                                        onClick={handleClick(
                                            geography.properties
                                        )}
                                        onMouseLeave={handleMouseLeave(
                                            geography.properties
                                        )}
                                        style={{
                                            default: {
                                                fill: "#ffffff",
                                                stroke: "#121212",
                                                strokeWidth: "0.5px",
                                                outline: "none",
                                            },
                                            hover: {
                                                fill: "#121212",
                                            },
                                        }}
                                    />
                                )
                        );
                    }}
                </Geographies>
            </ZoomableGroup>
        </ComposableMap>
    );
};

export default MapExplorer;
