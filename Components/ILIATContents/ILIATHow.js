import React from "react";
import ILIATButton from "../ILIATButton/ILIATButton";

export default class ILIATHow extends React.Component{
  render(){
    return (
      <article id="iliat_how">
        <h2>Học tại ILIAT như thế nào</h2>
        <h4 className="text-left">Lộ trình tinh gọn. Hiệu quả cao. Chi phí thấp. Học là (đam) &quot;mê&quot;!</h4>
        <div className="iliat_timeline">
          <span className="highlight_hours">213 giờ</span>
          <span className="big_equal_sign">
            <div className="iliat_equal_piece"></div>
            <div className="iliat_equal_piece"></div>
          </span>
          <span className="timetable">
            <h4>20 tuần</h4>
            <h4>3 buổi/tuần</h4>
          </span>
          <span className="vertical_divider"></span>
          <ILIATButton>Lịch học CFA 2016</ILIATButton>
        </div>

        <h4 className="text-left">Học CFA tại ILIAT</h4>

        <div className="row iliat_steps">
          <div className="col-sm-8">
            <div className="row">
              <div className="col-xs-4">
                <div className="iliat_step_arrow">1</div>
                <p className="text-center">Thi thử phỏng vấn đầu vào</p>
              </div>
              <div className="col-xs-4">
                <div className="iliat_step_arrow">2</div>
                <p className="text-center">Học và rèn luyện nghiêm túc hiệu quả</p>
              </div>
              <div className="col-xs-4">
                <div className="iliat_step_arrow">3</div>
                <p className="text-center">Thử thách với các minitest, luyện thi trên máy tính</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
};
