using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EmployeeWebAPIService.Models;

namespace EmployeeWebAPIService.Controllers
{
    public class EmployeesController : ApiController
    {
        public IEnumerable<Employee> Get()
        {
            using (SampleDBEntities entities = new SampleDBEntities())
            {
                return entities.Employees.ToList();
            }
        }

        public Employee Get(string code)
        {
            using (SampleDBEntities entities = new SampleDBEntities())
            {
                return entities.Employees.FirstOrDefault(e => e.code == code);
            }
        }
    }
}
