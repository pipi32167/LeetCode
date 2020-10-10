# Write your MySQL query statement below


with high_dates as (
  select 
    id, visit_date, people,
    if(@before_high >= 2 and people >= 100, 1, 0) as high,
    @before_high := if(people >= 100, @before_high + 1, 0) as high_days
  from stadium s, (select @before_high := 0) t
  order by id
)
select id, visit_date, people 
from high_dates 
where high = 1 
  or (id + 1) in (select id from high_dates where high_days = 3) 
  or (id + 2) in (select id from high_dates where high_days = 3)
;