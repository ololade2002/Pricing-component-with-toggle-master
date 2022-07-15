# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Linear Gradient: hsl(236, 72%, 79%) to hsl(237, 63%, 64%)

### Neutral

- Very Light Grayish Blue: hsl(240, 78%, 98%)
- Light Grayish Blue: hsl(234, 14%, 74%)
- Grayish Blue: hsl(233, 13%, 49%)
- Dark Grayish Blue: hsl(232, 13%, 33%)

## Typography

### Body Copy

- Font size: 15px

### Font

- Family: [Montserrat](https://fonts.google.com/specimen/Montserrat)
- Weight: 700

<!-- HTML-->
 <div class="container">
    <div class="wrapper">
      <h1 class="title">Our Pricing</h1>
      <div class="pricing">
        <p>Annually</p>
        <Label class="switch">
          <input type="checkbox" name="" id="toggle">
          <span class="slider"></span>
        </Label>
        <p>Monthly</p>
      </div>
      <div class="pricing-main">
        <div class="pricing-box">
          <p class="box-title">Basic</p>
          <p class="price-annually"> &dollar; <span class="price">199.99</span></p>
          <p class="price-monthly"> &dollar; <span class="price">19.99</span></p>
          <ul>
            <li>500 GB Storage</li>
            <li>2 Users Allowed</li>
            <li>Send up to 3 GB</li>
          </ul>
          <a href="#">Learn More</a>
        </div>
        <div class="pricing-box featured">
          <p class="box-title">Professional</p>
          <p class="price-annually"> &dollar; <span class="price">249.99</span></p>
          <p class="price-monthly"> &dollar; <span class="price">24.99</span></p>
          <ul>
            <li>500 GB Storage</li>
            <li>2 Users Allowed</li>
            <li>Send up to 3 GB</li>
          </ul>
          <a href="#">Learn More</a>
        </div>
        <div class="pricing-box">
          <p class="box-title">Master</p>
          <p class="price-annually"> $ <span class="price">399.99</span></p>
          <p class="price-monthly"> $ <span class="price">39.99</span></p>
          <ul>
            <li>2 TB Storage</li>
            <li>10 Users Allowed</li>
            <li>Send up to 20 GB</li>
          </ul>
          <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  </div>

  <!--CSS-->
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat',
        sans-serif;
    font-size: 15px;
    min-height: 100vh;
    background-color: hsl(240, 78%, 98%);
    /* Bery light grayish blue */
    background-image: url(https://digitshack.com/codepen/mentor9/bg-top.svg),
        url(https://digitshack.com/codepen/mentor9/bg-bottom.svg);
    background-repeat: no-repeat;
    background-position: right top,
        left bottom;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.wrapper {
    text-align: center;
    padding: 60px 20px;
}

.title {
    font-size: 32px;
    color: hsl(233, 13%, 49%);
    /* grayish blue */
}


.switch input {
    opacity: 0;
}

.switch {
    display: inline-block;
    width: 60px;
    height: 32px;
    position: relative;
    cursor: pointer;
}

.slider {
    position: absolute;
    background: linear-gradient(180deg,
            hsl(236, 72%, 79%),
            hsl(237, 63%, 64%));
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
    border-radius: 35px;
}

.slider:hover {
    background: hsl(236, 72%, 79%)
}

.slider::before {
    position: absolute;
    content: '';
    background-color: #fff;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    left: 4px;
    bottom: 4px;
    transition: .4s;
}

input:checked+.slider::before {
    transform: translateX(26px);
}

.pricing {
    color: hsl(234, 14%, 74%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 48px 0;
}

.pricing label {
    margin: 0 20px;
}

.pricing-main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.pricing-box {
    background-color: #FFF;
    padding: 50px 40px;
    border-radius: 12px;
    align-self: center;
}

.box-title {
    color: hsl(233, 13%, 49%);
    /* grayish blue */
    font-size: 18px;
    margin-bottom: 30px;
}

.price-annually,
.price-monthly {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: hsl(232, 13%, 33%);
    /* dark grayish blue */
}

.price-monthly {
    display: none;
}

.price {
    font-size: 65px;
    padding-left: 7px;
}

ul {
    list-style: none;
    padding: 35px 0px;
}

ul li {
    color: hsl(233, 13%, 49%);
    /* grayish blue */
    border-bottom: 1px solid hsl(234, 14%, 74%);
    padding: 18px 0;
}

ul li:first-child {
    border-top: 1px solid hsl(234, 14%, 74%);
}

a {
    border: none;
    background: linear-gradient(180deg,
            hsl(236, 72%, 79%),
            hsl(237, 63%, 64%));
    display: block;
    width: 100%;
    padding: 16px 0;
    border-radius: 7px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: none;
    border: 1px solid transparent;
}

a:hover {
    color: hsl(237, 63%, 64%);
    background: transparent;
    border-color: hsl(237, 63%, 64%);
}

.pricing-box.featured {
    background: linear-gradient(180deg,
            hsl(236, 72%, 79%),
            hsl(237, 63%, 64%));
    transform: scaleX(1.05);
    padding: 80px 40px;
}

.pricing-box.featured p {
    color: #FFF;
}

.pricing-box.featured ul li {
    color: #FFF;
    /* border-color: ; */
}

.pricing-box.featured a {
    background: #FFF;
    color: hsl(237, 63%, 64%);
}

.pricing-box.featured a:hover {
    color: #FFF;
    border-color: #FFF;
    background: transparent;
}

@media only screen and (max-width: 1024px) {
    body {
        font-size: 14px;
    }

    .price {
        font-size: 50px;
    }

    .pricing-box {
        padding: 40px 30px;
    }

    .pricing-box.feautred {
        padding: 70px 30px;
    }
}

@media only screen and (max-width: 820px) {
    .pricing-main {
        grid-template-columns: 1fr;
        row-gap: 30px;
    }

    .price {
        font-size: 50px;
    }

    .pricing-box {
        padding: 50px 50px;
    }

    .pricing-box.featured {
        transform: scaleX(1);
        padding: 50px 50px;
    }
}

<!--JAVASCRIPT-->
let checkBox = document.querySelector('#toggle');
let Monthly = document.querySelectorAll('.price-monthly');
let Yearly = document.querySelectorAll('.price-annually');

checkBox.addEventListener('change', function(){
    if(checkBox.checked){
         Yearly.forEach(price => price.style.display = 'none');
         Monthly.forEach(price => price.style.display = 'flex');
    } else {
       Yearly.forEach(price => price.style.display = 'flex');
         Monthly.forEach(price => price.style.display = 'none');
    }
});




