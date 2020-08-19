import { Business } from './Business.js'
import {  useBusinesses } from './BusinessProvider.js'

export const BusinessList = () => {
    const contentElement = document.getElementById("business_list");
    const businesses = useBusinesses();

    var businessHTML = `
        <h2>Active Businesses</h2>
    `;

    businesses.forEach((business) => {
        businessHTML += Business(business);
    });

    contentElement.innerHTML = businessHTML;
}