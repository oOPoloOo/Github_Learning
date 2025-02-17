class ProductCard{
    constructor({ name, imgUrl, category = null, price = null}){
      this.name = name;
      this.imgUrl = imgUrl;     
      this.category = category;     
      this.price = price;     
      return this.render();
    }
    render(){

      const cardDiv = document.createElement('div');
      cardDiv.setAttribute('class', 'productCard');
      if(this.category != null)        
        cardDiv.classList.add(this.category);
     

      const image = document.createElement('img');
      image.setAttribute('src', this.imgUrl);
      image.setAttribute('alt', `${this.name} productCard`);      
      image.setAttribute('width', '100%');
      

  
      const infoDiv = document.createElement('div');
      infoDiv.setAttribute('class', 'infoDiv'); 
       
  
      const productName = document.createElement('p');
      productName.textContent = `${this.name}`;         
      if(this.price != null)
      {
        const goodPrice = document.createElement('p');
        goodPrice.textContent = `${this.price}`;        

        infoDiv.append(productName, goodPrice); 
      } else
      {
        infoDiv.append(productName);      

      }        
  
      cardDiv.append(image, infoDiv);
  
      return cardDiv;
    }
  }
  
export default ProductCard;