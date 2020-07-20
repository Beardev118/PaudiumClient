const BrowserHistory = require('react-router/lib/BrowserHistory').default;

const App = React.createClass({
    render: () => {
        return (
            <div><button onClick={BrowserHistory.goBack}>Go Back</button></div>
        );
    }
});

React.render((
    <Router history={BrowserHistory}>
        <Route path="/" component={App} />
    </Router>
), document.body);