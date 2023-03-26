class Name:
    def __init__(self, fname, minit, lname):
        self.fname = fname
        self.minit = minit
        self.lname = lname

    def __str__(self):
        return f"{self.fname} {self.minit}. {self.lname}"


class Employee:
    def __init__(self, name, ssn, birth_date, address, job_type):
        self.name = name
        self.ssn = ssn
        self.birth_date = birth_date
        self.address = address
        self.job_type = job_type

class Secretary(Employee):
    def __init__(self, name, ssn, birth_date, address, job_type, typing_speed):
        super().__init__(name, ssn, birth_date, address, job_type)
        self.typing_speed = typing_speed



class Technician(Employee):
    def __init__(self, name, ssn, birth_date, address, job_type, tgrade):
        super().__init__(name, ssn, birth_date, address, job_type)
        self.tgrade = tgrade

class Engineer(Employee):
    def __init__(self, name, ssn, birth_date, address, job_type, eng_type):
        super().__init__(name, ssn, birth_date, address, job_type)
        self.eng_type = eng_type

secretary_name = Name("Sara", "A", "Smith")
secretary = Secretary(secretary_name, "123-45-6789", "1990-01-01", "123 Main St", "Secretary", 80)

technician_name = Name("Tom", "B", "Johnson")
technician = Technician(technician_name, "234-56-7890", "1992-02-02", "234 Elm St", "Technician", 5)

engineer_name = Name("Eva", "C", "Brown")
engineer = Engineer(engineer_name, "345-67-8901", "1994-03-03", "345 Oak St", "Engineer", "Software")

print(f"Secretary's SSN: {secretary.ssn}")
print(f"Engineer's type: {engineer.eng_type}")
