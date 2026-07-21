Implement a button listener that switches the background color and updates text in a status panel dynamically when clicked.
<!-- Target HTML Elements -->
```HTML
<button id="theme-btn">Toggle Theme</button>
<div id="status-box">Current: Dark Mode</div>
```
<button id="theme-btn">Toggle Theme</button>

// YOUR CHALLENGE: Write the JavaScript in app.js
// Requirements:
// 1. Grab reference to #theme-btn and #status-box
// 2. Add dynamic click listener using addEventListener()
// 3. Inside the handler:
//    - Toggle a custom class '.light-theme' on document.body
//    - If body contains '.light-theme', update text to "Light Mode"
//    - Otherwise, reset text to "Dark Mode"

![[Pasted image 20260719210207.png]]


# Solution - 

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        body {
            background-color: black;
            color: white;
        }

        .light-mode {
            background-color: white;
            color: black;
        }
    </style>
</head>

<body>

    <button id="theme-btn">Toggle Theme</button>

    <div id="status-box">
        Current: Dark Mode
    </div>

    <script>
        let themeBtn = document.getElementById("theme-btn");
        let statusBox = document.getElementById("status-box");

        themeBtn.addEventListener("click", function () {

            if (document.body.classList.contains("light-mode")) {

                document.body.classList.remove("light-mode");
                statusBox.textContent = "Current: Dark Mode";

            } else {

                document.body.classList.add("light-mode");
                statusBox.textContent = "Current: Light Mode";

            }

        });
    </script>

</body>
</html>
```


