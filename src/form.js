import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor() {
        super();
    }
    submit = (event) => {
        event.preventDefault();
        if (!Number(document.getElementsByName("age")[0].value)) {
            alert("Not a valid number!");
        } else {
            document.getElementsByTagName("form")[0].submit();
        }
    }

    render() {
        return (
            <div>
                <form id="f" onSubmit={this.submit}>
                    <input type="text" name="age"/>
                    <input type="submit" value="fnjkdsfnsjkd"/>
                </form>
            </div>
        );
    }
}
export default Form;