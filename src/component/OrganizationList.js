import React, { useState, useEffect } from 'react';
import Organization from './Organization';
import OrganizationService from '../services/OrganizationService';

function OrgList() {
    // OrgList State
    const [orgList, setOrgList] = useState([]);

    useEffect(() => {
        async function loadOrgList() {
            await OrganizationService.findAll().then((data) => {
                setOrgList(data);
            });

            OrganizationService.remove('59a18f2b-2d82-424c-a942-958b09258a1a');
        }

        loadOrgList();
    }, []);

    return (
        <div>
            {orgList.map((org, index) => (
                <Organization key={index} index={index} org={org} />
            ))}
        </div>
    );
}
export default OrgList;
