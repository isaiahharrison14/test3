const fillShelf = products => {
    getById("pricedItems").innerHTML = "";
    products.forEach(data => {
        const div = getParentElement();
        const productDiv = getProductElement(data);
        const update = getUpdateBtn(data);
        const deleteBtn = getDeleteBtn(data);
    
        div.appendChild(productDiv);
        div.appendChild(update);
        div.appendChild(deleteBtn);
    
        getById("pricedItems").appendChild(div);
    });
}

const getParentElement = () => {
    const div = document.createElement("div");
    div.classList.add("quarterWidth", "flexCol");
    return div;
}

const getProductElement = data => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("flex", "fullSize");
    const price = document.createElement("span");
    price.classList.add("redText", "priceText");
    price.innerText = `$${parseFloat(data.cost).toFixed(2)}`;
    const product = document.createElement("div");
    product.classList.add("shelfedProduct");
    product.style.backgroundImage = `url(${data.image})`;
    productDiv.appendChild(price);
    productDiv.appendChild(product);
    return productDiv;
}

const getUpdateBtn = product => {
    const update = document.createElement("div");
    update.classList.add("btn");
    update.innerText = "Update";
    update.onclick = () => updateProduct(product);
    return update;
}

const getDeleteBtn = product => {
    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add("btn");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => deleteItem(product._id);
    return deleteBtn;
}