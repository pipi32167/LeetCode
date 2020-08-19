# Write your MySQL query statement below
with user_first_login as (
  select user_id, min(activity_date) as first_login_date 
  from Traffic 
  where activity = 'login' 
  group by user_id
)
select date(first_login_date) as login_date, count(1) as user_count
from user_first_login
where date(first_login_date) >= date_sub(date('2019-06-30'), interval 90 day)
group by login_date
order by login_date;