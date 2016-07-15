import React from 'react';

import {store} from '../store';
import {actionTypes} from '../reducers/reducer';

import PostBodySectionHeader from './postBodySectionHeader';
import PostBodyCollection from './postBodyCollection';

const handleInputChange = (e, pbName, endpointId) => {
    store.dispatch({
        type: actionTypes.POST_BODY_CHANGED,
        inputVal: e.target.value,
        postBodyParamName: pbName,
        endpointId: endpointId
    });
};

const handleRemoveItem = (pbName, endpointId) => {
    store.dispatch({
        type: actionTypes.REMOVE_ITEM_FROM_POST_BODY_COLLECTION,
        postBodyParamName: pbName,
        endpointId: endpointId
    });
};

const PostBodyItem = ({name, item, endpointId, uiState, displayName, canRemove}) => {
    const uid = `${endpointId}-${displayName}-${name}`;

    if (item.fieldType && item.fieldType !== 'array') {
        return (
            <tr>
                <td>
                    <label htmlFor={uid}>{displayName}</label>
                    {item.description && item.description.length ? <span className={'m-l-1 glyphicon glyphicon-info-sign'} style={{color: 'lightgrey'}} title={item.description}/> : null}
                    {canRemove ?
                        <span
                            className={'m-l-1 glyphicon glyphicon-remove-sign mouse'}
                            onClick={() => (handleRemoveItem(name, endpointId))}
                            title={'Remove Item'}
                        /> : null
                    }
                </td>
                <td>
                    {item.enum && item.enum.length ?
                        <select
                            id={uid}
                            onChange={(e) => (handleInputChange(e, name, endpointId))}
                            value={item.value || '*select*'}
                        >
                            <option disabled={true} value={'*select*'}>{''}</option>
                            {item.enum.map((option, i) => (<option key={i} value={option}>{option}</option>))}
                        </select> :
                        <input
                            id={uid}
                            onChange={(e) => (handleInputChange(e, name, endpointId))}
                            placeholder={item.example}
                            value={item.value}
                        />
                    }
                </td>
            </tr>
        );
    }

    if (item.fieldType === 'array') {
        return (
            <PostBodyCollection
                collection={item.value}
                displayName={displayName}
                endpointId={endpointId}
                propertyName={name}
                schema={item.items}
                uiState={uiState}
            />
        );
    }

    return (
        <PostBodySectionHeader canRemove={canRemove} displayName={displayName} endpointId={endpointId} propertyName={name}>
            {uiState.visible ? Object.keys(item).filter((n) => n !== 'uiState' && n !== 'required' && item[n]).map((itemKey, i) => {
                return (<PostBodyItem
                    canRemove={false}
                    displayName={itemKey}
                    endpointId={endpointId}
                    item={item[itemKey]}
                    itemName={itemKey}
                    key={i}
                    name={`${name ? name + ';' : ''}` + itemKey}
                    uiState={item[itemKey].uiState}
                />);
            }) : null}
        </PostBodySectionHeader>
    );
};

PostBodyItem.displayName = 'Post Body Item';
PostBodyItem.propTypes = {
    canRemove: React.PropTypes.bool.isRequired,
    displayName: React.PropTypes.string.isRequired,
    endpointId: React.PropTypes.number.isRequired,
    item: React.PropTypes.object.isRequired,
    name: React.PropTypes.string.isRequired,
    uiState: React.PropTypes.shape({
        visible: React.PropTypes.bool
    })
};

export default PostBodyItem;
