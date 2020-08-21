import { Business } from './Business.js'
import {  useBusinesses } from './BusinessProvider.js'

export const BusinessList = () => {
    const contentElement = document.getElementById("business_list_new_york");
    const businesses = useBusinesses();

    console.log(businesses);

    var businessHTML = `
        <h2>Businesses</h2>
    `;

    businesses.forEach((business) => {
        businessHTML += Business(business);
    });

    contentElement.innerHTML = businessHTML;

    // Place an article element in your HTML with the class below
    const companySearchResultArticle = document.querySelector(".foundCompanies")

    document
        .querySelector("#companySearch")
        .addEventListener("keypress", keyPressEvent => {
            if (keyPressEvent.charCode === 13) {
                /*
                    When user presses enter, find the matching business.
                    You can use the `.includes()` method strings to
                    see if a smaller string is part of a larger string.

                    Example:
                        business.companyName.includes(keyPressEvent.target.value)
                */

                const businessCompare = (business) => {
                    return business.companyName.includes(keyPressEvent.target.value);
                };
                
                const foundBusiness = businesses.find(businessCompare);
                if(foundBusiness != undefined){
                    companySearchResultArticle.innerHTML = `
                        <h2>
                        ${foundBusiness.companyName}
                        </h2>
                        <section>
                        ${foundBusiness.addressFullStreet}

                        </section>
                        <section>
                        ${foundBusiness.addressCity},
                        ${foundBusiness.addressStateCode}
                        ${foundBusiness.addressZipCode}
                        </section>
                    `;
                }
            }
        });
}