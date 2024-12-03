from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample menu data
menu = [
    {"id": 1, "name": "Burger", "category": "Mains", "price": 5.00, "is_available": True, "prep_time": 5},
    {"id": 2, "name": "Fries", "category": "Sides", "price": 2.50, "is_available": True, "prep_time": 3},
    {"id": 3, "name": "Tapsilog", "category": "Mains", "price": 6.00, "is_available": False, "prep_time": 10},
    {"id": 4, "name": "Siopao", "category": "Sides", "price": 1.75, "is_available": True, "prep_time": 3},
    {"id": 5, "name": "Lemonade", "category": "Drinks", "price": 1.50, "is_available": True, "prep_time": 2}
]

@app.route('/api/menu', methods=['GET'])
def get_menu():
    return jsonify(menu)

@app.route('/api/menu/<int:item_id>', methods=['GET'])
def get_menu_item(item_id):
    item = next((x for x in menu if x["id"] == item_id), None)
    if item:
        return jsonify(item)
    return jsonify({"error": "Item not found"}), 404

@app.route('/api/menu', methods=['POST'])
def add_item():
    new_item = request.get_json()
    menu.append(new_item)
    return jsonify(new_item), 201

@app.route('/api/menu/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    item = next((x for x in menu if x["id"] == item_id), None)
    if item:
        data = request.get_json()
        item.update(data)
        return jsonify(item)
    return jsonify({"error": "Item not found"}), 404

@app.route('/api/menu/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    global menu
    menu = [x for x in menu if x["id"] != item_id]
    return jsonify({"message": "Item deleted"}), 200

if __name__ == '__main__':
    app.run(debug=True)
