Drop Table If Exists Employee;
Create table If Not Exists Employee (Id int, Name varchar(255), Salary int, ManagerId int);
Truncate table Employee;
insert into Employee (Id, Name, Salary, ManagerId) values ('1', 'Joe', '70000', '3');
insert into Employee (Id, Name, Salary, ManagerId) values ('2', 'Henry', '80000', '4');
insert into Employee (Id, Name, Salary, ManagerId) values ('3', 'Sam', '60000', null);
insert into Employee (Id, Name, Salary, ManagerId) values ('4', 'Max', '90000', null);

-- psql
with EmployeeManager as (
  select * from Employee where Id in (select ManagerId from Employee)
)
select e.Name as Employee
from Employee e, EmployeeManager em
where e.ManagerId = em.Id and e.Salary > em.Salary;


-- mysql@5.7
select e.Name as Employee
from  Employee e, (select * from Employee where Id in (select ManagerId from Employee)) em
where e.ManagerId = em.Id and e.Salary > em.Salary;