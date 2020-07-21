import {connect} from "react-redux";
import App from "../App";
import {AppState} from "../store/configureStore";

const mapStateToProps = (state: AppState) => {
    return {
        error: state.app.error
    }
};

export default connect<MapStateType, {}, {}, AppState>(mapStateToProps)(App)

type MapStateType = {
    error: string | null
}