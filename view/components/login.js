import React from 'react';


export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            user: {name: ''},
            stylePath: '../view/components/login.css'
        };
    }
    handleChange(e) {
        e.preventDefault();
        this.setState({user: {name: e.target.value}});
    }

    handleLogin(e) {
        e.preventDefault();
        this.props.doLogin(this.state.user);
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" type="text/css" href={this.state.stylePath} />
                <div className="container">
                    <div className="card card-container">
                        <form className="form-signin" onSubmit={this.handleLogin}>
                            <input type="text" id="inputName" className="form-control" placeholder="Nombre" onChange={this.handleChange} value={this.state.name} required autoFocus />
                            <button className="btn btn-lg btn-success btn-block btn-signin" type="submit">Iniciar Sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};
