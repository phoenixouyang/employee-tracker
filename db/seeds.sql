INSERT INTO departments (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Human Resources"),
       ("Management");

INSERT INTO roles (title, salary, department_id)
VALUES ("President", 250000, 6),
       ("Finance Director", 200000, 6),
       ("Sales Director", 200000, 6),
       ("Operations Director", 200000, 6),
       ("Executive Assistant", 80000, 6),
       ("Sales Manager", 120000, 1),
       ("Sales Representative", 95000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Junior Developer", 80000, 2),
       ("Finance Manager", 120000, 3),
       ("Financial Analyst", 90000, 3),
       ("Accountant", 60000, 3),
       ("Legal Team Lead", 180000, 4),
       ("Lawyer", 150000, 4),
       ("Human Resource Manager", 100000, 5),
       ("Human Resource Associate", 60000, 5);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Phoenix", "Ouyang", 1, NULL),
       ("David", "Wallace", 2, 1),
       ("Jan", "Levinson", 3, 1),
       ("Robert", "California", 4, 1),
       ("Yoo", "Jae-suk", 5, 1),
       ("Michael", "Scott", 6, 3),
       ("Jim", "Halpert", 7, 6),
       ("Dwight", "Schrute", 7, 6),
       ("Phyllis", "Lapin-Vance", 7, 6),
       ("Harry", "Potter", 8, 1),
       ("Hermione", "Granger", 9, 8),
       ("Ron", "Weasley", 9, 8),
       ("Luna", "Lovegood", 10, 8),
       ("Tanjiro", "Kamado", 11, 2),
       ("Zenitsu", "Agatsuma", 12, 11),
       ("Inosuke", "Hashibira", 12, 11)
       ("Nezuko", "Kamado", 13, 11),
       ("Joey", "Tribbiani", 14, 4),
       ("Rachel", "Green", 15, 14),
       ("Solar", "Kim", 16, 4),
       ("Moon", "Byul", 17, 16),
       ("Wheein", "Jung", 17, 16),
       ("Hwasa", "Ahn", 17, 16);
