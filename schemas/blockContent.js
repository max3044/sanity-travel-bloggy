export default {

    name: 'blockContent',
    type: 'array', // для rich редактора - всегда array (будет преобразоывать наши письки к нормальному html )
    title: 'Block Content',
    
    // может быть только два типа: block и image
    // ВАЖНО! Если ничего не добавлять (просто создать два пустых типа блок и аймадж - у нас будут все функции rich redactor)
    of: [
      {

        
        type: 'block',
        title: "Block",

        // пишем общие стили, которые будут использоваться
        styles: [
            {title: "Normal", value: "normal"},
            {title: "Heading 1", value: "h1"},
            {title: "Heading 2", value: "h2"},
            {title: "Heading 3", value: "h3"},
            {title: "Heading 4", value: "h4"},
            {title: "Quote", value: "blockquote"},
   
        ],

        // стили списков
        lists: [{title: "Bullet", value: "bullet"}],
        
        // инлайн стили (т.е. не с новой строчки, а прямо внутри - типа болд или италик)
        marks: {

            // прописываем стили текста в декораторах
            decorators: [
                {title: "Strongie", value: "strong"},
                {title: "Emphasis", value: "em"}
            ],

            // ссылки
            annotations: [
                {
                    title: "URL", 
                    name: "link", 
                    type: "object",
                    fields: [

                        {
                            title: "URL",
                            name: "href",
                            type: "url",
                        },
                    ]
            },
            ]
        }
        

      },

      {
        type: "image",
        options: {
            hotspot: true,
    }}
    ]
  }