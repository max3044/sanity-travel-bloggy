export default {


    name: "category",
    type: "document",
    title: "Category",
    fields: [

        {
           name: "title",
           type: "string",
           title: "Title"
        },
        {
            
            name: "description",
            type: "text", // большое описание (тоже строка, но большая)
            title: "Description"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {

                hotspot: true,
            }

         },

    ]


}