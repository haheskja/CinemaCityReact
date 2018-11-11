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
    public class FAQController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public FAQController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/FAQ
        [HttpGet]
        public List<DomainFaq> Get()
        {
            var ServiceDB = new ServiceDB(_context);
            return ServiceDB.getAllFaq();
        }
    }
}
