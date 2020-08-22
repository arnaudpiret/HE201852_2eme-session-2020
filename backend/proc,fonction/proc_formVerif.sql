ALTER PROCEDURE "DBA"."proc_formVerif"(in pseudo char(50),in naissance date)
BEGIN
    IF userVerif(pseudo, naissance) = 0 
THEN 
insert into "dba"."tbUser"("userId","userPseudo","userNaissance","userPbMemoireId","userPbReflexId") VALUES(incrementId(),pseudo,naissance);
    ENDIF
END
