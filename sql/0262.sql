# Write your MySQL query statement below

with 
not_banned_user_ids as (
  select users_id from users where Banned = 'No'
),
trips2 as (
  select * from trips 
  where client_id in (select * from not_banned_user_ids)
        and driver_id in (select * from not_banned_user_ids)
)
select 
  Request_at as Day,
  round(sum(if(status <> 'completed', 1, 0)) / count(1), 2) as 'Cancellation Rate' 
from trips2 
where Request_at between '2013-10-01' and '2013-10-03'
group by Request_at;
