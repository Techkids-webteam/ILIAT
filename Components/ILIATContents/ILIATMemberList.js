import React from "react";

export default class ILIATMemberList extends React.Component{
  componentDidMount(){
    $('.slick_slider').slick({
      slidesToShow: 3,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            slidesToShow: 1
          }
        }
      ]
    });
  }

  render(){
    return (
      <article id="members">
        <h2>Đội ngũ giảng viên ILIAT</h2>
        <div className="row slick_slider">
          <div className="col-sm-4">
            <img className="iliat_member_thumbnail img-circle img-responsive" src="http://placehold.it/280x280"/>
            <h4>Trần Ngọc Thúy</h4>
            <p>- Pass CFA level 3, FRM level 2</p>
            <p>- Giải Nhì cuộc thi CFA® Institute Research Challenge in Vietnam 2013 và nhận CFA® Institute Student Scholarship 2012</p>
            <p>- Học bổng toàn phần và tốt nghiệp xuất sắc ngành phân tích đầu tư tại ĐH Stirling, UK</p>
            <p>- Hiện đang là chuyên viên phân tích đầu tư tại SSI</p>
          </div>
          <div className="col-sm-4">
            <img className="iliat_member_thumbnail img-circle img-responsive" src="http://placehold.it/280x280"/>
            <h4>Trần Ngọc Thúy</h4>
            <p>- Pass CFA level 3, FRM level 2</p>
            <p>- Giải Nhì cuộc thi CFA® Institute Research Challenge in Vietnam 2013 và nhận CFA® Institute Student Scholarship 2012</p>
            <p>- Học bổng toàn phần và tốt nghiệp xuất sắc ngành phân tích đầu tư tại ĐH Stirling, UK</p>
            <p>- Hiện đang là chuyên viên phân tích đầu tư tại SSI</p>
          </div>
          <div className="col-sm-4">
            <img className="iliat_member_thumbnail img-circle img-responsive" src="http://placehold.it/280x280"/>
            <h4>Trần Ngọc Thúy</h4>
            <p>- Pass CFA level 3, FRM level 2</p>
            <p>- Giải Nhì cuộc thi CFA® Institute Research Challenge in Vietnam 2013 và nhận CFA® Institute Student Scholarship 2012</p>
            <p>- Học bổng toàn phần và tốt nghiệp xuất sắc ngành phân tích đầu tư tại ĐH Stirling, UK</p>
            <p>- Hiện đang là chuyên viên phân tích đầu tư tại SSI</p>
          </div>
        </div>
      </article>
    );
  }
};
