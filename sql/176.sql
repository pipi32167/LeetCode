-- Create table If Not Exists Employee (Id int, Salary int);
Truncate table Employee;
insert into Employee (Id, Salary) values ('1', '100');
insert into Employee (Id, Salary) values ('2', '200');
insert into Employee (Id, Salary) values ('3', '300');

-- psql
with employee_by_rank as (
  select *, rank() over(order by Salary desc) as r from Employee
)
select Salary as SecondHighestSalary from employee_by_rank where rank = 2;

-- mysql@8
with employee_by_rank as (
  select *, rank() over w as `rank` from Employee window w as (order by Salary desc)
)
select Salary as SecondHighestSalary from employee_by_rank where `rank` = 2;

-- mysql@5.7
select if(
  (select count(distinct Salary) >= 2 from Employee),
  (select distinct Salary from Employee order by Salary desc limit 1 offset 1 ),
  null
) as SecondHighestSalary;