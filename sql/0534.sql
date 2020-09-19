# Write your MySQL query statement below

-- select 
--   player_id, 
--   event_date, 
--   (select sum(games_played) from Activity b where b.player_id = a.player_id and b.event_date <= a.event_date) as games_played_so_far
-- from Activity a 
-- -- order by player_id, event_date desc
-- ;

with 
sorted_activity as (
  select player_id, event_date, games_played from Activity order by player_id, event_date
),
results as (
  select 
    player_id,
    event_date, 
    if (
      @player_id = player_id, 
      (@games_played_so_far := @games_played_so_far + games_played),
      (@games_played_so_far := games_played)
    )  as games_played_so_far,
    @player_id := player_id
  from sorted_activity a, (select @player_id := 0, @games_played_so_far := 0) t
)
select player_id, event_date, games_played_so_far from results;