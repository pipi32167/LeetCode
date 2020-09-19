-- -- # Write your MySQL query statement below
-- with 
-- buyer_info as (
--   select s.buyer_id, group_concat(p.product_name) as product_names
--   from Sales s, Product p
--   where s.product_id = p.product_id
--   group by s.buyer_id
-- )
-- select buyer_id
-- from buyer_info
-- where instr(product_names, 'S8') > 0 and instr(product_names, 'iPhone') = 0;

with 
buyer_info as (
  select 
    s.buyer_id, 
    sum(if(p.product_name = 'S8', 1, 0)) as S8,
    sum(if(p.product_name = 'iPhone', 1, 0)) as iPhone
  from Sales s, Product p
  where s.product_id = p.product_id
  group by s.buyer_id
)
select buyer_id
from buyer_info
where S8 > 0 and iPhone = 0;