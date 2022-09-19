import { client, Query, Field } from "@tilework/opus"

client.setEndpoint('http://localhost:4000/graphql')

export const getCategoriesAndProducts = async () => {
    const query = new Query("categories", true)
        .addField("name")
        .addField(new Field("products", true)
            .addFieldList(
                ["id",
                 "name",
                 "brand",
                 "gallery",
                 "prices {amount, currency{label}}",
                 "attributes {name, type, items{value}}",
                 "description",
                 "inStock"
                
                ]
            ))
    
    return await client.post(query)
}

export const getCurrencies = async () => {
    const query = new Query("currencies")
        .addField("label")
        .addField("symbol")
    
    return await client.post(query)
}
