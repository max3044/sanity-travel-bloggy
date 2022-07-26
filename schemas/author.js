export default {


    name: "author",
    title: "Author",
    type: "document",
    fields: [

        {
            name: "username",
            title: "Username",
            type: "string"
        },
        {
            name: "avatar",
            title: "Avatar",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {

                source: "username",
                maxLength: 96
            }
        },
        {
            name: "bio",
            title: "User's Bio",
            type: "blockContent"

        }
    
    ],


    // ТО ЧТО ВИДИМ В UI (всё как в django при переопределении str)
    preview: {

        select: {
            title: "username", // то, что будет показываться как текстовое обозначение объекта
            media: "avatar" // то,что будет идти как фото
        }
    }


}