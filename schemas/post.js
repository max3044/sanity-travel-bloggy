
const getPosition = (options) => {
    // navigator - объект, отвечающий за геолокацию в браузере
    if (navigator.geolocation) {

        return new Promise((resolve, reject) => {

            navigator.geolocation.getCurrentPosition(
                
                // success callback
                resolve, 
                
                // error callback
                reject, 
                
                // options
                options
                )
        }
        )
    }
}

export default {


    name: "post",
    type: "document",
    title: "Blog Post",
    initialValue: async ()=> ({

        location: await getPosition().

        // 
        then(({coords})=> {
            
            // распаковываем то что получили из нашего getPosition
            const {latitude, longitude, altitude} = coords 

            return {
                // возвращаем всё, что требуется для geopoint (тип указываем _type)
                _type: "geopoint",
                lat: latitude,
                lng: longitude,
                alt: altitude || undefined

            }}
            
            )
        .catch(()=>undefined())

    }),// default значение
    fields: [


        // {
        //     name: "",
        //     type: "",
        //     title: ""
        // },


        // нужно плагин скачать 
        // npm i sanity-plugin-leaflet-input
        {
            name: "location",
            type: "geopoint", 
            title: "Location"
        },

        {
            name: "title",
            type: "string",
            title: "Title"
        },

        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {

                source: "title", // какое поле используем для slugify
                maxLength: 96,
            }
        },

      
        {
            name: "author",
            type: "reference", // типа foreianKey
            title: "Author",
            to: {type: "author"} // куда отсылаем
        },

        {
            name: "mainImage",
            type: "image",
            title: "Main Image",
            options: {

                hotspot: true, // прикольно для модификации в админке
            },

        },

         {
            name: "categories",
            type: "array", // если тип сделаем reference будет типа manyToMany 
            title: "Categories",
            of: [{type: "reference", to: {type: "category"}}],
            validation: Rule => Rule.unique()

        },


        {

            name: "publishedAt", 
            type: "datetime",
            title: "Published At",
        },

        {
            name: "body",
            type: "blockContent",
            title: "Body"
        }




    ]
    

}