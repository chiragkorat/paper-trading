import React from "react";
import { render } from "react-dom";
import moment from "moment";
import { CRYPTO_COMPARE } from "../keys";
import '../app.css'
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

import {
  XYPlot,
  Hint,
  LineSeries,
  FlexibleXYPlot,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  AreaSeries
} from "react-vis";
import Sidebar from "./Sidebar";

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    times: [],
    high: [],
    low: [],
    chartData: [],
    query: "BTC",
    leaderboard: [],
    addressData: "",
    symbol: "",
    allDetails: []
  };

  componentDidMount() {
    this.loadChartData();

  }

  loadChartData = async () => {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/blockchain/histo/day?fsym=${this.state.query}&api_key=${CRYPTO_COMPARE}&limit=30`
    );
    const data = await response.json();
    const bulkData = data.Data.Data;
    const dataArray = [];
    {
      //this needs to be updated to time, active_addresses, average_transaction_value, current_supply, new_addresses,
      // symbol, transaction_count, transaction_count_all_time
      // bulkData.map((y) =>
      //   dataArray.push({
      //     time: y.time,
      //     active_addresses: y.active_addresses,
      //     average_transaction_value: y.average_transaction_value,
      //     current_supply: y.current_supply,
      //     symbol: y.symbol,
      //     transaction_count: y.transaction_count,
      //     transaction_count_all_time: y.transaction_count_all_time
      //   })
      // );
      bulkData.map((y) =>
        dataArray.push({
          x: y.time * 1000,
          y: y.transaction_count * y.average_transaction_value
        })
      );
    }
    this.setState({ chartData: dataArray });
    this.setState({ symbol: this.state.query });
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };

  sell_data = (data) => {
    this.setState({
      allDetails: [...this.state.allDetails, { type: 'sell', value: data }]
    })
  }
  buy_data = (data) => {
    this.setState({
      allDetails: [...this.state.allDetails, { type: 'buy', value: data }]
    })
  }
  render() {
    const { chartData, query, addressData, symbol, allDetails } = this.state;

    return (
      <div>
        <div className="inputDiv">

          <TradingViewEmbed
            widgetType={widgetType.TICKER_TAPE}
            widgetConfig={{
              showSymbolLogo: true,
              isTransparent: true,
              displayMode: "adaptive",
              colorTheme: "light",
              autosize: true,
              symbols: [
                // {
                //   proName: "BITSTAMP:ETHUSD",
                //   title: "ETH/USD"
                // },
                // {
                //   proName: "BITSTAMP:BTCUSD",
                //   title: "BTC/USD"
                // },
                // {
                //   proName: "BINANCE:BNBUSDT",
                //   title: "BNB/USDT"
                // },
                {
                  proName: "BINANCE:ADAUSD",
                  title: "ADA/USD"
                },
                // {
                //   proName: "BINANCE:DOTUSDT",
                //   title: "DOT/USDT"
                // },
                // {
                //   proName: "UNISWAP:UNIUSDT",
                //   title: "UNI/USDT"
                // }
              ]
            }}
          />
        </div>
        <div className="charty">
          {query.length > 2 ? (
            <TradingViewEmbed
              widgetType={widgetType.ADVANCED_CHART}
              widgetConfig={{
                interval: "1D",
                colorTheme: "light",
                width: "100%",
                symbol: "ADA/USD",
                studies: [
                  // "MACD@tv-basicstudies",
                  // "StochasticRSI@tv-basicstudies",
                  "TripleEMA@tv-basicstudies"
                ]
              }}
            />
          ) : (
            ""
          )}

          <div className="taChart">
            <Sidebar sell={this.sell_data} buy={this.buy_data} />
          </div>
        </div>
        {/* {chartData.map((x) => (
          <Chartf
            key={x.x}
            time={x.x}
            symbol={x.key}
            active_addresses={x.y}
          />
        ))} */}
        {
          allDetails.reverse().map((details) => {
            return details.type == 'buy' ?
              <p style={{ backgroundColor: details.type == 'buy' ? '#92d2cc' : '#f7a8a7' }} className="ps-5 p-1 w-75 text-light "><span></span>You Bought {details.value} Units in {(Math.round(details.value * 0.39)).toFixed(2)} Price</p>
              :
              <p style={{ backgroundColor: details.type == 'buy' ? '#92d2cc' : '#f7a8a7' }} className="ps-5 p-1 w-75 text-light "><span></span>You Sold {details.value} Units in {Math.round(details.value * 0.39).toFixed(2)} Price</p>
          }
          )
        }
      </div>
    );
  }
}

const Chart = (props) => {
  return (
    <div>
      <div className="chart">
        <p className="chart-data" key={props.time}>
          {"time" + props.time}
        </p>
        <p className="chart-data" key={props.active_addresses}>
          {"active addresses" + props.active_addresses}
        </p>
        {/* <p className="chart-data">{moment(props.time * 1000).format("L")}</p>
        <p className="chart-data">{'Average Transaction ' + props.average_transaction_value}</p>
        <p className="chart-data">{'Active Addresses ' + props.active_addresses}</p>
        <p className="chart-data">{'Current Supply ' + props.current_supply}</p>
        <p className="chart-data">{'Transaction Count ' + props.transaction_count}</p>
        <p className="chart-data">{'Transaction Count All Time ' + props.transaction_count_all_time}</p> */}
      </div>
    </div>
  );
};

const Leader = (props) => {
  return (
    <div className="leaderItem">
      <a href={props.url} target="#">
        <img src={props.logo} alt={props.symbol} className="logo" />
      </a>
      <p className="leaderText">{props.symbol}</p>
      <p className="leaderText">{props.price}</p>
    </div>
  );
};

const HoverHint = ({ active, data, query, symbol }) => (
  <div className={`nonActive ${active ? "active" : ""}`}>
    <p className="hoverData">
      {data.length > 1
        ? query
        : symbol.toUpperCase() +
        "  - Raw Averaged Volume (Transactions * Average Value $USD)"}
    </p>
    <p className="hoverData">
      {data.length < 1 ? "" : data.time + " - " + formatter.format(data.price)}{" "}
    </p>
    {/* <p className="hoverData">{data.length > 1 ? "Number of Addresses" + data.price : data.price}</p> */}
  </div>
);

export default Dashboard;
