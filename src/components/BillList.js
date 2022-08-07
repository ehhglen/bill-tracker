import React, { Component } from 'react';

class BillList extends Component {
    render() {
        return (
        <div className="billList">
            <div className='header'>
                <form>
                    <input placeholder='enter a bill'></input>
                    <button type='submit'>Add</button>
                </form>
            </div>
         </div>
        );
    }
}

export default BillList;