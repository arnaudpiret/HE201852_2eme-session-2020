CREATE TABLE tbPbMemoire (
 userId char(3) NOT NULL,
 PbMemoireId char(3)NULL,
 pbMemoire char(10),
 CONSTRAINT pkuserPbMemoireId PRIMARY KEY (PbMemoireId)
);

CREATE TABLE tbUser (
 userId char(3) NOT NULL,
 userPseudo char(50) NOT NULL,
 userNaissance date NULL,
 userPbMemoireId char(3)NULL,
 userPbReflexId char(3)NULL,
 CONSTRAINT pkUser PRIMARY KEY (userId),
);

CREATE TABLE tbPbReflex (
 userId char(3) NOT NULL,
 PbReflexId char(3)NULL,
 pbReflex char(10),
 pbReflexLast int,
 pbReflexFirst int,
 CONSTRAINT pkPbReflexId PRIMARY KEY (PbReflexId)
);

ALTER TABLE tbPbReflex 
ADD CONSTRAINT fkUserId FOREIGN KEY (userId) REFERENCES tbUser

ALTER TABLE tbPbMemoire
 ADD CONSTRAINT fkUserId FOREIGN KEY (userId) REFERENCES tbUser

ALTER TABLE tbUser
 ADD CONSTRAINT fkuserPbMemoireId FOREIGN KEY (userPbMemoireId) REFERENCES tbPbMemoire

ALTER TABLE tbUser
 ADD CONSTRAINT fkuserPbReflexId FOREIGN KEY (userPbReflexId) REFERENCES tbPbReflex
