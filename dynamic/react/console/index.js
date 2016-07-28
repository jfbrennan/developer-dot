import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {store} from './store';
import {actionTypes} from './reducers/reducer';

store.subscribe(() => {
    const state = store.getState();
    const error = state.error;

    /* eslint-disable no-console */
    console.log('NEW STATE', state);
    /* eslint-enable no-console */
    render(<App api={state} error={error}/>, document.getElementById('api-console'), () => {
        if (typeof $ !== 'undefined') {
            $('[data-spy="scroll"]').each(function() {
                /* eslint-disable no-invalid-this */
                $(this).scrollspy('refresh');
                /* eslint-enable no-invalid-this */
            });
        }
    });
});

/*
 * Initially render our app on the client to sync it with our server-render.
 * Once rendered, emit an APP_LOADED action so we can do browser-specific behavior.
 * This lets us create a 'Download POSTMAN' button using browser APIs without our client/server
 * isomorphic React getting out of sync (no way to access URL or Blob APIs on the server)!
 */
render(<App api={store.getState()} error={null}/>, document.getElementById('api-console'), () => store.dispatch({type: actionTypes.APP_LOADED}));