La estructura del blog tiene 
    index.js ( con el listado de articulos publicados )
        [cannonicalURL] (contiene la información a renderizar por cada articulo)

Las consultas a la API de Strapi se hacen

http://localhost:1337/api/blogs

Para un proyecto en especifico, filtrando por la cannonicalURL
http://localhost:1337/api/blogs?filters[cannonicalURL]=${cannonicalURL}

Mas información sobre la API:
https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
