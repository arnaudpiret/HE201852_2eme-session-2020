ALTER FUNCTION "DBA"."userVerif"(in pseudo char(50),in naissance date )
RETURNS BIT 
BEGIN	
    if (SELECT count(*) FROM tbUser WHERE userPseudo = pseudo AND userNaissance = naissance)>0
    THEN RETURN 1;
    ELSE 
        BEGIN  
        RETURN 0;
        END 
    ENDIF 
END
