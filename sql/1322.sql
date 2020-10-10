# Write your MySQL query statement below

with ad_stats as (
    select 
        ad_id,
        sum(if(action = 'Clicked', 1, 0)) as clicks,
        sum(if(action = 'Viewed', 1, 0)) as views
    from Ads
    group by ad_id
)
select 
    ad_id,  
    round(if((clicks + views) = 0, 0, clicks / (clicks + views)) * 100, 2) as ctr
from ad_stats
order by ctr desc, ad_id asc;
