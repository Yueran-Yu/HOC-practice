import React from 'react';

const withData = (WrappedComponent, dataSource) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: []
      }
    }

    componentDidMount() {
      fetch(this.props.dataSource)
        .then(res => res.json())
        .then(data => this.setState({data: data.slice(0, 5)}))
    }

    render() {
      const {...otherProps} = this.props
      return this.state.data.length < 1? 'LOADING...': <WrappedComponent data={this.state.data} {...otherProps} />
    }
  }
  return WithData;
}

export default withData;