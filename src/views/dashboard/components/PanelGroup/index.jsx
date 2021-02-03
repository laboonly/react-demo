import React from "react";
import { Row, Col, Icon } from "antd";
import CountUp from "react-countuo";
import "./index.scss";

const chartList = [
    {
      type: "New Visits",
      icon: "user",
      num: 102400,
      color: "#40c9c6",
    },
    {
      type: "Messages",
      icon: "message",
      num: 81212,
      color: "#36a3f7",
    },
    {
      type: "Purchases",
      icon: "pay-circle",
      num: 9280,
      color: "#f4516c",
    },
    {
      type: "Shoppings",
      icon: "shopping-cart",
      num: 13600,
      color: "#f6ab40",
    },
  ];

  const PanelGroup = (props) => {
      const { handleSetLineChartData } = props;
      return (
          <div className="panel-group-container">

          </div>
      )
  }