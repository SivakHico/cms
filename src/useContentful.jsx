import { createClient } from "contentful"

export default function useContentful() {
    const client = createClient({
        space: import.meta.env.VITE_spaceID,
        accessToken: import.meta.env.VITE_accessToken,
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
                // console.log(images)
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