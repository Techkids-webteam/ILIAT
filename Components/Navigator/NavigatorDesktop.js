import ILIATButton from "../ILIATButton/ILIATButton";

export default class NavigatorDesktop extends React.Component{
  componentDidMount(){
    // $('body').scrollspy({ target: '#scrollspy' });
    // $('#scrollspy').affix({
    //   offset: {
    //     top: $(window).height + 60,
    //     bottom: function () {
    //       return (this.bottom = 0)//$('.footer').outerHeight(true))
    //     }
    //   }
    // })
  }

  render(){
    return (
      <div className="iliat_navigator_desktop hidden-xs" id="scrollspy">
        <ul className="col-sm-10 col-sm-offset-1 iliat_navigator_list" role="tablist">
          <li><a href="#">Học ở ILIAT có gì hot?</a></li>
          <li className="active"><a href="#">Giảng viên</a></li>
          <li><a href="#">Học ở ILIAT như thế nào?</a></li>
          <li className="highlight"><a href="#">Học phí và ưu đãi</a></li>
          <button>đăng ký ngay</button>
        </ul>
      </div>
    );
  }
};
