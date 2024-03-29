(function(){
    function makeVCard({ name, org, title, phone, address, email, url }) {
        const vCard = `BEGIN:VCARD
VERSION:3.0
${name ? `FN:${name}` : ""}
${org ? `ORG:${org}` : ""}
${title ? `TITLE:${title}` : ""}
${phone ? `TEL;TYPE=WORK,VOICE:${phone}` : ""}
${address ? `ADR;TYPE=WORK,PREF:;;${address}`: ""}
${email ? `EMAIL:${email}` : ""}
${url ? `URL:${url}` : ""}
REV:${new Date().toISOString()}
END:VCARD`;
        return vCard;
    }


    function createVCard(contact){
        const newLink = document.createElement('a');
        const vcard = makeVCard(contact)
        const blob = new Blob([vcard], { type: "text/vcard" });

        newLink.href = URL.createObjectURL(blob);
        newLink.download = `${contact.name}_vcard.vcf`;
        newLink.click();

        URL.revokeObjectURL(newLink.href);
    }

    // create one of these per contact
    document.getElementById("bobContactButton").addEventListener("click", () => {
        const contact = {
            name: "John Smith",
            phone: "555-555-5555",
            email: "john@example.com",
            url: "http://google.com"
        };

        createVCard(contact)
    });


    // create one of these per contact
    document.getElementById("sallyContactButton").addEventListener("click", () => {
        const contact = {
            name: "John Smith",
            phone: "555-555-5555",
            email: "john@example.com",
            url: "http://google.com"
        };

        createVCard(contact)
    });
}())