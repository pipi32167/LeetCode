
SELECT t4.rank, t4.Score FROM Scores AS t3 LEFT JOIN 
(
	SELECT @rank:= @rank+1 AS rank, Score FROM 
		(SELECT DISTINCT(Score) AS Score FROM Scores ORDER BY Score DESC ) t1,
		(SELECT @rank:=0) t2
) t4 ON (t3.Score = t4.Score) ORDER BY rank;