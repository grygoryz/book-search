import {connect} from "react-redux";
import App from "../App";

const mapStateToProps = (state) => {
    return {
        error: state.app.error
    }
};

export default connect(mapStateToProps)(App)