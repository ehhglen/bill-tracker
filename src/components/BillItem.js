import React, {Component} from 'react';

class BillItem extends Component {
    createBills(item) {
        return <li key={item.key}> {item.text} </li>
    }
    render() {
        var billEntries = this.props.entries;
        var billItems = billEntries.map(this.createBills);

        return (
            <ul className='theList'>
                {billItems}
            </ul>
        );
    } 

};

export default BillItem