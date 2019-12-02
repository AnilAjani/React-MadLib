import React from 'react';
import { Link } from 'react-router-dom';


export const AccountsList = props => {
    if (!props.accounts) {
        return <div>Loading...</div>
    }

    if (!props.accounts.length) {
        return <div className="alert alert-info">No results found</div>;
    }

    return <>
    {/* <div className='alert alert-info'>No Records Found</div> */}
    <table>
        <thead>
            <tr>
                {/* <th> Name</th> */}
                {/* <th> Email</th> */}
                {/* <th> Employee</th> */}
                {/* <th> Department</th> */}
                {/* <th> &nbsp;</th> */}
            </tr>
        </thead>
        <tbody>
        {
            props.accounts.map(account =>
            <tr key={account.id}>
                <td>
                    <Link to={ '/edit/' + account.id  }>
                        { account.word1 }
                    </Link>
                </td>
                <td>I want to { account.word1 }</td>
                <td>So my { account.word2 }</td>
                <td>Can be { account.word3 }</td>
                <td>
                    <button type="button"
                            className="btn btn-sm btn-danger"
                            onClick={e => props.onDelete(account.id) }>
                            X
                    </button>
                </td>
            </tr>
            )
        }
    </tbody>
    </table>
</>
}