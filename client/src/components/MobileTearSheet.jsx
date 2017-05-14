import React, {Component} from 'react';
import PropTypes from 'prop-types';



class MobileTearSheet extends Component {

  

  render() {
    const {
      prepareStyles,
    } = this.context.muiTheme;

    const styles = {
      root: {
        marginBottom: 4,
        marginRight: -4,
        maxWidth: 360,
        width: '100%',
      },
      container: {
        border: 'solid 1px #d9d9d9',
        height: this.props.height,
        overflow: 'hidden',
      },
      bottomTear: {
        display: 'block',
        position: 'relative',
        marginTop: -10,
        maxWidth: 450,
      },
    };

    return (
      <div style={prepareStyles(styles.root)}>
        <div style={prepareStyles(styles.container)}>
          {this.props.children}
        </div>
        {/*<img style={prepareStyles(styles.bottomTear)} src="images/bottom-tear.svg" />*/}
      </div>
    );
  }
}
// MobileTearSheet.defaultProps= {
//     height: 500,
//   };

//   MobileTearSheet.propTypes = {
//     children: PropTypes.node,
//     height: PropTypes.number.isRequired,
//   };

  MobileTearSheet.contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };
export default MobileTearSheet;