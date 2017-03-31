import React from 'react';

export default React.createClass({
    getInitialState() {
        const name = this.getDefaultName(this.props);
        return {
            user: name
        };
    },
    getDefaultName(props) {
       return (props.user && props.user.name)?props.user.name:'anonymous'
    },
    componentWillUpdate(nextProps, nextState) {
        this.setState(() => this.getDefaultName(nextProps));
    },

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12"><h1>Hello {this.state.user}!</h1></div>
                </div>
            </div>
        );
    }
});
