import React from 'react';
import PropTypes from 'prop-types';
import Button from '../mui-button/Button';
import './Dropdown.css';

class Dropdown extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
    width: PropTypes.string,
  };

  static defaultProps = {
    width: '9em',
  };

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  render() {
    const {width} = this.props;
    return (
      <div>
        <Button
          onClick={() => {}}
          style={{width: width, display: 'inline-flex'}}
        >
          <span>{this.props.children}</span>
          <span style={{marginLeft: 'auto'}}>▼</span>
        </Button>}
      </div>
    );
  }
}

export default Dropdown;
