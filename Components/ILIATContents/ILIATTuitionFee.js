import React from "react";

export default class ILIATTuitionFee extends React.Component{
  render(){
    return (
      <article id="fee">
        <h2>Học phí và ưu đãi</h2>
        <div className="row">
          <div className="col-sm-5">
            <p className="text-center">Dành cho sinh viên</p>
            <div className="price_tag">
              <div className="price_tag_content">
                <p><s>8.000.000VND</s></p>
                <h3><strong>7.000.000VND</strong></h3>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <p className="text-center">Dành cho người đi làm</p>
            <div className="price_tag">
              <div className="price_tag_content">
                <h3><strong>8.000.000VND</strong></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-7">
            <p>- Với những học viên đã đăng ký thi: sẽ được học 2 tháng intensive miễn phí (CFA100 class) để đảm bảo các bạn được ôn tập lại một cách kỹ càng và có chiến lược thi phù hợp nhất.</p>
            <p>- Với những học viên chưa có ý định thi ngay: được học lại 1 lần miễn phí</p>
          </div>
        </div>
      </article>
    );
  }
};
