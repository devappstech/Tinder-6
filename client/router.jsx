const {Router, Route,IndexRoute} = ReactRouter;
const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)();
Meteor.startup(function () {
    ReactDOM.render(
        <Router history={history}>
            <Route name="root" component={AppBody}>
                <IndexRoute component={AppLoading} />
                <Route name="home" path="/" component={Home} />
                <Route name="other" path="/other" component={Other} />
                <Route name="settings" path="/settings" component={Settings} />
                <Route path="*" component={AppNotFound} />
            </Route>
        </Router>,
        document.getElementById("app")
    );
});