import React, { Component } from "react";
import { Work } from "@realsee/five";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import { compose } from "@wordpress/compose";
import { withFetchWork } from "./withFetchWork";
import { withWindowDimensions } from "./withWindowDimensions";
import { ModeController } from "./ModeController";

/** work.json 的数据 URL */
const workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/4e18246c206ba031abf00ee5028920e1/work.json";

const FiveProvider = createFiveProvider();

const App = compose(
  withFetchWork(workURL),
  withWindowDimensions()
)(class extends Component<{work: Work, windowDimensions: { width: number, height: number }}> {
  render() {
    const { work, windowDimensions } = this.props;
    return <FiveProvider initialWork={work}>
      <FiveCanvas width={windowDimensions.width} height={windowDimensions.height}/>
      <ModeController/>
    </FiveProvider>;
  }
});


export { App };