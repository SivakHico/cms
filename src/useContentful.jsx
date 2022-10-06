import { createClient } from "contentful"

export default function useContentful() {
    const client = createClient({
        space: "flewdw23aevu",
        accessToken: "N2mgaQjwzUqKwC-Scq1IH9y_qtJ-dJsc_NisOunPfX8",
        host: "preview.contentful.com"
    })

    const getProducts = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "product",
                select: "fields"
            });
            const sanitizedEntries = entries.items.map((item) => {
                const images = item.fields.images;
                console.log(images)
                return {
                    ...item.fields,
                    images
                };
                
            });
            return sanitizedEntries;
        } catch (error) {
            console.log(`Error fetching authors ${error}`);
        }
    };
    return { getProducts }
}