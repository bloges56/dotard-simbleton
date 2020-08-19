export const Business = (Business) => {
    return `
        <section id="business">
            <h2 class="business_name">${Business.companyName}</h2>
            <div class="business_address">
                ${Business.addressFullStreet}\n${Business.addressCity},${Business.addressStateCode} ${Business.addressZipCode}
            </div>

        </section>
    `
}