import { v4 as uuidv4 } from 'uuid';
import GlobalVariable from '../common/GlobalVariable';

/* global chrome */

/**
 * @description Method used for retrieving all available organization
 *              data.
 * @return {Promise} Organzation
 */
const findAll = () => {
    let orgList = new Promise((resolve, reject) => {
        chrome.storage.sync.get([GlobalVariable.ORGANIZATION], (data) => {
            let error = chrome.runtime.lastError;
            if (error) {
                reject(error);
            } else {
                resolve(data.organization);
            }
        });
    });

    return orgList;
};

/**
 * @description Method used for saving data to chrome local storage.
 * @return {Object} Organzation
 */
const save = (data) => {
    if (!data) return;
    let orgId = uuidv4();

    isExist(orgId).then(
        (dataResponse) => {
            if (!dataResponse) return;
            for (let [key, value] of dataResponse.entries()) {
                if (key === false) {
                    let toInsertData = {};
                    toInsertData[orgId] = data;
                    value.push(toInsertData);
                    console.log(value);
                    chrome.storage.sync.set({
                        organization: value,
                    });
                }
            }
        },
        (error) => {
            console.error(error);
        }
    );
};

/**
 * @description  Method used for saving data to chrome local storage.
 * @return {Promise} Map of status and organization data.
 */
const isExist = (id) => {
    let status = new Promise((resolve, reject) => {
        findAll().then(
            (data) => {
                if (!data) return;

                let returnObj = new Map();
                data.forEach((element) => {
                    Object.entries(element).map(([key, value]) => {
                        if (id === key) {
                            resolve(returnObj.set(true, data));
                        } else {
                            resolve(returnObj.set(false, data));
                        }
                    });
                });
            },
            (error) => {
                reject(error);
            }
        );
    });
    return status;
};

/**
 * @description  Method used for removing data from chrome local storage
 *              using its id.
 */
const remove = (index) => {
    findAll().then(
        (data) => {
            if (!data) return;
            if (index > -1) {
                data.splice(index, 1);
                chrome.storage.sync.set({
                    organization: data,
                });
            }
        },
        (error) => {
            console.error(error);
        }
    );
};

export default { findAll, save, isExist, remove };
