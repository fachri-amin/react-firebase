import './Dashboard.scss';
import { connect } from 'react-redux';

const Dashboard = (props) => {
    return (
        <div>
            <p>ini Dashboard</p>
            <p>{props.user.email}</p>
            <p>{props.user.uid}</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
})

export default connect(mapStateToProps, null)(Dashboard);