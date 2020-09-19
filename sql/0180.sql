# Write your MySQL query statement below
with consecutive_nums as (
  select 
    Num,  
    @beforeNum,
    @showTimes,
    (case Num 
        when @beforeNum then @showTimes := @showTimes + 1
        else @showTimes := 1
    end) as showTimes,
    @beforeNum := Num
  from Logs, (select @showTimes := 0, @beforeNum := 0) t
)
select distinct(Num) as consecutiveNums from consecutive_nums where showTimes >= 3;