# Write your MySQL query statement below

-- with 
-- salary_order as (
--   select 
--     DepartmentId,
--     Salary
--   from Employee
--   group by DepartmentId, Salary
--   order by DepartmentId, Salary desc
-- ),
-- salary_ranks as (
--   select 
--     DepartmentId,
--     Salary,
--     if(
--       @beforeDeptId = DepartmentId,
--       @rank := @rank + 1,
--       @rank := 1
--     ) as r,
--     @beforeDeptId := DepartmentId
--   from salary_order, (select @rank := 1, @beforeDeptId := 0) t
-- ),
-- top_3_salary as (
--   select 
--     DepartmentId,
--     min(Salary) as top_3_salary
--   from salary_ranks 
--   where r <= 3
--   group by DepartmentId 
-- )
-- select 
--   d.Name as Department,
--   e.Name as Employee,
--   e.Salary
-- from Department d, Employee e, top_3_salary t
-- where e.Salary >= t.top_3_salary and d.Id = e.DepartmentId and d.Id = t.DepartmentId;

with 
salary_ranks as (
  select 
    DepartmentId,
    Salary,
    if(
      @beforeDeptId <> DepartmentId,
      @rank := 1,
      if( 
        @beforeSalary = Salary,
        @rank,
        @rank := @rank + 1
      )
    ) as r,
    @beforeDeptId := DepartmentId,
    @beforeSalary := Salary
  from Employee, (select @rank := 1, @beforeDeptId := 0, @beforeSalary := 0) t
  order by DepartmentId, Salary desc
),
top_3_salary as (
  select 
    DepartmentId,
    min(Salary) as top_3_salary
  from salary_ranks 
  where r <= 3
  group by DepartmentId 
)
select 
  d.Name as Department,
  e.Name as Employee,
  e.Salary
from Department d, Employee e, top_3_salary t
where e.Salary >= t.top_3_salary and d.Id = e.DepartmentId and d.Id = t.DepartmentId;