import React from "react";
import Header from "../Header/Header";
import FullBanner from "../FullBanner/FullBanner";
import ILIATContentBlock from "../ILIATContentBlock/ILIATContentBlock";
import ILIATIntroduction from "../ILIATContents/ILIATIntroduction";
import ILIATMemberList from "../ILIATContents/ILIATMemberList";
import ILIATHow from "../ILIATContents/ILIATHow";

export default class CFALayout extends React.Component{
  render() {
    return (
      <div id="cfa">
        <Header />
        <FullBanner/>
        <ILIATContentBlock navigator="true"><ILIATIntroduction/></ILIATContentBlock>
        <ILIATContentBlock background="gray_bg"><ILIATMemberList/></ILIATContentBlock>
        <ILIATContentBlock><ILIATHow/></ILIATContentBlock>
      </div>
    );
  }
}

ReactDOM.render(
  <CFALayout />,
  document.getElementById("content")
);
