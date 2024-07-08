SELECT products.product_name as product_name, order_details.quantity as quantity
FROM
    order_details
    LEFT JOIN orders ON order_details.order_id = orders.order_id
    LEFT JOIN products ON order_details.product_id = products.product_id
WHERE
    order_date between '2016-01-01' AND '2016-12-31'
group by
    order_details.quantity
order by order_details.quantity DESC
LIMIT 5