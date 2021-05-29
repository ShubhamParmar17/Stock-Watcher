import React from "react";
import axios from "axios";
import CandleStick from "../components/Charts/Candlestick";

// const url = "https://cloud.iexapis.com/stable/stock/aapl/chart/1m?token=pk_1ed27d35769b4f929d3ea52efe3e920f";

const ohlc = [
  { open: "135.01", high: "135.41", close: "134.39", low: "134.11", volume: "66015804", x: "1" },
  { open: "134.31", high: "135.02", close: "133.58", low: "133.08", volume: "107760097", x: "2" },
  { open: "136.47", high: "137.07", close: "133.48", low: "132.45", volume: "151100953", x: "3" },
  { open: "131.78", high: "133.56", close: "131.46", low: "131.065", volume: "109839466", x: "4" },
  { open: "132.04", high: "134.07", close: "132.54", low: "131.83", volume: "75135100", x: "5" },
  { open: "131.19", high: "131.4899", close: "127.85", low: "126.7", volume: "137564718", x: "6" },
  { open: "129.2", high: "130.45", close: "128.1", low: "127.97", volume: "84000900", x: "7" },
  { open: "127.89", high: "129.75", close: "129.74", low: "127.13", volume: "78128334", x: "8" },
  { open: "130.85", high: "131.2582", close: "130.21", low: "129.475", volume: "78973273", x: "9" },
  { open: "129.41", high: "129.54", close: "126.85", low: "126.81", volume: "88071229", x: "10" },
  { open: "123.5", high: "126.27", close: "125.91", low: "122.77", volume: "126142826", x: "11" },
  { open: "123.4", high: "124.64", close: "122.77", low: "122.25", volume: "112172282", x: "12" },
  { open: "124.58", high: "126.15", close: "124.97", low: "124.26", volume: "105861339", x: "13" },
  { open: "126.25", high: "127.89", close: "127.45", low: "125.85", volume: "81917951", x: "14" },
  { open: "126.82", high: "126.93", close: "126.27", low: "125.17", volume: "74244624", x: "15" },
  { open: "126.56", high: "126.99", close: "124.85", low: "124.78", volume: "63342929", x: "16" },
  { open: "123.16", high: "124.915", close: "124.69", low: "122.86", volume: "92611989", x: "17" },
  { open: "125.23", high: "127.72", close: "127.31", low: "125.1", volume: "76857123", x: "18" },
  { open: "127.82", high: "128", close: "125.43", low: "125.21", volume: "79295436", x: "19" },
  { open: "126.01", high: "127.94", close: "127.1", low: "125.94", volume: "63092945", x: "20" },
  { open: "127.82", high: "128.32", close: "126.9", low: "126.32", volume: "72009482", x: "21" },
  { open: "126.955", high: "127.39", close: "126.85", low: "126.42", volume: "56575920", x: "22" },
];
function Chart() {
  // const [ohlc, setohlc] = React.useState([]);

  // const getData = () => {
  //   axios(url)
  //     .then((response) => {
  //       const data = response.data.map((element, index) => {
  //         let { close, high, low, open, volume } = element;

  //         open = open.toString();
  //         high = high.toString();
  //         low = low.toString();
  //         close = close.toString();
  //         volume = volume.toString();

  //         let newdata = { open, high, low, close, x: index + 1 + "", volume };
  //         return newdata;
  //       });

  //       setohlc(data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // React.useEffect(() => {
  //   getData();
  // });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <CandleStick data={ohlc} />
    </div>
  );
}

export default Chart;
