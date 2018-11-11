﻿using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ReactFinal.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Header { get; set; }
        public string Text { get; set; }
        public int Rating { get; set; }
    }
}
