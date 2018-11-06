﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactFinal.Models;

namespace ReactFinal
{
    public class ServiceDB
    {
        private readonly DatabaseContext _context;
        public ServiceDB(DatabaseContext context)
        {
            _context = context;
        }

        public bool addFaq()
        {
            Faq faq = new Faq()
            {
                Question = "Where can I get in contact?",
                Answer = "Send a mail to mail@cinemacity.com"
            };
            try
            {
                _context.Faq.Add(faq);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                return false;
            }
            return true;
        }
        public List<DomainFaq> getAllFaq()
        {
            List<DomainFaq> output = _context.Faq.Select(k => new DomainFaq()
            {
                Id = k.Id,
                Question = k.Question,
                Answer = k.Answer
            }).ToList();
            return output;
        }
        public bool addQuestion()
        {
            Question output = new Question()
            {
                Text = "Where can I do stuff?",
                Rating = 1
            };
            try
            {
                _context.Question.Add(output);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                return false;
            }
            return true;
        }
        public List<DomainQuestion> getAllQuestion()
        {

            List<DomainQuestion> output = _context.Question.Select(k => new DomainQuestion()
            {
                Id = k.Id,
                Header = k.Header,
                Text = k.Text,
                Rating = k.Rating
            }).ToList();
            return output;
        }
        public bool addRating(int Id)
        {

            Question output = _context.Question.Find(Id);
            try
            {
                output.Rating += 1;
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                return false;
            }
            return true;
        }
        public bool add2Rating(int Id)
        {

            Question output = _context.Question.Find(Id);
            try
            {
                output.Rating += 2;
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                return false;
            }
            return true;
        }
        public bool remove2Rating(int Id)
        {

            Question output = _context.Question.Find(Id);
            try
            {
                output.Rating -= 2;
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                return false;
            }
            return true;
        }
        public bool removeRating(int Id)
        {

            Question output = _context.Question.Find(Id);
            try
            {
                output.Rating -= 1;
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                return false;
            }
            return true;
        }
        public bool addQuestion(DomainQuestion input)
        {

            Question questionInput = new Question()
            {
                Header = input.Header,
                Text = input.Text,
                Rating = 1
            };
            try
            {
                _context.Question.Add(questionInput);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                return false;
            }
            return true;
        }
    }
}