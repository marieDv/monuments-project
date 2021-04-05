# The After Monument

## Dev Conventions
**Components:**
* New components are always added to the components folder
* And linked to the footer.js file
**Single Pages:**
* The name of each folder is the creators first name in lowercase
* During the early development phase it is recommended to stay in the folder with your own name on it. This avoid conflicts when developing and testing different components.
* All media content (images/videos/audio) that is used on single pages has to be linked to a subfolder inside the persons folder with the name "media"
* The single page can have a css file with the name "style.css" and a javascript file "main.js" if necessary

## Naming Conventions Development

###### Slots VS Attributes:

**Slots:**
When using any type of text that usually goes directly into the Dom

**Attribues:**
Src / href / alt etc (all native attributes that an element can have)

###### Naming:

Attributes and slot names are always written in lowercase & CamelCase

* content of headlines -> **title**
* content of other text -> **text**
* Adjustable columns ->  **colWidth**
* Src of an Image -> **imgPath**
* Alt attribute of an image -> **altImg**

###### Kebap-case:
* css classes
* Ids
* Component names

###### CamelCase:
* Javascript variables
* Classes

