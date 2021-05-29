import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import PowerCharts from "fusioncharts/fusioncharts.powercharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, PowerCharts, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "candlestick",
    plotPriceAs: "line",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "APPL ",
        theme: "fusion",
        numberprefix: "$",
        vNumberPrefix: "",
        pyaxisname: "Price",
        vyaxisname: "Volume",
      },
      categories: [
        {
          category: [
            {
              label: "1 month ago",
              x: "1",
            },
            {
              label: "today",
              x: "22",
            },
          ],
        },
      ],
      dataset: [{ data }],
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
