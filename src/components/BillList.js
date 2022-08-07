import React, { Component } from 'react';

class BillList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addBill = this.addBill.bind(this);
    }    

    addBill(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

        this._inputElement.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();
    };


    render() {
        return (
        <div className="billList">
            <div className='header'>
                <form onSubmit={this.addBill}>
                    <input ref={ (a) => this._inputElement = a} placeholder='enter a bill'>
                    </input>
                    <button type='submit'>Add</button>
                </form>
            </div>
         </div>
        );
    }
}

export default BillList;