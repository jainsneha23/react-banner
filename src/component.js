import React from 'react';
import './component.less';

class Banner extends React.Component {
  render() {
    return <div className="banner">
      <img src={this.props.imgsrc} alt={this.props.alt} />
    </div>;
  }
}

Banner.propTypes = {
  imgsrc: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired
};

export default Banner;
