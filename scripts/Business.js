export const Business = (Business) => {
    return `
        <section class="business">
            <h2 class="business_name">${Business.companyName}</h2>
            <div class="business_street">
                ${Business.addressFullStreet}
            </div>
            <div class="business_city_state_zip">
            ${Business.addressCity}, ${Business.addressStateCode} ${Business.addressZipCode}
            </div>

        </section>
    `
}