DROP FUNCTION IF EXISTS getNthHighestSalary;
DELIMITER ;;

CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  DECLARE res INT;
  IF (SELECT COUNT(DISTINCT(Salary)) FROM `Employee` ORDER BY Salary) >= N THEN
    SELECT a.Salary INTO res FROM (
        SELECT DISTINCT(Salary) FROM `Employee` ORDER BY Salary DESC LIMIT N
    ) AS a ORDER BY a.Salary LIMIT 1;
  END IF;
  RETURN res;
END
;;
DELIMITER ;

select 
getNthHighestSalary(1),
getNthHighestSalary(3),
getNthHighestSalary(4);

        SELECT DISTINCT(Salary) FROM `Employee` ORDER BY Salary DESC LIMIT 3;
        
    SELECT a.Salary FROM (
        SELECT DISTINCT(Salary) FROM `Employee` ORDER BY Salary DESC LIMIT 3
    ) AS a ORDER BY a.Salary LIMIT 1;