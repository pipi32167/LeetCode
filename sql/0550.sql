# Write your MySQL query statement below

with 
login_1st_day as (
    select player_id, min(event_date) as first_day from Activity group by player_id
),
login_2nd_day as (
    select a.player_id, a.event_date as second_day 
    from Activity a, login_1st_day b 
    where a.player_id = b.player_id and a.event_date = date_add(b.first_day, interval 1 day) 
),
login_2nd_day_player_count as (
    select count(player_id) as cnt from login_2nd_day
),
player_count as (
    select count(player_id) as cnt from login_1st_day
)
select round(a.cnt / b.cnt, 2) as fraction from login_2nd_day_player_count a, player_count b;

-- Create table If Not Exists Activity (player_id int, device_id int, event_date date, games_played int);
-- Truncate table Activity;
-- insert into Activity (player_id, device_id, event_date, games_played) values ('1', '2', '2016-03-01', '5');
-- insert into Activity (player_id, device_id, event_date, games_played) values ('1', '2', '2016-03-02', '6');
-- insert into Activity (player_id, device_id, event_date, games_played) values ('2', '3', '2017-06-25', '1');
-- insert into Activity (player_id, device_id, event_date, games_played) values ('3', '1', '2016-03-02', '0');
-- insert into Activity (player_id, device_id, event_date, games_played) values ('3', '4', '2018-07-03', '5');
