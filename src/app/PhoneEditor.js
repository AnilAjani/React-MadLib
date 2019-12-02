import React from 'react';
import {Phone} from '../models'

export class PhoneEditor extends React.Component {
    phoneTypeOptions = ['home', 'work', 'mobile', 'fax']

    state = {type: '',
            number: ''
}

    render() {
        return <>
            <div className="row mt-4 mb-4">
                <div className="col-3">
                    <select
                        name="newPhone_type"
                        id="newPhone_type"
                        class="form-control"
                        value={this.state.type}
                        onChange={e => this.setState({type: e.target.value})}>
                        <option></option>
                        {this.phoneTypeOptions.map(x => <option key={x}>{x}</option>)}
                    </select>
                </div>
                <div className="col-6">
                    <input
                        type="text"
                        name="newPhone_number"
                        id="newPhone_number"
                        class="form-control"
                        value={this.state.number}
                        onChange={e => this.setState({number: e.target.value})} />
                </div>
                <div className="col-3">
                    <button
                        type="button"
                        className="btn btn-success btn-block"
                        onClick={e => this.onSubmit()}>
                        Add
</button>
                </div>
            </div>

        </>
    }
    onSubmit(){
        this.props.onPhoneAdded(new Phone(this.state.number, this.state.type));
        this.setState({type: '', number: ''})
    }

}