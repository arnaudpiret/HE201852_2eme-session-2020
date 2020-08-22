ALTER PROCEDURE "DBA"."incrementId"()
BEGIN
    DECLARE i char(3) ;
	SET i=(select count(*) from tbUser where userId >0)+1;
    RETURN i;
END
