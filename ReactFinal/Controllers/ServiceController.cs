using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactFinal.Models;

namespace ReactFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public ServiceController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Service
        [HttpGet]
        public List<DomainFaq> Get()
        {
            var ServiceDB = new ServiceDB(_context);
            return ServiceDB.getAllFaq();
        }

        [HttpGet("[action]")]
        public List<DomainQuestion> GetQuestions()
        {
            var ServiceDB = new ServiceDB(_context);
            return ServiceDB.getAllQuestion();
        }
        [HttpPost]
        public bool Post([FromBody] string value)
        {
            var ServiceDB = new ServiceDB(_context);
            return ServiceDB.addRating(Int32.Parse(value));
        }
        [HttpPost("[action]")]
        public bool Add2Rating([FromBody] string value)
        {
            var ServiceDB = new ServiceDB(_context);
            return ServiceDB.add2Rating(Int32.Parse(value));
        }
        [HttpPost("[action]")]
        public bool RemoveRating([FromBody] string value)
        {
            var ServiceDB = new ServiceDB(_context);
            return ServiceDB.removeRating(Int32.Parse(value));
        }
        [HttpPost("[action]")]
        public bool Remove2Rating([FromBody] string value)
        {
            var ServiceDB = new ServiceDB(_context);
            return ServiceDB.remove2Rating(Int32.Parse(value));
        }
        [HttpPost("[action]")]
        public bool AddQuestion([FromBody] DomainQuestion value)
        {
            var ServiceDB = new ServiceDB(_context);
            /*DomainQuestion input = new DomainQuestion()
            {
                Header = "Question header",
                Text = "Question body"
            };*/
            return ServiceDB.addQuestion(value);
        }


















        // GET: api/Service/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        

        // PUT: api/Service/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
