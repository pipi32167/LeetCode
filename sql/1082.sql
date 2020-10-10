# Write your MySQL query statement below

with 
sales_stats as (
  select seller_id, sum(price) as total_price from Sales group by seller_id order by total_price desc
),
sales_top_1 as (
  select total_price from sales_stats limit 1
)
select seller_id
from sales_stats ss, sales_top_1 st
where ss.total_price = st.total_price;