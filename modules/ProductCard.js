class ProductCard{
    constructor({ name, imgUrl}){
      this.name = name;
      this.imgUrl = imgUrl;     
      return this.render();
    }
    render(){

      const cardDiv = document.createElement('div');
      cardDiv.setAttribute('class', 'productCard');
     

      const image = document.createElement('img');
      image.setAttribute('src', this.imgUrl);
      image.setAttribute('alt', `${this.name} productCard`); 
      image.setAttribute('width', '100%');
      

  
      const infoDiv = document.createElement('div');
      infoDiv.setAttribute('class', 'infoDiv');      
  
      const productName = document.createElement('p');
      productName.textContent = `${this.name}`;   
  
      infoDiv.append(productName);      
  
      cardDiv.append(image, infoDiv);
  
      return cardDiv;
    }
  }
  
  export default ProductCard;