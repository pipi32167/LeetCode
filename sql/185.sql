-- create table Employee (
--   Id int(11),
--   Name varchar(64),
--   Salary int(11),
--   DepartmentId int(11)
-- );

-- insert into Employee (Id, Name, Salary, DepartmentId) values
-- (1  , 'Joe'   , 85000, 1),
-- (2  , 'Henry' , 80000, 2),
-- (3  , 'Sam'   , 60000, 2),
-- (4  , 'Max'   , 90000, 1),
-- (5  , 'Janet' , 69000, 1),
-- (6  , 'Randy' , 85000, 1),
-- (7  , 'Will'  , 70000, 1);

-- create table Department (
--   Id int(11),
--   Name varchar(64)
-- );

insert into Department (Id, Name) values
(1  , 'IT'),
(2  , 'Sales');


-- with top_3 as (

-- );

select *, 
  (case DepartmentId
    when @curDId then @curRow := @curRow + 1
    else @curRow := 1 and @curDId := Id
  end) as rank 
from Employee e, (select @curRow := 0, @curDId := 0)
order by DepartmentId, Salary desc
;
