![[Pasted image 20260719213217.png|316]]

Implement hover detection on a product card that smoothly shows a hidden custom action panel only while mouse pointer remains inside.
```html
<div class="product-card">
  <img src="headphones.jpg" alt="ANC Headphones">
  <h3>Wireless Headphones XL</h3>
  <div class="quick-view" style="display: none;">Quick View Options</div>
</div>
mouseover
mouseout
// YOUR CHALLENGE: Write the JS to:
// 1. Grab reference to the product card container and the quick-view panel
// 2. Add event listener to detect when user hovers into the product card
// 3. inside entry handler: display the quick view container (display = 'block')
// 4. Add event listener to detect when user exits the product card
// 5. inside exit handler: hide the quick view container (display = 'none')
// NOTE: Try to use mouseover / mouseout AND check for flicker issues!

```


>>Solution - 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Card</title>

    <style>
        #image {
            width: 100px;
            height: 100px;
        }

        .product-card {
            width: 300px;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 8px;
            cursor: pointer;
        }

        .quickview {
            display: none;
            margin-top: 10px;
            color: #555;
        }
    </style>
</head>

<body>

    <div class="product-card">
        <img
            id="image"
            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRjGOjPL4DpqSFkDp7wh9RbN_YjSHyr5fuEgW2ZZLgIPt4QoQ3Jxt56lZ9ECMmnAThCSLXj19omfYQV_E5zsOHbfpdsoyOlpvlrw91I-roq5Ey6rB3l_UoD4bs"
            alt="ANC Headphones"
        >

        <h3>Wireless Headphones XL</h3>

        <div class="quickview">
            <strong>Specifications:</strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis aspernatur dicta consectetur perferendis sunt nulla
            pariatur provident culpa sapiente, earum laborum obcaecati
            dignissimos, minima quam? Amet dolorem dignissimos
            voluptatum iste!
        </div>
    </div>

    <script>
        const card = document.querySelector(".product-card");
        const desc = document.querySelector(".quickview");

        card.addEventListener("mouseover", () => {
            desc.style.display = "block";
        });

        card.addEventListener("mouseout", () => {
            desc.style.display = "none";
        });
    </script>

</body>
</html>
```
