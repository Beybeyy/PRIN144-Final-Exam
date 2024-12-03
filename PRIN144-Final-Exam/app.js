const menuItems = [
    {
        "id": 1,
        "menu": "Burger",
        "category": "Mains",
        "price": 5.99,
        "is_available": true,
        "preparation_time": 10
    },
    {
        "id": 2,
        "menu": "Fries",
        "category": "Sides",
        "price": 2.50,
        "is_available": true,
        "preparation_time": 5
    },
    {
        "id": 3,
        "menu": "Tapsilog",
        "category": "Mains",
        "price": 7.99,
        "is_available": true,
        "preparation_time": 10
    },
    {
        "id": 4,
        "menu": "Siopao",
        "category": "Sides",
        "price": 3.99,
        "is_available": false,
        "preparation_time": 5
    }
];

// Function to render menu items dynamically
function renderMenuItems(items) {
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.innerHTML = ''; // Clear the container before adding new items

    items.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');
        
        menuItemElement.innerHTML = `
            <h3>${item.menu}</h3>
            <p><strong>Category:</strong> ${item.category}</p>
            <p class="price"><strong>Price:</strong> $${item.price.toFixed(2)}</p>
            <p class="availability ${item.is_available ? '' : 'false'}"><strong>Availability:</strong> ${item.is_available ? 'Available' : 'Unavailable'}</p>
            <p><strong>Preparation Time:</strong> ${item.preparation_time} minutes</p>
        `;
        
        menuContainer.appendChild(menuItemElement);
    });
}

// Initial call to render menu items
renderMenuItems(menuItems);
