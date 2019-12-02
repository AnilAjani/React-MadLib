import React from 'react'
import { AccountsRepository } from '../api'
import { AccountsList } from './AccountsList'
import { Link } from 'react-router-dom';


export class AccountDashboard extends React.Component {
    accountsRepository = new AccountsRepository();

    state = {
        accounts: undefined
    };
    render() {
        return <>
            <div className="container">
                <Link to="/new" className="btn btn-am btn-success float-right">New MadLib</Link>
                <h1>MadLib</h1>
                <div className="clearfix"></div>
                <AccountsList accounts={this.state.accounts} onDelete={x => this.onDelete(x)} />
            </div>
            <div>

            </div>
        </>
    }
    componentDidMount() {
        this.accountsRepository.getAccounts()
            .then(accounts => this.setState({accounts}))
    }

    onDelete(x) {
        if (window.confirm("Are You Sure")) {
            this.accountsRepository.deleteAccount(x).then((accounts) => {
                this.setState(prevState => {
                    prevState.accounts = prevState.accounts.filter(x => x.id !== x);
                    return prevState;
                });    
            });
        }

    }
}
