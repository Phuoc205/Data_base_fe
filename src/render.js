import CartItem from './components/CartItem/CartItem.js'

function renderCartItem(apiUrl) {

    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                <CartItem
                    props = {product}
                />
            });
        })
        .catch(error => console.error('Lỗi khi lấy sản phẩm:', error));
}

export default renderCartItem