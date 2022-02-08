// HOMEWORK
let divElement = document.createElement('div');
document.body.prepend(divElement);
divElement.style.display = "flex";
divElement.style.flexWrap = "wrap";

for (let i = 0; i < divElement.length; i++) {
    let articleElement = document.createElement('article');
    articleElement.append(divElement);
    articleElement.style.flexBasis = "25%";
    articleElement.style.flexGrow = "1";
    articleElement.style.padding = ".5%";
    articleElement.style.margin = ".5%";
    articleElement.style.boxShadow = "0 0 10px black";

    let imgElement = document.createElement('img');
    imgElement.append(articleElement);
    imgElement.src = "https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png";
    imgElement.style.width = "100%";
    imgElement.style.marginBottom = "10px";
    let h3Element = document.createElement('h3');
    h3Element.append(imgElement);
    h3Element.textContent = "Sample article";
    let pElement = document.createElement('p');
    pElement.append(h3Element);
    
    pElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate excepturi eaque autem magnam itaque sit aperiam provident enim odio modi ut sapiente doloribus impedit libero unde, tempore aut earum.";
    
    
   
  
}

