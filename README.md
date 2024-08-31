![stars][stars] ![watchers][watchers] ![forks][forks] ![issues][issues] ![pull_requests][pull_requests] ![branches][branches]

# shyle
Shyle is a modern, responsive CSS framework with custom JavaScript components, similar to Bootstrap. It offers enhanced features and flexibility for building web interfaces.

---

## Installation:
1. Via NPM:
    ```bash
    npm install shyle
    ```
1. Via CDN:
    ```html
    <!-- CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/shyle@0.1.0/dist/shyle.css">

    <!-- JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/shyle@0.1.0/dist/index.js"></script>
    ```

## Usage:
1. CSS:
    - Use Shyle's CSS classes to style your components:
        ```html
        <button class="btn">Button</button>
        ```
2. JavaScript:
    - Shyle includes interactive components like Modals and Tooltips. Initialize them as follows:
        Modal:
        ```html
        <!-- Modal -->
        <button class="btn shyle-modal-trigger">Open Modal</button>

        <div id="shyleModal" class="shyle-modal">
            <div class="shyle-modal-dialog">
                <button class="shyle-modal-close">&times;</button>

                <p>This is a modal!</p>
            </div>
        </div>
        ```

        Tooltip:
        ```html
        <button class="btn" data-tooltip="This is a tooltip!">Hover me</button>
        ```
---

## Contributing:
Contributions are welcome! Please open an issue or submit a pull request.

> [!IMPORTANT]
> Prerequisites:
> - [NodeJS `v20.11.0`](https://nodejs.org/download/release/v20.17.0/)

1. Install packages:
    ```bash
    npm ci
    ```
1. some guide:
    ```bash
    some command
    ```
1. Test:
    ```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Shyle Test</title>
    <link rel="stylesheet" href="../dist/shyle.css">
    </head>

    <body>
    
    <!-- ... your code here -->

    <script src="../dist/index.js"></script>
    </body>

    </html>
    ```

<!-- ## Useful links:

- [a](#) -->

[forks]: https://img.shields.io/github/forks/dudushy/shyle
[stars]: https://img.shields.io/github/stars/dudushy/shyle
[watchers]: https://img.shields.io/github/watchers/dudushy/shyle
[issues]: https://badgen.net/github/issues/dudushy/shyle
[pull_requests]: https://badgen.net/github/prs/dudushy/shyle
[branches]: https://badgen.net/github/branches/dudushy/shyle
