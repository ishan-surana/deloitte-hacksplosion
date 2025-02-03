from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3
import datetime

app = Flask(__name__)
CORS(app)

def read_log_file(file_path='logs.log'):
    with open(file_path, 'r') as file:
        lines = file.readlines()
    logs = []
    for line_num, line in enumerate(lines, start=1):
        status = line.strip().split(' ', 1)[0]
        timestamp, message = line.strip().split(' ', 1)[1].split(" - ")

        logs.append({
            'id': line_num,
            'message': message,
            'timestamp': timestamp,
            'status': status.lower()
        })
    return logs

@app.route('/api/logs', methods=['GET'])
def get_logs():
    logs = read_log_file()
    return jsonify(logs)

def get_order_details(order_id):
    conn = sqlite3.connect('data.sqlite3')
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT order_id, customer_name, customer_email, customer_phone, shipping_address, order_date, product_ids, delivery_date, order_status FROM orders WHERE order_id = ?", (order_id,))
        order = cursor.fetchone()
    except Exception as e:
        order = None
    conn.close()
    if order:
        return {
            'id': order[0],
            'customerName': order[1],
            'customerEmail': order[2],
            'customerPhone': order[3],
            'shippingAddress': order[4],
            'orderDate': order[5],
            'productIds': order[6],
            'deliveryDate': order[7],
            'orderStatus': order[8]
        }
    return None

@app.route('/api/order/<int:order_id>', methods=['GET'])
def order_details(order_id):
    order = get_order_details(order_id)
    if order:
        return jsonify(order)
    return jsonify({'error': 'Order not found'})

if __name__ == '__main__':
    app.run(debug=True)
