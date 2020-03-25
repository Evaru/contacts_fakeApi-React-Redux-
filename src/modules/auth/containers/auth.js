import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Authorization } from '../../../components';
import ContactsListActions from '../../../actions';

class authModule extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          auth: false
        };
    }

    componentWillMount(){
        const { fetchUsers } = this.props
        fetchUsers()
      
    }

    render(){
        const { items, history } = this.props
        return(
            <div>
                <Authorization items={items} history={history}/>
            </div>
        )
    }
}

export default withRouter( connect(
    ({contacts})=>contacts,
    ContactsListActions
 )(authModule))