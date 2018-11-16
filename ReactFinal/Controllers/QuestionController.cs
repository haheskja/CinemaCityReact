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
    public class QuestionController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public QuestionController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<DomainQuestion> Get()
        {
            var ServiceDB = new ServiceDB(_context);
            return ServiceDB.getAllQuestion();
        }

        [HttpPost]
        public List<DomainQuestion> Post([FromBody] DomainQuestion value)
        {
            var ServiceDB = new ServiceDB(_context);
            bool boolean = ServiceDB.addQuestion(value);
            return ServiceDB.getAllQuestion();
        }

        [HttpPost("{id}")]
        public bool Post(int id, [FromBody] Rating rating)
        {
            var ServiceDB = new ServiceDB(_context);
            return ServiceDB.updateRating(rating);
        }
    }
}
