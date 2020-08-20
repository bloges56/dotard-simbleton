import { Business } from './Business.js'
import {  useBusinesses } from './BusinessProvider.js'

export const BusinessList = () => {
    const contentElement = document.getElementById("business_list_new_york");
    const businesses = useBusinesses;

    console.log(businesses);

    var businessHTML = `
        <h2>New York Businesses</h2>
    `;

    businesses.forEach((business) => {
        businessHTML += Business(business);
    });

    contentElement.innerHTML = businessHTML;
}