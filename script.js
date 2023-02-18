const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);


class Form extends React.Component {
    getFormData(e) {
        e.preventDefault();
        let obj = {};
        Array.from(e.target.elements).forEach(el => obj[el.id] = el.value);
        document.getElementById('result').innerHTML = JSON.stringify(obj);
    }

    render() {
        return (
            <form onSubmit={this.getFormData} action="" className="card" id="form_user">
                {<h3 className="card-header">User Form</h3>}
                <label htmlFor="id_input" className="form-label">Enter User ID</label>
                <input type="number" className="form-control" id="id_input" name="id"/>
                <label htmlFor="name_input" className="form-label">Enter User Name</label>
                <input type="text" className="form-control" id="name_input" name="name"/>

                <label htmlFor="nick_input" className="form-label">Enter User Nickname</label>
                <input type="text" className="form-control" id="nick_input" name="username"/>

                <label htmlFor="email_input" className="form-label">Enter User Email</label>
                <input type="email" className="form-control" id="email_input" name="email"/>
                <label htmlFor="phone_input" className="form-label">Enter User Phone</label>
                <input type="text" className="form-control" id="phone_input" name="phone"/>
                <br/>
                <button type="submit" className="btn btn-success">Send User</button>
            </form>
        );
    };
}


class Result1 extends React.Component {
    render() {
        return (
            <div>
                <h3>Return using innerHtml without props</h3>
                <div id={'result'}></div>
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className={'row'}>
                    <div className={'col-12 col-md-6'}>
                        <Form/>
                    </div>
                    <div className="col-12 col-md-6">
                        <Result1/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


root.render(<App />);

