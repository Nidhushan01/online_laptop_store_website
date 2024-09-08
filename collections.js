document.addEventListener("DOMContentLoaded", function () {
    // Search functionality
    const searchInput = document.getElementById("search");
    const productBoxes = document.querySelectorAll(".products-box");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        productBoxes.forEach(box => {
            const productName = box.querySelector("p").textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        });
    });

    // Filter functionality
    const filterInputs = document.querySelectorAll(".filter-section input[type='checkbox']");
    filterInputs.forEach(input => {
        input.addEventListener("change", function () {
            filterProducts();
        });
    });

    function filterProducts() {
        const selectedBrands = Array.from(document.querySelectorAll("input[name='tags'][value='asus']:checked, input[name='tags'][value='lenovo']:checked, input[name='tags'][value='hp']:checked")).map(input => input.value);
        const selectedProcessors = Array.from(document.querySelectorAll("input[name='tags'][value='i3']:checked, input[name='tags'][value='i5']:checked, input[name='tags'][value='i7']:checked, input[name='tags'][value='i9']:checked")).map(input => input.value);
        const selectedArrivals = Array.from(document.querySelectorAll("input[name='tags'][value='new']:checked, input[name='tags'][value='old']:checked")).map(input => input.value);

        productBoxes.forEach(box => {
            const productText = box.querySelector("p").textContent.toLowerCase();
            const brandMatch = selectedBrands.length === 0 || selectedBrands.some(brand => productText.includes(brand));
            const processorMatch = selectedProcessors.length === 0 || selectedProcessors.some(processor => productText.includes(processor));
            const arrivalMatch = selectedArrivals.length === 0 || selectedArrivals.some(arrival => productText.includes(arrival));

            if (brandMatch && processorMatch && arrivalMatch) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        });
    }

    // Side navbar toggle functionality
    const sideNavMenu = document.getElementById("side-navbar-activate");
    const sidenavbar = document.querySelector(".side-navbar");
    const sidenavclose = document.getElementById("side-navbar-close");

    sideNavMenu.addEventListener("click", function () {
        sidenavbar.style.marginLeft = "0px";
    });

    sidenavclose.addEventListener("click", function () {
        sidenavbar.style.marginLeft = "-60%";
    });
});
