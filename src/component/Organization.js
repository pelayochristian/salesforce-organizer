import React from 'react';
import OrganizationService from '../services/OrganizationService';

function Organization({ org, index }) {
    const deleteByIndex = (index) => {
        console.log(index);
        OrganizationService.remove(index);
    };

    return (
        <div key={index} onClick={() => deleteByIndex(index)}>
            {Object.entries(org).map(([key, value]) => [
                <div class="card border-light mb-3" key={key}>
                    <div class="card-header">{value.name}</div>
                    <div class="card-body">
                        <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>,
            ])}
        </div>
    );
}

export default Organization;
